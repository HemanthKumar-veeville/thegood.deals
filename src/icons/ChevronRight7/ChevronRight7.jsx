/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ChevronRight7 = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="18"
      viewBox="0 0 18 18"
      width="18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.82188 16.1156C5.65313 16.1156 5.51251 16.0594 5.37188 15.9469C5.11876 15.6938 5.11876 15.3 5.37188 15.0469L11.2781 9L5.37188 2.98125C5.11876 2.72813 5.11876 2.33438 5.37188 2.08125C5.62501 1.82813 6.01876 1.82813 6.27188 2.08125L12.6281 8.55C12.8813 8.80313 12.8813 9.19688 12.6281 9.45L6.27188 15.9188C6.15938 16.0313 5.99063 16.1156 5.82188 16.1156Z"
        fill={color}
      />
    </svg>
  );
};

ChevronRight7.propTypes = {
  color: PropTypes.string,
};
