/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const WebsiteMoney = ({ color = "#6B7280", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="17"
      viewBox="0 0 16 17"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.0002 2.40967H2.0002C1.1502 2.40967 0.450195 3.10967 0.450195 3.95967V13.0347C0.450195 13.8847 1.1502 14.5847 2.0002 14.5847H14.0002C14.8502 14.5847 15.5502 13.8847 15.5502 13.0347V3.98467C15.5502 3.10967 14.8502 2.40967 14.0002 2.40967ZM2.0002 3.53467H14.0002C14.2502 3.53467 14.4502 3.73467 14.4502 3.98467V5.15967H1.5502V3.98467C1.5502 3.73467 1.7502 3.53467 2.0002 3.53467ZM14.0002 13.4847H2.0002C1.7502 13.4847 1.5502 13.2847 1.5502 13.0347V6.28467H14.4252V13.0347C14.4502 13.2847 14.2502 13.4847 14.0002 13.4847Z"
        fill={color}
      />
      <path
        d="M7.6502 9.08467H9.0002C9.3002 9.08467 9.5502 8.83467 9.5502 8.53467C9.5502 8.23467 9.3002 7.98467 9.0002 7.98467H8.7502V7.95967C8.7502 7.65967 8.5002 7.40967 8.2002 7.40967C7.9002 7.40967 7.6502 7.65967 7.6502 7.95967V8.00967C6.9752 8.03467 6.4502 8.55967 6.4502 9.23467V9.25967C6.4502 9.93467 7.0002 10.4847 7.6752 10.4847H8.3502C8.4002 10.4847 8.4502 10.5347 8.4502 10.5847V10.6597C8.4502 10.7097 8.4002 10.7597 8.3502 10.7597H7.0002C6.7002 10.7597 6.4502 11.0097 6.4502 11.3097C6.4502 11.6097 6.7002 11.8597 7.0002 11.8597H7.6502V11.8847C7.6502 12.1847 7.9002 12.4347 8.2002 12.4347C8.5002 12.4347 8.7502 12.1847 8.7502 11.8847V11.7597C9.2252 11.5847 9.5502 11.1347 9.5502 10.6097V10.5347C9.5502 9.85967 9.0002 9.30967 8.3252 9.30967H7.6502C7.6002 9.30967 7.5502 9.25967 7.5502 9.20967V9.13467C7.5502 9.13467 7.6002 9.08467 7.6502 9.08467Z"
        fill="#111928"
      />
    </svg>
  );
};

WebsiteMoney.propTypes = {
  color: PropTypes.string,
};
