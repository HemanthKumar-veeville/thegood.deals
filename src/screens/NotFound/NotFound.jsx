import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleGoHome = () => {
    navigate("/");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      handleGoHome();
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 [font-family:'Inter',Helvetica]">
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="text-8xl sm:text-9xl font-bold text-primary-500 mb-6">
          404
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">
          {t("notFound.heading") || "Oops! Page not found"}
        </h1>
        <p className="text-base sm:text-lg text-gray-500 mb-10 text-center max-w-lg">
          {t("notFound.description") ||
            "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."}
        </p>
        <button
          onClick={handleGoHome}
          onKeyDown={handleKeyDown}
          className="bg-primary-color text-white px-4 py-2 rounded-md"
          tabIndex={0}
          aria-label={t("notFound.goHome") || "Go back to homepage"}
        >
          {t("notFound.goHome") || "Go back to homepage"}
        </button>
      </div>
    </div>
  );
};

export default NotFound;
