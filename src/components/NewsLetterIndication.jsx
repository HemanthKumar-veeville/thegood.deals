import React from "react";
import { useTranslation } from "react-i18next"; // Import translation hook

export const NewsLetterIndication = () => {
  const { t } = useTranslation(); // Initialize the translation hook

  return (
    <div className="flex flex-col w-full items-start relative bg-primary-background">
      <div className="flex flex-col items-start gap-4 self-stretch w-full relative">
        <div className="flex flex-col items-start gap-2.5 pt-0 w-full">
          <p className="font-heading-6 font-semibold text-primary-color text-xl tracking-normal leading-tight text-left">
            {t("newsLetterIndication.title")} {/* Translated title */}
          </p>
        </div>

        <div className="flex flex-col items-start gap-2.5 pt-0 pb-6 w-full">
          <p className="text-[#637381] text-base leading-6">
            {t("newsLetterIndication.content1")} {/* Translated content */}
          </p>
          <p className="text-[#637381] text-base leading-6">
            {t("newsLetterIndication.content2")} {/* Translated content */}
          </p>
          <p className="text-[#637381] text-base leading-6">
            {t("newsLetterIndication.content3")} {/* Translated content */}
          </p>
          <p className="text-[#637381] text-base leading-6">
            {t("newsLetterIndication.content4")} {/* Translated content */}
          </p>
          <p className="text-[#637381] text-base leading-6">
            {t("newsLetterIndication.content5")} {/* Translated content */}
          </p>
        </div>
      </div>
    </div>
  );
};
