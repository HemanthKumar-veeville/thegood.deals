// src/components/GuestsSendReviews.js
import React, { useState } from "react";
import { ArrowRight1 } from "../../icons/ArrowRight1";
import { Star5 } from "../../icons/Star5";
import { StarFill1 } from "../../icons/StarFill1";
import { VerticalLine } from "../../icons/VerticalLine";
import { Line63 } from "../../images";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { submitReview } from "../../redux/app/review/reviewSlice";
import { ShowCustomErrorModal } from "../ErrorAlert/ErrorAlert";

export const GuestsSendReviews = ({
  HEADERHeaderOpenClassName,
  HEADERIcon = <VerticalLine className="!relative !w-6 !h-6" color="#1B4F4A" />,
}) => {
  const { t } = useTranslation(); // Initialize the translation hook
  const location = useLocation();
  const path = location.pathname;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Extract orderId from the query parameters
  const queryParams = new URLSearchParams(location.search);
  const user_email = queryParams.get("email");
  const deal_id = queryParams.get("deal_id");

  const [organizerRating, setOrganizerRating] = useState(null);
  const [productRating, setProductRating] = useState(null);
  const [platformRating, setPlatformRating] = useState(null);
  const [organizerRemarks, setOrganizerRemarks] = useState(null);
  const [productRemarks, setProductRemarks] = useState(null);
  const [platformRemarks, setPlatformRemarks] = useState(null);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleStarClick = (setRating, ratingValue) => {
    setRating(ratingValue);
  };

  const handleTextAreaChange = (setRemarks, event) => {
    setRemarks(event.target.value);
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    if (organizerRating) {
      formData.append("organiser_rating", organizerRating);
    }
    if (organizerRemarks) {
      formData.append("organiser_review", organizerRemarks);
    }
    if (productRating) {
      formData.append("deal_rating", productRating);
    }
    if (productRemarks) {
      formData.append("deal_review", productRemarks);
    }
    if (platformRating) {
      formData.append("platform_rating", platformRating);
    }
    if (platformRemarks) {
      formData.append("platform_review", platformRemarks);
    }
    try {
      const response = await dispatch(
        submitReview({ reviewData: formData, deal_id, user_email })
      ).unwrap();

      navigate("/thanks-review");
    } catch (error) {
      setIsError(true);
      setErrorMessage(error?.detail || error?.message);
    }
  };

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
      <div className="flex flex-col w-full items-start gap-[15px] px-[15px] py-[15px] relative flex-[0_0_auto]">
        {isError && (
          <ShowCustomErrorModal
            message={errorMessage}
            buttonText={t("waiting_deal.got_it")}
            onClose={() => setIsError(false)} // Reset modal state on close
          />
        )}
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
                    {organizerRemarks?.length || 0}/250
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
              value={productRemarks || ""}
              onChange={(e) => handleTextAreaChange(setProductRemarks, e)}
              maxLength={1000}
              placeholder={t("guestsSendReviews.remarks")}
            />
          </div>
          <div className="flex items-end justify-end gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-[42px] h-[22px] mr-[-2.00px]">
              <div className="absolute top-0 left-0 font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] text-right tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]">
                {productRemarks?.length || 0}/250
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
              value={platformRemarks || ""}
              onChange={(e) => handleTextAreaChange(setPlatformRemarks, e)}
              maxLength={1000}
              placeholder={t("guestsSendReviews.remarks")}
            />
          </div>
          <div className="flex items-end justify-end gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-[42px] h-[22px] mr-[-2.00px]">
              <div className="absolute top-0 left-0 font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] text-right tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]">
                {platformRemarks?.length || 0}/250
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
