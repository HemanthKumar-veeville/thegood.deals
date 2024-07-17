/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ArrowRight1 = ({ color = "#111928", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="21"
      viewBox="0 0 20 21"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 10.0098L11.5312 3.44727C11.25 3.16602 10.8125 3.16602 10.5312 3.44727C10.25 3.72852 10.25 4.16602 10.5312 4.44727L15.7812 9.79102H2.5C2.125 9.79102 1.8125 10.1035 1.8125 10.4785C1.8125 10.8535 2.125 11.1973 2.5 11.1973H15.8437L10.5312 16.6035C10.25 16.8848 10.25 17.3223 10.5312 17.6035C10.6562 17.7285 10.8437 17.791 11.0312 17.791C11.2187 17.791 11.4062 17.7285 11.5312 17.5723L18 11.0098C18.2812 10.7285 18.2812 10.291 18 10.0098Z"
        fill={color}
      />
    </svg>
  );
};

ArrowRight1.propTypes = {
  color: PropTypes.string,
};
