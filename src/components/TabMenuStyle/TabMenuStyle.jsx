import React from "react";

const TabMenuStyle = ({ state, className, divClassName, text = "Home" }) => {
  return (
    <div
      className={`[border-bottom-style:solid] inline-flex items-center gap-2.5 px-0 py-[15px] border-b-2 justify-center bg-whitewhite relative ${
        state === "hover" ? "border-primary-color" : "border-whitewhite"
      } ${className}`}
    >
      <div
        className={`font-16-medium w-fit mt-[-2.00px] tracking-[var(--16-medium-letter-spacing)] text-[length:var(--16-medium-font-size)] [font-style:var(--16-medium-font-style)] font-[number:var(--16-medium-font-weight)] text-center whitespace-nowrap leading-[var(--16-medium-line-height)] relative ${
          state === "hover" ? "text-primary-color" : "text-primary-text-color"
        } ${divClassName}`}
      >
        {text}
      </div>
    </div>
  );
};

export { TabMenuStyle };
