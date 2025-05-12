import { useState, useEffect } from "react";
import { getDeviceInfo } from "../utils/deviceDetector";

export const usePWAInstall = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const deviceInfo = getDeviceInfo();

  useEffect(() => {
    // Check if app is already installed
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setIsInstalled(true);
    }

    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    // Listen for successful installation
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setIsInstallable(false);
      setDeferredPrompt(null);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const promptInstall = async () => {
    if (!deferredPrompt) return false;

    try {
      // Show the install prompt
      const result = await deferredPrompt.prompt();

      // Wait for the user to respond to the prompt
      const choiceResult = await result;

      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt");
        return true;
      } else {
        console.log("User dismissed the install prompt");
        return false;
      }
    } catch (error) {
      console.error("Error installing PWA:", error);
      return false;
    } finally {
      setDeferredPrompt(null);
      setIsInstallable(false);
    }
  };

  const getInstallInstructions = () => {
    if (deviceInfo.isIOS) {
      return {
        title: "Install on iOS",
        steps: [
          "Tap the Share button in Safari",
          'Scroll down and tap "Add to Home Screen"',
          'Tap "Add" to confirm',
        ],
      };
    }

    if (deviceInfo.isAndroid && deviceInfo.browser === "chrome") {
      return {
        title: "Install on Android",
        steps: [
          "Tap the menu button (⋮)",
          'Tap "Install app" or "Add to Home screen"',
          "Follow the installation prompts",
        ],
      };
    }

    return {
      title: "Install on Desktop",
      steps: [
        "Click the install icon in your browser's address bar",
        'Click "Install" in the prompt that appears',
        "The app will install and create a desktop shortcut",
      ],
    };
  };

  return {
    isInstallable,
    isInstalled,
    promptInstall,
    getInstallInstructions,
    deviceInfo,
  };
};
