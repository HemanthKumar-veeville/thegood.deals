import React, { useEffect, useState } from "react";
import { ChevronDown } from "../../icons/ChevronDown";
import { UK_Flag_Icon, FranceFlag } from "../../images";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../context/LanguageContext";

export const LanguageDropdown = ({ handleLanguageOpen }) => {
  const { t, i18n } = useTranslation();
  const { selectedLanguage, setSelectedLanguage } = useLanguage();
  const currentLanguage = i18n.language;

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage === "english" ? "en" : "fr");
  }, [selectedLanguage]);

  return (
    <div
      className="relative inline-flex items-center cursor-pointer mr-1"
      onClick={handleLanguageOpen}
    >
      <div className="flex items-center">
        <img
          src={currentLanguage === "en" ? UK_Flag_Icon : FranceFlag}
          style={{
            width: "20px",
            height: currentLanguage === "en" ? "17px" : "20px",
          }}
          alt={
            currentLanguage === "en"
              ? t("side_bar.flag_alt.uk")
              : t("side_bar.flag_alt.france")
          }
        />
        <ChevronDown className="ml-1 w-4 h-4" />
      </div>
    </div>
  );
};
