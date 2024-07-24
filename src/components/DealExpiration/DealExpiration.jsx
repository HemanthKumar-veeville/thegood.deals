// DealExpiration.js
import React from "react";

const DealExpiration = () => {
  return (
    <>
      <div className="flex w-[250px] items-start gap-2.5 relative flex-[0_0_auto]">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-lg tracking-[0] leading-[26px] whitespace-nowrap">
          Deal expiration date
        </div>
      </div>
      <div className="flex w-[250px] items-start gap-2.5 relative flex-[0_0_auto]">
        <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap">
          Maximum 30 days from this day
        </p>
      </div>
    </>
  );
};

export default DealExpiration;
