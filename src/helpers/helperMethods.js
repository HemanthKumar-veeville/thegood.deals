import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    "https://9f94-2401-4900-61ad-809c-8973-56fd-46f7-2e30.ngrok-free.app/", // Replace with your API base URL
  headers: {
    "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
    "access-control-allow-credentials": true,
    "ngrok-skip-browser-warning": "69420",
  },
  withCredentials: true,
});
