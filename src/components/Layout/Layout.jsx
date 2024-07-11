/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import {
  frame14x3,
  frame14x4,
  frame14x6,
  frame14x7,
  frame14x8,
} from "../../images";

export const Layout = ({
  breakpoint,
  className,
  headingClassName,
  text = "Savourez ensemble les délices de l&#39;artisanat local, en trois étapes simples",
  headingClassNameOverride,
  text1 = "Créer votre annonce",
  text2 = " En créant une annonce attrayante où vous définirez le prix, donnerez des détails sur les produits proposés et présenterez l&#39;artisan. Toutes les informations nécessaires à vos potentiels acheteurs.",
  divClassName,
  text3 = "Inviter vos proches",
  text4 = "Encouragez-les à explorer l&#39;offre et à passer commande, le tout facilité par une plateforme en ligne. C&#39;est l&#39;occasion de le faire découvrir des produits.",
  frameClassName,
  frame = { frame14x6 },
  divClassNameOverride,
  text5 = "Livrer la marchandise",
  text6 = "Cela inclut la préparation des colis par l&#39;artisan et leur acheminement jusqu&#39;à vous. Assurez-vous que la réception des produits par vos proches se déroule dans les meilleures conditions.",
  frameClassNameOverride,
  img = { frame14x7 },
  imgClassName,
  frame1 = { frame14x8 },
}) => {
  return (
    <div
      className={`flex flex-col items-center bg-light-grey relative ${
        breakpoint === "mobile" ? "w-[375px]" : "w-[1440px]"
      } ${breakpoint === "mobile" ? "gap-12" : "gap-20"} ${
        breakpoint === "mobile" ? "px-5 py-16" : "px-16 py-[60px]"
      } ${className}`}
    >
      {breakpoint === "desktop" && (
        <div className="flex flex-col w-[1440px] h-[521px] items-center gap-[60px] px-16 py-0 relative ml-[-64.00px] mr-[-64.00px] bg-light-grey">
          <p className="w-[768px] text-[length:var(--heading-h3-font-size)] leading-[var(--heading-h3-line-height)] relative mt-[-1.00px] font-heading-h3 font-[number:var(--heading-h3-font-weight)] text-green text-center tracking-[var(--heading-h3-letter-spacing)] [font-style:var(--heading-h3-font-style)]">
            {text}
          </p>
          <div className="flex h-[340px] items-start justify-center gap-12 pt-[60px] pb-0 px-0 relative self-stretch w-full">
            <div className="flex flex-col h-[280px] items-start justify-center relative flex-1 grow">
              <div className="items-center gap-6 pt-20 pb-10 px-10 flex-1 grow bg-variable-collection-light-green rounded-[30px] flex flex-col relative self-stretch w-full">
                <div className="items-start gap-4 flex-[0_0_auto] mb-[-10.00px] flex flex-col relative self-stretch w-full">
                  <div className="self-stretch text-[length:var(--heading-h5-font-size)] leading-[var(--heading-h5-line-height)] relative mt-[-1.00px] font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-green text-center tracking-[var(--heading-h5-letter-spacing)] [font-style:var(--heading-h5-font-style)]">
                    {text1}
                  </div>
                  <p className="relative self-stretch [font-family:'Rethink_Sans',Helvetica] font-normal text-green text-base text-center tracking-[0] leading-6">
                    {text2}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col h-[280px] items-start justify-center relative flex-1 grow">
              <div className="items-center gap-6 pt-20 pb-10 px-10 flex-1 grow bg-variable-collection-light-green rounded-[30px] flex flex-col relative self-stretch w-full">
                <div className="items-start gap-4 flex-[0_0_auto] flex flex-col relative self-stretch w-full">
                  <div className="self-stretch text-[length:var(--heading-h5-font-size)] leading-[var(--heading-h5-line-height)] relative mt-[-1.00px] font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-green text-center tracking-[var(--heading-h5-letter-spacing)] [font-style:var(--heading-h5-font-style)]">
                    {text3}
                  </div>
                  <p className="relative self-stretch [font-family:'Rethink_Sans',Helvetica] font-normal text-green text-base text-center tracking-[0] leading-6">
                    {text4}
                  </p>
                </div>
              </div>
            </div>
            <img
              className="left-[601px] absolute w-[110px] h-[110px] top-[5px]"
              alt="Frame"
              src={frame14x3}
            />
            <div className="flex flex-col h-[280px] items-start justify-center relative flex-1 grow">
              <div className="items-center gap-6 pt-20 pb-10 px-10 flex-1 grow bg-variable-collection-light-green rounded-[30px] flex flex-col relative self-stretch w-full">
                <div className="items-start gap-4 flex-[0_0_auto] mb-[-10.00px] flex flex-col relative self-stretch w-full">
                  <div className="self-stretch text-[length:var(--heading-h5-font-size)] leading-[var(--heading-h5-line-height)] relative mt-[-1.00px] font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-green text-center tracking-[var(--heading-h5-letter-spacing)] [font-style:var(--heading-h5-font-style)]">
                    {text5}
                  </div>
                  <p className="relative self-stretch [font-family:'Rethink_Sans',Helvetica] font-normal text-green text-base text-center tracking-[0] leading-6">
                    {text6}
                  </p>
                </div>
              </div>
            </div>
            <img
              className="left-[1054px] absolute w-[110px] h-[110px] top-[5px]"
              alt="Frame"
              src={frame14x4}
            />
            <img
              className="left-[148px] absolute w-[110px] h-[110px] top-[5px]"
              alt="Frame"
              src={frame14x8}
            />
          </div>
        </div>
      )}

      {breakpoint === "mobile" && (
        <>
          <p
            className={`text-[length:var(--heading-h3-mobile-font-size)] leading-[var(--heading-h3-mobile-line-height)] relative self-stretch mt-[-1.00px] font-heading-h3-mobile font-[number:var(--heading-h3-mobile-font-weight)] text-green text-center tracking-[var(--heading-h3-mobile-letter-spacing)] [font-style:var(--heading-h3-mobile-font-style)] ${headingClassName}`}
          >
            {text}
          </p>
          <div className="flex flex-col items-center gap-[90px] pt-[60px] pb-0 px-0 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start justify-center relative self-stretch w-full flex-[0_0_auto]">
              <div className="items-center gap-6 pt-20 pb-10 px-10 bg-variable-collection-light-green rounded-[30px] flex flex-col relative self-stretch w-full flex-[0_0_auto]">
                <div className="items-start gap-4 flex flex-col relative self-stretch w-full flex-[0_0_auto]">
                  <div
                    className={`text-[length:var(--heading-h5-font-size)] leading-[var(--heading-h5-line-height)] relative self-stretch mt-[-1.00px] font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-green text-center tracking-[var(--heading-h5-letter-spacing)] [font-style:var(--heading-h5-font-style)] ${headingClassNameOverride}`}
                  >
                    {text1}
                  </div>
                  <p className="relative self-stretch [font-family:'Rethink_Sans',Helvetica] font-normal text-green text-base text-center tracking-[0] leading-6">
                    {text2}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-center relative self-stretch w-full flex-[0_0_auto]">
              <div className="items-center gap-6 pt-20 pb-10 px-10 bg-variable-collection-light-green rounded-[30px] flex flex-col relative self-stretch w-full flex-[0_0_auto]">
                <div className="items-start gap-4 flex flex-col relative self-stretch w-full flex-[0_0_auto]">
                  <div
                    className={`text-[length:var(--heading-h5-font-size)] leading-[var(--heading-h5-line-height)] relative self-stretch mt-[-1.00px] font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-green text-center tracking-[var(--heading-h5-letter-spacing)] [font-style:var(--heading-h5-font-style)] ${divClassName}`}
                  >
                    {text3}
                  </div>
                  <p className="relative self-stretch [font-family:'Rethink_Sans',Helvetica] font-normal text-green text-base text-center tracking-[0] leading-6">
                    {text4}
                  </p>
                </div>
              </div>
            </div>
            <img
              className={`!top-[34%] absolute w-[110px] h-[110px] left-28 ${frameClassName}`}
              alt="Frame"
              src={frame}
            />
            <div className="flex flex-col items-start justify-center relative self-stretch w-full flex-[0_0_auto]">
              <div className="items-center gap-6 pt-20 pb-10 px-10 bg-variable-collection-light-green rounded-[30px] flex flex-col relative self-stretch w-full flex-[0_0_auto]">
                <div className="items-start gap-4 flex flex-col relative self-stretch w-full flex-[0_0_auto]">
                  <div
                    className={`text-[length:var(--heading-h5-font-size)] leading-[var(--heading-h5-line-height)] relative self-stretch mt-[-1.00px] font-heading-h5 font-[number:var(--heading-h5-font-weight)] text-green text-center tracking-[var(--heading-h5-letter-spacing)] [font-style:var(--heading-h5-font-style)] ${divClassNameOverride}`}
                  >
                    {text5}
                  </div>
                  <p className="relative self-stretch [font-family:'Rethink_Sans',Helvetica] font-normal text-green text-base text-center tracking-[0] leading-6">
                    {text6}
                  </p>
                </div>
              </div>
            </div>
            <img
              className={`!top-[67%] absolute w-[110px] h-[110px] left-28 ${frameClassNameOverride}`}
              alt="Frame"
              src={img}
            />
            <img
              className={`top-[5px] absolute w-[110px] h-[110px] left-28 ${imgClassName}`}
              alt="Frame"
              src={frame1}
            />
          </div>
        </>
      )}
    </div>
  );
};

Layout.propTypes = {
  breakpoint: PropTypes.oneOf(["desktop", "mobile"]),
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  frame: PropTypes.string,
  text5: PropTypes.string,
  text6: PropTypes.string,
  img: PropTypes.string,
  frame1: PropTypes.string,
};
