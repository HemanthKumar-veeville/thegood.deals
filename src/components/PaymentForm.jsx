import React, { useState } from "react";
import {
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

const PAYMENT_SUCCESS_URL = "http://localhost:3000/success";

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { t } = useTranslation(); // Initialize the translation hook

  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsLoading(true);
    setMessage(t("PaymentForm.in_progress")); // Use translation for the progress message

    const resp = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: PAYMENT_SUCCESS_URL,
      },
    });

    if (resp.error) {
      setMessage(t("PaymentForm.error_message")); // Use translation for error message
    }
    setIsLoading(false);
  };

  return (
    <div className="container mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="card w-100 bg-base-100 bg-gray-200 shadow-2xl rounded-lg">
          <div className="card-body p-6">
            <PaymentElement />
          </div>
        </div>
        {message && <p>{message}</p>} {/* Display the message */}
        <button
          type="submit"
          disabled={isLoading || !stripe || !elements}
          className="mt-4 p-2 bg-blue-500 text-white rounded"
        >
          {t("PaymentForm.submit_button")}{" "}
          {/* Use translation for the button */}
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
