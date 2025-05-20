import React, { useState } from "react";
import { usePWAInstall } from "../hooks/usePWAInstall";
import { InstallModal } from "./InstallModal";
import { useTranslation } from "react-i18next";

export const InstallButton = ({
  className = "",
  variant = "primary",
  showIcon = true,
  text,
  position = "inline", // inline, floating, banner
}) => {
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();
  const {
    isInstallable,
    isInstalled,
    installError,
    promptInstall,
    deviceInfo,
  } = usePWAInstall();

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
    "flex items-center justify-center transition-all duration-200 font-medium";
  const variants = {
    primary:
      "bg-primary-color text-white hover:bg-primary-color/90 active:bg-primary-color/80",
    secondary:
      "bg-graygray text-primary-color hover:bg-graygray-2 active:bg-graygray-3",
    outline:
      "border-2 border-primary-color text-primary-color hover:bg-primary-background active:bg-primary-background/80",
    minimal:
      "text-primary-color hover:text-primary-color/80 active:text-primary-color/60",
  };

  const positions = {
    inline: "px-4 py-2 rounded-lg",
    floating:
      "fixed bottom-4 right-4 px-6 py-3 rounded-full shadow-lg hover:shadow-xl bg-primary-color text-white",
    banner:
      "fixed bottom-0 left-0 right-0 px-4 py-3 bg-primary-background shadow-lg",
  };

  const getButtonContent = () => (
    <>
      {showIcon && (
        <svg
          className={`w-5 h-5 ${text ? "mr-2" : ""}`}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      )}
      {text && <span>{text || t("pwa.install.button_text")}</span>}
      {installError && position === "banner" && (
        <span className="ml-2 text-sm text-red-600">{installError}</span>
      )}
    </>
  );

  return (
    <>
      <button
        onClick={handleInstallClick}
        className={`${baseStyles} ${variants[variant]} ${positions[position]} ${className}`}
        aria-label={t("pwa.install.button_text")}
      >
        {getButtonContent()}
      </button>

      <InstallModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </>
  );
};
