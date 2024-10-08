import React, { useState } from "react";
import { Textarea } from "../Textarea";
import { WebsiteMoney } from "../../icons/WebsiteMoney";
import { useTranslation } from "react-i18next"; // Import translation hook

const CollectionLocation = ({ type, onChange, value }) => {
  const { t } = useTranslation(); // Initialize translation
  const [isAtHome, setIsAtHome] = useState(true);
  const [deliveryCost, setDeliveryCost] = useState("");

  const handleAtHomeChange = () => {
    setIsAtHome(true);
    onchange("");
  };

  const handleProvideLocationChange = () => {
    setIsAtHome(false);
  };

  const handleChange = (e) => {
    setDeliveryCost(e.target.value);
    onChange(deliveryCost);
  };

  return (
    <div>
      {/* Title */}
      <div className="flex items-center gap-2.5 relative w-full">
        <div className="font-medium text-[#1b4f4a] text-lg">
          {type === "deliveryCost"
            ? t("collectionLocation.dealDeliveryCosts")
            : t("collectionLocation.collectionLocationTitle")}
        </div>
      </div>
      {type === "deliveryCost" && (
        <div className="inline-flex items-start gap-2.5 relative">
          <p className="relative w-[291px] mt-3 font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)]">
            {t("collectionLocation.deliveryCostDescription")}
          </p>
        </div>
      )}
      {/* At My House Option */}
      <div
        className="flex items-center cursor-pointer mt-4"
        onClick={handleAtHomeChange}
      >
        <div
          className={`w-5 h-5 border-2 rounded-md flex items-center justify-center ${
            isAtHome
              ? "bg-[#1b4f4a] border-[#1b4f4a]"
              : "bg-white border-gray-300"
          }`}
        >
          {isAtHome && (
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          )}
        </div>
        <span className="ml-2 text-[#1b4f4a]">
          {!(type === "deliveryCost")
            ? t("collectionLocation.atMyHome")
            : t("collectionLocation.deliveryIncluded")}
        </span>
      </div>

      {/* Provide Another Location Option */}
      <div
        className="flex items-center cursor-pointer mt-4"
        onClick={handleProvideLocationChange}
      >
        <div
          className={`w-5 h-5 border-2 rounded-md flex items-center justify-center ${
            !isAtHome
              ? "bg-[#1b4f4a] border-[#1b4f4a]"
              : "bg-white border-gray-300"
          }`}
        >
          {!isAtHome && (
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          )}
        </div>
        <span className="ml-2 text-[#1b4f4a]">
          {!(type === "deliveryCost")
            ? t("collectionLocation.provideAnotherLocation")
            : t("collectionLocation.addShippingCosts")}
        </span>
      </div>

      {!isAtHome && type === "collectionLocation" && (
        <div className="w-full mt-2">
          <Textarea
            name="collectionLocation"
            type="collectionLocation"
            value={value}
            onChange={onChange}
            className="!self-stretch !w-full"
            divClassName="!text-[#1b4f4a] !text-lg !leading-[26px]"
            divClassNameOverride="!tracking-[0] !text-base !flex-1 ![white-space:unset] ![font-style:unset] !font-normal ![font-family:'Inter',Helvetica] !leading-6 !w-[unset]"
            groupClassName="!w-[42px]"
            helperText="off"
            label=""
            label1="on"
            placeholder={t("collectionLocation.placeholderLocation")}
            secondLabel="on"
            secondLabelText="0/250"
            state="default"
          />
        </div>
      )}

      {!isAtHome && type === "deliveryCost" && (
        <div className="w-full mt-4">
          <div className="relative w-full max-w-sm">
            {/* Input field */}
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <WebsiteMoney className="w-6 h-6" />
            </div>
            <input
              type="text"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-12 p-2.5 focus:outline-none"
              value={deliveryCost}
              onChange={handleChange}
              placeholder={t("collectionLocation.placeholderCost")}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CollectionLocation;
