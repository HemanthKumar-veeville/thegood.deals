import { useState, useEffect } from "react";
import { HiDownload } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import "sweetalert2/src/sweetalert2.scss";

const MySwal = withReactContent(Swal);

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
    const getInstructions = () => {
      if (browserInfo.isIOS) {
        return `
          <div class="space-y-4">
            <h3 class="text-lg font-semibold text-gray-700 mb-2">${t(
              "pwa.ios_install_title"
            )}</h3>
            <ol class="space-y-3">
              <li class="flex items-start">
                <span class="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#2a4e4a] text-white text-sm mr-3">1</span>
                <p class="text-gray-600">${t("pwa.ios_step_1")}</p>
              </li>
              <li class="flex items-start">
                <span class="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#2a4e4a] text-white text-sm mr-3">2</span>
                <p class="text-gray-600">${t("pwa.ios_step_2")}</p>
              </li>
              <li class="flex items-start">
                <span class="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#2a4e4a] text-white text-sm mr-3">3</span>
                <p class="text-gray-600">${t("pwa.ios_step_3")}</p>
              </li>
              <li class="flex items-start">
                <span class="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#2a4e4a] text-white text-sm mr-3">4</span>
                <p class="text-gray-600">${t("pwa.ios_step_4")}</p>
              </li>
            </ol>
          </div>
        `;
      } else if (browserInfo.isFirefox) {
        return `
          <div class="space-y-4">
            <h3 class="text-lg font-semibold text-gray-700 mb-2">${t(
              "pwa.firefox_install_title"
            )}</h3>
            <ol class="space-y-3">
              <li class="flex items-start">
                <span class="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#2a4e4a] text-white text-sm mr-3">1</span>
                <p class="text-gray-600">${t("pwa.firefox_step_1")}</p>
              </li>
              <li class="flex items-start">
                <span class="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#2a4e4a] text-white text-sm mr-3">2</span>
                <p class="text-gray-600">${t("pwa.firefox_step_2")}</p>
              </li>
              <li class="flex items-start">
                <span class="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#2a4e4a] text-white text-sm mr-3">3</span>
                <p class="text-gray-600">${t("pwa.firefox_step_3")}</p>
              </li>
              <li class="flex items-start">
                <span class="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#2a4e4a] text-white text-sm mr-3">4</span>
                <p class="text-gray-600">${t("pwa.firefox_step_4")}</p>
              </li>
            </ol>
          </div>
        `;
      }
      return "";
    };

    MySwal.fire({
      html: getInstructions(),
      icon: "none",
      showCloseButton: true,
      showConfirmButton: true,
      confirmButtonText: t("pwa.understand"),
      confirmButtonColor: "#2a4e4a",
      customClass: {
        container: "pwa-install-modal",
        popup: "rounded-xl p-6",
        title: "!border-b !border-gray-200 !pb-4",
        htmlContainer: "!mt-6 !text-left",
        closeButton: "focus:!outline-none hover:!opacity-75",
        confirmButton:
          "!px-6 !py-2.5 !text-sm !font-medium !rounded-lg !shadow-sm",
        actions: "!mt-6",
      },
      didClose: () => {
        // Optionally hide the install button after showing instructions
        // setIsInstallable(false);
        // localStorage.setItem('pwaInteraction', 'dismissed');
      },
    });
  };

  const handleDismiss = (e) => {
    e.stopPropagation(); // Prevent triggering the parent's onClick
    setIsInstallable(false);
    localStorage.setItem("pwaInteraction", "dismissed");
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
      <button
        type="button"
        onClick={handleDismiss}
        onKeyDown={(e) => e.key === "Enter" && handleDismiss(e)}
        className="absolute top-1 right-1 p-1.5 rounded-full bg-white border border-gray-200 text-gray-500 hover:text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#2a4e4a] transition-all shadow-sm z-50"
        aria-label="Dismiss PWA installation prompt"
      >
        <IoMdClose className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};

export default PWAInstallPrompt;
