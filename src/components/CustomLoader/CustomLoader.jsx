import React from "react";
import { GiphyLoader } from "../../images";
import { useTranslation } from "react-i18next";

const CustomLoader = ({ overlay = false }) => {
  const { t } = useTranslation();

  const wrapperClass = overlay
    ? "fixed inset-0 z-[200] flex items-center justify-center bg-black/40"
    : "flex items-start justify-center h-full w-full bg-primary bg-opacity-70 !absolute top-64 right-2 min-h-screen";

  return (
    <div
      className={wrapperClass}
      role="status"
      aria-live="polite"
      aria-busy="true"
      aria-label={t("customLoader.loading")}
    >
      <img
        src={GiphyLoader}
        alt={t("customLoader.loading")}
        className="w-24 h-24 rounded-2xl"
      />
    </div>
  );
};

export default CustomLoader;
