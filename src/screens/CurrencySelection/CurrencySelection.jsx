import React, { useState } from "react";
import { Button } from "../../components/Button/Button";
import { ArrowLeft1 } from "../../icons/ArrowLeft1";
import { ChevronDown } from "../../icons/ChevronDown";
import AppBar from "../../components/AppBar/AppBar";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const CurrencySelection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [selectedCurrency, setSelectedCurrency] = useState("USD");
  const [showDropdown, setShowDropdown] = useState(false);
  const currencies = ["USD", "Euro"];

  const handleBack = () => {
    navigate("/settings");
  };

  const handleCurrencyChange = (currency) => {
    setSelectedCurrency(currency);
    setShowDropdown(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const confirmCurrency = () => {
    console.log({ selectedCurrency });
  };

  return (
    <div className="flex flex-col w-full h-screen items-start relative bg-primary-background">
      <div className="inline-flex flex-col items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]">
        <div
          className="flex w-[290px] items-center gap-3 pt-0 pb-5 px-0 relative flex-[0_0_auto] border-b [border-bottom-style:solid] border-stroke"
          onClick={handleBack}
        >
          <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
            <ArrowLeft1
              className="!relative !w-[18px] !h-[18px]"
              color="#637381"
            />
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#637381] text-base tracking-[0] leading-6 whitespace-nowrap">
              {t("common.back")}
            </div>
          </div>
        </div>
        <div className="relative w-fit font-heading-6 font-[number:var(--heading-6-font-weight)] text-[#1b4f4a] text-[length:var(--heading-6-font-size)] text-center tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] whitespace-nowrap [font-style:var(--heading-6-font-style)]">
          {t("currency.change")}
        </div>
        <div className="flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full">
          <div
            className="flex items-center gap-2.5 px-5 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-stroke cursor-pointer"
            onClick={toggleDropdown}
          >
            <div className="flex items-center justify-between relative flex-1 grow">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#1b4f4a] text-base tracking-[0] leading-6 whitespace-nowrap">
                {selectedCurrency}
              </div>
              <ChevronDown className="!relative !w-4 !h-4" color="#1B4F4A" />
            </div>
          </div>
          {showDropdown && (
            <div className="absolute top-20 left-0 w-full bg-white border border-solid border-stroke rounded-md z-10">
              {currencies.map((currency) => (
                <div
                  key={currency}
                  className="px-5 py-3 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleCurrencyChange(currency)}
                >
                  {currency}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="w-full" onClick={confirmCurrency}>
          <Button
            buttonText={t("common.confirm")}
            className="!self-stretch !flex-[0_0_auto] !flex !w-full"
            color="primary"
            kind="primary"
            round="semi-round"
            state="default"
          />
        </div>
      </div>
    </div>
  );
};

export default CurrencySelection;
