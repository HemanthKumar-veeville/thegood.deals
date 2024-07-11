import React from "react";
import { UserAlt4 } from "../../icons/UserAlt4/UserAlt4";
import { VerticalLine3 } from "../../icons/VerticalLine3/VerticalLine3";
import { useNavigate } from "react-router-dom";

function AppBar() {
  const navigate = useNavigate();

  return (
    <header className="flex flex-col w-[360px] h-16 items-start relative bg-primary-background [border-top-style:none] [border-right-style:none] border-b [border-bottom-style:solid] [border-left-style:none] border-stroke">
      <div className="flex h-16 items-center justify-between pl-5 pr-3 py-0 relative self-stretch w-full">
        <div className="flex w-12 h-12 items-center justify-center gap-2.5 relative hover:bg-gray-200 rounded-full cursor-pointer">
          <VerticalLine3 className="!relative !w-6 !h-6" />
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
        <div
          className="flex w-12 h-12 items-center justify-center gap-2.5 relative hover:bg-gray-200 rounded-full cursor-pointer"
          onClick={() => navigate("/auth")}
        >
          <UserAlt4 className="!relative !w-6 !h-6" />
        </div>
      </div>
    </header>
  );
}

export default AppBar;
