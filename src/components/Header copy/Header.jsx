/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { ChevronDown } from "../../icons/ChevronDown";
import { UserAlt2 } from "../../icons/UserAlt2";
import { VerticalLine1 } from "../../icons/VerticalLine1";
import { LogoTheGoodDeals } from "../LogoTheGoodDeals";

export const Header = ({ HEADER, className, icon = <VerticalLine1 className="!relative !w-6 !h-6" /> }) => {
  return (
    <div
      className={`w-[360px] flex flex-col items-start bg-primary-background relative ${
        HEADER === "CLOSE" ? "[border-bottom-style:solid]" : ""
      } ${HEADER === "CLOSE" ? "border-stroke" : ""} ${HEADER === "CLOSE" ? "h-16" : "h-[812px]"} ${
        HEADER === "CLOSE" ? "border-b" : ""
      } ${className}`}
    >
      {HEADER === "OPEN" && (
        <>
          <div className="flex h-16 items-center justify-between pl-5 pr-3 py-0 relative self-stretch w-full border-b [border-bottom-style:solid] border-stroke">
            <div className="flex w-12 h-12 items-center justify-center gap-2.5 relative">
              <ChevronDown className="!relative !w-6 !h-6" />
            </div>
            <div className="inline-flex items-start relative flex-[0_0_auto]">
              <LogoTheGoodDeals className="!flex-[0_0_auto]" thegoodDealsClassName="!text-[28px]" />
            </div>
            <div className="flex w-12 h-12 items-center justify-center gap-2.5 relative">
              <UserAlt2 className="!relative !w-6 !h-6" color="#1B4F4A" />
            </div>
          </div>
          <div className="flex flex-col w-[360px] h-[748px] items-start gap-2.5 pt-4 pb-40 px-5 relative">
            <div className="items-center justify-center gap-6 flex flex-col relative self-stretch w-full flex-[0_0_auto]">
              <div className="items-start flex flex-col relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-start gap-2 px-0 py-3 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative flex-1 mt-[-1.00px] font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[#2a4e4a] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                    À propos
                  </div>
                </div>
                <div className="flex items-start gap-2 px-0 py-3 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative flex-1 mt-[-1.00px] font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[#2a4e4a] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                    Comment ça marche ?
                  </div>
                </div>
                <div className="flex items-start gap-2 px-0 py-3 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative flex-1 mt-[-1.00px] font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[#2a4e4a] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                    Commande groupée
                  </div>
                </div>
                <div className="flex items-start gap-2 px-0 py-3 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="flex items-center gap-1 relative flex-1 grow">
                    <div className="relative flex-1 mt-[-1.00px] font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[#2a4e4a] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                      Assistance
                    </div>
                    <img className="relative w-6 h-6" alt="Chevron down" src="/img/chevron-down-1.svg" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-start gap-4 relative self-stretch w-full flex-[0_0_auto]">
                <button className="all-[unset] box-border flex items-center justify-center gap-2 px-5 py-2 relative self-stretch w-full flex-[0_0_auto] mt-[-1.00px] ml-[-1.00px] mr-[-1.00px] bg-primary-color rounded-[100px] border border-solid border-primary-color">
                  <button className="all-[unset] box-border relative w-fit [font-family:'Rethink_Sans',Helvetica] font-normal text-white text-base tracking-[0] leading-6 whitespace-nowrap">
                    Créer un good deal
                  </button>
                </button>
                <button className="all-[unset] box-border flex items-center justify-center gap-2 px-5 py-2 relative self-stretch w-full flex-[0_0_auto] ml-[-1.00px] mr-[-1.00px] rounded-[100px] border border-solid border-primary-color">
                  <button className="all-[unset] box-border relative w-fit [font-family:'Rethink_Sans',Helvetica] font-normal text-[#2a4e4a] text-base tracking-[0] leading-6 whitespace-nowrap">
                    Mon compte
                  </button>
                </button>
                <button className="all-[unset] box-border flex items-center justify-center gap-2 px-5 py-2 relative self-stretch w-full flex-[0_0_auto] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] rounded-[100px] border border-solid border-primary-color">
                  <button className="all-[unset] box-border relative w-fit [font-family:'Rethink_Sans',Helvetica] font-normal text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap">
                    Français 🇫🇷
                  </button>
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      {HEADER === "CLOSE" && (
        <div className="flex h-16 items-center justify-between pl-5 pr-3 py-0 relative self-stretch w-full">
          <div className="flex w-12 h-12 items-center justify-center gap-2.5 relative">{icon}</div>
          <div className="inline-flex items-start relative flex-[0_0_auto]">
            <LogoTheGoodDeals className="!flex-[0_0_auto]" thegoodDealsClassName="!text-[28px]" />
          </div>
          <div className="flex w-12 h-12 items-center justify-center gap-2.5 relative">
            <UserAlt2 className="!relative !w-6 !h-6" color="#1B4F4A" />
          </div>
        </div>
      )}
    </div>
  );
};

Header.propTypes = {
  HEADER: PropTypes.oneOf(["OPEN", "CLOSE"]),
};
