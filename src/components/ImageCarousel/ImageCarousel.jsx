import React, { useState, useEffect } from "react";

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds
      return () => clearInterval(interval);
    }
  }, [isPlaying, currentIndex]);

  return (
    <div className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-lg">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-[300px]"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center p-4 bg-black bg-opacity-50">
        <button
          onClick={prevSlide}
          className="p-3 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 focus:outline-none flex items-center justify-center"
        >
          &#10094;
        </button>
        <div className="flex space-x-2 items-center">
          <button
            onClick={togglePlayPause}
            className="w-8 h-8 bg-white rounded-full focus:outline-none flex items-center justify-center"
          >
            {isPlaying ? "❚❚" : "▶"}
          </button>
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-gray-400"
              } focus:outline-none`}
            ></button>
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="p-3 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 focus:outline-none flex items-center justify-center"
        >
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
