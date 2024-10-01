//StripePayment.js

import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";
import PaymentForm from "./PaymentForm";

const stripe = loadStripe(
  "pk_test_51PplNp04KHQUtznoy8HmY5meaJK4aZgRjwuckLfjquqCSJMvfXEjacj3pADbzg2SDbNuWr0zRhrFymRRstAjzh3S00USzDZqAJ"
);

const StripePayment = () => {
  const [clientSecret, setClientSecret] = useState(null);

  useEffect(() => {
    const fetchPaymentIntent = async () => {
      try {
        const response = await axios.post(
          "http://localhost:4000/create-payment-intent",
          {
            items: [{ id: 1, name: "momos", amount: 40.0 }],
          }
        );
        setClientSecret(response.data.clientSecret);
      } catch (error) {
        console.error("Error fetching payment intent:", error);
      }
    };

    fetchPaymentIntent();
  }, []);

  const options = {
    clientSecret,
    theme: "stripe",
  };

  return (
    clientSecret && (
      <Elements stripe={stripe} options={options}>
        <PaymentForm></PaymentForm>
      </Elements>
    )
  );
};

export default StripePayment;
