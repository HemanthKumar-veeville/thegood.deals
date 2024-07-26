import React, { useState } from "react";
import { CheckBox } from "../../components/CheckBox";

const CollectionLocation = ({ type, onChange }) => {
  const [isAtHome, setIsAtHome] = useState(true);

  const handleAtHomeChange = () => {
    setIsAtHome(true);
    onChange("At my house");
  };

  const handleProvideLocationChange = () => {
    setIsAtHome(false);
    onChange("I provide another location");
  };

  return (
    <>
      <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-lg tracking-[0] leading-[26px] whitespace-nowrap">
          Collection location
        </div>
      </div>
      <CheckBox
        checked={isAtHome ? "ON" : "OFF"}
        onChange={handleAtHomeChange}
        checkedOffStyleClassName="!flex-[0_0_auto]"
        divClassName="!text-primary-text-color !tracking-[0] !text-base ![font-style:unset] !font-normal ![font-family:'Inter',Helvetica] !leading-6 cursor-pointer"
        style="two"
        text="At my house"
        text1="ON"
      />
      <CheckBox
        checked={!isAtHome ? "ON" : "OFF"}
        onChange={handleProvideLocationChange}
        checkedOffStyleClassName="!flex-[0_0_auto]"
        divClassName="!text-primary-text-color !tracking-[0] !text-base ![font-style:unset] !font-normal ![font-family:'Inter',Helvetica] !leading-6 cursor-pointer"
        style="two"
        text="I provide another location"
        text1="ON"
      />
    </>
  );
};

export default CollectionLocation;
