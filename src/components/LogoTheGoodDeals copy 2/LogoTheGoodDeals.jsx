/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const LogoTheGoodDeals = ({ className, thegoodDealsClassName }) => {
  return (
    <div className={`inline-flex items-start relative ${className}`}>
      <div className="inline-flex items-start relative flex-[0_0_auto]">
        <p
          className={`relative w-fit mt-[-1.00px] [font-family:'Source_Serif_Pro',Helvetica] font-bold text-transparent text-4xl text-center tracking-[0] leading-[normal] whitespace-nowrap ${thegoodDealsClassName}`}
        >
          <span className="text-[#1b4f4a]">thegood</span>
          <span className="text-[#ffb130]">.</span>
          <span className="text-[#fc661a]">deals</span>
        </p>
      </div>
    </div>
  );
};
