/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const VerticalLine3 = ({ color = "#1B4F4A", className }) => {
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
        d="M1.5002 6.86245H22.5002C22.9502 6.86245 23.3627 6.48745 23.3627 5.99995C23.3627 5.51245 22.9877 5.13745 22.5002 5.13745H1.5002C1.0502 5.13745 0.637695 5.51245 0.637695 5.99995C0.637695 6.48745 1.0502 6.86245 1.5002 6.86245Z"
        fill={color}
      />
      <path
        d="M22.5002 11.175H1.5002C1.0502 11.175 0.637695 11.55 0.637695 12.0375C0.637695 12.4875 1.0127 12.9 1.5002 12.9H22.5002C22.9502 12.9 23.3627 12.525 23.3627 12.0375C23.3627 11.55 22.9502 11.175 22.5002 11.175Z"
        fill={color}
      />
      <path
        d="M22.5002 17.1375H1.5002C1.0502 17.1375 0.637695 17.5125 0.637695 18C0.637695 18.4875 1.0127 18.8625 1.5002 18.8625H22.5002C22.9502 18.8625 23.3627 18.4875 23.3627 18C23.3627 17.5125 22.9502 17.1375 22.5002 17.1375Z"
        fill={color}
      />
    </svg>
  );
};

VerticalLine3.propTypes = {
  color: PropTypes.string,
};
