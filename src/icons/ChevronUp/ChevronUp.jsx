/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ChevronUp = ({ color = "#1B4F4A", className }) => {
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
        d="M20.6251 17.1C20.4001 17.1 20.2126 17.025 20.0251 16.875L12.0001 8.96255L3.9751 16.8375C3.6376 17.175 3.1126 17.175 2.7751 16.8375C2.4376 16.5 2.4376 15.975 2.7751 15.6375L11.4001 7.16255C11.7376 6.82505 12.2626 6.82505 12.6001 7.16255L21.2251 15.6375C21.5626 15.975 21.5626 16.5 21.2251 16.8375C21.0751 16.9875 20.8501 17.1 20.6251 17.1Z"
        fill={color}
      />
    </svg>
  );
};

ChevronUp.propTypes = {
  color: PropTypes.string,
};
