import { useEffect, useState } from "react";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { axiosInstance } from "../helpers/helperMethods";

function Payment({ heading, btnText, ...props }) {
  const { stripePromise } = props;
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Define an async function inside the useEffect
    const createPaymentIntent = async () => {
      try {
        const { data } = await axiosInstance.post("create_payment_intent");
        console.log(data);
        setClientSecret(data.clientSecret);
      } catch (error) {
        console.error("Error creating PaymentIntent:", error);
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
