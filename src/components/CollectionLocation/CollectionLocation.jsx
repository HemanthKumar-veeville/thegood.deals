import React from "react";
import { Textarea } from "../Textarea";
import { useTranslation } from "react-i18next"; // Import translation hook

const CollectionLocation = ({ onChange, value }) => {
  const { t } = useTranslation(); // Initialize translation

  return (
    <div>
      {/* Title */}
      <div className="flex items-center gap-2.5 relative w-full">
        <div className="font-medium text-[#1b4f4a] text-lg">
          {t("collectionLocation.collectionLocationTitle")}
        </div>
      </div>

      {/* Provide Collection Location */}
      <div className="w-full mt-2">
        <Textarea
          name="collectionLocation"
          type="collectionLocation"
          description={value}
          onChange={onChange}
          className="!self-stretch !w-full"
          divClassName="!text-[#1b4f4a] !text-lg !leading-[26px]"
          divClassNameOverride="!tracking-[0] !text-base !flex-1 ![white-space:unset] ![font-style:unset] !font-normal ![font-family:'Inter',Helvetica] !leading-6 !w-[unset]"
          groupClassName="!w-[42px]"
          helperText="off"
          label=""
          label1="on"
          placeholder={t("collectionLocation.placeholderLocation")}
          secondLabel="on"
          secondLabelText="0/250"
          state="default"
        />
      </div>
    </div>
  );
};

export default CollectionLocation;
