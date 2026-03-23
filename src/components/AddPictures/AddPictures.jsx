import React, { useState, useEffect, useRef } from "react";
import { CirclePlus55 } from "../../icons/CirclePlus55";
import { FaTrash, FaStar } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { ShowCustomErrorModal } from "../ErrorAlert/ErrorAlert";

const AddPictures = ({
  onChange,
  onDelete,
  images,
  setExistingImages,
  existingImages,
  isEditMode,
  onPicturesOrderChange,
}) => {
  const { t } = useTranslation();
  const [pictures, setPictures] = useState([]);
  const [starredIndex, setStarredIndex] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const activePreviewUrlsRef = useRef(new Set());
  const hasInitializedRef = useRef(false);

  const notifyOrderChange = (pics) => {
    if (!onPicturesOrderChange || !Array.isArray(pics)) return;
    const orderedPicturesForForm = pics.map((picture) =>
      picture?.file instanceof File ? picture.file : picture
    );
    const orderedExistingImages = pics.filter(
      (picture) => typeof picture === "string" && !picture?.includes?.("blob")
    );
    onPicturesOrderChange(orderedPicturesForForm, orderedExistingImages);
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const totalFiles = pictures.length + files.length;
    if (totalFiles > 10) {
      setIsError(true);
      setErrorMessage(t("add_pictures.error_limit"));
      return;
    }

    onChange(files);

    const newPictures = files.map((file) => ({
      url: URL.createObjectURL(file),
      name: file.name,
      file,
    }));

    setPictures((prev) => {
      const updated = [...prev, ...newPictures];
      if (updated.length === newPictures.length) {
        setStarredIndex(0);
      }
      notifyOrderChange(updated);
      return updated;
    });

    if (!onPicturesOrderChange && isEditMode && setExistingImages) {
      setExistingImages((prev) => [...prev, ...newPictures]);
    }
  };

  const handleDelete = (index, picture, event) => {
    event.preventDefault();
    event.stopPropagation();
    const name = picture?.name ?? (typeof picture === "string" ? picture : null);

    setPictures((prev) => {
      const updated = prev.filter((_, i) => i !== index);
      if (!onPicturesOrderChange && setExistingImages) {
        const existingOnly = updated.filter(
          (pic) => typeof pic === "string" && !pic?.includes?.("blob")
        );
        setExistingImages(existingOnly);
      }
      notifyOrderChange(updated);
      return updated;
    });

    if (!onPicturesOrderChange) onDelete(name);

    setStarredIndex((prev) => {
      if (prev === index) return null;
      if (prev > index) return prev - 1;
      return prev;
    });
    setCurrentIndex((prev) => (index === prev ? (prev === 0 ? 0 : prev - 1) : prev));
  };

  const toggleStar = (index, event) => {
    event.preventDefault();
    event.stopPropagation();
    setPictures((prev) => {
      const updated = [...prev];
      const [starred] = updated.splice(index, 1);
      updated.unshift(starred);
      notifyOrderChange(updated);
      return updated;
    });
    setStarredIndex(0);
    setCurrentIndex(0);
  };

  const prevSlide = (event) => {
    event?.preventDefault();
    event?.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? pictures.length - 1 : prev - 1));
  };

  const nextSlide = (event) => {
    event?.preventDefault();
    event?.stopPropagation();
    setCurrentIndex((prev) => (prev === pictures.length - 1 ? 0 : prev + 1));
  };

  const setCurrentSlide = (index, event) => {
    event?.preventDefault();
    event?.stopPropagation();
    setCurrentIndex(index);
  };

  const togglePlayPause = (event) => {
    event?.preventDefault();
    event?.stopPropagation();
    setIsPlaying((prev) => !prev);
  };

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === pictures.length - 1 ? 0 : prev + 1));
    }, 2000);
    return () => clearInterval(interval);
  }, [isPlaying, pictures.length]);

  useEffect(() => {
    if (onPicturesOrderChange) {
      const src = Array.isArray(existingImages) ? existingImages : Array.isArray(images) ? images : [];
      if (src.length === 0) {
        if (hasInitializedRef.current) return;
        return;
      }
      if (hasInitializedRef.current) return;
      hasInitializedRef.current = true;
      const normalized = src.map((item) => {
        if (item instanceof File) {
          return { url: URL.createObjectURL(item), name: item.name, file: item };
        }
        if (item?.url && item?.file instanceof File) return item;
        return item;
      });
      setPictures(normalized);
      setStarredIndex(0);
      notifyOrderChange(normalized);
    } else {
      const src =
        Array.isArray(images) && images.length > 0
          ? images
          : Array.isArray(existingImages)
          ? existingImages
          : [];
      if (src.length === 0) {
        setPictures([]);
        return;
      }
      setPictures((prev) => {
        const prevByFile = new Map(
          prev.filter((p) => p?.file instanceof File && p?.url).map((p) => [p.file, p])
        );
        const next = src.map((item) => {
          if (item instanceof File) {
            const cached = prevByFile.get(item);
            if (cached) return cached;
            return { url: URL.createObjectURL(item), name: item.name, file: item };
          }
          if (item?.file instanceof File && item?.url) {
            const cached = prevByFile.get(item.file);
            return cached ?? item;
          }
          return item;
        });
        if (prev.length === next.length && prev.every((p, i) => p === next[i])) return prev;
        return next;
      });
    }
  }, [onPicturesOrderChange, images, existingImages]);

  useEffect(() => {
    const urls = new Set(pictures.filter((p) => p?.url && p?.file instanceof File).map((p) => p.url));
    activePreviewUrlsRef.current.forEach((url) => {
      if (!urls.has(url)) {
        URL.revokeObjectURL(url);
        activePreviewUrlsRef.current.delete(url);
      }
    });
    urls.forEach((u) => activePreviewUrlsRef.current.add(u));
  }, [pictures]);

  useEffect(() => {
    return () => {
      activePreviewUrlsRef.current.forEach((url) => URL.revokeObjectURL(url));
      activePreviewUrlsRef.current.clear();
    };
  }, []);

  useEffect(() => {
    if (pictures.length === 0) {
      setStarredIndex(null);
      return;
    }
    setStarredIndex((prev) => (prev === null || prev >= pictures.length ? 0 : prev));
  }, [pictures.length]);

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
        {pictures.length > 0 && (
          <div className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg shadow-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {pictures.map((picture, index) => (
                <div key={`${index}-${picture?.url || picture}`} className="w-full flex-shrink-0 relative">
                  <img
                    src={picture?.url || picture}
                    alt={t("add_pictures.image_alt_text", { index })}
                    className="object-contain w-full h-auto max-h-64 rounded-md"
                  />
                  <button
                    type="button"
                    onClick={(e) => handleDelete(index, picture, e)}
                    className="absolute top-2 right-2 bg-white rounded-full p-1"
                    aria-label={t("add_pictures.delete_aria", { index })}
                  >
                    <FaTrash className="w-4 h-4 text-red-600" />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => toggleStar(index, e)}
                    className="absolute top-10 right-2 bg-white rounded-full p-1"
                    aria-label={t("add_pictures.star_aria", { index })}
                  >
                    <FaStar
                      className={`w-4 h-4 ${starredIndex === index ? "text-yellow-500" : "text-gray-400"}`}
                    />
                  </button>
                </div>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center px-4 py-2 bg-black bg-opacity-50">
              <button
                type="button"
                onClick={prevSlide}
                className="p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 focus:outline-none"
              >
                &#10094;
              </button>
              <div className="flex space-x-2 items-center">
                <button
                  type="button"
                  onClick={togglePlayPause}
                  className="w-8 h-8 bg-white rounded-full focus:outline-none flex items-center justify-center"
                >
                  {isPlaying ? t("add_pictures.pause_icon") : t("add_pictures.play_icon")}
                </button>
                {pictures.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={(e) => setCurrentSlide(index, e)}
                    className={`w-2 h-2 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-400"} focus:outline-none`}
                  />
                ))}
              </div>
              <button
                type="button"
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
            className={`${pictures.length > 0 ? "" : "h-32"} all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-base text-center tracking-[0] leading-6 whitespace-nowrap flex items-center`}
          >
            <div className="flex items-center justify-center gap-2 px-6 py-2 relative flex-[0_0_auto] rounded-[50px] border border-solid border-[#1b4f4a] cursor-pointer">
              <CirclePlus55 className="!relative !w-5 !h-5" color="#1B4F4A" />
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
