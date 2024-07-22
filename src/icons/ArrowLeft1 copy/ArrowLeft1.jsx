/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ArrowLeft1 = ({ color = "#111928", className }) => {
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
        d="M15.7502 8.38125H3.74082L8.52207 3.51562C8.77519 3.2625 8.77519 2.86875 8.52207 2.61562C8.26894 2.3625 7.87519 2.3625 7.62207 2.61562L1.8002 8.52187C1.54707 8.775 1.54707 9.16875 1.8002 9.42188L7.62207 15.3281C7.73457 15.4406 7.90332 15.525 8.07207 15.525C8.24082 15.525 8.38144 15.4688 8.52207 15.3562C8.77519 15.1031 8.77519 14.7094 8.52207 14.4563L3.76894 9.64687H15.7502C16.0877 9.64687 16.3689 9.36562 16.3689 9.02812C16.3689 8.6625 16.0877 8.38125 15.7502 8.38125Z"
        fill={color}
      />
    </svg>
  );
};

ArrowLeft1.propTypes = {
  color: PropTypes.string,
};
