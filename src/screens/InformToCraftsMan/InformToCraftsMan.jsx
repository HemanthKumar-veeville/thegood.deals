import React, { useState, useEffect } from "react";
import { ArrowRight } from "../../icons/ArrowRight";
import { CirclePlus55 } from "../../icons/CirclePlus55";
import { Envelope } from "../../icons/Envelope";
import { UserAlt2 } from "../../icons/UserAlt2";
import { VerticalLine2 } from "../../icons/VerticalLine2";
import { Line63 } from "../../images";
import AppBar from "../../components/AppBar/AppBar";
import { useNavigate } from "react-router-dom";

const InformToCraftsMan = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = () => {
    navigate("/thanks-admin");
  };

  const handleFinishLater = () => {
    navigate("/admin-draft-deal");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col w-screen h-screen items-start relative bg-primary-background mx-auto ">
      <AppBar />
      <div className="flex-col w-screen items-start gap-[15px] px-[35px] py-[15px] flex-[0_0_auto] flex relative">
        <p className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-primary-color text-2xl tracking-[0] leading-[30px]">
          Confirm the good deal with the artisian
        </p>
        <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-base tracking-[0] leading-6">
          We will send an email to the artisian to confirm the deal with him.
        </p>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <p className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap">
          Indicate the email of the artisian
        </p>
        <div className="flex h-[46px] items-center gap-2.5 pl-5 pr-4 py-3 relative self-stretch w-full bg-whitewhite rounded-md border border-solid border-stroke">
          <Envelope className="!relative !w-4 !h-4" color="#6B7280" />
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="ex. contact@gmail.com"
            className="flex-1 border-none outline-none"
          />
        </div>
        <div
          className="flex items-center justify-center gap-2.5 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-primary-color rounded-md cursor-pointer"
          onClick={handleSubmit}
        >
          <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-whitewhite text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            Send to artisian
          </button>
          <ArrowRight className="!relative !w-5 !h-5" color="white" />
        </div>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <div
          className="flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] rounded-md border border-solid border-primary-color cursor-pointer"
          onClick={handleFinishLater}
        >
          <CirclePlus55 className="!relative !w-5 !h-5" color="#1B4F4A" />
          <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            Finish later
          </button>
        </div>
      </div>
    </div>
  );
};

export default InformToCraftsMan;
