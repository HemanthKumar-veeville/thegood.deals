import axios from "axios";
import i18next from "i18next";

// Base URL for your API
const BASE_URL = "https://thegood.deals/api";
// const BASE_URL = "https://9396-106-51-243-165.ngrok-free.app/";
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
    const formData = new FormData();
    formData.append("email", email);
    const response = await axiosInstance.post(
      "/create_stripe_account",
      formData
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

export const payToArtisan = async () => {
  try {
    // Define the payload for the API request
    const payload = {
      amount: 200, // Amount in cents (e.g., 200 = $2)
      currency: "usd", // Currency code
      destination: "acct_1QB7bOP1dSZSoI9Q", // Artisan's connected account ID
      description: "Payment for artisan work", // Description of the transfer
    };

    // Make the API call to transfer funds
    const response = await axios.post(
      "http://localhost:3000/api/stripe/transfer-funds",
      payload
    );

    // Handle the response
    if (response.data.success) {
      const transferData = response.data.data;
      console.log("Funds transferred successfully!");
      console.log("Transfer ID:", transferData.id);
      console.log("Amount Transferred:", transferData.amount / 100, "USD");
      console.log("Destination Account:", transferData.destination);
      console.log("Transfer Description:", transferData.description);
      console.log("Transaction ID:", transferData.balance_transaction);
    } else {
      console.error("Failed to transfer funds:", response.data.message);
    }
  } catch (error) {
    // Handle errors
    if (error.response) {
      // Server responded with a status other than 2xx
      console.error("Server error:", error.response.data.message);
    } else if (error.request) {
      // No response received from the server
      console.error("No response received:", error.request);
    } else {
      // Error in setting up the request
      console.error("Error in request setup:", error.message);
    }
  }
};
