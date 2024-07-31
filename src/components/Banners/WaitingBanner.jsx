import React from "react";
import { SuccessAlert } from "../../components/WarningAlert";
import { Warning1 } from "../../icons/Warning1";

export const WaitingBanner = () => {
  return (
    <SuccessAlert
      className="!flex !bg-orangeorange-light-5"
      divClassName="!text-orangeorange-dark !tracking-[0] !text-sm !flex-1 ![white-space:unset] ![font-style:unset] !font-medium ![font-family:'Inter',Helvetica] !leading-5 !w-[unset]"
      frameClassName="!flex-1 !flex !grow"
      groupClassName="!bg-orangeorange"
      icon={
        <Warning1
          className="!absolute !w-3 !h-3 !top-1 !left-1"
          color="white"
        />
      }
      style="three"
      text="Waiting for confirmation of the deal from the artisian"
    />
  );
};
