/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Star = ({ color = "#F59E0B", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="18"
      viewBox="0 0 18 18"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_310_23163)">
        <path
          d="M4.52801 17.4938C4.27488 17.4938 4.02176 17.4095 3.82489 17.2688C3.43113 16.9876 3.20613 16.4813 3.29051 16.0032L4.02176 11.4751L0.87176 8.24072C0.53426 7.90322 0.42176 7.39697 0.562385 6.91885C0.70301 6.46885 1.09676 6.13135 1.54676 6.0751L5.90613 5.37197L7.87488 1.2376C8.09988 0.787598 8.52176 0.506348 8.99988 0.506348C9.47801 0.506348 9.92801 0.787598 10.1249 1.2376L12.0936 5.34385L16.4249 6.01885C16.8749 6.10322 17.2686 6.4126 17.4093 6.8626C17.578 7.34072 17.4374 7.84697 17.0999 8.18447L13.978 11.447L14.7093 16.0032C14.7936 16.5095 14.5968 16.9876 14.1749 17.2688C13.7811 17.5501 13.303 17.5782 12.8811 17.3532L8.99988 15.2438L5.11863 17.3532C4.94988 17.4657 4.72488 17.4938 4.52801 17.4938ZM1.77176 7.3126C1.77176 7.3126 1.77176 7.34072 1.77176 7.36885L5.06238 10.7438C5.25926 10.9407 5.34363 11.2501 5.31551 11.5313L4.55614 16.2282C4.55614 16.2282 4.55614 16.2282 4.55614 16.2563L8.60613 14.0626C8.85926 13.922 9.16863 13.922 9.44988 14.0626L13.4999 16.2563C13.4999 16.2563 13.4999 16.2563 13.4999 16.2282L12.7405 11.5032C12.6843 11.222 12.7968 10.9407 12.9936 10.7157L16.2843 7.34072C16.3124 7.3126 16.2843 7.28447 16.2843 7.28447L11.7561 6.58135C11.4749 6.5251 11.2218 6.35635 11.1093 6.0751L8.99988 1.8001L6.97488 6.10322C6.86238 6.35635 6.60926 6.55322 6.32801 6.60947L1.77176 7.3126Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_310_23163">
          <rect fill="white" height="18" width="18" />
        </clipPath>
      </defs>
    </svg>
  );
};

Star.propTypes = {
  color: PropTypes.string,
};
