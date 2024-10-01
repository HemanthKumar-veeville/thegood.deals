// src/screens/SideBar/SideBar.jsx
import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { FranceFlag, UK_Flag_Icon } from "../../images";
import { useLanguage } from "../../context/LanguageContext";

/**
 * SideBar component
 *
 * This component renders a sidebar with navigation links and language selection.
 * It uses various hooks for state management, navigation, and translations.
 *
 * @param {Object} props - Component props
 * @param {Function} props.onClose - Function to call when the sidebar is closed
 * @returns {JSX.Element} The rendered sidebar component
 */
const SideBar = React.memo(({ onClose }) => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const { selectedLanguage, setSelectedLanguage } = useLanguage();
  const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);
  const { t, i18n } = useTranslation();

  // Show the sidebar when the component is mounted
  useEffect(() => {
    setIsVisible(true);
  }, []);

  /**
   * Handle closing the sidebar
   *
   * This function sets the sidebar visibility to false and calls the onClose prop after a delay.
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
    console.log("Executed");
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
      <div
        key={index}
        className="flex items-start gap-2 px-0 py-3 relative self-stretch w-full flex-[0_0_auto]"
        onClick={item.onClick}
      >
        <div className="relative flex-1 mt-[-1.00px] font-text-medium-normal text-[#2a4e4a] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)]">
          {item.label}
        </div>
      </div>
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

export default SideBar;
