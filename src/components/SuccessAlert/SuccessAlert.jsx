/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { CheckmarkCircle1 } from "../../icons/CheckmarkCircle1";
import { CheckmarkCircle5 } from "../../icons/CheckmarkCircle5";
import { useTranslation } from "react-i18next"; // Import translation hook

export const SuccessAlert = ({
  style,
  className,
  frameClassName,
  icon = (
    <CheckmarkCircle1
      className="!absolute !w-3 !h-3 !top-1 !left-1"
      color="white"
    />
  ),
  divClassName,
  text = "Your item has been added successfully", // Default text replaced with translation logic below
}) => {
  const { t } = useTranslation(); // Use translation hook

  return (
    <div
      className={`inline-flex items-start gap-[25px] rounded-lg relative ${
        style === "two" ? "border-greengreen" : ""
      } ${style === "two" ? "border-l-[6px]" : ""} ${
        style === "one" ? "shadow-shadow-1" : ""
      } ${
        style === "two"
          ? "p-[30px]"
          : style === "three"
          ? "px-[18px] py-[15px]"
          : "p-[35px]"
      } ${style === "two" ? "[border-left-style:solid]" : ""} ${
        style === "one" ? "bg-whitewhite" : "bg-[#01A9DB]-light-6"
      } ${className}`}
    >
      {["one", "two"].includes(style) && (
        <>
          <div
            className={`w-[34px] h-[34px] relative ${
              style === "two" ? "rounded-md" : ""
            } ${style === "two" ? "bg-[#01A9DB]" : ""}`}
          >
            {style === "one" && (
              <div className="relative h-[34px] rounded-md">
                <div className="absolute w-[34px] h-[34px] top-0 left-0 bg-[#01A9DB] rounded-md opacity-10" />
                <CheckmarkCircle1
                  className="!absolute !w-[18px] !h-[18px] !top-2 !left-2"
                  color="#22AD5C"
                />
              </div>
            )}

            {style === "two" && (
              <CheckmarkCircle5
                className="!absolute !w-[18px] !h-[18px] !top-2 !left-2"
                color="white"
              />
            )}
          </div>
          <div
            className={`inline-flex flex-col items-start flex-[0_0_auto] relative ${
              style === "two" ? "gap-2" : "gap-[25px]"
            }`}
          >
            <div
              className={`relative ${
                style === "two" ? "[font-family:'Inter',Helvetica]" : ""
              } ${style === "two" ? "w-fit" : ""} ${
                style === "one" ? "inline-flex" : ""
              } ${style === "two" ? "mt-[-1.00px]" : ""} ${
                style === "one" ? "flex-col" : ""
              } ${style === "two" ? "text-lg" : ""} ${
                style === "one" ? "items-start" : ""
              } ${style === "two" ? "tracking-[0]" : ""} ${
                style === "one" ? "gap-3.5" : ""
              } ${style === "one" ? "flex-[0_0_auto]" : ""} ${
                style === "two" ? "text-[#004434]" : ""
              } ${style === "two" ? "font-semibold" : ""} ${
                style === "two" ? "leading-[22px]" : ""
              } ${style === "two" ? "whitespace-nowrap" : ""}`}
            >
              {style === "one" && (
                <>
                  <div className="relative w-fit mt-[-1.00px] font-body-large-semibold font-[number:var(--body-large-semibold-font-weight)] text-darkdark text-[length:var(--body-large-semibold-font-size)] tracking-[var(--body-large-semibold-letter-spacing)] leading-[var(--body-large-semibold-line-height)] whitespace-nowrap [font-style:var(--body-large-semibold-font-style)]">
                    {t("SuccessAlert.messageSent")}
                  </div>
                  <p className="relative w-[740px] font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-primary-text-color text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] [font-style:var(--body-medium-regular-font-style)]">
                    {t("SuccessAlert.messageDescription")}
                  </p>
                </>
              )}

              {style === "two" && <>{t("SuccessAlert.messageSent")}</>}
            </div>
            <div
              className={`relative ${
                style === "two" ? "font-body-medium-regular" : ""
              } ${style === "two" ? "w-[740px]" : ""} ${
                style === "one" ? "inline-flex" : ""
              } ${
                style === "two"
                  ? "tracking-[var(--body-medium-regular-letter-spacing)]"
                  : ""
              } ${
                style === "two"
                  ? "[font-style:var(--body-medium-regular-font-style)]"
                  : ""
              } ${
                style === "two"
                  ? "text-[length:var(--body-medium-regular-font-size)]"
                  : ""
              } ${style === "one" ? "items-start" : ""} ${
                style === "one" ? "gap-5" : ""
              } ${style === "one" ? "flex-[0_0_auto]" : ""} ${
                style === "two" ? "text-primary-text-color" : ""
              } ${
                style === "two"
                  ? "font-[number:var(--body-medium-regular-font-weight)]"
                  : ""
              } ${
                style === "two"
                  ? "leading-[var(--body-medium-regular-line-height)]"
                  : ""
              }`}
            >
              {style === "one" && (
                <>
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-greengreen text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                    {t("SuccessAlert.viewStatus")}
                  </div>
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-darkdark text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                    {t("SuccessAlert.dismiss")}
                  </div>
                </>
              )}

              {style === "two" && <p>{t("SuccessAlert.messageDescription")}</p>}
            </div>
          </div>
        </>
      )}

      {style === "three" && (
        <div
          className={`inline-flex items-center gap-3 relative flex-[0_0_auto] ${frameClassName}`}
        >
          <div className="relative w-5 h-5 bg-[#01A9DB] rounded-[10px]">
            {icon}
          </div>
          <p
            className={`relative w-fit mt-[-1.00px] font-body-medium-medium font-[number:var(--body-medium-medium-font-weight)] text-[#004434] text-[length:var(--body-medium-medium-font-size)] tracking-[var(--body-medium-medium-letter-spacing)] leading-[var(--body-medium-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-medium-font-style)] ${divClassName}`}
          >
            {t("SuccessAlert.itemAdded")}
          </p>
        </div>
      )}
    </div>
  );
};

SuccessAlert.propTypes = {
  style: PropTypes.oneOf(["two", "three", "one"]),
  text: PropTypes.string,
};
