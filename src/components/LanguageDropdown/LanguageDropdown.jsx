import React, { useState } from "react";
import { ChevronDown } from "../../icons/ChevronDown";

const languages = [
  { code: "fr", label: "French", flag: "🇫🇷" },
  { code: "en", label: "English", flag: "🇬🇧" },
];

export const LanguageDropdown = ({ handleLanguageOpen }) => {
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  return (
    <div
      className="relative inline-flex items-center cursor-pointer"
      onClick={() => handleLanguageOpen(selectedLanguage.code)}
    >
      <div className="flex items-center">
        <span className="mr-2">{selectedLanguage.flag}</span>
        <ChevronDown className="ml-1" />
      </div>
    </div>
  );
};
