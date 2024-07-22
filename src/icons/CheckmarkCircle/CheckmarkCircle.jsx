/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

export const CheckmarkCircle = ({ className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1268_4155)">
        <path
          d="M10 0.5625C4.78125 0.5625 0.5625 4.78125 0.5625 10C0.5625 15.2188 4.78125 19.4688 10 19.4688C15.2188 19.4688 19.4688 15.2188 19.4688 10C19.4688 4.78125 15.2188 0.5625 10 0.5625ZM10 18.0625C5.5625 18.0625 1.96875 14.4375 1.96875 10C1.96875 5.5625 5.5625 1.96875 10 1.96875C14.4375 1.96875 18.0625 5.59375 18.0625 10.0312C18.0625 14.4375 14.4375 18.0625 10 18.0625Z"
          fill="white"
        />
        <path
          d="M12.6877 7.09368L8.96892 10.7187L7.28142 9.06243C7.00017 8.78118 6.56267 8.81243 6.28142 9.06243C6.00017 9.34368 6.03142 9.78118 6.28142 10.0624L8.28142 11.9999C8.46892 12.1874 8.71892 12.2812 8.96892 12.2812C9.21892 12.2812 9.46892 12.1874 9.65642 11.9999L13.6877 8.12493C13.9689 7.84368 13.9689 7.40618 13.6877 7.12493C13.4064 6.84368 12.9689 6.84368 12.6877 7.09368Z"
          fill="white"
        />
      </g>
      <defs>
        <clipPath id="clip0_1268_4155">
          <rect fill="white" height="20" width="20" />
        </clipPath>
      </defs>
    </svg>
  );
};
