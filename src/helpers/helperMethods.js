import axios from "axios";
const BASE_URL =
  "https://4e5f-2401-4900-331c-efac-cc6-3043-8fcb-c19c.ngrok-free.app/";

export const axiosInstance = axios.create({
  baseURL: BASE_URL, // Replace with your API base URL
  headers: {
    "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
    "access-control-allow-credentials": true,
    "ngrok-skip-browser-warning": "69420",
  },
  withCredentials: true,
});
