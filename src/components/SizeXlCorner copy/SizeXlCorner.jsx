/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const SizeXlCorner = ({ className, divClassName, text = "TG" }) => {
  return (
    <div className={`relative w-20 h-20 bg-primary-color rounded-[15px] ${className}`}>
      <div
        className={`absolute h-10 top-[19px] left-[21px] font-heading-5 font-[number:var(--heading-5-font-weight)] text-whitewhite text-[length:var(--heading-5-font-size)] text-center tracking-[var(--heading-5-letter-spacing)] leading-[var(--heading-5-line-height)] whitespace-nowrap [font-style:var(--heading-5-font-style)] ${divClassName}`}
      >
        {text}
      </div>
    </div>
  );
};

SizeXlCorner.propTypes = {
  text: PropTypes.string,
};
