import React, { useState } from "react";
import { ChevronDown } from "../../icons/ChevronDown";
import { UK_Flag_Icon, FranceFlag } from "../../images";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../context/LanguageContext";

export const LanguageDropdown = ({ handleLanguageOpen }) => {
  const { t, i18n } = useTranslation();
  const { selectedLanguage, setSelectedLanguage } = useLanguage();

  console.log({ selectedLanguage });
  return (
    <div
      className="relative inline-flex items-center cursor-pointer mr-1"
      onClick={handleLanguageOpen}
    >
      <div className="flex items-center">
        <img
          src={selectedLanguage === "english" ? UK_Flag_Icon : FranceFlag}
          style={{
            width: "20px",
            height: selectedLanguage === "english" ? "17px" : "20px",
          }}
          alt={
            selectedLanguage === "english"
              ? t("side_bar.flag_alt.uk")
              : t("side_bar.flag_alt.france")
          }
        />
        <ChevronDown className="ml-1 w-4 h-4" />
      </div>
    </div>
  );
};
