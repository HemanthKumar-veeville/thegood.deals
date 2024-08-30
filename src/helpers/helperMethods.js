import axios from "axios";
const BASE_URL =
  "https://1dc1-2409-4071-2490-e61a-4d5d-41f6-7927-ceba.ngrok-free.app/";

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
