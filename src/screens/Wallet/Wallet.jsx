import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next"; // Importing the hook for translation
import { ArrowLeft2 } from "../../icons/ArrowLeft2";
import { Box4 } from "../../icons/Box4";
import { FileExport2 } from "../../icons/FileExport2";
import { Line63 } from "../../images";
import { useNavigate } from "react-router-dom";

const Wallet = () => {
  const { t } = useTranslation(); // Using the translation hook
  const [fundsUnlocked, setFundsUnlocked] = useState(false);
  const navigate = useNavigate();

  const handleUnlockFunds = () => {
    setFundsUnlocked(true);
    navigate("/admin-withdrawal");
  };

  const handleBackToHome = () => {
    navigate("/account");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col w-screen h-screen items-start relative bg-primary-background mx-auto">
      <div className="flex flex-col w-screen items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]">
        <div className="flex items-center gap-3 pt-0 pb-5 px-0 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-stroke">
          <div
            className="inline-flex items-center gap-2 relative flex-[0_0_auto] cursor-pointer"
            onClick={handleBackToHome}
          >
            <ArrowLeft2
              className="!relative !w-[18px] !h-[18px]"
              color="#637381"
            />
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-text-color text-base tracking-[0] leading-6 whitespace-nowrap">
              {t("wallet.back_button")}
            </div>
          </div>
        </div>
        <div className="relative self-stretch [font-family:'Inter',Helvetica] font-semibold text-primary-color text-2xl tracking-[0] leading-[30px]">
          {t("wallet.title")}
        </div>
        <div className="flex flex-col items-start gap-6 p-5 self-stretch w-full bg-whitewhite rounded-[5px] shadow-shadow-1 relative flex-[0_0_auto]">
          <div className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]">
            <div className="inline-flex items-center gap-3.5 relative flex-[0_0_auto]">
              <div className="relative w-[50px] h-[50px]">
                <div className="relative h-[50px] rounded-[3px]">
                  <div className="absolute w-[50px] h-[50px] top-0 left-0 bg-purplepurple rounded-[3px] opacity-[0.08]" />
                  <Box4
                    className="!absolute !w-[26px] !h-[26px] !top-3 !left-3"
                    color="#8646F4"
                  />
                </div>
              </div>
              <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-darkdark text-base tracking-[0] leading-6 whitespace-nowrap">
                  {t("wallet.wallet_info.heading")}
                </div>
                <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                  {t("wallet.wallet_info.subheading")}
                </div>
              </div>
            </div>
            <div className="inline-flex items-end gap-[5px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-darkdark text-2xl tracking-[0] leading-[30px] whitespace-nowrap">
                {t("wallet.wallet_info.amount")}
              </div>
              <div className="relative w-[91px] h-[22px]" />
            </div>
          </div>
        </div>
        <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-base tracking-[0] leading-6">
          {t("wallet.info_text")}
        </p>
        <div
          className="flex items-center justify-center gap-2.5 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-primary-color rounded-md cursor-pointer"
          onClick={handleUnlockFunds}
        >
          <FileExport2 className="!relative !w-5 !h-5" />
          <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-whitewhite text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            {t("wallet.unlock_funds_button")}
          </button>
        </div>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt={t("wallet.line_alt")}
          src={Line63}
        />
        <div
          className="flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-whitewhite rounded-md shadow-shadow-1 cursor-pointer"
          onClick={handleBackToHome}
        >
          <ArrowLeft2 className="!relative !w-5 !h-5" color="#1B4F4A" />
          <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            {t("wallet.back_to_home_button")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
