import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Payment from "../../components/Payment";
import { OrderInfo } from "../../components/OrderInfo/OrderInfo";
import { Line } from "../../components/Line/Line";

const Withdrawal = ({ heading, btnText, stripePromise }) => {
  const [withdrawalValidated, setWithdrawalValidated] = useState(false);
  const navigate = useNavigate();
  const { t } = useTranslation();

  // Extract dealId and orderId from query params
  const searchParams = new URLSearchParams(location.search);
  const dealId = searchParams.get("dealId");
  const orderId = searchParams.get("orderId");

  const handleValidateWithdrawal = () => {
    // Logic for validating the withdrawal
    setWithdrawalValidated(true);
    navigate("/thanks-withdrawal");
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col w-full h-full items-start relative bg-primary-background mx-auto">
      <div className="flex flex-col w-full items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]">
        <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-primary-color text-2xl tracking-[0] leading-[30px]">
          {heading}
        </div>
        <OrderInfo orderId={orderId} />
        <Payment
          stripePromise={stripePromise}
          heading={heading}
          btnText={btnText}
          orderId={orderId}
        />
        <Line />
        <button
          className="all-[unset] box-border flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] rounded-md border border-solid border-primary-color cursor-pointer"
          onClick={handleBack}
        >
          <div className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            {t("withdrawal.back_button")} {/* Translation for 'Back' button */}
          </div>
        </button>
      </div>
    </div>
  );
};

export default Withdrawal;
