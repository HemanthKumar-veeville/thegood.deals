/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const ShoppingCart11 = ({ color = "#1B4F4A", className }) => {
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
        d="M21.7875 1.20005C21.6375 0.750052 21.15 0.525052 20.7001 0.712552L17.9625 1.72505C17.625 1.83755 17.4 2.17505 17.4 2.51255V6.63755H4.72505C3.33755 6.63755 2.17505 7.76255 2.17505 9.18755V13.2751C2.17505 14.5876 3.22505 15.7126 4.53755 15.8251L17.4 16.8001V17.0626C17.4 17.7001 16.875 18.2251 16.2375 18.2251H5.66255C4.23755 18.2251 3.07505 19.3876 3.07505 20.8126C3.07505 22.2376 4.23755 23.4001 5.66255 23.4001C7.08755 23.4001 8.25005 22.2376 8.25005 20.8126C8.25005 20.5126 8.17505 20.1751 8.10005 19.9126H11.85C11.7375 20.2126 11.7 20.5126 11.7 20.8126C11.7 22.2376 12.8625 23.4001 14.2875 23.4001C15.7125 23.4001 16.875 22.2376 16.875 20.8126C16.875 20.4751 16.8 20.1751 16.6875 19.8751C18.0375 19.6501 19.0875 18.4876 19.0875 17.0626V3.15005L21.3 2.36255C21.7125 2.13755 21.9375 1.65005 21.7875 1.20005ZM17.4 15.0751L4.65005 14.1376C4.20005 14.1001 3.86255 13.7251 3.86255 13.2751V9.15005C3.86255 8.66255 4.23755 8.28755 4.72505 8.28755H17.4V15.0751ZM6.56255 20.7376C6.56255 21.2251 6.15005 21.6376 5.66255 21.6376C5.17505 21.6376 4.76255 21.2251 4.76255 20.7376C4.76255 20.2501 5.17505 19.8376 5.66255 19.8376C6.15005 19.8376 6.56255 20.2501 6.56255 20.7376ZM14.25 21.6751C13.7625 21.6751 13.35 21.2626 13.35 20.7751C13.35 20.2876 13.7625 19.8751 14.25 19.8751C14.7375 19.8751 15.15 20.2876 15.15 20.7751C15.15 21.2626 14.775 21.6751 14.25 21.6751Z"
        fill={color}
      />
    </svg>
  );
};

ShoppingCart11.propTypes = {
  color: PropTypes.string,
};
