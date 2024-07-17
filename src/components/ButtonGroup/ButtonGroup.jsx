/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { UserAlt33 } from "../../icons/UserAlt33";

export const ButtonGroup = ({
  state,
  className,
  icon = <UserAlt33 className="!relative !w-[18px] !h-[18px]" color="white" />,
  buttonClassName,
  text = "Support",
}) => {
  return (
    <div
      className={`border border-solid inline-flex items-center gap-2 px-[15px] py-2.5 justify-center relative ${
        state === "active" ? "border-primary-color" : "border-stroke"
      } ${state === "active" ? "bg-primary-color" : "bg-whitewhite"} ${className}`}
    >
      {icon}
      <button
        className={`all-[unset] box-border [font-family:'Inter',Helvetica] w-fit mt-[-0.50px] tracking-[0] text-base font-medium leading-6 whitespace-nowrap relative ${
          state === "active" ? "text-whitewhite" : "text-darkdark"
        } ${buttonClassName}`}
      >
        {text}
      </button>
    </div>
  );
};

ButtonGroup.propTypes = {
  state: PropTypes.oneOf(["active", "default"]),
  text: PropTypes.string,
};
