// src/components/ProgressBar.js
import React from "react";

const ProgressBarGreen = ({ percentage }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-4 flex">
      <div
        className="bg-greengreen-dark h-full rounded-full flex items-center justify-start pl-1"
        style={{ width: `${percentage < 50 ? percentage + 15 : percentage}%` }}
      >
        <span className="text-white text-xs pl-2">{percentage}%</span>
      </div>
    </div>
  );
};

export default ProgressBarGreen;
