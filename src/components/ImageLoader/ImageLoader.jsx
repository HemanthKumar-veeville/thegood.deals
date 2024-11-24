import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next"; // Importing useTranslation hook
import DiscountBadge from "../DiscountBadge";
import { getMaxDiscount } from "../../helpers/helperMethods";
import { Badges } from "../Badges";
import { FranceFlag } from "../../images";

const ImageLoader = ({ picture, index, products }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const { t } = useTranslation(); // Initializing translation hook

  useEffect(() => {
    const img = new Image();
    img.src = picture;
    img.onload = () => {
      setIsLoaded(true);
    };
    img.onerror = () => {
      console.error(t("imageLoader.error")); // Localized error message
    };
  }, [picture, t]);

  return (
    <div className="relative w-full rounded-md overflow-hidden bg-white">
      {products && (
        <>
          <DiscountBadge
            discount={getMaxDiscount(products || [])}
            className="absolute top-2 left-4 bg-greengreen-light-6 text-greengreen text-xs font-bold px-3 py-1 rounded-md shadow-md"
          />
          <Badges
            className="!right-[15px] !absolute !bg-blueblue-light-5 !top-2"
            color="warning"
            divClassName="!text-blueblue !tracking-[0] !text-lg ![font-style:unset] !font-bold ![font-family:'Inter',Helvetica] !leading-5"
            round="semi-round"
            state="duo-tone"
            imageSrc={FranceFlag}
          />
        </>
      )}
      {isLoaded ? (
        <img
          src={picture}
          alt={`${t("imageLoader.imageAlt")} ${index + 1}`} // Using translated alt text
          className={`object-contain  max-h-64 w-full h-full rounded-md ${
            index === 0 ? "border-4 border-yellow-500" : ""
          }`}
        />
      ) : (
        <div className="w-full h-full bg-gray-200 rounded-md relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
          <span className="sr-only">{t("imageLoader.loading")}</span>{" "}
          {/* Screen reader text for loading */}
        </div>
      )}
    </div>
  );
};

export default ImageLoader;
