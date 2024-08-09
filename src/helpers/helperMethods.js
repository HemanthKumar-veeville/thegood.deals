import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://67b2-223-186-45-242.ngrok-free.app/", // Replace with your API base URL
  headers: {
    "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
  },
});
