/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const CheckmarkCircle2 = ({ color = "#6B7280", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="17"
      viewBox="0 0 16 17"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_310_12771)">
        <path
          d="M0.783315 8.50001C0.783315 4.50911 4.00908 1.28335 7.99998 1.28335C11.9923 1.28335 15.2416 4.51054 15.2416 8.50001C15.2416 12.4909 11.9909 15.7417 7.99998 15.7417C4.01051 15.7417 0.783315 12.4924 0.783315 8.50001ZM1.24165 8.50001C1.24165 12.2324 4.2642 15.2833 7.99998 15.2833C11.7332 15.2833 14.7833 12.2349 14.7833 8.52501C14.7833 4.79092 11.7341 1.74168 7.99998 1.74168C4.26589 1.74168 1.24165 4.76592 1.24165 8.50001Z"
          fill={color}
          stroke={color}
          strokeWidth="0.666667"
        />
        <path
          d="M6.9415 9.31292L7.17419 9.54131L7.40767 9.31372L10.376 6.42019C10.4727 6.33835 10.6189 6.34034 10.7143 6.43573C10.8085 6.52993 10.8091 6.66768 10.7161 6.76245L7.49399 9.85971L7.49395 9.85967L7.48929 9.86433C7.40589 9.94773 7.29254 9.99169 7.17499 9.99169C7.05744 9.99169 6.94409 9.94773 6.86069 9.86433L6.86072 9.8643L6.85692 9.86062L5.26737 8.32073C5.17332 8.20823 5.18307 8.07056 5.25446 7.99226C5.37013 7.8957 5.51234 7.90879 5.58929 7.98573L5.5915 7.98792L6.9415 9.31292Z"
          fill={color}
          stroke={color}
          strokeWidth="0.666667"
        />
      </g>
      <defs>
        <clipPath id="clip0_310_12771">
          <rect fill="white" height="16" transform="translate(0 0.5)" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

CheckmarkCircle2.propTypes = {
  color: PropTypes.string,
};
