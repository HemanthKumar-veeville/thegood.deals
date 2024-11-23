/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconChevronRight2 } from "../../icons/IconChevronRight2";
import { Button } from "../RoundedButton";
import { placeHolderImage14 } from "../../images";
import { useLocation, useNavigate } from "react-router-dom";

export const BreakpointDesktopWrapper = ({
  breakpoint,
  className,
  text = "Notre approche",
  headingClassName,
  text1 = "Embarquez dans l&#39;aventure des saveurs artisanales",
  text2 = "En rejoignant notre communauté de commande groupée, bénéficiez de prix avantageux tout en partageant le plaisir de goûter au meilleur de l&#39;artisanat local. Faites de chaque achat une expérience unique, soutenant les artisans et partageant des moments avec vos proches.",
  headingClassNameOverride,
  text3 = "Expérience de<br/>consommation partagée",
  text4 = "Une expérience sociale enrichissante, renforçant les liens avec famille et amis tout en découvrant ensemble des produits exceptionnels.",
  divClassName,
  text5 = "Soutien et valorisation<br/>des artisans locaux",
  text6 = "En privilégiant les produits issus de l&#39;artisanat local, vous contribuez au maintien et à la valorisation des savoir-faire uniques de nos régions.",
  text7,
  text8,
  buttonText = "Comment ça fonctionne ?",
  buttonText1 = "À propos de nous",
  buttonIcon = <IconChevronRight2 className="!relative !w-6 !h-6" />,
  placeholderImage = { placeHolderImage14 },
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <div
      id="contact"
      className={`flex flex-col bg-light-grey relative ${
        breakpoint === "mobile" ? "w-[375px]" : "w-[1440px]"
      } ${breakpoint === "mobile" ? "items-start" : "items-center"} ${
        breakpoint === "mobile" ? "gap-12" : "gap-20"
      } ${
        breakpoint === "mobile" ? "px-5 py-16" : "px-16 py-[60px]"
      } ${className}`}
    >
      <div
        className={`w-full flex self-stretch flex-[0_0_auto] relative ${
          breakpoint === "mobile" ? "flex-col" : ""
        } ${breakpoint === "mobile" ? "items-start" : "items-center"} ${
          breakpoint === "mobile" ? "gap-12" : "gap-20"
        }`}
      >
        {breakpoint === "desktop" && (
          <>
            <img
              className="relative flex-1 grow h-[640px] object-contain"
              alt="Placeholder image"
              src={placeHolderImage14}
            />
            <div className="gap-6 flex-1 grow flex flex-col items-start relative">
              <div className="gap-8 self-stretch w-full flex-[0_0_auto] flex flex-col items-start relative">
                <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Rethink_Sans',Helvetica] font-semibold text-green text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                    {text}
                  </div>
                  <div className="gap-6 self-stretch w-full flex-[0_0_auto] flex flex-col items-start relative">
                    <p className="text-[length:var(--heading-h2-font-size)] leading-[var(--heading-h2-line-height)] relative self-stretch mt-[-1.00px] font-heading-h2 font-[number:var(--heading-h2-font-weight)] text-green tracking-[var(--heading-h2-letter-spacing)] [font-style:var(--heading-h2-font-style)]">
                      {text1}
                    </p>
                    <p className="text-lg leading-[27px] relative self-stretch [font-family:'Rethink_Sans',Helvetica] font-normal text-green tracking-[0]">
                      {text2}
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-6 px-0 py-2 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col items-start gap-4 relative flex-1 grow">
                    <div className="text-[length:var(--heading-h6-font-size)] leading-[var(--heading-h6-line-height)] relative self-stretch mt-[-1.00px] font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-green tracking-[var(--heading-h6-letter-spacing)] [font-style:var(--heading-h6-font-style)]">
                      {text3}
                    </div>
                    <p className="text-base leading-6 relative self-stretch [font-family:'Rethink_Sans',Helvetica] font-normal text-green tracking-[0]">
                      {text4}
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-4 relative flex-1 grow">
                    <p className="text-[length:var(--heading-h6-font-size)] leading-[var(--heading-h6-line-height)] relative self-stretch mt-[-1.00px] font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-green tracking-[var(--heading-h6-letter-spacing)] [font-style:var(--heading-h6-font-style)]">
                      {text5}
                    </p>
                    <p className="relative self-stretch [font-family:'Rethink_Sans',Helvetica] font-normal text-green text-base tracking-[0] leading-6">
                      {text6}
                    </p>
                  </div>
                </div>
              </div>
              <div className="inline-flex items-center gap-6 pt-4 pb-0 px-0 relative flex-[0_0_auto]">
                <Button
                  className="!mt-[-1.00px] !ml-[-1.00px] !mb-[-1.00px] !flex-[0_0_auto]"
                  darkMode={false}
                  iconPosition="no-icon"
                  small={false}
                  style="secondary"
                  text="Comment ça fonctionne ?"
                />
                <Button
                  className="!flex-[0_0_auto]"
                  darkMode={false}
                  icon={<IconChevronRight2 className="!relative !w-6 !h-6" />}
                  iconPosition="trailing"
                  small={false}
                  style="link"
                  text="À propos de nous"
                />
              </div>
            </div>
          </>
        )}

        {breakpoint === "mobile" && (
          <>
            <div className="gap-2 flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              <div className="gap-6 flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Rethink_Sans',Helvetica] font-semibold text-green text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                    {text}
                  </div>
                  <div className="gap-5 flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                    <p
                      className={`text-[length:var(--heading-h2-mobile-font-size)] leading-[var(--heading-h2-mobile-line-height)] relative self-stretch mt-[-1.00px] font-heading-h2-mobile font-[number:var(--heading-h2-mobile-font-weight)] text-green tracking-[var(--heading-h2-mobile-letter-spacing)] [font-style:var(--heading-h2-mobile-font-style)] ${headingClassName}`}
                    >
                      {text1}
                    </p>
                    <p className="text-lg leading-[27px] relative self-stretch [font-family:'Rethink_Sans',Helvetica] font-normal text-green tracking-[0]">
                      {text2}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-6 px-0 py-2 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                    <div
                      className={`text-[length:var(--heading-h6-font-size)] leading-[var(--heading-h6-line-height)] relative self-stretch mt-[-1.00px] font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-green tracking-[var(--heading-h6-letter-spacing)] [font-style:var(--heading-h6-font-style)] ${headingClassNameOverride}`}
                    >
                      {text3}
                    </div>
                    <p className="relative self-stretch [font-family:'Rethink_Sans',Helvetica] font-normal text-green text-base tracking-[0] leading-6">
                      {text4}
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                    <p
                      className={`text-[length:var(--heading-h6-font-size)] leading-[var(--heading-h6-line-height)] relative self-stretch mt-[-1.00px] font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-green tracking-[var(--heading-h6-letter-spacing)] [font-style:var(--heading-h6-font-style)] ${divClassName}`}
                    >
                      {text5}
                    </p>
                    <p className="text-base leading-6 relative self-stretch [font-family:'Rethink_Sans',Helvetica] font-normal text-green tracking-[0]">
                      {text6}
                    </p>
                  </div>
                  {location?.pathname === "/how-it-works" && (
                    <div className="flex flex-col items-start gap-4 relative flex-1 grow">
                      <p className="text-[length:var(--heading-h6-font-size)] leading-[var(--heading-h6-line-height)] relative self-stretch mt-[-1.00px] font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-green tracking-[var(--heading-h6-letter-spacing)] [font-style:var(--heading-h6-font-style)]">
                        {text7}
                      </p>
                      <p className="relative self-stretch [font-family:'Rethink_Sans',Helvetica] font-normal text-green text-base tracking-[0] leading-6">
                        {text8}
                      </p>
                    </div>
                  )}
                </div>
              </div>
              <div className="inline-flex flex-col items-start justify-center gap-6 pt-4 pb-0 px-0 relative flex-[0_0_auto]">
                <div
                  onClick={() =>
                    navigate(
                      buttonText === "How it works?"
                        ? "/how-it-works"
                        : "/about-us"
                    )
                  }
                >
                  <Button
                    className="!mr-[-1.00px] !mt-[-1.00px] !ml-[-1.00px] !flex-[0_0_auto]"
                    darkMode={false}
                    iconPosition="no-icon"
                    small={false}
                    style="secondary"
                    text={buttonText}
                  />
                </div>
                {location?.pathname !== "/how-it-works" && (
                  <div onClick={() => navigate("/about-us")}>
                    <Button
                      className="!flex-[0_0_auto]"
                      darkMode={false}
                      icon={buttonIcon}
                      iconPosition="trailing"
                      small={false}
                      style="link"
                      text={buttonText1}
                    />
                  </div>
                )}
              </div>
            </div>
            <img
              className="relative self-stretch w-full h-[348px] object-fill"
              alt="Placeholder image"
              src={placeholderImage}
            />
          </>
        )}
      </div>
    </div>
  );
};

BreakpointDesktopWrapper.propTypes = {
  breakpoint: PropTypes.oneOf(["desktop", "mobile"]),
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  text6: PropTypes.string,
  buttonText: PropTypes.string,
  buttonText1: PropTypes.string,
  placeholderImage: PropTypes.string,
};
