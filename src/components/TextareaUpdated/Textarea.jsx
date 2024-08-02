import PropTypes from "prop-types";
import React, { useState } from "react";

export const Textarea = ({
  typeHelperText = "Helper Text",
  secondLabelText = "0/50",
  placeholder = "Placeholder",
  label = "Label",
  state,
  helperText,
  label1,
  secondLabel,
  className,
  value,
  onChange,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const getStateClass = () => {
    if (state === "disabled") return "bg-graygray-2 border-stroke";
    if (isFocused || state === "focused")
      return "bg-whitewhite border-blueblue-light-4 border-[3px]";
    if (state === "hover")
      return "bg-whitewhite border-primary-color border-[1.5px]";
    return "bg-whitewhite border-stroke";
  };

  return (
    <div
      className={`w-[500px] flex flex-col items-start gap-2.5 h-[220px] relative ${className} focus: outline-none`}
    >
      {label1 === "on" &&
        (helperText === "on" || secondLabel === "on") &&
        ["on", "off"].includes(secondLabel) && (
          <div
            className={` focus: outline-none [font-family:'Inter',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-base font-medium leading-6 whitespace-nowrap relative ${
              state === "disabled" ? "text-darkdark-5" : "text-darkdark"
            }`}
          >
            {label}
          </div>
        )}

      {((helperText === "off" && label1 === "off" && secondLabel === "off") ||
        (helperText === "on" && label1 === "on" && secondLabel === "off") ||
        (label1 === "on" && secondLabel === "on")) && (
        <div className="focus: outline-none w-full flex self-stretch flex-col items-start grow flex-1 relative">
          <div
            className={` focus: outline-none flex items-start flex-1 p-5 relative w-full grow rounded-md gap-2.5 self-stretch ${getStateClass()}`}
          >
            <textarea
              className={` focus: outline-none w-full h-full resize-none ${
                state === "disabled" ? "bg-graygray-2" : "bg-whitewhite"
              }`}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              disabled={state === "disabled"}
              name="message" // Ensure the textarea has a name attribute for handleChange function
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
            {helperText === "on" && secondLabel === "on" && (
              <div className="w-[79px] h-[22px] relative">
                <div className="font-body-small-regular left-0 [font-style:var(--body-small-regular-font-style)] tracking-[var(--body-small-regular-letter-spacing)] text-[length:var(--body-small-regular-font-size)] top-0 text-primary-text-color font-[number:var(--body-small-regular-font-weight)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap absolute">
                  {typeHelperText}
                </div>
              </div>
            )}

            <div
              className={`h-[22px] relative ${
                secondLabel === "off" ? "w-[79px]" : "w-[34px]"
              } ${secondLabel === "on" ? "mr-[-2.00px]" : ""}`}
            >
              <div
                className={`font-body-small-regular left-0 [font-style:var(--body-small-regular-font-style)] tracking-[var(--body-small-regular-letter-spacing)] text-[length:var(--body-small-regular-font-size)] top-0 text-primary-text-color font-[number:var(--body-small-regular-font-weight)] whitespace-nowrap leading-[var(--body-small-regular-line-height)] absolute ${
                  secondLabel === "on" ? "text-right" : ""
                }`}
              >
                {secondLabel === "on" && <>{secondLabelText}</>}
                {secondLabel === "off" && <>{typeHelperText}</>}
              </div>
            </div>
          </div>
        )}

      {((helperText === "off" && label1 === "on" && secondLabel === "off") ||
        (helperText === "on" && label1 === "off") ||
        (label1 === "off" && secondLabel === "on")) && (
        <>
          <div
            className={`relative ${label1 === "off" ? "flex" : ""} ${
              label1 === "on" ? "mt-[-1.00px]" : ""
            } ${label1 === "off" ? "items-start" : ""} ${
              label1 === "off" ? "flex-1" : ""
            } ${
              label1 === "on" && ["default", "focused", "hover"].includes(state)
                ? "text-darkdark"
                : state === "disabled" && label1 === "on"
                ? "text-darkdark-5"
                : ""
            } ${label1 === "on" ? "[font-family:'Inter',Helvetica]" : ""} ${
              label1 === "on" ? "leading-6" : ""
            } ${label1 === "on" ? "w-fit" : "w-full"} ${
              label1 === "off" ? "flex-col" : ""
            } ${label1 === "off" ? "grow" : ""} ${
              label1 === "on" ? "font-medium" : ""
            } ${label1 === "on" ? "whitespace-nowrap" : ""} ${
              label1 === "on" ? "text-base" : ""
            } ${label1 === "off" ? "self-stretch" : ""} ${
              label1 === "on" ? "tracking-[0]" : ""
            }`}
          >
            {label1 === "off" && (
              <div
                className={`flex items-start flex-1 p-5 relative w-full grow rounded-md gap-2.5 self-stretch ${getStateClass()}`}
              >
                <div
                  className={`font-body-medium-regular w-fit tracking-[var(--body-medium-regular-letter-spacing)] text-[length:var(--body-medium-regular-font-size)] [font-style:var(--body-medium-regular-font-style)] text-darkdark-6 font-[number:var(--body-medium-regular-font-weight)] leading-[var(--body-medium-regular-line-height)] whitespace-nowrap relative ${
                    ["default", "disabled"].includes(state)
                      ? "mt-[-1.00px]"
                      : state === "hover"
                      ? "mt-[-1.50px]"
                      : ""
                  }`}
                >
                  {placeholder}
                </div>
              </div>
            )}

            {label1 === "on" && <>{label}</>}
          </div>
          <div
            className={`w-full flex self-stretch relative ${
              label1 === "on" ? "flex-col" : ""
            } ${label1 === "on" ? "items-start" : "items-end"} ${
              label1 === "on" ? "grow" : ""
            } ${label1 === "off" ? "gap-[5px]" : ""} ${
              label1 === "on" ? "flex-1" : "flex-[0_0_auto]"
            } ${secondLabel === "on" ? "justify-end" : ""}`}
          >
            <div
              className={`relative ${
                label1 === "on" && ["default", "disabled"].includes(state)
                  ? "border-stroke"
                  : label1 === "on" && state === "hover"
                  ? "border-primary-color"
                  : label1 === "on" && state === "focused"
                  ? "border-blueblue-light-4"
                  : ""
              } ${label1 === "on" ? "flex" : ""} ${
                label1 === "on" && state === "focused" ? "mt-[-3.00px]" : ""
              } ${label1 === "on" ? "items-start" : ""} ${
                label1 === "on" ? "flex-1" : ""
              } ${label1 === "on" ? "p-5" : ""} ${
                helperText === "on"
                  ? "w-[79px]"
                  : label1 === "on"
                  ? "w-full"
                  : secondLabel === "on"
                  ? "w-[34px]"
                  : ""
              } ${label1 === "on" ? "grow" : ""} ${
                label1 === "on" && state === "focused"
                  ? "mr-[-3.00px]"
                  : secondLabel === "on"
                  ? "mr-[-2.00px]"
                  : ""
              } ${label1 === "on" ? "rounded-md" : ""} ${
                label1 === "on" ? "gap-2.5" : ""
              } ${
                label1 === "on" && state === "focused" ? "ml-[-3.00px]" : ""
              } ${
                label1 === "on" &&
                ["default", "focused", "hover"].includes(state)
                  ? "bg-whitewhite"
                  : state === "disabled" && label1 === "on"
                  ? "bg-graygray-2"
                  : ""
              } ${
                label1 === "on" && state === "focused" ? "mb-[-3.00px]" : ""
              } ${
                label1 === "on" && ["default", "disabled"].includes(state)
                  ? "border border-solid"
                  : label1 === "on" && state === "hover"
                  ? "border-[1.5px] border-solid"
                  : label1 === "on" && state === "focused"
                  ? "border-[3px] border-solid"
                  : ""
              } ${label1 === "on" ? "self-stretch" : ""} ${
                label1 === "off" ? "h-[22px]" : ""
              }`}
            >
              <div
                className={`whitespace-nowrap ${
                  label1 === "on"
                    ? "font-body-medium-regular"
                    : "font-body-small-regular"
                } ${label1 === "on" ? "w-fit" : ""} ${
                  label1 === "off" ? "left-0" : ""
                } ${
                  label1 === "on"
                    ? "[font-style:var(--body-medium-regular-font-style)]"
                    : "[font-style:var(--body-small-regular-font-style)]"
                } ${
                  label1 === "on"
                    ? "tracking-[var(--body-medium-regular-letter-spacing)]"
                    : "tracking-[var(--body-small-regular-letter-spacing)]"
                } ${
                  label1 === "on"
                    ? "text-[length:var(--body-medium-regular-font-size)]"
                    : "text-[length:var(--body-small-regular-font-size)]"
                } ${
                  label1 === "on" && ["default", "disabled"].includes(state)
                    ? "mt-[-1.00px]"
                    : label1 === "on" && state === "hover"
                    ? "mt-[-1.50px]"
                    : ""
                } ${label1 === "off" ? "top-0" : ""} ${
                  label1 === "on"
                    ? "text-darkdark-6"
                    : "text-primary-text-color"
                } ${
                  label1 === "on"
                    ? "font-[number:var(--body-medium-regular-font-weight)]"
                    : "font-[number:var(--body-small-regular-font-weight)]"
                } ${secondLabel === "on" ? "text-right" : ""} ${
                  label1 === "on"
                    ? "leading-[var(--body-medium-regular-line-height)]"
                    : "leading-[var(--body-small-regular-line-height)]"
                } ${label1 === "on" ? "relative" : "absolute"}`}
              >
                {helperText === "on" && <>{typeHelperText}</>}

                {label1 === "on" && <>{placeholder}</>}

                {secondLabel === "on" && <>{secondLabelText}</>}
              </div>
            </div>
          </div>
        </>
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
  className: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
