/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ArrowLeft = ({ color = "#111928", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="20"
      viewBox="0 0 21 20"
      width="21"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 9.3125H4.65625L9.96875 3.90625C10.25 3.625 10.25 3.1875 9.96875 2.90625C9.6875 2.625 9.25 2.625 8.96875 2.90625L2.5 9.46875C2.21875 9.75 2.21875 10.1875 2.5 10.4688L8.96875 17.0312C9.09375 17.1562 9.28125 17.25 9.46875 17.25C9.65625 17.25 9.8125 17.1875 9.96875 17.0625C10.25 16.7812 10.25 16.3438 9.96875 16.0625L4.6875 10.7188H18C18.375 10.7188 18.6875 10.4062 18.6875 10.0312C18.6875 9.625 18.375 9.3125 18 9.3125Z"
        fill={color}
      />
    </svg>
  );
};

ArrowLeft.propTypes = {
  color: PropTypes.string,
};
