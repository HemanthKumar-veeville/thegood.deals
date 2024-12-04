/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const UserLock1 = ({ color = "#111928", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_507_2765)">
        <path
          d="M17.625 12.4375V11.4375C17.625 10.8437 17.4063 10.2813 16.9688 9.84375C16.5313 9.40625 15.9688 9.1875 15.375 9.1875C14.125 9.1875 13.125 10.1875 13.125 11.4375V12.4375C12.125 13.125 11.4688 14.2813 11.4688 15.5938C11.4688 17.7188 13.2187 19.4688 15.3438 19.4688C17.4688 19.4688 19.2188 17.7188 19.2188 15.5938C19.25 14.2813 18.5938 13.125 17.625 12.4375ZM14.5313 11.4375C14.5313 10.9687 14.9063 10.5938 15.375 10.5938C15.5938 10.5938 15.8125 10.6875 15.9688 10.8438C16.125 11 16.2188 11.2187 16.2188 11.4375V11.8125C15.9375 11.75 15.6563 11.7188 15.375 11.7188C15.0938 11.7188 14.8125 11.75 14.5625 11.8125V11.4375H14.5313ZM15.375 18.0625C14 18.0625 12.9062 16.9688 12.9062 15.5938C12.9062 14.2188 14 13.125 15.375 13.125C16.75 13.125 17.8438 14.2188 17.8438 15.5938C17.8438 16.9375 16.7188 18.0625 15.375 18.0625Z"
          fill={color}
        />
        <path
          d="M15.375 15.1875C15 15.1875 14.6562 15.5 14.6562 15.9063V16.3438C14.6562 16.7188 14.9687 17.0625 15.375 17.0625C15.7813 17.0625 16.0937 16.75 16.0937 16.3438V15.9063C16.0625 15.5 15.75 15.1875 15.375 15.1875Z"
          fill={color}
        />
        <path
          d="M8.25 9.34375C9.375 9.34375 10.4375 9.6875 11.375 10.3438C11.6875 10.5625 12.125 10.5 12.3437 10.1875C12.5625 9.875 12.5 9.4375 12.1875 9.21875C11.5625 8.78125 10.9062 8.46875 10.2187 8.25C11.5 7.5625 12.375 6.1875 12.375 4.65625C12.375 2.40625 10.5312 0.5625 8.28125 0.5625C6.03125 0.5625 4.15625 2.375 4.15625 4.65625C4.15625 6.21875 5.03125 7.5625 6.3125 8.25C5.03125 8.625 3.875 9.40625 2.9375 10.5C1.5625 12.125 0.8125 14.3438 0.75 16.7812C0.75 17.0625 0.90625 17.3125 1.125 17.4375C1.96875 17.875 5 19.25 8.21875 19.25C8.5 19.25 8.78125 19.25 9.0625 19.2188C9.4375 19.1875 9.75 18.875 9.71875 18.4688C9.6875 18.0625 9.375 17.7812 8.96875 17.8125C8.75 17.8125 8.5 17.8125 8.25 17.8125C5.71875 17.8125 3.28125 16.875 2.1875 16.375C2.3125 14.4375 2.9375 12.6875 4 11.4375C5.125 10.0938 6.625 9.34375 8.25 9.34375ZM8.25 1.96875C9.71875 1.96875 10.9375 3.1875 10.9375 4.65625C10.9375 6.125 9.71875 7.34375 8.25 7.34375C6.78125 7.34375 5.5625 6.125 5.5625 4.65625C5.5625 3.1875 6.75 1.96875 8.25 1.96875Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_507_2765">
          <rect fill="white" height="20" width="20" />
        </clipPath>
      </defs>
    </svg>
  );
};

UserLock1.propTypes = {
  color: PropTypes.string,
};
