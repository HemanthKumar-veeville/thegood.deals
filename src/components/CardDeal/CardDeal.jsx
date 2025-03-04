import PropTypes from "prop-types";
import React from "react";
import { ClockAlt12 } from "../../icons/ClockAlt12";
import { Users22 } from "../../icons/Users22";
import { Badges } from "../Badges";
import { StyleTypePrimary } from "../StyleTypePrimary";
import {
  Line_60_2,
  Line_59_2,
  Rectangle_4592_5,
  FranceFlag,
  Rectangle4592,
} from "../../images";
import ImageSlider from "../ImageSlider/ImageSlider";
import { UserAlt } from "../../icons/UserAlt";
import { useTranslation } from "react-i18next"; // Add translation hook
import DiscountBadge from "../DiscountBadge";

const statusBanner = {
  soon_out_stock: { text: "artisan.cardDeal.soonOutStock", color: "warning" },
  payment_pending: {
    text: "artisan.cardDeal.payment_pending",
    color: "warning",
  },
  expired: {
    text: "artisan.cardDeal.expired",
    color: "warning",
  },
  finished: { text: "artisan.cardDeal.finished", color: "success" },
  in_stock: { text: "artisan.cardDeal.inStock", color: "success" },
  waiting: { text: "artisan.cardDeal.waiting", color: "warning" },
  draft: { text: "artisan.cardDeal.draft", color: "info" },
};

export const CardDeal = ({
  className,
  styleTypePrimaryText = "80% vendus",
  styleTypePrimaryLine = { Line_60_2 },
  styleTypePrimaryDivClassName,
  caissesDeVinsClassName,
  text = "Caisses de vins<br/>Domaine de Cigaluse",
  divClassName,
  text1 = "fin dans 12 jours",
  divClassNameOverride,
  badgesText = statusBanner[text1]?.text,
  badgesDivClassName,
  participantsCount,
  isInvitePending,
  override = (
    <StyleTypePrimary
      className="!self-stretch !w-full !relative"
      divClassName={styleTypePrimaryDivClassName}
      groupClassName="!w-[260px]"
      line={styleTypePrimaryLine}
      lineClassName="!w-[197px]"
      overlapClassName={`bg-[url(${Line_59_2})]`}
      text={styleTypePrimaryText}
    />
  ),
  badgesColor = "warning",
  badgesText1 = statusBanner[text1]?.text,
  dealEndsIn,
  isGuestDeal,
  dealImages,
  organizer,
  discount,
}) => {
  const { t } = useTranslation(); // Initialize the translation hook

  const calculateDaysLeft = (expiryDate) => {
    const now = new Date();
    const timeDifference = expiryDate - now;
    const daysLeft = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
    return daysLeft;
  };

  const daysLeft = dealEndsIn;
  const statusCaption = {
    soon_out_stock: t("artisan.cardDeal.endsIn", { days: daysLeft }),
    finished: t("artisan.cardDeal.dealFinished"),
    expired: t("artisan.cardDeal.dealFinished"),
    payment_pending: t("artisan.cardDeal.dealFinished"),
    in_stock: t("artisan.cardDeal.endsIn", { days: daysLeft }),
  };

  return (
    <div
      className={`flex flex-col w-full items-start relative rounded-lg overflow-hidden shadow-shadow-1 ${className}`}
    >
      <ImageSlider pictures={dealImages} />
      <div className="flex flex-col items-center gap-2.5 p-[15px] relative self-stretch w-full flex-[0_0_auto] bg-whitewhite">
        <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          {!(text1 === "draft" || text1 === "waiting") && override}
          <p
            className={`capitalize relative self-stretch font-body-medium-bold font-[number:var(--body-medium-bold-font-weight)] text-primary-color text-[length:var(--body-medium-bold-font-size)] tracking-[var(--body-medium-bold-letter-spacing)] leading-[var(--body-medium-bold-line-height)] [font-style:var(--body-medium-bold-font-style)] ${caissesDeVinsClassName}`}
          >
            {text}
          </p>
          {!(text1 === "draft" || text1 === "waiting") && (
            <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
              <ClockAlt12 className="!relative !w-5 !h-5" color="#1B4F4A" />
              <div
                className={`relative w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)] ${divClassName}`}
              >
                {statusCaption[text1]}
              </div>
            </div>
          )}
          {participantsCount !== 0 && (
            <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
              <Users22 className="!relative !w-5 !h-5" />
              <div
                className={`relative w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)] ${divClassNameOverride}`}
              >
                {t("artisan.cardDeal.participants", {
                  count: participantsCount,
                })}
              </div>
            </div>
          )}
          {isGuestDeal && (
            <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
              <UserAlt className="!relative !w-5 !h-5" />
              <div
                className={`relative w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)] ${divClassNameOverride}`}
              >
                {organizer}
              </div>
            </div>
          )}
        </div>
      </div>
      <Badges
        className="!left-[15px] !absolute !top-[15px] !font-semibold"
        color={isInvitePending ? "warning" : statusBanner[text1]?.color}
        divClassName={badgesDivClassName}
        round="semi-round"
        state="duo-tone"
        text1={
          isInvitePending ? t("create_deal.invite_pending") : t(badgesText)
        }
        text2={
          badgesText1 === "in_stock" || badgesText1 === "finished"
            ? t(statusBanner[badgesText1]?.text)
            : t(badgesText1)
        }
      />
      <Badges
        className="!right-[15px] !absolute !bg-blueblue-light-5 !top-[15px]"
        color="warning"
        divClassName="!text-blueblue !tracking-[0] !text-lg ![font-style:unset] !font-bold ![font-family:'Inter',Helvetica] !leading-5"
        round="semi-round"
        state="duo-tone"
        imageSrc={FranceFlag}
      />
      <DiscountBadge discount={discount} />
    </div>
  );
};

CardDeal.propTypes = {
  styleTypePrimaryText: PropTypes.string,
  styleTypePrimaryLine: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
  badgesText: PropTypes.string,
  badgesColor: PropTypes.string,
  badgesText1: PropTypes.string,
};
