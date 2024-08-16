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

const GuestDealView = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleBack = () => {
    navigate("/account", { state: { activeTab: "guests" } });
  };

  const handleMyOrders = () => {
    navigate("/admin-orders");
  };

  const statusBanner = {
    out_of_stock: { text: "Soon to be out of stock", color: "warning" },
    finished: { text: "Finished", color: "success" },
    in_stock: { text: "In stock", color: "success" },
    waiting: { text: "Waiting for the artisian", color: "warning" },
    draft: { text: "Draft", color: "info" },
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col w-screen items-start relative bg-primary-background mx-auto">
      <div className="flex flex-col w-screen items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]">
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
                Back
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
                  Deal ends in
                  <br />
                </span>
                <span className="font-bold">10 days and 6 hours.</span>
              </p>
            </div>
          </div>
          <img
            className="relative self-stretch w-full h-[150px] object-cover"
            alt="Blog image"
            src={blogImage}
          />
          <div className="relative self-stretch [font-family:'Inter',Helvetica] font-semibold text-primary-color text-2xl tracking-[0] leading-[30px]">
            Wine cratesDomaine de Cigaluse
          </div>
          {location?.state?.deal?.dealStatus === "out_of_stock" ? (
            <ProgressBarYellow percentage={80} />
          ) : (
            <ProgressBarGreen percentage={90} />
          )}
          <div className="flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
              <ClockAlt13 className="!relative !w-5 !h-5" color="#1B4F4A" />
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                end in 10 days
              </div>
            </div>
            <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
              <Users22 className="!relative !w-5 !h-5" color="#1B4F4A" />
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                13 participants
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <Map className="!relative !w-5 !h-5" />
            <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-color text-sm tracking-[0] leading-[22px] whitespace-nowrap">
              Domaine de Cigalus 11200 Bizanet
            </p>
          </div>
          <img
            className="relative self-stretch w-full h-[2px] object-cover"
            alt="Line"
            src={Line69}
          />
          <div
            className="flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-whitewhite rounded-md shadow-shadow-1 cursor-pointer"
            onClick={handleMyOrders}
          >
            <Box44 className="!relative !w-5 !h-5" />
            <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap">
              My orders
            </button>
          </div>
          <Badges
            className="!left-[15px] !absolute !top-[155px]"
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
            className="!left-60 !absolute !bg-blueblue-light-5 !top-[155px]"
            color="warning"
            divClassName="!text-blueblue !tracking-[0] !text-lg ![font-style:unset] !font-medium ![font-family:'Inter',Helvetica] !leading-5"
            round="semi-round"
            state="duo-tone"
            imageSrc={FranceFlag}
          />
        </div>
        <img
          className="relative self-stretch w-full h-[2px] object-cover"
          alt="Line"
          src={Line69}
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
              The artisian accepted the deal
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
              Current orders
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
            <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap">
              Goal achieved ! . 🎉
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
                Order preparation
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
            <div className="inline-flex flex-col items-start justify-center relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap">
                Shipping
              </div>
            </div>
          </div>
          <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
            <div className="relative w-[52px] h-[50px]">
              <div className="relative w-[50px] h-[50px] bg-graygray rounded-[25px] border-2 border-solid border-stroke">
                <div className="absolute top-2.5 left-[17px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-xl tracking-[0] leading-[26px] whitespace-nowrap">
                  6
                </div>
              </div>
            </div>
            <div className="inline-flex flex-col items-start justify-center relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap">
                Delivery and Closing of the deal
              </div>
            </div>
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

export default GuestDealView;
