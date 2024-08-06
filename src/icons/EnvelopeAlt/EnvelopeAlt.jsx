/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const EnvelopeAlt = ({ color = "#111928", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.5312 3.46875H2.46875C1.40625 3.46875 0.5625 4.3125 0.5625 5.375V14.625C0.5625 15.6875 1.40625 16.5313 2.46875 16.5313H17.5625C18.625 16.5313 19.4688 15.6875 19.4688 14.625V5.375C19.4688 4.3125 18.5938 3.46875 17.5312 3.46875ZM1.96875 5.75L7.65625 9.21875L1.96875 14.5313V5.75ZM10.25 8.84375C10.0938 8.9375 9.875 8.9375 9.71875 8.84375L3.21875 4.875H16.6562L10.25 8.84375ZM8.875 9.96875L9 10.0625C9.3125 10.25 9.65625 10.3438 10 10.3438C10.3438 10.3438 10.6875 10.25 11 10.0625L11.125 10L16.5313 15.1563H3.34375L8.875 9.96875ZM18.0625 14.625C18.0312 14.625 18.0625 14.625 18.0625 14.625L12.3438 9.21875L18.0312 5.65625V14.625H18.0625Z"
        fill={color}
      />
    </svg>
  );
};

EnvelopeAlt.propTypes = {
  color: PropTypes.string,
};
