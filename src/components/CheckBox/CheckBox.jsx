import PropTypes from "prop-types";
import React from "react";
import { CheckedOnStyle2TextOff } from "../../icons/CheckedOnStyle2TextOff";
import { CheckedOnStyle3TextOff } from "../../icons/CheckedOnStyle3TextOff";

export const CheckBox = ({
  text = "Checkbox Text",
  checked,
  onChange, // Added onChange prop
  style,
  text1,
  checkedOffStyleClassName,
  rectangleClassName,
  rectangleClassNameOverride,
  divClassName,
}) => {
  return (
    <div onClick={onChange}>
      {((checked === "OFF" && text1 === "OFF") ||
        (checked === "ON" && style === "five" && text1 === "OFF") ||
        (checked === "ON" && style === "four" && text1 === "OFF") ||
        (checked === "ON" && style === "one" && text1 === "OFF") ||
        text1 === "ON") && (
        <div
          className={`${
            checked === "ON" &&
            text1 === "OFF" &&
            ["four", "one"].includes(style)
              ? "border border-solid"
              : ""
          } ${
            checked === "ON" &&
            text1 === "OFF" &&
            ["four", "one"].includes(style)
              ? "border-[#1b4f4a]"
              : ""
          } ${text1 === "OFF" ? "w-5" : ""} ${
            text1 === "ON" ? "inline-flex" : ""
          } ${text1 === "ON" ? "flex-wrap" : ""} ${
            text1 === "ON" ? "items-center" : ""
          } ${text1 === "ON" ? "gap-[10px_10px]" : ""} ${
            text1 === "OFF" ? "h-5" : ""
          } ${
            style === "one" && text1 === "OFF" && checked === "ON"
              ? "rounded"
              : checked === "ON" &&
                text1 === "OFF" &&
                ["five", "four"].includes(style)
              ? "rounded-[10px]"
              : ""
          } ${
            text1 === "OFF" && checked === "OFF"
              ? "bg-white"
              : checked === "ON" &&
                text1 === "OFF" &&
                ["four", "one"].includes(style)
              ? "bg-[#f1f4ff]"
              : text1 === "OFF" && checked === "ON" && style === "five"
              ? "bg-[#1b4f4a]"
              : ""
          } ${text1 === "ON" ? "relative" : ""} ${checkedOffStyleClassName}`}
        >
          {text1 === "ON" && (
            <>
              <div
                className={`w-5 h-5 relative ${
                  checked === "OFF" ||
                  (checked === "ON" && style === "four") ||
                  (checked === "ON" && style === "one") ||
                  (checked === "ON" && style === "three") ||
                  (checked === "ON" && style === "two")
                    ? "border border-solid"
                    : ""
                } ${
                  (checked === "OFF" && style === "four") ||
                  (checked === "OFF" && style === "one") ||
                  (checked === "OFF" && style === "three") ||
                  (checked === "OFF" && style === "two")
                    ? "border-stroke"
                    : (checked === "OFF" && style === "five") ||
                      (checked === "ON" && style === "four") ||
                      (checked === "ON" && style === "one") ||
                      (checked === "ON" && style === "three") ||
                      (checked === "ON" && style === "two")
                    ? "border-[#1b4f4a]"
                    : ""
                } ${
                  ["five", "four"].includes(style)
                    ? "rounded-[10px]"
                    : "rounded"
                } ${
                  checked === "OFF"
                    ? "bg-white"
                    : checked === "ON" && ["five", "two"].includes(style)
                    ? "bg-[#1b4f4a]"
                    : "bg-[#f1f4ff]"
                } ${rectangleClassName}`}
              >
                {checked === "ON" &&
                  ["five", "four", "one"].includes(style) && (
                    <div
                      className={`w-2.5 h-2.5 relative ${
                        style === "five" ? "left-[5px]" : "left-1"
                      } ${style === "five" ? "top-[5px]" : "top-1"} ${
                        style === "one" ? "rounded-sm" : "rounded-[5px]"
                      } ${
                        style === "five" ? "bg-white" : "bg-[#1b4f4a]"
                      } ${rectangleClassNameOverride}`}
                    />
                  )}

                {checked === "ON" && ["three", "two"].includes(style) && (
                  <img
                    className={`left-[5px] absolute ${
                      style === "three" ? "w-[9px]" : "w-2.5"
                    } ${style === "three" ? "top-[5px]" : "top-1.5"} ${
                      style === "three" ? "h-[9px]" : "h-[7px]"
                    } ${rectangleClassNameOverride}`}
                    alt="Frame"
                    src={
                      style === "three"
                        ? "/img/vector.svg"
                        : "/img/frame-1000002794-1.svg"
                    }
                  />
                )}
              </div>
              <div
                className={`font-body-medium-regular w-fit mt-[-1.00px] tracking-[var(--body-medium-regular-letter-spacing)] text-[length:var(--body-medium-regular-font-size)] [font-style:var(--body-medium-regular-font-style)] text-[#111928] font-[number:var(--body-medium-regular-font-weight)] leading-[var(--body-medium-regular-line-height)] whitespace-nowrap relative ${divClassName}`}
              >
                {text}
              </div>
            </>
          )}

          {text1 === "OFF" && (
            <div
              className={`${checked === "OFF" ? "border border-solid" : ""} ${
                style === "three" ||
                style === "two" ||
                (checked === "OFF" && style === "four") ||
                (checked === "OFF" && style === "one")
                  ? "border-stroke"
                  : style === "five" && checked === "OFF"
                  ? "border-[#1b4f4a]"
                  : ""
              } ${checked === "ON" ? "w-2.5" : ""} ${
                checked === "ON" && ["four", "one"].includes(style)
                  ? "left-1"
                  : checked === "ON" && style === "five"
                  ? "left-[5px]"
                  : ""
              } ${
                checked === "ON" && ["four", "one"].includes(style)
                  ? "top-1"
                  : checked === "ON" && style === "five"
                  ? "top-[5px]"
                  : ""
              } ${checked === "ON" ? "h-2.5" : "h-5"} ${
                checked === "OFF" && ["five", "four"].includes(style)
                  ? "rounded-[10px]"
                  : style === "one" && checked === "ON"
                  ? "rounded-sm"
                  : checked === "ON" && ["five", "four"].includes(style)
                  ? "rounded-[5px]"
                  : "rounded"
              } ${
                style === "five"
                  ? "bg-white"
                  : checked === "ON" && ["four", "one"].includes(style)
                  ? "bg-[#1b4f4a]"
                  : ""
              } ${checked === "ON" ? "relative" : ""}`}
            />
          )}
        </div>
      )}
      {text1 === "OFF" && style === "two" && checked === "ON" && (
        <CheckedOnStyle2TextOff className="!absolute !w-5 !h-5 !top-0 !left-0" />
      )}
      {text1 === "OFF" && style === "three" && checked === "ON" && (
        <CheckedOnStyle3TextOff className="!absolute !w-5 !h-5 !top-0 !left-0" />
      )}
    </div>
  );
};

CheckBox.propTypes = {
  text: PropTypes.string,
  checked: PropTypes.oneOf(["ON", "OFF"]),
  style: PropTypes.oneOf(["two", "three", "four", "one", "five"]),
  text1: PropTypes.oneOf(["OFF", "ON"]),
  onChange: PropTypes.func.isRequired, // Added onChange propType validation
};
