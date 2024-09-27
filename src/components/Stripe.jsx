//StripePayment.js

import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import axios from "axios";
import PaymentForm from "./PaymentForm";

const stripe = loadStripe(
  "pk_test_51PrkFjP5N2kE7iWZygQ2zB9AQ4sYqu1Dpojd9yprqAJ2lMYjO9A9pcgfM8qQ6Gd62L1qn0r7zllqmpZFTVlr0uYh002moYDqvd"
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
