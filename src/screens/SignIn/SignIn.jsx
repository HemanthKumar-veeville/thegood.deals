import React from "react";
import { Button } from "../../components/Button/Button.jsx";
import { TabMenuStyle } from "../../components/TabMenuStyle/TabMenuStyle.jsx";
import { AppleBrand1 } from "../../icons/AppleBrand1/AppleBrand1.jsx";
import { EyeAlt8 } from "../../icons/EyeAlt8/EyeAlt8.jsx";
import { FacebookFill } from "../../icons/FacebookFill/FacebookFill.jsx";
import { Google } from "../../icons/Google/Google.jsx";
import { UserAlt4 } from "../../icons/UserAlt4/UserAlt4.jsx";
import { VerticalLine3 } from "../../icons/VerticalLine3/VerticalLine3.jsx";

const SignIn = () => {
  return (
    <div className="relative w-[360px] h-[640px] bg-primary-background mx-auto">
      <header className="flex flex-col w-[360px] h-16 items-start absolute top-0 left-0 bg-primary-background [border-top-style:none] [border-right-style:none] border-b [border-bottom-style:solid] [border-left-style:none] border-stroke">
        <div className="flex h-16 items-center justify-between pl-5 pr-3 py-0 relative self-stretch w-full">
          <div className="flex w-12 h-12 items-center justify-center gap-2.5 relative">
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
          <div className="flex w-12 h-12 items-center justify-center gap-2.5 relative">
            <UserAlt4 className="!relative !w-6 !h-6" />
          </div>
        </div>
      </header>
      <div className="flex flex-col w-[360px] items-start gap-[15px] px-[35px] py-[15px] absolute top-[118px] left-0">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-[#1b4f4a] text-2xl text-center tracking-[0] leading-[30px] whitespace-nowrap">
          To log in
        </div>
        <div className="flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full">
          <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
            <div className="flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-[#1b4f4a]">
              <div className="flex items-center gap-[116px] relative flex-1 grow">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-darkdark-6 text-base tracking-[0] leading-6 whitespace-nowrap">
                  E-mail
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full">
          <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
            <div className="flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-stroke">
              <div className="flex items-center justify-between relative flex-1 grow">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-darkdark-6 text-base tracking-[0] leading-6 whitespace-nowrap">
                  Password
                </div>
                <EyeAlt8 className="!relative !w-4 !h-4" />
              </div>
            </div>
          </div>
        </div>
        <Button
          buttonText="To log in"
          className="!self-stretch !flex-[0_0_auto] !flex !w-full"
          color="primary"
          kind="primary"
          round="semi-round"
          state="default"
        />
        <div className="relative self-stretch w-full h-7">
          <div className="relative w-[290px] h-7">
            <img
              className="absolute w-[290px] h-px top-[13px] left-0 object-cover"
              alt="Line"
              src="https://c.animaapp.com/pST4Ri5V/img/line-61-1.svg"
            />
            <div className="flex w-[138px] h-7 items-start justify-center gap-2.5 px-2.5 py-0.5 absolute top-0 left-[76px] bg-primary-background">
              <div className="relative w-fit mt-[-1.00px] ml-[-3.13px] mr-[-3.13px] [font-family:'Inter',Helvetica] font-normal text-secondary-text-color text-base tracking-[0] leading-6 whitespace-nowrap">
                Connection with
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-start justify-center gap-5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-[45px] h-[45px] bg-[#d64937] rounded-md">
            <Google className="!absolute !w-5 !h-5 !top-[13px] !left-[13px]" />
          </div>
          <div className="relative w-[45px] h-[45px] bg-black rounded-md">
            <AppleBrand1
              className="!absolute !w-5 !h-5 !top-3 !left-3"
              color="white"
            />
          </div>
          <div className="relative w-[45px] h-[45px] bg-[#4064ac] rounded-md">
            <FacebookFill
              className="!absolute !w-5 !h-5 !top-[13px] !left-3"
              color="white"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-darkdark text-base tracking-[0] leading-6 whitespace-nowrap">
            Forgot your password ?
          </div>
        </div>
      </div>
      <div className="flex w-[360px] items-start justify-center gap-[35px] px-[25px] py-0 absolute top-16 left-0 border-b [border-bottom-style:solid] border-stroke">
        <TabMenuStyle
          className="!border-[#1b4f4a] !flex-[0_0_auto] !bg-[unset]"
          divClassName="!text-[#1b4f4a] !tracking-[0] !text-base ![font-style:unset] !font-medium ![font-family:'Inter',Helvetica] !leading-6"
          state="hover"
          text="To log in"
        />
        <TabMenuStyle
          className="!border-[unset] ![border-bottom-style:unset] !flex-[0_0_auto] !border-b-[unset] !bg-[unset]"
          divClassName="!text-[#637381] !tracking-[0] !text-base ![font-style:unset] !font-medium ![font-family:'Inter',Helvetica] !leading-6"
          state="default"
          text="Create an account"
        />
      </div>
    </div>
  );
};

export { SignIn };
