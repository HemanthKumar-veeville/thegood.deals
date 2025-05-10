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

/**
 * CheckoutForm Component
 * Handles the payment setup process using Stripe Elements
 * Supports both new payment setup and editing existing payment methods
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

  // Extract order ID and edit mode from URL query parameters
  const queryParams = new URLSearchParams(location.search);
  const orderId = queryParams.get("orderId");
  const isEditMode = queryParams.get("is_edit_mode") === "true";

  // Effect to handle 3D Secure authentication redirect and setup completion
  useEffect(() => {
    if (!stripe) {
      return;
    }

    const clientSecret = new URLSearchParams(window.location.search).get(
      "setup_intent_client_secret"
    );

    if (!clientSecret) {
      // Clear storage if not in setup process
      if (!setupAttemptInProgress) {
        localStorage.removeItem(SETUP_STATE_KEY);
        localStorage.removeItem(ORDER_STATE_KEY);
      }
      return;
    }

    /**
     * Handles the completion of the setup process after successful authentication
     * Updates the order with the new payment method details
     */
    const handleSetupCompletion = async (setupIntent) => {
      try {
        // Retrieve stored order state and determine target order
        const storedOrderState = JSON.parse(
          localStorage.getItem(ORDER_STATE_KEY) || "{}"
        );
        const targetOrderId = storedOrderState.orderId || orderId;

        // Dispatch appropriate action based on edit mode
        const action = isEditMode
          ? updatePaymentForOrder({
              orderId: targetOrderId,
              setupIntent,
              stripeCustomerId,
            })
          : setupPaymentForOrder({
              orderId: targetOrderId,
              setupIntent,
              stripeCustomerId,
            });

        const storeSetupResponse = await dispatch(action).unwrap();

        // Navigate to success page if setup is stored successfully
        if (
          storeSetupResponse?.detail ===
            "SetupIntent stored and order status updated successfully" ||
          storeSetupResponse?.detail === "SetupIntent updated successfully"
        ) {
          localStorage.removeItem(SETUP_STATE_KEY);
          localStorage.removeItem(ORDER_STATE_KEY);
          navigate(`/thanks-payment-setup?orderId=${targetOrderId}`);
        }
      } catch (error) {
        console.error("Error storing setup intent:", error);
        setMessage(t("checkout.processing_error"));
      }
    };

    // Process the setup intent status
    setIsConfirmSetupLoading(true);
    stripe
      .retrieveSetupIntent(clientSecret)
      .then(({ setupIntent }) => {
        switch (setupIntent.status) {
          case "succeeded":
            handleSetupCompletion(setupIntent);
            break;

          case "processing":
            setMessage(t("checkout.processing_payment"));
            // Retry mechanism for processing state
            setTimeout(() => {
              stripe
                .retrieveSetupIntent(clientSecret)
                .then(({ setupIntent: updatedIntent }) => {
                  if (updatedIntent.status === "succeeded") {
                    handleSetupCompletion(updatedIntent);
                  }
                });
            }, 5000);
            break;

          case "requires_payment_method":
            setMessage(t("checkout.payment_failed"));
            setSetupAttemptInProgress(false);
            break;

          default:
            setSetupAttemptInProgress(false);
            break;
        }
      })
      .catch((error) => {
        console.error("Error retrieving setup intent:", error);
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

    try {
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

      // Confirm setup with Stripe
      const { error, setupIntent } = await stripe.confirmSetup({
        elements,
        confirmParams: {
          return_url: returnUrl,
        },
      });

      if (error) {
        const errorMessage =
          error.type === "card_error" || error.type === "validation_error"
            ? error.message
            : t("checkout.unexpected_error");
        setMessage(errorMessage);
        setSetupAttemptInProgress(false);
      } else if (setupIntent) {
        // Update stored state with setupIntent ID
        setupState.setupIntentId = setupIntent.id;
        localStorage.setItem(SETUP_STATE_KEY, JSON.stringify(setupState));
      }
    } catch (err) {
      console.error("Unexpected error in setup confirmation:", err);
      setMessage(t("checkout.unexpected_error_setup"));
      setSetupAttemptInProgress(false);
    } finally {
      setIsLoading(false);
    }
  };

  // Configuration for Stripe Payment Element appearance and behavior
  const paymentElementOptions = {
    layout: {
      type: "accordion",
      defaultCollapsed: false,
      radios: false,
      spacedAccordionItems: true,
    },
    appearance: {
      theme: "flat",
      variables: {
        colorPrimaryText: "#262626",
        colorPrimary: "#0570de",
        colorBackground: "#ffffff",
        colorText: "#30313d",
        colorDanger: "#df1b41",
        fontFamily: "Ideal Sans, system-ui, sans-serif",
        spacingUnit: "2px",
        borderRadius: "4px",
      },
      rules: {
        ".Label": {
          display: "none",
        },
        ".Input": {
          minHeight: "48px",
        },
      },
    },
  };

  // Configuration for Link Authentication Element appearance
  const linkAuthenticationOptions = {
    defaultValues: { email },
    appearance: {
      theme: "flat",
      variables: {
        colorPrimaryText: "#262626",
        colorPrimary: "#0570de",
        colorBackground: "#ffffff",
        colorText: "#30313d",
        colorDanger: "#df1b41",
        fontFamily: "Ideal Sans, system-ui, sans-serif",
      },
      rules: {
        ".Label": {
          display: "none",
        },
        ".Input": {
          height: "76px",
        },
        ".p-LinkInputWrapper": {
          height: "96px !important",
          display: "flex",
          "align-items": "center",
        },
        ".p-LinkInputWrapper input": {
          height: "78px !important",
          padding: "12px !important",
          border: "1px solid #ccc !important",
          "border-radius": "4px !important",
          "font-size": "36px !important",
          width: "100% !important",
        },
      },
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
      {/* Render payment form or loading state */}
      {!isConfirmSetUpLoading ? (
        <div className="space-y-3">
          {/* Email authentication element */}
          <LinkAuthenticationElement
            id="link-authentication-element"
            onChange={(event) => setEmail(event.value.email)}
            options={linkAuthenticationOptions}
          />
          {/* Stripe payment element */}
          <PaymentElement
            id="payment-element"
            options={paymentElementOptions}
            className="pt-3"
          />
        </div>
      ) : (
        // Loading state during payment processing
        <div className="flex flex-col items-center space-y-4">
          <CustomLoader />
          <p className="text-gray-600">{t("checkout.processing_payment")}</p>
        </div>
      )}

      {/* Error message display */}
      {message && (
        <div
          id="payment-message"
          className="mt-3 p-3 text-red-600 bg-red-100 border border-red-400 rounded"
        >
          {message}
        </div>
      )}

      <Line />

      {/* Submit button with loading state */}
      <div className="mt-3 flex items-center justify-center gap-2.5 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-primary-color rounded-md">
        <button
          type="submit"
          disabled={isFormDisabled}
          className={`all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-6 whitespace-nowrap ${
            isFormDisabled ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {isLoading ? t("checkout.processing") : t("checkout.submit_button")}
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
