import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { StyleTypePrimary } from "../../components/StyleTypePrimaryUpdate01";
import { ArrowLeft } from "../../icons/ArrowLeft/ArrowLeft";
import { Box43 } from "../../icons/Box43";
import { Box44 } from "../../icons/Box44";
import { ClockAlt13 } from "../../icons/ClockAlt13";
import { Coins } from "../../icons/Coins";
import { Map } from "../../icons/Map";
import { Pencil1 } from "../../icons/Pencil1";
import { UserAlt2 } from "../../icons/UserAlt2";
import { Users22 } from "../../icons/Users22";
import { VerticalLine3 } from "../../icons/VerticalLine3/VerticalLine3";
import { blogImage, Line69, FranceFlag, Human } from "../../images";
import { useNavigate, useLocation } from "react-router-dom";
import { Badges } from "../../components/Badges";
import ProgressBarGreen from "../../components/ProgressBar/ProgressBarGreen";
import ProgressBarYellow from "../../components/ProgressBar/ProgressBarYellow";
import { fetchDealDetailsByDealId } from "../../redux/app/deals/dealSlice";
import { useDispatch, useSelector } from "react-redux";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import { RatingStar } from "../../components/RatingStar";
import { Line } from "../../components/Line/Line";
import { Send1 } from "../../icons/Send1";
import { getDealProgress } from "../../helpers/helperMethods";
import { UserAlt } from "../../icons/UserAlt";

const GuestDealView = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const dealState = useSelector((state) => state.deals);
  const { deal, status } = dealState;
  const dealData = deal?.Deal?.deal || {};
  const queryParams = new URLSearchParams(location.search);
  const deal_id = queryParams.get("deal_id");
  const is_creator = queryParams.get("is_creator");

  const handleBack = () => {
    navigate(-1);
  };

  const handleMyOrders = () => {
    navigate("/admin-orders?deal_id=" + deal_id + "&is_creator=" + is_creator);
  };

  const statusBanner = {
    soon_out_stock: { text: t("status.soon_out_stock"), color: "warning" },
    finished: { text: t("status.finished"), color: "success" },
    in_stock: { text: t("status.in_stock"), color: "success" },
    waiting: { text: t("status.waiting"), color: "warning" },
    draft: { text: t("status.draft"), color: "info" },
  };

  useEffect(() => {
    dispatch(fetchDealDetailsByDealId(deal_id));
  }, []);

  const handleOrder = () => {
    navigate(
      "/admin-view-deal?deal_id=" + deal_id + "&deal_type=" + is_creator
    );
  };

  return (
    <div className="flex flex-col w-full items-start relative bg-primary-background mx-auto">
      <div className="flex flex-col w-full items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]">
        <div className="flex-col flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-center gap-3 pt-0 pb-3 px-0 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-stroke">
            <div
              className="inline-flex items-center gap-2 relative flex-[0_0_auto] cursor-pointer"
              onClick={handleBack}
            >
              <ArrowLeft
                className="!relative !w-[18px] !h-[18px]"
                color="#637381"
              />
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-text-color text-base tracking-[0] leading-6 whitespace-nowrap">
                {t("common.back")}
              </div>
            </div>
          </div>
          <div className="flex items-start gap-[25px] px-[18px] py-[15px] relative self-stretch w-full flex-[0_0_auto] bg-greengreen-light-6 rounded-lg">
            <div className="flex items-center gap-3 relative flex-1 grow">
              <div className="relative w-5 h-5 bg-greengreen rounded-[10px]">
                <ClockAlt13
                  className="!absolute !w-3 !h-3 !top-1 !left-1"
                  color="white"
                />
              </div>
              <p className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#004434] text-sm tracking-[0] leading-5">
                <span className="[font-family:'Inter',Helvetica] font-normal text-[#004434] text-sm tracking-[0] leading-5">
                  {t("deal.ends_in")}
                  <br />
                </span>
                <span className="font-bold">
                  {t("deal.time_left", {
                    days: dealData?.ends_in || "-",
                    hours: 6,
                  })}
                </span>
              </p>
            </div>
          </div>
          <div onClick={handleOrder}>
            <ImageSlider
              pictures={dealData?.deal_images || [blogImage]}
              products={dealData?.products || []}
            />
          </div>
          <div
            onClick={handleOrder}
            className="relative self-stretch [font-family:'Inter',Helvetica] font-semibold text-primary-color text-2xl tracking-[0] leading-[30px]"
          >
            {dealData?.title || "-"}
          </div>
          {location?.state?.deal?.dealStatus === "soon_out_stock" ? (
            <ProgressBarYellow
              percentage={getDealProgress(dealData?.products || [])}
            />
          ) : (
            <ProgressBarGreen
              percentage={getDealProgress(dealData?.products || [])}
            />
          )}
          <div className="flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
              <ClockAlt13 className="!relative !w-5 !h-5" color="#1B4F4A" />
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                {t("deal.end_in", { days: dealData?.ends_in || "-" })}
              </div>
            </div>
            <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
              <Users22 className="!relative !w-5 !h-5" color="#1B4F4A" />
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                {t("deal.participants", {
                  count: dealData?.participants || "-",
                })}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <Map className="!relative !w-5 !h-5" />
            <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-color text-sm tracking-[0] leading-[22px]">
              {dealData?.collection_info?.location || "-"}
            </p>
          </div>
          <Line />
          <div className="inline-flex items-center gap-[15px] relative flex-[0_0_auto]">
            {dealData?.organizer?.organiser_image ? (
              <img
                className="relative w-[50px] h-[50px] object-cover rounded-md"
                alt="Organizer"
                src={dealData?.organizer?.organiser_image}
              />
            ) : (
              <UserAlt className="!relative !w-5 !h-5" />
            )}

            <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]">
                {t("artisanConfirmThe.organized_by")}
              </div>
              <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap">
                {dealData?.organizer?.name || "-"}
              </div>
              <div className="inline-flex h-5 items-center gap-2.5 relative">
                <RatingStar
                  className="!flex-[0_0_auto]"
                  rating={dealData?.organiser?.rating || "four-star"}
                  size="small"
                />
              </div>
            </div>
          </div>
          <div
            className="gap-2.5 bg-primary-color flex items-center justify-center px-6 py-3 relative self-stretch w-full flex-[0_0_auto] rounded-md cursor-pointer"
            onClick={handleOrder}
          >
            <Send1 className="!relative !w-5 !h-5" color="white" />

            <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-whitewhite text-base text-center tracking-[0] leading-6 whitespace-nowrap">
              {t("active_deal.place_order")}
            </button>
          </div>
          <div
            className="flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-whitewhite rounded-md shadow-shadow-1 cursor-pointer"
            onClick={handleMyOrders}
          >
            <Box44 className="!relative !w-5 !h-5" />
            <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap">
              {t("active_deal.my_orders_label")}
            </button>
          </div>
        </div>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line69}
        />
        <div className="flex-col flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
          {[
            {
              step: 1,
              bgColor: "bg-primary-color",
              textColor: "text-whitewhite",
            },
            {
              step: 2,
              bgColor:
                "bg-whitewhite border-2 border-solid border-primary-color",
              textColor: "text-primary-color",
            },
            {
              step: 3,
              bgColor: "bg-graygray border-2 border-solid border-stroke",
              textColor: "text-primary-color",
            },
            {
              step: 4,
              bgColor: "bg-graygray border-2 border-solid border-stroke",
              textColor: "text-primary-color",
            },
            {
              step: 5,
              bgColor: "bg-graygray border-2 border-solid border-stroke",
              textColor: "text-primary-color",
            },
          ].map(({ step, bgColor, textColor }) => (
            <div
              className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto] mr-[-24.00px]"
              key={step}
            >
              <div className="relative w-[52px] h-[50px]">
                <div
                  className={`relative w-[50px] h-[50px] rounded-[25px] ${bgColor}`}
                >
                  <div
                    className={`absolute top-2.5 left-[17px] [font-family:'Inter',Helvetica] font-medium ${textColor} text-xl tracking-[0] leading-[26px] whitespace-nowrap`}
                  >
                    {step}
                  </div>
                </div>
              </div>
              <p className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6">
                {t(`active_deal.step_${step}`)}
              </p>
            </div>
          ))}
        </div>
        <Line />
      </div>
    </div>
  );
};

export default GuestDealView;
