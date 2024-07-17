import React from "react";
import { ArrowRight } from "../../icons/ArrowRight";
import { CirclePlus55 } from "../../icons/CirclePlus55";
import { Envelope } from "../../icons/Envelope";
import { UserAlt2 } from "../../icons/UserAlt2";
import { VerticalLine2 } from "../../icons/VerticalLine2";
import { Line63 } from "../../images";

export const InformToCraftsMan = () => {
  return (
    <div className="flex flex-col w-[360px] h-[640px] items-start relative bg-primary-background mx-auto">
      <header className="flex flex-col w-[360px] h-16 items-start relative bg-primary-background [border-top-style:none] [border-right-style:none] border-b [border-bottom-style:solid] [border-left-style:none] border-stroke">
        <div className="flex h-16 items-center justify-between pl-5 pr-3 py-0 relative self-stretch w-full">
          <div className="flex w-12 h-12 items-center justify-center gap-2.5 relative">
            <VerticalLine2 className="!relative !w-6 !h-6" color="#1B4F4A" />
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
      <div className="flex-col w-[360px] items-start gap-[15px] px-[35px] py-[15px] flex-[0_0_auto] flex relative">
        <p className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-primary-color text-2xl tracking-[0] leading-[30px]">
          Confirm the good deal with the craftsman
        </p>
        <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-base tracking-[0] leading-6">
          We will send an email to the craftsman to confirm the deal with him.
        </p>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <p className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap">
          Indicate the email of the craftsman
        </p>
        <div className="flex h-[46px] items-center gap-2.5 pl-5 pr-4 py-3 relative self-stretch w-full bg-whitewhite rounded-md border border-solid border-stroke">
          <Envelope className="!relative !w-4 !h-4" color="#6B7280" />
          <div className="items-center gap-[116px] flex-1 grow mt-[-1.00px] mb-[-1.00px] flex relative">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-darkdark-6 text-base tracking-[0] leading-6 whitespace-nowrap">
              ex. contact@gmail.com
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2.5 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-primary-color rounded-md">
          <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-whitewhite text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            Send to craftsman
          </button>
          <ArrowRight className="!relative !w-5 !h-5" color="white" />
        </div>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <div className="flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] rounded-md border border-solid border-primary-color">
          <CirclePlus55 className="!relative !w-5 !h-5" color="#1B4F4A" />
          <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            Finish later
          </button>
        </div>
      </div>
    </div>
  );
};
