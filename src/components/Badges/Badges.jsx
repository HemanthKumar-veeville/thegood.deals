import PropTypes from "prop-types";
import React from "react";

export const Badges = ({
  text = "Primary",
  color,
  state,
  round,
  className,
  divClassName,
  text1 = "Warning",
  text2 = "Success",
  text3 = "Info",
  imageSrc,
}) => {
  return (
    <div
      className={`inline-flex items-center gap-px px-2.5 py-[3px] justify-center relative ${
        state === "outline" ? "border border-solid" : ""
      } ${
        color === "secondary" && state === "outline"
          ? "border-secondary-color"
          : color === "dark" && state === "outline"
          ? "border-darkdark"
          : color === "primary" && state === "outline"
          ? "border-primary-color"
          : color === "warning" && state === "outline"
          ? "border-yellowyellow-dark"
          : color === "danger" && state === "outline"
          ? "border-redred"
          : color === "success" && state === "outline"
          ? "border-greengreen"
          : color === "info" && state === "outline"
          ? "border-cyancyan"
          : color === "gray" && state === "outline"
          ? "border-primary-text-color"
          : color === "light" && state === "outline"
          ? "border-graygray-3"
          : ""
      } ${round === "full-round" ? "rounded-[30px]" : "rounded"} ${
        state === "fill" && color === "secondary"
          ? "bg-secondary-color"
          : color === "secondary" && state === "duo-tone"
          ? "bg-[#13c2961a]"
          : color === "dark" && state === "fill"
          ? "bg-darkdark"
          : color === "dark" && state === "duo-tone"
          ? "bg-[#212b361a]"
          : state === "fill" && color === "primary"
          ? "bg-primary-color"
          : color === "primary" && state === "duo-tone"
          ? "bg-[#4261ff1a]"
          : state === "fill" && color === "warning"
          ? "bg-yellowyellow-dark"
          : color === "warning" && state === "duo-tone"
          ? "bg-yellowyellow-light-4"
          : color === "danger" && state === "fill"
          ? "bg-redred"
          : color === "danger" && state === "duo-tone"
          ? "bg-redred-light-5"
          : state === "fill" && color === "success"
          ? "bg-greengreen"
          : color === "success" && state === "duo-tone"
          ? "bg-greengreen-light-6"
          : state === "fill" && color === "info"
          ? "bg-cyancyan"
          : color === "info" && state === "duo-tone"
          ? "bg-cyancyan-light-3"
          : color === "gray" && state === "fill"
          ? "bg-primary-text-color"
          : color === "gray" && state === "duo-tone"
          ? "bg-[#6373811a]"
          : state === "fill" && color === "light"
          ? "bg-graygray-3"
          : color === "light" && state === "duo-tone"
          ? "bg-[#e5e7eb80]"
          : ""
      } ${className}`}
    >
      {imageSrc ? (
        <img src={imageSrc} alt="Badge" className="w-4 h-4" />
      ) : (
        <div
          className={`font-body-extra-small-medium w-fit mt-[-1.00px] tracking-[var(--body-extra-small-medium-letter-spacing)] text-[length:var(--body-extra-small-medium-font-size)] [font-style:var(--body-extra-small-medium-font-style)] font-[number:var(--body-extra-small-medium-font-weight)] leading-[var(--body-extra-small-medium-line-height)] whitespace-nowrap relative ${
            color === "secondary" && ["duo-tone", "outline"].includes(state)
              ? "text-secondary-color"
              : (color === "dark" && state === "duo-tone") ||
                (color === "dark" && state === "outline") ||
                (color === "light" && state === "fill") ||
                (color === "light" && state === "outline")
              ? "text-darkdark"
              : color === "primary" && ["duo-tone", "outline"].includes(state)
              ? "text-primary-color"
              : color === "warning" &&
                (round === "full-round" || state === "duo-tone") &&
                ["outline", "duo-tone"].includes(state)
              ? "text-yellowyellow-dark-2"
              : color === "danger" && state === "duo-tone"
              ? "text-redred-dark"
              : color === "success" && state === "duo-tone"
              ? "text-greengreen-dark"
              : color === "info" && state === "duo-tone"
              ? "text-cyancyan-dark"
              : color === "gray" && state === "duo-tone"
              ? "text-[#637381]"
              : color === "light" && state === "duo-tone"
              ? "text-darkdark-3"
              : round === "semi-round" &&
                color === "warning" &&
                state === "outline"
              ? "text-yellowyellow-dark"
              : color === "danger" && state === "outline"
              ? "text-redred"
              : color === "success" && state === "outline"
              ? "text-greengreen"
              : color === "info" && state === "outline"
              ? "text-cyancyan"
              : color === "gray" && state === "outline"
              ? "text-primary-text-color"
              : "text-whitewhite"
          } ${divClassName}`}
        >
          {["primary", "secondary"].includes(color) && <>Primary</>}

          {color === "dark" && <>{text}</>}

          {color === "warning" && <>{text1}</>}

          {color === "danger" && <>Danger</>}

          {color === "success" && <>{text2}</>}

          {color === "info" && <>{text1}</>}

          {color === "gray" && <>Gray</>}

          {color === "light" && <>Light</>}
        </div>
      )}
    </div>
  );
};

Badges.propTypes = {
  text: PropTypes.string,
  color: PropTypes.oneOf([
    "warning",
    "danger",
    "info",
    "gray",
    "success",
    "secondary",
    "primary",
    "light",
    "dark",
  ]),
  state: PropTypes.oneOf(["fill", "duo-tone", "outline"]),
  round: PropTypes.oneOf(["full-round", "semi-round"]),
  text1: PropTypes.string,
  text2: PropTypes.string,
  text3: PropTypes.string,
  imageSrc: PropTypes.string,
};
