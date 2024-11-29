import { useEffect, useState } from "react";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { axiosInstance } from "../helpers/helperMethods";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import { ShowCustomErrorModal } from "../components/ErrorAlert/ErrorAlert.jsx";
import CustomLoader from "./CustomLoader/CustomLoader.jsx";

function Payment({ orderId, heading, btnText, ...props }) {
  const { stripePromise } = props;
  const [clientSecret, setClientSecret] = useState("");
  const [stripeCustomerId, setStripeCustomerId] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const { t } = useTranslation(); // Initialize translation hook
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Define an async function inside the useEffect
    const createPaymentIntent = async () => {
      setLoading(true);
      try {
        // Create a FormData object and append the static fields
        const formData = new FormData();
        formData.append("amount", 10);
        formData.append("currency", "eur");

        // Send the FormData with the POST request
        const response = await axiosInstance.post(
          `/create_payment_intent`,
          formData
        );
        setClientSecret(response?.data?.payment_intent[0]);
        setStripeCustomerId(response?.data?.payment_intent[1]);
      } catch (error) {
        console.error("Error creating PaymentIntent:", error);
        setIsError(true);
        setErrorMessage(error?.detail || t("Payment.fetch_error_message"));
      } finally {
        setLoading(false);
      }
    };

    // Call the async function
    createPaymentIntent();
  }, [t]); // Add t as a dependency for the useEffect hook

  return (
    <>
      {isError && (
        <ShowCustomErrorModal
          message={errorMessage}
          buttonText={t("waiting_deal.got_it")}
          onClose={() => setIsError(false)} // Reset modal state on close
        />
      )}
      {loading && <CustomLoader />}
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm
            heading={t("Payment.heading")} // Use translation for the heading
            btnText={t("Payment.button_text")} // Use translation for the button text
            stripeCustomerId={stripeCustomerId}
          />
        </Elements>
      )}
    </>
  );
}

export default Payment;
