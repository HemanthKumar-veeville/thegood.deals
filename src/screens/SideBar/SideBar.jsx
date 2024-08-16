import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import { FranceFlag, UK_Flag_Icon } from "../../images";
import { useSelector } from "react-redux";

const SideBar = ({ onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("english"); // Default language
  const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300); // Match the duration of the transition
  };

  const handleAbout = () => {
    navigate("/about-us");
    handleClose();
  };

  const handleHowItWorks = () => {
    navigate("/how-it-works");
    handleClose();
  };

  const handleContactUs = () => {
    navigate("/contact-us");
    handleClose();
  };

  const handleLanguageChange = () => {
    Swal.fire({
      title: "Select Language",
      showCancelButton: false,
      showConfirmButton: false,
      showCloseButton: true,
      html: `
        <button id="english-button" class="swal2-confirm swal2-styled ${
          selectedLanguage === "english"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-black"
        } px-4 py-2 rounded-md mr-2">English</button>
        <button id="french-button" class="swal2-confirm swal2-styled ${
          selectedLanguage === "french"
            ? "bg-blue-500 text-white"
            : "bg-gray-200 text-black"
        } px-4 py-2 rounded-md">French</button>
      `,
      didOpen: () => {
        const englishButton = Swal.getPopup().querySelector("#english-button");
        const frenchButton = Swal.getPopup().querySelector("#french-button");

        englishButton.addEventListener("click", () => {
          setSelectedLanguage("english");
          Swal.close();
        });

        frenchButton.addEventListener("click", () => {
          setSelectedLanguage("french");
          Swal.close();
        });
      },
    });
  };

  return (
    <div
      className={`fixed top-16 left-0 w-full h-screen bg-primary-background shadow-lg z-40 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex flex-col w-full h-full items-start gap-2.5 pt-4 pb-40 px-5 relative">
        <div className="items-center justify-center gap-6 flex flex-col relative self-stretch w-full flex-[0_0_auto]">
          <div className="items-start flex flex-col relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-start gap-2 px-0 py-3 relative self-stretch w-full flex-[0_0_auto]">
              <div
                onClick={handleAbout}
                className="relative flex-1 mt-[-1.00px] font-text-medium-normal text-[#2a4e4a] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)]"
              >
                About
              </div>
            </div>
            <div
              className="flex items-start gap-2 px-0 py-3 relative self-stretch w-full flex-[0_0_auto]"
              onClick={handleHowItWorks}
            >
              <div className="relative flex-1 mt-[-1.00px] font-text-medium-normal text-[#2a4e4a] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)]">
                How it works?
              </div>
            </div>
            <div
              className="flex items-start gap-2 px-0 py-3 relative self-stretch w-full flex-[0_0_auto]"
              onClick={handleContactUs}
            >
              <div className="relative flex-1 mt-[-1.00px] font-text-medium-normal text-[#2a4e4a] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)]">
                FAQ
              </div>
            </div>
            <div
              className="flex items-start gap-2 px-0 py-3 relative self-stretch w-full flex-[0_0_auto]"
              onClick={handleContactUs}
            >
              <div className="flex items-center gap-1 relative flex-1 grow">
                <div className="relative flex-1 mt-[-1.00px] font-text-medium-normal text-[#2a4e4a] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)]">
                  Contact us
                </div>
              </div>
            </div>
          </div>
          <div className="inline-flex flex-col items-center gap-4 pt-4 pb-0 px-0 relative flex-[0_0_auto] w-full">
            <button
              className="w-full bg-green text-white inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-green hover:bg-[#15423b] hover:text-[#d4d4d4] cursor-pointer"
              onClick={() => {
                navigate(isUserLoggedIn ? "/create-deal" : "/auth?login");
                handleClose();
              }}
            >
              Create a good deal
            </button>
            <button
              className="w-full text-green inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-green cursor-pointer"
              onClick={() => {
                navigate(isUserLoggedIn ? "/account" : "/auth?login");
                handleClose();
              }}
            >
              <span className="font-normal text-base leading-6 whitespace-nowrap">
                My account
              </span>
            </button>
            <button
              className="w-full text-green inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-green cursor-pointer"
              onClick={handleLanguageChange}
            >
              <span className="font-normal text-base leading-6 whitespace-nowrap flex items-center gap-2">
                {selectedLanguage === "english" ? "English" : "French"}
                <img
                  src={
                    selectedLanguage === "english" ? UK_Flag_Icon : FranceFlag
                  }
                  style={{
                    width: "20px",
                    height: selectedLanguage === "english" ? "17px" : "20px",
                  }}
                  alt={
                    selectedLanguage === "english" ? "UK Flag" : "France Flag"
                  }
                />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
