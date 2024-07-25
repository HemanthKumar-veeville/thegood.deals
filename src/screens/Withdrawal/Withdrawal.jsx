import React, { useState } from "react";
import { ArrowRight1 } from "../../icons/ArrowRight1";
import { UserAlt2 } from "../../icons/UserAlt2";
import { VerticalLine3 } from "../../icons/VerticalLine3/VerticalLine3";
import AppBar from "../../components/AppBar/AppBar";
import { Line63 } from "../../images";
import { useNavigate } from "react-router-dom";

export const Withdrawal = () => {
  const [withdrawalValidated, setWithdrawalValidated] = useState(false);
  const navigate = useNavigate();

  const handleValidateWithdrawal = () => {
    // Logic for validating the withdrawal
    setWithdrawalValidated(true);
    navigate("/thanks-withdrawal");
  };

  const handleBack = () => {
    // Logic for going back
    navigate("/admin-wallet");
  };

  return (
    <div className="flex flex-col w-screen h-screen items-start relative bg-primary-background mx-auto">
      <AppBar />
      <div className="flex flex-col w-screen items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]">
        <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-primary-color text-2xl tracking-[0] leading-[30px]">
          Validation of withdrawal
        </div>
        <div className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-base tracking-[0] leading-6">
          Stripe page
        </div>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <div
          className="flex items-center justify-center gap-2.5 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-primary-color rounded-md cursor-pointer"
          onClick={handleValidateWithdrawal}
        >
          <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-whitewhite text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            Validate the withdrawal
          </button>
          <ArrowRight1 className="!relative !w-5 !h-5" color="white" />
        </div>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <button
          className="all-[unset] box-border flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] rounded-md border border-solid border-primary-color cursor-pointer"
          onClick={handleBack}
        >
          <div className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            Back
          </div>
        </button>
      </div>
    </div>
  );
};
