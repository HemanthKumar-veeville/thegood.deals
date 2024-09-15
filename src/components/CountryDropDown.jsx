import React from "react";
import { ChevronDown } from "../icons/ChevronDown";

export const Dropdown = () => {
  return (
    <div className="inline-flex flex-col h-12 items-start gap-[5px] relative">
      <div className="inline-flex items-center gap-2.5 px-[15px] py-3 relative flex-1 grow bg-whitewhite rounded-md border border-solid border-stroke">
        <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-primary-text-color text-base tracking-[0] leading-6 whitespace-nowrap">
            🇫🇷 +33
          </div>
          <ChevronDown className="!relative !w-4 !h-4" />
        </div>
      </div>
    </div>
  );
};
