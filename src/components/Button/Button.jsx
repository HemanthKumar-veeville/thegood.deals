import React from "react";

const Button = ({
  buttonText = "Button",
  kind,
  color,
  state,
  round,
  className,
}) => {
  return (
    <button
      className={`all-[unset] box-border inline-flex items-center gap-2.5 px-7 py-[13px] justify-center relative ${
        (color === "secondary" && kind === "primary" && state === "default") ||
        (color === "secondary" && kind === "primary" && state === "hover") ||
        (color === "secondary" && kind === "tertiary" && state === "hover") ||
        (color === "tertiary" && kind === "primary" && state === "default") ||
        (color === "tertiary" && kind === "primary" && state === "hover") ||
        (color === "tertiary" && kind === "tertiary" && state === "hover") ||
        (kind === "secondary" && state === "active") ||
        (kind === "secondary" && state === "default") ||
        (kind === "secondary" && state === "hover")
          ? "border border-solid"
          : ""
      } ${
        (color === "secondary" && kind === "primary" && state === "default") ||
        (color === "secondary" &&
          kind === "secondary" &&
          state === "default") ||
        (color === "secondary" && kind === "secondary" && state === "hover") ||
        (color === "secondary" && kind === "tertiary" && state === "hover")
          ? "border-secondary-color"
          : (color === "tertiary" &&
              kind === "primary" &&
              state === "default") ||
            (color === "tertiary" &&
              kind === "secondary" &&
              state === "default") ||
            (color === "tertiary" &&
              kind === "secondary" &&
              state === "hover") ||
            (color === "tertiary" && kind === "tertiary" && state === "hover")
          ? "border-darkdark"
          : (color === "primary" &&
              kind === "secondary" &&
              state === "default") ||
            (color === "primary" &&
              kind === "secondary" &&
              state === "hover") ||
            (kind === "secondary" && state === "active")
          ? "border-[#1b4f4a]"
          : color === "secondary" && state === "hover" && kind === "primary"
          ? "border-[#0bb489]"
          : color === "tertiary" && state === "hover" && kind === "primary"
          ? "border-[#637381]"
          : ""
      } ${
        state === "default" && kind === "tertiary" ? "shadow-shadow-1" : ""
      } ${
        round === "semi-round"
          ? "rounded-md"
          : round === "full-rounded"
          ? "rounded-[50px]"
          : ""
      } ${
        state === "default" && color === "primary" && kind === "primary"
          ? "bg-[#1b4f4a]"
          : state === "default" && color === "secondary" && kind === "primary"
          ? "bg-secondary-color"
          : state === "default" && color === "tertiary" && kind === "primary"
          ? "bg-darkdark"
          : state === "default" &&
            (color === "primary" || kind === "tertiary") &&
            ["secondary", "tertiary"].includes(kind)
          ? "bg-white"
          : kind === "primary" &&
            (color === "primary" || state === "active") &&
            ["hover", "active"].includes(state)
          ? "bg-[#1b43c7]"
          : state === "active" && kind === "secondary"
          ? "bg-blueblue-light-3"
          : (color === "primary" || kind === "tertiary") &&
            (color === "primary" || state === "active") &&
            ["secondary", "tertiary"].includes(kind) &&
            (kind === "secondary" || state === "active") &&
            (kind === "tertiary" || state === "hover") &&
            ["hover", "active"].includes(state)
          ? "bg-blueblue-light-5"
          : state === "disable"
          ? "bg-graygray-3"
          : color === "secondary" && state === "hover" && kind === "primary"
          ? "bg-[#0bb389]"
          : color === "tertiary" && state === "hover" && kind === "primary"
          ? "bg-[#637381]"
          : color === "secondary" &&
            state === "hover" &&
            ["secondary", "tertiary"].includes(kind)
          ? "bg-[#e7faf6]"
          : color === "tertiary" &&
            state === "hover" &&
            ["tertiary", "secondary"].includes(kind)
          ? "bg-graygray-4"
          : color === "primary" && kind === "tertiary" && state === "hover"
          ? "bg-graygray-2"
          : ""
      } ${className}`}
    >
      <button
        className={`all-[unset] box-border w-fit mt-[-1.00px] text-center whitespace-nowrap relative ${
          color === "primary" &&
          state === "hover" &&
          ["secondary", "tertiary"].includes(kind)
            ? "font-body-medium-medium"
            : "[font-family:'Inter',Helvetica]"
        } ${
          color === "primary" &&
          state === "hover" &&
          ["secondary", "tertiary"].includes(kind)
            ? "tracking-[var(--body-medium-medium-letter-spacing)]"
            : "tracking-[0]"
        } ${
          color === "primary" &&
          state === "hover" &&
          ["secondary", "tertiary"].includes(kind)
            ? "text-[length:var(--body-medium-medium-font-size)]"
            : "text-base"
        } ${
          color === "primary" &&
          state === "hover" &&
          ["secondary", "tertiary"].includes(kind)
            ? "[font-style:var(--body-medium-medium-font-style)]"
            : ""
        } ${
          kind === "primary" && ["active", "default", "hover"].includes(state)
            ? "text-white"
            : (color === "primary" &&
                kind === "secondary" &&
                state === "default") ||
              (color === "primary" &&
                kind === "tertiary" &&
                state === "default") ||
              (kind === "secondary" && state === "active") ||
              (kind === "tertiary" && state === "active")
            ? "text-[#1b4f4a]"
            : (color === "tertiary" &&
                kind === "secondary" &&
                state === "default") ||
              (color === "tertiary" &&
                kind === "secondary" &&
                state === "hover") ||
              (color === "tertiary" &&
                kind === "tertiary" &&
                state === "default") ||
              (color === "tertiary" && kind === "tertiary" && state === "hover")
            ? "text-darkdark"
            : state === "disable"
            ? "text-darkdark-5"
            : color === "primary" &&
              state === "hover" &&
              ["secondary", "tertiary"].includes(kind)
            ? "text-[#637381]"
            : "text-secondary-color"
        } ${
          color === "primary" &&
          state === "hover" &&
          ["secondary", "tertiary"].includes(kind)
            ? "font-[number:var(--body-medium-medium-font-weight)]"
            : "font-medium"
        } ${
          color === "primary" &&
          state === "hover" &&
          ["secondary", "tertiary"].includes(kind)
            ? "leading-[var(--body-medium-medium-line-height)]"
            : "leading-6"
        }`}
      >
        {buttonText}
      </button>
    </button>
  );
};

export { Button };
