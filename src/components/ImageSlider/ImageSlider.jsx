import React, { useState, useEffect } from "react";

const ImageSlider = ({ pictures }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const prevSlide = (event) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = (event) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    setCurrentIndex((prevIndex) =>
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  const setCurrentSlide = (index, event) => {
    event.preventDefault();
    event.stopPropagation();
    setCurrentIndex(index);
  };

  const togglePlayPause = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(nextSlide, 2000); // Change slide every 2 seconds
      return () => clearInterval(interval);
    }
  }, [isPlaying, currentIndex]);

  return (
    <div className="flex flex-col h-fit items-start gap-2.5 relative self-stretch w-full">
      <div className="flex flex-col items-center relative flex-1 self-stretch w-full grow">
        {pictures.length > 0 && (
          <div className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {pictures.map((picture, index) => (
                <div key={index} className="w-full flex-shrink-0 relative">
                  <img
                    src={picture}
                    alt={`picture-${index}`}
                    className={`object-cover w-full h-auto rounded-md ${
                      index === 0 ? "border-4 border-yellow-500" : ""
                    }`}
                  />
                </div>
              ))}
            </div>
            {pictures?.length > 1 && (
              <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-4 py-2 bg-black bg-opacity-50">
                <button
                  onClick={prevSlide}
                  className="p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 focus:outline-none"
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
                  {pictures.map((_, index) => (
                    <button
                      key={index}
                      onClick={(event) => setCurrentSlide(index, event)}
                      className={`w-2 h-2 rounded-full ${
                        index === currentIndex ? "bg-white" : "bg-gray-400"
                      } focus:outline-none`}
                    ></button>
                  ))}
                </div>
                <button
                  onClick={nextSlide}
                  className="p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 focus:outline-none"
                >
                  &#10095;
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageSlider;
