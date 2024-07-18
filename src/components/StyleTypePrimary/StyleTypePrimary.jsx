/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Line_60_3 } from "../../images";

export const StyleTypePrimary = ({
  className,
  overlapClassName,
  groupClassName,
  overlapGroupClassName,
  lineClassName,
  line = { Line_60_3 },
  divClassName,
  text = "80%",
}) => {
  return (
    <div className={`w-[470px] h-5 ${className}`}>
      <div className={`relative h-5 -top-px ${overlapClassName}`}>
        <div
          className={`absolute w-[470px] h-px top-[19px] left-0 ${groupClassName}`}
        >
          <div
            className={`relative h-4 -top-4 bg-[url(/static/img/line-59-4.svg)] bg-[100%_100%] ${overlapGroupClassName}`}
          >
            <img
              className={`absolute w-[357px] h-4 top-0 left-0 ${lineClassName}`}
              alt="Line"
              src={line}
            />
          </div>
        </div>
        <div
          className={`absolute top-0 left-[166px] font-body-extra-small-medium font-[number:var(--body-extra-small-medium-font-weight)] text-whitewhite text-[length:var(--body-extra-small-medium-font-size)] tracking-[var(--body-extra-small-medium-letter-spacing)] leading-[var(--body-extra-small-medium-line-height)] whitespace-nowrap [font-style:var(--body-extra-small-medium-font-style)] ${divClassName}`}
        >
          {text}
        </div>
      </div>
    </div>
  );
};

StyleTypePrimary.propTypes = {
  line: PropTypes.string,
  text: PropTypes.string,
};
