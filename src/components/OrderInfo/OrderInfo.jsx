import React from "react";
import { InfoCircle8 } from "../../icons/InfoCircle8/InfoCircle8";

export const OrderInfo = () => {
  return (
    <div className="flex flex-col items-start gap-[15px] p-[15px] relative bg-whitewhite rounded-[5px] mx-auto w-full">
      <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex w-[162.5px] items-center gap-[5px] relative">
            <div className="relative w-fit mt-[-1.00px] font-body-extra-small-text-regular font-[number:var(--body-extra-small-text-regular-font-weight)] text-primary-text-color text-[length:var(--body-extra-small-text-regular-font-size)] text-center tracking-[var(--body-extra-small-text-regular-letter-spacing)] leading-[var(--body-extra-small-text-regular-line-height)] whitespace-nowrap [font-style:var(--body-extra-small-text-regular-font-style)]">
              Order
            </div>
          </div>
          <div className="inline-flex items-start justify-end gap-2.5 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-primary-color text-sm text-right tracking-[0] leading-[22px] whitespace-nowrap">
              58.00 €
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex w-full items-center gap-[5px] relative">
              <div className="relative w-fit mt-[-1.00px] font-body-extra-small-text-regular font-[number:var(--body-extra-small-text-regular-font-weight)] text-primary-text-color text-[length:var(--body-extra-small-text-regular-font-size)] text-center tracking-[var(--body-extra-small-text-regular-letter-spacing)] leading-[var(--body-extra-small-text-regular-line-height)] whitespace-nowrap [font-style:var(--body-extra-small-text-regular-font-style)]">
                Service Fees
              </div>
              <InfoCircle8 className="!relative !w-3.5 !h-3.5" />
            </div>
            <div className="inline-flex items-start justify-end gap-2.5 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-primary-color text-sm text-right tracking-[0] leading-[22px] whitespace-nowrap">
                2.90 €
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex w-[162.5px] items-center gap-[5px] relative">
            <div className="relative w-fit mt-[-1.00px] font-body-extra-small-text-regular font-[number:var(--body-extra-small-text-regular-font-weight)] text-primary-text-color text-[length:var(--body-extra-small-text-regular-font-size)] text-center tracking-[var(--body-extra-small-text-regular-letter-spacing)] leading-[var(--body-extra-small-text-regular-line-height)] whitespace-nowrap [font-style:var(--body-extra-small-text-regular-font-style)]">
              Payment Fees
            </div>
          </div>
          <div className="inline-flex items-start justify-end gap-2.5 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-primary-color text-sm text-right tracking-[0] leading-[22px] whitespace-nowrap">
              1.16 €
            </div>
          </div>
        </div>
        <div className="flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex w-[162.5px] items-center gap-[5px] relative">
            <div className="relative w-fit mt-[-1.00px] font-body-extra-small-text-regular font-[number:var(--body-extra-small-text-regular-font-weight)] text-primary-text-color text-[length:var(--body-extra-small-text-regular-font-size)] text-center tracking-[var(--body-extra-small-text-regular-letter-spacing)] leading-[var(--body-extra-small-text-regular-line-height)] whitespace-nowrap [font-style:var(--body-extra-small-text-regular-font-style)]">
              Delivery Fees
            </div>
          </div>
          <div className="inline-flex items-start justify-end gap-2.5 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-primary-color text-sm text-right tracking-[0] leading-[22px] whitespace-nowrap">
              1.00 €
            </div>
          </div>
        </div>
        <div className="flex flex-col items-end gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-fit font-body-extra-small-text-regular font-[number:var(--body-extra-small-text-regular-font-weight)] text-primary-text-color text-[length:var(--body-extra-small-text-regular-font-size)] text-center tracking-[var(--body-extra-small-text-regular-letter-spacing)] leading-[var(--body-extra-small-text-regular-line-height)] whitespace-nowrap [font-style:var(--body-extra-small-text-regular-font-style)]">
              TOTAL TTC
            </div>
            <div className="inline-flex items-start justify-end gap-2.5 relative flex-[0_0_auto]">
              <div className="[font-family:'Inter-Regular',Helvetica] font-normal text-primary-text-color leading-6 line-through relative w-fit mt-[-1.00px] text-sm text-right tracking-[0] whitespace-nowrap">
                135,98 €
              </div>
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-primary-color text-sm text-right tracking-[0] leading-[22px] whitespace-nowrap">
                63.06 €
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-fit font-body-extra-small-text-regular font-[number:var(--body-extra-small-text-regular-font-weight)] text-secondary-color text-[length:var(--body-extra-small-text-regular-font-size)] text-center tracking-[var(--body-extra-small-text-regular-letter-spacing)] leading-[var(--body-extra-small-text-regular-line-height)] whitespace-nowrap [font-style:var(--body-extra-small-text-regular-font-style)]">
            Save
          </div>
          <div className="font-body-small-medium font-[number:var(--body-small-medium-font-weight)] text-secondary-color leading-[var(--body-small-medium-line-height)] relative w-fit mt-[-1.00px] text-[length:var(--body-small-medium-font-size)] text-right tracking-[var(--body-small-medium-letter-spacing)] whitespace-nowrap [font-style:var(--body-small-medium-font-style)]">
            77,98 €
          </div>
        </div>
      </div>
    </div>
  );
};
