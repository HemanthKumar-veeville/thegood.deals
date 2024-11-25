import { axiosInstance } from "./helperMethods";

let isLoggingError = false;

function sendErrorToServer(errorDetails) {
  const LOGGING_URL = "/api/log-error";

  // Avoid recursive logging
  if (isLoggingError || errorDetails.url?.includes(LOGGING_URL)) {
    console.warn("Skipping logging to prevent infinite loop:", errorDetails);
    return;
  }

  isLoggingError = true;

  const enrichedError = {
    ...errorDetails,
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    currentPage: window.location.href,
    timestamp: new Date().toISOString(),
  };

  axiosInstance
    .post(LOGGING_URL, enrichedError)
    .catch((error) => {
      console.error("Failed to log error:", error);
    })
    .finally(() => {
      isLoggingError = false;
    });
}

function setupAxiosInterceptors() {
  axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
      const LOGGING_URL = "/api/log-error";

      // Skip logging for the logging endpoint
      if (error.config?.url.includes(LOGGING_URL)) {
        return Promise.reject(error);
      }

      // Extract detailed error information
      const errorDetails = {
        type: "network",
        message: error.message || "No error message provided",
        requestUrl: error.config?.url || "No Request URL",
        requestMethod: error.config?.method || "No Request Method",
        requestBody: error.config?.data || "No Request Body",
        statusCode: error.response?.status || "No Response Status",
        responseData: error.response?.data || "No Response Data",
      };

      sendErrorToServer(errorDetails);

      return Promise.reject(error);
    }
  );
}

function setupGlobalErrorHandlers() {
  // Capture runtime JavaScript errors
  window.onerror = (message, source, lineno, colno, error) => {
    sendErrorToServer({
      type: "javascript",
      message,
      source,
      lineno,
      colno,
      stack: error?.stack || "No stack trace",
    });
  };

  // Capture unhandled promise rejections
  window.addEventListener("unhandledrejection", (event) => {
    sendErrorToServer({
      type: "promise",
      message: "Unhandled promise rejection",
      reason: event.reason || "No reason provided",
      stack: event.reason?.stack || "",
    });
  });
}

export function initializeErrorLogging() {
  setupGlobalErrorHandlers();
  setupAxiosInterceptors();
}
