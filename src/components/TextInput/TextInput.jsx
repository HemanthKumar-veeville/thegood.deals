/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const TextInput = ({
  textInputClassName,
  className,
  text = "Placeholder",
  inputType = "text",
}) => {
  return (
    <input
      className={`w-[367px] p-3 relative bg-white border border-solid border-green flex-1 [font-family:'Rethink_Sans',Helvetica] font-normal text-neutraldark-gray text-base tracking-[0] leading-6 ${textInputClassName}`}
      placeholder={text}
      type={inputType}
    />
  );
};

TextInput.propTypes = {
  text: PropTypes.string,
  inputType: PropTypes.string,
};
