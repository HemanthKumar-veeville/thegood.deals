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
   * Handle navigation and close the sidebar
   *
   * This function navigates to the specified path and then closes the sidebar.
   *
   * @param {string} path - The path to navigate to
   */
  const handleNavigation = useCallback(
    (path) => {
      navigate(path);
      handleClose();
    },
    [navigate, handleClose]
  );

  /**
   * Handle language change using SweetAlert2
   *
   * This function displays a SweetAlert2 modal for language selection and updates the selected language.
   */
  const handleLanguageChange = useCallback(() => {
    Swal.fire({
      title: t("select_language"),
      showCancelButton: false,
      showConfirmButton: false,
      showCloseButton: true,
      html: `
        <button id="english-button" class="swal2-confirm swal2-styled ${
          selectedLanguage === "english"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-black"
        } px-4 py-2 rounded-md mr-2">${t("language.english")}</button>
        <button id="french-button" class="swal2-confirm swal2-styled ${
          selectedLanguage === "french"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-black"
        } px-4 py-2 rounded-md">${t("language.french")}</button>
      `,
      didOpen: () => {
        const englishButton = Swal.getPopup().querySelector("#english-button");
        const frenchButton = Swal.getPopup().querySelector("#french-button");

        englishButton.addEventListener("click", () => {
          setSelectedLanguage("english");
          i18n.changeLanguage("en");
          Swal.close();
        });

        frenchButton.addEventListener("click", () => {
          setSelectedLanguage("french");
          i18n.changeLanguage("fr");
          Swal.close();
        });
      },
    });
  }, [selectedLanguage, setSelectedLanguage, i18n, t]);

  // Memoize menu items to avoid unnecessary re-renders
  const menuItems = useMemo(
    () => [
      { label: t("about"), onClick: () => handleNavigation("/about-us") },
      {
        label: t("how_it_works"),
        onClick: () => handleNavigation("/how-it-works"),
      },
      { label: t("faq"), onClick: () => handleNavigation("/contact-us") },
      {
        label: t("contact_us"),
        onClick: () => handleNavigation("/help-me"),
      },
    ],
    [t, handleNavigation]
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

  /**
   * Render a button with optional additional classes
   *
   * This function returns a button element with the specified label, path, and additional classes.
   *
   * @param {string} label - The button label
   * @param {string} path - The path to navigate to when the button is clicked
   * @param {string} [additionalClasses=""] - Additional classes for the button
   * @returns {JSX.Element} The rendered button
   */
  const renderButton = (label, path, additionalClasses = "") => (
    <button
      className={`w-full text-green inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-green cursor-pointer ${additionalClasses}`}
      onClick={() => handleNavigation(path)}
    >
      <span className="font-normal text-base leading-6 whitespace-nowrap">
        {label}
      </span>
    </button>
  );

  return (
    <div
      className={`fixed top-16 left-0 w-full h-screen bg-primary-background shadow-lg z-40 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex flex-col w-full h-full items-start gap-2.5 pt-4 pb-40 px-5 relative">
        <div className="items-center justify-center gap-6 flex flex-col relative self-stretch w-full flex-[0_0_auto]">
          <div className="items-start flex flex-col relative self-stretch w-full flex-[0_0_auto]">
            {renderMenuItems()}
          </div>
          <div className="inline-flex flex-col items-center gap-4 pt-4 pb-0 px-0 relative flex-[0_0_auto] w-full">
            {renderButton(
              t("create_deal"),
              isUserLoggedIn ? "/create-deal" : "/auth?login",
              "bg-green text-white hover:bg-[#15423b] hover:text-[#d4d4d4]"
            )}
            {renderButton(
              t("my_account"),
              isUserLoggedIn ? "/account" : "/auth?login"
            )}
            <button
              className="w-full text-green inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-green cursor-pointer"
              onClick={handleLanguageChange}
            >
              <span className="font-normal text-base leading-6 whitespace-nowrap flex items-center gap-2">
                {t(`language.${selectedLanguage}`)}
                <img
                  src={
                    selectedLanguage === "english" ? UK_Flag_Icon : FranceFlag
                  }
                  style={{
                    width: "20px",
                    height: selectedLanguage === "english" ? "17px" : "20px",
                  }}
                  alt={
                    selectedLanguage === "english"
                      ? t("flag_alt.uk")
                      : t("flag_alt.france")
                  }
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default SideBar;
