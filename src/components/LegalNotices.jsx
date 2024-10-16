import React from "react";
import { useTranslation } from "react-i18next";

export const LegalNotices = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col w-full items-start relative bg-primary-background">
      <div className="flex flex-col items-start gap-4 self-stretch w-full relative">
        <div className="flex flex-col items-start gap-2.5 pt-0 w-full">
          <p className="font-heading-6 font-semibold text-primary-color text-xl tracking-normal leading-tight text-left mt-6">
            {t("LegalNotices.title")}
          </p>
        </div>

        <div className="flex flex-col items-start gap-2.5 pt-0 pb-6 w-full">
          <span className="font-semibold text-[#2a4e4a] text-xl text-left mt-6 uppercase">
            {t("LegalNotices.contact_information.title")}
          </span>
          <p className="text-[#637381] text-base leading-6">
            {t("LegalNotices.contact_information.description")}
          </p>
          <p className="text-[#637381] text-base leading-6">
            {t("LegalNotices.contact_information.directors")}
          </p>

          <span className="font-semibold text-[#2a4e4a] text-xl text-left mt-6 uppercase">
            {t("LegalNotices.copyright.title")}
          </span>
          <p className="text-[#637381] text-base leading-6">
            {t("LegalNotices.copyright.description1")}
          </p>
          <p className="text-[#637381] text-base leading-6">
            {t("LegalNotices.copyright.description2")}
          </p>

          <span className="font-semibold text-[#2a4e4a] text-xl text-left mt-6 uppercase">
            {t("LegalNotices.trademarks.title")}
          </span>
          <p className="text-[#637381] text-base leading-6">
            {t("LegalNotices.trademarks.description1")}
          </p>
          <p className="text-[#637381] text-base leading-6">
            {t("LegalNotices.trademarks.description2")}
          </p>
        </div>
      </div>
    </div>
  );
};
