/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

export const Header = ({
  breakpoint,
  className,
  crEzPartagezEtClassName,
  text = "Créez, Partagez et Savourez avec une&nbsp;&nbsp;commande groupée !",
  text1 = "En quelques clics, créez une commande, invitez vos proches et partagez le plaisir de découvrir ensemble les saveurs uniques de l&#39;artisanat local. Profitez de tarifs avantageux, soutenez les artisans de votre région, et transformez chaque achat en une expérience conviviale et enrichissante.",
  buttonText = "Créer un good deal",
  buttonStylePrimarySmallClassName,
  buttonDivClassName,
  buttonText1 = "Gérer mes good deals",
  type,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleNavigate = (event) => {
    const button = event.currentTarget;

    // Add the click effect class
    button.classList.add("animate-click-effect");

    // Remove the class after the animation completes
    button.addEventListener(
      "animationend",
      () => {
        button.classList.remove("animate-click-effect");
        navigate("/auth?login");
      },
      { once: true }
    );
  };
  return (
    <div
      className={`flex flex-col items-start overflow-hidden rounded-[30px] ${
        type === "orange" ? "bg-orange" : "bg-[#2a4e4a]"
      } relative ${breakpoint === "mobile" ? "w-[375px]" : "w-[1312px]"} ${
        breakpoint === "mobile" ? "gap-12" : "gap-20"
      } ${breakpoint === "mobile" ? "px-5 py-16" : "px-16 py-28"} ${className}`}
    >
      <div
        className={`w-full flex self-stretch items-start flex-[0_0_auto] relative ${
          breakpoint === "mobile" ? "flex-col" : ""
        } ${breakpoint === "mobile" ? "gap-5" : "gap-20"}`}
      >
        <div
          className={`flex flex-col items-start relative ${
            breakpoint === "mobile" ? "w-full" : ""
          } ${breakpoint === "mobile" ? "self-stretch" : ""} ${
            breakpoint === "desktop" ? "grow" : ""
          } ${breakpoint === "mobile" ? "gap-3" : "gap-4"} ${
            breakpoint === "mobile" ? "flex-[0_0_auto]" : "flex-1"
          }`}
        >
          <p
            className={`self-stretch mt-[-1.00px] relative ${
              breakpoint === "mobile"
                ? "font-heading-h1-mobile"
                : "font-heading-h1"
            } ${
              breakpoint === "mobile"
                ? "tracking-[var(--heading-h1-mobile-letter-spacing)]"
                : "tracking-[var(--heading-h1-letter-spacing)]"
            } ${
              breakpoint === "mobile"
                ? "text-[length:var(--heading-h1-mobile-font-size)]"
                : "text-[length:var(--heading-h1-font-size)]"
            } ${
              breakpoint === "mobile"
                ? "[font-style:var(--heading-h1-mobile-font-style)]"
                : "[font-style:var(--heading-h1-font-style)]"
            } ${breakpoint === "mobile" ? "text-white" : "text-light-grey"} ${
              breakpoint === "mobile"
                ? "font-[number:var(--heading-h1-mobile-font-weight)]"
                : "font-[number:var(--heading-h1-font-weight)]"
            } ${
              breakpoint === "mobile"
                ? "leading-[var(--heading-h1-mobile-line-height)]"
                : "leading-[var(--heading-h1-line-height)]"
            } ${crEzPartagezEtClassName}`}
          >
            {text}
          </p>
        </div>
        <div
          className={`flex flex-col items-start relative ${
            breakpoint === "mobile" ? "w-full" : ""
          } ${breakpoint === "mobile" ? "self-stretch" : ""} ${
            breakpoint === "desktop" ? "grow" : ""
          } ${breakpoint === "mobile" ? "gap-2" : "gap-6"} ${
            breakpoint === "mobile" ? "flex-[0_0_auto]" : "flex-1"
          }`}
        >
          <p className="[font-family:'Rethink_Sans',Helvetica] self-stretch mt-[-1.00px] tracking-[0] text-lg text-light-grey font-normal leading-[27px] relative">
            {text1}
          </p>
          {(location?.pathname === "about-us" ||
            location?.pathname === "/how-it-works" ||
            location?.pathname === "/") &&
            type !== "green" && (
              <div className="inline-flex flex-col items-start gap-4 pt-4 pb-0 px-0 relative flex-[0_0_auto]">
                <button
                  className="all-[unset] box-border inline-flex text-green items-center justify-center gap-2 px-6 py-3 relative flex-[0_0_auto] mt-[-2.00px] bg-[#FFF] rounded-[100px] hover:bg-[#15423b] hover:text-[#FFF] cursor-pointer"
                  onClick={() => navigate("/auth?login")}
                >
                  <button className="all-[unset] box-border relative w-fit mt-[-1.00px] ml-[-1.00px] [font-family:'Rethink_Sans',Helvetica] font-normal  text-base tracking-[0] leading-6 whitespace-nowrap hover:text-[#FFF]">
                    Create a good deal
                  </button>
                </button>
                <button
                  className="all-[unset] text-[#FFF] box-border inline-flex items-center justify-center gap-2 px-6 py-3 relative flex-[0_0_auto] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] rounded-[100px] border border-solid border-[#FFF] hover:bg-[#1b4f4a] hover:text-white cursor-pointer"
                  onClick={() => navigate("/auth?login")}
                >
                  <span className="all-[unset] box-border relative w-fit [font-family:'Rethink_Sans',Helvetica] font-normal text-base tracking-[0] leading-6 whitespace-nowrap hover:bg-[#1b4f4a] hover:text-white cursor-pointer">
                    Manage my good deals
                  </span>
                </button>
              </div>
            )}
          {type === "green" && (
            <button
              className="all-[unset] box-border inline-flex items-center justify-center gap-2 px-6 py-3 relative flex-[0_0_auto] mt-[-2.00px] bg-whitewhite text-[#2a4e4a] rounded-[100px] border border-solid border-green cursor-pointer w-full"
              onClick={handleNavigate}
            >
              <button className="all-[unset] box-border relative w-fit mt-[-1.00px] ml-[-1.00px] [font-family:'Rethink_Sans',Helvetica] font-normal text-[#2a4e4a] text-base tracking-[0] leading-6 whitespace-nowrap ">
                {location?.pathname !== "/contact-us" &&
                location?.pathname !== "/general-conditions"
                  ? "Create a good deal!"
                  : "Contact us"}
              </button>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  breakpoint: PropTypes.oneOf(["desktop", "mobile"]),
  text: PropTypes.string,
  text1: PropTypes.string,
  buttonText: PropTypes.string,
  buttonText1: PropTypes.string,
};
