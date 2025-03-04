import React from "react";
import { LockAlt } from "../../icons/LockAltScreen/LockAltScreen";
import { useTranslation } from "react-i18next";
import { Line } from "../Line/Line";

export const Access = ({
  isUserLoggedIn,
  handleAccept,
  isRequestSent,
  is_repostable,
}) => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col items-start gap-[15px] p-[15px] relative bg-whitewhite rounded-[5px]">
      <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
        <LockAlt
          className="!relative !w-5 !h-5"
          color={isRequestSent ? "#F27430" : null}
        />
        {!isRequestSent && (
          <p className="relative flex-1 mt-[-1.00px] font-body-large-bold font-[number:var(--body-large-bold-font-weight)] text-primary-color text-[length:var(--body-large-bold-font-size)] tracking-[var(--body-large-bold-letter-spacing)] leading-[var(--body-large-bold-line-height)] [font-style:var(--body-large-bold-font-style)]">
            {isUserLoggedIn
              ? is_repostable
                ? t("access.recreate_deal_desc")
                : t("access.participate_in_deal")
              : t("access.must_be_logged_in")}
          </p>
        )}
        {isRequestSent && (
          <p className="relative flex-1 mt-[-1.00px] font-body-large-bold font-[number:var(--body-large-bold-font-weight)] text-[#F27430] text-[length:var(--body-large-bold-font-size)] tracking-[var(--body-large-bold-letter-spacing)] leading-[var(--body-large-bold-line-height)] [font-style:var(--body-large-bold-font-style)]">
            {t("access.in_process_desc")}
          </p>
        )}
      </div>
      <Line />
      <div
        onClick={!isRequestSent ? handleAccept : null}
        className={`flex items-center justify-center gap-2.5 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] ${
          isRequestSent ? "bg-[#F27430]" : "bg-primary-color"
        } rounded-md`}
      >
        <p className="flex justify-center relative w-fit mt-[-1.00px] font-body-medium-medium font-[number:var(--body-medium-medium-font-weight)] text-whitewhite text-[length:var(--body-medium-medium-font-size)] text-center tracking-[var(--body-medium-medium-letter-spacing)] leading-[var(--body-medium-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-medium-font-style)]">
          <span className="mr-1">
            {isUserLoggedIn && (
              <LockAlt className="!relative !w-5 !h-5" color="white" />
            )}
          </span>
          {!isRequestSent && (
            <span>
              {isUserLoggedIn
                ? is_repostable
                  ? t("access.request_recreate_access")
                  : t("access.request_access")
                : t("access.login_create_account")}
            </span>
          )}
          {isRequestSent && <span>{t("access.in_process")}</span>}
        </p>
      </div>
    </div>
  );
};
