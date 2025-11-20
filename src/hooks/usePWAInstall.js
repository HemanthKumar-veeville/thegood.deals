import { useState, useEffect, useCallback } from "react";
import { getDeviceInfo } from "../utils/deviceDetector";
import { useTranslation } from "react-i18next";

export const usePWAInstall = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstallable, setIsInstallable] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [installError, setInstallError] = useState(null);
  const deviceInfo = getDeviceInfo();
  const { t } = useTranslation();

  // Track installation analytics
  const trackInstallAttempt = useCallback(
    (success, method, error = null) => {
      // You can implement your analytics here
      console.log("Installation attempt:", {
        success,
        method,
        error,
        deviceInfo,
      });
    },
    [deviceInfo]
  );

  useEffect(() => {
    // Check if app is already installed
    const checkInstallation = () => {
      const isStandalone =
        window.matchMedia("(display-mode: standalone)").matches ||
        window.navigator.standalone ||
        document.referrer.includes("android-app://");

      setIsInstalled(isStandalone);
      if (isStandalone) {
        trackInstallAttempt(true, "already_installed");
      }
    };

    checkInstallation();

    // Listen for display mode changes
    const mediaQuery = window.matchMedia("(display-mode: standalone)");
    const handleDisplayModeChange = (e) => {
      setIsInstalled(e.matches);
      if (e.matches) {
        trackInstallAttempt(true, "display_mode_change");
      }
    };

    mediaQuery.addListener(handleDisplayModeChange);

    // Listen for the beforeinstallprompt event
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
      setInstallError(null);
    };

    // Listen for successful installation
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setIsInstallable(false);
      setDeferredPrompt(null);
      setInstallError(null);
      trackInstallAttempt(true, "native_install");
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    return () => {
      mediaQuery.removeListener(handleDisplayModeChange);
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, [trackInstallAttempt]);

  const promptInstall = async () => {
    if (!deferredPrompt) {
      setInstallError("Installation prompt not available");
      trackInstallAttempt(false, "prompt_unavailable");
      return false;
    }

    try {
      // Show the install prompt
      const result = await deferredPrompt.prompt();

      // Wait for the user to respond to the prompt
      const choiceResult = await result;

      if (choiceResult.outcome === "accepted") {
        trackInstallAttempt(true, "user_accepted");
        return true;
      } else {
        setInstallError("User declined installation");
        trackInstallAttempt(false, "user_declined");
        return false;
      }
    } catch (error) {
      const errorMessage = "Failed to install: " + error.message;
      setInstallError(errorMessage);
      trackInstallAttempt(false, "installation_error", errorMessage);
      return false;
    } finally {
      setDeferredPrompt(null);
      setIsInstallable(false);
    }
  };

  const getInstallInstructions = () => {
    if (deviceInfo.isIOS) {
      return {
        title: t("pwa.install.modal_title"),
        steps: [t("pwa.ios_step_1"), t("pwa.ios_step_2"), t("pwa.ios_step_3")],
        images: {
          share: "/images/ios-share.png",
          addToHome: "/images/ios-add-to-home.png",
        },
      };
    }

    if (deviceInfo.isAndroid) {
      if (deviceInfo.browser === "chrome") {
        return {
          title: t("pwa.install.modal_title"),
          steps: [
            t("pwa.chrome_step_1"),
            t("pwa.chrome_step_2"),
            t("pwa.chrome_step_3"),
          ],
          images: {
            menu: "/images/android-menu.png",
            installPrompt: "/images/android-install-prompt.png",
          },
        };
      }
      return {
        title: t("pwa.install.modal_title"),
        steps: [
          t("pwa.firefox_step_1"),
          t("pwa.firefox_step_2"),
          t("pwa.firefox_step_3"),
        ],
      };
    }

    return {
      title: t("pwa.install.modal_title"),
      steps: [t("pwa.edge_step_1"), t("pwa.edge_step_2"), t("pwa.edge_step_3")],
      images: {
        browserIcon: "/images/desktop-install-icon.png",
        installPrompt: "/images/desktop-install-prompt.png",
      },
    };
  };

  return {
    isInstallable,
    isInstalled,
    installError,
    promptInstall,
    getInstallInstructions,
    deviceInfo,
  };
};
