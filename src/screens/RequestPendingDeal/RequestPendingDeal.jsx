import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ArrowLeft } from "../../icons/ArrowLeft/ArrowLeft";
import { Map } from "../../icons/Map";
import { WaitingBanner } from "../../components/Banners/WaitingBanner";
import { useNavigate, useLocation } from "react-router-dom";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import { ShowCustomErrorModal } from "../../components/ErrorAlert/ErrorAlert";
import { Line } from "../../components/Line/Line";

const RequestPendingDeal = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [showErrorModal, setShowErrorModal] = useState(false);
  const deal = location?.state?.deal;
  console.log({ deal });

  const handleBack = () => {
    navigate("/");
  };

  const handleEditDeal = () => {
    setShowErrorModal(true); // Show the modal when edit is clicked
  };

  return (
    <div className="flex flex-col w-full items-start relative bg-primary-background mx-auto">
      <div className="flex flex-col w-full items-start gap-[15px] px-[15px] py-[15px] relative flex-[0_0_auto]">
        {/* Back Button */}
        <div className="flex items-center gap-3 pb-4 px-0 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-stroke">
          <div
            className="inline-flex items-center gap-2 relative flex-[0_0_auto] cursor-pointer"
            onClick={handleBack}
          >
            <ArrowLeft
              className="!relative !w-[18px] !h-[18px]"
              color="#637381"
            />
            <div className="relative w-fit font-medium text-primary-text-color text-base leading-6 whitespace-nowrap">
              {t("waiting_deal.back_button", "Back")}
            </div>
          </div>
        </div>

        {showErrorModal && (
          <ShowCustomErrorModal
            message={t("waiting_deal.error_message")}
            buttonText={t("waiting_deal.got_it")}
            onClose={() => setShowErrorModal(false)} // Reset modal state on close
          />
        )}

        {/* Waiting Banner */}
        <WaitingBanner
          className="relative w-full bg-orange-100 text-orange-700 rounded-md p-3"
          text={t("access.in_process_desc")}
        >
          {t("access.in_process_desc")}
        </WaitingBanner>

        {/* Deal Image */}
        <ImageSlider
          pictures={deal?.images || []}
          products={deal?.products || []}
        />

        {/* Title */}
        <div className="relative self-stretch font-semibold text-primary-color text-2xl leading-[30px] [font-family:'Inter-SemiBold',Helvetica] tracking-[0]">
          {deal?.deal_title}
        </div>

        {/* Location */}
        <div className="flex items-center gap-2.5 relative self-stretch w-full">
          <Map className="!relative !w-5 !h-5" />
          <p className="relative w-fit font-normal text-primary-color text-sm leading-[22px] whitespace-nowrap">
            {deal?.deal_origin}
          </p>
        </div>

        <Line />
        {/* Steps List */}
        <div className="flex-col flex items-start gap-[15px] relative self-stretch w-full">
          {[
            t("draft_deal.step_1", "The artisan accepted the deal"),
            t("draft_deal.step_2", "The good deal in progress"),
            t("draft_deal.step_3", "Goal achieved! 🎉"),
            t("draft_deal.step_4", "Order sent to the artisan"),
            t(
              "draft_deal.step_5",
              "Organizer coordinates with artisan for delivery"
            ),
          ].map((step, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-2.5 relative"
            >
              <div className="relative w-[52px] h-[50px]">
                <div className="relative w-[50px] h-[50px] bg-graygray rounded-[25px] border-2 border-solid border-stroke">
                  <div className="absolute top-2.5 left-[17px] font-medium text-primary-color text-xl leading-[26px]">
                    {index + 1}
                  </div>
                </div>
              </div>
              <div className="relative w-fit font-medium text-primary-color text-base leading-6">
                {step}
              </div>
            </div>
          ))}
        </div>
        <Line />
      </div>
    </div>
  );
};

export default RequestPendingDeal;
