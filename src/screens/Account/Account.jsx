import React from "react";
import { Badges } from "../../components/Badges";
import { ButtonGroup } from "../../components/ButtonGroup";
import { CardDeal } from "../../components/CardDeal";
import { StyleTypePrimaryWrapper } from "../../components/StyleTypePrimaryWrapper";
import { SuccessAlert } from "../../components/SuccessAlert";
import { ChatAlt6 } from "../../icons/ChatAlt6";
import { CheckmarkCircle5 } from "../../icons/CheckmarkCircle5";
import { CirclePlus92 } from "../../icons/CirclePlus92";
import { ClockDollar1 } from "../../icons/ClockDollar1";
import { Cog2 } from "../../icons/Cog2";
import { UserAlt2 } from "../../icons/UserAlt2";
import { UserAlt5 } from "../../icons/UserAlt5";
import { UserLock1 } from "../../icons/UserLock1";
import { Users3 } from "../../icons/Users3";
import { VerticalLine3 } from "../../icons/VerticalLine3/VerticalLine3";
import { Line63, Line_60_1, Line_59_2 } from "../../images";

export const Account = () => {
  return (
    <div className="flex flex-col w-[360px] items-start relative bg-primary-background mx-auto">
      <header className="flex flex-col w-[360px] h-16 items-start relative z-[1] bg-primary-background [border-top-style:none] [border-right-style:none] border-b [border-bottom-style:solid] [border-left-style:none] border-stroke">
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
            <UserAlt5 className="!relative !w-6 !h-6" color="#1B4F4A" />
          </div>
        </div>
      </header>
      <div className="flex flex-col w-[360px] items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto] z-0">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-primary-color text-2xl text-center tracking-[0] leading-[30px] whitespace-nowrap">
          Hey 👋🏻 Anthony
        </div>
        <div className="flex items-center justify-center gap-2.5 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-primary-color rounded-md">
          <CirclePlus92 className="!relative !w-5 !h-5" />
          <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-whitewhite text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            Create a good deal
          </button>
        </div>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <div className="relative w-fit [font-family:'Inter',Helvetica] font-semibold text-primary-color text-2xl text-center tracking-[0] leading-[30px] whitespace-nowrap">
          My good deals
        </div>
        <div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
          <ButtonGroup
            buttonClassName="!mt-[-1.00px]"
            className="!rounded-[6px_0px_0px_6px] !mt-[-1.50px] !ml-[-1.50px] !mb-[-1.50px] !flex-1 !flex !grow"
            icon={
              <UserAlt5
                className="!relative !w-[18px] !h-[18px]"
                color="white"
              />
            }
            state="active"
            text="Created"
          />
          <ButtonGroup
            buttonClassName="!text-primary-color"
            className="!rounded-[0px_6px_6px_0px] !mr-[-1.00px] !mt-[-1.00px] !mb-[-1.00px] !flex-1 !flex !grow"
            icon={<Users3 className="!relative !w-[18px] !h-[18px]" />}
            state="default"
            text="Guests"
          />
        </div>
        <CardDeal
          badgesColor="success"
          badgesDivClassName="!tracking-[0] !text-xs ![font-style:unset] !font-medium ![font-family:'Inter',Helvetica] !leading-5"
          badgesText1="Finished"
          caissesDeVinsClassName="!tracking-[0] !text-base ![font-style:unset] !font-bold ![font-family:'Inter',Helvetica] !leading-6"
          className="!flex-[0_0_auto]"
          divClassName="!tracking-[0] !text-sm ![font-style:unset] !font-medium ![font-family:'Inter',Helvetica] !leading-[22px]"
          divClassNameOverride="!tracking-[0] !text-sm ![font-style:unset] !font-normal ![font-family:'Inter',Helvetica] !leading-[22px]"
          override={
            <StyleTypePrimaryWrapper
              className="!self-stretch !w-full !relative"
              divClassName="!tracking-[0] !text-xs ![font-style:unset] !font-medium ![font-family:'Inter',Helvetica] !left-[92px] !leading-5"
              groupClassName="!w-[260px]"
              line={Line_60_1}
              lineClassName="!w-[232px]"
              overlapClassName="!w-[260px]"
              overlapGroupClassName={`bg-[url(${Line_59_2})]`}
            />
          }
          text="Wine cratesDomaine de Cigaluse"
          text1="Deal finished"
        />
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
          <UserAlt2 className="!relative !w-5 !h-5" />
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-base tracking-[0] leading-6 whitespace-nowrap">
            My information
          </div>
        </div>
        <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
          <ClockDollar1 className="!relative !w-5 !h-5" color="#1B4F4A" />
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-base tracking-[0] leading-6 whitespace-nowrap">
            Wallet details
          </div>
        </div>
        <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
          <Cog2 className="!relative !w-5 !h-5" color="#1B4F4A" />
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-base tracking-[0] leading-6 whitespace-nowrap">
            Settings
          </div>
        </div>
        <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
          <ChatAlt6 className="!relative !w-5 !h-5" color="#1B4F4A" />
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-base tracking-[0] leading-6 whitespace-nowrap">
            Acquire help
          </div>
        </div>
        <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
          <UserLock1 className="!relative !w-5 !h-5" color="#1B4F4A" />
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-base tracking-[0] leading-6 whitespace-nowrap">
            Sign out
          </div>
        </div>
      </div>
    </div>
  );
};
