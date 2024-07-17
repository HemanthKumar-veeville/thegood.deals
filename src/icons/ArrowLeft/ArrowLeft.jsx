import React from "react";
import { Vector } from "../../images";

export const ArrowLeft = () => {
  return (
    <div className="relative w-6 h-6">
      <img
        className="absolute w-5 h-[17px] top-[3px] left-0.5"
        alt="Vector"
        src={Vector}
      />
    </div>
  );
};
