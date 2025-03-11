import { useState, useEffect } from "react";
import { HiDownload } from "react-icons/hi";

const PWAInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);
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
    const isFirefox = ua.includes("firefox") && ua.includes("android");
    const isSamsung = ua.includes("samsungbrowser");
    const isChromium = /chrome|edge|opera/.test(ua) && !isSamsung;

    setBrowserInfo({
      isIOS,
      isFirefox,
      isChromium,
      isSamsung,
    });

    // Already installed check
    if (window.matchMedia("(display-mode: standalone)").matches) {
      console.log("🎉 App is already installed and running in standalone mode");
      setIsInstallable(false);
      return;
    }

    // Handle Chromium-based browsers (Chrome, Edge, Opera) and Samsung Internet
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
      console.log("👋 PWA is installable!");
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    // Set installable for iOS
    if (isIOS) {
      // Check if the app is not already installed
      if (!window.navigator.standalone) {
        setIsInstallable(true);
      }
    }

    // Set installable for Firefox Android
    if (isFirefox) {
      setIsInstallable(true);
    }

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
    };
  }, []);

  const handleInstallClick = async () => {
    // For Chromium-based browsers and Samsung Internet
    if (deferredPrompt) {
      console.log("🚀 Showing install prompt...");
      deferredPrompt.prompt();

      const { outcome } = await deferredPrompt.userChoice;
      console.log(`👥 User response to install prompt: ${outcome}`);

      if (outcome === "accepted") {
        setIsInstallable(false);
        console.log("✅ PWA installation accepted!");
      }

      setDeferredPrompt(null);
      return;
    }

    // For other browsers, show instructions modal
    showBrowserSpecificInstructions();
  };

  const showBrowserSpecificInstructions = () => {
    if (browserInfo.isIOS) {
      alert(
        "To install this app on iOS:\n\n" +
          "1. Tap the Share button in Safari\n" +
          '2. Scroll down and tap "Add to Home Screen"\n' +
          '3. Tap "Add" to confirm'
      );
    } else if (browserInfo.isFirefox) {
      alert(
        "To install this app on Firefox:\n\n" +
          "1. Tap the menu button (⋮)\n" +
          '2. Tap "Install"\n' +
          '3. Tap "Install" again to confirm'
      );
    }
  };

  if (!isInstallable) return null;

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={handleInstallClick}
      onKeyDown={(e) => e.key === "Enter" && handleInstallClick()}
      className="fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-[#2a4e4a] text-white px-6 py-2.5 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl font-medium cursor-pointer"
      aria-label="Install application"
    >
      <HiDownload className="w-5 h-5" aria-hidden="true" />
      <span>
        {browserInfo.isIOS
          ? "Add to Home Screen"
          : browserInfo.isFirefox
          ? "Install App (Tap Menu)"
          : "Install App"}
      </span>
    </div>
  );
};

export default PWAInstallPrompt;
