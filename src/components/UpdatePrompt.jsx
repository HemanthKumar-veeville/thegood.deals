import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useServiceWorkerUpdate } from "../main";
import { HiDownload } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { MdSystemUpdateAlt } from "react-icons/md";

export function UpdatePrompt() {
  const [showPrompt, setShowPrompt] = useState(false);
  const { t } = useTranslation();

  useServiceWorkerUpdate(() => {
    setShowPrompt(true);
    // Store update state in localStorage
    localStorage.setItem("updateAvailable", "true");
  });

  useEffect(() => {
    // Check if there was a pending update
    const pendingUpdate = localStorage.getItem("updateAvailable");
    if (pendingUpdate === "true") {
      setShowPrompt(true);
    }
  }, []);

  const handleUpdate = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setShowPrompt(false);
    localStorage.removeItem("updateAvailable");
    // Send skip waiting message to service worker
    if (navigator.serviceWorker.controller) {
      navigator.serviceWorker.controller.postMessage("skipWaiting");
      // Reload the page after a short delay to ensure the new service worker is active
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  };

  const handleDismiss = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    setShowPrompt(false);
    localStorage.removeItem("updateAvailable");
  };

  if (!showPrompt) return null;

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleUpdate}
      onKeyDown={(e) => e.key === "Enter" && handleUpdate(e)}
      className="mx-auto max-w-[400px] fixed bottom-[60px] left-0 right-0 z-50 flex items-center justify-center gap-3 bg-[#2a4e4a]/95 backdrop-blur-sm text-white px-6 py-3.5 shadow-lg transition-all duration-300 ease-in-out font-medium cursor-pointer w-full border-t border-white/10"
      aria-label={t("app.update_available_aria_label", "Update application")}
    >
      <MdSystemUpdateAlt className="w-5 h-5" aria-hidden="true" />
      <span>
        {t("app.new_version_available", "A new version is available!")}
      </span>
      <button
        type="button"
        onClick={handleDismiss}
        onKeyDown={(e) => e.key === "Enter" && handleDismiss(e)}
        className="absolute top-1 right-1 p-1.5 rounded-full bg-white border border-gray-200 text-gray-500 hover:text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2a4e4a] transition-all shadow-sm z-50"
        aria-label={t("app.dismiss_update", "Dismiss update notification")}
      >
        <IoMdClose className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
