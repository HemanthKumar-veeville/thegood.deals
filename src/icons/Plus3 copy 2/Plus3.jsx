/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Plus3 = ({ color = "#1B4F4A", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="12"
      viewBox="0 0 12 12"
      width="12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_523_675)">
        <path
          d="M11.2501 5.58747H6.43135V0.749976C6.43135 0.524976 6.24385 0.318726 6.0001 0.318726C5.7751 0.318726 5.56885 0.506226 5.56885 0.749976V5.58747H0.750098C0.525098 5.58747 0.318848 5.77497 0.318848 6.01872C0.318848 6.24372 0.506348 6.44998 0.750098 6.44998H5.5876V11.25C5.5876 11.475 5.7751 11.6812 6.01885 11.6812C6.24385 11.6812 6.4501 11.4937 6.4501 11.25V6.43122H11.2501C11.4751 6.43122 11.6813 6.24372 11.6813 5.99998C11.6813 5.77497 11.4751 5.58747 11.2501 5.58747Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_523_675">
          <rect fill="white" height="12" width="12" />
        </clipPath>
      </defs>
    </svg>
  );
};

Plus3.propTypes = {
  color: PropTypes.string,
};
