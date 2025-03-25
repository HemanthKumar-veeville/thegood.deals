import React from "react";
import { FaChrome, FaSafari, FaFirefox, FaEdge } from "react-icons/fa";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useTranslation } from "react-i18next";

const MySwal = withReactContent(Swal);

interface InstallGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InstallGuideModal: React.FC<InstallGuideModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { t } = useTranslation();

  // Add scroll lock effect
  React.useEffect(() => {
    if (isOpen) {
      // Store current scroll position
      const scrollY = window.scrollY;

      // Add styles to body to prevent scrolling
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";

      // Cleanup function to restore scroll position
      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  const getBrowserInstructions = () => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isChrome = /chrome/.test(userAgent);
    const isSafari = /safari/.test(userAgent) && !isChrome;
    const isFirefox = /firefox/.test(userAgent);
    const isEdge = /edge/.test(userAgent);

    if (isChrome) {
      return {
        icon: <FaChrome className="w-8 h-8 text-[#fc661a]" />,
        steps: [
          t("pwa.chrome_step_1"),
          t("pwa.chrome_step_2"),
          t("pwa.chrome_step_3"),
        ],
      };
    }

    if (isSafari) {
      return {
        icon: <FaSafari className="w-8 h-8 text-[#fc661a]" />,
        steps: [t("pwa.ios_step_1"), t("pwa.ios_step_2"), t("pwa.ios_step_3")],
      };
    }

    if (isFirefox) {
      return {
        icon: <FaFirefox className="w-8 h-8 text-[#fc661a]" />,
        steps: [
          t("pwa.firefox_step_1"),
          t("pwa.firefox_step_2"),
          t("pwa.firefox_step_3"),
        ],
      };
    }

    if (isEdge) {
      return {
        icon: <FaEdge className="w-8 h-8 text-[#fc661a]" />,
        steps: [
          t("pwa.chrome_step_1"),
          t("pwa.chrome_step_2"),
          t("pwa.chrome_step_3"),
        ],
      };
    }

    return {
      icon: <FaChrome className="w-8 h-8 text-[#fc661a]" />,
      steps: [
        t("pwa.chrome_step_1"),
        t("pwa.chrome_step_2"),
        t("pwa.chrome_step_3"),
      ],
    };
  };

  React.useEffect(() => {
    if (isOpen) {
      const instructions = getBrowserInstructions();

      MySwal.fire({
        html: (
          <div className="flex flex-col items-center gap-4">
            <div className="flex items-center gap-3 mb-2">
              {instructions.icon}
              <h2 className="text-xl font-semibold text-[#1b4f4a]">
                {t("pwa.install_guide")}
              </h2>
            </div>
            <p className="text-[#1b4f4a] text-center">
              {t("pwa.install_prompt")}
            </p>
            <ol className="list-decimal list-inside space-y-2 text-left w-full">
              {instructions.steps.map((step, index) => (
                <li key={index} className="text-[#1b4f4a]">
                  {step}
                </li>
              ))}
            </ol>
          </div>
        ),
        showConfirmButton: true,
        confirmButtonText: t("pwa.understand"),
        confirmButtonColor: "#1b4f4a",
        customClass: {
          popup: "rounded-lg shadow-shadow-2 bg-[#f5f3ee]",
          confirmButton:
            "w-full mt-4 hover:bg-[#ffb130] transition-colors duration-200",
        },
        backdrop: true,
        allowOutsideClick: true,
        allowEscapeKey: true,
        willClose: onClose,
      });
    }
  }, [isOpen, onClose, t]);

  return null;
};

export default InstallGuideModal;
