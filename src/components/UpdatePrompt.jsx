import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useServiceWorkerUpdate } from "../main";

export function UpdatePrompt() {
  const [showPrompt, setShowPrompt] = useState(false);
  const { t } = useTranslation();

  useServiceWorkerUpdate(() => {
    setShowPrompt(true);
  });

  const handleUpdate = () => {
    setShowPrompt(false);
    // Send skip waiting message to service worker
    if (navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage("skipWaiting");
    }
  };

  if (!showPrompt) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-[#2a4e4a] text-white p-4 rounded-lg shadow-lg animate-fade-in">
      <div className="flex items-center space-x-4">
        <span>
          {t("app.new_version_available", "A new version is available!")}
        </span>
        <button
          onClick={handleUpdate}
          className="px-4 py-2 bg-white text-[#2a4e4a] rounded-md hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#2a4e4a]"
        >
          {t("app.update_now", "Update")}
        </button>
      </div>
    </div>
  );
}
