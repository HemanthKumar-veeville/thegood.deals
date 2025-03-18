import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/app/store";
import App from "./App";
import "./index.css";
import "./i18n";
import { LanguageProvider } from "./context/LanguageContext.jsx";

// Custom hook for service worker registration
export const useServiceWorkerUpdate = (onUpdateAvailable) => {
  React.useEffect(() => {
    const handleServiceWorkerUpdate = () => {
      if (typeof onUpdateAvailable === "function") {
        onUpdateAvailable();
      }
    };

    // Listen for update messages from service worker
    const handleMessage = (event) => {
      if (event.data && event.data.type === "UPDATE_AVAILABLE") {
        handleServiceWorkerUpdate();
      }
    };

    navigator.serviceWorker?.addEventListener("message", handleMessage);
    window.addEventListener("serviceWorkerUpdate", handleServiceWorkerUpdate);

    return () => {
      navigator.serviceWorker?.removeEventListener("message", handleMessage);
      window.removeEventListener(
        "serviceWorkerUpdate",
        handleServiceWorkerUpdate
      );
    };
  }, [onUpdateAvailable]);
};

// Register service worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js", { scope: "/" })
      .then((registration) => {
        console.log("Service Worker registered successfully");

        // Handle updates
        registration.addEventListener("updatefound", () => {
          const newWorker = registration.installing;

          newWorker.addEventListener("statechange", () => {
            // Only show update prompt if there are actual changes
            if (
              newWorker.state === "installed" &&
              navigator.serviceWorker.controller
            ) {
              // The actual update check is now handled by the service worker
              // It will send a message when real updates are detected
            }
          });
        });

        // Initial update check
        registration.update().catch(console.error);

        // Check for updates every hour
        setInterval(() => {
          registration.update().catch(console.error);
        }, 60 * 60 * 1000);
      })
      .catch((error) => {
        console.error("Service Worker registration failed:", error);
      });
  });
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </Provider>
);
