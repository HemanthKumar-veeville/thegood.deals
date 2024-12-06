import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ArrowLeft } from "../../icons/ArrowLeft/ArrowLeft";
import { Map } from "../../icons/Map";
import { Pencil1 } from "../../icons/Pencil1";
import { blogImage, Line69 } from "../../images";
import { WaitingBanner } from "../../components/Banners/WaitingBanner";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDealByDealId } from "../../redux/app/deals/dealSlice";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import { ShowCustomErrorModal } from "../../components/ErrorAlert/ErrorAlert";
import { Line } from "../../components/Line/Line";
import CustomLoader from "../../components/CustomLoader/CustomLoader";

const WaitingDeal = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { state } = useLocation();

  const dispatch = useDispatch();
  const dealState = useSelector((state) => state.deals);
  const { deal, status, error } = dealState;
  const dealData = (deal?.Deal?.length && deal?.Deal[0]) || {};
  const queryParams = new URLSearchParams(location.search);
  const deal_id = queryParams.get("deal_id");
  const [showErrorModal, setShowErrorModal] = useState(false);

  const handleBack = () => {
    navigate("/");
  };

  const handleEditDeal = () => {
    setShowErrorModal(true); // Show the modal when edit is clicked
  };

  useEffect(() => {
    dispatch(getDealByDealId(deal_id));
  }, [deal_id, dispatch]);

  return (
    <div className="flex flex-col w-full items-start relative bg-primary-background mx-auto">
      {status === "loading" && <CustomLoader />}
      {status === "failed" && (
        <ShowCustomErrorModal
          message={error?.detail || t("active_deal.error")}
          buttonText={t("active_deal.try_again")}
          shouldCloseOnOverlayClick={false}
        />
      )}
      {status === "succeeded" && (
        <div className="flex flex-col w-full items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]">
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
          <WaitingBanner className="relative w-full bg-orange-100 text-orange-700 rounded-md p-3">
            {t(
              "waiting_deal.banner_message",
              "Waiting for confirmation of the deal from the artisan"
            )}
          </WaitingBanner>

          {/* Deal Image */}
          <ImageSlider
            pictures={dealData?.deal_images || [blogImage]}
            products={dealData?.products || []}
          />

          {/* Title */}
          <div className="relative self-stretch font-semibold text-primary-color text-2xl leading-[30px] [font-family:'Inter-SemiBold',Helvetica] tracking-[0]">
            {dealData?.deal_title}
          </div>

          {/* Location */}
          <div className="flex items-center gap-2.5 relative self-stretch w-full">
            <Map className="!relative !w-5 !h-5" />
            <p className="relative w-fit font-normal text-primary-color text-sm leading-[22px] whitespace-nowrap">
              {dealData?.collection_location}
            </p>
          </div>

          {/* Edit Deal Button */}
          <div
            className="flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full rounded-md border border-solid border-primary-color cursor-pointer"
            onClick={handleEditDeal}
          >
            <Pencil1 className="!relative !w-5 !h-5" color="#1B4F4A" />
            <button className="all-[unset] w-fit font-medium text-primary-color text-base text-center leading-6 whitespace-nowrap">
              {t("waiting_deal.edit_button", "Edit the deal")}
            </button>
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
      )}
    </div>
  );
};

export default WaitingDeal;
