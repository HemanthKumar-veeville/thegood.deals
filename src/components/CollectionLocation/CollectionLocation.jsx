import React, { useState } from "react";
import { Textarea } from "../Textarea";
import { WebsiteMoney } from "../../icons/WebsiteMoney";

const CollectionLocation = ({ type, onChange, value, handleChange }) => {
  const [isAtHome, setIsAtHome] = useState(true);

  const handleAtHomeChange = () => {
    setIsAtHome(true);
  };

  const handleProvideLocationChange = () => {
    setIsAtHome(false);
  };

  return (
    <div>
      {/* Title */}
      <div className="flex items-center gap-2.5 relative w-full">
        <div className="font-medium text-[#1b4f4a] text-lg">
          {type === "deliveryCost"
            ? "Deal delivery costs"
            : "Collection location"}
        </div>
      </div>
      {type === "deliveryCost" && (
        <div className="inline-flex items-start gap-2.5 relative">
          <p className="relative w-[291px] mt-3 font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)]">
            You have the option to share the delivery costs between
            participants.
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
          {!(type === "deliveryCost") ? "At my home" : "Delivery is included"}
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
            ? "I am providing another location"
            : "I add the shipping costs"}
        </span>
      </div>
      {!isAtHome && type === "collectionLocation" && (
        <div className="w-full mt-2">
          <Textarea
            name="description"
            type="description"
            value={value}
            onChange={handleChange}
            className="!self-stretch !w-full"
            divClassName="!text-[#1b4f4a] !text-lg !leading-[26px]"
            divClassNameOverride="!tracking-[0] !text-base !flex-1 ![white-space:unset] ![font-style:unset] !font-normal ![font-family:'Inter',Helvetica] !leading-6 !w-[unset]"
            groupClassName="!w-[42px]"
            helperText="off"
            label=""
            label1="on"
            placeholder="ex. Chez Abraham 24 rue des Vignobles, 33000 Bordeaux"
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
              {/* Increased icon size */}
              <WebsiteMoney className="w-6 h-6" />
            </div>
            <input
              type="text"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-12 p-2.5 focus:outline-none" // Adjusted padding to add space between icon and date
              value={value}
              onChange={handleProvideLocationChange}
              placeholder="345 . 00 €"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CollectionLocation;
