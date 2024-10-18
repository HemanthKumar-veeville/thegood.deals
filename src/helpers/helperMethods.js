import axios from "axios";
import i18next from "i18next";

// Base URL for your API
const BASE_URL = "https://thegood.deals/api";

// Get current language from i18next
const currentLanguage = i18next.language || "fr"; // Default to 'en-US' if no language is set
console.log({ currentLanguage });

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
    "access-control-allow-credentials": true,
    "ngrok-skip-browser-warning": "69420",
    "Accept-Language": currentLanguage, // Dynamically set Accept-Language header
  },
  withCredentials: true,
});

export const createStripeAccount = async (email) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/stripe/create-account",
      {
        email: email,
      }
    );

    // Handling the response
    if (response.data.success) {
      console.log("Account created successfully:", response.data);
    } else {
      console.log("Failed to create account:", response.data.message);
    }
  } catch (error) {
    console.error(
      "Error occurred:",
      error.response ? error.response.data : error.message
    );
  }
};

export const onboardStripeAccount = async ({
  accountId,
  refreshUrl,
  returnUrl,
}) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/api/stripe/create-account-link",
      {
        accountId,
        refreshUrl,
        returnUrl,
      }
    );

    // Handling the success response
    if (response.data.success) {
      const { url, expires_at } = response.data.data;

      console.log("Account onboarding link generated successfully:");
      console.log("Onboarding Link:", url);
      console.log("Link Expiration Time:", new Date(expires_at * 1000));

      // You can redirect to the onboarding link
      window.location.href = url;
    } else {
      // If the response indicates failure, handle the error
      console.error(
        "Failed to generate onboarding link:",
        response.data.message
      );
    }
  } catch (error) {
    // Handling errors from the server
    if (error.response) {
      // Server responded with a status code out of the range of 2xx
      console.error("Server error:", error.response.data.message);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("No response received:", error.request);
    } else {
      // Something happened in setting up the request
      console.error("Error in request setup:", error.message);
    }
  }
};
