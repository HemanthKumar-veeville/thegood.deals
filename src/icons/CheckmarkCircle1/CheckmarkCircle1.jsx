/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const CheckmarkCircle1 = ({ color = "#22AD5C", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="12"
      viewBox="0 0 12 12"
      width="12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1153_1685)">
        <path
          d="M5.9999 0.337494C2.86865 0.337494 0.337402 2.86874 0.337402 5.99999C0.337402 9.13124 2.86865 11.6812 5.9999 11.6812C9.13115 11.6812 11.6812 9.13124 11.6812 5.99999C11.6812 2.86874 9.13115 0.337494 5.9999 0.337494ZM5.9999 10.8375C3.3374 10.8375 1.18115 8.66249 1.18115 5.99999C1.18115 3.33749 3.3374 1.18124 5.9999 1.18124C8.6624 1.18124 10.8374 3.35624 10.8374 6.01874C10.8374 8.66249 8.6624 10.8375 5.9999 10.8375Z"
          fill={color}
        />
        <path
          d="M7.61231 4.25624L5.38106 6.43124L4.36856 5.43749C4.19981 5.26874 3.93731 5.28749 3.76856 5.43749C3.59981 5.60624 3.61856 5.86874 3.76856 6.03749L4.96856 7.19999C5.08106 7.31249 5.23106 7.36874 5.38106 7.36874C5.53106 7.36874 5.68106 7.31249 5.79356 7.19999L8.21231 4.87499C8.38106 4.70624 8.38106 4.44374 8.21231 4.27499C8.04356 4.10624 7.78106 4.10624 7.61231 4.25624Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_1153_1685">
          <rect fill="white" height="12" width="12" />
        </clipPath>
      </defs>
    </svg>
  );
};

CheckmarkCircle1.propTypes = {
  color: PropTypes.string,
};
