import React, { useState } from "react";
import { ChevronDown1 } from "../../icons/ChevronDown1";
import Swal from "sweetalert2";

export const Placeholder = () => {
  const handleButtonClick = () => {
    Swal.fire({
      title: "Select Language",
      input: "select",
      inputOptions: {
        English: "English",
        French: "French",
        Spanish: "Spanish",
        German: "German",
      },
      inputPlaceholder: "Select a language",
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value) {
            resolve();
          } else {
            resolve("You need to select a language");
          }
        });
      },
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `You selected: ${result.value}`,
          icon: "success",
          confirmButtonText: "OK",
        });
      }
    });
  };

  return (
    <div className="relative">
      <div
        className="flex items-center gap-2.5 px-5 py-3 bg-white rounded-md border border-solid border-gray-300 cursor-pointer"
        onClick={handleButtonClick}
      >
        <div className="flex items-center justify-between w-full">
          <div className="text-gray-800 font-medium text-base whitespace-nowrap">
            Language
          </div>
          <ChevronDown1 className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
};
