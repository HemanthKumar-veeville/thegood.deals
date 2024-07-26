// BankingInfo.js
import React, { useState } from "react";
import { Write2 } from "../../icons/Write2";

const BankingInfo = ({ label, placeholder, onChange, type }) => {
  const [value, setValue] = useState("");

  const handleCopy = () => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        alert("Copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const handleChange = (e) => {
    onChange(type, e);
    setValue(e.target.value);
  };

  return (
    <div className="flex h-[46px] items-center gap-2.5 pl-5 pr-4 py-3 relative self-stretch w-full bg-white rounded-md border border-solid border-stroke">
      <div onClick={handleCopy}>
        <Write2
          className="!relative !w-4 !h-4 cursor-pointer"
          color="#6B7280"
        />
      </div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
        className="flex-1 bg-transparent border-none focus:outline-none text-darkdark-6 text-base leading-6"
      />
    </div>
  );
};

export default BankingInfo;
