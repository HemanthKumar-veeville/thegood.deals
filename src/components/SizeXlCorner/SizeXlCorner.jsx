import PropTypes from "prop-types";
import React from "react";

export const SizeXlCorner = ({ className, divClassName, text = "TG" }) => {
  return (
    <div
      className={`relative w-20 h-20 bg-primary-color rounded-[15px] flex items-center justify-center ${className}`}
    >
      <div
        className={`font-heading-5 font-[number:var(--heading-5-font-weight)] text-white text-[length:var(--heading-5-font-size)] text-center tracking-[var(--heading-5-letter-spacing)] leading-[var(--heading-5-line-height)] whitespace-nowrap [font-style:var(--heading-5-font-style)] ${divClassName}`}
      >
        {text}
      </div>
    </div>
  );
};

SizeXlCorner.propTypes = {
  text: PropTypes.string,
};
