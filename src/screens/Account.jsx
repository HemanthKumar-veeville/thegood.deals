import React from "react";
import { ButtonGroup } from "../components/ButtonGroup/ButtonGroup";
// import { CirclePlus } from "./CirclePlus";
import { UserAlt } from "../icons/UserAlt";
// import { Users } from "./Users";

export const Account = () => {
  return (
    <div className="flex flex-col w-[360px] items-start relative bg-primary-background">
      <div className="flex flex-col w-[360px] items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto] z-0">
        <div className="relative w-fit mt-[-1.00px] [font-family: 'Inter-semiBold', Helvetica] font-semibold text-primary-color text-2xl text-center tracking-[0] leading-[30px] whitespace-nowrap">
          Hey Anthony
        </div>
        <div className="flex items-center justify-center gap-2.5 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-primary-color rounded-md">
          <UserAlt className="!relative !w-[18px] !h-[18px]" color="white" />{" "}
          <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter-Medium', Helvetica] font-medium text-white text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            Create a good deal
          </button>
        </div>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src="line-63.svg"
        />
        <div className="relative w-fit [font-family: 'Inter-SemiBold', Helvetica] font-semibold text-primary-color text-2xl text-center tracking-[0] leading-[30px] whitespace-nowrap">
          My good deals
        </div>
        <div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
          <ButtonGroup
            buttonClassName="!mt-[-1.00px]"
            className="!rounded-[6px_0px_0px_6px] !mt-[-1.50px] !ml-[-1.50px] !mb-[-1.50px] !flex-1 !flex !grow"
            icon={
              <UserAlt
                className="!relative !w-[18px] !h-[18px]"
                color="white"
              />
            }
            state="active"
            text="Created"
          />
          <ButtonGroup />
          <ButtonGroup
            buttonClassName="!text-primary-color"
            className="!rounded-[0px_6px_6px_0px] !mr-[-1.00px] !mt-[-1.00px] !mb-[-1.00px] !flex-1 !flex !grow"
            icon={
              <UserAlt
                className="!relative !w-[18px] !h-[18px]"
                color="white"
              />
            }
            state="default"
            text="Guests"
          />
        </div>
      </div>
    </div>
  );
};
