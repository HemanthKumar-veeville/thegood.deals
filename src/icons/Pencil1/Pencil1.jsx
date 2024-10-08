/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Pencil1 = ({ color = "#111928", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1230_4356)">
        <path
          d="M19.1252 4.0625C18.1252 3 17.0627 1.9375 16.0002 0.90625C15.7815 0.6875 15.5315 0.5625 15.2502 0.5625C14.969 0.5625 14.6877 0.65625 14.5002 0.875L2.71897 12.5625C2.53147 12.75 2.40647 12.9688 2.31272 13.1875L0.593967 18.4375C0.500217 18.6875 0.562717 18.9375 0.687717 19.125C0.843967 19.3125 1.06272 19.4375 1.34397 19.4375H1.46897L6.81272 17.6563C7.06272 17.5625 7.28147 17.4375 7.43772 17.25L19.1565 5.5625C19.344 5.375 19.469 5.09375 19.469 4.8125C19.469 4.53125 19.344 4.28125 19.1252 4.0625ZM6.43772 16.2813C6.40647 16.3125 6.37522 16.3125 6.34397 16.3438L2.31272 17.6875L3.65647 13.6563C3.65647 13.625 3.68772 13.5938 3.71897 13.5625L12.3127 5L15.0315 7.71875L6.43772 16.2813ZM16.0002 6.71875L13.2815 4L15.1877 2.09375C16.094 2.96875 17.0002 3.90625 17.8752 4.8125L16.0002 6.71875Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_1230_4356">
          <rect fill="white" height="20" width="20" />
        </clipPath>
      </defs>
    </svg>
  );
};

Pencil1.propTypes = {
  color: PropTypes.string,
};
