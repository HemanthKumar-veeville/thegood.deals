import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import React, { useState } from "react";
import { Warning1 } from "../../icons/Warning1";
import { Button } from "../Button/Button";
import { useTranslation } from "react-i18next"; // Import translation hook

const MySwal = withReactContent(Swal);

const WarningModalContent = ({
  message,
  acceptButtonText,
  cancelButtonText,
  handleConfirm,
  handleRefuse,
  orderId,
  showReasonInput = false,
}) => {
  const { t } = useTranslation();
  const [cancellationReason, setCancellationReason] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [hasBlurred, setHasBlurred] = useState(false);

  const MIN_LENGTH = 5;
  const MAX_LENGTH = 250;

  const validateReason = (value) => {
    const trimmedValue = value.trimEnd();
    const trimmedLength = trimmedValue.length;

    if (trimmedLength === 0) {
      return t("common.cancellation_reason_required");
    }
    if (trimmedLength < MIN_LENGTH) {
      return t("common.cancellation_reason_too_short", { min: MIN_LENGTH });
    }
    if (trimmedLength > MAX_LENGTH) {
      return t("common.cancellation_reason_too_long", { max: MAX_LENGTH });
    }
    return "";
  };

  const handleReasonChange = (e) => {
    const newValue = e.target.value;
    // Prevent input beyond max length
    if (newValue.length <= MAX_LENGTH) {
      setCancellationReason(newValue);
      // Clear error on change if valid
      if (hasBlurred) {
        const error = validateReason(newValue);
        setErrorMessage(error);
      }
    }
  };

  const handleReasonBlur = () => {
    setHasBlurred(true);
    const error = validateReason(cancellationReason);
    setErrorMessage(error);
  };

  const handleConfirmClick = () => {
    if (showReasonInput) {
      const trimmedReason = cancellationReason.trimEnd();
      const error = validateReason(trimmedReason);
      
      if (error) {
        setErrorMessage(error);
        setHasBlurred(true);
        return;
      }
      
      // Reason is mandatory when showReasonInput is true
      handleConfirm(orderId, trimmedReason);
    } else {
      // If no reason input is shown, pass empty string (for backward compatibility)
      // But this should not happen for order cancellation
      handleConfirm(orderId, "");
    }
    MySwal.close();
  };

  const handleCancelClick = () => {
    handleRefuse();
    MySwal.close();
  };

  const trimmedLength = cancellationReason.trimEnd().length;
  const isValid = !errorMessage && trimmedLength >= MIN_LENGTH && trimmedLength <= MAX_LENGTH;
  const isDisabled = showReasonInput && !isValid;

  return (
    <div className="flex flex-col items-center gap-5 px-[15px] py-[30px] relative bg-white rounded-[20px]">
      <div className="relative self-stretch w-full">
        <div className="w-full gap-2.5 flex flex-col items-center relative">
          <div className="relative w-[60px] h-[60px] bg-redred-light-5 rounded-[37px]">
            <Warning1
              className="!absolute !w-6 !h-6 !top-[18px] !left-[18px]"
              color="#F23030"
            />
          </div>
          <div className="gap-[15px] self-stretch w-full flex-[0_0_auto] flex flex-col items-center relative">
            <p className="relative self-stretch mt-[-1.00px] font-body-large-semibold font-[number:var(--body-large-semibold-font-weight)] text-darkdark text-[length:var(--body-large-semibold-font-size)] text-center tracking-[var(--body-large-semibold-letter-spacing)] leading-[var(--body-large-semibold-line-height)] [font-style:var(--body-large-semibold-font-style)]">
              {message || t("common.cancel_header")}
            </p>
          </div>
        </div>
      </div>
      {showReasonInput && (
        <div className="flex flex-col items-start gap-2.5 self-stretch w-full">
          <label
            htmlFor="cancellation-reason"
            className="[font-family:'Inter',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-base font-medium leading-6 whitespace-nowrap relative text-darkdark"
          >
            {t("common.cancellation_reason_label")}{" "}
            <span className="text-redred font-bold ml-0.5" aria-label={t("common.required")} title={t("common.required")}>*</span>
          </label>
          <div className="w-full flex self-stretch flex-col items-start grow flex-1 relative">
            <div
              className={`flex items-start flex-1 p-5 relative w-full grow rounded-md gap-2.5 self-stretch border border-solid ${
                errorMessage && hasBlurred
                  ? "border-redred"
                  : "border-stroke"
              } ${
                errorMessage && hasBlurred ? "" : "focus-within:border-blueblue-light-4 focus-within:border-[3px]"
              } bg-white`}
            >
              <textarea
                id="cancellation-reason"
                value={cancellationReason}
                onChange={handleReasonChange}
                onBlur={handleReasonBlur}
                placeholder={t("common.cancellation_reason_placeholder")}
                maxLength={MAX_LENGTH}
                className="w-full h-full bg-transparent border-none focus:outline-none text-darkdark-6 text-base leading-6 resize-y min-h-[100px]"
                aria-label={t("common.cancellation_reason_label")}
                aria-invalid={errorMessage && hasBlurred ? "true" : "false"}
                aria-describedby={errorMessage && hasBlurred ? "cancellation-reason-error" : "cancellation-reason-help"}
                tabIndex={0}
              />
            </div>
          </div>
          <div className="flex items-center justify-between w-full">
            {errorMessage && hasBlurred ? (
              <p
                id="cancellation-reason-error"
                className="text-sm text-redred font-body-small-regular flex-1"
                role="alert"
              >
                {errorMessage}
              </p>
            ) : (
              <div id="cancellation-reason-help" className="text-sm text-primary-text-color font-body-small-regular">
                {t("common.cancellation_reason_helper", { min: MIN_LENGTH, max: MAX_LENGTH })}
              </div>
            )}
            <div className="text-sm text-primary-text-color font-body-small-regular text-right ml-2 whitespace-nowrap">
              {trimmedLength}/{MAX_LENGTH}
            </div>
          </div>
        </div>
      )}
      <div className="gap-[18px] self-stretch w-full flex-[0_0_auto] flex flex-col items-center relative mt-3">
        <div
          className={`flex justify-center items-center gap-2 ${
            isDisabled ? "cursor-not-allowed" : "cursor-pointer"
          }`}
          onClick={!isDisabled ? handleConfirmClick : undefined}
          tabIndex={isDisabled ? -1 : 0}
          role="button"
          aria-label={acceptButtonText || t("common.accept")}
          aria-disabled={isDisabled}
          onKeyDown={(e) => {
            if (!isDisabled && (e.key === "Enter" || e.key === " ")) {
              e.preventDefault();
              handleConfirmClick();
            }
          }}
        >
          <div className={isDisabled ? "opacity-50" : ""}>
            <Button
              buttonText={acceptButtonText || t("common.accept")}
              className="!flex-[0_0_auto] !flex !bg-redred !w-[190px]"
              color="primary"
              kind="primary"
              round="semi-round"
              state="default"
            />
          </div>
        </div>
        <div
          className="flex justify-center items-center gap-2 cursor-pointer"
          onClick={handleCancelClick}
          tabIndex={0}
          role="button"
          aria-label={cancelButtonText || t("common.cancel")}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleCancelClick();
            }
          }}
        >
          <Button
            buttonText={cancelButtonText || t("common.cancel")}
            className="!flex-[0_0_auto] !flex !w-[190px]"
            color="tertiary"
            kind="secondary"
            round="semi-round"
            state="default"
          />
        </div>
      </div>
    </div>
  );
};

export const ShowCustomWarningModal = ({
  message,
  acceptButtonText,
  cancelButtonText,
  shouldCloseOnOverlayClick = true,
  handleConfirm,
  handleRefuse,
  onClose,
  orderId,
  showReasonInput = false,
}) => {
  MySwal.fire({
    html: (
      <WarningModalContent
        message={message}
        acceptButtonText={acceptButtonText}
        cancelButtonText={cancelButtonText}
        handleConfirm={handleConfirm}
        handleRefuse={handleRefuse}
        orderId={orderId}
        showReasonInput={showReasonInput}
      />
    ),
    showConfirmButton: false,
    customClass: {
      popup: "p-0 bg-transparent shadow-none flex justify-center items-center",
    },
    backdrop: true,
    allowOutsideClick: shouldCloseOnOverlayClick,
    willClose: onClose,
  });
};
