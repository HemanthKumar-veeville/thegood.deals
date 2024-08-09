import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    "https://2dff-2401-4900-22e8-71bb-3c85-82d0-a50b-6ee3.ngrok-free.app/", // Replace with your API base URL
  headers: {
    "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
  },
});
