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
