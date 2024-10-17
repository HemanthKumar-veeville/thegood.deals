import React, { useState } from "react";
import { Write2 } from "../../icons/Write2";
import { useTranslation } from "react-i18next"; // Import the useTranslation hook

const BankingInfo = ({ label, placeholder, onChange, type, info }) => {
  const [value, setValue] = useState(info || "");
  const { t } = useTranslation(); // Initialize the translation hook
  console.log({ info });
  const handleCopy = () => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        alert(t("bankingInfo.copySuccess")); // Use translation key for success message
      })
      .catch((err) => {
        console.error(t("bankingInfo.copyFail"), err); // Use translation key for failure message
      });
  };

  const handleChange = (e) => {
    onChange(type, e);
    setValue(e.target.value);
  };

  return (
    <div className="flex h-[46px] items-center gap-2.5 pl-5 pr-4 py-3 relative self-stretch w-full bg-white rounded-md border border-solid border-stroke">
      <div>
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
