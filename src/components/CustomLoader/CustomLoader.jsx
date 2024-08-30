import React from "react";
import { GiphyLoader } from "../../images";
import { useTranslation } from "react-i18next";

const CustomLoader = () => {
  const { t } = useTranslation(); // Initialize the translation hook

  return (
    <div className="flex items-start justify-center h-full w-full bg-primary bg-opacity-70 !absolute top-64 right-2 min-h-screen">
      <img
        src={GiphyLoader}
        alt={t("customLoader.loading")} // Use translated text
        className="w-24 h-24 rounded-2xl"
      />
    </div>
  );
};

export default CustomLoader;
