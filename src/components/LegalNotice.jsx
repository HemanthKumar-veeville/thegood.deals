import React from "react";
import { useTranslation } from "react-i18next";

export const Label = () => {
  const { t } = useTranslation();

  return (
    <div className="w-[290px] h-[1920px]">
      <p className="w-[290px] top-0 left-0 [font-family:'undefined-Regular',Helvetica] font-bold text-black text-base tracking-[0] leading-4">
        {t("Label.contact_information")}
        <br />
        <br />
        {t("Label.provision_of_services")}
        <br />
        <br />
        {t("Label.contact_channels")}
        <br />
        <br />
        {t("Label.founders_directors")}
        <br />
        <br />
        {t("Label.copyright_title")}
        <br />
        <br />
        {t("Label.copyright_content")}
        <br />
        <br />
        {t("Label.trademarks_title")}
        <br />
        <br />
        {t("Label.trademarks_content")}
      </p>
    </div>
  );
};
