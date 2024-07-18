/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ClockAlt13 = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_310_4180)">
        <path
          d="M12.5621 12.375V6.33745C12.5621 5.88745 12.1871 5.51245 11.7371 5.51245C11.2871 5.51245 10.9121 5.88745 10.9121 6.33745V12.7125C10.9121 12.9375 10.9871 13.1625 11.1371 13.3125L15.2996 17.55C15.4496 17.7 15.6746 17.8125 15.8996 17.8125C16.1246 17.8125 16.3121 17.7375 16.4996 17.5875C16.8371 17.25 16.8371 16.725 16.4996 16.3875L12.5621 12.375Z"
          fill={color}
        />
        <path
          d="M11.9998 0.5625C5.73731 0.5625 0.674805 5.7 0.674805 12C0.674805 18.3 5.77481 23.4375 11.9998 23.4375C18.2248 23.4375 23.3248 18.3 23.3248 12C23.3248 5.7 18.2623 0.5625 11.9998 0.5625ZM11.9998 21.75C6.67481 21.75 2.3248 17.3625 2.3248 12C2.3248 6.6375 6.67481 2.25 11.9998 2.25C17.3248 2.25 21.6748 6.6375 21.6748 12C21.6748 17.3625 17.3248 21.75 11.9998 21.75Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_310_4180">
          <rect fill="white" height="24" width="24" />
        </clipPath>
      </defs>
    </svg>
  );
};

ClockAlt13.propTypes = {
  color: PropTypes.string,
};
