import React from "react";

function CustomStatus({ className, width, height, color, text }) {
  return (
    <svg
      width="154"
      height="26"
      viewBox="0 0 154 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width={width || "154"}
        height={height || "26"}
        rx="4"
        fill={color || "#F23030"}
      />

      <text
        x="50%" // Centers text horizontally
        y="50%" // Centers text vertically
        dominantBaseline="middle"
        textAnchor="middle"
        fill={"white"}
        fontSize={"14"}
        fontFamily="Arial, sans-serif"
        className="!tracking-[0] !text-xs ![font-style:unset] !font-medium ![font-family:'Inter',Helvetica] !leading-5"
      >
        {text}
      </text>
    </svg>
  );
}

export default CustomStatus;
