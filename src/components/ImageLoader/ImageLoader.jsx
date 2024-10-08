import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next"; // Importing useTranslation hook

const ImageLoader = ({ picture, index }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { t } = useTranslation(); // Initializing translation hook

  useEffect(() => {
    const img = new Image();
    img.src = picture;
    img.onload = () => {
      setIsLoaded(true);
    };
    img.onerror = () => {
      console.error(t("imageLoader.error")); // Localized error message
    };
  }, [picture, t]);

  return (
    <div className="relative w-full h-full rounded-md overflow-hidden">
      {isLoaded ? (
        <img
          src={picture}
          alt={`${t("imageLoader.imageAlt")} ${index + 1}`} // Using translated alt text
          className={`object-contain w-full h-full rounded-md ${
            index === 0 ? "border-4 border-yellow-500" : ""
          }`}
        />
      ) : (
        <div className="w-full h-full bg-gray-200 rounded-md relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
          <span className="sr-only">{t("imageLoader.loading")}</span>{" "}
          {/* Screen reader text for loading */}
        </div>
      )}
    </div>
  );
};

export default ImageLoader;
