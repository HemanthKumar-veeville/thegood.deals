// src/screens/SideBar/SideBar.jsx
import React, { useEffect, useState, useCallback, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { FranceFlag, UK_Flag_Icon } from "../../images";
import { useLanguage } from "../../context/LanguageContext";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";
import { logoutUser } from "../../redux/app/user/userSlice";

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
  const dispatch = useDispatch();

  // Show the sidebar when the component is mounted
  useEffect(() => {
    setIsVisible(true);

    // Block scroll
    document.body.style.overflow = "hidden";

    return () => {
      // Restore scroll
      document.body.style.overflow = "";
    };
  }, []);

  const handleLanguageOpen = () => {
    setOpen(false);
    setLanguageOpen(!languageOpen);
  };

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

  const signoutHandle = () => {
    handleClose();
    handleSignOut();
  };

  // Memoize menu items to avoid unnecessary re-renders
  const menuItems = useMemo(
    () => [
      {
        label: t("side_bar.about"),
        onClick: () => handleNavigation("/about-us"),
      },
      {
        label: t("side_bar.how"),
        onClick: () => handleNavigation("/how-it-works"),
      },
      {
        label: t("side_bar.faq"),
        onClick: () => handleNavigation("/contact-us"),
      },
      {
        label: t("side_bar.contact_us"),
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
      className={`w-full text-green inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full cursor-pointer ${additionalClasses}`}
      onClick={
        path !== "/signout" ? () => handleNavigation(path) : signoutHandle
      }
    >
      <span className="font-normal text-base leading-6 whitespace-nowrap">
        {label}
      </span>
    </button>
  );

  const handleSignOut = async () => {
    try {
      await dispatch(logoutUser());
    } catch (error) {
      console.error("Failed to log out: ", error);
    }
  };

  return (
    <div
      className={`sticky top-16 left-0 w-full max-w-[400px] mx-auto h-screen bg-primary-background shadow-lg z-40 transition-transform duration-300 ${
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
              t("side_bar.view_deal"),
              isUserLoggedIn ? "/" : "/auth?login",
              " border border-green bg-green text-white hover:bg-[#15423b] hover:text-[#d4d4d4]"
            )}
            {renderButton(
              t("side_bar.my_account"),
              isUserLoggedIn ? "/my-information" : "/auth?login",
              " border border-green "
            )}
            <LanguageDropdown handleLanguageOpen={handleLanguageOpen} />
            {isUserLoggedIn &&
              renderButton(
                t("side_bar.logout"),
                "/signout",
                "bg-[#F23030] text-white hover:bg-[#F23030] hover:text-[#d4d4d4]"
              )}
          </div>
        </div>
      </div>
    </div>
  );
});

export default SideBar;
