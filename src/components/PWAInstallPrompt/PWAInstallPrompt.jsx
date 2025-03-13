import { useState, useEffect } from "react";
import { HiDownload } from "react-icons/hi";
import { useTranslation } from "react-i18next";

const PWAInstallPrompt = ({ divClassName }) => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const { t } = useTranslation();
  const [browserInfo, setBrowserInfo] = useState({
    isIOS: false,
    isFirefox: false,
    isChromium: false,
    isSamsung: false,
  });

  useEffect(() => {
    // Detect browser types
    const ua = window.navigator.userAgent.toLowerCase();
    const isIOS = /iphone|ipad|ipod/.test(ua);
    const isFirefox = ua.includes("firefox");
    const isSamsung = ua.includes("samsungbrowser");
    const isChromium = !isIOS && !isFirefox && !isSamsung;

    setBrowserInfo({
      isIOS,
      isFirefox,
      isChromium,
      isSamsung,
    });

    // Already installed check
    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      window.navigator.standalone ||
      document.referrer.includes("android-app://");

    if (isStandalone) {
      console.log(t("pwa.already_installed"));
      setIsInstallable(false);
      return;
    }

    const handleBeforeInstallPrompt = (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      console.log("Before install prompt event triggered");
      setDeferredPrompt(e);
      setIsInstallable(true);
      console.log(t("pwa.installable"));
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // Set installable for iOS
    if (isIOS && !window.navigator.standalone) {
      setIsInstallable(true);
    }

    // Set installable for Firefox
    if (isFirefox) {
      setIsInstallable(true);
    }

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, [t]);

  const handleInstallClick = async () => {
    // For Chromium-based browsers and Samsung Internet
    if (deferredPrompt) {
      console.log(t("pwa.install_prompt"));
      deferredPrompt.prompt();

      const { outcome } = await deferredPrompt.userChoice;
      console.log(t("pwa.user_response", { outcome }));

      if (outcome === "accepted") {
        setIsInstallable(false);
        console.log(t("pwa.installation_accepted"));
      }

      setDeferredPrompt(null);
      return;
    }

    // For other browsers, show instructions modal
    showBrowserSpecificInstructions();
  };

  const showBrowserSpecificInstructions = () => {
    if (browserInfo.isIOS) {
      alert(t("pwa.ios_instructions"));
    } else if (browserInfo.isFirefox) {
      alert(t("pwa.firefox_instructions"));
    }
  };

  if (!isInstallable) return null;

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleInstallClick}
      onKeyDown={(e) => e.key === "Enter" && handleInstallClick()}
      className={divClassName}
      aria-label="Install application"
    >
      <HiDownload className="w-5 h-5" aria-hidden="true" />
      <span>
        {browserInfo.isIOS
          ? t("pwa.add_to_home")
          : browserInfo.isFirefox
          ? t("pwa.install_app_menu")
          : t("pwa.install_app")}
      </span>
    </div>
  );
};

export default PWAInstallPrompt;
