import {
  PaymentElement,
  LinkAuthenticationElement,
} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";
import { ArrowRight1 } from "../icons/ArrowRight1";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  setupPaymentForOrder,
  updatePaymentForOrder,
} from "../redux/app/orders/orderSlice";
import CustomLoader from "./CustomLoader/CustomLoader";
import { Line } from "./Line/Line";
import { ShowCustomErrorModal } from "./ErrorAlert/ErrorAlert";

// Constants for storing setup and order state in localStorage during payment processing
const SETUP_STATE_KEY = "stripe_setup_state";
const ORDER_STATE_KEY = "stripe_order_state";
const MOBILE_REDIRECT_KEY = "stripe_mobile_redirect";

// 3DS Authentication status constants
const AUTH_STATUSES = {
  REQUIRES_ACTION: "requires_action",
  REQUIRES_PAYMENT_METHOD: "requires_payment_method",
  REQUIRES_CONFIRMATION: "requires_confirmation",
  SUCCEEDED: "succeeded",
  PROCESSING: "processing",
  CANCELED: "canceled",
};

// Detect if running on mobile browser
const isMobileBrowser = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
};

/**
 * CheckoutForm Component
 * Handles the payment setup process using Stripe Elements
 * Supports both new payment setup and editing existing payment methods
 * Includes full 3DS and 3DS2 support for both desktop and mobile
 *
 * @param {string} stripeCustomerId - The Stripe customer ID for the current user
 */
const CheckoutForm = ({ stripeCustomerId }) => {
  // Initialize Stripe hooks and state
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Get user profile and order state from Redux store
  const user = useSelector((state) => state.account.profile);
  const orderError = useSelector((state) => state.orders.orderError);
  const orderStatus = useSelector((state) => state.orders.orderStatus);
  const [email, setEmail] = useState(user?.data?.email);

  // Initialize hooks for routing, translations, and Redux
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  // State for tracking setup process
  const [isConfirmSetUpLoading, setIsConfirmSetupLoading] = useState(false);
  const [setupAttemptInProgress, setSetupAttemptInProgress] = useState(false);

  // New state for 3DS status
  const [authenticationStatus, setAuthenticationStatus] = useState(null);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  // New state for mobile flow
  const [isMobileFlow, setIsMobileFlow] = useState(false);
  const [mobileRedirectUrl, setMobileRedirectUrl] = useState(null);

  // Extract order ID and edit mode from URL query parameters
  const queryParams = new URLSearchParams(location.search);
  const orderId = queryParams.get("orderId");
  const isEditMode = queryParams.get("is_edit_mode") === "true";

  useEffect(() => {
    setIsMobileFlow(isMobileBrowser());
  }, []);

  // Effect to handle mobile return from 3DS authentication
  useEffect(() => {
    const handleMobileReturn = async () => {
      const redirectData = localStorage.getItem(MOBILE_REDIRECT_KEY);
      if (redirectData) {
        try {
          const { clientSecret } = JSON.parse(redirectData);
          if (clientSecret && stripe) {
            setIsConfirmSetupLoading(true);
            const { setupIntent } = await stripe.retrieveSetupIntent(
              clientSecret
            );
            await handle3DSAuthentication(setupIntent);
            localStorage.removeItem(MOBILE_REDIRECT_KEY);
          }
        } catch (error) {
          console.error("Error handling mobile return:", error);
          setMessage(t("checkout.mobile_return_error"));
        }
      }
    };

    if (isMobileFlow) {
      handleMobileReturn();
    }
  }, [stripe, isMobileFlow]);

  // Effect to handle 3D Secure authentication redirect and setup completion
  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "setup_intent_client_secret"
    );

    if (!clientSecret) {
      if (!setupAttemptInProgress) {
        localStorage.removeItem(SETUP_STATE_KEY);
        localStorage.removeItem(ORDER_STATE_KEY);
      }
      return;
    }

    const handle3DSAuthentication = async (setupIntent, retryCount = 0) => {
      const MAX_RETRIES = 2;
      setIsAuthenticating(true);
      setAuthenticationStatus(setupIntent.status);

      try {
        switch (setupIntent.status) {
          case AUTH_STATUSES.SUCCEEDED:
            await handleSetupCompletion(setupIntent);
            break;

          case AUTH_STATUSES.REQUIRES_ACTION:
            if (isMobileFlow) {
              // Handle mobile 3DS flow with retry logic
              try {
                const { error, paymentIntent: updatedIntent } =
                  await stripe.handleNextAction({
                    clientSecret: setupIntent.client_secret,
                    returnUrl: window.location.href,
                  });

                if (error) {
                  if (retryCount < MAX_RETRIES) {
                    console.log(
                      `Retrying 3DS authentication (${
                        retryCount + 1
                      }/${MAX_RETRIES})`
                    );
                    await new Promise((resolve) => setTimeout(resolve, 2000)); // Wait 2 seconds before retry
                    return handle3DSAuthentication(setupIntent, retryCount + 1);
                  }
                  throw new Error(error.message);
                }

                // Store redirect data for mobile return
                try {
                  localStorage.setItem(
                    MOBILE_REDIRECT_KEY,
                    JSON.stringify({
                      clientSecret: setupIntent.client_secret,
                      timestamp: Date.now(),
                    })
                  );
                } catch (storageError) {
                  console.error("Storage error:", storageError);
                  // Continue without storage - not critical
                }

                // Handle mobile redirect with error checking
                if (updatedIntent?.next_action?.redirect_to_url?.url) {
                  window.location.href =
                    updatedIntent.next_action.redirect_to_url.url;
                } else {
                  throw new Error(t("checkout.mobile_redirect_error"));
                }
              } catch (mobileError) {
                if (retryCount < MAX_RETRIES) {
                  console.log(
                    `Retrying mobile flow (${retryCount + 1}/${MAX_RETRIES})`
                  );
                  await new Promise((resolve) => setTimeout(resolve, 2000));
                  return handle3DSAuthentication(setupIntent, retryCount + 1);
                }
                throw mobileError;
              }
            } else {
              // Desktop 3DS flow with improved error handling
              try {
                const { error, setupIntent: updatedIntent } =
                  await stripe.handleNextAction({
                    clientSecret: setupIntent.client_secret,
                  });

                if (error) {
                  if (retryCount < MAX_RETRIES) {
                    console.log(
                      `Retrying desktop flow (${retryCount + 1}/${MAX_RETRIES})`
                    );
                    await new Promise((resolve) => setTimeout(resolve, 2000));
                    return handle3DSAuthentication(setupIntent, retryCount + 1);
                  }
                  throw new Error(error.message);
                }

                if (!updatedIntent) {
                  throw new Error(t("checkout.authentication_failed"));
                }

                await handle3DSAuthentication(updatedIntent);
              } catch (desktopError) {
                if (retryCount < MAX_RETRIES) {
                  console.log(
                    `Retrying after error (${retryCount + 1}/${MAX_RETRIES})`
                  );
                  await new Promise((resolve) => setTimeout(resolve, 2000));
                  return handle3DSAuthentication(setupIntent, retryCount + 1);
                }
                throw desktopError;
              }
            }
            break;

          case AUTH_STATUSES.PROCESSING:
            setMessage(t("checkout.processing_payment"));
            const timeout = setTimeout(() => {
              setMessage(t("checkout.processing_timeout"));
              cleanup();
            }, 30000); // 30 second timeout

            try {
              await new Promise((resolve) => setTimeout(resolve, 5000));
              const { setupIntent: polledIntent } =
                await stripe.retrieveSetupIntent(setupIntent.client_secret);
              clearTimeout(timeout);

              if (
                polledIntent.status === AUTH_STATUSES.PROCESSING &&
                retryCount < MAX_RETRIES
              ) {
                console.log(
                  `Retrying processing status check (${
                    retryCount + 1
                  }/${MAX_RETRIES})`
                );
                await new Promise((resolve) => setTimeout(resolve, 5000));
                return handle3DSAuthentication(setupIntent, retryCount + 1);
              }

              await handle3DSAuthentication(polledIntent);
            } catch (error) {
              clearTimeout(timeout);
              if (retryCount < MAX_RETRIES) {
                console.log(
                  `Retrying after processing error (${
                    retryCount + 1
                  }/${MAX_RETRIES})`
                );
                await new Promise((resolve) => setTimeout(resolve, 2000));
                return handle3DSAuthentication(setupIntent, retryCount + 1);
              }
              throw error;
            }
            break;

          case AUTH_STATUSES.REQUIRES_PAYMENT_METHOD:
            setMessage(t("checkout.payment_failed"));
            cleanup();
            break;

          case AUTH_STATUSES.CANCELED:
            setMessage(t("checkout.authentication_canceled"));
            cleanup();
            break;

          default:
            setMessage(t("checkout.unexpected_error"));
            cleanup();
            break;
        }
      } catch (error) {
        console.error("3DS Authentication error:", error);
        setMessage(error.message || t("checkout.authentication_failed"));
        setAuthenticationStatus(AUTH_STATUSES.REQUIRES_PAYMENT_METHOD);
        cleanup();
      } finally {
        setIsAuthenticating(false);
      }
    };

    // Start processing the setup intent status
    setIsConfirmSetupLoading(true);
    stripe
      .retrieveSetupIntent(clientSecret)
      .then(({ setupIntent }) => {
        handle3DSAuthentication(setupIntent);
      })
      .catch((error) => {
        console.error("Error retrieving setup intent:", error);
        setMessage(error.message || t("checkout.retrieval_error"));
        setSetupAttemptInProgress(false);
      })
      .finally(() => {
        setIsConfirmSetupLoading(false);
      });
  }, [
    stripe,
    navigate,
    dispatch,
    orderId,
    isEditMode,
    stripeCustomerId,
    t,
    setupAttemptInProgress,
  ]);

  // Effect to show error modal when order processing fails
  useEffect(() => {
    if (orderStatus === "failed" && orderError) {
      ShowCustomErrorModal({
        title: t("checkout.error"),
        message: orderError,
      });
    }
  }, [orderStatus, orderError, t]);

  // Utility function for consistent cleanup
  const cleanup = () => {
    localStorage.removeItem(SETUP_STATE_KEY);
    localStorage.removeItem(ORDER_STATE_KEY);
    localStorage.removeItem(MOBILE_REDIRECT_KEY);
    setSetupAttemptInProgress(false);
    setIsLoading(false);
    setIsConfirmSetupLoading(false);
    setIsAuthenticating(false);
  };

  // Handle successful setup completion
  const handleSetupCompletion = async (setupIntent) => {
    try {
      const orderState = JSON.parse(localStorage.getItem(ORDER_STATE_KEY));
      if (orderState?.orderId) {
        if (orderState.isEditMode) {
          await dispatch(
            updatePaymentForOrder({
              orderId: orderState.orderId,
              setupIntent: setupIntent.id,
              stripeCustomerId,
            })
          );
        } else {
          await dispatch(
            setupPaymentForOrder({
              orderId: orderState.orderId,
              setupIntent: setupIntent.id,
              stripeCustomerId,
            })
          );
        }
        navigate("/thanks-payment-setup");
      }
    } catch (error) {
      console.error("Setup completion error:", error);
      setMessage(t("checkout.setup_completion_error"));
      setAuthenticationStatus(AUTH_STATUSES.REQUIRES_PAYMENT_METHOD);
    } finally {
      cleanup();
    }
  };

  /**
   * Handles the form submission to set up or update payment method
   * Stores essential data in localStorage before redirect
   * Initiates Stripe setup confirmation process
   */
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      setMessage(t("checkout.stripe_not_loaded"));
      return;
    }

    if (setupAttemptInProgress) {
      return;
    }

    setIsLoading(true);
    setMessage("");
    setSetupAttemptInProgress(true);
    setAuthenticationStatus(null);

    try {
      // Validate email
      if (!email) {
        throw new Error(t("checkout.email_required"));
      }

      // Store current setup state and order details before redirect
      const setupState = {
        timestamp: Date.now(),
        email: email,
      };

      const orderState = {
        orderId: orderId,
        isEditMode: isEditMode,
      };

      localStorage.setItem(SETUP_STATE_KEY, JSON.stringify(setupState));
      localStorage.setItem(ORDER_STATE_KEY, JSON.stringify(orderState));

      // Configure return URL for post-payment redirect
      const origin = window.location.origin;
      const returnUrl = `${origin}/payment?orderId=${orderId}&is_edit_mode=${isEditMode}`;

      // Confirm setup with Stripe with correct parameters
      const { error, setupIntent } = await stripe.confirmSetup({
        elements,
        confirmParams: {
          return_url: returnUrl,
          payment_method_data: {
            billing_details: {
              email: email,
            },
          },
        },
      });

      if (error) {
        console.error("Setup confirmation error:", error);
        if (error.type === "card_error" || error.type === "validation_error") {
          throw new Error(error.message);
        } else if (error.type === "authentication_error") {
          throw new Error(t("checkout.authentication_failed"));
        } else {
          throw new Error(t("checkout.unexpected_error"));
        }
      }

      if (!setupIntent) {
        throw new Error(t("checkout.setup_failed"));
      }

      // Update stored state with setupIntent ID
      setupState.setupIntentId = setupIntent.id;
      localStorage.setItem(SETUP_STATE_KEY, JSON.stringify(setupState));

      // Handle immediate 3DS action if required
      if (setupIntent.status === AUTH_STATUSES.REQUIRES_ACTION) {
        await handle3DSAuthentication(setupIntent);
      } else if (setupIntent.status === AUTH_STATUSES.SUCCEEDED) {
        await handleSetupCompletion(setupIntent);
      } else {
        throw new Error(t("checkout.unexpected_setup_status"));
      }
    } catch (err) {
      console.error("Unexpected error in setup confirmation:", err);
      setMessage(err.message || t("checkout.unexpected_error_setup"));
      setAuthenticationStatus(AUTH_STATUSES.REQUIRES_PAYMENT_METHOD);
      cleanup();
    } finally {
      setIsLoading(false);
    }
  };

  // Configuration for Stripe Payment Element appearance and behavior
  const paymentElementOptions = {
    layout: {
      type: "tabs",
      defaultCollapsed: false,
      radios: false,
      spacedAccordionItems: false,
    },
    appearance: {
      theme: "stripe",
      variables: {
        colorPrimary: "#0570de",
        colorBackground: "#ffffff",
        colorText: "#30313d",
        colorDanger: "#df1b41",
        fontFamily: "system-ui, sans-serif",
        spacingUnit: "4px",
        borderRadius: "4px",
      },
    },
    fields: {
      billingDetails: {
        email: {
          prefill: email,
        },
      },
    },
    business: {
      name: "thegood.deals",
    },
  };

  // Disable form when payment processing is in progress
  const isFormDisabled =
    isLoading || !stripe || !elements || setupAttemptInProgress;

  return (
    <form
      id="payment-form"
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-lg space-y-4"
    >
      {/* Show mobile redirect warning if applicable */}
      {isMobileFlow && (
        <div className="bg-blue-50 p-4 rounded-md mb-4">
          <p className="text-sm text-blue-700">
            {t("checkout.mobile_redirect_notice")}
          </p>
        </div>
      )}

      {/* Render payment form or loading/authentication state */}
      {!isConfirmSetUpLoading && !isAuthenticating ? (
        <div className="space-y-3">
          <PaymentElement
            id="payment-element"
            options={paymentElementOptions}
            className="pt-3"
          />
        </div>
      ) : (
        <div className="flex flex-col items-center space-y-4">
          <CustomLoader />
          <p className="text-gray-600">
            {isAuthenticating
              ? t("checkout.authenticating")
              : t("checkout.processing_payment")}
          </p>
          {authenticationStatus && (
            <p className="text-sm text-gray-500">
              {t(`checkout.auth_status.${authenticationStatus}`)}
            </p>
          )}
        </div>
      )}

      {/* Error message display */}
      {message && (
        <div
          id="payment-message"
          className={`mt-3 p-3 ${
            message.includes("success")
              ? "text-green-600 bg-green-100 border-green-400"
              : "text-red-600 bg-red-100 border-red-400"
          } border rounded`}
        >
          {message}
        </div>
      )}

      <Line />

      {/* Submit button with loading state */}
      <div className="mt-3 flex items-center justify-center gap-2.5 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-primary-color rounded-md">
        <button
          type="submit"
          disabled={isFormDisabled || isAuthenticating}
          className={`all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-6 whitespace-nowrap ${
            isFormDisabled || isAuthenticating
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
        >
          {isLoading || isAuthenticating
            ? t("checkout.processing")
            : t("checkout.submit_button")}
        </button>
        <ArrowRight1 className="!relative !w-5 !h-5" color="white" />
      </div>
    </form>
  );
};

CheckoutForm.propTypes = {
  stripeCustomerId: PropTypes.string.isRequired,
};

export default CheckoutForm;
