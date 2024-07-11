import React from "react";

const TabMenuStyle = ({ className, divClassName, text, onClick }) => {
  return (
    <button
      className={`inline-flex items-center gap-2.5 px-0 py-[15px] justify-center bg-white relative border-b-2 ${className}`}
      onClick={onClick}
    >
      <div
        className={`font-16-medium w-fit mt-[-2.00px] tracking-[var(--16-medium-letter-spacing)] text-[length:var(--16-medium-font-size)] [font-style:var(--16-medium-font-style)] font-[number:var(--16-medium-font-weight)] text-center whitespace-nowrap leading-[var(--16-medium-line-height)] relative ${divClassName}`}
      >
        {text}
      </div>
    </button>
  );
};

export { TabMenuStyle };
