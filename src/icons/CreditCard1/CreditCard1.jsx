/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const CreditCard1 = ({ color = "#1B4F4A", className }) => {
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
        d="M20.9998 4.16251H2.9998C1.7248 4.16251 0.674805 5.21251 0.674805 6.48751V17.475C0.674805 18.75 1.7248 19.8 2.9998 19.8H20.9998C22.2748 19.8 23.3248 18.75 23.3248 17.475V6.48751C23.3248 5.21251 22.2748 4.16251 20.9998 4.16251ZM2.9998 5.85001H20.9998C21.3748 5.85001 21.6748 6.15001 21.6748 6.52501V8.55001H2.3248V6.52501C2.3248 6.15001 2.6248 5.85001 2.9998 5.85001ZM21.6748 10.2V11.625H2.3248V10.2H21.6748ZM20.9998 18.15H2.9998C2.6248 18.15 2.3248 17.85 2.3248 17.475V13.3125H21.6373V17.475C21.6748 17.85 21.3748 18.15 20.9998 18.15Z"
        fill={color}
      />
    </svg>
  );
};

CreditCard1.propTypes = {
  color: PropTypes.string,
};
