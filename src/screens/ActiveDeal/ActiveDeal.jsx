import React from "react";
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
} from "../../images";

export const ActiveDeal = () => {
  return (
    <div className="flex flex-col w-[360px] items-start relative bg-primary-background mx-auto">
      <header className="flex flex-col w-[360px] h-16 items-start relative bg-primary-background [border-top-style:none] [border-right-style:none] border-b [border-bottom-style:solid] [border-left-style:none] border-stroke">
        <div className="flex h-16 items-center justify-between pl-5 pr-3 py-0 relative self-stretch w-full">
          <div className="flex w-12 h-12 items-center justify-center gap-2.5 relative">
            <VerticalLine3 className="!relative !w-6 !h-6" color="#1B4F4A" />
          </div>
          <div className="inline-flex items-start relative flex-[0_0_auto]">
            <div className="inline-flex items-start relative flex-[0_0_auto]">
              <div className="inline-flex items-start relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Source_Serif_Pro',Helvetica] font-bold text-[#1b4f4a] text-[28px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                  thegood.deals
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-12 h-12 items-center justify-center gap-2.5 relative">
            <UserAlt2 className="!relative !w-6 !h-6" color="#1B4F4A" />
          </div>
        </div>
      </header>
      <div className="flex flex-col w-[360px] items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]">
        <div className="flex-col flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-center gap-3 pt-0 pb-5 px-0 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-stroke">
            <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
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
          <StyleTypePrimary
            className="!self-stretch !w-full !relative"
            divClassName="!tracking-[0] !text-xs ![font-style:unset] !font-medium ![font-family:'Inter',Helvetica] !left-[27px] !leading-5"
            groupClassName="!w-[290px]"
            line={Line60}
            lineClassName="!w-40"
            overlapClassName="!w-[290px]"
            overlapGroupClassName={`bg-[url(${Line59})]`}
            text="50% sold"
          />
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
          <div className="flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-whitewhite rounded-md shadow-shadow-1">
            <Box44 className="!relative !w-5 !h-5" />
            <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap">
              My orders
            </button>
          </div>
          <div className="flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-whitewhite rounded-md shadow-shadow-1">
            <Users22 className="!relative !w-5 !h-5" color="#1B4F4A" />
            <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap">
              Managing my loved ones
            </button>
          </div>
          <div className="flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] rounded-md border border-solid border-primary-color">
            <Pencil1 className="!relative !w-5 !h-5" color="#1B4F4A" />
            <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap">
              Edit the deal
            </button>
          </div>
        </div>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line69}
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
                  My orders
                </div>
                <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                  Your loved ones order
                </div>
              </div>
            </div>
            <div className="inline-flex items-end gap-[5px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-bold text-darkdark text-2xl leading-[30px] [font-family:'Inter',Helvetica] tracking-[0] whitespace-nowrap">
                20
              </div>
              <div className="relative w-[124px] h-[22px]">
                <div className="inline-flex items-center gap-1 relative">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-greengreen text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                    out of 20 available
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
                  My wallet
                </div>
                <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                  Deal amount collected
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
                    on €1,050
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
                  My relatives
                </div>
                <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                  Guests on the deal
                </div>
              </div>
            </div>
            <div className="inline-flex items-end gap-[5px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-darkdark text-2xl tracking-[0] leading-[30px] whitespace-nowrap">
                0 participants
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
              The craftsman accepted the deal
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
              Invite your loved ones
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
              Current orders
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
                Receipt of order
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
              Organize the collection
              <br /> with your loved ones
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
