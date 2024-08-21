import React, { useState, useEffect } from "react";
import { SizeXlCorner } from "../../components/SizeXlCorner";
import { ArrowLeft1 } from "../../icons/ArrowLeft1";
import { Box44 } from "../../icons/Box44";
import { ChevronDown1 } from "../../icons/ChevronDown1";
import { ChevronUp } from "../../icons/ChevronUp";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Line63 } from "../../images";

const Orders = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
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
    <div className="flex flex-col w-full h-screen items-start relative bg-primary-background mx-auto">
      <div className="flex flex-col w-full items-start gap-4 px-8 py-4 relative">
        <div
          className="flex items-center gap-3 pt-0 pb-5 px-0 relative self-stretch w-full border-b border-stroke cursor-pointer"
          onClick={handleBackToDeal}
        >
          <div className="inline-flex items-center gap-2">
            <ArrowLeft1 className="w-4.5 h-4.5" color="#637381" />
            <div className="mt-[-1px] font-medium text-primary-text-color text-base">
              {t("orders.back_to_deal")}
            </div>
          </div>
        </div>
        <div className="relative self-stretch font-semibold text-primary-color text-2xl">
          {t("orders.my_orders")}
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
                1 {t("orders.order_on_deal")}
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
              alt={t("orders.line_alt")}
              src={Line63}
            />
            <div className="flex flex-col items-start gap-1.5 self-stretch">
              <div className="flex items-center gap-2.5 self-stretch">
                <p className="mt-[-1px] font-normal text-primary-color text-base">
                  {t("orders.case_of_rose")}
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
                  {t("orders.case_of_white")}
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
                  {t("orders.total")}
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
          alt={t("orders.line_alt")}
          src={Line63}
        />
        {/* Repeat similar structure for Jane Doe and Donald Trump */}
      </div>
    </div>
  );
};

export default Orders;
