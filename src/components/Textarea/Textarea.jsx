import PropTypes from "prop-types";
import React, { useState } from "react";

export const Textarea = ({
  typeHelperText = "Helper Text",
  secondLabelText = "0/50",
  placeholder = "Placeholder",
  label = "Label",
  state = "default",
  helperText,
  label1,
  secondLabel,
  className,
  divClassName,
  divClassNameOverride,
  groupClassName,
  onChange,
  type,
  maxLength = 250, // Adding a prop for maximum length
  description,
}) => {
  const [value, setValue] = useState(description || "");
  const [focusState, setFocusState] = useState(state);

  const handleFocus = () => {
    if (focusState !== "disabled") {
      setFocusState("focused");
    }
  };

  const handleBlur = () => {
    if (focusState !== "disabled") {
      setFocusState("default");
    }
  };

  const handleChange = (e) => {
    const newValue = e.target.value;

    if (newValue.length <= maxLength) {
      setValue(newValue);
      onChange(type, e);
    }
  };

  return (
    <div
      className={`w-[500px] flex flex-col items-start gap-2.5 h-[220px] relative ${className}`}
    >
      {label1 === "on" &&
        (helperText === "on" || secondLabel === "on") &&
        ["on", "off"].includes(secondLabel) && (
          <div
            className={`[font-family:'Inter',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-base font-medium leading-6 whitespace-nowrap relative ${
              focusState === "disabled" ? "text-darkdark-5" : "text-[#111928]"
            } ${divClassName}`}
          >
            {label}
          </div>
        )}

      {((helperText === "off" && label1 === "off" && secondLabel === "off") ||
        (helperText === "on" && label1 === "on" && secondLabel === "off") ||
        (label1 === "on" && secondLabel === "on")) && (
        <div className="w-full flex self-stretch flex-col items-start grow flex-1 relative">
          <div
            className={`flex items-start flex-1 p-5 relative w-full grow rounded-md gap-2.5 self-stretch ${
              focusState === "hover"
                ? "border-[#1b4f4a]"
                : focusState === "focused"
                ? "border-blueblue-light-4"
                : "border-stroke"
            } ${focusState === "focused" ? "mt-[-3.00px]" : ""} ${
              focusState === "focused" ? "mr-[-3.00px]" : ""
            } ${focusState === "focused" ? "ml-[-3.00px]" : ""} ${
              focusState === "disabled" ? "bg-graygray-2" : "bg-white"
            } ${focusState === "focused" ? "mb-[-3.00px]" : ""} ${
              focusState === "hover"
                ? "border-[1.5px] border-solid"
                : focusState === "focused"
                ? "border-[3px] border-solid"
                : "border border-solid"
            }`}
          >
            <textarea
              value={value}
              onChange={handleChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              placeholder={placeholder}
              className={`w-full h-full bg-transparent border-none focus:outline-none text-darkdark-6 text-base leading-6 resize-none`}
              disabled={focusState === "disabled"}
            />
          </div>
        </div>
      )}

      {label1 === "on" &&
        (helperText === "on" || secondLabel === "on") &&
        ["on", "off"].includes(secondLabel) && (
          <div
            className={`w-full flex self-stretch flex-[0_0_auto] relative ${
              helperText === "on" && secondLabel === "on"
                ? "items-center"
                : "items-end"
            } ${
              helperText === "off" || secondLabel === "off" ? "gap-[5px]" : ""
            } ${helperText === "off" ? "justify-end" : "justify-between"}`}
          >
            {(helperText === "off" || secondLabel === "off") && (
              <div
                className={`h-[22px] relative ${
                  secondLabel === "on" ? "w-[34px]" : "w-[79px]"
                } ${
                  secondLabel === "on" ? "mr-[-2.00px]" : ""
                } ${groupClassName}`}
              >
                <div
                  className={`[font-family:'Inter',Helvetica] left-0 tracking-[0] text-sm top-0 text-primary-text-color font-normal whitespace-nowrap leading-[22px] absolute ${
                    secondLabel === "on" ? "text-right" : ""
                  }`}
                >
                  {helperText === "on" && <>{typeHelperText}</>}

                  {secondLabel === "on" && (
                    <>{`${value.length}/${maxLength}`}</> // Display dynamic character count
                  )}
                </div>
              </div>
            )}

            {helperText === "on" && secondLabel === "on" && (
              <>
                <div className="w-[79px] h-[22px] relative">
                  <div className="[font-family:'Inter',Helvetica] left-0 tracking-[0] text-sm top-0 text-primary-text-color font-normal leading-[22px] whitespace-nowrap absolute">
                    {typeHelperText}
                  </div>
                </div>
                <div className="w-[34px] mr-[-2.00px] h-[22px] relative">
                  <div className="[font-family:'Inter',Helvetica] left-0 tracking-[0] text-sm top-0 text-primary-text-color font-normal text-right whitespace-nowrap leading-[22px] absolute">
                    {`${value.length}/${maxLength}`} {/* Dynamic count */}
                  </div>
                </div>
              </>
            )}
          </div>
        )}
    </div>
  );
};

Textarea.propTypes = {
  typeHelperText: PropTypes.string,
  secondLabelText: PropTypes.string,
  placeholder: PropTypes.string,
  label: PropTypes.string,
  state: PropTypes.oneOf(["disabled", "focused", "hover", "default"]),
  helperText: PropTypes.oneOf(["off", "on"]),
  label1: PropTypes.oneOf(["off", "on"]),
  secondLabel: PropTypes.oneOf(["off", "on"]),
  maxLength: PropTypes.number, // Adding maxLength to PropTypes
};

export default Textarea;
