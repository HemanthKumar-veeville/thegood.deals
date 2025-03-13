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
    // Check if user has already dismissed or installed the PWA
    const hasInteractedWithPWA = localStorage.getItem("pwaInteraction");
    if (hasInteractedWithPWA === "installed") {
      setIsInstallable(false);
      return;
    }

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
      localStorage.setItem("pwaInteraction", "installed");
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

    // Set installable for iOS and Firefox if not already installed
    if ((isIOS && !window.navigator.standalone) || isFirefox) {
      const shouldShowPrompt =
        localStorage.getItem("pwaInteraction") !== "dismissed";
      setIsInstallable(shouldShowPrompt);
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
        localStorage.setItem("pwaInteraction", "installed");
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
    // After showing instructions, we can optionally hide the button
    // Uncomment the following lines if you want to hide the button after showing instructions
    // setIsInstallable(false);
    // localStorage.setItem('pwaInteraction', 'dismissed');
  };

  if (!isInstallable) return null;

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleInstallClick}
      onKeyDown={(e) => e.key === "Enter" && handleInstallClick()}
      className={divClassName}
      aria-label={t("pwa.install_aria_label")}
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
