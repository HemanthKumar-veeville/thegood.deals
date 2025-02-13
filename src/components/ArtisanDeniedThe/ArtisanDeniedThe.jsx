import React, { useState } from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import { ArrowLeft1 } from "../../icons/ArrowLeft1";
import { ArrowRight1 } from "../../icons/ArrowRight1";
import { VerticalLine2 } from "../../icons/VerticalLine2";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { validationByArtisan } from "../../redux/app/deals/dealSlice";
import { Line } from "../Line/Line";

export const ArtisanDeniedThe = ({
  HEADERHeaderOpenClassName,
  HEADERIcon = (
    <VerticalLine2 className="!relative !w-6 !h-6" color="#1B4F4A" />
  ),
}) => {
  const { t } = useTranslation(); // Initialize the useTranslation hook
  const [feedback, setFeedback] = useState("");
  const [charCount, setCharCount] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryParams = new URLSearchParams(location.search);
  const dealId = queryParams.get("deal_id");

  const handleFeedbackChange = (e) => {
    const input = e.target.value;
    setFeedback(input);
    setCharCount(input.length);
  };

  const handleSubmit = async (dealId) => {
    const formData = { status: "refuse", reason_for_refusal: feedback };

    try {
      // Dispatch the async thunk with formData as the dealUpdate
      const resultAction = await dispatch(
        validationByArtisan({ dealId, dealUpdate: formData })
      );

      // Check if the thunk was fulfilled
      if (validationByArtisan.fulfilled.match(resultAction)) {
        navigate("/deal-refused-message");
      } else {
        console.error("Validation failed:", resultAction.payload);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleCancel = () => {
    navigate(`/artisan-validation?deal_id=${dealId}`);
  };

  return (
    <div className="flex flex-col w-full min-h-screen items-start relative bg-primary-background h-full">
      <div className="flex flex-col w-full items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]">
        {/* Header Text */}
        <p className="relative self-stretch mt-[-1.00px] font-heading-6 font-[number:var(--heading-6-font-weight)] text-primary-color text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] [font-style:var(--heading-6-font-style)]">
          {t("artisanDeniedThe.not_agree")}
        </p>
        <p className="relative self-stretch font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-primary-text-color text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] [font-style:var(--body-medium-regular-font-style)]">
          {t("artisanDeniedThe.send_info")}
        </p>
        <Line />
        {/* Feedback Form */}
        <div className="flex flex-col h-[220px] items-start gap-2.5 relative self-stretch w-full">
          <p className="relative w-fit mt-[-1.00px] font-body-large-medium font-[number:var(--body-large-medium-font-weight)] text-primary-color text-[length:var(--body-large-medium-font-size)] tracking-[var(--body-large-medium-letter-spacing)] leading-[var(--body-large-medium-line-height)] whitespace-nowrap [font-style:var(--body-large-medium-font-style)]">
            {t("artisanDeniedThe.indicate_info")}
          </p>
          <div className="flex flex-col items-start relative flex-1 self-stretch w-full grow">
            <div className="flex items-start gap-2.5 p-5 self-stretch w-full grow bg-whitewhite rounded-md border border-solid border-stroke relative flex-1">
              <textarea
                value={feedback}
                onChange={handleFeedbackChange}
                placeholder={t("artisanDeniedThe.placeholder")}
                className="mt-[-1.00px] font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-darkdark-6 text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] relative flex-1 [font-style:var(--body-medium-regular-font-style)] w-full focus:outline-none resize-none"
                maxLength="1000"
                rows="5"
              />
            </div>
          </div>
          <div className="flex items-end justify-end gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-[42px] h-[22px] mr-[-2.00px]">
              <div className="absolute top-0 left-0 font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] text-right tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]">
                {charCount}/250
              </div>
            </div>
          </div>
        </div>
        {/* Submit Button */}
        <div
          onClick={() => handleSubmit(dealId)}
          className="gap-2.5 bg-primary-color flex items-center justify-center px-6 py-3 relative self-stretch w-full flex-[0_0_auto] rounded-md cursor-pointer"
        >
          <button className="all-[unset] box-border text-whitewhite relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            {t("artisanDeniedThe.send_for_proofreading")}
          </button>
          <ArrowRight1 className="!relative !w-5 !h-5" color="white" />
        </div>
        <Line />
        {/* Cancel Button */}
        <div
          onClick={handleCancel}
          className="gap-2 border border-solid border-primary-color flex items-center justify-center px-6 py-3 relative self-stretch w-full flex-[0_0_auto] rounded-md cursor-pointer"
        >
          <ArrowLeft1 className="!relative !w-5 !h-5" color="#1B4F4A" />
          <p className="text-primary-color relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            {t("artisanDeniedThe.cancel_and_return")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArtisanDeniedThe;
