import { useEffect, useState } from "react";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { axiosInstance } from "../helpers/helperMethods";

function Payment({ orderId, heading, btnText, ...props }) {
  const { stripePromise } = props;
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Define an async function inside the useEffect
    const createPaymentIntent = async () => {
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
        console.log(response?.data?.payment_intent[0]);
        setClientSecret(response?.data?.payment_intent[0]);
      } catch (error) {
        console.error("Error creating PaymentIntent:", error);
        await Swal.fire({
          icon: "error",
          title: "Error...",
          text: error?.detail || "Failed to Fetch intent. Please try again.",
        });
      }
    };

    // Call the async function
    createPaymentIntent();
  }, []);

  return (
    <>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm heading={heading} btnText={btnText} />
        </Elements>
      )}
    </>
  );
}

export default Payment;
