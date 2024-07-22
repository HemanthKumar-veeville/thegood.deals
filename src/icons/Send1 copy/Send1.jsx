/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Send1 = ({ color = "#111928", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.625 9.28128C18.5 9.06253 18.3125 8.90628 18.0937 8.78128L3.68747 0.718779C3.43747 0.593779 3.15622 0.531279 2.87497 0.562529C2.59372 0.593779 2.34372 0.687529 2.12497 0.875029C1.90622 1.06253 1.74997 1.31253 1.68747 1.56253C1.59372 1.84378 1.62497 2.12503 1.71872 2.40628L4.40622 10L1.71872 17.5938C1.62497 17.875 1.62497 18.1563 1.68747 18.4063C1.74997 18.6875 1.90622 18.9063 2.12497 19.0938C2.34372 19.2813 2.59372 19.375 2.87497 19.4063C2.90622 19.4063 2.96872 19.4063 2.99997 19.4063C3.21872 19.4063 3.46872 19.3438 3.68747 19.2188L18.0937 11.1563C18.3125 11.0313 18.5 10.875 18.625 10.6563C18.75 10.4375 18.8125 10.1875 18.8125 9.96878C18.8125 9.75003 18.75 9.50003 18.625 9.28128ZM3.06247 1.96878L16.125 9.28128H5.65622L3.06247 1.96878ZM3.06247 18.0313L5.68747 10.7188H16.1562L3.06247 18.0313Z"
        fill={color}
      />
    </svg>
  );
};

Send1.propTypes = {
  color: PropTypes.string,
};
