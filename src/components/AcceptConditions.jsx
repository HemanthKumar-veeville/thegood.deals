import React, { useState } from "react";
// import { CheckBox } from "../CheckBox"; // Assuming you have this component already
import { t } from "i18next"; // Assuming this is for translations

const AcceptConditions = ({ formData, handleChange }) => {
  const [isAccepted, setIsAccepted] = useState(formData.acceptConditions);

  const toggleAcceptance = (e) => {
    setIsAccepted(!isAccepted);
    handleChange("acceptConditions", e);
  };

  return (
    <div className="w-full flex items-center gap-2.5">
      {/* CheckBox logic replicating CollectionLocation checkbox design */}
      <div
        className="flex items-center cursor-pointer"
        onClick={toggleAcceptance}
      >
        <div
          className={`w-5 h-5 border-2 rounded-md flex items-center justify-center ${
            isAccepted
              ? "bg-[#1b4f4a] border-[#1b4f4a]" // Active state with dark green background
              : "bg-white border-gray-300" // Inactive state
          }`}
        >
          {isAccepted && (
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
      </div>
      <p className="[font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-base tracking-[0] leading-6">
        {t("create_deal.accept_conditions_label")}
        {/* I accept the General Conditions of Sale */}
      </p>
    </div>
  );
};

export default AcceptConditions;
