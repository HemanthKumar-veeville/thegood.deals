import {
  PaymentElement,
  LinkAuthenticationElement,
} from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { useTranslation } from "react-i18next";
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

export default function CheckoutForm({ heading, btnText, stripeCustomerId }) {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector((state) => state.account.profile);
  const orderError = useSelector((state) => state.orders.orderError);
  const orderStatus = useSelector((state) => state.orders.orderStatus);
  const [email, setEmail] = useState(user?.data?.email); // Allow dynamic email entry
  const { t } = useTranslation(); // Use translation hook
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation(); // Use location to access query params
  const [isConfirmSetUpLoading, setIsConfirmSetupLoading] = useState(false);
  const [isError, setIsError] = useState(
    orderStatus === "failed" ? true : false
  );

  // Extract orderId from the query parameters
  const queryParams = new URLSearchParams(location.search);
  const orderId = queryParams.get("orderId");
  const isEditMode = queryParams.get("is_edit_mode");
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded
      setMessage(t("checkout.stripe_not_loaded")); // Translated message
      return;
    }

    setIsLoading(true);
    setMessage(""); // Reset message before processing

    try {
      // Confirm the SetupIntent and handle the response
      const { setupIntent, error } = await stripe.confirmSetup({
        elements,
        confirmParams: {
          // Optional: add additional metadata or params here
        },
        redirect: "if_required", // Avoids unnecessary redirects
      });

      if (error) {
        // Handle errors from Stripe
        if (error.type === "card_error" || error.type === "validation_error") {
          setMessage(error.message);
        } else {
          setMessage(t("checkout.unexpected_error")); // Translated message
        }
        console.error("Error during setup confirmation:", error);
      } else {
        // SetupIntent was successfully confirmed
        // Proceed to dispatch payment setup
        setIsConfirmSetupLoading(true);
        try {
          isEditMode === true || isEditMode === "true"
            ? await dispatch(
                updatePaymentForOrder({
                  orderId,
                  setupIntent,
                  stripeCustomerId,
                })
              ).unwrap()
            : await dispatch(
                setupPaymentForOrder({ orderId, setupIntent, stripeCustomerId })
              ).unwrap();
          setMessage(t("checkout.setup_confirmed")); // Translated message

          navigate(`/thanks-payment-setup?orderId=${orderId}`); // Navigate to success page
        } catch (dispatchError) {
          console.error("Error during dispatch:", dispatchError);
          setMessage(t("checkout.processing_error")); // Translated message
        } finally {
          setIsConfirmSetupLoading(false);
        }
      }
    } catch (err) {
      // Handle unexpected errors
      console.error("Unexpected error in setup confirmation:", err);
      setMessage(t("checkout.unexpected_error_setup")); // Translated message
    } finally {
      setIsLoading(false); // Stop loading spinner
    }
  };

  // Payment element options
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
      // Hide labels and other visual adjustments
      rules: {
        ".Label": {
          display: "none", // Hide label
        },
        ".Input": {
          minHeight: "48px", // Adjust height for input fields
        },
      },
    },
  };

  // Add appearance option for LinkAuthenticationElement
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
      // Add rule to hide the label and adjust the input size
      rules: {
        ".Label": {
          display: "none", // Hide the label
        },
        ".Input": {
          height: "76px", // Adjust height
        },
        ".p-LinkInputWrapper": {
          height: "96px !important" /* Set the desired height */,
          display: "flex",
          "align-items": "center",
        },
        ".p-LinkInputWrapper input": {
          height: "78px !important" /* Adjust input height */,
          padding: "12px !important" /* Adjust padding for input */,
          border: "1px solid #ccc !important" /* Custom border */,
          "border-radius": "4px !important" /* Rounded corners */,
          "font-size": "36px !important" /* Font size */,
          width: "100% !important" /* Ensure it takes the full width */,
        },
      },
    },
  };

  return (
    <form
      id="payment-form"
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-lg space-y-4"
    >
      {!isConfirmSetUpLoading && (
        <div className="space-y-3">
          <LinkAuthenticationElement
            id="link-authentication-element"
            onChange={(event) => {
              setEmail(event.value.email); // Dynamically set the email when changed
            }}
            options={linkAuthenticationOptions} // Pass appearance customization for LinkAuthenticationElement
          />
          <PaymentElement
            id="payment-element"
            options={paymentElementOptions}
            className="pt-3"
          />
        </div>
      )}
      {isConfirmSetUpLoading && <CustomLoader />}
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
          disabled={isLoading || !stripe || !elements}
          className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-6 whitespace-nowrap"
        >
          {t("checkout.submit_button")} {/* Translated button text */}
        </button>
        <ArrowRight1 className="!relative !w-5 !h-5" color="white" />
      </div>
    </form>
  );
}
