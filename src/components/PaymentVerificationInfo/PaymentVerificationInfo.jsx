import React from "react";
import { useTranslation } from "react-i18next";

const AlertMessage = ({ children, bold }) => (
  <p
    className={`relative flex-1 mt-[-1.00px] ${
      bold ? "font-bold" : "font-medium"
    } text-[#004434] text-sm leading-5`}
  >
    {children}
  </p>
);

export const PaymentVerificationInfo = () => {
  const { t } = useTranslation();
  return (
    <div className="flex items-start gap-2 px-4 py-3 bg-greengreen-light-6 rounded-lg [font-family:'Inter',Helvetica]">
      <div className="w-5 h-5 flex-shrink-0 rounded-full bg-[#22AD5C] flex items-center justify-center p-3 mt-2">
        <span className="text-white text-sm font-medium">i</span>
      </div>
      <div className="flex-1 flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <AlertMessage bold>
            {t("payment_verification_info.title")}
          </AlertMessage>
        </div>
        <div className="flex items-start gap-3">
          <AlertMessage>
            {t("payment_verification_info.description")}
          </AlertMessage>
        </div>
      </div>
    </div>
  );
};
