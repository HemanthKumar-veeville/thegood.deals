/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Line_59_2, Line_60_4, Line_59_4 } from "../../images";

export const StyleTypePrimaryWrapper = ({
  className,
  overlapClassName,
  groupClassName,
  overlapGroupClassName,
  lineClassName,
  line = { Line_60_4 },
  divClassName,
}) => {
  return (
    <div className={`w-[470px] h-5 ${className}`}>
      <div className={`relative h-5 -top-px ${overlapClassName}`}>
        <div
          className={`absolute w-[470px] h-px top-[19px] left-0 ${groupClassName}`}
        >
          <div
            className={`relative h-4 -top-4 bg-[url(${Line_59_4})] bg-[100%_100%] ${overlapGroupClassName}`}
          >
            <img
              className={`absolute w-[420px] h-4 top-0 left-0 ${lineClassName}`}
              alt="Line"
              src={line}
            />
          </div>
        </div>
        <div
          className={`absolute top-0 left-[197px] font-body-extra-small-medium font-[number:var(--body-extra-small-medium-font-weight)] text-whitewhite text-[length:var(--body-extra-small-medium-font-size)] tracking-[var(--body-extra-small-medium-letter-spacing)] leading-[var(--body-extra-small-medium-line-height)] whitespace-nowrap [font-style:var(--body-extra-small-medium-font-style)] ${divClassName}`}
        >
          80%
        </div>
      </div>
    </div>
  );
};

StyleTypePrimaryWrapper.propTypes = {
  line: PropTypes.string,
};
