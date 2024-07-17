/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const InfoCircle14 = ({ color = "#F23030", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="17"
      viewBox="0 0 16 17"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_310_12159)">
        <path
          d="M7.95152 5.70608H7.97576C8.10682 5.70608 8.2 5.79926 8.2 5.93032C8.2 6.05206 8.09203 6.15456 7.97576 6.15456H7.95152C7.82046 6.15456 7.72728 6.06137 7.72728 5.93032C7.72728 5.80857 7.83525 5.70608 7.95152 5.70608Z"
          fill={color}
          stroke={color}
          strokeWidth="0.666667"
        />
        <path
          d="M7.75152 7.84548C7.75152 7.72373 7.85949 7.62124 7.97576 7.62124C8.11656 7.62124 8.2 7.72402 8.2 7.82124V11.5788C8.2 11.7006 8.09202 11.8031 7.97576 11.8031C7.85401 11.8031 7.75152 11.6951 7.75152 11.5788V7.84548Z"
          fill={color}
          stroke={color}
          strokeWidth="0.666667"
        />
        <path
          d="M7.97576 1.17877C3.92727 1.17877 0.630302 4.4515 0.630302 8.49998C0.630302 12.5485 3.92727 15.8454 7.97576 15.8454C12.0242 15.8454 15.297 12.5485 15.297 8.49998C15.297 4.4515 12.0242 1.17877 7.97576 1.17877ZM7.97576 14.7545C4.53333 14.7545 1.72121 11.9424 1.72121 8.49998C1.72121 5.05756 4.53333 2.24544 7.97576 2.24544C11.4182 2.24544 14.2061 5.05756 14.2061 8.49998C14.2061 11.9424 11.4182 14.7545 7.97576 14.7545Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_310_12159">
          <rect fill="white" height="16" transform="translate(0 0.5)" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

InfoCircle14.propTypes = {
  color: PropTypes.string,
};
