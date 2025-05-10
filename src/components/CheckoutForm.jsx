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

// Constants for localStorage keys
const SETUP_STATE_KEY = "stripe_setup_state";
const ORDER_STATE_KEY = "stripe_order_state";
const SETUP_RETURN_KEY = "stripe_setup_return";

const CheckoutForm = ({ stripeCustomerId }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector((state) => state.account.profile);
  const orderError = useSelector((state) => state.orders.orderError);
  const orderStatus = useSelector((state) => state.orders.orderStatus);
  const [email, setEmail] = useState(user?.data?.email);
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [isConfirmSetUpLoading, setIsConfirmSetupLoading] = useState(false);
  const [setupAttemptInProgress, setSetupAttemptInProgress] = useState(false);

  // Extract orderId from the query parameters
  const queryParams = new URLSearchParams(location.search);
  const orderId = queryParams.get("orderId");
  const isEditMode = queryParams.get("is_edit_mode") === "true";
  const clientSecret = queryParams.get("setup_intent_client_secret");

  // Handle return from bank app
  useEffect(() => {
    const handleReturn = async () => {
      if (!stripe || !clientSecret) return;

      try {
        // Mark that we're handling the return
        sessionStorage.setItem(SETUP_RETURN_KEY, "true");
        setIsConfirmSetupLoading(true);

        const { setupIntent } = await stripe.retrieveSetupIntent(clientSecret);
        const storedState = JSON.parse(
          localStorage.getItem(SETUP_STATE_KEY) || "{}"
        );
        const storedOrderState = JSON.parse(
          localStorage.getItem(ORDER_STATE_KEY) || "{}"
        );

        // Use stored data or URL params as fallback
        const targetOrderId = storedOrderState.orderId || orderId;
        const targetEditMode = storedState.isEditMode || isEditMode;

        if (!targetOrderId) {
          setMessage(t("checkout.payment_setup_error"));
          return;
        }

        if (setupIntent.status === "succeeded") {
          const action = targetEditMode
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

          const response = await dispatch(action).unwrap();

          if (
            response?.detail ===
              "SetupIntent stored and order status updated successfully" ||
            response?.detail === "SetupIntent updated successfully"
          ) {
            // Clear all stored states
            localStorage.removeItem(SETUP_STATE_KEY);
            localStorage.removeItem(ORDER_STATE_KEY);
            sessionStorage.removeItem(SETUP_RETURN_KEY);
            navigate(`/thanks-payment-setup?orderId=${targetOrderId}`);
          }
        } else if (setupIntent.status === "processing") {
          setMessage(t("checkout.processing_payment"));
        } else if (setupIntent.status === "requires_payment_method") {
          setMessage(t("checkout.payment_failed"));
          setSetupAttemptInProgress(false);
        } else {
          setMessage(t("checkout.unexpected_error"));
          setSetupAttemptInProgress(false);
        }
      } catch (error) {
        console.error("Error handling return:", error);
        setMessage(t("checkout.payment_setup_error"));
        setSetupAttemptInProgress(false);
      } finally {
        setIsConfirmSetupLoading(false);
      }
    };

    // Check if we're returning from bank app
    if (clientSecret && !sessionStorage.getItem(SETUP_RETURN_KEY)) {
      handleReturn();
    }
  }, [
    stripe,
    clientSecret,
    navigate,
    dispatch,
    orderId,
    isEditMode,
    stripeCustomerId,
    t,
  ]);

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
      // Clear any previous return handling state
      sessionStorage.removeItem(SETUP_RETURN_KEY);

      // Store essential data before redirect
      const setupState = {
        timestamp: Date.now(),
        email: email,
        setupStarted: true,
        orderId: orderId,
        isEditMode: isEditMode,
      };

      const orderState = {
        orderId: orderId,
        isEditMode: isEditMode,
      };

      // Store state before initiating setup
      localStorage.setItem(SETUP_STATE_KEY, JSON.stringify(setupState));
      localStorage.setItem(ORDER_STATE_KEY, JSON.stringify(orderState));

      // Get the current origin for the return URL
      const origin = window.location.origin;
      const returnUrl = `${origin}/payment?orderId=${orderId}&is_edit_mode=${isEditMode}`;

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

        // Clear stored state on error
        localStorage.removeItem(SETUP_STATE_KEY);
        localStorage.removeItem(ORDER_STATE_KEY);
      } else if (setupIntent) {
        // Update stored state with setupIntent ID
        setupState.setupIntentId = setupIntent.id;
        localStorage.setItem(SETUP_STATE_KEY, JSON.stringify(setupState));
      }
    } catch (err) {
      console.error("Unexpected error in setup confirmation:", err);
      setMessage(t("checkout.unexpected_error_setup"));
      setSetupAttemptInProgress(false);

      // Clear stored state on error
      localStorage.removeItem(SETUP_STATE_KEY);
      localStorage.removeItem(ORDER_STATE_KEY);
    } finally {
      setIsLoading(false);
    }
  };

  // Show error modal if order status is failed
  useEffect(() => {
    if (orderStatus === "failed" && orderError) {
      ShowCustomErrorModal({
        title: t("checkout.error"),
        message: orderError,
      });
    }
  }, [orderStatus, orderError, t]);

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

  const isFormDisabled =
    isLoading || !stripe || !elements || setupAttemptInProgress;

  return (
    <form
      id="payment-form"
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-lg space-y-4"
    >
      {!isConfirmSetUpLoading ? (
        <div className="space-y-3">
          <LinkAuthenticationElement
            id="link-authentication-element"
            onChange={(event) => setEmail(event.value.email)}
            options={linkAuthenticationOptions}
          />
          <PaymentElement
            id="payment-element"
            options={paymentElementOptions}
            className="pt-3"
          />
        </div>
      ) : (
        <div className="flex flex-col items-center space-y-4">
          <CustomLoader />
          <p className="text-gray-600">{t("checkout.processing_payment")}</p>
        </div>
      )}

      {message && (
        <div
          id="payment-message"
          className="mt-3 p-3 text-red-600 bg-red-100 border border-red-400 rounded"
        >
          {message}
        </div>
      )}

      <Line />

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
