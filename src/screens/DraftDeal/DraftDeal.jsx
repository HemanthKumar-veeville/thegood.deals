import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ArrowLeft } from "../../icons/ArrowLeft/ArrowLeft";
import { Pencil1 } from "../../icons/Pencil1";
import { blogImage, Line63, Line69, FranceFlag } from "../../images";
import { DraftBanner } from "../../components/Banners/DraftBanner";
import { Badges } from "../../components/Badges";
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getDealByDealId } from "../../redux/app/deals/dealSlice";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import { Line } from "../../components/Line/Line";

const DraftDeal = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { state } = useLocation();

  const dispatch = useDispatch();
  const dealState = useSelector((state) => state.deals);
  const { deal, status } = dealState;
  const dealData = (deal?.Deal?.length && deal?.Deal[0]) || {};
  const queryParams = new URLSearchParams(location.search);
  const deal_id = queryParams.get("deal_id");
  const is_creator = queryParams.get("is_creator");
  const handleEditDeal = () => {
    navigate("/update-deal?deal_id=" + deal_id);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(getDealByDealId(deal_id));
  }, []);

  return (
    <div className="flex flex-col w-full items-start relative bg-primary-background mx-auto">
      <div className="flex flex-col w-full items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]">
        {/* Back Button */}
        <div className="flex items-center gap-3 px-0 relative self-stretch w-full flex-[0_0_auto]">
          <div
            className="inline-flex items-center gap-2 relative flex-[0_0_auto] cursor-pointer"
            onClick={handleBack}
          >
            <ArrowLeft
              className="!relative !w-[18px] !h-[18px]"
              color="#637381"
            />
            <div className="relative w-fit font-medium text-primary-text-color text-base leading-6 whitespace-nowrap">
              {t("draft_deal.back_button", "Back")}
            </div>
          </div>
        </div>
        <Line />
        {/* Banner */}
        <DraftBanner className="relative w-full bg-blue-100 text-blue-800 rounded-md p-3" />

        <ImageSlider pictures={dealData?.deal_images || [blogImage]} />

        {/* Title */}
        <div className="relative self-stretch font-semibold text-primary-color text-2xl leading-[30px] [font-family:'Inter-SemiBold',Helvetica] tracking-[0]">
          {dealData?.deal_title}
        </div>

        {/* Edit Button */}
        <div
          className="flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full rounded-md border border-solid border-primary-color"
          onClick={handleEditDeal}
        >
          <Pencil1 className="!relative !w-5 !h-5" color="#1B4F4A" />
          <button className="all-[unset] w-fit font-medium text-primary-color text-base text-center leading-6 whitespace-nowrap">
            {t("draft_deal.edit_button", "Edit the deal")}
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
    </div>
  );
};

export default DraftDeal;
