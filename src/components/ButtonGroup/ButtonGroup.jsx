import PropTypes from "prop-types";
import React from "react";
import { UserAlt4 } from "../../icons/UserAlt4/UserAlt4";

export const ButtonGroup = ({
  state,
  className,
  userAlt3StyleOverrideClassName,
  buttonClassName,
}) => {
  return (
    <div
      className={`border border-solid inline-flex items-center gap-2 px-[15px] py-2.5 justify-center relative ${
        state === "active" ? "border-primary-color" : "border-stroke"
      } ${
        state === "active" ? "bg-primary-color" : "bg-whitewhite"
      } ${className}`}
    >
      <UserAlt4
        className={userAlt3StyleOverrideClassName}
        color={state === "active" ? "white" : "#111928"}
      />
      <button
        className={`all-[unset] box-border font-body-medium-medium w-fit mt-[-0.50px] tracking-[var(--body-medium-medium-letter-spacing)] text-[length:var(--body-medium-medium-font-size)] [font-style:var(--body-medium-medium-font-style)] font-[number: var(--body-medium-medium-font-weight)] leading-[var(--body-medium-medium-line-height)] whitespace-nowrap relative ${
          state === "active" ? "text-whitewhite" : "text-darkdark"
        } ${buttonClassName}`}
      >
        Support
      </button>
    </div>
  );
};

ButtonGroup.PropTypes = {
  state: PropTypes.oneOf(["active", "default"]),
};
