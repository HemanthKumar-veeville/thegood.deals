import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import React from "react";
import { CheckmarkCircle2 } from "../../icons/CheckmarkCircle2";
import { CheckmarkCircle3 } from "../../icons/CheckmarkCircle3";
import { Button } from "../Button/Button";
import { useTranslation } from "react-i18next"; // Import translation hook

const MySwal = withReactContent(Swal);

export const ShowCustomSuccessModal = ({
  message,
  buttonText,
  shouldCloseOnOverlayClick = true,
  handleClick = () => MySwal.close(),
  onClose,
}) => {
  const { t } = useTranslation(); // Initialize translation hook

  MySwal.fire({
    html: (
      <div className="flex flex-col items-center gap-5 px-[15px] py-[30px] relative bg-white rounded-[20px]">
        <div className="relative self-stretch w-full h-[122px]">
          <div className="w-full gap-2.5 flex flex-col items-center relative">
            <div className="relative w-[60px] h-[60px] bg-green-light rounded-[37px]">
              <CheckmarkCircle3
                className="!absolute !w-full !h-full"
                color="#28a745"
              />
            </div>
            <div className="gap-[15px] self-stretch w-full flex-[0_0_auto] flex flex-col items-center relative">
              <p className="relative self-stretch mt-[-1.00px] font-body-large-semibold font-[number:var(--body-large-semibold-font-weight)] text-darkdark text-[length:var(--body-large-semibold-font-size)] text-center tracking-[var(--body-large-semibold-letter-spacing)] leading-[var(--body-large-semibold-line-height)] [font-style:var(--body-large-semibold-font-style)]">
                {message || t("customSuccessModal.defaultMessage")}
              </p>
            </div>
          </div>
        </div>
        <div
          className="gap-[18px] self-stretch w-full flex-[0_0_auto] flex flex-col items-center relative mt-3"
          onClick={handleClick}
        >
          <Button
            buttonText={buttonText || t("customSuccessModal.buttonText")}
            className="!flex-[0_0_auto] !flex !bg-green !w-[190px]" // Changed to success color
            color="primary"
            kind="primary"
            round="semi-round"
            state="default"
          />
        </div>
      </div>
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
