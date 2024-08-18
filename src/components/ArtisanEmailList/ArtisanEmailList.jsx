import React, { useState } from "react";
import { Box4 } from "../../icons/Box4";
import { ChevronDown } from "../../icons/ChevronDown";
import { ChevronUp } from "../../icons/ChevronUp";
import { Send1 } from "../../icons/Send1";
import { LogoTheGoodDeals } from "../LogoTheGoodDeals";
import { SizeXlCorner } from "../SizeXlCorner";
import { Line63 } from "../../images"; // Ensure correct import path
import { useTranslation } from "react-i18next"; // Import useTranslation hook

export const ArtisanEmailList = ({ HEADERClassName }) => {
  const { t } = useTranslation(); // Initialize the translation hook

  const items = [
    {
      initials: "AT",
      name: "Abraham Thomas",
      orders: 1,
      expanded: true,
      products: [
        {
          name: t("artisanEmailList.caseOfRose"),
          quantity: 3,
          price: "29.00 €",
          totalPrice: "87 €",
        },
        {
          name: t("artisanEmailList.caseOfWhite"),
          quantity: 3,
          price: "29.00 €",
          totalPrice: "87 €",
        },
      ],
      totalPrice: "174 €",
    },
    {
      initials: "JD",
      name: "Jane Doe",
      orders: 1,
      expanded: false,
      products: [
        {
          name: t("artisanEmailList.caseOfRose"),
          quantity: 3,
          price: "29.00 €",
          totalPrice: "87 €",
        },
        {
          name: t("artisanEmailList.caseOfWhite"),
          quantity: 3,
          price: "29.00 €",
          totalPrice: "87 €",
        },
      ],
      totalPrice: "174 €",
    },
    {
      initials: "KD",
      name: "Kate Doe",
      orders: 1,
      expanded: false,
      products: [
        {
          name: t("artisanEmailList.caseOfRose"),
          quantity: 3,
          price: "29.00 €",
          totalPrice: "87 €",
        },
        {
          name: t("artisanEmailList.caseOfWhite"),
          quantity: 3,
          price: "29.00 €",
          totalPrice: "87 €",
        },
      ],
      totalPrice: "174 €",
    },
  ];

  const [expandedItems, setExpandedItems] = useState(
    items.map((item) => item.expanded)
  );

  const toggleExpand = (index) => {
    setExpandedItems((prev) =>
      prev.map((expanded, i) => (i === index ? !expanded : expanded))
    );
  };

  const handleConfirm = () => {
    alert(t("artisanEmailList.confirmationAlert"));
  };

  // Calculate total price with proper parsing of the price values
  const totalOrderPrice = items.reduce((acc, item) => {
    const itemTotal = parseFloat(item.totalPrice.replace(" €", ""));
    return acc + itemTotal;
  }, 0);

  return (
    <div className="flex flex-col w-[360px] items-start relative bg-primary-background">
      <div
        className={`flex flex-col w-[360px] h-16 items-start relative bg-primary-background border-b border-solid border-stroke ${HEADERClassName}`}
      >
        <div className="flex h-16 items-center justify-around gap-8 pl-5 pr-3 py-0 relative self-stretch w-full">
          <div className="inline-flex items-start relative flex-[0_0_auto]">
            <LogoTheGoodDeals
              className="!flex-[0_0_auto]"
              thegoodDealsClassName="!text-[28px]"
            />
          </div>
        </div>
      </div>
      <div className="flex-col w-[360px] items-start gap-[15px] px-[35px] py-[15px] flex relative flex-[0_0_auto]">
        <p className="relative self-stretch mt-[-1.00px] font-heading-6 text-primary-color text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)]">
          {t("artisanEmailList.dearCraftsman")}
        </p>
        <p className="relative self-stretch font-body-medium-regular text-primary-text-color text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)]">
          {t("artisanEmailList.confirmOrderForm")}
        </p>
        <div className="flex items-center justify-center gap-2.5 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-primary-color rounded-md">
          <Send1 className="!relative !w-5 !h-5" />
          <button
            className="all-[unset] box-border relative w-fit mt-[-1.00px] font-medium text-white text-base text-center tracking-[0] leading-6 whitespace-nowrap"
            onClick={handleConfirm}
          >
            {t("artisanEmailList.confirmInformation")}
          </button>
        </div>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt={t("artisanEmailList.line")}
          src={Line63}
        />
        {items.map((item, index) => (
          <div
            className={`flex flex-col items-start gap-[15px] pt-0 pb-[15px] px-[15px] relative self-stretch w-full flex-[0_0_auto] ${
              index % 2 === 0 ? "bg-white" : "bg-white"
            }`}
            key={index}
          >
            <img
              className="relative self-stretch w-full h-px object-cover"
              alt={t("artisanEmailList.line")}
              src={Line63}
            />
            <div
              className="flex items-center gap-[15px] relative flex-[0_0_auto] cursor-pointer"
              onClick={() => toggleExpand(index)}
            >
              <SizeXlCorner
                className="!h-[50px] !w-[50px]"
                divClassName="!tracking-[0] !text-lg !font-semibold !font-sans !leading-10 !top-1"
                text={item.initials}
              />
              <div className="inline-flex flex-col items-start gap-[5px] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-medium text-primary-color text-base leading-6 whitespace-nowrap">
                  {item.name}
                </div>
                <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
                  <Box4 className="!relative !w-5 !h-5" />
                  <p className="relative w-fit mt-[-1.00px] text-primary-text-color text-sm leading-5 whitespace-nowrap">
                    {item.orders} {t("artisanEmailList.orderOnDeal")}
                  </p>
                </div>
              </div>
              {expandedItems[index] ? (
                <ChevronUp className="!relative !w-6 !h-6" />
              ) : (
                <ChevronDown className="!relative !w-6 !h-6" />
              )}
            </div>
            {expandedItems[index] && (
              <div className="flex flex-col items-start gap-[15px] pt-0 pb-[15px] px-[15px] relative self-stretch w-full flex-[0_0_auto]">
                <img
                  className="relative self-stretch w-full h-px mt-[-1.00px] object-cover"
                  alt={t("artisanEmailList.line")}
                  src={Line63}
                />
                {item.products.map((product, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]"
                  >
                    <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                      <p className="relative w-fit mt-[-1.00px] font-medium text-primary-color text-base leading-6 whitespace-nowrap">
                        {product.name}
                      </p>
                    </div>
                    <div className="items-end justify-between self-stretch w-full flex relative flex-[0_0_auto]">
                      <div className="flex items-center gap-2.5 relative flex-1 grow">
                        <div className="relative w-fit mt-[-1.00px] text-secondary-color font-semibold text-base leading-6 whitespace-nowrap">
                          {product.quantity} {t("artisanEmailList.products")}
                        </div>
                      </div>
                      <div className="inline-flex flex-col items-end relative flex-[0_0_auto]">
                        <p className="relative w-fit mt-[-1.00px] text-secondary-color font-semibold text-base text-right leading-6 whitespace-nowrap">
                          {product.price} x {product.quantity} ={" "}
                          {product.totalPrice}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                <div className="items-end justify-between self-stretch w-full flex relative flex-[0_0_auto]">
                  <div className="flex items-center gap-2.5 relative flex-1 grow">
                    <div className="relative w-fit mt-[-1.00px] font-semibold text-primary-color text-base leading-6 whitespace-nowrap">
                      {t("artisanEmailList.total")}
                    </div>
                  </div>
                  <div className="inline-flex flex-col items-end relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] font-semibold text-primary-color text-base text-right leading-6 whitespace-nowrap">
                      {item.totalPrice}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt={t("artisanEmailList.line")}
          src={Line63}
        />
        <div className="flex-col items-start gap-[15px] p-[15px] self-stretch w-full bg-white rounded-[5px] flex relative flex-[0_0_auto]">
          <div className="items-end flex flex-col gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex justify-between self-stretch w-full items-end relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-bold text-primary-color text-base text-center leading-6 whitespace-nowrap">
                {t("artisanEmailList.totalPrice")}
              </div>
              <div className="relative w-fit mt-[-1.00px] font-bold text-primary-color text-base text-right leading-6 whitespace-nowrap">
                {totalOrderPrice.toFixed(2)} €
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2.5 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-primary-color rounded-md">
            <Send1 className="!relative !w-5 !h-5" />
            <button
              className="all-[unset] box-border relative w-fit mt-[-1.00px] font-medium text-white text-base text-center leading-6 whitespace-nowrap"
              onClick={handleConfirm}
            >
              {t("artisanEmailList.confirmInformation")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
