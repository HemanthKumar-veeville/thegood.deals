import React from "react";
import { Button } from "../../components/Button/Button";
import { ArrowLeft1 } from "../../icons/ArrowLeft1";
import { ChevronDown } from "../../icons/ChevronDown";
import { EyeAlt4 } from "../../icons/EyeAlt4";
import { Pencil } from "../../icons/Pencil";
import { PencilAlt } from "../../icons/PencilAlt";
import AppBar from "../../components/AppBar/AppBar";
import { Rectangle5095_1 } from "../../images";
import { useNavigate } from "react-router-dom";

export const EditProfile = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/settings");
  };
  return (
    <div className="flex flex-col w-[360px] items-start relative bg-primary-background">
      <AppBar />
      <div className="flex flex-col w-[360px] items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]">
        <div
          className="flex w-[290px] items-center gap-3 pt-0 pb-5 px-0 relative flex-[0_0_auto] border-b [border-bottom-style:solid] border-stroke"
          onClick={handleBack}
        >
          <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
            <ArrowLeft1
              className="!relative !w-[18px] !h-[18px]"
              color="#637381"
            />
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#637381] text-base tracking-[0] leading-6 whitespace-nowrap">
              Back
            </div>
          </div>
        </div>
        <div className="relative w-fit font-heading-6 font-[number:var(--heading-6-font-weight)] text-[#1b4f4a] text-[length:var(--heading-6-font-size)] text-center tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] whitespace-nowrap [font-style:var(--heading-6-font-style)]">
          My account ✏️
        </div>
        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex items-center gap-[15px] relative flex-[0_0_auto]">
            <img
              className="relative w-[50px] h-[50px] object-cover"
              alt="Rectangle"
              src={Rectangle5095_1}
            />
          </div>
          <div className="inline-flex items-center justify-center gap-1.5 px-3 py-[5px] relative flex-[0_0_auto] bg-[#1b4f4a] rounded-[5px]">
            <PencilAlt className="!relative !w-3.5 !h-3.5" color="white" />
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[0] leading-[22px] whitespace-nowrap">
              Change profile picture
            </div>
          </div>
        </div>
        <div className="relative w-fit font-body-large-medium font-[number:var(--body-large-medium-font-weight)] text-[#1b4f4a] text-[length:var(--body-large-medium-font-size)] text-center tracking-[var(--body-large-medium-letter-spacing)] leading-[var(--body-large-medium-line-height)] whitespace-nowrap [font-style:var(--body-large-medium-font-style)]">
          Your information
        </div>
        <div className="flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full">
          <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
            <div className="flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-stroke">
              <div className="flex items-center justify-between relative flex-1 grow">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-darkdark-5 text-base tracking-[0] leading-6 whitespace-nowrap">
                  Abraham
                </div>
                <Pencil className="!relative !w-4 !h-4" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full">
          <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
            <div className="flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-stroke">
              <div className="flex items-center justify-between relative flex-1 grow">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-darkdark-5 text-base tracking-[0] leading-6 whitespace-nowrap">
                  Thomas
                </div>
                <Pencil className="!relative !w-4 !h-4" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full">
          <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
            <div className="flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-stroke">
              <div className="flex items-center justify-between relative flex-1 grow">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-darkdark-5 text-base tracking-[0] leading-6 whitespace-nowrap">
                  +33650505050
                </div>
                <Pencil className="!relative !w-4 !h-4" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full">
          <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
            <div className="flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-stroke">
              <div className="flex items-center justify-between relative flex-1 grow">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-darkdark-5 text-base tracking-[0] leading-6 whitespace-nowrap">
                  contact@himyt.com
                </div>
                <Pencil className="!relative !w-4 !h-4" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full">
          <div className="flex items-center gap-2.5 px-5 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-stroke">
            <div className="flex items-center justify-between relative flex-1 grow">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#1b4f4a] text-base tracking-[0] leading-6 whitespace-nowrap">
                French
              </div>
              <ChevronDown className="!relative !w-4 !h-4" color="#1B4F4A" />
            </div>
          </div>
        </div>
        <div className="relative w-fit font-body-large-medium font-[number:var(--body-large-medium-font-weight)] text-[#1b4f4a] text-[length:var(--body-large-medium-font-size)] text-center tracking-[var(--body-large-medium-letter-spacing)] leading-[var(--body-large-medium-line-height)] whitespace-nowrap [font-style:var(--body-large-medium-font-style)]">
          change my password
        </div>
        <div className="flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full">
          <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
            <div className="flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-stroke">
              <div className="flex items-center justify-between relative flex-1 grow">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-darkdark-6 text-base tracking-[0] leading-6 whitespace-nowrap">
                  *******************
                </div>
                <EyeAlt4 className="!relative !w-4 !h-4" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full">
          <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
            <div className="flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-stroke">
              <div className="flex items-center justify-between relative flex-1 grow">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-darkdark-6 text-base tracking-[0] leading-6 whitespace-nowrap">
                  *******************
                </div>
                <EyeAlt4 className="!relative !w-4 !h-4" />
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-[280px] h-[49px]">
          <div className="flex w-[280px] items-center gap-[15px] absolute top-0 left-0">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#637381] text-sm text-center tracking-[0] leading-[22px] whitespace-nowrap">
              8 characters
            </div>
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#637381] text-sm text-center tracking-[0] leading-[22px] whitespace-nowrap">
              1 capital letter
            </div>
          </div>
          <div className="flex w-[280px] items-center gap-[21px] absolute top-[27px] left-0">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#637381] text-sm text-center tracking-[0] leading-[22px] whitespace-nowrap">
              1 lower case
            </div>
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#637381] text-sm text-center tracking-[0] leading-[22px] whitespace-nowrap">
              1 digit
            </div>
          </div>
        </div>
        <div className="relative w-fit font-body-large-medium font-[number:var(--body-large-medium-font-weight)] text-[#1b4f4a] text-[length:var(--body-large-medium-font-size)] text-center tracking-[var(--body-large-medium-letter-spacing)] leading-[var(--body-large-medium-line-height)] whitespace-nowrap [font-style:var(--body-large-medium-font-style)]">
          Your address
        </div>
        <div className="flex flex-col h-20 items-start gap-[5px] relative self-stretch w-full">
          <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
            <div className="flex w-[250px] items-start gap-2.5 relative flex-[0_0_auto]">
              <div className="font-[number:var(--body-small-medium-font-weight)] relative w-fit mt-[-1.00px] font-body-small-medium text-[#1b4f4a] text-[length:var(--body-small-medium-font-size)] tracking-[var(--body-small-medium-letter-spacing)] leading-[var(--body-small-medium-line-height)] whitespace-nowrap [font-style:var(--body-small-medium-font-style)]">
                Address (required)
              </div>
            </div>
            <div className="flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-stroke">
              <div className="flex items-center gap-[116px] relative flex-1 grow">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-darkdark-5 text-base tracking-[0] leading-6 whitespace-nowrap">
                  1 place with onions
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-20 items-start gap-[5px] relative self-stretch w-full">
          <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
            <div className="flex w-[250px] items-start gap-2.5 relative flex-[0_0_auto]">
              <div className="font-normal relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] text-[#1b4f4a] text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                Additional address
              </div>
            </div>
            <div className="flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-stroke">
              <div className="flex items-center gap-[116px] relative flex-1 grow">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-darkdark-5 text-base tracking-[0] leading-6 whitespace-nowrap">
                  Apartment 01
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-20 items-start gap-[5px] relative self-stretch w-full">
          <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
            <div className="flex w-[250px] items-start gap-2.5 relative flex-[0_0_auto]">
              <div className="font-[number:var(--body-small-medium-font-weight)] relative w-fit mt-[-1.00px] font-body-small-medium text-[#1b4f4a] text-[length:var(--body-small-medium-font-size)] tracking-[var(--body-small-medium-letter-spacing)] leading-[var(--body-small-medium-line-height)] whitespace-nowrap [font-style:var(--body-small-medium-font-style)]">
                City (required)
              </div>
            </div>
            <div className="flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-stroke">
              <div className="flex items-center gap-[116px] relative flex-1 grow">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-darkdark-5 text-base tracking-[0] leading-6 whitespace-nowrap">
                  Lille
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-20 items-start gap-[5px] relative self-stretch w-full">
          <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
            <div className="flex w-[250px] items-start gap-2.5 relative flex-[0_0_auto]">
              <div className="font-[number:var(--body-small-medium-font-weight)] relative w-fit mt-[-1.00px] font-body-small-medium text-[#1b4f4a] text-[length:var(--body-small-medium-font-size)] tracking-[var(--body-small-medium-letter-spacing)] leading-[var(--body-small-medium-line-height)] whitespace-nowrap [font-style:var(--body-small-medium-font-style)]">
                Postal code (required)
              </div>
            </div>
            <div className="flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-stroke">
              <div className="flex items-center gap-[116px] relative flex-1 grow">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-darkdark-5 text-base tracking-[0] leading-6 whitespace-nowrap">
                  59000
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-20 items-start gap-[5px] relative self-stretch w-full">
          <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
            <div className="flex w-[250px] items-start gap-2.5 relative flex-[0_0_auto]">
              <div className="font-[number:var(--body-small-medium-font-weight)] relative w-fit mt-[-1.00px] font-body-small-medium text-[#1b4f4a] text-[length:var(--body-small-medium-font-size)] tracking-[var(--body-small-medium-letter-spacing)] leading-[var(--body-small-medium-line-height)] whitespace-nowrap [font-style:var(--body-small-medium-font-style)]">
                Country (required)
              </div>
            </div>
            <div className="flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-stroke">
              <div className="flex items-center gap-[116px] relative flex-1 grow">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-darkdark-5 text-base tracking-[0] leading-6 whitespace-nowrap">
                  France
                </div>
              </div>
            </div>
          </div>
        </div>
        <Button
          buttonText="Confirm changes"
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
