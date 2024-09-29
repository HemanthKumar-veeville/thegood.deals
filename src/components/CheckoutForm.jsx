import {
  PaymentElement,
  LinkAuthenticationElement,
} from "@stripe/react-stripe-js";
import { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";
import { useTranslation } from "react-i18next";
import { Line63 } from "../images";
import { ArrowRight1 } from "../icons/ArrowRight1";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setupPaymentForOrder } from "../redux/app/orders/orderSlice";

export default function CheckoutForm({ heading, btnText }) {
  const stripe = useStripe();
  const elements = useElements();
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState(""); // Allow dynamic email entry
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation(); // Use location to access query params

  // Extract orderId from the query parameters
  const queryParams = new URLSearchParams(location.search);
  const orderId = queryParams.get("orderId");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded
      setMessage("Stripe has not fully loaded yet. Please try again.");
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
          setMessage("An unexpected error occurred. Please try again.");
        }
        console.error("Error during setup confirmation:", error);
      } else {
        // SetupIntent was successfully confirmed
        console.log("SetupIntent confirmed:", setupIntent);

        // Proceed to dispatch payment setup
        try {
          await dispatch(setupPaymentForOrder({ orderId, setupIntent }));
          setMessage("Setup confirmed successfully.");
          navigate("/thanks-withdrawal"); // Navigate to success page
        } catch (dispatchError) {
          console.error("Error during dispatch:", dispatchError);
          setMessage("An error occurred while processing the payment setup.");
        }
      }
    } catch (err) {
      // Handle unexpected errors
      console.error("Unexpected error in setup confirmation:", err);
      setMessage("An unexpected error occurred during setup confirmation.");
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
      // Add rule to hide the label
      rules: {
        ".Label": {
          display: "none", // This is to hide the label
        },
      },
    },
  };

  return (
    <form id="payment-form" onSubmit={handleSubmit} className="mx-auto w-full">
      <LinkAuthenticationElement
        id="link-authentication-element"
        onChange={(event) => {
          setEmail(event.value.email); // Dynamically set the email when changed
        }}
        options={linkAuthenticationOptions} // Pass appearance customization for LinkAuthenticationElement
      />
      <PaymentElement id="payment-element" options={paymentElementOptions} />
      {message && (
        <div
          id="payment-message"
          className="mt-3 p-3 text-red-600 bg-red-100 border border-red-400 rounded"
        >
          {message}
        </div>
      )}
      <img
        className="relative self-stretch w-full h-px object-cover mt-3"
        alt={t("withdrawal.line_alt")}
        src={Line63}
      />
      <div className="mt-3 flex items-center justify-center gap-2.5 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-primary-color rounded-md">
        <button
          type="submit"
          disabled={isLoading || !stripe || !elements}
          className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-6 whitespace-nowrap"
        >
          {btnText}
        </button>
        <ArrowRight1 className="!relative !w-5 !h-5" color="white" />
      </div>
    </form>
  );
}
