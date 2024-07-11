/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Button } from "../RoundedButton";

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
}) => {
  return (
    <div
      className={`flex flex-col items-start overflow-hidden rounded-[30px] bg-orange relative ${
        breakpoint === "mobile" ? "w-[375px]" : "w-[1312px]"
      } ${breakpoint === "mobile" ? "gap-12" : "gap-20"} ${
        breakpoint === "mobile" ? "px-5 py-16" : "px-16 py-28"
      } ${className}`}
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
          <div
            className={`inline-flex items-start gap-4 flex-[0_0_auto] pt-4 pb-0 px-0 relative ${
              breakpoint === "mobile" ? "flex-col" : ""
            }`}
          >
            <Button
              className={buttonStylePrimarySmallClassName}
              darkMode={breakpoint === "mobile" ? false : true}
              divClassName={buttonDivClassName}
              iconPosition="no-icon"
              small={false}
              style="primary"
              text={buttonText}
            />
            <Button
              className={
                breakpoint === "mobile"
                  ? "!border-white !mr-[-1.00px] !ml-[-1.00px] !mb-[-1.00px] !flex-[0_0_auto]"
                  : "!border-light-grey !mr-[-1.00px] !mt-[-1.00px] !mb-[-1.00px] !flex-[0_0_auto]"
              }
              darkMode={false}
              divClassName="!text-light-grey"
              iconPosition="no-icon"
              small={false}
              style="secondary"
              text={buttonText1}
            />
          </div>
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
