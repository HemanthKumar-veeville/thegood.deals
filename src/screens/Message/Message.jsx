import React, { useEffect } from "react";
import { ArrowLeft } from "../../icons/ArrowLeft/ArrowLeft";
import { useNavigate, useLocation } from "react-router-dom";
import { Line } from "../../components/Line/Line";

const Message = ({ heading, description, action }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location?.pathname;
  const handleBack = () => {
    switch (path) {
      case "/reset-password-success":
        navigate("/auth?signin");
        break;
      default:
        navigate("/");
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col w-full h-screen items-start relative bg-primary-background mx-auto">
      <div className="flex flex-col w-full items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]">
        <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-primary-color text-2xl tracking-[0] leading-[30px]">
          {heading}
        </div>
        <p className="relative self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-primary-text-color text-base tracking-[0] leading-6">
          {description.split("\n").map((item, index) => (
            <>
              {item}
              <br />
            </>
          ))}
        </p>
        <Line />
        <div
          className="flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-whitewhite rounded-md shadow-shadow-1 cursor-pointer"
          onClick={handleBack}
        >
          <ArrowLeft className="!relative !w-5 !h-5" color="#1B4F4A" />
          <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            {action}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Message;
