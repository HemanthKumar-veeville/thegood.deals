import React from "react";
import { useTranslation } from "react-i18next"; // Import translation hook

export const PrivacyCookiePolicy = () => {
  const { t } = useTranslation(); // Initialize the translation hook

  return (
    <div className="flex flex-col w-full items-start relative bg-primary-background">
      <div className="flex flex-col items-start gap-4 self-stretch w-full relative">
        <div className="flex flex-col items-start gap-2.5 pt-0 w-full">
          <p className="font-heading-6 font-semibold text-primary-color text-xl tracking-normal leading-tight text-left">
            {t("PrivacyCookiePolicy.title")} {/* Translated title */}
          </p>
        </div>

        <div className="flex flex-col items-start gap-2.5 pt-0 pb-6 w-full">
          <span className="font-semibold text-[#2a4e4a] text-xl text-left mt-6 uppercase">
            {t("PrivacyCookiePolicy.introduction.title")}{" "}
            {/* Translated section title */}
          </span>
          <p className="text-[#637381] text-base leading-6">
            {t("PrivacyCookiePolicy.introduction.content")}{" "}
            {/* Translated content */}
          </p>

          <span className="font-semibold text-[#2a4e4a] text-xl text-left mt-6 uppercase">
            {t("PrivacyCookiePolicy.dataController.title")}
          </span>
          <p className="text-[#637381] text-base leading-6">
            {t("PrivacyCookiePolicy.dataController.content")}
          </p>

          <span className="font-semibold text-[#2a4e4a] text-xl text-left mt-6 uppercase">
            {t("PrivacyCookiePolicy.personalData.title")}
          </span>
          <ul className="list-disc text-[#637381] text-base leading-6 ml-6">
            {t("PrivacyCookiePolicy.personalData.items", {
              returnObjects: true,
            }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <span className="font-semibold text-[#2a4e4a] text-xl text-left mt-6 uppercase">
            {t("PrivacyCookiePolicy.legitimacy.title")}
          </span>
          <ul className="list-disc text-[#637381] text-base leading-6 ml-6">
            {t("PrivacyCookiePolicy.legitimacy.items", {
              returnObjects: true,
            }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <span className="font-semibold text-[#2a4e4a] text-xl text-left mt-6 uppercase">
            {t("PrivacyCookiePolicy.dataDisclosure.title")}
          </span>
          <p className="text-[#637381] text-base leading-6">
            {t("PrivacyCookiePolicy.dataDisclosure.content")}
          </p>
          <ul className="list-disc text-[#637381] text-base leading-6 ml-6">
            {t("PrivacyCookiePolicy.dataDisclosure.items", {
              returnObjects: true,
            }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <span className="font-semibold text-[#2a4e4a] text-xl text-left mt-6 uppercase">
            {t("PrivacyCookiePolicy.dataStorage.title")}
          </span>
          <ul className="list-disc text-[#637381] text-base leading-6 ml-6">
            {t("PrivacyCookiePolicy.dataStorage.items", {
              returnObjects: true,
            }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <span className="font-semibold text-[#2a4e4a] text-xl text-left mt-6 uppercase">
            {t("PrivacyCookiePolicy.yourRights.title")}
          </span>
          <p className="text-[#637381] text-base leading-6">
            {t("PrivacyCookiePolicy.yourRights.content")}
          </p>
          <ul className="list-disc text-[#637381] text-base leading-6 ml-6">
            {t("PrivacyCookiePolicy.yourRights.items", {
              returnObjects: true,
            }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p className="text-[#637381] text-base leading-6">
            {t("PrivacyCookiePolicy.yourRights.contact")}
          </p>

          <span className="font-semibold text-[#2a4e4a] text-xl text-left mt-6 uppercase">
            {t("PrivacyCookiePolicy.useOfCookies.title")}
          </span>
          <p className="text-[#637381] text-base leading-6">
            {t("PrivacyCookiePolicy.useOfCookies.content")}
          </p>
          <ul className="list-disc text-[#637381] text-base leading-6 ml-6">
            {t("PrivacyCookiePolicy.useOfCookies.items", {
              returnObjects: true,
            }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <span className="font-semibold text-[#2a4e4a] text-xl text-left mt-6 uppercase">
            {t("PrivacyCookiePolicy.dataSecurity.title")}
          </span>
          <p className="text-[#637381] text-base leading-6">
            {t("PrivacyCookiePolicy.dataSecurity.content")}
          </p>

          <span className="font-semibold text-[#2a4e4a] text-xl text-left mt-6 uppercase">
            {t("PrivacyCookiePolicy.policyChanges.title")}
          </span>
          <p className="text-[#637381] text-base leading-6">
            {t("PrivacyCookiePolicy.policyChanges.content")}
          </p>

          <span className="font-semibold text-[#2a4e4a] text-xl text-left mt-6 uppercase">
            {t("PrivacyCookiePolicy.contact.title")}
          </span>
          <p className="text-[#637381] text-base leading-6">
            {t("PrivacyCookiePolicy.contact.content")}
          </p>
        </div>
      </div>
    </div>
  );
};
