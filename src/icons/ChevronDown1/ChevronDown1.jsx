/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ChevronDown1 = ({ color = "#111928", className }) => {
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
        d="M12 17.1C11.775 17.1 11.5875 17.025 11.4 16.875L2.77498 8.40001C2.43748 8.06251 2.43748 7.53751 2.77498 7.20001C3.11248 6.86251 3.63748 6.86251 3.97498 7.20001L12 15.0375L20.025 7.12501C20.3625 6.78751 20.8875 6.78751 21.225 7.12501C21.5625 7.46251 21.5625 7.98751 21.225 8.32501L12.6 16.8C12.4125 16.9875 12.225 17.1 12 17.1Z"
        fill={color}
      />
    </svg>
  );
};

ChevronDown1.propTypes = {
  color: PropTypes.string,
};
