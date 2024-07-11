/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconRelume42 } from "../../icons/IconRelume42";

export const Button = ({
  style,
  small,
  darkMode,
  iconPosition,
  className,
  divClassName,
  text = "Button",
  icon = <IconRelume42 className="!relative !w-6 !h-6" color="#2A4E4A" />,
}) => {
  return (
    <div
      className={`inline-flex items-center rounded-[100px] justify-center relative ${
        ["primary", "secondary"].includes(style) ? "border border-solid" : ""
      } ${
        !darkMode && ["primary", "secondary"].includes(style)
          ? "border-green"
          : darkMode && ["primary", "secondary"].includes(style)
          ? "border-white"
          : ""
      } ${
        (iconPosition === "no-icon" && style === "primary") ||
        (iconPosition === "no-icon" && style === "secondary") ||
        (iconPosition === "no-icon" && style === "tertiary") ||
        style === "link"
          ? "gap-2"
          : "gap-3"
      } ${
        (iconPosition === "leading" && !small && style === "primary") ||
        (iconPosition === "leading" && !small && style === "secondary") ||
        (iconPosition === "leading" && !small && style === "tertiary") ||
        (iconPosition === "no-icon" && !small && style === "primary") ||
        (iconPosition === "no-icon" && !small && style === "secondary") ||
        (iconPosition === "no-icon" && !small && style === "tertiary") ||
        (iconPosition === "trailing" && !small && style === "primary") ||
        (iconPosition === "trailing" && !small && style === "secondary") ||
        (iconPosition === "trailing" && !small && style === "tertiary")
          ? "px-6 py-3"
          : (iconPosition === "only" && !small && style === "primary") ||
            (iconPosition === "only" && !small && style === "secondary") ||
            (iconPosition === "only" && !small && style === "tertiary")
          ? "p-3"
          : small && ["leading", "no-icon", "trailing"].includes(iconPosition)
          ? "px-5 py-2"
          : small && iconPosition === "only"
          ? "p-2"
          : ""
      } ${
        !darkMode && style === "primary" ? "bg-green" : style === "primary" && darkMode ? "bg-white" : ""
      } ${className}`}
    >
      {iconPosition === "no-icon" && (
        <div
          className={`[font-family:'Rethink_Sans',Helvetica] w-fit tracking-[0] text-base font-normal leading-6 whitespace-nowrap relative ${
            (!darkMode && style === "link") ||
            (!darkMode && style === "secondary") ||
            (!darkMode && style === "tertiary") ||
            (darkMode && style === "primary")
              ? "text-green"
              : "text-white"
          } ${divClassName}`}
        >
          {text}
        </div>
      )}

      {["leading", "only"].includes(iconPosition) && (
        <IconRelume42
          className="!relative !w-6 !h-6"
          color={
            (!darkMode && style === "link") ||
            (!darkMode && style === "secondary") ||
            (!darkMode && style === "tertiary") ||
            (darkMode && style === "primary")
              ? "#2A4E4A"
              : "white"
          }
        />
      )}

      {["leading", "trailing"].includes(iconPosition) && (
        <div
          className={`[font-family:'Rethink_Sans',Helvetica] w-fit tracking-[0] text-base relative font-normal whitespace-nowrap leading-6 ${
            (!darkMode && style === "link") ||
            (!darkMode && style === "secondary") ||
            (!darkMode && style === "tertiary") ||
            (darkMode && style === "primary")
              ? "text-green"
              : "text-white"
          }`}
        >
          {text}
        </div>
      )}

      {iconPosition === "trailing" && <>{icon}</>}
    </div>
  );
};

Button.propTypes = {
  style: PropTypes.oneOf(["primary", "link", "secondary", "tertiary"]),
  small: PropTypes.bool,
  darkMode: PropTypes.bool,
  iconPosition: PropTypes.oneOf(["no-icon", "trailing", "only", "leading"]),
  text: PropTypes.string,
};
