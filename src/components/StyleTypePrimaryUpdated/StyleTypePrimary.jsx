import PropTypes from "prop-types";
import React from "react";
import { Tooltip } from "../Tooltip";

export const StyleTypePrimary = ({
  className,
  groupClassName,
  overlapGroupClassName,
  lineClassName,
  tooltipPolygon,
  tooltipPositionTopColorClassName,
  progressPercentage, // Added prop for dynamic progress
}) => {
  // Calculate the width of the line based on progress percentage
  const lineWidth = (progressPercentage / 100) * 300; // Assuming the total width is 300px based on image

  return (
    <div className={`relative w-[300px] h-[50px] ${className}`}>
      {/* Progress Bar Background */}
      <div className="absolute top-[30px] left-0 w-[300px] h-2.5 bg-[#e5e7eb] rounded-full">
        {/* Progress Fill */}
        <div
          className="h-2.5 bg-[#2a4e4a] rounded-full"
          style={{ width: `${lineWidth}px` }} // Adjust width dynamically
        ></div>
      </div>
      {/* Tooltip with triangle */}
      <div
        className={`absolute -top-1 transform -translate-x-1/2 bg-[#2a4e4a] text-white text-sm font-semibold px-2 py-1 rounded-md ${tooltipPositionTopColorClassName}`}
        style={{
          left: `${lineWidth}px`, // Position tooltip above the progress bar
          transform: "translateX(-50%)", // Center the tooltip
        }}
      >
        {`${progressPercentage}%`}
        {/* Tooltip Triangle (Pointer) */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 top-full w-0 h-0"
          style={{
            borderLeft: "6px solid transparent",
            borderRight: "6px solid transparent",
            borderTop: "6px solid #2a4e4a", // Triangle color matching tooltip background
            marginTop: "-1px", // Slight margin to adjust overlap
          }}
        ></div>
      </div>
    </div>
  );
};

StyleTypePrimary.propTypes = {
  className: PropTypes.string,
  groupClassName: PropTypes.string,
  overlapGroupClassName: PropTypes.string,
  lineClassName: PropTypes.string,
  tooltipPolygon: PropTypes.string,
  tooltipPositionTopColorClassName: PropTypes.string,
  progressPercentage: PropTypes.number.isRequired, // Added prop for progress percentage
};
