import axios from "axios";
const BASE_URL =
  "https://a153-2401-4900-62ad-817f-9d27-fca9-1fa4-5b30.ngrok-free.app/";

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
