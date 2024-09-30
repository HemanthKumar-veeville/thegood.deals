import React from "react";
import { LockAlt } from "../../icons/LockAltScreen/LockAltScreen";
import { Line63 } from "../../images";

export const Access = ({ isUserLoggedIn, handleAccept }) => {
  return (
    <div className="flex flex-col items-start gap-[15px] p-[15px] relative bg-whitewhite rounded-[5px]">
      <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
        <LockAlt className="!relative !w-5 !h-5" />
        <p className="relative flex-1 mt-[-1.00px] font-body-large-bold font-[number:var(--body-large-bold-font-weight)] text-primary-color text-[length:var(--body-large-bold-font-size)] tracking-[var(--body-large-bold-letter-spacing)] leading-[var(--body-large-bold-line-height)] [font-style:var(--body-large-bold-font-style)]">
          {isUserLoggedIn
            ? "To participate in the deal, the organizer must give you access"
            : "You must be logged in to order"}
        </p>
      </div>
      <img
        className="relative self-stretch w-full h-px object-cover"
        alt="Line"
        src={Line63}
      />
      <div
        onClick={handleAccept}
        className="flex items-center justify-center gap-2.5 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-primary-color rounded-md"
      >
        <p className="flex justify-center relative w-fit mt-[-1.00px] font-body-medium-medium font-[number:var(--body-medium-medium-font-weight)] text-whitewhite text-[length:var(--body-medium-medium-font-size)] text-center tracking-[var(--body-medium-medium-letter-spacing)] leading-[var(--body-medium-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-medium-font-style)]">
          <span className="mr-1">
            {isUserLoggedIn && (
              <LockAlt className="!relative !w-5 !h-5" color="white" />
            )}
          </span>
          <span>
            {isUserLoggedIn ? "I request access" : "Log in / Create an account"}
          </span>
        </p>
      </div>
    </div>
  );
};
