// src/screens/LanguageDropDown/LanguageDropDown.jsx
import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { FranceFlag, UK_Flag_Icon } from "../../images";
import { useLanguage } from "../../context/LanguageContext";

/**
 * LanguageDropDown component
 *
 * This component renders a LanguageDropDown with navigation links and language selection.
 * It uses various hooks for state management, navigation, and translations.
 *
 * @param {Object} props - Component props
 * @param {Function} props.onClose - Function to call when the LanguageDropDown is closed
 * @returns {JSX.Element} The rendered LanguageDropDown component
 */
const LanguageDropDown = React.memo(({ onClose }) => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const { selectedLanguage, setSelectedLanguage } = useLanguage();
  const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);
  const { t, i18n } = useTranslation();

  // Show the LanguageDropDown when the component is mounted
  useEffect(() => {
    setIsVisible(true);
  }, []);

  /**
   * Handle closing the LanguageDropDown
   *
   * This function sets the LanguageDropDown visibility to false and calls the onClose prop after a delay.
   */
  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  }, [onClose]);

  /**
   * Handle language change using SweetAlert2
   *
   * This function displays a SweetAlert2 modal for language selection and updates the selected language.
   */

  const handleLanguageChange = (language, sub) => {
    setSelectedLanguage(language);
    i18n.changeLanguage(sub);
    handleClose();
  };

  // Memoize menu items to avoid unnecessary re-renders
  const menuItems = useMemo(
    () => [
      {
        label: "French",
        onClick: () => handleLanguageChange("french", "fr"),
      },
      {
        label: "English",
        onClick: () => handleLanguageChange("english", "en"),
      },
    ],
    [t, handleLanguageChange]
  );

  /**
   * Render menu items
   *
   * This function maps over the menu items and returns a JSX element for each item.
   *
   * @returns {JSX.Element[]} The rendered menu items
   */
  const renderMenuItems = () =>
    menuItems.map((item, index) => (
      <button
        key={index}
        className="w-full text-green inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-green cursor-pointer mb-3"
        onClick={item.onClick}
      >
        <span className="font-normal text-base leading-6 whitespace-nowrap flex items-center gap-2">
          {t(`side_bar.language.${item.label.toLocaleLowerCase()}`)}
          <img
            src={item.label === "English" ? UK_Flag_Icon : FranceFlag}
            style={{
              width: "20px",
              height: item.label === "English" ? "17px" : "20px",
            }}
            alt={
              item.label === "English"
                ? t("side_bar.flag_alt.uk")
                : t("side_bar.flag_alt.france")
            }
          />
        </span>
      </button>
    ));

  return (
    <div
      className={`sticky top-16 left-0 w-full max-w-[400px] mx-auto h-screen bg-primary-background shadow-lg z-40 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex flex-col w-full h-full items-start gap-2.5 pt-4 pb-40 px-5 relative text-center">
        <div className="items-center justify-center gap-6 flex flex-col relative self-stretch w-full flex-[0_0_auto]">
          <div className="items-start flex flex-col relative self-stretch w-full flex-[0_0_auto]">
            {renderMenuItems()}
          </div>
        </div>
      </div>
    </div>
  );
});

export default LanguageDropDown;
