/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ArrowRight5 = ({ color = "#637381", className }) => {
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
        d="M21.5998 11.4001L13.8373 3.5251C13.4998 3.1876 12.9748 3.1876 12.6373 3.5251C12.2998 3.8626 12.2998 4.3876 12.6373 4.7251L18.9373 11.1376H2.9998C2.5498 11.1376 2.1748 11.5126 2.1748 11.9626C2.1748 12.4126 2.5498 12.8251 2.9998 12.8251H19.0123L12.6373 19.3126C12.2998 19.6501 12.2998 20.1751 12.6373 20.5126C12.7873 20.6626 13.0123 20.7376 13.2373 20.7376C13.4623 20.7376 13.6873 20.6626 13.8373 20.4751L21.5998 12.6001C21.9373 12.2626 21.9373 11.7376 21.5998 11.4001Z"
        fill={color}
      />
    </svg>
  );
};

ArrowRight5.propTypes = {
  color: PropTypes.string,
};
