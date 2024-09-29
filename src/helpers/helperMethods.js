import axios from "axios";
const BASE_URL = "https://thegood.deals/api";
// const BASE_URL =
// "https://1f7e-2401-4900-2500-b823-d43f-2e7-c9ee-467c.ngrok-free.app/";
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
