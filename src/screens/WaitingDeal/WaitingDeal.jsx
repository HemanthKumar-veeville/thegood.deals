import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ArrowLeft } from "../../icons/ArrowLeft/ArrowLeft";
import { Map } from "../../icons/Map";
import { Pencil1 } from "../../icons/Pencil1";
import { blogImage, Line63, Line69, FranceFlag } from "../../images";
import { WaitingBanner } from "../../components/Banners/WaitingBanner";
import { useNavigate, useLocation } from "react-router-dom";
import { Badges } from "../../components/Badges";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getDealByDealId } from "../../redux/app/deals/dealSlice";
import ImageSlider from "../../components/ImageSlider/ImageSlider";

const WaitingDeal = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { state } = useLocation();

  const dispatch = useDispatch();
  const dealState = useSelector((state) => state.deals);
  const { deal, status } = dealState;
  const dealData = (deal?.Deal?.length && deal?.Deal[0]) || {};
  console.log("dealData", dealData);
  const queryParams = new URLSearchParams(location.search);
  const deal_id = queryParams.get("deal_id");
  const is_creator = queryParams.get("is_creator");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBack = () => {
    navigate("/");
  };

  const handleEditDeal = () => {
    alert(t("waiting_deal.alert_editing"));
  };

  useEffect(() => {
    dispatch(getDealByDealId(deal_id));
  }, []);

  return (
    <div className="flex flex-col w-full items-start relative bg-primary-background mx-auto">
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

        {/* Waiting Banner */}
        <WaitingBanner className="relative w-full bg-orange-100 text-orange-700 rounded-md p-3">
          {t(
            "waiting_deal.banner_message",
            "Waiting for confirmation of the deal from the artisan"
          )}
        </WaitingBanner>

        {/* Deal Image */}
        <ImageSlider pictures={dealData?.image_url || [blogImage]} />

        {/* Title */}
        <div className="relative self-stretch font-semibold text-primary-color text-2xl leading-[30px]">
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

        <img
          className="relative self-stretch w-full h-px object-cover"
          alt={t("waiting_deal.line_alt", "Line separator")}
          src={Line69}
        />

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

        <img
          className="relative self-stretch w-full h-px object-cover"
          alt={t("waiting_deal.line_alt", "Line separator")}
          src={Line63}
        />
      </div>
    </div>
  );
};

export default WaitingDeal;
