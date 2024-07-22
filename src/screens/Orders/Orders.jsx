import React, { useState } from "react";
import { SizeXlCorner } from "../../components/SizeXlCorner";
import { ArrowLeft1 } from "../../icons/ArrowLeft1";
import { Box44 } from "../../icons/Box44";
import { ChevronDown1 } from "../../icons/ChevronDown1";
import { ChevronUp } from "../../icons/ChevronUp";
import { UserAlt4 } from "../../icons/UserAlt4/UserAlt4";
import { VerticalLine3 } from "../../icons/VerticalLine3/VerticalLine3";
import AppBar from "../../components/AppBar/AppBar";
import { Line63 } from "../../images";
import { useNavigate } from "react-router-dom";

export const Orders = () => {
  const navigate = useNavigate();
  const [isOrderDetailsVisible, setIsOrderDetailsVisible] = useState({
    abraham: true,
    jane: false,
    donald: false,
  });

  const handleToggleOrderDetails = (name) => {
    setIsOrderDetailsVisible((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  const handleBackToDeal = () => {
    navigate("/admin-active-deal");
  };

  return (
    <div className="flex flex-col w-[360px] h-[640px] items-start relative bg-primary-background mx-auto">
      <AppBar />
      <div className="flex flex-col w-[360px] items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]">
        <div
          className="flex items-center gap-3 pt-0 pb-5 px-0 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-stroke cursor-pointer"
          onClick={handleBackToDeal}
        >
          <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
            <ArrowLeft1
              className="!relative !w-[18px] !h-[18px]"
              color="#637381"
            />
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-text-color text-base tracking-[0] leading-6 whitespace-nowrap">
              Back to the deal
            </div>
          </div>
        </div>
        <div className="relative self-stretch [font-family:'Inter',Helvetica] font-semibold text-primary-color text-2xl tracking-[0] leading-[30px]">
          My orders
        </div>
        <div
          className="inline-flex items-center gap-[15px] relative flex-[0_0_auto] cursor-pointer"
          onClick={() => handleToggleOrderDetails("abraham")}
        >
          <SizeXlCorner
            className="!h-[50px] !w-[50px]"
            divClassName="!tracking-[0] !text-lg ![font-style:unset] !font-semibold ![font-family:'Inter',Helvetica] !left-2 !leading-10 !top-1"
            text="A.T."
          />
          <div className="inline-flex flex-col items-start gap-[5px] relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap">
              Abraham Thomas
            </div>
            <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
              <Box44 className="!relative !w-5 !h-5" />
              <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                1 order on the deal
              </p>
            </div>
          </div>
          {isOrderDetailsVisible.abraham ? (
            <ChevronUp className="!relative !w-6 !h-6" color="#1B4F4A" />
          ) : (
            <ChevronDown1 className="!relative !w-6 !h-6" color="#1B4F4A" />
          )}
        </div>
        {isOrderDetailsVisible.abraham && (
          <div className="flex flex-col items-start gap-[15px] pt-0 pb-[15px] px-[15px] relative self-stretch w-full flex-[0_0_auto] bg-whitewhite">
            <img
              className="mt-[-1.00px] relative self-stretch w-full h-px object-cover"
              alt="Line"
              src={Line63}
            />
            <div className="flex flex-col items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap">
                  Case of Rosé - 6 bottles
                </p>
              </div>
              <div className="flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-center gap-2.5 relative flex-1 grow">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-secondary-color text-base tracking-[0] leading-6 whitespace-nowrap">
                    3 products
                  </div>
                </div>
                <div className="inline-flex flex-col items-end relative flex-[0_0_auto]">
                  <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-secondary-color text-base text-right tracking-[0] leading-6 whitespace-nowrap">
                    €29.00 x 3 = €87
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap">
                  Case of White - 6 bottles
                </p>
              </div>
              <div className="flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-center gap-2.5 relative flex-1 grow">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-secondary-color text-base tracking-[0] leading-6 whitespace-nowrap">
                    3 products
                  </div>
                </div>
                <div className="inline-flex flex-col items-end relative flex-[0_0_auto]">
                  <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-secondary-color text-base text-right tracking-[0] leading-6 whitespace-nowrap">
                    €29.00 x 3 = €87
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center gap-2.5 relative flex-1 grow">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-primary-color text-lg tracking-[0] leading-[26px] whitespace-nowrap">
                  Total
                </div>
              </div>
              <div className="inline-flex flex-col items-end relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-primary-color text-lg text-right tracking-[0] leading-[26px] whitespace-nowrap">
                  €174
                </div>
              </div>
            </div>
          </div>
        )}
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <div
          className="inline-flex items-center gap-[15px] relative flex-[0_0_auto] cursor-pointer"
          onClick={() => handleToggleOrderDetails("jane")}
        >
          <SizeXlCorner
            className="!h-[50px] !w-[50px]"
            divClassName="!tracking-[0] !text-lg ![font-style:unset] !font-semibold ![font-family:'Inter',Helvetica] !left-[9px] !leading-10 !top-1"
            text="J.D."
          />
          <div className="inline-flex flex-col items-start gap-[5px] relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap">
              Jane Doe
            </div>
            <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
              <Box44 className="!relative !w-5 !h-5" />
              <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                1 order on the deal
              </p>
            </div>
          </div>
          {isOrderDetailsVisible.jane ? (
            <ChevronUp className="!relative !w-6 !h-6" color="#1B4F4A" />
          ) : (
            <ChevronDown1 className="!relative !w-6 !h-6" color="#1B4F4A" />
          )}
        </div>
        {isOrderDetailsVisible.jane && (
          <div className="flex flex-col items-start gap-[15px] pt-0 pb-[15px] px-[15px] relative self-stretch w-full flex-[0_0_auto] bg-whitewhite">
            <img
              className="mt-[-1.00px] relative self-stretch w-full h-px object-cover"
              alt="Line"
              src={Line63}
            />
            <div className="flex flex-col items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap">
                  Case of Rosé - 6 bottles
                </p>
              </div>
              <div className="flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-center gap-2.5 relative flex-1 grow">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-secondary-color text-base tracking-[0] leading-6 whitespace-nowrap">
                    3 products
                  </div>
                </div>
                <div className="inline-flex flex-col items-end relative flex-[0_0_auto]">
                  <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-secondary-color text-base text-right tracking-[0] leading-6 whitespace-nowrap">
                    €29.00 x 3 = €87
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap">
                  Case of White - 6 bottles
                </p>
              </div>
              <div className="flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-center gap-2.5 relative flex-1 grow">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-secondary-color text-base tracking-[0] leading-6 whitespace-nowrap">
                    3 products
                  </div>
                </div>
                <div className="inline-flex flex-col items-end relative flex-[0_0_auto]">
                  <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-secondary-color text-base text-right tracking-[0] leading-6 whitespace-nowrap">
                    €29.00 x 3 = €87
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center gap-2.5 relative flex-1 grow">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-primary-color text-lg tracking-[0] leading-[26px] whitespace-nowrap">
                  Total
                </div>
              </div>
              <div className="inline-flex flex-col items-end relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-primary-color text-lg text-right tracking-[0] leading-[26px] whitespace-nowrap">
                  €174
                </div>
              </div>
            </div>
          </div>
        )}
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <div
          className="inline-flex items-center gap-[15px] relative flex-[0_0_auto] cursor-pointer"
          onClick={() => handleToggleOrderDetails("donald")}
        >
          <SizeXlCorner
            className="!h-[50px] !w-[50px]"
            divClassName="!tracking-[0] !text-lg ![font-style:unset] !font-semibold ![font-family:'Inter',Helvetica] !left-2 !leading-10 !top-1"
            text="D.T."
          />
          <div className="inline-flex flex-col items-start gap-[5px] relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap">
              Donald Trump
            </div>
            <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
              <Box44 className="!relative !w-5 !h-5" />
              <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                1 order on the deal
              </p>
            </div>
          </div>
          {isOrderDetailsVisible.donald ? (
            <ChevronUp className="!relative !w-6 !h-6" color="#1B4F4A" />
          ) : (
            <ChevronDown1 className="!relative !w-6 !h-6" color="#1B4F4A" />
          )}
        </div>
        {isOrderDetailsVisible.donald && (
          <div className="flex flex-col items-start gap-[15px] pt-0 pb-[15px] px-[15px] relative self-stretch w-full flex-[0_0_auto] bg-whitewhite">
            <img
              className="mt-[-1.00px] relative self-stretch w-full h-px object-cover"
              alt="Line"
              src={Line63}
            />
            <div className="flex flex-col items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap">
                  Case of Rosé - 6 bottles
                </p>
              </div>
              <div className="flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-center gap-2.5 relative flex-1 grow">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-secondary-color text-base tracking-[0] leading-6 whitespace-nowrap">
                    3 products
                  </div>
                </div>
                <div className="inline-flex flex-col items-end relative flex-[0_0_auto]">
                  <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-secondary-color text-base text-right tracking-[0] leading-6 whitespace-nowrap">
                    €29.00 x 3 = €87
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap">
                  Case of White - 6 bottles
                </p>
              </div>
              <div className="flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex items-center gap-2.5 relative flex-1 grow">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-secondary-color text-base tracking-[0] leading-6 whitespace-nowrap">
                    3 products
                  </div>
                </div>
                <div className="inline-flex flex-col items-end relative flex-[0_0_auto]">
                  <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-secondary-color text-base text-right tracking-[0] leading-6 whitespace-nowrap">
                    €29.00 x 3 = €87
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center gap-2.5 relative flex-1 grow">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-primary-color text-lg tracking-[0] leading-[26px] whitespace-nowrap">
                  Total
                </div>
              </div>
              <div className="inline-flex flex-col items-end relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-primary-color text-lg text-right tracking-[0] leading-[26px] whitespace-nowrap">
                  €174
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
