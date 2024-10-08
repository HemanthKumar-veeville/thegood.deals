import React from "react";
import { SuccessAlert } from "../../components/SuccessAlert";
import { Pencil } from "../../icons/Pencil";
import { useTranslation } from "react-i18next"; // Import useTranslation hook

export const DraftBanner = () => {
  const { t } = useTranslation(); // Initialize translation hook

  return (
    <SuccessAlert
      className="!flex !bg-cyancyan-light-3 w-[100%]"
      divClassName="!tracking-[0] !text-sm !flex-1 ![white-space:unset] ![font-style:unset] !font-medium ![font-family:'Inter',Helvetica] !leading-5 !w-[unset]"
      frameClassName="!flex-1 !flex !grow"
      groupClassName="!bg-cyancyan"
      icon={
        <Pencil className="!absolute !w-3 !h-3 !top-1 !left-1" color="white" />
      }
      style="three"
      text={
        <>
          {t("draftBanner.draftMessage")}
          <br />
          {t("draftBanner.completePrompt")}
        </>
      }
    />
  );
};
