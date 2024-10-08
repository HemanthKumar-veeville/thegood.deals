import React from "react";
import { useTranslation } from "react-i18next";

export const GeneralConditions = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col w-full items-start relative bg-primary-background">
      <div className="flex flex-col items-start gap-4 self-stretch w-full relative">
        <div className="flex flex-col items-start gap-2.5 pt-0 pb-6 w-full">
          <p className="font-heading-6 font-semibold text-primary-color text-xl tracking-normal leading-tight text-left mt-6">
            {t("GeneralConditions.heading")}
          </p>
        </div>

        <div className="flex flex-col items-start gap-2.5 pt-0 pb-6 w-full">
          <p className="font-normal text-primary-text-color text-base tracking-normal leading-6">
            <span className="font-normal text-[#637381]">
              {t("GeneralConditions.introduction")}
            </span>
          </p>

          <span className="font-semibold text-[#2a4e4a] text-xl text-left mt-6 uppercase">
            {t("GeneralConditions.section_1.title")}
          </span>

          <p className="text-[#637381] text-base leading-6">
            <strong>
              {t("GeneralConditions.section_1.content.thegoodDeals")}
            </strong>
            <br />
            <br />
            <strong>{t("GeneralConditions.section_1.content.user")}</strong>
            <br />
            <br />
            <strong>{t("GeneralConditions.section_1.content.seller")}</strong>
            <br />
            <br />
            <strong>{t("GeneralConditions.section_1.content.buyer")}</strong>
            <br />
            <br />
            <strong>{t("GeneralConditions.section_1.content.product")}</strong>
          </p>

          <span className="font-semibold text-[#2a4e4a] text-xl text-left mt-6 uppercase">
            {t("GeneralConditions.section_2.title")}
          </span>
          <p className="text-[#637381] text-base leading-6">
            {t("GeneralConditions.section_2.content")}
          </p>

          <span className="font-semibold text-[#2a4e4a] text-xl text-left mt-6 uppercase">
            {t("GeneralConditions.section_3.title")}
          </span>
          <ul className="list-disc text-[#637381] text-base leading-6 ml-6">
            <li>{t("GeneralConditions.section_3.content.0")}</li>
            <li>{t("GeneralConditions.section_3.content.1")}</li>
          </ul>

          <span className="font-semibold text-[#2a4e4a] text-xl text-left mt-6 uppercase">
            {t("GeneralConditions.section_4.title")}
          </span>
          <ul className="list-disc text-[#637381] text-base leading-6 ml-6">
            <li>{t("GeneralConditions.section_4.content.0")}</li>
            <li>{t("GeneralConditions.section_4.content.1")}</li>
          </ul>

          <span className="font-semibold text-[#2a4e4a] text-xl text-left mt-6 uppercase">
            {t("GeneralConditions.section_5.title")}
          </span>
          <ul className="list-disc text-[#637381] text-base leading-6 ml-6">
            <li>{t("GeneralConditions.section_5.content.0")}</li>
            <li>{t("GeneralConditions.section_5.content.1")}</li>
          </ul>

          <span className="font-semibold text-[#2a4e4a] text-xl text-left mt-6 uppercase">
            {t("GeneralConditions.section_6.title")}
          </span>
          <ul className="list-disc text-[#637381] text-base leading-6 ml-6">
            <li>{t("GeneralConditions.section_6.content.0")}</li>
            <li>{t("GeneralConditions.section_6.content.1")}</li>
          </ul>

          <span className="font-semibold text-[#2a4e4a] text-xl text-left mt-6 uppercase">
            {t("GeneralConditions.section_7.title")}
          </span>
          <ul className="list-disc text-[#637381] text-base leading-6 ml-6">
            <li>{t("GeneralConditions.section_7.content.0")}</li>
            <li>{t("GeneralConditions.section_7.content.1")}</li>
          </ul>

          <span className="font-semibold text-[#2a4e4a] text-xl text-left mt-6 uppercase">
            {t("GeneralConditions.section_8.title")}
          </span>
          <ul className="list-disc text-[#637381] text-base leading-6 ml-6">
            <li>{t("GeneralConditions.section_8.content.0")}</li>
            <li>{t("GeneralConditions.section_8.content.1")}</li>
            <li>{t("GeneralConditions.section_8.content.2")}</li>
          </ul>

          <span className="font-semibold text-[#2a4e4a] text-xl text-left mt-6 uppercase">
            {t("GeneralConditions.section_9.title")}
          </span>
          <ul className="list-disc text-[#637381] text-base leading-6 ml-6">
            <li>{t("GeneralConditions.section_9.content.0")}</li>
            <li>{t("GeneralConditions.section_9.content.1")}</li>
          </ul>

          <span className="font-semibold text-[#2a4e4a] text-xl text-left mt-6 uppercase">
            {t("GeneralConditions.section_10.title")}
          </span>
          <ul className="list-disc text-[#637381] text-base leading-6 ml-6">
            <li>{t("GeneralConditions.section_10.content.0")}</li>
          </ul>

          <span className="font-semibold text-[#2a4e4a] text-xl text-left mt-6 uppercase">
            {t("GeneralConditions.section_11.title")}
          </span>
          <ul className="list-disc text-[#637381] text-base leading-6 ml-6">
            <li>{t("GeneralConditions.section_11.content.0")}</li>
          </ul>

          <span className="font-semibold text-[#2a4e4a] text-xl text-left mt-6 uppercase">
            {t("GeneralConditions.section_12.title")}
          </span>
          <ul className="list-disc text-[#637381] text-base leading-6 ml-6">
            <li>{t("GeneralConditions.section_12.content.0")}</li>
            <li>{t("GeneralConditions.section_12.content.1")}</li>
          </ul>

          <span className="font-semibold text-[#2a4e4a] text-xl text-left mt-6 uppercase">
            {t("GeneralConditions.section_13.title")}
          </span>
          <ul className="list-disc text-[#637381] text-base leading-6 ml-6">
            <li>{t("GeneralConditions.section_13.content.0")}</li>
            <li>{t("GeneralConditions.section_13.content.1")}</li>
            <li>{t("GeneralConditions.section_13.content.2")}</li>
          </ul>

          <span className="font-semibold text-[#2a4e4a] text-xl text-left mt-6 uppercase">
            {t("GeneralConditions.section_14.title")}
          </span>
          <ul className="list-disc text-[#637381] text-base leading-6 ml-6">
            <li>{t("GeneralConditions.section_14.content.0")}</li>
            <li>{t("GeneralConditions.section_14.content.1")}</li>
          </ul>

          <span className="font-semibold text-[#2a4e4a] text-xl text-left mt-6 uppercase">
            {t("GeneralConditions.section_15.title")}
          </span>
          <ul className="list-disc text-[#637381] text-base leading-6 ml-6">
            <li>{t("GeneralConditions.section_15.content.0")}</li>
            <li>{t("GeneralConditions.section_15.content.1")}</li>
          </ul>

          <span className="font-semibold text-[#2a4e4a] text-xl text-left mt-6 uppercase">
            {t("GeneralConditions.section_16.title")}
          </span>
          <ul className="list-disc text-[#637381] text-base leading-6 ml-6">
            <li>{t("GeneralConditions.section_16.content.0")}</li>
            <li>{t("GeneralConditions.section_16.content.1")}</li>
          </ul>

          <span className="font-semibold text-[#2a4e4a] text-xl text-left mt-6 uppercase">
            {t("GeneralConditions.section_17.title")}
          </span>
          <p className="text-[#637381] text-base leading-6">
            {t("GeneralConditions.section_17.content")}
          </p>

          <span className="font-semibold text-[#2a4e4a] text-xl text-left mt-6 uppercase">
            {t("GeneralConditions.section_18.title")}
          </span>
          <p className="text-[#637381] text-base leading-6">
            {t("GeneralConditions.section_18.content")}
          </p>
        </div>
      </div>
    </div>
  );
};
