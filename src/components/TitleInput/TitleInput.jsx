import React, { useState } from "react";
import { useTranslation } from "react-i18next"; // Import translation hook

const TitleInput = ({ dealTitle, setDealTitle }) => {
  const { t } = useTranslation(); // Use translation hook
  const [title, setTitle] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
    setDealTitle(e.target.value);
  };

  return (
    <div className="flex flex-col h-20 items-start gap-[5px] relative self-stretch w-full">
      <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
        <div className="flex w-[250px] items-start gap-2.5 relative flex-[0_0_auto]">
          <div className="w-fit whitespace-nowrap relative mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-lg tracking-[0] leading-[26px]">
            {t("TitleInput.label")} {/* Translation for Title label */}
          </div>
        </div>
        <div className="flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-stroke">
          <input
            type="text"
            value={title}
            onChange={handleTitleChange}
            placeholder={t("TitleInput.placeholder", { defaultValue: "ex. Wine Boxes" })} {/* Translation for placeholder */}
            className="flex-1 bg-transparent border-none focus:outline-none text-darkdark-6 text-base leading-6"
          />
        </div>
      </div>
    </div>
  );
};

export default TitleInput;
