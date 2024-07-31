import React from "react";

const ImageRotator = ({ images, direction = "left" }) => {
  return (
    <div className="overflow-hidden w-full h-[170px] flex justify-center items-center relative">
      <div
        className={`flex ${
          direction === "left" ? "animate-scrollLeft" : "animate-scrollRight"
        }`}
      >
        {images.concat(images).map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className="w-[150px] h-[150px] object-cover mx-2 rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default ImageRotator;
