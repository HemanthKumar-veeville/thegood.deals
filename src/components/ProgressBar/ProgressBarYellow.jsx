import React from "react";
import { useTranslation } from "react-i18next";

const ProgressBarYellow = ({ percentage }) => {
  const { t } = useTranslation(); // Use translation hook

  return (
    <div className="w-full bg-gray-200 rounded-full h-4">
      <div
        className="bg-[#FBBF24] h-full rounded-full flex items-center justify-start pl-1"
        style={{ width: `${percentage}%` }}
      >
        <span className="text-white text-xs">
          {t("ProgressBarYellow.sold", { percentage })}
        </span>
      </div>
    </div>
  );
};

export default ProgressBarYellow;
