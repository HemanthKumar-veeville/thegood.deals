// CustomLoader.js
import React from "react";
import { GiphyLoader } from "../../images";

const CustomLoader = () => {
  return (
    <div className="flex items-start justify-center h-screen w-full bg-primary bg-opacity-70 !absolute top-64">
      <img
        src={GiphyLoader}
        alt="Loading..."
        className="w-24 h-24  rounded-2xl"
      />
    </div>
  );
};

export default CustomLoader;
