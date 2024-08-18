import React, { useEffect } from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import { CardDeal } from "../../components/CardDeal";
import { RatingStar } from "../../components/RatingStar";
import { ArrowLeft } from "../../icons/ArrowLeft/ArrowLeft";
import { Box101 } from "../../icons/Box101";
import { EnvelopeAlt } from "../../icons/EnvelopeAlt";
import { MapMarker1 } from "../../icons/MapMarker1";
import { Star7 } from "../../icons/Star7";
import { StarFill1 } from "../../icons/StarFill1";
import { Users2 } from "../../icons/Users2";
import AppBar from "../../components/AppBar/AppBar";
import { Ellipse, Line63, Rectangle_5095 } from "../../images";
import ProgressBarYellow from "../../components/ProgressBar/ProgressBarYellow";
import ProgressBarGreen from "../../components/ProgressBar/ProgressBarGreen";
import { useNavigate } from "react-router-dom";

const MyInformation = () => {
  const { t } = useTranslation(); // Initialize the useTranslation hook
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/account");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const DEALS = [
    {
      deal_id: "0x001",
      dealStatus: "out_of_stock",
      participantsCount: 14,
      dealTitle: "Miracles of Wine",
      initialQuantity: 100,
      availableQuantity: 10,
      region: "FR",
      dealExpiryDate: new Date("2024-08-05"),
    },
  ];

  return (
    <div className="flex flex-col w-screen h-screen items-start relative bg-primary-background">
      <div className="flex flex-col w-[360px] items-start gap-[15px] px-[35px] py-[15px] relative">
        <div
          className="flex items-center gap-3 pt-0 pb-5 px-0 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-stroke"
          onClick={handleBack}
        >
          <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
            <ArrowLeft
              className="!relative !w-[18px] !h-[18px]"
              color="#637381"
            />
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-text-color text-base tracking-[0] leading-6 whitespace-nowrap">
              {t("common.back")}
            </div>
          </div>
        </div>
        <div className="inline-flex items-center gap-[15px] relative flex-[0_0_auto]">
          <img
            className="w-[50px] h-[50px] relative object-cover"
            alt="Rectangle"
            src={Rectangle_5095}
          />
          <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-body-medium-medium font-[number:var(--body-medium-medium-font-weight)] text-primary-color text-[length:var(--body-medium-medium-font-size)] tracking-[var(--body-medium-medium-letter-spacing)] leading-[var(--body-medium-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-medium-font-style)]">
                Anthony Brabant
              </div>
              <div className="inline-flex h-5 items-center gap-2.5 relative">
                <RatingStar
                  className="!flex-[0_0_auto]"
                  rating="four-star"
                  size="small"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-[5px] w-full flex-[0_0_auto] relative self-stretch">
          <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
            <Box101 className="!relative !w-5 !h-5" />
            <div className="relative w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]">
              {t("myInformation.orders_placed", { count: 18 })}
            </div>
          </div>
          <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
            <Users2 className="!relative !w-5 !h-5" color="#1B4F4A" />
            <div className="relative w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]">
              {t("myInformation.collections_organized", { count: 3 })}
            </div>
          </div>
          <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
            <MapMarker1 className="!relative !w-5 !h-5" color="#1B4F4A" />
            <div className="relative w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]">
              {t("myInformation.location")}
            </div>
          </div>
        </div>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <div className="flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] rounded-md border border-solid border-primary-color">
          <EnvelopeAlt className="!relative !w-5 !h-5" color="#1B4F4A" />
          <button className="all-[unset] box-border relative w-fit mt-[-1.00px] font-body-medium-medium font-[number:var(--body-medium-medium-font-weight)] text-primary-color text-[length:var(--body-medium-medium-font-size)] text-center tracking-[var(--body-medium-medium-letter-spacing)] leading-[var(--body-medium-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-medium-font-style)]">
            {t("myInformation.contact", { name: "Anthony" })}
          </button>
        </div>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <div className="font-heading-6 font-[number:var(--heading-6-font-weight)] text-primary-color text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] relative self-stretch [font-style:var(--heading-6-font-style)]">
          {t("myInformation.deals")}
        </div>
        {DEALS?.map((deal) => (
          <div onClick={() => handleCardClick(deal)} className="cursor-pointer">
            <CardDeal
              badgesColor="success"
              badgesDivClassName="!tracking-[0] !text-xs ![font-style:unset] !font-medium ![font-family:'Inter',Helvetica] !leading-5"
              badgesText1={deal.dealStatus}
              caissesDeVinsClassName="!tracking-[0] !text-base ![font-style:unset] !font-bold ![font-family:'Inter',Helvetica] !leading-6"
              className="!flex-[0_0_auto]"
              divClassName="!tracking-[0] !text-sm ![font-style:unset] !font-medium ![font-family:'Inter',Helvetica] !leading-[22px]"
              divClassNameOverride="!tracking-[0] !text-sm ![font-style:unset] !font-normal ![font-family:'Inter',Helvetica] !leading-[22px]"
              override={
                deal.dealStatus === "out_of_stock" ? (
                  <ProgressBarYellow percentage={80} />
                ) : (
                  <ProgressBarGreen percentage={90} />
                )
              }
              text={deal.dealTitle}
              text1={deal.dealStatus}
              participantsCount={deal.participantsCount}
              dealExpiryDate={deal?.dealExpiryDate}
            />
          </div>
        ))}
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <div className="font-heading-6 font-[number:var(--heading-6-font-weight)] text-primary-color text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] relative self-stretch [font-style:var(--heading-6-font-style)]">
          {t("myInformation.ratings")}
        </div>
        <div className="flex flex-col items-start gap-5 pt-5 pb-[30px] px-[30px] relative self-stretch w-full flex-[0_0_auto] bg-whitewhite rounded-xl shadow-shadow-1">
          <div className="flex flex-col items-start justify-center gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex items-center gap-[15px] relative flex-[0_0_auto]">
              <img
                className="relative w-14 h-14 object-cover"
                alt="Ellipse"
                src={Ellipse}
              />
              <div className="inline-flex flex-col items-start gap-px relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-body-medium-medium font-[number:var(--body-medium-medium-font-weight)] text-darkdark text-[length:var(--body-medium-medium-font-size)] tracking-[var(--body-medium-medium-letter-spacing)] leading-[var(--body-medium-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-medium-font-style)]">
                  John Smith
                </div>
                <div className="relative w-fit font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]">
                  25, Nov 2024
                </div>
                <div className="inline-flex items-start gap-1 relative flex-[0_0_auto]">
                  <StarFill1 className="!relative !w-4 !h-4" />
                  <StarFill1 className="!relative !w-4 !h-4" />
                  <StarFill1 className="!relative !w-4 !h-4" />
                  <Star7 className="!relative !w-4 !h-4" color="#F59E0B" />
                  <Star7 className="!relative !w-4 !h-4" color="#F59E0B" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-darkdark text-base tracking-[0] leading-[26px] whitespace-nowrap">
              {t("myInformation.rating_title")}
            </p>
            <p className="relative self-stretch font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)]">
              {t("myInformation.rating_description")}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyInformation;
