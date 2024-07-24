import React, { useState } from "react";
import { CirclePlus55 } from "../../icons/CirclePlus55";
import { FaTrash } from "react-icons/fa"; // Import the trash icon from react-icons

const AddPictures = () => {
  const [pictures, setPictures] = useState([]);

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    const totalFiles = pictures.length + files.length;
    //scroll the images horizontally, show single iamge at a time
    if (totalFiles > 10) {
      alert("You can only select up to 4 files in total.");
      return;
    }

    setPictures((prevPictures) => [...prevPictures, ...files]);
  };

  const handleDelete = (index) => {
    setPictures((prevPictures) => prevPictures.filter((_, i) => i !== index));
  };

  const triggerFileInput = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <div className="flex flex-col h-fit items-start gap-2.5 relative self-stretch w-full">
      <div className="flex flex-col items-center relative flex-1 self-stretch w-full grow">
        <div className="flex flex-wrap gap-2.5 mb-2.5">
          {pictures.map((picture, index) => (
            <div key={index} className="w-16 h-24 relative">
              <img
                src={URL.createObjectURL(picture)}
                alt={`picture-${index}`}
                className="object-cover w-full h-full rounded-md"
              />
              <button
                onClick={() => handleDelete(index)}
                className="absolute top-0 right-0 bg-white rounded-full p-1"
              >
                <FaTrash className="w-4 h-4 text-red-600" />
              </button>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center gap-2.5 p-5 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-stroke">
          <div
            className="inline-flex items-center justify-center gap-2 px-6 py-3 relative flex-[0_0_auto] rounded-[50px] border border-solid border-[#1b4f4a] cursor-pointer"
            onClick={triggerFileInput}
          >
            <CirclePlus55 className="!relative !w-5 !h-5" color="#1B4F4A" />
            <label className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-base text-center tracking-[0] leading-6 whitespace-nowrap">
              Add pictures
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
    </div>
  );
};

export default AddPictures;
