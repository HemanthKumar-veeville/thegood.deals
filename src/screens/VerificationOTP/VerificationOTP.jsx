import React from "react";
import { Button } from "../../components/Button/Button";
import { UserAlt4 } from "../../icons/UserAlt4/UserAlt4";
import { VerticalLine3 } from "../../icons/VerticalLine3/VerticalLine3";

export const VerificationOTP = () => {
  return (
    <div className="relative w-[360px] h-[640px] bg-primary-background mx-auto">
      <header className="flex flex-col w-[360px] h-16 items-start absolute top-0 left-0 bg-primary-background [border-top-style:none] [border-right-style:none] border-b [border-bottom-style:solid] [border-left-style:none] border-stroke">
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
            <UserAlt4 className="!relative !w-6 !h-6" color="#1B4F4A" />
          </div>
        </div>
      </header>
      <div className="flex flex-col w-[360px] items-start gap-[15px] px-[35px] py-[15px] absolute top-16 left-0">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold !text-[#1b4f4a] text-2xl text-center tracking-[0] leading-[30px] whitespace-nowrap">
          Confirm your email
        </div>
        <p className="relative w-fit [font-family:'Inter',Helvetica] font-normal !text-[#1b4f4a] text-sm tracking-[0] leading-[22px]">
          We have sent you a code to <br />
          {"{"}address{"}"}
        </p>
        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col w-12 h-12 items-start gap-[5px] relative">
            <div className="flex flex-col items-center gap-2.5 relative flex-1 self-stretch w-full grow">
              <div className="flex items-start justify-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-whitewhite rounded-md border border-solid border-stroke">
                <div className="flex items-center gap-[116px] relative flex-1 grow">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-darkdark-6 text-base tracking-[0] leading-6 whitespace-nowrap">
                    0
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-12 h-12 items-start gap-[5px] relative">
            <div className="flex flex-col items-center gap-2.5 relative flex-1 self-stretch w-full grow">
              <div className="flex items-start justify-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-whitewhite rounded-md border border-solid border-stroke">
                <div className="flex items-center gap-[116px] relative flex-1 grow">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-darkdark-6 text-base tracking-[0] leading-6 whitespace-nowrap">
                    0
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-12 h-12 items-start gap-[5px] relative">
            <div className="flex flex-col items-center gap-2.5 relative flex-1 self-stretch w-full grow">
              <div className="flex items-start justify-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-whitewhite rounded-md border border-solid border-stroke">
                <div className="flex items-center gap-[116px] relative flex-1 grow">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-darkdark-6 text-base tracking-[0] leading-6 whitespace-nowrap">
                    0
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-12 h-12 items-start gap-[5px] relative">
            <div className="flex flex-col items-center gap-2.5 relative flex-1 self-stretch w-full grow">
              <div className="flex items-start justify-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-whitewhite rounded-md border border-solid border-stroke">
                <div className="flex items-center gap-[116px] relative flex-1 grow">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-darkdark-6 text-base tracking-[0] leading-6 whitespace-nowrap">
                    0
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-12 h-12 items-start gap-[5px] relative">
            <div className="flex flex-col items-center gap-2.5 relative flex-1 self-stretch w-full grow">
              <div className="flex items-start justify-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-whitewhite rounded-md border border-solid border-stroke">
                <div className="flex items-center gap-[116px] relative flex-1 grow">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-darkdark-6 text-base tracking-[0] leading-6 whitespace-nowrap">
                    0
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-secondary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap">
          Sent back (33s)
        </div>
        <Button
          buttonText="To log in"
          className="!self-stretch !flex-[0_0_auto] !flex !w-full"
          color="primary"
          kind="primary"
          round="semi-round"
          state="disable"
        />
      </div>
    </div>
  );
};
