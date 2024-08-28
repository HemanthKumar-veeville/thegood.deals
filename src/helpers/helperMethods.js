import axios from "axios";
const BASE_URL =
  "https://c566-2401-4900-619d-80a5-6d21-fc67-7a51-7a15.ngrok-free.app/";

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
