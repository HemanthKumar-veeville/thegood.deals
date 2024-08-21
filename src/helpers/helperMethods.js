import axios from "axios";
const BASE_URL =
  "https://0168-2401-4900-330d-e004-94e4-e32f-db37-e5f1.ngrok-free.app/";

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
