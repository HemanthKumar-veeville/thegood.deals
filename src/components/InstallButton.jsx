import React, { useState } from "react";
import { usePWAInstall } from "../hooks/usePWAInstall";
import { InstallModal } from "./InstallModal";

export const InstallButton = ({ className = "", variant = "primary" }) => {
  const [showModal, setShowModal] = useState(false);
  const { isInstallable, isInstalled, promptInstall, deviceInfo } =
    usePWAInstall();

  // Don't render if already installed
  if (isInstalled) return null;

  const handleInstallClick = async () => {
    // For iOS, always show the modal with instructions
    if (deviceInfo.isIOS) {
      setShowModal(true);
      return;
    }

    // For other devices, try the install prompt first
    if (isInstallable) {
      const installed = await promptInstall();
      if (!installed) {
        // If installation failed or was dismissed, show the modal with instructions
        setShowModal(true);
      }
    } else {
      // If not installable, show the modal with instructions
      setShowModal(true);
    }
  };

  const baseStyles =
    "flex items-center justify-center px-4 py-2 rounded-lg font-medium transition-colors duration-200";
  const variants = {
    primary: "bg-black text-white hover:bg-gray-800",
    secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    outline: "border-2 border-black text-black hover:bg-gray-100",
  };

  return (
    <>
      <button
        onClick={handleInstallClick}
        className={`${baseStyles} ${variants[variant]} ${className}`}
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        Install App
      </button>

      <InstallModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};
