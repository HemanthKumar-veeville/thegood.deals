import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import React from "react";
import { Warning1 } from "../../icons/Warning1";
import { Button } from "../Button/Button";

const MySwal = withReactContent(Swal);

export const ShowCustomErrorModal = ({
  message = "We're sorry, something has gone wrong. Please try later",
  buttonText = "Got it",
  shouldCloseOnOverlayClick = true, // Default to true unless specified
  handleClick,
}) => {
  MySwal.fire({
    html: (
      <div className="flex flex-col items-center gap-5 px-[15px] py-[30px] relative bg-white rounded-[20px]">
        <div className="relative self-stretch w-full h-[122px]">
          <div className="w-full gap-2.5 flex flex-col items-center relative">
            <div className="relative w-[60px] h-[60px] bg-redred-light-5 rounded-[37px]">
              <Warning1
                className="!absolute !w-6 !h-6 !top-[18px] !left-[18px]"
                color="#F23030"
              />
            </div>
            <div className="gap-[15px] self-stretch w-full flex-[0_0_auto] flex flex-col items-center relative">
              <p className=" relative self-stretch mt-[-1.00px] font-body-large-semibold font-[number:var(--body-large-semibold-font-weight)] text-darkdark text-[length:var(--body-large-semibold-font-size)] text-center tracking-[var(--body-large-semibold-letter-spacing)] leading-[var(--body-large-semibold-line-height)] [font-style:var(--body-large-semibold-font-style)]">
                {message}
              </p>
            </div>
          </div>
        </div>
        <div
          className="gap-[18px] self-stretch w-full flex-[0_0_auto] flex flex-col items-center relative mt-3"
          onClick={handleClick}
        >
          <Button
            buttonText={buttonText}
            className="!flex-[0_0_auto] !flex !bg-redred !w-[190px]"
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
    allowOutsideClick: shouldCloseOnOverlayClick, // Control overlay click behavior
  });
};
