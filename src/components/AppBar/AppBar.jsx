import React, { useEffect, useState } from "react";
import { ChevronDown } from "../../icons/ChevronDown/ChevronDown";
import { useNavigate } from "react-router-dom";
import { UserAlt } from "../../icons/UserAlt";
import { VerticalLine } from "../../icons/VerticalLine";
import SideBar from "../../screens/SideBar/SideBar";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

/**
 * AppBar component renders the top navigation bar of the application.
 * It includes a logo, a toggle button for the sidebar, and a user icon for authentication.
 */
function AppBar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const [isUser, setIsUser] = useState(true);
  const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);

  /**
   * Toggles the sidebar open state.
   */
  const handleOpen = () => {
    setOpen(!open);
  };

  /**
   * Navigates to the home page when the logo is clicked.
   */
  const handleLogoClick = () => {
    navigate("/");
  };

  useEffect(() => {
    if (
      location?.pathname === "/artisan-validation" ||
      location?.pathname === "/deal-confirmed" ||
      location?.pathname === "/deal-refused" ||
      location?.pathname === "/deal-refused-message" ||
      location?.pathname === "/artisan-send-review" ||
      location?.pathname === "/deal_details"
    ) {
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
            isUser ? "justify-between" : "justify-center"
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
                  <span className="text-primary-color">thegood</span>
                  <span className="text-custom-yellow">.</span>
                  <span className="text-custom-orange">deals</span>
                </div>
              </div>
            </div>
          </div>
          {/* User icon */}
          {isUser && (
            <div
              className="flex w-12 h-12 items-center justify-center gap-2.5 relative hover:bg-gray-200 rounded-full cursor-pointer"
              onClick={() =>
                !isUserLoggedIn ? navigate("/auth?login") : handleOpen()
              }
            >
              <UserAlt className="!relative !w-6 !h-6" />
            </div>
          )}
        </div>
      </header>
      {/* Sidebar */}
      {open && <SideBar onClose={handleOpen} />}
    </div>
  );
}

export default AppBar;
