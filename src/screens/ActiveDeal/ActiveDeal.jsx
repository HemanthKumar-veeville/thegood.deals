import React, { useEffect } from "react";
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
import {
  blogImage,
  Line571,
  Line59,
  Line60,
  Line63,
  Line69,
  Line_570_1,
  Line_571_1,
  FranceFlag,
} from "../../images";
import AppBar from "../../components/AppBar/AppBar";
import { useNavigate, useLocation } from "react-router-dom";
import { Badges } from "../../components/Badges";
import ProgressBarGreen from "../../components/ProgressBar/ProgressBarGreen";
import ProgressBarYellow from "../../components/ProgressBar/ProgressBarYellow";
import { getDealByDealId } from "../../redux/app/deals/dealSlice";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const ActiveDeal = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const dealState = useSelector((state) => state.deals);
  const { deal, status } = dealState;
  const dealData = (deal?.Deal?.length && deal?.Deal[0]) || {};
  const { t } = useTranslation();
  console.log({ deal });
  const queryParams = new URLSearchParams(location.search);
  const deal_id = queryParams.get("deal_id");
  const is_creator = queryParams.get("is_creator");

  const handleBack = () => {
    navigate("/");
  };

  const handleMyOrders = () => {
    navigate("/admin-orders?deal_id=" + deal_id + "&is_creator=" + is_creator);
  };

  const handleManageLovedOnes = () => {
    navigate("/admin-invitations");
  };

  const handleEditDeal = () => {
    alert(t("active_deal.edit_alert"));
  };

  const handleOrder = () => {
    navigate(
      "/admin-view-deal?deal_id=" +
        location?.state?.deal?.deal_id +
        "&deal_type=" +
        location?.state?.deal?.is_creator
    );
  };

  const statusBanner = {
    out_of_stock: { text: t("active_deal.out_of_stock"), color: "warning" },
    finished: { text: t("active_deal.finished"), color: "success" },
    in_stock: { text: t("active_deal.in_stock"), color: "success" },
    waiting: { text: t("active_deal.waiting"), color: "warning" },
    draft: { text: t("active_deal.draft"), color: "info" },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(getDealByDealId(location?.state?.deal?.deal_id));
  }, []);

  return (
    <div className="flex flex-col w-full items-start relative bg-primary-background mx-auto">
      <div className="flex flex-col w-full items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]">
        <div className="flex-col flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-center gap-3 pt-0 pb-5 px-0 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-stroke">
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
                  {t("active_deal.deal_ends_in")}
                  <br />
                </span>
                <span className="font-bold">{dealData?.deal_ends_in}</span>
              </p>
            </div>
          </div>
          <div onClick={handleOrder}>
            <img
              className="relative self-stretch w-full h-[150px] object-cover"
              alt="Blog image"
              src={blogImage}
            />
          </div>
          <div
            onClick={handleOrder}
            className="relative self-stretch [font-family:'Inter',Helvetica] font-semibold text-primary-color text-2xl tracking-[0] leading-[30px]"
          >
            {dealData?.deal_title}
          </div>
          {location?.state?.deal?.dealStatus === "out_of_stock" ? (
            <ProgressBarYellow
              percentage={dealData?.deal_progress_percentage}
            />
          ) : (
            <ProgressBarGreen percentage={dealData?.deal_progress_percentage} />
          )}
          <div className="flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
              <ClockAlt13 className="!relative !w-5 !h-5" color="#1B4F4A" />
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                {dealData?.deal_ends_in}
              </div>
            </div>
            <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
              <Users22 className="!relative !w-5 !h-5" color="#1B4F4A" />
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                {t("active_deal.participants_count", { count: 13 })}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <Map className="!relative !w-5 !h-5" />
            <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-color text-sm tracking-[0] leading-[22px] whitespace-nowrap">
              {dealData?.collection_location}
            </p>
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
          <div
            className="flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-whitewhite rounded-md shadow-shadow-1 cursor-pointer"
            onClick={handleManageLovedOnes}
          >
            <Users22 className="!relative !w-5 !h-5" color="#1B4F4A" />
            <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap">
              {t("active_deal.loved_ones_orders_label")}
            </button>
          </div>
          <div
            className="flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] rounded-md border border-solid border-primary-color cursor-pointer"
            onClick={handleEditDeal}
          >
            <Pencil1 className="!relative !w-5 !h-5" color="#1B4F4A" />
            <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap">
              {t("active_deal.edit_deal_button")}
            </button>
          </div>
        </div>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line69}
        />
        <Badges
          className="!left-[45px] !absolute !top-[170px]"
          color={statusBanner[location?.state?.deal?.dealStatus]?.color}
          divClassName="!tracking-[0] !text-xs ![font-style:unset] !font-medium ![font-family:'Inter',Helvetica] !leading-5"
          round="semi-round"
          state="duo-tone"
          text1={statusBanner[location?.state?.deal?.dealStatus]?.text}
          text2={
            location?.state?.deal?.dealStatus === "in_stock" ||
            location?.state?.deal?.dealStatus === "finished"
              ? statusBanner[location?.state?.deal?.dealStatus]?.text
              : location?.state?.deal?.dealStatus
          }
        />
        <Badges
          className="!left-[280px] !absolute !bg-blueblue-light-5 !top-[170px]"
          color="warning"
          divClassName="!text-blueblue !tracking-[0] !text-lg ![font-style:unset] !font-medium ![font-family:'Inter',Helvetica] !leading-5"
          round="semi-round"
          state="duo-tone"
          imageSrc={FranceFlag}
        />
        <div className="flex flex-col items-start gap-6 p-5 relative self-stretch w-full flex-[0_0_auto] bg-whitewhite rounded-[5px] shadow-shadow-1">
          <div className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]">
            <div className="inline-flex items-center gap-3.5 relative flex-[0_0_auto]">
              <div className="relative w-[50px] h-[50px]">
                <div className="relative h-[50px] rounded-[3px]">
                  <div className="absolute w-[50px] h-[50px] top-0 left-0 bg-secondary-color rounded-[3px] opacity-[0.08]" />
                  <Box43
                    className="!absolute !w-[26px] !h-[26px] !top-3 !left-3"
                    color="#13C296"
                  />
                </div>
              </div>
              <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-darkdark text-base tracking-[0] leading-6 whitespace-nowrap">
                  {t("active_deal.my_orders_label")}
                </div>
                <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                  {t("active_deal.loved_ones_orders_label")}
                </div>
              </div>
            </div>
            <div className="inline-flex items-end gap-[5px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-bold text-darkdark text-2xl leading-[30px] [font-family:'Inter',Helvetica] tracking-[0] whitespace-nowrap">
                {t("active_deal.orders_count", { count: 20 })}
              </div>
              <div className="relative w-[124px] h-[22px]">
                <div className="inline-flex items-center gap-1 relative">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-greengreen text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                    {t("active_deal.orders_available", { available: 20 })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-[230px] h-px mb-[-1.00px]">
            <div
              className={`bg-[url(${Line_570_1})] relative h-[7px] top-[-7px] bg-[100%_100%]`}
            >
              <img
                className="w-[9px] h-[7px] absolute top-0 left-0"
                alt="Line"
                src={Line571}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-6 p-5 relative self-stretch w-full flex-[0_0_auto] bg-whitewhite rounded-[5px] shadow-shadow-1">
          <div className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]">
            <div className="inline-flex items-center gap-3.5 relative flex-[0_0_auto]">
              <div className="relative w-[50px] h-[50px]">
                <div className="relative h-[50px] rounded-[3px]">
                  <div className="bg-purplepurple absolute w-[50px] h-[50px] top-0 left-0 rounded-[3px] opacity-[0.08]" />
                  <Coins
                    className="!absolute !w-[26px] !h-[26px] !top-3 !left-3"
                    color="#8646F4"
                  />
                </div>
              </div>
              <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-darkdark text-base tracking-[0] leading-6 whitespace-nowrap">
                  {t("active_deal.wallet_label")}
                </div>
                <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                  {t("active_deal.amount_collected_label")}
                </div>
              </div>
            </div>
            <div className="inline-flex items-end gap-[5px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-darkdark text-2xl tracking-[0] leading-[30px] whitespace-nowrap">
                €0
              </div>
              <div className="w-[67px] relative h-[22px]">
                <div className="inline-flex items-center gap-1 relative">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-purplepurple text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                    {t("active_deal.amount_target", { target: 1050 })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative w-[230px] h-px mb-[-1.00px]">
            <div
              className={`bg-[url(${Line_570_1})] relative h-[7px] top-[-7px] bg-[100%_100%]`}
            >
              <img
                className="w-[9px] h-[7px] absolute top-0 left-0"
                alt="Line"
                src={Line_571_1}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-start gap-6 p-5 relative self-stretch w-full flex-[0_0_auto] bg-whitewhite rounded-[5px] shadow-shadow-1">
          <div className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto] mr-[-11.00px]">
            <div className="inline-flex items-center gap-3.5 relative flex-[0_0_auto]">
              <div className="relative w-[50px] h-[50px]">
                <div className="relative h-[50px] rounded-[3px]">
                  <div className="bg-cyancyan absolute w-[50px] h-[50px] top-0 left-0 rounded-[3px] opacity-[0.08]" />
                  <Users22
                    className="!absolute !w-[26px] !h-[26px] !top-3 !left-3"
                    color="#01A9DB"
                  />
                </div>
              </div>
              <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-darkdark text-base tracking-[0] leading-6 whitespace-nowrap">
                  {t("active_deal.relatives_label")}
                </div>
                <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                  {t("active_deal.participants_label")}
                </div>
              </div>
            </div>
            <div className="inline-flex items-end gap-[5px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-darkdark text-2xl tracking-[0] leading-[30px] whitespace-nowrap">
                {t("active_deal.participants_count", { count: 0 })}
              </div>
              <div className="w-[91px] relative h-[22px]" />
            </div>
          </div>
        </div>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <div className="flex-col flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto] mr-[-24.00px]">
            <div className="relative w-[52px] h-[50px]">
              <div className="relative w-[50px] h-[50px] bg-primary-color rounded-[25px]">
                <div className="absolute top-3 left-5 font-medium text-whitewhite text-xl leading-[26px] [font-family:'Inter',Helvetica] tracking-[0] whitespace-nowrap">
                  1
                </div>
              </div>
            </div>
            <p className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap">
              {t("active_deal.step_1")}
            </p>
          </div>
          <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
            <div className="relative w-[52px] h-[50px]">
              <div className="relative w-[50px] h-[50px] bg-whitewhite rounded-[25px] border-2 border-solid border-primary-color">
                <div className="absolute top-2.5 left-[17px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-xl tracking-[0] leading-[26px] whitespace-nowrap">
                  2
                </div>
              </div>
            </div>
            <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap">
              {t("active_deal.step_2")}
            </div>
          </div>
          <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
            <div className="relative w-[52px] h-[50px]">
              <div className="relative w-[50px] h-[50px] bg-graygray rounded-[25px] border-2 border-solid border-stroke">
                <div className="absolute top-2.5 left-[17px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-xl tracking-[0] leading-[26px] whitespace-nowrap">
                  3
                </div>
              </div>
            </div>
            <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap">
              {t("active_deal.step_3")}
            </div>
          </div>
          <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
            <div className="relative w-[52px] h-[50px]">
              <div className="relative w-[50px] h-[50px] bg-graygray rounded-[25px] border-2 border-solid border-stroke">
                <div className="absolute top-2.5 left-[17px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-xl tracking-[0] leading-[26px] whitespace-nowrap">
                  4
                </div>
              </div>
            </div>
            <div className="inline-flex flex-col items-start justify-center relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap">
                {t("active_deal.step_4")}
              </div>
            </div>
          </div>
          <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
            <div className="relative w-[52px] h-[50px]">
              <div className="relative w-[50px] h-[50px] bg-graygray rounded-[25px] border-2 border-solid border-stroke">
                <div className="absolute top-2.5 left-[17px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-xl tracking-[0] leading-[26px] whitespace-nowrap">
                  5
                </div>
              </div>
            </div>
            <p className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6">
              {t("active_deal.step_5")}
            </p>
          </div>
        </div>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
      </div>
    </div>
  );
};

export default ActiveDeal;
