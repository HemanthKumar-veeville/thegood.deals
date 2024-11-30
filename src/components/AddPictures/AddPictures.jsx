import React, { useState, useEffect } from "react";
import { CirclePlus55 } from "../../icons/CirclePlus55";
import { FaTrash, FaStar } from "react-icons/fa"; // Import the trash and star icons from react-icons
import { useTranslation } from "react-i18next"; // Import useTranslation
import { ShowCustomErrorModal } from "../ErrorAlert/ErrorAlert";

const AddPictures = ({
  onChange,
  images,
  setExistingImages,
  existingImages,
  isEditMode,
}) => {
  const { t } = useTranslation(); // Initialize translation hook
  const [pictures, setPictures] = useState(existingImages || []);
  const [starredIndex, setStarredIndex] = useState(null); // Keep track of the single starred image
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [files, setFiles] = useState([]);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setFiles(files);
    const totalFiles = pictures.length + files.length;
    if (totalFiles > 10) {
      setIsError(true);
      setErrorMessage(t("add_pictures.error_limit"));
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
    isEditMode &&
      setExistingImages((prevPictures) => {
        const updatedPictures = [...prevPictures, ...newPictures];
        // Set the first image as starred by default
        if (updatedPictures.length === newPictures.length) {
          setStarredIndex(0);
        }
        return updatedPictures;
      });
  };

  const handleDelete = (index, picture, event) => {
    const fileArray = picture?.split("/");
    const fileIndex = fileArray?.length - 1;
    const fileName = fileArray[fileIndex];
    isEditMode &&
      setExistingImages((prevImages) =>
        prevImages?.filter((img) => {
          const imgArray = img?.split("/");
          const imgIndex = imgArray?.length - 1;
          const imgName = imgArray[imgIndex];

          return fileName !== imgName;
        })
      );
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
    onChange(files);
  }, [files]);

  return (
    <div className="flex flex-col h-fit items-start gap-2.5 relative self-stretch w-full">
      <div className="flex flex-col items-center relative flex-1 self-stretch w-full grow">
        {isError && (
          <ShowCustomErrorModal
            message={errorMessage}
            buttonText={t("waiting_deal.got_it")}
            onClose={() => setIsError(false)} // Reset modal state on close
          />
        )}
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
                    alt={t("add_pictures.image_alt_text", { index })} // Use translation for image alt text
                    className="object-contain w-full h-auto max-h-64 rounded-md" // Updated styling
                  />
                  <button
                    type="button"
                    onClick={(event) => handleDelete(index, picture, event)}
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
                  {isPlaying
                    ? t("add_pictures.pause_icon")
                    : t("add_pictures.play_icon")}{" "}
                  {/* Use translation for play/pause */}
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
          <label
            className={`${
              pictures.length > 0 ? "" : "h-32"
            }  all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-base text-center tracking-[0] leading-6 whitespace-nowrap flex items-center `}
          >
            <div className="flex items-center justify-center gap-2 px-6 py-2 relative flex-[0_0_auto] rounded-[50px] border border-solid border-[#1b4f4a] cursor-pointer">
              <CirclePlus55 className="!relative !w-5 !h-5" color="#1B4F4A" />{" "}
              {t("add_pictures.file_input_label")}{" "}
              {/* Use translation for file input label */}
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
