/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Minus1 = ({ color = "#1B4F4A", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M22.125 12.8625H1.875C1.425 12.8625 1.0125 12.4875 1.0125 12C1.0125 11.55 1.3875 11.1375 1.875 11.1375H22.125C22.575 11.1375 22.9875 11.5125 22.9875 12C22.9875 12.45 22.575 12.8625 22.125 12.8625Z"
        fill={color}
      />
    </svg>
  );
};

Minus1.propTypes = {
  color: PropTypes.string,
};
