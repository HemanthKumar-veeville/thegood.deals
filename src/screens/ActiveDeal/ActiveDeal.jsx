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
import { EuroCoin } from "../../icons/EuroCoin";
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
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import { Send2 } from "../../icons/Send2";
import { DangerAlert } from "../../components/DangerAlert";

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
    navigate("/admin-invitations?deal_id=" + deal_id);
  };

  const handleEditDeal = () => {
    navigate("/create-deal?deal_id=" + deal_id);
  };

  const handleOrder = () => {
    navigate(
      "/admin-view-deal?deal_id=" + deal_id + "&deal_type=" + is_creator
    );
  };

  const statusBanner = {
    soon_out_stock: { text: t("active_deal.soon_out_stock"), color: "warning" },
    finished: { text: t("active_deal.finished"), color: "success" },
    in_stock: { text: t("active_deal.in_stock"), color: "success" },
    waiting: { text: t("active_deal.waiting"), color: "warning" },
    draft: { text: t("active_deal.draft"), color: "info" },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    dispatch(getDealByDealId(deal_id));
  }, []);
  console.log({ dealData });

  const handleInviteLovedOnes = () => {
    navigate(
      `/invite-loved-ones?deal_id=${deal_id}` + "&is_creator=" + is_creator
    );
  };

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
          {dealData?.deal_ends_in === 0 && (
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
                  <span className="font-bold">
                    {`${dealData?.deal_ends_in} days and 6 hours`}
                  </span>
                </p>
              </div>
            </div>
          )}
          {dealData?.deal_ends_in > 0 && (
            <DangerAlert
              alertMessage="The payment of one of the participants could not be made."
              participants={[
                { name: "Jean Dupont", status: "failed" },
                { name: "Ben Affleck", status: "failed" },
                { name: "Thomas Bessont", status: "success" },
                { name: "Miracle Saris", status: "success" },
                { name: "Dulce Carder", status: "success" },
              ]}
            />
          )}
          <div onClick={handleOrder}>
            <ImageSlider pictures={dealData?.deal_images || [blogImage]} />
          </div>
          <div
            onClick={handleOrder}
            className="relative self-stretch [font-family:'Inter',Helvetica] font-semibold text-primary-color text-2xl tracking-[0] leading-[30px]"
          >
            {dealData?.deal_title}
          </div>
          {dealData?.deal_progress_percentage !== 0 &&
            (location?.state?.deal?.dealStatus === "soon_out_stock" ? (
              <ProgressBarYellow
                percentage={dealData?.deal_progress_percentage}
              />
            ) : (
              <ProgressBarGreen
                percentage={dealData?.deal_progress_percentage}
              />
            ))}
          <div className="flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
              <ClockAlt13 className="!relative !w-5 !h-5" color="#1B4F4A" />
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                {`ends in ${dealData?.deal_ends_in} days`}
              </div>
            </div>
            <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
              <Users22 className="!relative !w-5 !h-5" color="#1B4F4A" />
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                {t("active_deal.participants_count", {
                  count: dealData?.participants_count,
                })}
              </div>
            </div>
          </div>
          {/* Location */}
          <div className="flex items-center gap-2.5 w-full">
            <Map className="w-5 h-5" />
            <p className="w-full text-sm text-primary-color leading-[22px] break-words">
              {dealData?.collection_location || "No location available"}
            </p>
          </div>
          <div
            className="flex items-center justify-center gap-2.5 px-6 py-3 relative self-stretch w-full bg-primary-color rounded-md hover:bg-primary-dark-color cursor-pointer"
            onClick={() => handleNavigation("/create-deal")}
          >
            <EuroCoin className="!relative !w-5 !h-5" />
            <button className="box-border font-medium text-white text-base text-center">
              Collect payment
            </button>
          </div>
          <img
            className="relative self-stretch w-full h-px object-cover"
            alt="Line"
            src={Line69}
          />
          <div
            className="flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-whitewhite rounded-md shadow-shadow-1 cursor-pointer"
            onClick={handleInviteLovedOnes}
          >
            <Send2 className="!relative !w-5 !h-5" />
            <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap">
              {t("invitations.invite_loved_ones")}
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
          <div
            className="flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-whitewhite rounded-md shadow-shadow-1 cursor-pointer"
            onClick={handleManageLovedOnes}
          >
            <Users22 className="!relative !w-5 !h-5" color="#1B4F4A" />
            <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap">
              Managing my friends
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
        <div className="flex flex-col items-start p-5 relative self-stretch w-full flex-[0_0_auto] bg-whitewhite rounded-[5px] shadow-shadow-1">
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
              <div className="relative w-fit mt-[-1.00px] font-bold text-darkdark text-2xl leading-[22px] [font-family:'Inter',Helvetica] tracking-[0] whitespace-nowrap">
                {t("active_deal.orders_count", {
                  count: dealData?.orders_count,
                })}
              </div>
              <div className="relative w-[124px] h-[22px]">
                <div className="inline-flex items-center gap-1 relative">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-greengreen text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                    {t("active_deal.orders_available", {
                      available: dealData?.participants_count,
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Bar with dynamic width based on orders count */}
          <div className="relative w-full h-[7px] mt-4 bg-gray-300 rounded-full">
            <div
              className="absolute h-[7px] bg-greengreen rounded-full"
              style={{ width: `${(0 / 20) * 100}%` }}
            ></div>
          </div>
        </div>
        <div className="flex flex-col items-start p-5 relative self-stretch w-full flex-[0_0_auto] bg-whitewhite rounded-[5px] shadow-shadow-1">
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
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-darkdark text-2xl tracking-[0] leading-[22px] whitespace-nowrap">
                {`€${dealData?.current_amount || 0}`}
              </div>
              <div className="w-[67px] relative h-[22px]">
                <div className="inline-flex items-center gap-1 relative">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-purplepurple text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                    {t("active_deal.amount_target", {
                      target: dealData?.orders_count * dealData?.deal_price,
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Progress Bar with dynamic width based on amount collected */}
          <div className="relative w-full h-[7px] mt-4 bg-gray-300 rounded-full">
            <div
              className="absolute h-[7px] bg-purplepurple rounded-full"
              style={{
                width: `${
                  (dealData?.current_amount ||
                    0 / (dealData?.orders_count * dealData?.deal_price)) * 100
                }%`,
              }}
            ></div>
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
                {t("active_deal.participants_count", {
                  count: dealData?.participants_count,
                })}
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
