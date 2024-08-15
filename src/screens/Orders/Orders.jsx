import React, { useState, useEffect } from "react";
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

const Orders = () => {
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col w-screen h-screen items-start relative bg-primary-background mx-auto">
      <AppBar />
      <div className="flex flex-col w-screen items-start gap-4 px-8 py-4 relative">
        <div
          className="flex items-center gap-3 pt-0 pb-5 px-0 relative self-stretch w-full border-b border-stroke cursor-pointer"
          onClick={handleBackToDeal}
        >
          <div className="inline-flex items-center gap-2">
            <ArrowLeft1 className="w-4.5 h-4.5" color="#637381" />
            <div className="mt-[-1px] font-medium text-primary-text-color text-base">
              Back to the deal
            </div>
          </div>
        </div>
        <div className="relative self-stretch font-semibold text-primary-color text-2xl">
          My orders
        </div>
        <div
          className="inline-flex items-center gap-4 cursor-pointer"
          onClick={() => handleToggleOrderDetails("abraham")}
        >
          <SizeXlCorner
            className="h-12.5 w-12.5"
            divClassName="tracking-0 text-lg font-semibold left-2 leading-10 top-1"
            text="A.T."
          />
          <div className="inline-flex flex-col items-start gap-1.5">
            <div className="mt-[-1px] font-medium text-primary-color text-base">
              Abraham Thomas
            </div>
            <div className="inline-flex items-center gap-2.5">
              <Box44 className="w-5 h-5" />
              <p className="mt-[-1px] font-normal text-primary-text-color text-sm leading-5.5">
                1 order on the deal
              </p>
            </div>
          </div>
          {isOrderDetailsVisible.abraham ? (
            <ChevronUp className="w-6 h-6" color="#1B4F4A" />
          ) : (
            <ChevronDown1 className="w-6 h-6" color="#1B4F4A" />
          )}
        </div>
        <div
          className={`transition-all duration-500 overflow-hidden ${
            isOrderDetailsVisible.abraham ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="flex flex-col items-start gap-4 pt-0 pb-4 px-4 bg-whitewhite">
            <img
              className="self-stretch w-full h-px object-cover"
              alt="Line"
              src={Line63}
            />
            <div className="flex flex-col items-start gap-1.5 self-stretch">
              <div className="flex items-center gap-2.5 self-stretch">
                <p className="mt-[-1px] font-normal text-primary-color text-base">
                  Case of Rosé - 6 bottles
                </p>
              </div>
              <div className="flex items-end justify-between self-stretch">
                <div className="flex items-center gap-2.5 grow">
                  <div className="mt-[-1px] font-semibold text-secondary-color text-base">
                    3 products
                  </div>
                </div>
                <div className="inline-flex flex-col items-end">
                  <p className="mt-[-1px] font-semibold text-secondary-color text-base text-right">
                    €29.00 x 3 = €87
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-1.5 self-stretch">
              <div className="flex items-center gap-2.5 self-stretch">
                <p className="mt-[-1px] font-normal text-primary-color text-base">
                  Case of White - 6 bottles
                </p>
              </div>
              <div className="flex items-end justify-between self-stretch">
                <div className="flex items-center gap-2.5 grow">
                  <div className="mt-[-1px] font-semibold text-secondary-color text-base">
                    3 products
                  </div>
                </div>
                <div className="inline-flex flex-col items-end">
                  <p className="mt-[-1px] font-semibold text-secondary-color text-base text-right">
                    €29.00 x 3 = €87
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-end justify-between self-stretch">
              <div className="flex items-center gap-2.5 grow">
                <div className="mt-[-1px] font-semibold text-primary-color text-lg">
                  Total
                </div>
              </div>
              <div className="inline-flex flex-col items-end">
                <div className="mt-[-1px] font-semibold text-primary-color text-lg text-right">
                  €174
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <div
          className="inline-flex items-center gap-4 cursor-pointer"
          onClick={() => handleToggleOrderDetails("jane")}
        >
          <SizeXlCorner
            className="h-12.5 w-12.5"
            divClassName="tracking-0 text-lg font-semibold left-2.25 leading-10 top-1"
            text="J.D."
          />
          <div className="inline-flex flex-col items-start gap-1.5">
            <div className="mt-[-1px] font-medium text-primary-color text-base">
              Jane Doe
            </div>
            <div className="inline-flex items-center gap-2.5">
              <Box44 className="w-5 h-5" />
              <p className="mt-[-1px] font-normal text-primary-text-color text-sm leading-5.5">
                1 order on the deal
              </p>
            </div>
          </div>
          {isOrderDetailsVisible.jane ? (
            <ChevronUp className="w-6 h-6" color="#1B4F4A" />
          ) : (
            <ChevronDown1 className="w-6 h-6" color="#1B4F4A" />
          )}
        </div>
        <div
          className={`transition-all duration-500 overflow-hidden ${
            isOrderDetailsVisible.jane ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="flex flex-col items-start gap-4 pt-0 pb-4 px-4 bg-whitewhite">
            <img
              className="self-stretch w-full h-px object-cover"
              alt="Line"
              src={Line63}
            />
            <div className="flex flex-col items-start gap-1.5 self-stretch">
              <div className="flex items-center gap-2.5 self-stretch">
                <p className="mt-[-1px] font-normal text-primary-color text-base">
                  Case of Rosé - 6 bottles
                </p>
              </div>
              <div className="flex items-end justify-between self-stretch">
                <div className="flex items-center gap-2.5 grow">
                  <div className="mt-[-1px] font-semibold text-secondary-color text-base">
                    3 products
                  </div>
                </div>
                <div className="inline-flex flex-col items-end">
                  <p className="mt-[-1px] font-semibold text-secondary-color text-base text-right">
                    €29.00 x 3 = €87
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-1.5 self-stretch">
              <div className="flex items-center gap-2.5 self-stretch">
                <p className="mt-[-1px] font-normal text-primary-color text-base">
                  Case of White - 6 bottles
                </p>
              </div>
              <div className="flex items-end justify-between self-stretch">
                <div className="flex items-center gap-2.5 grow">
                  <div className="mt-[-1px] font-semibold text-secondary-color text-base">
                    3 products
                  </div>
                </div>
                <div className="inline-flex flex-col items-end">
                  <p className="mt-[-1px] font-semibold text-secondary-color text-base text-right">
                    €29.00 x 3 = €87
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-end justify-between self-stretch">
              <div className="flex items-center gap-2.5 grow">
                <div className="mt-[-1px] font-semibold text-primary-color text-lg">
                  Total
                </div>
              </div>
              <div className="inline-flex flex-col items-end">
                <div className="mt-[-1px] font-semibold text-primary-color text-lg text-right">
                  €174
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <div
          className="inline-flex items-center gap-4 cursor-pointer"
          onClick={() => handleToggleOrderDetails("donald")}
        >
          <SizeXlCorner
            className="h-12.5 w-12.5"
            divClassName="tracking-0 text-lg font-semibold left-2 leading-10 top-1"
            text="D.T."
          />
          <div className="inline-flex flex-col items-start gap-1.5">
            <div className="mt-[-1px] font-medium text-primary-color text-base">
              Donald Trump
            </div>
            <div className="inline-flex items-center gap-2.5">
              <Box44 className="w-5 h-5" />
              <p className="mt-[-1px] font-normal text-primary-text-color text-sm leading-5.5">
                1 order on the deal
              </p>
            </div>
          </div>
          {isOrderDetailsVisible.donald ? (
            <ChevronUp className="w-6 h-6" color="#1B4F4A" />
          ) : (
            <ChevronDown1 className="w-6 h-6" color="#1B4F4A" />
          )}
        </div>
        <div
          className={`transition-all duration-500 overflow-hidden ${
            isOrderDetailsVisible.donald ? "max-h-screen" : "max-h-0"
          }`}
        >
          <div className="flex flex-col items-start gap-4 pt-0 pb-4 px-4 bg-whitewhite">
            <img
              className="self-stretch w-full h-px object-cover"
              alt="Line"
              src={Line63}
            />
            <div className="flex flex-col items-start gap-1.5 self-stretch">
              <div className="flex items-center gap-2.5 self-stretch">
                <p className="mt-[-1px] font-normal text-primary-color text-base">
                  Case of Rosé - 6 bottles
                </p>
              </div>
              <div className="flex items-end justify-between self-stretch">
                <div className="flex items-center gap-2.5 grow">
                  <div className="mt-[-1px] font-semibold text-secondary-color text-base">
                    3 products
                  </div>
                </div>
                <div className="inline-flex flex-col items-end">
                  <p className="mt-[-1px] font-semibold text-secondary-color text-base text-right">
                    €29.00 x 3 = €87
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start gap-1.5 self-stretch">
              <div className="flex items-center gap-2.5 self-stretch">
                <p className="mt-[-1px] font-normal text-primary-color text-base">
                  Case of White - 6 bottles
                </p>
              </div>
              <div className="flex items-end justify-between self-stretch">
                <div className="flex items-center gap-2.5 grow">
                  <div className="mt-[-1px] font-semibold text-secondary-color text-base">
                    3 products
                  </div>
                </div>
                <div className="inline-flex flex-col items-end">
                  <p className="mt-[-1px] font-semibold text-secondary-color text-base text-right">
                    €29.00 x 3 = €87
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-end justify-between self-stretch">
              <div className="flex items-center gap-2.5 grow">
                <div className="mt-[-1px] font-semibold text-primary-color text-lg">
                  Total
                </div>
              </div>
              <div className="inline-flex flex-col items-end">
                <div className="mt-[-1px] font-semibold text-primary-color text-lg text-right">
                  €174
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
