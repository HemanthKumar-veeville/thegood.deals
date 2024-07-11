/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const VerticalLine2 = ({ color = "#111928", className }) => {
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
        d="M1.5 6.8625H22.5C22.95 6.8625 23.3625 6.4875 23.3625 6C23.3625 5.5125 22.9875 5.1375 22.5 5.1375H1.5C1.05 5.1375 0.637497 5.5125 0.637497 6C0.637497 6.4875 1.05 6.8625 1.5 6.8625Z"
        fill={color}
      />
      <path
        d="M22.5 11.175H1.5C1.05 11.175 0.637497 11.55 0.637497 12.0375C0.637497 12.4875 1.0125 12.9 1.5 12.9H22.5C22.95 12.9 23.3625 12.525 23.3625 12.0375C23.3625 11.55 22.95 11.175 22.5 11.175Z"
        fill={color}
      />
      <path
        d="M22.5 17.1375H1.5C1.05 17.1375 0.637497 17.5125 0.637497 18C0.637497 18.4875 1.0125 18.8625 1.5 18.8625H22.5C22.95 18.8625 23.3625 18.4875 23.3625 18C23.3625 17.5125 22.95 17.1375 22.5 17.1375Z"
        fill={color}
      />
    </svg>
  );
};

VerticalLine2.propTypes = {
  color: PropTypes.string,
};
