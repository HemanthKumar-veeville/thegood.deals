import React from "react";
import { Button } from "../../components/Button/Button";
import { CheckBox } from "../../components/CheckBox";
import { StyleTypePrimary } from "../../components/StyleTypePrimaryUpdated";
import { Textarea } from "../../components/Textarea";
import { ArrowRight1 } from "../../icons/ArrowRight1";
import { CalenderAlt1 } from "../../icons/CalenderAlt1";
import { ChevronLeft1 } from "../../icons/ChevronLeft1";
import { ChevronRight1 } from "../../icons/ChevronRight1";
import { CirclePlus55 } from "../../icons/CirclePlus55";
import { Minus1 } from "../../icons/Minus1";
import { Plus1 } from "../../icons/Plus1";
import { Plus3 } from "../../icons/Plus3";
import { UserAlt3 } from "../../icons/UserAlt3";
import { VerticalLine2 } from "../../icons/VerticalLine2";
import { WebsiteMoney } from "../../icons/WebsiteMoney";
import { Write2 } from "../../icons/Write2";
import {
  Line59,
  Line60,
  Line63,
  Line_146_2,
  Line_60_1,
  Polygon1,
  Polygon_1_1,
} from "../../images";
import AppBar from "../../components/AppBar/AppBar";

export const CreateDeal = () => {
  return (
    <div className="flex flex-col w-[360px] items-start relative bg-primary-background mx-auto">
      <AppBar />
      <div className="flex flex-col w-[360px] items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-[#1b4f4a] text-2xl text-center tracking-[0] leading-[30px] whitespace-nowrap">
          Create a good deal
        </div>
        <div className="flex flex-col h-[180px] items-start gap-2.5 relative self-stretch w-full">
          <div className="flex flex-col items-center relative flex-1 self-stretch w-full grow">
            <div className="flex items-center justify-center gap-2.5 p-5 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-stroke">
              <div className="inline-flex items-center justify-center gap-2 px-6 py-3 relative flex-[0_0_auto] rounded-[50px] border border-solid border-[#1b4f4a]">
                <CirclePlus55 className="!relative !w-5 !h-5" color="#1B4F4A" />
                <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                  Add pictures
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-20 items-start gap-[5px] relative self-stretch w-full">
          <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
            <div className="flex w-[250px] items-start gap-2.5 relative flex-[0_0_auto]">
              <div className="w-fit whitespace-nowrap relative mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-lg tracking-[0] leading-[26px]">
                Title
              </div>
            </div>
            <div className="flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-stroke">
              <div className="mt-[-2.00px] mb-[-2.00px] flex items-center gap-[116px] relative flex-1 grow">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-darkdark-6 text-base tracking-[0] leading-6 whitespace-nowrap">
                  ex. Wine Boxes
                </div>
              </div>
            </div>
          </div>
        </div>
        <Textarea
          className="!self-stretch !w-full"
          divClassName="!text-[#1b4f4a] !text-lg !leading-[26px]"
          divClassNameOverride="!tracking-[0] !text-base !flex-1 ![white-space:unset] ![font-style:unset] !font-normal ![font-family:'Inter',Helvetica] !leading-6 !w-[unset]"
          groupClassName="!w-[42px]"
          helperText="off"
          label="Description of the deal"
          label1="on"
          placeholder="ex. I discovered this incredible winery..."
          secondLabel="on"
          secondLabelText="0/250"
          state="default"
        />
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-lg tracking-[0] leading-[26px] whitespace-nowrap">
            Collection location
          </div>
        </div>
        <CheckBox
          checked="OFF"
          checkedOffStyleClassName="!flex-[0_0_auto]"
          divClassName="!text-primary-text-color !tracking-[0] !text-base ![font-style:unset] !font-normal ![font-family:'Inter',Helvetica] !leading-6"
          style="two"
          text="At my house"
          text1="ON"
        />
        <CheckBox
          checked="OFF"
          checkedOffStyleClassName="!flex-[0_0_auto]"
          divClassName="!text-primary-text-color !tracking-[0] !text-base ![font-style:unset] !font-normal ![font-family:'Inter',Helvetica] !leading-6"
          style="two"
          text="I provide another location"
          text1="ON"
        />
        <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-base tracking-[0] leading-6 whitespace-nowrap">
          Approximate collection date
        </div>
        <div className="flex h-[46px] items-center gap-2.5 pl-5 pr-4 py-3 relative self-stretch w-full bg-white rounded-md border border-solid border-stroke">
          <CalenderAlt1 className="!relative !w-4 !h-4" color="#6B7280" />
          <div className="flex items-center gap-[116px] relative flex-1 grow mt-[-1.00px] mb-[-1.00px]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-darkdark-6 text-base tracking-[0] leading-6 whitespace-nowrap">
              ex. Current April 2025
            </div>
          </div>
        </div>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <Textarea
          className="!self-stretch !w-full"
          divClassName="!text-[#1b4f4a] !text-lg !leading-[26px]"
          divClassNameOverride="!tracking-[0] !text-base !flex-1 ![white-space:unset] ![font-style:unset] !font-normal ![font-family:'Inter',Helvetica] !leading-6 !w-[unset]"
          groupClassName="!w-[42px]"
          helperText="off"
          label="Describe the content"
          label1="on"
          placeholder="ex. Each order will include a varied selection of ... bottles"
          secondLabel="on"
          secondLabelText="0/250"
          state="default"
        />
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <Textarea
          className="!self-stretch !w-full"
          divClassName="!text-[#1b4f4a] !text-lg ![white-space:unset] !leading-[26px] !w-[236px]"
          divClassNameOverride="!tracking-[0] !text-base !flex-1 ![white-space:unset] ![font-style:unset] !font-normal ![font-family:'Inter',Helvetica] !leading-6 !w-[unset]"
          groupClassName="!w-[42px]"
          helperText="off"
          label="Information from the craftsman/manufacturer"
          label1="on"
          placeholder="ex. Domaine de Cigalus 11200 Bizanet"
          secondLabel="on"
          secondLabelText="0/250"
          state="default"
        />
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <p className="relative w-[230px] [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-lg tracking-[0] leading-[26px]">
          Banking information for the craftsman
        </p>
        <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-[#1b4f4a] text-base tracking-[0] leading-6 whitespace-nowrap">
          IBAN
        </div>
        <div className="flex h-[46px] items-center gap-2.5 pl-5 pr-4 py-3 relative self-stretch w-full bg-white rounded-md border border-solid border-stroke">
          <Write2 className="!relative !w-4 !h-4" color="#6B7280" />
          <div className="flex items-center gap-[116px] relative flex-1 grow mt-[-1.00px] mb-[-1.00px]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-darkdark-6 text-base tracking-[0] leading-6 whitespace-nowrap">
              ENXXXXXXXXXXXXXXXXXXXX
            </div>
          </div>
        </div>
        <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-[#1b4f4a] text-base tracking-[0] leading-6 whitespace-nowrap">
          BIC
        </div>
        <div className="flex h-[46px] items-center gap-2.5 pl-5 pr-4 py-3 relative self-stretch w-full bg-white rounded-md border border-solid border-stroke">
          <Write2 className="!relative !w-4 !h-4" color="#6B7280" />
          <div className="flex items-center gap-[116px] relative flex-1 grow mt-[-1.00px] mb-[-1.00px]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-darkdark-6 text-base tracking-[0] leading-6 whitespace-nowrap">
              XXXXXXXXXXX
            </div>
          </div>
        </div>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
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
        <div className="relative w-[290px] h-[302.51px] bg-white rounded-[6.82px] shadow-shadow-4">
          <div className="inline-flex items-start gap-[11.37px] absolute top-[252px] left-5">
            <Button
              buttonText="DELETE"
              buttonTextClassName="!mt-[-0.57px]"
              className="!border-[unset] !rounded-[3.41px] !gap-[5.69px] !border-[0.57px] !border-solid !px-[15.92px] !py-[7.39px] !flex !w-[122.25px]"
              color="tertiary"
              kind="primary"
              round="semi-round"
              state="default"
            />
            <Button
              buttonText="Confirm"
              buttonTextClassName="!mt-[-0.57px]"
              className="!rounded-[3.41px] !gap-[5.69px] !px-[15.92px] !py-[7.39px] !flex !w-[122.25px]"
              color="primary"
              kind="primary"
              round="semi-round"
              state="default"
            />
          </div>
          <div className="absolute top-[22px] left-[95px] [font-family:'Inter',Helvetica] font-medium text-[#111928] text-xl text-center tracking-[0] leading-[26px] whitespace-nowrap">
            April 2025
          </div>
          <div className="absolute w-[26px] h-[26px] top-[17px] left-[247px] bg-graygray-2 rounded-[3.98px] border-[0.28px] border-solid border-stroke">
            <ChevronRight1 className="!absolute !w-3.5 !h-3.5 !top-1.5 !left-1.5" />
          </div>
          <div className="absolute w-[26px] h-[26px] top-[17px] left-[17px] bg-graygray-2 rounded-[3.98px] border-[0.28px] border-solid border-stroke rotate-[180.00deg]">
            <ChevronLeft1 className="!rotate-[-180.00deg] !absolute !w-3.5 !h-3.5 !top-1.5 !left-1.5" />
          </div>
          <div className="absolute top-[67px] left-[13px] [font-family:'Inter',Helvetica] font-medium text-primary-text-color text-lg text-center tracking-[0] leading-[26px] whitespace-nowrap">
            MB
          </div>
          <div className="top-[97px] left-[17px] text-primary-text-color text-lg leading-[26px] absolute [font-family:'Inter',Helvetica] font-medium text-center tracking-[0] whitespace-nowrap">
            31
          </div>
          <div className="top-32 left-[22px] text-[#111928] text-lg leading-[26px] absolute [font-family:'Inter',Helvetica] font-medium text-center tracking-[0] whitespace-nowrap">
            7
          </div>
          <div className="top-[159px] left-[17px] text-[#111928] text-lg leading-[26px] absolute [font-family:'Inter',Helvetica] font-medium text-center tracking-[0] whitespace-nowrap">
            14
          </div>
          <div className="top-[189px] left-[17px] text-[#111928] text-lg leading-[26px] absolute [font-family:'Inter',Helvetica] font-medium text-center tracking-[0] whitespace-nowrap">
            21
          </div>
          <div className="top-[220px] left-4 text-[#111928] text-lg leading-[26px] absolute [font-family:'Inter',Helvetica] font-medium text-center tracking-[0] whitespace-nowrap">
            28
          </div>
          <div className="absolute top-[67px] left-[53px] [font-family:'Inter',Helvetica] font-medium text-primary-text-color text-lg text-center tracking-[0] leading-[26px] whitespace-nowrap">
            You
          </div>
          <div className="top-[97px] left-16 text-[#111928] text-lg leading-[26px] absolute [font-family:'Inter',Helvetica] font-medium text-center tracking-[0] whitespace-nowrap">
            1
          </div>
          <div className="top-32 left-[62px] text-[#111928] text-lg leading-[26px] absolute [font-family:'Inter',Helvetica] font-medium text-center tracking-[0] whitespace-nowrap">
            8
          </div>
          <div className="top-[159px] left-[58px] text-[#111928] text-lg leading-[26px] absolute [font-family:'Inter',Helvetica] font-medium text-center tracking-[0] whitespace-nowrap">
            15
          </div>
          <div className="top-[189px] left-[57px] text-[#111928] text-lg leading-[26px] absolute [font-family:'Inter',Helvetica] font-medium text-center tracking-[0] whitespace-nowrap">
            22
          </div>
          <div className="top-[220px] left-[57px] text-[#111928] text-lg leading-[26px] absolute [font-family:'Inter',Helvetica] font-medium text-center tracking-[0] whitespace-nowrap">
            29
          </div>
          <div className="absolute top-[67px] left-[94px] [font-family:'Inter',Helvetica] font-medium text-primary-text-color text-lg text-center tracking-[0] leading-[26px] whitespace-nowrap">
            We
          </div>
          <div className="top-[97px] left-[102px] text-[#111928] text-lg leading-[26px] absolute [font-family:'Inter',Helvetica] font-medium text-center tracking-[0] whitespace-nowrap">
            2
          </div>
          <div className="top-32 left-[102px] text-[#111928] text-lg leading-[26px] absolute [font-family:'Inter',Helvetica] font-medium text-center tracking-[0] whitespace-nowrap">
            9
          </div>
          <div className="top-[159px] left-[98px] text-[#111928] text-lg leading-[26px] absolute [font-family:'Inter',Helvetica] font-medium text-center tracking-[0] whitespace-nowrap">
            16
          </div>
          <div className="top-[189px] left-[97px] text-[#111928] text-lg leading-[26px] absolute [font-family:'Inter',Helvetica] font-medium text-center tracking-[0] whitespace-nowrap">
            23
          </div>
          <div className="top-[220px] left-24 text-[#111928] text-lg leading-[26px] absolute [font-family:'Inter',Helvetica] font-medium text-center tracking-[0] whitespace-nowrap">
            30
          </div>
          <div className="absolute top-[67px] left-[139px] [font-family:'Inter',Helvetica] font-medium text-primary-text-color text-lg text-center tracking-[0] leading-[26px] whitespace-nowrap">
            Th
          </div>
          <div className="top-[97px] left-[145px] text-[#111928] text-lg leading-[26px] absolute [font-family:'Inter',Helvetica] font-medium text-center tracking-[0] whitespace-nowrap">
            3
          </div>
          <div className="top-32 left-[140px] text-[#111928] text-lg leading-[26px] absolute [font-family:'Inter',Helvetica] font-medium text-center tracking-[0] whitespace-nowrap">
            10
          </div>
          <div className="top-[159px] left-[142px] text-[#111928] text-lg leading-[26px] absolute [font-family:'Inter',Helvetica] font-medium text-center tracking-[0] whitespace-nowrap">
            17
          </div>
          <div className="top-[189px] left-[139px] text-[#111928] text-lg leading-[26px] absolute [font-family:'Inter',Helvetica] font-medium text-center tracking-[0] whitespace-nowrap">
            24
          </div>
          <div className="top-[220px] left-[140px] text-[#111928] text-lg leading-[26px] absolute [font-family:'Inter',Helvetica] font-medium text-center tracking-[0] whitespace-nowrap">
            31
          </div>
          <div className="absolute top-[67px] left-[180px] [font-family:'Inter',Helvetica] font-medium text-primary-text-color text-lg text-center tracking-[0] leading-[26px] whitespace-nowrap">
            Fr
          </div>
          <div className="top-[97px] left-[183px] text-[#111928] text-lg leading-[26px] absolute [font-family:'Inter',Helvetica] font-medium text-center tracking-[0] whitespace-nowrap">
            4
          </div>
          <div className="absolute w-[27px] h-[57px] top-32 left-44">
            <div className="top-0 left-[5px] text-[#111928] text-lg leading-[26px] absolute [font-family:'Inter',Helvetica] font-medium text-center tracking-[0] whitespace-nowrap">
              11
            </div>
            <div className="absolute w-[27px] h-[26px] top-[25px] left-0 bg-graygray-2 rounded-[3.98px] border-[0.28px] border-solid border-stroke" />
            <div className="top-[31px] left-[3px] text-[#111928] text-lg leading-[26px] absolute [font-family:'Inter',Helvetica] font-medium text-center tracking-[0] whitespace-nowrap">
              18
            </div>
          </div>
          <div className="top-[189px] left-[178px] text-[#111928] text-lg leading-[26px] absolute [font-family:'Inter',Helvetica] font-medium text-center tracking-[0] whitespace-nowrap">
            25
          </div>
          <div className="top-[220px] left-[185px] text-[#111928] text-lg leading-[26px] absolute [font-family:'Inter',Helvetica] font-medium text-center tracking-[0] whitespace-nowrap">
            1
          </div>
          <div className="absolute top-[67px] left-[210px] [font-family:'Inter',Helvetica] font-medium text-primary-text-color text-lg text-center tracking-[0] leading-[26px] whitespace-nowrap">
            Her
          </div>
          <div className="top-[97px] left-[219px] text-[#111928] text-lg leading-[26px] absolute [font-family:'Inter',Helvetica] font-medium text-center tracking-[0] whitespace-nowrap">
            5
          </div>
          <div className="absolute w-[27px] h-[55px] top-32 left-[212px]">
            <div className="top-0 left-[3px] text-[#111928] text-lg leading-[26px] absolute [font-family:'Inter',Helvetica] font-medium text-center tracking-[0] whitespace-nowrap">
              12
            </div>
            <div className="absolute w-[27px] h-[26px] top-[25px] left-0 bg-[#1b4f4a] rounded-[3.98px]" />
            <div className="top-[31px] left-[3px] text-white text-lg leading-6 absolute [font-family:'Inter',Helvetica] font-medium text-center tracking-[0] whitespace-nowrap">
              19
            </div>
          </div>
          <div className="top-[189px] left-[214px] text-[#111928] text-lg leading-[26px] absolute [font-family:'Inter',Helvetica] font-medium text-center tracking-[0] whitespace-nowrap">
            26
          </div>
          <div className="top-[220px] left-[219px] text-[#111928] text-lg leading-[26px] absolute [font-family:'Inter',Helvetica] font-medium text-center tracking-[0] whitespace-nowrap">
            2
          </div>
          <div className="absolute top-[67px] left-[253px] [font-family:'Inter',Helvetica] font-medium text-primary-text-color text-lg text-center tracking-[0] leading-[26px] whitespace-nowrap">
            Su
          </div>
          <div className="top-[97px] left-[258px] text-[#111928] text-lg leading-[26px] absolute [font-family:'Inter',Helvetica] font-medium text-center tracking-[0] whitespace-nowrap">
            6
          </div>
          <div className="top-32 left-[254px] text-[#111928] text-lg leading-[26px] absolute [font-family:'Inter',Helvetica] font-medium text-center tracking-[0] whitespace-nowrap">
            13
          </div>
          <div className="top-[159px] left-[253px] text-[#111928] text-lg leading-[26px] absolute [font-family:'Inter',Helvetica] font-medium text-center tracking-[0] whitespace-nowrap">
            20
          </div>
          <div className="top-[189px] left-[253px] text-[#111928] text-lg leading-[26px] absolute [font-family:'Inter',Helvetica] font-medium text-center tracking-[0] whitespace-nowrap">
            27
          </div>
          <div className="top-[220px] left-[258px] text-[#111928] text-lg leading-[26px] absolute [font-family:'Inter',Helvetica] font-medium text-center tracking-[0] whitespace-nowrap">
            3
          </div>
        </div>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <div className="flex w-[250px] items-start gap-2.5 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-lg tracking-[0] leading-[26px] whitespace-nowrap">
            Add products
          </div>
        </div>
        <div className="flex flex-col items-start gap-[15px] p-[15px] relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[5px]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-base tracking-[0] leading-6 whitespace-nowrap">
            Product Title
          </div>
          <div className="flex h-[46px] items-center gap-2.5 pl-5 pr-4 py-3 relative self-stretch w-full bg-white rounded-md border border-solid border-stroke">
            <div className="flex items-center gap-[116px] relative flex-1 grow">
              <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-darkdark-6 text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                ex. Case of Rosé - 6 bottles
              </p>
            </div>
          </div>
          <div className="inline-flex flex-col items-start gap-[15px] relative flex-[0_0_auto]">
            <div className="relative w-[260px] h-[97px]">
              <div className="flex-col items-start top-0 flex w-[260px] absolute left-0">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-base tracking-[0] leading-6 whitespace-nowrap">
                  Minimum quantity
                </div>
                <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                    by order
                  </div>
                </div>
              </div>
              <div className="items-center gap-[70px] top-[61px] flex w-[260px] absolute left-0">
                <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
                  <div className="relative w-[116px] h-9 mr-[-2.00px]">
                    <div className="relative w-[114px] h-9 bg-white rounded-[5px] border border-solid border-stroke">
                      <img
                        className="absolute w-px h-9 -top-px left-[33px] object-cover"
                        alt="Line"
                        src={Line_146_2}
                      />
                      <img
                        className="absolute w-px h-9 -top-px left-[79px] object-cover"
                        alt="Line"
                        src={Line_146_2}
                      />
                      <Minus1
                        className="!absolute !w-3 !h-3 !top-[11px] !left-2.5"
                        color="#1B4F4A"
                      />
                      <Plus1 className="!absolute !w-3 !h-3 !top-[11px] !left-[90px]" />
                      <div className="absolute top-[5px] left-[51px] [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                        2
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative w-[260px] h-[97px]">
              <div className="flex-col items-start top-0 flex w-[260px] absolute left-0">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-base tracking-[0] leading-6 whitespace-nowrap">
                  Maximum quantity
                </div>
                <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                    by order
                  </div>
                </div>
              </div>
              <div className="items-center gap-[70px] top-[61px] flex w-[260px] absolute left-0">
                <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
                  <div className="relative w-[116px] h-9 mr-[-2.00px]">
                    <div className="relative w-[114px] h-9 bg-white rounded-[5px] border border-solid border-stroke">
                      <img
                        className="absolute w-px h-9 -top-px left-[33px] object-cover"
                        alt="Line"
                        src={Line_146_2}
                      />
                      <img
                        className="absolute w-px h-9 -top-px left-[79px] object-cover"
                        alt="Line"
                        src={Line_146_2}
                      />
                      <Minus1
                        className="!absolute !w-3 !h-3 !top-[11px] !left-2.5"
                        color="#1B4F4A"
                      />
                      <Plus1 className="!absolute !w-3 !h-3 !top-[11px] !left-[90px]" />
                      <div className="top-[5px] left-[47px] text-[#1b4f4a] text-base leading-6 absolute [font-family:'Inter',Helvetica] font-medium text-center tracking-[0] whitespace-nowrap">
                        13
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-base tracking-[0] leading-6 whitespace-nowrap">
              Good deal price
            </div>
          </div>
          <div className="flex h-[46px] items-center gap-2.5 pl-5 pr-4 py-3 relative self-stretch w-full bg-white rounded-md border border-solid border-stroke">
            <WebsiteMoney className="!relative !w-4 !h-4" color="#6B7280" />
            <div className="flex items-center gap-[116px] relative flex-1 grow mt-[-1.00px] mb-[-1.00px]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-darkdark-6 text-base tracking-[0] leading-6 whitespace-nowrap">
                ex. €29.00
              </div>
            </div>
          </div>
          <div className="flex flex-col w-[260px] items-start relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-base tracking-[0] leading-6 whitespace-nowrap">
              Estimated discount
            </div>
            <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                compared to the public price
              </p>
            </div>
          </div>
          <StyleTypePrimary
            className="!self-stretch !w-full"
            groupClassName="!w-[260px]"
            line={Line_60_1}
            lineClassName="!w-36"
            overlapGroupClassName={`bg-[url(${Line59})]`}
            tooltipPolygon={Polygon_1_1}
            tooltipPositionTopColorClassName="!absolute !left-[122px] !bg-[#1b4f4a] !top-0"
          />
          <div className="gap-2 border border-solid border-[#1b4f4a] flex items-center justify-center px-6 py-3 relative self-stretch w-full flex-[0_0_auto] rounded-md">
            <Plus3 className="!relative !w-5 !h-5" />
            <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-base text-center tracking-[0] leading-6 whitespace-nowrap">
              Add
            </button>
          </div>
        </div>
        <div className="gap-2 bg-white shadow-shadow-1 flex items-center justify-center px-6 py-3 relative self-stretch w-full flex-[0_0_auto] rounded-md">
          <Plus3 className="!relative !w-5 !h-5" />
          <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            Add another product
          </button>
        </div>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <div className="relative w-[260px] h-[97px]">
          <div className="flex-col items-start top-0 flex w-[260px] absolute left-0">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-lg tracking-[0] leading-[26px] whitespace-nowrap">
              Minimum products
            </div>
            <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                by order
              </div>
            </div>
          </div>
          <div className="items-center gap-[70px] top-[61px] flex w-[260px] absolute left-0">
            <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
              <div className="relative w-[116px] h-9 mr-[-2.00px]">
                <div className="relative w-[114px] h-9 bg-white rounded-[5px] border border-solid border-stroke">
                  <img
                    className="absolute w-px h-9 -top-px left-[33px] object-cover"
                    alt="Line"
                    src={Line_146_2}
                  />
                  <img
                    className="absolute w-px h-9 -top-px left-[79px] object-cover"
                    alt="Line"
                    src={Line_146_2}
                  />
                  <Minus1
                    className="!absolute !w-3 !h-3 !top-[11px] !left-2.5"
                    color="#1B4F4A"
                  />
                  <Plus1 className="!absolute !w-3 !h-3 !top-[11px] !left-[90px]" />
                  <div className="absolute top-[5px] left-[51px] [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                    2
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <CheckBox
          checked="OFF"
          checkedOffStyleClassName="!self-stretch !flex-[0_0_auto] !flex !w-full"
          divClassName="!text-[#1b4f4a] !tracking-[0] !text-base !flex-1 ![white-space:unset] ![font-style:unset] !font-normal ![font-family:'Inter',Helvetica] !leading-6 !w-[unset]"
          style="two"
          text="I accept the General Conditions of Sale"
          text1="ON"
        />
        <div className="gap-2.5 bg-[#1b4f4a] flex items-center justify-center px-6 py-3 relative self-stretch w-full flex-[0_0_auto] rounded-md">
          <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            Next step
          </button>
          <ArrowRight1 className="!relative !w-5 !h-5" color="white" />
        </div>
      </div>
    </div>
  );
};
