/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

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
  divClassName,
  divClassNameOverride,
  groupClassName,
}) => {
  return (
    <div className={`w-[500px] flex flex-col items-start gap-2.5 h-[220px] relative ${className}`}>
      {label1 === "on" && (helperText === "on" || secondLabel === "on") && ["on", "off"].includes(secondLabel) && (
        <div
          className={`[font-family:'Inter',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-base font-medium leading-6 whitespace-nowrap relative ${
            state === "disabled" ? "text-darkdark-5" : "text-[#111928]"
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
              state === "hover" ? "border-[#1b4f4a]" : state === "focused" ? "border-blueblue-light-4" : "border-stroke"
            } ${state === "focused" ? "mt-[-3.00px]" : ""} ${state === "focused" ? "mr-[-3.00px]" : ""} ${
              state === "focused" ? "ml-[-3.00px]" : ""
            } ${state === "disabled" ? "bg-graygray-2" : "bg-white"} ${state === "focused" ? "mb-[-3.00px]" : ""} ${
              state === "hover"
                ? "border-[1.5px] border-solid"
                : state === "focused"
                ? "border-[3px] border-solid"
                : "border border-solid"
            }`}
          >
            <div
              className={`font-body-medium-regular w-fit tracking-[var(--body-medium-regular-letter-spacing)] text-[length:var(--body-medium-regular-font-size)] [font-style:var(--body-medium-regular-font-style)] text-darkdark-6 font-[number:var(--body-medium-regular-font-weight)] leading-[var(--body-medium-regular-line-height)] whitespace-nowrap relative ${
                ["default", "disabled"].includes(state) ? "mt-[-1.00px]" : state === "hover" ? "mt-[-1.50px]" : ""
              } ${label1 === "on" ? divClassNameOverride : undefined}`}
            >
              {placeholder}
            </div>
          </div>
        </div>
      )}

      {label1 === "on" && (helperText === "on" || secondLabel === "on") && ["on", "off"].includes(secondLabel) && (
        <div
          className={`w-full flex self-stretch flex-[0_0_auto] relative ${
            helperText === "on" && secondLabel === "on" ? "items-center" : "items-end"
          } ${helperText === "off" || secondLabel === "off" ? "gap-[5px]" : ""} ${
            helperText === "off" ? "justify-end" : "justify-between"
          }`}
        >
          {(helperText === "off" || secondLabel === "off") && (
            <div
              className={`h-[22px] relative ${secondLabel === "on" ? "w-[34px]" : "w-[79px]"} ${
                secondLabel === "on" ? "mr-[-2.00px]" : ""
              } ${groupClassName}`}
            >
              <div
                className={`[font-family:'Inter',Helvetica] left-0 tracking-[0] text-sm top-0 text-primary-text-color font-normal whitespace-nowrap leading-[22px] absolute ${
                  secondLabel === "on" ? "text-right" : ""
                }`}
              >
                {helperText === "on" && <>{typeHelperText}</>}

                {secondLabel === "on" && <>{secondLabelText}</>}
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
                  {secondLabelText}
                </div>
              </div>
            </>
          )}
        </div>
      )}

      {((helperText === "off" && label1 === "on" && secondLabel === "off") ||
        (helperText === "on" && label1 === "off") ||
        (label1 === "off" && secondLabel === "on")) && (
        <>
          <div
            className={`relative ${label1 === "off" ? "flex" : ""} ${label1 === "on" ? "mt-[-1.00px]" : ""} ${
              label1 === "off" ? "items-start" : ""
            } ${label1 === "off" ? "flex-1" : ""} ${
              label1 === "on" && ["default", "focused", "hover"].includes(state)
                ? "text-[#111928]"
                : state === "disabled" && label1 === "on"
                ? "text-darkdark-5"
                : ""
            } ${label1 === "on" ? "[font-family:'Inter',Helvetica]" : ""} ${label1 === "on" ? "leading-6" : ""} ${
              label1 === "on" ? "w-fit" : "w-full"
            } ${label1 === "off" ? "flex-col" : ""} ${label1 === "off" ? "grow" : ""} ${
              label1 === "on" ? "font-medium" : ""
            } ${label1 === "on" ? "whitespace-nowrap" : ""} ${label1 === "on" ? "text-base" : ""} ${
              label1 === "off" ? "self-stretch" : ""
            } ${label1 === "on" ? "tracking-[0]" : ""}`}
          >
            {label1 === "off" && (
              <div
                className={`flex items-start flex-1 p-5 relative w-full grow rounded-md gap-2.5 self-stretch ${
                  state === "hover"
                    ? "border-[#1b4f4a]"
                    : state === "focused"
                    ? "border-blueblue-light-4"
                    : "border-stroke"
                } ${state === "focused" ? "mt-[-3.00px]" : ""} ${state === "focused" ? "mr-[-3.00px]" : ""} ${
                  state === "focused" ? "ml-[-3.00px]" : ""
                } ${state === "disabled" ? "bg-graygray-2" : "bg-white"} ${state === "focused" ? "mb-[-3.00px]" : ""} ${
                  state === "hover"
                    ? "border-[1.5px] border-solid"
                    : state === "focused"
                    ? "border-[3px] border-solid"
                    : "border border-solid"
                }`}
              >
                <div
                  className={`font-body-medium-regular w-fit tracking-[var(--body-medium-regular-letter-spacing)] text-[length:var(--body-medium-regular-font-size)] [font-style:var(--body-medium-regular-font-style)] text-darkdark-6 font-[number:var(--body-medium-regular-font-weight)] leading-[var(--body-medium-regular-line-height)] whitespace-nowrap relative ${
                    ["default", "disabled"].includes(state) ? "mt-[-1.00px]" : state === "hover" ? "mt-[-1.50px]" : ""
                  }`}
                >
                  {placeholder}
                </div>
              </div>
            )}

            {label1 === "on" && <>{label}</>}
          </div>
          <div
            className={`w-full flex self-stretch relative ${label1 === "on" ? "flex-col" : ""} ${
              label1 === "on" ? "items-start" : "items-end"
            } ${label1 === "on" ? "grow" : ""} ${label1 === "off" ? "gap-[5px]" : ""} ${
              label1 === "on" ? "flex-1" : "flex-[0_0_auto]"
            } ${secondLabel === "on" ? "justify-end" : ""}`}
          >
            <div
              className={`relative ${
                label1 === "on" && ["default", "disabled"].includes(state)
                  ? "border-stroke"
                  : label1 === "on" && state === "hover"
                  ? "border-[#1b4f4a]"
                  : label1 === "on" && state === "focused"
                  ? "border-blueblue-light-4"
                  : ""
              } ${label1 === "on" ? "flex" : ""} ${label1 === "on" && state === "focused" ? "mt-[-3.00px]" : ""} ${
                label1 === "on" ? "items-start" : ""
              } ${label1 === "on" ? "flex-1" : ""} ${label1 === "on" ? "p-5" : ""} ${
                helperText === "on" ? "w-[79px]" : label1 === "on" ? "w-full" : secondLabel === "on" ? "w-[34px]" : ""
              } ${label1 === "on" ? "grow" : ""} ${
                label1 === "on" && state === "focused" ? "mr-[-3.00px]" : secondLabel === "on" ? "mr-[-2.00px]" : ""
              } ${label1 === "on" ? "rounded-md" : ""} ${label1 === "on" ? "gap-2.5" : ""} ${
                label1 === "on" && state === "focused" ? "ml-[-3.00px]" : ""
              } ${
                label1 === "on" && ["default", "focused", "hover"].includes(state)
                  ? "bg-white"
                  : state === "disabled" && label1 === "on"
                  ? "bg-graygray-2"
                  : ""
              } ${label1 === "on" && state === "focused" ? "mb-[-3.00px]" : ""} ${
                label1 === "on" && ["default", "disabled"].includes(state)
                  ? "border border-solid"
                  : label1 === "on" && state === "hover"
                  ? "border-[1.5px] border-solid"
                  : label1 === "on" && state === "focused"
                  ? "border-[3px] border-solid"
                  : ""
              } ${label1 === "on" ? "self-stretch" : ""} ${label1 === "off" ? "h-[22px]" : ""}`}
            >
              <div
                className={`whitespace-nowrap ${
                  label1 === "on" ? "font-body-medium-regular" : "[font-family:'Inter',Helvetica]"
                } ${label1 === "on" ? "w-fit" : ""} ${label1 === "off" ? "left-0" : ""} ${
                  label1 === "on" ? "tracking-[var(--body-medium-regular-letter-spacing)]" : "tracking-[0]"
                } ${
                  label1 === "on" && ["default", "disabled"].includes(state)
                    ? "mt-[-1.00px]"
                    : label1 === "on" && state === "hover"
                    ? "mt-[-1.50px]"
                    : ""
                } ${label1 === "on" ? "text-[length:var(--body-medium-regular-font-size)]" : "text-sm"} ${
                  label1 === "on" ? "[font-style:var(--body-medium-regular-font-style)]" : ""
                } ${label1 === "off" ? "top-0" : ""} ${
                  label1 === "on" ? "text-darkdark-6" : "text-primary-text-color"
                } ${label1 === "on" ? "font-[number:var(--body-medium-regular-font-weight)]" : "font-normal"} ${
                  secondLabel === "on" ? "text-right" : ""
                } ${label1 === "on" ? "leading-[var(--body-medium-regular-line-height)]" : "leading-[22px]"} ${
                  label1 === "on" ? "relative" : "absolute"
                }`}
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
};
