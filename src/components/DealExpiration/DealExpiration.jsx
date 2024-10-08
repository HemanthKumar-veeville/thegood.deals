import React from "react";
import { useTranslation } from "react-i18next"; // Import translation hook

const DealExpiration = () => {
  const { t } = useTranslation(); // Initialize translation

  return (
    <>
      <div className="flex w-[250px] items-start gap-2.5 relative flex-[0_0_auto]">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-lg tracking-[0] leading-[26px] whitespace-nowrap">
          {t("dealExpiration.expirationDateTitle")}
        </div>
      </div>
      <div className="flex w-[250px] items-start gap-2.5 relative flex-[0_0_auto]">
        <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap">
          {t("dealExpiration.expirationDateDescription")}
        </p>
      </div>
    </>
  );
};

export default DealExpiration;
