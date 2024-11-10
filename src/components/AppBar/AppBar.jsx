import React, { useEffect, useState } from "react";
import { ChevronDown } from "../../icons/ChevronDown/ChevronDown";
import { useNavigate } from "react-router-dom";
import { UserAlt } from "../../icons/UserAlt";
import { VerticalLine } from "../../icons/VerticalLine";
import SideBar from "../../screens/SideBar/SideBar";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { LanguageDropdown } from "../LanguageDropdown/LanguageDropdown";
import LanguageDropdownScreen from "../../screens/LanguageDropdown/LanguageDropdown";
import { useTranslation } from "react-i18next"; // Importing i18next
import { Line } from "../Line/Line";

/**
 * AppBar component renders the top navigation bar of the application.
 * It includes a logo, a toggle button for the sidebar, and a user icon for authentication.
 */
function AppBar() {
  const [open, setOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);
  const { t } = useTranslation(); // Initialize translation hook

  const navigate = useNavigate();
  const location = useLocation();
  const [isUser, setIsUser] = useState(true);
  const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);

  const { profile } = useSelector((state) => state.user);

  /**
   * Toggles the sidebar open state.
   */
  const handleOpen = () => {
    setLanguageOpen(false);
    setOpen(!open);
  };

  const handleLanguageOpen = () => {
    setOpen(false);
    setLanguageOpen(!languageOpen);
  };

  /**
   * Navigates to the home page when the logo is clicked.
   */
  const handleLogoClick = () => {
    navigate("/", { replace: true });
    window.location.reload();
  };

  useEffect(() => {
    // Externalize paths to config/constants
    const userPages = [
      "/artisan-validation",
      "/deal-confirmed",
      "/deal-refused",
      "/deal-refused-message",
      "/artisan-send-review",
      "/deal_details",
    ];

    if (userPages.includes(location?.pathname)) {
      setIsUser(false);
    } else {
      setIsUser(true);
    }
  }, [location?.pathname]);

  return (
    <div className="relative">
      <header className="flex flex-col w-screen max-w-[400px] h-16 items-start relative bg-primary-background border-b border-stroke z-50">
        <div
          className={`flex h-16 items-center ${
            isUser ? "justify-between" : "justify-between"
          } pl-5 pr-3 py-0 relative self-stretch w-full`}
        >
          {/* Sidebar toggle button */}
          {isUser && (
            <div
              className="flex w-12 h-12 items-center justify-center gap-2.5 relative hover:bg-gray-200 rounded-full cursor-pointer"
              onClick={handleOpen}
            >
              {!open ? (
                <VerticalLine className="!relative !w-6 !h-6" />
              ) : (
                <ChevronDown className="!relative !w-6 !h-6" />
              )}
            </div>
          )}
          {/* Logo */}
          <div className="inline-flex items-start relative flex-[0_0_auto]">
            <div className="inline-flex items-start relative flex-[0_0_auto]">
              <div className="inline-flex items-start relative flex-[0_0_auto]">
                <div
                  className="relative w-fit mt-[-1.00px] font-bold text-[28px] text-center tracking-[0] leading-[normal] whitespace-nowrap cursor-pointer"
                  onClick={handleLogoClick}
                >
                  <span className="text-primary-color">
                    {t("app.logo_part1")}
                  </span>
                  <span className="text-custom-yellow">
                    {t("app.logo_separator")}
                  </span>
                  <span className="text-custom-orange">
                    {t("app.logo_part2")}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <LanguageDropdown handleLanguageOpen={handleLanguageOpen} />
            {/* User icon */}
            {isUser && (
              <div
                className="flex w-12 h-12 items-center justify-center gap-2.5 relative hover:bg-gray-200 rounded-full cursor-pointer"
                onClick={() =>
                  !isUserLoggedIn
                    ? navigate("/auth?login")
                    : navigate("/my-information")
                }
              >
                {profile?.profile_image &&
                profile?.profile_image !==
                  t("app.default_profile_image_url") ? ( // Use translation for default image URL
                  <img
                    className="w-[90%] h-[90%] rounded-full object-cover"
                    alt={t("app.alt_profile_photo")} // Use translation for alt text
                    src={profile?.profile_image}
                  />
                ) : (
                  <UserAlt className="!relative !w-6 !h-6" />
                )}
              </div>
            )}
          </div>
        </div>
        <Line />
      </header>
      {/* Sidebar */}
      {open && <SideBar onClose={handleOpen} />}
      {languageOpen && <LanguageDropdownScreen onClose={handleLanguageOpen} />}
    </div>
  );
}

export default AppBar;
