import React from "react";
import { LockAlt } from "../../icons/LockAltScreen/LockAltScreen";
import { CheckmarkCircle5 } from "../../icons/CheckmarkCircle5";
import { useTranslation } from "react-i18next";
import { Line } from "../Line/Line";

export const Access = ({
  isUserLoggedIn,
  handleAccept,
  isRequestSent,
  is_repostable,
  approval_needed,
}) => {
  const { t } = useTranslation();

  // If approval is not needed, show join deal UI
  // Handle both boolean false and string "false" cases
  // Default to requiring approval (false) if approval_needed is undefined/null
  const showJoinDirectly = approval_needed === false || approval_needed === "false";

  const showDescriptionText = !isRequestSent && !(isUserLoggedIn && showJoinDirectly && !is_repostable);
  const showRequestInProgress = isRequestSent && !showJoinDirectly;

  return (
    <div className="flex flex-col items-start gap-[15px] p-[15px] relative bg-whitewhite rounded-[5px] w-full">
      {(showDescriptionText || showRequestInProgress) && (
        <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          {showDescriptionText && (
            <>
              {showJoinDirectly ? (
                <CheckmarkCircle5
                  className="!relative !w-5 !h-5 flex-shrink-0"
                  color="#1B4F4A"
                />
              ) : (
                <LockAlt
                  className="!relative !w-5 !h-5 flex-shrink-0"
                  color={isRequestSent ? "#F27430" : null}
                />
              )}
            </>
          )}
          {showRequestInProgress && (
            <LockAlt
              className="!relative !w-5 !h-5 flex-shrink-0"
              color="#F27430"
            />
          )}
          {showDescriptionText && (
            <p className="relative flex-1 mt-[-1.00px] font-body-large-bold font-[number:var(--body-large-bold-font-weight)] text-primary-color text-[length:var(--body-large-bold-font-size)] tracking-[var(--body-large-bold-letter-spacing)] leading-[var(--body-large-bold-line-height)] [font-style:var(--body-large-bold-font-style)]">
              {isUserLoggedIn
                ? is_repostable
                  ? t("access.recreate_deal_desc")
                  : t("access.participate_in_deal")
                : t("access.must_be_logged_in")}
            </p>
          )}
          {showRequestInProgress && (
            <p className="relative flex-1 mt-[-1.00px] font-body-large-bold font-[number:var(--body-large-bold-font-weight)] text-[#F27430] text-[length:var(--body-large-bold-font-size)] tracking-[var(--body-large-bold-letter-spacing)] leading-[var(--body-large-bold-line-height)] [font-style:var(--body-large-bold-font-style)]">
              {t("access.in_process_desc")}
            </p>
          )}
        </div>
      )}
      {(showDescriptionText || showRequestInProgress) && <Line />}
      <div
        onClick={!isRequestSent || showJoinDirectly ? handleAccept : null}
        className={`flex items-center justify-center gap-2.5 px-6 py-3 relative self-stretch w-full ${
          isRequestSent && !showJoinDirectly ? "bg-[#F27430]" : "bg-primary-color"
        } rounded-md cursor-pointer`}
      >
        <div className="flex items-center justify-center gap-2.5">
          {isUserLoggedIn && showJoinDirectly && (
            <CheckmarkCircle5 className="!relative !w-5 !h-5 flex-shrink-0" color="white" />
          )}
          {isUserLoggedIn && !showJoinDirectly && (
            <LockAlt className="!relative !w-5 !h-5 flex-shrink-0" color="white" />
          )}
          {(!isRequestSent || showJoinDirectly) && (
            <span className="font-body-medium-medium font-[number:var(--body-medium-medium-font-weight)] text-whitewhite text-[length:var(--body-medium-medium-font-size)] text-center tracking-[var(--body-medium-medium-letter-spacing)] leading-[var(--body-medium-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-medium-font-style)]">
              {isUserLoggedIn
                ? is_repostable
                  ? t("access.request_recreate_access")
                  : showJoinDirectly
                  ? t("access.join_deal")
                  : t("access.request_access")
                : t("access.login_create_account")}
            </span>
          )}
          {isRequestSent && !showJoinDirectly && (
            <span className="font-body-medium-medium font-[number:var(--body-medium-medium-font-weight)] text-whitewhite text-[length:var(--body-medium-medium-font-size)] text-center tracking-[var(--body-medium-medium-letter-spacing)] leading-[var(--body-medium-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-medium-font-style)]">
              {t("access.in_process")}
            </span>
          )}
        </div>
      </div>
    </div>
  );
};
