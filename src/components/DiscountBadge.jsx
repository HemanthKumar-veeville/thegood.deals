import React from "react";
import { useTranslation } from "react-i18next"; // Add translation hook

const DiscountBadge = ({
  discount,
  className = "absolute top-12 left-4 bg-greengreen-light-6 text-greengreen text-xs font-bold px-3 py-1 rounded-md shadow-md",
}) => {
  const { t } = useTranslation(); // Initialize the translation hook

  return (
    <span className={className}>
      {discount}% {t("DeleteAccount.common.offer")}
    </span>
  );
};

export default DiscountBadge;
