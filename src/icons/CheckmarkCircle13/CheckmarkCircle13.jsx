/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const CheckmarkCircle13 = ({ color = "#22AD5C", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_310_12463)">
        <path
          d="M0.783315 8C0.783315 4.0091 4.00908 0.783338 7.99998 0.783338C11.9923 0.783338 15.2416 4.01053 15.2416 8C15.2416 11.9909 11.9909 15.2417 7.99998 15.2417C4.01051 15.2417 0.783315 11.9923 0.783315 8ZM1.24165 8C1.24165 11.7324 4.2642 14.7833 7.99998 14.7833C11.7332 14.7833 14.7833 11.7349 14.7833 8.025C14.7833 4.29091 11.7341 1.24167 7.99998 1.24167C4.26589 1.24167 1.24165 4.26591 1.24165 8Z"
          fill={color}
          stroke={color}
          strokeWidth="0.666667"
        />
        <path
          d="M6.9415 8.8129L7.17419 9.04128L7.40767 8.81369L10.376 5.92016C10.4727 5.83832 10.6189 5.84031 10.7143 5.9357C10.8085 6.02991 10.8091 6.16765 10.7161 6.26242L7.49399 9.35969L7.49395 9.35964L7.48929 9.3643C7.40589 9.4477 7.29254 9.49167 7.17499 9.49167C7.05744 9.49167 6.94409 9.4477 6.86069 9.3643L6.86072 9.36427L6.85692 9.36059L5.26737 7.82071C5.17332 7.7082 5.18307 7.57053 5.25446 7.49223C5.37013 7.39567 5.51234 7.40876 5.58929 7.4857L5.5915 7.4879L6.9415 8.8129Z"
          fill={color}
          stroke={color}
          strokeWidth="0.666667"
        />
      </g>
      <defs>
        <clipPath id="clip0_310_12463">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

CheckmarkCircle13.propTypes = {
  color: PropTypes.string,
};
