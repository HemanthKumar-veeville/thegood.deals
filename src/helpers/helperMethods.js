import axios from "axios";
const BASE_URL = "https://thegood.deals/api";
// const BASE_URL =
// "https://3a36-2401-4900-62ad-807f-79fd-3eb2-e54-8796.ngrok-free.app/";
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
