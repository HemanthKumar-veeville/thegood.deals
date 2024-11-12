import axios from "axios";
import i18next from "i18next";
import { loadStripe } from "@stripe/stripe-js";

// Base URL for your API
const BASE_URL = "https://thegood.deals/api";
// const BASE_URL = "https://f15c-106-51-243-165.ngrok-free.app/";
// Get current language from i18next
const currentLanguage = i18next.language || "fr"; // Default to 'en-US' if no language is set
const stripePromise = loadStripe(
  "pk_live_51QHjfQCk1crzlHGC2RGD1w9ho2p1Fd7Wx4nEzCik2qMFRs7mxDITOExCwWepZ6NWeCyuXSwoTCShGxckmjRWIe0h00KHT1Qmg6"
);
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

export const createStripeAccount = async (email, dealId) => {
  try {
    const stripe = await stripePromise;

    // Create the account token with the required fields
    const { token, error } = await stripe.createToken("account", {
      business_type: "individual", // Explicitly specify business_type
      individual: {
        email: email,
        // first_name: "John", // Replace with actual user input
        // last_name: "Doe", // Replace with actual user input
        // address: {
        //   city: "Paris", // Replace with actual user input
        //   country: "FR",
        //   line1: "123 Rue de Example", // Replace with actual user input
        //   postal_code: "75001", // Replace with actual user input
        // },
        // dob: {
        //   day: 15, // Replace with actual user input
        //   month: 6, // Replace with actual user input
        //   year: 1990, // Replace with actual user input
        // },
      },
      tos_shown_and_accepted: true,
    });

    console.log({ token });
    if (error) {
      console.error("Error creating account token:", error);
      return;
    }

    const formData = new FormData();
    formData.append("account_token", token.id);
    formData.append("email", email);

    const response = await axiosInstance.post(
      `create_stripe_account/${dealId}`,
      formData
    );

    // Handling the response
    if (response.status === 200) {
      console.log("Account created successfully:", response.data);
    } else {
      console.log("Failed to create account:", response);
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
    const response = await axiosInstance.post(
      `/onboarding_link/${accountId}`,
      {
        refresh_url: refreshUrl,
        return_url: returnUrl,
      },
      {
        headers: {
          "Content-Type": "application/json",
          // Add any additional headers if needed
        },
      }
    );
    console.log({ response });
    // Handling the success response
    if (response.status === 200) {
      const { onboarding_url } = response.data.onboarding_url;

      console.log("Account onboarding link generated successfully:");
      console.log("Onboarding Link:", onboarding_url);
      // console.log("Link Expiration Time:", new Date(expires_at * 1000));

      // You can redirect to the onboarding link
      window.location.href = onboarding_url;
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

export function calculateDaysBetweenDates(startDate, endDate) {
  // Parse the dates
  const start = new Date(startDate);
  const end = new Date(endDate);

  // Calculate the difference in milliseconds and convert to days
  const differenceInTime = end - start;
  const differenceInDays = differenceInTime / (1000 * 60 * 60 * 24);

  return differenceInDays;
}

export function formatDateReversed(dateString, locale) {
  const date = new Date(dateString);

  // Format the date to month and day format with month first based on the locale
  const formattedMonth = new Intl.DateTimeFormat(locale, {
    month: "long",
  }).format(date);
  const formattedDay = new Intl.DateTimeFormat(locale, {
    day: "numeric",
  }).format(date);

  return `${formattedMonth} ${formattedDay}`;
}

export function formatDate(dateStr, language = "en") {
  const date = new Date(dateStr);

  // Capitalized weekday and month names for exact control over language output
  const weekdays = {
    en: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    fr: [
      "Dimanche",
      "Lundi",
      "Mardi",
      "Mercredi",
      "Jeudi",
      "Vendredi",
      "Samedi",
    ],
  };
  const months = {
    en: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    fr: [
      "Janvier",
      "Février",
      "Mars",
      "Avril",
      "Mai",
      "Juin",
      "Juillet",
      "Août",
      "Septembre",
      "Octobre",
      "Novembre",
      "Décembre",
    ],
  };

  // Get day of the week, month, and day
  const weekday = weekdays[language][date.getDay()];
  const month = months[language][date.getMonth()];
  const day = date.getDate();

  // Time string based on language
  const timeString =
    language === "en" ? "between 10 a.m. and 3 p.m." : "entre 10 h et 15 h";

  return `${weekday} ${month} ${day}, ${timeString}`;
}
