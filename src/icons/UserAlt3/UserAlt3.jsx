/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const UserAlt3 = ({ color = "#1B4F4A", className }) => {
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
        d="M12 10.5C9.1875 10.5 6.9375 8.2875 6.9375 5.5875C6.9375 2.8875 9.1875 0.675003 12 0.675003C14.8125 0.675003 17.0625 2.8875 17.0625 5.5875C17.0625 8.2875 14.8125 10.5 12 10.5ZM12 2.3625C10.125 2.3625 8.625 3.825 8.625 5.5875C8.625 7.35 10.125 8.8125 12 8.8125C13.875 8.8125 15.375 7.35 15.375 5.5875C15.375 3.825 13.875 2.3625 12 2.3625Z"
        fill={color}
      />
      <path
        d="M19.3877 23.3625H4.6127C3.8627 23.3625 3.2627 22.7625 3.2627 22.0125V18.6375C3.2627 14.9625 6.26269 11.9625 9.9377 11.9625H14.1002C17.7752 11.9625 20.7752 14.9625 20.7752 18.6375V22.0125C20.7377 22.725 20.1377 23.3625 19.3877 23.3625ZM4.9502 21.675H19.0877V18.6375C19.0877 15.9 16.8377 13.65 14.1002 13.65H9.9002C7.1627 13.65 4.9127 15.9 4.9127 18.6375V21.675H4.9502Z"
        fill={color}
      />
    </svg>
  );
};

UserAlt3.propTypes = {
  color: PropTypes.string,
};
