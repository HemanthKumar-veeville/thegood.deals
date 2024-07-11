import React from "react";
import { Button } from "../../components/Button/Button";
import { TabMenuStyle } from "../../components/TabMenuStyle/TabMenuStyle";
import { EyeAlt8 } from "../../icons/EyeAlt8/EyeAlt8";
import { UserAlt4 } from "../../icons/UserAlt4/UserAlt4";
import { VerticalLine3 } from "../../icons/VerticalLine3/VerticalLine3";

export const SignUp = () => {
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
            <UserAlt4 className="!relative !w-6 !h-6" color="#1B4F4A" />
          </div>
        </div>
      </header>
      <div className="flex w-[360px] items-start justify-center gap-10 px-[25px] py-0 relative flex-[0_0_auto] border-b [border-bottom-style:solid] border-stroke">
        <TabMenuStyle
          className="!border-[unset] ![border-bottom-style:unset] !flex-[0_0_auto] !border-b-[unset] !bg-[unset]"
          divClassName="!text-secondary-text-color !tracking-[0] !text-base ![font-style:unset] !font-medium ![font-family:'Inter',Helvetica] !leading-6"
          state="default"
          text="To log in"
        />
        <TabMenuStyle
          className="!border-[#1b4f4a] !flex-[0_0_auto] !bg-[unset]"
          divClassName="!text-[#1b4f4a] !tracking-[0] !text-base ![font-style:unset] !font-medium ![font-family:'Inter',Helvetica] !leading-6"
          state="hover"
          text="Create an account"
        />
      </div>
      <div className="flex flex-col w-[360px] items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-[#1b4f4a] text-2xl text-center tracking-[0] leading-[30px] whitespace-nowrap">
          Create an account
        </div>
        <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-lg text-center tracking-[0] leading-[26px] whitespace-nowrap">
          Your information
        </div>
        <div className="h-12 flex flex-col items-start gap-[5px] relative self-stretch w-full">
          <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
            <div className="flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-[#1b4f4a]">
              <input
                className="relative grow border-[none] [background:none] mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-darkdark-6 text-base tracking-[0] leading-6 whitespace-nowrap p-0"
                placeholder="First name"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="h-12 flex flex-col items-start gap-[5px] relative self-stretch w-full">
          <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
            <div className="flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-stroke">
              <input
                className="relative grow border-[none] [background:none] mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-darkdark-6 text-base tracking-[0] leading-6 whitespace-nowrap p-0"
                placeholder="Name"
                type="text"
              />
            </div>
          </div>
        </div>
        <div className="h-12 flex flex-col items-start gap-[5px] relative self-stretch w-full">
          <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
            <div className="flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-stroke">
              <div className="flex items-center gap-[116px] relative flex-1 grow">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-darkdark-6 text-base tracking-[0] leading-6 whitespace-nowrap">
                  Tel.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-12 flex flex-col items-start gap-[5px] relative self-stretch w-full">
          <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
            <div className="flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-stroke">
              <div className="flex items-center gap-[116px] relative flex-1 grow">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-darkdark-6 text-base tracking-[0] leading-6 whitespace-nowrap">
                  E-mail
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-lg text-center tracking-[0] leading-[26px] whitespace-nowrap">
          Your password
        </div>
        <div className="h-12 flex flex-col items-start gap-[5px] relative self-stretch w-full">
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
        <div className="h-12 flex flex-col items-start gap-[5px] relative self-stretch w-full">
          <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
            <div className="flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-stroke">
              <div className="flex items-center justify-between relative flex-1 grow">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-darkdark-6 text-base tracking-[0] leading-6 whitespace-nowrap">
                  Confirm your password
                </div>
                <EyeAlt8 className="!relative !w-4 !h-4" />
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-[280px] h-[71px]">
          <div className="relative h-[71px]">
            <div className="flex w-[280px] items-center gap-[15px] absolute top-0 left-0">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#637381] text-sm text-center tracking-[0] leading-[22px]">
                8 characters
              </div>
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#637381] text-sm text-center tracking-[0] leading-[22px]">
                1 capital letter
              </div>
            </div>
            <div className="flex w-[280px] items-center gap-[21px] absolute top-[27px] left-0">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#637381] text-sm text-center tracking-[0] leading-[22px]">
                1 lower case
              </div>
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#637381] text-sm text-center tracking-[0] leading-[22px]">
                1 digit
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-lg text-center tracking-[0] leading-[26px] whitespace-nowrap">
          Your address
        </div>
        <div className="h-20 flex flex-col items-start gap-[5px] relative self-stretch w-full">
          <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
            <div className="flex w-[250px] items-start gap-2.5 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                Address (required)
              </div>
            </div>
            <div className="flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-stroke">
              <div className="flex items-center gap-[116px] relative flex-1 grow">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-darkdark-6 text-base tracking-[0] leading-6 whitespace-nowrap">
                  1 place with onions
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-20 flex flex-col items-start gap-[5px] relative self-stretch w-full">
          <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
            <div className="flex w-[250px] items-start gap-2.5 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#1b4f4a] text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                Additional address
              </div>
            </div>
            <div className="flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-stroke">
              <div className="flex items-center gap-[116px] relative flex-1 grow">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-darkdark-6 text-base tracking-[0] leading-6 whitespace-nowrap">
                  Apartment 01
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-20 flex flex-col items-start gap-[5px] relative self-stretch w-full">
          <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
            <div className="flex w-[250px] items-start gap-2.5 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                City (required)
              </div>
            </div>
            <div className="flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-stroke">
              <div className="flex items-center gap-[116px] relative flex-1 grow">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-darkdark-6 text-base tracking-[0] leading-6 whitespace-nowrap">
                  Lille
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-20 flex flex-col items-start gap-[5px] relative self-stretch w-full">
          <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
            <div className="flex w-[250px] items-start gap-2.5 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                Postal code (required)
              </div>
            </div>
            <div className="flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-stroke">
              <div className="flex items-center gap-[116px] relative flex-1 grow">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-darkdark-6 text-base tracking-[0] leading-6 whitespace-nowrap">
                  59000
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-20 flex flex-col items-start gap-[5px] relative self-stretch w-full">
          <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
            <div className="flex w-[250px] items-start gap-2.5 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                Country (required)
              </div>
            </div>
            <div className="flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-stroke">
              <div className="flex items-center gap-[116px] relative flex-1 grow">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-darkdark-6 text-base tracking-[0] leading-6 whitespace-nowrap">
                  France
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-[10px_10px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-5 h-5 bg-white rounded border border-solid border-stroke" />
          <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#1b4f4a] text-xs tracking-[0] leading-5 whitespace-nowrap">
            <span className="[font-family:'Inter',Helvetica] font-normal text-[#1b4f4a] text-xs tracking-[0] leading-5">
              I accept{" "}
            </span>
            <span className="underline">privacy policy</span>
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-[10px_10px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-5 h-5 bg-white rounded border border-solid border-stroke" />
          <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#1b4f4a] text-xs tracking-[0] leading-5 whitespace-nowrap">
            <span className="[font-family:'Inter',Helvetica] font-normal text-[#1b4f4a] text-xs tracking-[0] leading-5">
              I agree to{" "}
            </span>
            <span className="underline">receive the newsletter</span>
          </p>
        </div>
        <Button
          buttonText="Register"
          className="!self-stretch !flex-[0_0_auto] !flex !w-full"
          color="primary"
          kind="primary"
          round="semi-round"
          state="default"
        />
      </div>
    </div>
  );
};
