import React from "react";
import { ArrowLeft } from "../../icons/ArrowLeft/ArrowLeft";
import { UserAlt } from "../../icons/UserAlt";
import { VerticalLine } from "../../icons/VerticalLine";
import { Line63 } from "../../images";
import AppBar from "../../components/AppBar/AppBar";
import { useNavigate } from "react-router-dom";

export const ThanksToAdmin = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/account");
  };

  return (
    <div className="flex flex-col w-[360px] h-screen items-start relative bg-primary-background mx-auto">
      <AppBar />
      <div className="flex flex-col w-[360px] items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]">
        <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-primary-color text-2xl tracking-[0] leading-[30px]">
          THANKS ! . 🎉
        </div>
        <p className="relative self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-primary-text-color text-base tracking-[0] leading-6">
          Once the deal is confirmed by the craftsman,
          <br />
          we will notify you by email.
        </p>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <div
          className="flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-whitewhite rounded-md shadow-shadow-1 cursor-pointer"
          onClick={handleBack}
        >
          <ArrowLeft className="!relative !w-5 !h-5" color="#1B4F4A" />
          <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};
