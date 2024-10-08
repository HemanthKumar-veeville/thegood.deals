import PropTypes from "prop-types";
import React from "react";
import { ClockAlt12 } from "../../icons/ClockAlt12";
import { UserAlt } from "../../icons/UserAlt";
import { Users2 } from "../../icons/Users2";
import { Badges } from "../Badges";
import { StyleTypePrimary } from "../StyleTypePrimary";
import { Rectangle_4592 } from "../../images";
import { useTranslation } from "react-i18next"; // Import translation hook

export const CardDeal = ({
  className,
  styleTypePrimaryText,
  text,
  text1,
  badgesText,
}) => {
  const { t } = useTranslation(); // Initialize the translation hook

  return (
    <div
      className={`flex flex-col w-[290px] items-start relative rounded-lg overflow-hidden shadow-shadow-1 ${className}`}
    >
      <img
        className="relative self-stretch w-full h-[125px] object-cover"
        alt="Rectangle"
        src={Rectangle_4592}
      />
      <div className="flex flex-col items-center gap-2.5 p-[15px] relative self-stretch w-full flex-[0_0_auto] bg-whitewhite">
        <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <StyleTypePrimary
            className="!self-stretch !w-full !relative"
            divClassName="!left-[61px]"
            groupClassName="!w-[260px]"
            line="/img/line-60.svg"
            lineClassName="!w-[197px]"
            overlapClassName="!w-[260px]"
            overlapGroupClassName="bg-[url(/static/img/line-59.svg)]"
            text={t("artisan.cardDeal.styleTypePrimaryText")}
          />
          <p className="relative self-stretch font-body-medium-bold font-[number:var(--body-medium-bold-font-weight)] text-primary-color text-[length:var(--body-medium-bold-font-size)] tracking-[var(--body-medium-bold-letter-spacing)] leading-[var(--body-medium-bold-line-height)] [font-style:var(--body-medium-bold-font-style)]">
            {t("artisan.cardDeal.text")}
          </p>
          <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
            <ClockAlt12 className="!relative !w-5 !h-5" color="#1B4F4A" />
            <div className="relative w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]">
              {t("artisan.cardDeal.text1")}
            </div>
          </div>
          <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
            <Users2 className="!relative !w-5 !h-5" color="#111928" />
            <div className="relative w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]">
              {t("artisan.cardDeal.participants", { count: 13 })}
            </div>
          </div>
          <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
            <UserAlt className="!relative !w-5 !h-5" color="#1B4F4A" />
            <div className="relative w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]">
              {t("artisan.cardDeal.authorName")}
            </div>
          </div>
        </div>
      </div>
      <Badges
        className="!left-[15px] !absolute !top-[15px]"
        color="warning"
        round="semi-round"
        state="duo-tone"
        text1={t("artisan.cardDeal.badgesText")}
      />
      <Badges
        className="!left-60 !absolute !bg-blueblue-light-5 !top-[15px]"
        color="warning"
        divClassName="!text-blueblue !tracking-[0] !text-lg ![font-style:unset] !font-medium ![font-family:'Inter',Helvetica] !leading-5"
        round="semi-round"
        state="duo-tone"
        text1="🇫🇷"
      />
    </div>
  );
};

CardDeal.propTypes = {
  styleTypePrimaryText: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  badgesText: PropTypes.string,
};
