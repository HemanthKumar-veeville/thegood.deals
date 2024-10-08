import React from "react";
import { Minus1 } from "../../icons/Minus1";
import { Plus } from "../../icons/Plus";
import { Line_146_2 } from "../../images";
import { useTranslation } from "react-i18next";

const ProductQuantity = ({ label, value, setValue }) => {
  const { t } = useTranslation(); // Use translation hook

  const increaseQuantity = () => {
    setValue((prevValue) => prevValue + 1);
  };

  const decreaseQuantity = () => {
    setValue((prevValue) => (prevValue > 0 ? prevValue - 1 : 0));
  };

  return (
    <div className="relative w-[260px] h-[97px]">
      <div className="flex-col items-start top-0 flex w-[260px] absolute left-0">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-base tracking-[0] leading-6 whitespace-nowrap">
          {label}
        </div>
        <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap">
            {t("ProductQuantity.byOrder")}
          </div>
        </div>
      </div>
      <div className="items-center gap-[70px] top-[61px] flex w-[260px] absolute left-0">
        <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
          <div className="relative w-[116px] h-9 mr-[-2.00px]">
            <div className="relative w-[114px] h-9 bg-white rounded-[5px] border border-solid border-stroke">
              <img
                className="absolute w-px h-9 -top-px left-[33px] object-cover"
                alt={t("ProductQuantity.lineAltText")}
                src={Line_146_2}
              />
              <img
                className="absolute w-px h-9 -top-px left-[79px] object-cover"
                alt={t("ProductQuantity.lineAltText")}
                src={Line_146_2}
              />
              <div onClick={decreaseQuantity} className="cursor-pointer">
                <Minus1
                  className="!absolute !w-3 !h-3 !top-[11px] !left-2.5 cursor-pointer"
                  color="#1B4F4A"
                />
              </div>
              <div onClick={increaseQuantity} className="cursor-pointer">
                <Plus className="!absolute !w-3 !h-3 !top-[11px] !left-[90px] cursor-pointer" />
              </div>
              <div className="absolute top-[5px] left-[51px] [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                {value}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductQuantity;
