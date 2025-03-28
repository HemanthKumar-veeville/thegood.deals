import React from "react";
import { Send1 } from "../../icons/Send1";
import { LogoTheGoodDeals } from "../LogoTheGoodDeals";
import { RatingStar } from "../RatingStar";
import { blogImage, Human } from "../../images";
import { useTranslation } from "react-i18next";
import { Line } from "../Line/Line";

export const ArtisanEmail = ({ HEADERClassName }) => {
  const { t } = useTranslation(); // Initialize the translation hook

  const handleButtonClick = () => {
    alert(t("artisanEmail.seeTheDeal"));
  };

  return (
    <div className="flex flex-col w-[360px] items-start relative bg-primary-background">
      <div
        className={`flex flex-col w-[360px] h-16 items-start relative bg-primary-background border-b [border-bottom-style:solid] border-stroke ${HEADERClassName}`}
      >
        <div className="flex h-16 items-center justify-between pl-5 pr-3 py-0 relative self-stretch w-full">
          <div className="relative w-12 h-12" />
          <div className="inline-flex items-start relative flex-[0_0_auto]">
            <LogoTheGoodDeals
              className="!flex-[0_0_auto]"
              thegoodDealsClassName="!text-[28px]"
            />
          </div>
          <div className="relative w-12 h-12" />
        </div>
      </div>
      <div className="flex flex-col w-[360px] items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]">
        {/* Dear Craftsman */}
        <p className="relative self-stretch mt-[-1.00px] font-heading-6 font-[number:var(--heading-6-font-weight)] text-primary-color text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] [font-style:var(--heading-6-font-style)]">
          {t("artisanEmail.dearCraftsman")}
        </p>

        {/* Main Body Text */}
        <p className="relative self-stretch font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-primary-text-color text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] [font-style:var(--body-medium-regular-font-style)]">
          {t("artisanEmail.confirmCreation")}
          <br />
          <br />
          {t("artisanEmail.ensureCorrectInfo")}
          <br />
          <br />
          {t("artisanEmail.dealConfirmed")}
        </p>

        {/* Horizontal Line */}
        <Line />

        {/* Blog Image */}
        <img
          className="relative self-stretch w-full h-[150px] object-cover"
          alt={t("artisanEmail.blogImageAlt")}
          src={blogImage}
        />

        {/* Deal Title */}
        <p className="relative self-stretch font-heading-6 font-[number:var(--heading-6-font-weight)] text-primary-color text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] [font-style:var(--heading-6-font-style)]">
          {t("artisanEmail.dealTitle")}
        </p>

        {/* Horizontal Line */}
        <Line />

        {/* Organizer Info */}
        <div className="inline-flex items-center gap-[15px] relative flex-[0_0_auto]">
          <img
            className="relative w-[50px] h-[50px] object-cover"
            alt={t("artisanEmail.rectangleAlt")}
            src={Human}
          />
          <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]">
              {t("artisanEmail.organizedBy")}
            </div>
            <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap">
              {t("artisanEmail.organizerName")}
            </div>
            <div className="inline-flex h-5 items-center gap-2.5 relative">
              <RatingStar
                className="!flex-[0_0_auto]"
                rating={t("artisanEmail.rating")}
                size="small"
              />
            </div>
          </div>
        </div>

        {/* Horizontal Line */}
        <Line />

        {/* CTA Button */}
        <div
          className="flex items-center justify-center gap-2.5 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-primary-color rounded-md"
          onClick={handleButtonClick}
        >
          <Send1 className="!relative !w-5 !h-5" />
          <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-whitewhite text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            {t("artisanEmail.seeTheDeal")}
          </button>
        </div>
      </div>
    </div>
  );
};
