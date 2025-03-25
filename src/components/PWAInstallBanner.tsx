import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiDownload, FiX } from "react-icons/fi";
import InstallGuideModal from "./InstallGuideModal";
import { useTranslation } from "react-i18next";

const PWAInstallBanner: React.FC = () => {
  const [showBanner, setShowBanner] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const { t } = useTranslation();

  const handleInstallClick = () => {
    setShowModal(true);
  };

  const handleCloseBanner = () => {
    setShowBanner(false);
  };

  return (
    <>
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            className="max-w-[400px] mx-auto fixed bottom-0 left-0 right-0 bg-primary-color border-t border-secondary-color shadow-shadow-2 z-50 w-full"
          >
            <div className="max-w-7xl mx-auto  px-4">
              <div className="flex items-center justify-between ">
                <div
                  className="flex items-center space-x-3  py-3"
                  onClick={handleInstallClick}
                  onKeyDown={(e) => e.key === "Enter" && handleInstallClick()}
                >
                  <div className="flex-shrink-0">
                    <FiDownload className="h-6 w-6 text-white" />
                  </div>
                  <div
                    tabIndex={0}
                    className="inline-flex items-center text-sm font-body-medium-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-color transition-all duration-200 cursor-pointer"
                    aria-label={t("pwa.install_aria_label")}
                  >
                    {t("pwa.add_to_home")}
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={handleCloseBanner}
                    className="inline-flex items-center p-1 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary-color transition-all duration-200 cursor-pointer"
                    aria-label="Close banner"
                  >
                    <FiX className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <InstallGuideModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />
    </>
  );
};

export default PWAInstallBanner;
