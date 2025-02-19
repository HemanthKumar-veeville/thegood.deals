import React, { useEffect } from "react";
import { useTranslation } from "react-i18next"; // Import useTranslation hook
import { ArrowLeft } from "../../icons/ArrowLeft/ArrowLeft";
import { useNavigate } from "react-router-dom";
import { Line } from "../../components/Line/Line";
import { OrderSummary } from "../../components/OrderSummary/OrderSummary";
import { PaymentVerificationInfo } from "../../components/PaymentVerificationInfo/PaymentVerificationInfo";
const ThanksPayment = () => {
  const { t } = useTranslation(); // Initialize the translation hook
  const navigate = useNavigate();
  // Extract orderId from the query parameters
  const queryParams = new URLSearchParams(location.search);
  const orderId = queryParams.get("orderId");

  const handleBackToHome = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col w-full h-screen items-start relative bg-primary-background mx-auto">
      <div className="flex flex-col w-full items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]">
        <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-primary-color text-2xl tracking-[0] leading-[30px]">
          {t("thanks_withdrawal.thanks")}
        </div>
        <p className="relative self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-primary-text-color text-base tracking-[0] leading-6">
          {t("thanks_withdrawal.debit_info")}
        </p>
        <PaymentVerificationInfo />
        <Line />
        <OrderSummary orderId={orderId} />
        <Line />
        <div
          className="flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-whitewhite rounded-md shadow-shadow-1 cursor-pointer"
          onClick={handleBackToHome}
        >
          <ArrowLeft className="!relative !w-5 !h-5" color="#1B4F4A" />
          <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            {t("thanks_withdrawal.back_to_home")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThanksPayment;
