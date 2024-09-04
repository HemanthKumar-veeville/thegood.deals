import { useEffect, useState } from "react";
import axios from "axios";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

function Payment({ heading, btnText, ...props }) {
  const { stripePromise } = props;
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    axios.post("/create_payment_intent").then(({ data }) => {
      console.log(data);
      setClientSecret(data.clientSecret);
    });
    //   .then(({ clientSecret }) => setClientSecret(clientSecret));
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
