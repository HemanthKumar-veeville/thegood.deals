// src/components/GuestsSendReviews.js
import React, { useState } from "react";
import { ArrowRight1 } from "../../icons/ArrowRight1";
import { Star5 } from "../../icons/Star5";
import { StarFill1 } from "../../icons/StarFill1";
import { VerticalLine } from "../../icons/VerticalLine";
import { Line63 } from "../../images";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";

export const GuestsSendReviews = ({
  HEADERHeaderOpenClassName,
  HEADERIcon = <VerticalLine className="!relative !w-6 !h-6" color="#1B4F4A" />,
}) => {
  const { t } = useTranslation(); // Initialize the translation hook
  const location = useLocation();
  const path = location.pathname;
  console.log({ path });
  // Extract orderId from the query parameters
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email");

  const [organizerRating, setOrganizerRating] = useState(0);
  const [productRating, setProductRating] = useState(0);
  const [platformRating, setPlatformRating] = useState(0);
  const [organizerRemarks, setOrganizerRemarks] = useState("");
  const [productRemarks, setProductRemarks] = useState("");
  const [platformRemarks, setPlatformRemarks] = useState("");

  const handleStarClick = (setRating, ratingValue) => {
    setRating(ratingValue);
  };

  const handleTextAreaChange = (setRemarks, event) => {
    setRemarks(event.target.value);
  };

  const handleSubmit = () => {};

  const renderStars = (currentRating, setRating) => {
    return [1, 2, 3, 4, 5].map((ratingValue) => (
      <div
        key={ratingValue}
        onClick={() => handleStarClick(setRating, ratingValue)}
      >
        {currentRating >= ratingValue ? (
          <StarFill1
            className="!relative !w-[25px] !h-[25px]"
            color="#F59E0B"
          />
        ) : (
          <Star5 className="!relative !w-[25px] !h-[25px]" color="#F59E0B" />
        )}
      </div>
    ));
  };

  return (
    <div className="flex flex-col w-full items-start relative bg-primary-background">
      <div className="flex flex-col w-full items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]">
        <div className="relative self-stretch mt-[-1.00px] font-heading-6 font-[number:var(--heading-6-font-weight)] text-primary-color text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] [font-style:var(--heading-6-font-style)]">
          {t("guestsSendReviews.giveYourOpinion")}
        </div>
        <p className="relative self-stretch font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-primary-text-color text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] [font-style:var(--body-medium-regular-font-style)]">
          {t("guestsSendReviews.thankYouForUsingService")}
        </p>
        {path === "/participant-send-review" && (
          <>
            <img
              className="relative self-stretch w-full h-px object-cover"
              alt={t("guestsSendReviews.line")}
              src={Line63}
            />
            <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="w-[247px] flex flex-col items-start relative flex-[0_0_auto]">
                <div className="relative self-stretch mt-[-1.00px] font-body-large-medium font-[number:var(--body-large-medium-font-weight)] text-primary-color text-[length:var(--body-large-medium-font-size)] tracking-[var(--body-large-medium-letter-spacing)] leading-[var(--body-large-medium-line-height)] [font-style:var(--body-large-medium-font-style)]">
                  {t("guestsSendReviews.rateOrganizer")}
                </div>
                <p className="relative self-stretch font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)]">
                  {t("guestsSendReviews.wasOrganizerTask")}
                </p>
              </div>
              <div className="inline-flex items-center gap-[8.33px] relative flex-[0_0_auto]">
                <div className="inline-flex items-start gap-[6.25px] relative flex-[0_0_auto]">
                  {renderStars(organizerRating, setOrganizerRating)}
                </div>
              </div>
              <div className="flex flex-col h-[120px] items-start relative self-stretch w-full">
                <textarea
                  className="flex-1 grow flex items-start gap-2.5 p-5 relative self-stretch w-full bg-whitewhite rounded-md border border-solid border-stroke focus:outline-none focus:ring-2 focus:ring-[#2a4e4a] placeholder:text-[#637381] text-[#637381]"
                  value={organizerRemarks}
                  onChange={(e) => handleTextAreaChange(setOrganizerRemarks, e)}
                  maxLength={1000}
                  placeholder={t("guestsSendReviews.remarks")}
                />
              </div>
              <div className="flex items-end justify-end gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-[42px] h-[22px] mr-[-2.00px]">
                  <div className="absolute top-0 left-0 font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] text-right tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]">
                    {organizerRemarks.length}/250
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt={t("guestsSendReviews.line")}
          src={Line63}
        />
        <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="self-stretch w-full flex flex-col items-start relative flex-[0_0_auto]">
            <div className="relative self-stretch mt-[-1.00px] font-body-large-medium font-[number:var(--body-large-medium-font-weight)] text-primary-color text-[length:var(--body-large-medium-font-size)] tracking-[var(--body-large-medium-letter-spacing)] leading-[var(--body-large-medium-line-height)] [font-style:var(--body-large-medium-font-style)]">
              {t("guestsSendReviews.rateProducts")}
            </div>
            <p className="relative self-stretch font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)]">
              {t("guestsSendReviews.didProductsMeetExpectations")}
            </p>
          </div>
          <div className="inline-flex items-center gap-[8.33px] relative flex-[0_0_auto]">
            <div className="inline-flex items-start gap-[6.25px] relative flex-[0_0_auto]">
              {renderStars(productRating, setProductRating)}
            </div>
          </div>
          <div className="flex flex-col h-[120px] items-start relative self-stretch w-full">
            <textarea
              className="flex-1 grow flex items-start gap-2.5 p-5 relative self-stretch w-full bg-whitewhite rounded-md border border-solid border-stroke focus:outline-none focus:ring-2 focus:ring-[#2a4e4a] placeholder:text-[#637381] text-[#637381]"
              value={productRemarks}
              onChange={(e) => handleTextAreaChange(setProductRemarks, e)}
              maxLength={1000}
              placeholder={t("guestsSendReviews.remarks")}
            />
          </div>
          <div className="flex items-end justify-end gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-[42px] h-[22px] mr-[-2.00px]">
              <div className="absolute top-0 left-0 font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] text-right tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]">
                {productRemarks.length}/250
              </div>
            </div>
          </div>
        </div>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt={t("guestsSendReviews.line")}
          src={Line63}
        />
        <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="self-stretch w-full flex flex-col items-start relative flex-[0_0_auto]">
            <p className="relative self-stretch mt-[-1.00px] font-body-large-medium font-[number:var(--body-large-medium-font-weight)] text-primary-color text-[length:var(--body-large-medium-font-size)] tracking-[var(--body-large-medium-letter-spacing)] leading-[var(--body-large-medium-line-height)] [font-style:var(--body-large-medium-font-style)]">
              {t("guestsSendReviews.ratePlatform")}
            </p>
            <p className="relative self-stretch font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)]">
              {t("guestsSendReviews.didYouEnjoySite")}
            </p>
          </div>
          <div className="inline-flex items-center gap-[8.33px] relative flex-[0_0_auto]">
            <div className="inline-flex items-start gap-[6.25px] relative flex-[0_0_auto]">
              {renderStars(platformRating, setPlatformRating)}
            </div>
          </div>
          <div className="flex flex-col h-[120px] items-start relative self-stretch w-full">
            <textarea
              className="h-[120px] flex items-start gap-2.5 p-5 relative self-stretch w-full bg-whitewhite rounded-md border border-solid border-stroke focus:outline-none focus:ring-2 focus:ring-[#2a4e4a] placeholder:text-[#637381] text-[#637381]"
              value={platformRemarks}
              onChange={(e) => handleTextAreaChange(setPlatformRemarks, e)}
              maxLength={1000}
              placeholder={t("guestsSendReviews.remarks")}
            />
          </div>
          <div className="flex items-end justify-end gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-[42px] h-[22px] mr-[-2.00px]">
              <div className="absolute top-0 left-0 font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] text-right tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]">
                {platformRemarks.length}/250
              </div>
            </div>
          </div>
        </div>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt={t("guestsSendReviews.line")}
          src={Line63}
        />
        <div
          className="flex items-center justify-center gap-2.5 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-primary-color rounded-md focus:outline-none focus:ring-2 focus:ring-[#2a4e4a]"
          onClick={handleSubmit}
        >
          <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-whitewhite text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            {t("guestsSendReviews.sendMyReview")}
          </button>
          <ArrowRight1 className="!relative !w-5 !h-5" color="white" />
        </div>
      </div>
    </div>
  );
};
