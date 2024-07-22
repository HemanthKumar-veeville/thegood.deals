/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const FacebookMessenger2 = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_631_11877)">
        <path
          d="M9.96875 0.343628C4.53125 0.343628 0.3125 4.34363 0.3125 9.71863C0.3125 12.5624 1.46875 14.9999 3.34375 16.6561C3.46875 16.7811 3.5625 16.9999 3.59375 17.1874L3.625 18.9061C3.65625 19.4374 4.1875 19.8436 4.71875 19.5936L6.65625 18.7499C6.78125 18.7186 7 18.6561 7.1875 18.7186C8.0625 18.9374 9 19.1249 10 19.1249C15.4688 19.0936 19.6875 15.0936 19.6875 9.74988C19.6875 4.40613 15.4375 0.343628 9.96875 0.343628ZM15.7812 7.56238L12.9375 12.0311C12.5 12.7186 11.5312 12.9686 10.875 12.4374L8.625 10.7186C8.40625 10.5936 8.15625 10.5936 7.9375 10.7186L4.875 12.9999C4.46875 13.3124 3.9375 12.8124 4.21875 12.3749L7.0625 7.90613C7.5 7.21863 8.46875 6.96863 9.125 7.49988L11.375 9.21863C11.5938 9.34363 11.8438 9.34363 12.0625 9.21863L15.0938 6.87488C15.5625 6.68738 16.0312 7.15613 15.7812 7.56238Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_631_11877">
          <rect fill="white" height="20" width="20" />
        </clipPath>
      </defs>
    </svg>
  );
};

FacebookMessenger2.propTypes = {
  color: PropTypes.string,
};
