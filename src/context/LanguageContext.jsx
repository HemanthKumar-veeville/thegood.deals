import React, { createContext, useState, useContext } from "react";
import i18next from "i18next";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const initialLanguage = i18next.language === "fr" ? "french" : "english";
  const [selectedLanguage, setSelectedLanguage] = useState(initialLanguage);

  return (
    <LanguageContext.Provider value={{ selectedLanguage, setSelectedLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
