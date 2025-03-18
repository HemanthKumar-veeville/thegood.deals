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
    if (!navigator.serviceWorker) return;

    const handleMessage = (event) => {
      if (event.data?.type === "UPDATE_AVAILABLE") {
        onUpdateAvailable?.();
      }
    };

    // Listen for service worker updates
    navigator.serviceWorker.addEventListener("message", handleMessage);

    return () => {
      navigator.serviceWorker.removeEventListener("message", handleMessage);
    };
  }, [onUpdateAvailable]);

  // Function to trigger update
  const triggerUpdate = React.useCallback(() => {
    if (!navigator.serviceWorker?.controller) return;

    // When user confirms update, trigger skipWaiting and reload once
    navigator.serviceWorker.controller.postMessage("skipWaiting");
    window.location.reload();
  }, []);

  return { triggerUpdate };
};

// Register service worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/service-worker.js", { scope: "/" })
      .then((registration) => {
        console.log("Service Worker registered successfully");

        // Watch for new service workers
        registration.addEventListener("updatefound", () => {
          const newWorker = registration.installing;

          newWorker.addEventListener("statechange", () => {
            // When the new service worker is installed
            if (
              newWorker.state === "installed" &&
              navigator.serviceWorker.controller
            ) {
              // New content is available
              window.dispatchEvent(new CustomEvent("serviceWorkerUpdate"));
            }
          });
        });

        // Check for updates periodically (every hour)
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
