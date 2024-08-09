/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Send } from "../../icons/Send";
import { Star } from "../../icons/Star";
import { StarFill1 } from "../../icons/StarFill1";
import { LogoTheGoodDeals } from "../LogoTheGoodDeals";
import { Send1 } from "../../icons/Send1";

export const GuestEmailAskFor = ({ HEADERClassName }) => {
  return (
    <div className="flex flex-col w-[360px] h-[660px] items-start relative bg-primary-background">
      <div
        className={`flex flex-col w-[360px] h-16 items-start relative bg-primary-background border-b [border-bottom-style:solid] border-stroke ${HEADERClassName}`}
      >
        <div className="flex h-16 items-center justify-around gap-8 pl-5 pr-3 py-0 relative self-stretch w-full">
          <div className="inline-flex items-start relative flex-[0_0_auto]">
            <LogoTheGoodDeals
              className="!flex-[0_0_auto]"
              thegoodDealsClassName="!text-[28px]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[360px] items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]">
        <p className="relative self-stretch mt-[-1.00px] font-heading-6 font-[number:var(--heading-6-font-weight)] text-primary-color text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] [font-style:var(--heading-6-font-style)]">
          Dear guest, give us your opinion!
        </p>
        <div className="inline-flex items-center gap-[8.33px] relative flex-[0_0_auto]">
          <div className="inline-flex items-start gap-[6.25px] relative flex-[0_0_auto]">
            <StarFill1
              className="!relative !w-[25px] !h-[25px]"
              color="#F59E0B"
            />
            <StarFill1 className="!relative !w-[25px] !h-[25px]" />
            <StarFill1 className="!relative !w-[25px] !h-[25px]" />
            <StarFill1 className="!relative !w-[25px] !h-[25px]" />
            <Star className="!relative !w-[25px] !h-[25px]" color="#F59E0B" />
          </div>
        </div>
        <p className="relative self-stretch font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-primary-text-color text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] [font-style:var(--body-medium-regular-font-style)]">
          We hope you are satisfied with our service. <br />
          <br />
          To continue improving your experience, could you take a moment to
          leave us your review?
        </p>
        <div className="flex items-center justify-center gap-2.5 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-primary-color rounded-md">
          <Send1 className="!relative !w-5 !h-5" />
          <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-whitewhite text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            Give my opinion
          </button>
        </div>
      </div>
    </div>
  );
};
