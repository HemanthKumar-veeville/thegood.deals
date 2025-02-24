// TitleInput.js
import React, { useState } from "react";
import { useTranslation } from "react-i18next"; // Import translation hook

const TitleInput = ({ dealTitle, setDealTitle, typeHelperText }) => {
  const [title, setTitle] = useState(dealTitle);
  const handleTitleChange = (e) => {
    const newValue = e.target.value;
    // Only update if length is within limit
    if (newValue.length <= 250) {
      setTitle(newValue);
      setDealTitle(newValue);
    }
  };
  const { t } = useTranslation(); // Use translation hook

  return (
    <div className="flex flex-col h-20 items-start gap-[5px] relative self-stretch w-full mb-10">
      <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
        <div className="flex w-[250px] items-start gap-2.5 relative flex-[0_0_auto]">
          <div className="w-fit whitespace-nowrap relative mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-lg tracking-[0] leading-[26px]">
            {t("TitleInput.label")}
          </div>
        </div>
        <div className="flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-stroke">
          <textarea
            value={title}
            onChange={handleTitleChange}
            maxLength={250}
            placeholder={t("TitleInput.placeholder")}
            className="flex-1 bg-transparent border-none focus:outline-none text-darkdark-6 text-base leading-6 w-full resize-none"
            rows={2}
          />
        </div>
      </div>
      <div className="flex w-full justify-end items-center">
        <div className="w-[34px] mr-[-2.00px] h-[22px] relative">
          <div className="[font-family:'Inter',Helvetica] left-0 tracking-[0] text-sm top-0 text-primary-text-color font-normal text-right whitespace-nowrap leading-[22px] absolute">
            {`${title.length}/${250}`} {/* Dynamic count */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleInput;
