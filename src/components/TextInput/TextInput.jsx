/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { useTranslation } from "react-i18next"; // Import translation hook

export const TextInput = ({
  textInputClassName,
  className,
  text = "Placeholder", // Default text replaced with translation logic below
  inputType = "text",
}) => {
  const { t } = useTranslation(); // Use translation hook

  return (
    <input
      className={`w-[367px] p-3 relative bg-white border border-solid border-green flex-1 [font-family:'Rethink_Sans',Helvetica] font-normal text-neutraldark-gray text-base tracking-[0] leading-6 ${textInputClassName}`}
      placeholder={t("TextInput.placeholder", { defaultValue: text })} // Translation key with fallback to 'text'
      type={inputType}
    />
  );
};

TextInput.propTypes = {
  text: PropTypes.string,
  inputType: PropTypes.string,
};
