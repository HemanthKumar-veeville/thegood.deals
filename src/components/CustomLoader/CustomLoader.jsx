import React, { useEffect } from "react";
import { GiphyLoader } from "../../images";
import { useTranslation } from "react-i18next";

const CustomLoader = ({ isOverlay = false }) => {
  const { t } = useTranslation(); // Initialize the translation hook

  useEffect(() => {
    if (!isOverlay) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOverlay]);

  const loaderContainerClass = isOverlay
    ? "fixed inset-0 z-[9999] flex items-center justify-center bg-primary bg-opacity-80 backdrop-blur-[1px]"
    : "flex items-start justify-center h-full w-full bg-primary bg-opacity-70 !absolute top-64 right-2 min-h-screen";

  return (
    <div
      className={loaderContainerClass}
      role={isOverlay ? "status" : undefined}
      aria-live={isOverlay ? "polite" : undefined}
      aria-label={isOverlay ? t("customLoader.loading") : undefined}
      aria-busy={isOverlay ? "true" : undefined}
    >
      <img
        src={GiphyLoader}
        alt={t("customLoader.loading")} // Use translated text
        className="w-24 h-24 rounded-2xl"
      />
    </div>
  );
};

export default CustomLoader;
