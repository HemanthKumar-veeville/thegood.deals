// src/components/ProgressBar.js
import React from "react";

const ProgressBarGreen = ({ percentage }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-4 flex justify-center">
      <div
        className="bg-greengreen-dark h-full rounded-full flex items-center justify-center"
        style={{ width: `${percentage}%` }}
      >
        <span className="text-white text-xs self-center">{percentage}%</span>
      </div>
    </div>
  );
};

export default ProgressBarGreen;
