import axios from "axios";
// const BASE_URL = "https://thegood.deals/api";
const BASE_URL =
  "https://337e-2401-4900-62ff-7a55-6c40-749b-b9bc-d0a.ngrok-free.app/";
// const BASE_URL = "https://";
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
    "access-control-allow-credentials": true,
    "ngrok-skip-browser-warning": "69420",
  },
  withCredentials: true,
});
