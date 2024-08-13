import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    "https://eaf3-2401-4900-61cd-94be-2963-156d-467e-b42a.ngrok-free.app/", // Replace with your API base URL
  headers: {
    "Content-Type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
  },
});
