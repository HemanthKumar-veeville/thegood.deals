import PropTypes from "prop-types";
import React from "react";
import {
  frame14x3,
  frame14x4,
  frame14x6,
  frame14x7,
  frame14x8,
} from "../../images";
import PWAInstallPrompt from "../PWAInstallPrompt/PWAInstallPrompt";

export const Layout = ({
  breakpoint = "desktop",
  className = "",
  text = "Savourez ensemble les délices de l&#39;artisanat local, en trois étapes simples",
  headingClassName = "",
  text1 = "Créer votre annonce",
  text2 = " En créant une annonce attrayante où vous définirez le prix, donnerez des détails sur les produits proposés et présenterez l&#39;artisan. Toutes les informations nécessaires à vos potentiels acheteurs.",
  text3 = "Inviter vos proches",
  text4 = "Encouragez-les à explorer l&#39;offre et à passer commande, le tout facilité par une plateforme en ligne. C&#39;est l&#39;occasion de le faire découvrir des produits.",
  text5 = "Livrer la marchandise",
  text6 = "Cela inclut la préparation des colis par l&#39;artisan et leur acheminement jusqu&#39;à vous. Assurez-vous que la réception des produits par vos proches se déroule dans les meilleures conditions.",
  frame = frame14x6,
  img = frame14x7,
  frame1 = frame14x8,
  frameClassName = "",
  imgClassName = "",
  headingClassNameOverride = "",
  divClassName = "",
  divClassNameOverride = "",
  frameClassNameOverride = "",
}) => {
  const isMobile = breakpoint === "mobile";

  const renderCard = (title, description, image, extraClassName = "") => (
    <div className="relative flex flex-col items-start justify-center w-full">
      {/* Circular Image positioned 50% outside the card with z-index */}
      <div className="absolute top-[-55px] left-1/2 transform -translate-x-1/2 z-10">
        <img
          className="w-[110px] h-[110px] rounded-full"
          alt="Frame"
          src={image}
        />
      </div>

      <div className="bg-variable-collection-light-green rounded-[30px] flex flex-col items-center p-10 gap-6 relative z-0 mt-5">
        <div
          className={`text-[length:var(--heading-h5-font-size)] leading-[var(--heading-h5-line-height)] font-heading-h5 text-green text-center tracking-[var(--heading-h5-letter-spacing)] ${extraClassName}`}
        >
          {title}
        </div>
        <p className="font-normal text-green text-base text-center leading-6">
          {description}
        </p>
      </div>
    </div>
  );

  return (
    <>
      <div
        className={`flex flex-col items-center bg-light-grey relative ${
          isMobile
            ? "w-[375px] gap-12 px-5 py-16"
            : "w-[1440px] gap-20 px-16 py-[60px]"
        } ${className}`}
      >
        <p
          className={`text-center font-heading-h3 text-green mb-8 ${
            isMobile
              ? "text-[length:var(--heading-h3-mobile-font-size)] leading-[var(--heading-h3-mobile-line-height)]"
              : "text-[length:var(--heading-h3-font-size)] leading-[var(--heading-h3-line-height)]"
          } ${headingClassName}`}
        >
          {text}
        </p>

        <div
          className={`flex items-center justify-center gap-12 w-full ${
            isMobile ? "flex-col gap-[90px]" : "flex-row pt-[60px]"
          }`}
        >
          {renderCard(text1, text2, frame14x8, headingClassNameOverride)}
          {renderCard(text3, text4, frame14x3, divClassName)}
          {renderCard(text5, text6, frame14x4, divClassNameOverride)}
        </div>
      </div>
      <PWAInstallPrompt />
    </>
  );
};

Layout.propTypes = {
  breakpoint: PropTypes.oneOf(["desktop", "mobile"]),
  className: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  text4: PropTypes.string,
  text5: PropTypes.string,
  text6: PropTypes.string,
  frame: PropTypes.string,
  img: PropTypes.string,
  frame1: PropTypes.string,
  frameClassName: PropTypes.string,
  imgClassName: PropTypes.string,
  headingClassName: PropTypes.string,
  headingClassNameOverride: PropTypes.string,
  divClassName: PropTypes.string,
  divClassNameOverride: PropTypes.string,
  frameClassNameOverride: PropTypes.string,
};
