/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const UserAlt4 = ({ color = "#1B4F4A", className }) => {
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
        d="M12 10.5C9.1875 10.5 6.9375 8.28749 6.9375 5.58749C6.9375 2.88749 9.1875 0.674988 12 0.674988C14.8125 0.674988 17.0625 2.88749 17.0625 5.58749C17.0625 8.28749 14.8125 10.5 12 10.5ZM12 2.36249C10.125 2.36249 8.625 3.82499 8.625 5.58749C8.625 7.34999 10.125 8.81249 12 8.81249C13.875 8.81249 15.375 7.34999 15.375 5.58749C15.375 3.82499 13.875 2.36249 12 2.36249Z"
        fill={color}
      />
      <path
        d="M19.3875 23.3625H4.61251C3.86251 23.3625 3.26251 22.7625 3.26251 22.0125V18.6375C3.26251 14.9625 6.26251 11.9625 9.93751 11.9625H14.1C17.775 11.9625 20.775 14.9625 20.775 18.6375V22.0125C20.7375 22.725 20.1375 23.3625 19.3875 23.3625ZM4.95001 21.675H19.0875V18.6375C19.0875 15.9 16.8375 13.65 14.1 13.65H9.90001C7.16251 13.65 4.91251 15.9 4.91251 18.6375V21.675H4.95001Z"
        fill={color}
      />
    </svg>
  );
};

UserAlt4.propTypes = {
  color: PropTypes.string,
};
