/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconFacebook3 } from "../../icons/IconFacebook3";
import { IconInstagram3 } from "../../icons/IconInstagram3";
import { IconLinkedin3 } from "../../icons/IconLinkedin3";
import { IconTwitter4 } from "../../icons/IconTwitter4";
import { Button } from "../RoundedButton";
import { TextInput } from "../TextInput";
import ScrollIntoView from "react-scroll-into-view";

export const Footer = ({
  breakpoint,
  className,
  linksClassName,
  divClassName,
  text = "Plan du site",
  text1 = "À propos",
  text2 = "Comment ça marche ?",
  text3 = "Commande groupée",
  text4 = "Assistance / Contact",
  text5 = "FAQ",
  text6 = "Informations",
  text7 = "Mentions légales",
  text8 = "Politique de confidentialité",
  text9 = "Conditions Générales<br/>de Ventes et d’Utilisation",
  text10 = "Notre newsletter engagée",
  text11 = "Restez informé (une seule fois par mois) de nos actualités",
  textInputTextInputClassName,
  textInputText = "Entrer votre email",
  textInputDivClassName,
  buttonText = "S’abonner",
  spanClassName,
  text12 = "En vous abonnant, vous acceptez notre ",
  spanClassNameOverride,
  spanClassName1,
  text13 = " et consentez à recevoir des mises à jour de notre société.",
  text14 = "© 2024 The Good Deals. Tous droits réservés.",
  columnClassName,
}) => {
  return (
    <div
      className={`flex flex-col bg-light-grey relative ${
        breakpoint === "mobile" ? "w-[375px]" : "w-[1440px]"
      } ${breakpoint === "mobile" ? "items-start" : "items-center"} ${
        breakpoint === "mobile" ? "gap-6" : "gap-8"
      } ${breakpoint === "mobile" ? "px-5 py-12" : "px-16 py-20"} ${className}`}
    >
      <div
        className={`border border-solid border-green w-full flex self-stretch items-start flex-[0_0_auto] rounded-[30px] bg-green relative ${
          breakpoint === "mobile" ? "flex-col" : ""
        } ${breakpoint === "mobile" ? "gap-12" : "gap-32"} ${
          breakpoint === "mobile" ? "p-8" : "p-12"
        }`}
      >
        <div
          className={`flex items-start relative ${
            breakpoint === "mobile" ? "w-full" : ""
          } ${breakpoint === "mobile" ? "self-stretch" : ""} ${
            breakpoint === "mobile" ? "flex-col" : ""
          } ${breakpoint === "desktop" ? "grow" : ""} ${
            breakpoint === "mobile" ? "flex-[0_0_auto]" : "flex-1"
          } ${breakpoint === "mobile" ? "gap-10" : ""} ${linksClassName}`}
        >
          <div
            className={`flex flex-col items-start relative ${
              breakpoint === "mobile" ? "w-full" : ""
            } ${breakpoint === "mobile" ? "self-stretch" : ""} ${
              breakpoint === "desktop" ? "grow" : ""
            } ${breakpoint === "mobile" ? "flex-[0_0_auto]" : "flex-1"} ${
              breakpoint === "desktop" ? "h-6" : ""
            }`}
          >
            <div
              className={`[font-family:'Source_Serif_Pro',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-2xl text-white font-bold text-center whitespace-nowrap leading-[normal] relative ${
                breakpoint === "mobile" ? divClassName : undefined
              }`}
            >
              thegood.deals
            </div>
          </div>
          <div
            className={`flex flex-col items-start relative ${
              breakpoint === "mobile" ? "w-full" : ""
            } ${breakpoint === "mobile" ? "self-stretch" : ""} ${
              breakpoint === "desktop" ? "grow" : ""
            } ${breakpoint === "mobile" ? "gap-3" : "gap-4"} ${
              breakpoint === "mobile" ? "flex-[0_0_auto]" : "flex-1"
            }`}
          >
            <div className="[font-family:'Rethink_Sans',Helvetica] self-stretch mt-[-1.00px] tracking-[0] text-base text-light-grey font-semibold leading-6 relative">
              {text}
            </div>
            <div className="w-full flex self-stretch flex-col items-start flex-[0_0_auto] relative">
              <ScrollIntoView selector="#about">
                <div className="w-full flex self-stretch items-start flex-[0_0_auto] px-0 py-2 relative cursor-pointer">
                  <div className="[font-family:'Rethink_Sans',Helvetica] mt-[-1.00px] tracking-[0] text-sm flex-1 text-light-grey font-normal leading-[21px] relative">
                    {text1}
                  </div>
                </div>
              </ScrollIntoView>

              <ScrollIntoView selector="#how">
                <div className="w-full flex self-stretch items-start flex-[0_0_auto] px-0 py-2 relative  cursor-pointer">
                  <div className="[font-family:'Rethink_Sans',Helvetica] mt-[-1.00px] tracking-[0] text-sm flex-1 text-light-grey font-normal leading-[21px] relative">
                    {text2}
                  </div>
                </div>
              </ScrollIntoView>

              <ScrollIntoView selector="#order">
                <div className="w-full flex self-stretch items-start flex-[0_0_auto] px-0 py-2 relative  cursor-pointer">
                  <div className="[font-family:'Rethink_Sans',Helvetica] mt-[-1.00px] tracking-[0] text-sm flex-1 text-light-grey font-normal leading-[21px] relative">
                    {text3}
                  </div>
                </div>
              </ScrollIntoView>

              <ScrollIntoView selector="#contact">
                <div className="w-full flex self-stretch items-start flex-[0_0_auto] px-0 py-2 relative  cursor-pointer">
                  <div className="[font-family:'Rethink_Sans',Helvetica] mt-[-1.00px] tracking-[0] text-sm flex-1 text-light-grey font-normal leading-[21px] relative">
                    {text4}
                  </div>
                </div>
              </ScrollIntoView>

              <ScrollIntoView selector="#faq">
                <div className="w-full flex self-stretch items-start flex-[0_0_auto] px-0 py-2 relative cursor-pointer">
                  <div className="[font-family:'Rethink_Sans',Helvetica] mt-[-1.00px] tracking-[0] text-sm flex-1 text-light-grey font-normal leading-[21px] relative">
                    {text5}
                  </div>
                </div>
              </ScrollIntoView>
            </div>
          </div>
          <div
            className={`flex flex-col items-start relative ${
              breakpoint === "mobile" ? "w-full" : ""
            } ${breakpoint === "mobile" ? "self-stretch" : ""} ${
              breakpoint === "desktop" ? "grow" : ""
            } ${breakpoint === "mobile" ? "gap-3" : "gap-4"} ${
              breakpoint === "mobile" ? "flex-[0_0_auto]" : "flex-1"
            } ${breakpoint === "mobile" ? columnClassName : undefined}`}
          >
            <div className="[font-family:'Rethink_Sans',Helvetica] self-stretch mt-[-1.00px] tracking-[0] text-base text-light-grey font-semibold leading-6 relative">
              {text6}
            </div>
            <div className="w-full flex self-stretch flex-col items-start flex-[0_0_auto] relative">
              <div className="w-full flex self-stretch items-start flex-[0_0_auto] px-0 py-2 relative">
                <div className="[font-family:'Rethink_Sans',Helvetica] mt-[-1.00px] tracking-[0] text-sm flex-1 text-light-grey font-normal leading-[21px] relative">
                  {text7}
                </div>
              </div>
              <div className="w-full flex self-stretch items-start flex-[0_0_auto] px-0 py-2 relative">
                <div className="[font-family:'Rethink_Sans',Helvetica] mt-[-1.00px] tracking-[0] text-sm flex-1 text-light-grey font-normal leading-[21px] relative">
                  {text8}
                </div>
              </div>
              <div className="w-full flex self-stretch items-start flex-[0_0_auto] px-0 py-2 relative">
                <p className="[font-family:'Rethink_Sans',Helvetica] mt-[-1.00px] tracking-[0] text-sm flex-1 text-light-grey font-normal leading-[21px] relative">
                  {text9}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col items-start relative ${
            breakpoint === "mobile" ? "w-full" : "w-[500px]"
          } ${breakpoint === "mobile" ? "self-stretch" : ""} ${
            breakpoint === "mobile" ? "gap-4" : "gap-6"
          } ${breakpoint === "mobile" ? "flex-[0_0_auto]" : ""}`}
        >
          <div
            className={`w-full flex self-stretch flex-col items-start flex-[0_0_auto] relative ${
              breakpoint === "mobile" ? "gap-3" : "gap-4"
            }`}
          >
            <div className="[font-family:'Rethink_Sans',Helvetica] self-stretch mt-[-1.00px] tracking-[0] text-base text-light-grey font-semibold leading-6 relative">
              {text10}
            </div>
            <p
              className={`[font-family:'Rethink_Sans',Helvetica] self-stretch tracking-[0] text-light-grey font-normal relative ${
                breakpoint === "mobile" ? "text-sm" : "text-base"
              } ${breakpoint === "mobile" ? "leading-[21px]" : "leading-6"}`}
            >
              {text11}
            </p>
          </div>
          <div className="w-full flex self-stretch flex-col items-start gap-4 flex-[0_0_auto] relative">
            <div
              className={`w-full flex self-stretch items-start gap-4 flex-[0_0_auto] relative ${
                breakpoint === "mobile" ? "flex-col" : ""
              }`}
            >
              <TextInput
                className={textInputDivClassName}
                text={textInputText}
                textInputClassName={textInputTextInputClassName}
              />
              <Button
                className={
                  breakpoint === "mobile"
                    ? "!self-stretch !border-white !mr-[-1.00px] !ml-[-1.00px] !mb-[-1.00px] !flex-[0_0_auto] !flex !w-full"
                    : "!border-light-grey !mr-[-1.00px] !mt-[-1.00px] !mb-[-1.00px] !flex-[0_0_auto]"
                }
                darkMode={false}
                divClassName={
                  breakpoint === "mobile" ? "!text-white" : "!text-light-grey"
                }
                iconPosition="no-icon"
                small={false}
                style="secondary"
                text={buttonText}
              />
            </div>
            <p className="[font-family:'Rethink_Sans',Helvetica] self-stretch tracking-[0] text-xs text-light-grey font-normal leading-[18px] relative">
              <span
                className={`text-[#f5f3ee] ${
                  breakpoint === "desktop"
                    ? "[font-family:'Rethink_Sans',Helvetica]"
                    : ""
                } ${breakpoint === "desktop" ? "tracking-[0]" : ""} ${
                  breakpoint === "desktop" ? "text-xs" : ""
                } ${breakpoint === "desktop" ? "font-normal" : ""} ${
                  breakpoint === "desktop" ? "leading-[18px]" : ""
                } ${spanClassName}`}
              >
                {text12}
              </span>
              <span
                className={`underline ${
                  breakpoint === "mobile" ? "text-[#f5f3ee]" : ""
                } ${spanClassNameOverride}`}
              >
                {text8}
              </span>
              <span
                className={`text-[#f5f3ee] ${
                  breakpoint === "desktop"
                    ? "[font-family:'Rethink_Sans',Helvetica]"
                    : ""
                } ${breakpoint === "desktop" ? "tracking-[0]" : ""} ${
                  breakpoint === "desktop" ? "text-xs" : ""
                } ${breakpoint === "desktop" ? "font-normal" : ""} ${
                  breakpoint === "desktop" ? "leading-[18px]" : ""
                } ${spanClassName1}`}
              >
                {text13}
              </span>
            </p>
          </div>
        </div>
      </div>
      <div
        className={`w-full flex self-stretch flex-col items-start gap-8 flex-[0_0_auto] relative ${
          breakpoint === "mobile" ? "pt-0 pb-4 px-0" : ""
        }`}
      >
        <div
          className={`w-full flex self-stretch items-start flex-[0_0_auto] relative ${
            breakpoint === "mobile" ? "flex-col" : ""
          } ${breakpoint === "mobile" ? "gap-8" : ""} ${
            breakpoint === "desktop" ? "justify-between" : ""
          }`}
        >
          <div
            className={`inline-flex flex-[0_0_auto] relative ${
              breakpoint === "mobile" ? "items-start" : "items-center"
            } ${breakpoint === "mobile" ? "gap-3" : "gap-6"}`}
          >
            {breakpoint === "desktop" && (
              <p className="relative w-fit mt-[-1.00px] [font-family:'Rethink_Sans',Helvetica] font-normal text-green text-sm tracking-[0] leading-[21px] whitespace-nowrap">
                {text14}
              </p>
            )}

            {breakpoint === "mobile" && (
              <>
                <IconFacebook3 className="!relative !w-6 !h-6" />
                <IconInstagram3 className="!relative !w-6 !h-6" />
                <IconTwitter4 className="!relative !w-6 !h-6" />
                <IconLinkedin3 className="!relative !w-6 !h-6" />
              </>
            )}
          </div>
          <div
            className={`inline-flex items-start flex-[0_0_auto] relative ${
              breakpoint === "mobile" ? "flex-col" : ""
            } ${breakpoint === "mobile" ? "gap-8" : "gap-3"}`}
          >
            {breakpoint === "desktop" && (
              <>
                <IconFacebook3 className="!relative !w-6 !h-6" />
                <IconInstagram3 className="!relative !w-6 !h-6" />
                <IconTwitter4 className="!relative !w-6 !h-6" />
                <IconLinkedin3 className="!relative !w-6 !h-6" />
              </>
            )}

            {breakpoint === "mobile" && (
              <p className="relative w-fit mt-[-1.00px] [font-family:'Rethink_Sans',Helvetica] font-normal text-green text-sm tracking-[0] leading-[21px] whitespace-nowrap">
                {text14}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

Footer.propTypes = {
  breakpoint: PropTypes.oneOf(["desktop", "mobile"]),
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  text6: PropTypes.string,
  text7: PropTypes.string,
  text8: PropTypes.string,
  text9: PropTypes.string,
  text10: PropTypes.string,
  text11: PropTypes.string,
  textInputText: PropTypes.string,
  buttonText: PropTypes.string,
  text12: PropTypes.string,
  text13: PropTypes.string,
  text14: PropTypes.string,
};
