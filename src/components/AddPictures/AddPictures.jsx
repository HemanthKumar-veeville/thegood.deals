import React, { useState, useEffect } from "react";
import { CirclePlus55 } from "../../icons/CirclePlus55";
import { FaTrash, FaStar } from "react-icons/fa"; // Import the trash and star icons from react-icons
import Swal from "sweetalert2";

const AddPictures = ({ onChange }) => {
  const [pictures, setPictures] = useState([]);
  const [starredIndex, setStarredIndex] = useState(null); // Keep track of the single starred image
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const totalFiles = pictures.length + files.length;
    if (totalFiles > 10) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You can only select up to 10 files in total.",
      });
      return;
    }

    const newPictures = files.map((file) => URL.createObjectURL(file));
    setPictures((prevPictures) => {
      const updatedPictures = [...prevPictures, ...newPictures];
      // Set the first image as starred by default
      if (updatedPictures.length === newPictures.length) {
        setStarredIndex(0);
      }
      return updatedPictures;
    });
  };

  const handleDelete = (index, event) => {
    event.preventDefault();
    event.stopPropagation();
    const updatedPictures = pictures.filter((_, i) => i !== index);
    setPictures(updatedPictures);
    if (starredIndex === index) {
      setStarredIndex(null); // Clear star if the starred image is deleted
    } else if (starredIndex > index) {
      setStarredIndex(starredIndex - 1); // Adjust star index if a previous image is deleted
    }
    if (index === currentIndex) {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
    }
  };

  const toggleStar = (index, event) => {
    event.preventDefault();
    event.stopPropagation();
    setPictures((prevPictures) => {
      const updatedPictures = [...prevPictures];
      const starredPicture = updatedPictures.splice(index, 1)[0];
      updatedPictures.unshift(starredPicture);
      return updatedPictures;
    });
    setStarredIndex(0); // Set the starred index to the first position
    setCurrentIndex(0); // Set the current index to the first position
  };

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

  useEffect(() => {
    onChange(pictures);
  }, [pictures]);

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
                    className="object-cover w-full h-auto rounded-md"
                  />
                  <button
                    onClick={(event) => handleDelete(index, event)}
                    className="absolute top-2 right-2 bg-white rounded-full p-1"
                  >
                    <FaTrash className="w-4 h-4 text-red-600" />
                  </button>
                  <button
                    onClick={(event) => toggleStar(index, event)}
                    className="absolute top-10 right-2 bg-white rounded-full p-1"
                  >
                    <FaStar
                      className={`w-4 h-4 ${
                        starredIndex === index
                          ? "text-yellow-500"
                          : "text-gray-400"
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
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
          </div>
        )}
        <div className="flex items-center justify-center gap-2.5 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-stroke mt-4">
          <label className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            <div className="inline-flex items-center justify-center gap-2 px-6 py-2 relative flex-[0_0_auto] rounded-[50px] border border-solid border-[#1b4f4a] cursor-pointer">
              <CirclePlus55 className="!relative !w-5 !h-5" color="#1B4F4A" />{" "}
              Add pictures
            </div>
            <input
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              onChange={handleFileChange}
              id="fileInput"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default AddPictures;
