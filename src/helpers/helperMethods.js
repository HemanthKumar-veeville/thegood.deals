import axios from "axios";
const BASE_URL = "https://13.39.41.62/";
// const BASE_URL = "https://5905-49-205-86-76.ngrok-free.app/";
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
