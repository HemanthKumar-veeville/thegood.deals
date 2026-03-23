import React, { useState, useEffect } from "react";
import { CirclePlus55 } from "../../icons/CirclePlus55";
import { FaTrash, FaStar } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { ShowCustomErrorModal } from "../ErrorAlert/ErrorAlert";

const buildDisplayRows = (images) => {
  const list = images || [];
  return list
    .map((item, index) => {
      if (item instanceof File) {
        const url = URL.createObjectURL(item);
        return {
          src: url,
          deleteKey: item.name,
          revoke: url,
          reactKey: `file-${item.name}-${index}`,
        };
      }
      if (typeof item === "string") {
        const parts = item.split("/");
        const deleteKey = parts[parts.length - 1] || `url-${index}`;
        return {
          src: item,
          deleteKey,
          revoke: null,
          reactKey: `str-${item}-${index}`,
        };
      }
      if (item && typeof item === "object" && item.url) {
        const deleteKey =
          item.name || item.url.split("/").pop() || `obj-${index}`;
        return {
          src: item.url,
          deleteKey,
          revoke: null,
          reactKey: `obj-${item.url}-${index}`,
        };
      }
      return null;
    })
    .filter(Boolean);
};

const AddPictures = ({ onChange, onDelete, onReorderPictures, images }) => {
  const { t } = useTranslation();
  const [displayRows, setDisplayRows] = useState([]);
  const [starredIndex, setStarredIndex] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const rows = buildDisplayRows(images);
    setDisplayRows(rows);

    return () => {
      rows.forEach((row) => {
        if (row.revoke) {
          URL.revokeObjectURL(row.revoke);
        }
      });
    };
  }, [images]);

  useEffect(() => {
    if (displayRows.length > 0 && starredIndex === null) {
      setStarredIndex(0);
    }
    if (displayRows.length === 0) {
      setStarredIndex(null);
      setCurrentIndex(0);
    }
  }, [displayRows.length, starredIndex]);

  useEffect(() => {
    setCurrentIndex((i) => {
      if (displayRows.length === 0) {
        return 0;
      }
      return Math.min(i, displayRows.length - 1);
    });
  }, [displayRows.length]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files || []);
    event.target.value = "";

    if (files.length === 0) {
      return;
    }

    const currentCount = (images || []).length;
    if (currentCount + files.length > 10) {
      setIsError(true);
      setErrorMessage(t("add_pictures.error_limit"));
      return;
    }

    onChange(files);
  };

  const handleDelete = (_index, row, event) => {
    event.preventDefault();
    event.stopPropagation();
    if (!row?.deleteKey) {
      return;
    }
    onDelete?.(row.deleteKey);
    setStarredIndex(0);
    setCurrentIndex(0);
  };

  const handleToggleStar = (index, event) => {
    event.preventDefault();
    event.stopPropagation();
    const list = images || [];
    if (index < 0 || index >= list.length) {
      return;
    }
    const reordered = [...list];
    const [picked] = reordered.splice(index, 1);
    reordered.unshift(picked);
    onReorderPictures?.(reordered);
    setStarredIndex(0);
    setCurrentIndex(0);
  };

  const prevSlide = (event) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (displayRows.length === 0) {
      return;
    }
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? displayRows.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = (event) => {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    if (displayRows.length === 0) {
      return;
    }
    setCurrentIndex((prevIndex) =>
      prevIndex === displayRows.length - 1 ? 0 : prevIndex + 1
    );
  };

  const setCurrentSlide = (index, event) => {
    event.preventDefault();
    event.stopPropagation();
    setCurrentIndex(index);
  };

  const handleTogglePlayPause = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    if (!isPlaying) {
      return undefined;
    }
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        displayRows.length === 0
          ? 0
          : prevIndex === displayRows.length - 1
            ? 0
            : prevIndex + 1
      );
    }, 2000);
    return () => clearInterval(interval);
  }, [isPlaying, displayRows.length]);

  return (
    <div className="flex flex-col h-fit items-start gap-2.5 relative self-stretch w-full">
      <div className="flex flex-col items-center relative flex-1 self-stretch w-full grow">
        {isError && (
          <ShowCustomErrorModal
            message={errorMessage}
            buttonText={t("waiting_deal.got_it")}
            onClose={() => setIsError(false)}
          />
        )}
        {displayRows.length > 0 && (
          <div className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {displayRows.map((row, index) => (
                <div
                  key={row.reactKey}
                  className="w-full flex-shrink-0 relative"
                >
                  <img
                    src={row.src}
                    alt={t("add_pictures.image_alt_text", { index })}
                    className="object-contain w-full h-auto max-h-64 rounded-md"
                  />
                  <button
                    type="button"
                    aria-label={t("add_pictures.image_alt_text", { index })}
                    onClick={(event) => handleDelete(index, row, event)}
                    className="absolute top-2 right-2 bg-white rounded-full p-1 min-w-[44px] min-h-[44px] flex items-center justify-center"
                  >
                    <FaTrash className="w-4 h-4 text-red-600" />
                  </button>
                  <button
                    type="button"
                    aria-label="Star image"
                    onClick={(event) => handleToggleStar(index, event)}
                    className="absolute top-10 right-2 bg-white rounded-full p-1 min-w-[44px] min-h-[44px] flex items-center justify-center"
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
                type="button"
                onClick={prevSlide}
                className="p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 focus:outline-none min-w-[44px] min-h-[44px]"
              >
                &#10094;
              </button>
              <div className="flex space-x-2 items-center">
                <button
                  type="button"
                  onClick={handleTogglePlayPause}
                  className="w-8 h-8 bg-white rounded-full focus:outline-none flex items-center justify-center"
                >
                  {isPlaying
                    ? t("add_pictures.pause_icon")
                    : t("add_pictures.play_icon")}{" "}
                </button>
                {displayRows.map((row, index) => (
                  <button
                    key={row.reactKey}
                    type="button"
                    onClick={(event) => setCurrentSlide(index, event)}
                    className={`w-2 h-2 rounded-full ${
                      index === currentIndex ? "bg-white" : "bg-gray-400"
                    } focus:outline-none`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={nextSlide}
                className="p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 focus:outline-none min-w-[44px] min-h-[44px]"
              >
                &#10095;
              </button>
            </div>
          </div>
        )}
        <div className="flex items-center justify-center gap-2.5 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-stroke mt-4">
          <label
            className={`${
              displayRows.length > 0 ? "" : "h-32"
            }  all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-base text-center tracking-[0] leading-6 whitespace-nowrap flex items-center `}
          >
            <div className="flex items-center justify-center gap-2 px-6 py-2 relative flex-[0_0_auto] rounded-[50px] border border-solid border-[#1b4f4a] cursor-pointer">
              <CirclePlus55 className="!relative !w-5 !h-5" color="#1B4F4A" />{" "}
              {t("add_pictures.file_input_label")}
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
