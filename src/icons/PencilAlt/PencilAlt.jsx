/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const PencilAlt = ({ color = "white", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_310_4999)">
        <path
          d="M23.3251 4.46248C23.3251 4.16248 23.2126 3.86248 22.9876 3.63748C22.5375 3.18748 22.0876 2.73748 21.6751 2.28748C21.2626 1.87498 20.8876 1.46248 20.475 1.08748C20.2875 0.86248 20.0626 0.71248 19.7626 0.67498C19.4251 0.63748 19.125 0.71248 18.8626 0.93748L16.3126 3.48748H3.03755C1.76255 3.48748 0.675049 4.53748 0.675049 5.84998V21C0.675049 22.275 1.72505 23.3625 3.03755 23.3625H18.225C19.5 23.3625 20.5876 22.3125 20.5876 21V7.68748L23.0251 5.24998C23.2126 5.02498 23.3251 4.76248 23.3251 4.46248ZM12.3 13.5C12.2625 13.5375 12.2625 13.5375 12.225 13.5375L9.52505 14.4375L10.425 11.7375C10.425 11.7 10.4626 11.7 10.4626 11.6625L17.2126 4.91248L19.0876 6.74998L12.3 13.5ZM18.8626 21C18.8626 21.375 18.5625 21.675 18.1875 21.675H3.03755C2.66255 21.675 2.36255 21.375 2.36255 21V5.81248C2.36255 5.43748 2.66255 5.13748 3.03755 5.13748H14.5876L9.26255 10.5C9.07505 10.6875 8.88755 10.95 8.81255 11.25L7.42505 15.45C7.31255 15.75 7.38755 16.0125 7.53755 16.275C7.65005 16.425 7.87505 16.65 8.28755 16.65H8.43755L12.7501 15.225C13.0126 15.15 13.2751 14.9625 13.4626 14.775L18.8626 9.37498V21ZM20.2501 5.58748L18.375 3.74998L19.5375 2.58748C19.8375 2.88748 21.0751 4.12498 21.3751 4.46248L20.2501 5.58748Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_310_4999">
          <rect fill="white" height="24" width="24" />
        </clipPath>
      </defs>
    </svg>
  );
};

PencilAlt.propTypes = {
  color: PropTypes.string,
};
