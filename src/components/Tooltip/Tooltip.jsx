/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Tooltip = ({
  position,
  color,
  className,
  polygonClassName,
  text = "Tooltip",
  polygonClassNameOverride,
  polygon = "/img/polygon-1-2.svg",
}) => {
  return (
    <div
      className={`inline-flex items-start gap-2.5 px-3.5 py-[5px] rounded-[5px] justify-center relative ${
        color === "white" ? "shadow-shadow-1" : ""
      } ${color === "dark" ? "bg-darkdark" : color === "white" ? "bg-whitewhite" : "bg-primary-color"} ${className}`}
    >
      {position === "right" && (
        <img
          className={`w-px left-0 top-2.5 h-3 absolute ${polygonClassName}`}
          alt="Polygon"
          src={
            color === "dark"
              ? "/img/polygon-1-12.svg"
              : color === "white"
              ? "/img/polygon-1-13.svg"
              : "/img/polygon-1-11.svg"
          }
        />
      )}

      <div
        className={`font-body-small-regular w-fit mt-[-1.00px] tracking-[var(--body-small-regular-letter-spacing)] text-[length:var(--body-small-regular-font-size)] [font-style:var(--body-small-regular-font-style)] font-[number:var(--body-small-regular-font-weight)] text-center whitespace-nowrap leading-[var(--body-small-regular-line-height)] relative ${
          color === "white" ? "text-darkdark" : "text-whitewhite"
        } ${
          position === "right"
            ? polygonClassNameOverride
            : ["bottom", "left", "top"].includes(position)
            ? polygonClassName
            : undefined
        }`}
      >
        {text}
      </div>
      {["bottom", "left", "top"].includes(position) && (
        <img
          className={`absolute ${position === "left" ? "w-[7px]" : "w-3"} ${
            position === "left" ? "left-[73px]" : "left-[30px]"
          } ${position === "bottom" ? "top-0" : position === "left" ? "top-2.5" : "top-8"} ${
            position === "bottom" ? "h-px" : position === "left" ? "h-3" : "h-[7px]"
          } ${polygonClassNameOverride}`}
          alt="Polygon"
          src={
            color === "dark" && position === "top"
              ? "/img/polygon-1-3.svg"
              : position === "top" && color === "white"
              ? "/img/polygon-1-4.svg"
              : position === "bottom" && color === "primary"
              ? "/img/polygon-1-5.svg"
              : color === "dark" && position === "bottom"
              ? "/img/polygon-1-6.svg"
              : position === "bottom" && color === "white"
              ? "/img/polygon-1-7.svg"
              : position === "left" && color === "primary"
              ? "/img/polygon-1-8.svg"
              : color === "dark" && position === "left"
              ? "/img/polygon-1-9.svg"
              : color === "white" && position === "left"
              ? "/img/polygon-1-10.svg"
              : polygon
          }
        />
      )}
    </div>
  );
};

Tooltip.propTypes = {
  position: PropTypes.oneOf(["left", "right", "top", "bottom"]),
  color: PropTypes.oneOf(["primary", "white", "dark"]),
  text: PropTypes.string,
  polygon: PropTypes.string,
};
