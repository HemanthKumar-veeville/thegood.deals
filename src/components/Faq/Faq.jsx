/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Button } from "../RoundedButton";
import { plus14 } from "../../images";

export const Faq = ({
  breakpoint,
  className,
  divClassName,
  text = "Vous trouverez des réponses aux questions les plus courantes concernant notre plateforme de commande groupée de produits artisanaux.",
  buttonText = "Des intérrogations ? Contactez-nous",
  buttonStylePrimarySmallClassName,
  text1 = "Comment fonctionne la commande groupée sur votre plateforme ?",
  questionClassName,
  text2 = "Qui sont les artisans partenaires ?",
  text3 = "Comment inviter mes proches à rejoindre une commande groupée ?",
  text4 = "Comment est calculé le prix des produits ?",
  text5 = "Comment fonctionne la livraison ?",
  buttonDivClassName,
  questionClassNameOverride,
}) => {
  return (
    <div
      className={`flex flex-col items-start overflow-hidden rounded-[30px] bg-blue relative ${
        breakpoint === "mobile" ? "w-[375px]" : "w-[1312px]"
      } ${breakpoint === "mobile" ? "gap-12" : "gap-20"} ${
        breakpoint === "mobile" ? "px-5 py-16" : "px-16 py-[60px]"
      } ${className}`}
    >
      <div
        className={`w-full flex self-stretch items-start flex-[0_0_auto] relative ${
          breakpoint === "mobile" ? "flex-col" : ""
        } ${breakpoint === "mobile" ? "gap-12" : "gap-20"}`}
      >
        <div
          className={`flex flex-col items-start relative ${
            breakpoint === "mobile" ? "w-full" : "w-[500px]"
          } ${breakpoint === "mobile" ? "self-stretch" : ""} ${
            breakpoint === "mobile" ? "gap-6" : "gap-8"
          } ${breakpoint === "mobile" ? "flex-[0_0_auto]" : ""}`}
        >
          <div
            className={`w-full flex self-stretch flex-col items-start flex-[0_0_auto] relative ${
              breakpoint === "mobile" ? "gap-5" : "gap-6"
            }`}
          >
            <div
              className={`self-stretch mt-[-1.00px] text-green relative ${
                breakpoint === "mobile"
                  ? "font-heading-h2-mobile"
                  : "font-heading-h2"
              } ${
                breakpoint === "mobile"
                  ? "tracking-[var(--heading-h2-mobile-letter-spacing)]"
                  : "tracking-[var(--heading-h2-letter-spacing)]"
              } ${
                breakpoint === "mobile"
                  ? "text-[length:var(--heading-h2-mobile-font-size)]"
                  : "text-[length:var(--heading-h2-font-size)]"
              } ${
                breakpoint === "mobile"
                  ? "[font-style:var(--heading-h2-mobile-font-style)]"
                  : "[font-style:var(--heading-h2-font-style)]"
              } ${
                breakpoint === "mobile"
                  ? "font-[number:var(--heading-h2-mobile-font-weight)]"
                  : "font-[number:var(--heading-h2-font-weight)]"
              } ${
                breakpoint === "mobile"
                  ? "leading-[var(--heading-h2-mobile-line-height)]"
                  : "leading-[var(--heading-h2-line-height)]"
              } ${divClassName}`}
            >
              FAQs
            </div>
            <p className="[font-family:'Rethink_Sans',Helvetica] self-stretch tracking-[0] text-lg text-green font-normal leading-[27px] relative">
              {text}
            </p>
          </div>
          <Button
            className={buttonStylePrimarySmallClassName}
            darkMode={false}
            divClassName={buttonDivClassName}
            iconPosition="no-icon"
            small={false}
            style="secondary"
            text={buttonText}
          />
        </div>
        <div
          className={`flex flex-col items-start gap-4 relative ${
            breakpoint === "mobile" ? "w-full" : ""
          } ${breakpoint === "mobile" ? "self-stretch" : ""} ${
            breakpoint === "desktop" ? "grow" : ""
          } ${breakpoint === "mobile" ? "flex-[0_0_auto]" : "flex-1"}`}
        >
          <div
            className={`border border-solid border-green w-full flex self-stretch items-center flex-[0_0_auto] rounded-[100px] relative ${
              breakpoint === "mobile" ? "px-5 py-4" : "px-6 py-5"
            } ${breakpoint === "desktop" ? "justify-center" : ""}`}
          >
            <p
              className={`[font-family:'Rethink_Sans',Helvetica] tracking-[0] text-base flex-1 text-green font-bold leading-6 relative ${
                breakpoint === "mobile" ? "mt-[-1.00px]" : ""
              }`}
            >
              {text1}
            </p>
            <img className="w-8 h-8 relative" alt="Plus" src={plus14} />
          </div>
          <div
            className={`border border-solid border-green w-full flex self-stretch items-center flex-[0_0_auto] rounded-[100px] relative ${
              breakpoint === "mobile" ? "px-5 py-4" : "px-6 py-5"
            } ${breakpoint === "desktop" ? "justify-center" : ""}`}
          >
            <p
              className={`[font-family:'Rethink_Sans',Helvetica] tracking-[0] text-base flex-1 text-green font-bold leading-6 relative ${questionClassName}`}
            >
              {text2}
            </p>
            <img className="w-8 h-8 relative" alt="Plus" src={plus14} />
          </div>
          <div
            className={`border border-solid border-green w-full flex self-stretch items-center flex-[0_0_auto] rounded-[100px] relative ${
              breakpoint === "mobile" ? "px-5 py-4" : "px-6 py-5"
            } ${breakpoint === "desktop" ? "justify-center" : ""}`}
          >
            <p
              className={`[font-family:'Rethink_Sans',Helvetica] tracking-[0] text-base flex-1 text-green font-bold leading-6 relative ${
                breakpoint === "mobile" ? "mt-[-1.00px]" : ""
              }`}
            >
              {text3}
            </p>
            <img className="w-8 h-8 relative" alt="Plus" src={plus14} />
          </div>
          <div
            className={`border border-solid border-green w-full flex self-stretch items-center flex-[0_0_auto] rounded-[100px] relative ${
              breakpoint === "mobile" ? "px-5 py-4" : "px-6 py-5"
            } ${breakpoint === "desktop" ? "justify-center" : ""}`}
          >
            <p
              className={`[font-family:'Rethink_Sans',Helvetica] tracking-[0] text-base flex-1 text-green font-bold leading-6 relative ${
                breakpoint === "mobile" ? "mt-[-1.00px]" : ""
              }`}
            >
              {text4}
            </p>
            <img className="w-8 h-8 relative" alt="Plus" src={plus14} />
          </div>
          <div
            className={`border border-solid border-green w-full flex self-stretch items-center flex-[0_0_auto] rounded-[100px] relative ${
              breakpoint === "mobile" ? "px-5 py-4" : "px-6 py-5"
            } ${breakpoint === "desktop" ? "justify-center" : ""}`}
          >
            <p
              className={`[font-family:'Rethink_Sans',Helvetica] tracking-[0] text-base flex-1 text-green font-bold leading-6 relative ${questionClassNameOverride}`}
            >
              {text5}
            </p>
            <img className="w-8 h-8 relative" alt="Plus" src={plus14} />
          </div>
        </div>
      </div>
    </div>
  );
};

Faq.propTypes = {
  breakpoint: PropTypes.oneOf(["desktop", "mobile"]),
  text: PropTypes.string,
  buttonText: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
};
