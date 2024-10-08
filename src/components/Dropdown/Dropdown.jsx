import React, { useState } from "react";
import { ChevronDown1 } from "../../icons/ChevronDown1";
import Swal from "sweetalert2";
import "sweetalert2/src/sweetalert2.scss";
import { useTranslation } from "react-i18next"; // Import translation hook

export const Placeholder = () => {
  const { t } = useTranslation(); // Initialize translation
  const [selectedLanguage, setSelectedLanguage] = useState(
    t("placeholder.defaultLanguage")
  );

  const handleButtonClick = () => {
    Swal.fire({
      title: t("placeholder.selectLanguageTitle"),
      html: `
        <ul class="language-list space-y-2">
          <li class="language-item py-2 px-4 rounded-md cursor-pointer ${
            selectedLanguage !== t("placeholder.languageOptions.english")
              ? "bg-blue-100"
              : "bg-[#2a4e4a] text-whitewhite"
          } hover:bg-gray-200" data-language="${t(
        "placeholder.languageOptions.english"
      )}">${t("placeholder.languageOptions.english")}</li>
          <li class="language-item py-2 px-4 rounded-md cursor-pointer ${
            selectedLanguage !== t("placeholder.languageOptions.french")
              ? "bg-blue-100"
              : "bg-[#2a4e4a] text-whitewhite"
          } hover:bg-gray-200" data-language="${t(
        "placeholder.languageOptions.french"
      )}">${t("placeholder.languageOptions.french")}</li>
        </ul>
      `,
      showConfirmButton: false,
      showCancelButton: true,
      didOpen: () => {
        const languageItems =
          Swal.getPopup().querySelectorAll(".language-item");
        languageItems.forEach((item) => {
          item.addEventListener("click", () => {
            const language = item.getAttribute("data-language");
            setSelectedLanguage(language);
            Swal.close();
          });
        });
      },
    });
  };

  return (
    <div className="relative">
      <div
        className="flex items-center gap-2.5 px-5 py-3 bg-white rounded-md border border-solid border-gray-300 cursor-pointer"
        onClick={handleButtonClick}
      >
        <div className="flex items-center justify-between w-full">
          <div className="text-[#637381] font-medium text-base whitespace-nowrap">
            {selectedLanguage}
          </div>
          <ChevronDown1 className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};
