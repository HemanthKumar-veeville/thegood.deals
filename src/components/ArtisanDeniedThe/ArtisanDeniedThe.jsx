/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { ArrowLeft1 } from "../../icons/ArrowLeft1";
import { ArrowRight1 } from "../../icons/ArrowRight1";
import { VerticalLine2 } from "../../icons/VerticalLine2";
import { Header } from "../Header";
import AppBar from "../AppBar/AppBar";

export const ArtisanDeniedThe = ({
  HEADERHeaderOpenClassName,
  HEADERIcon = (
    <VerticalLine2 className="!relative !w-6 !h-6" color="#1B4F4A" />
  ),
}) => {
  return (
    <div className="flex flex-col w-[360px] items-start relative bg-primary-background">
      <AppBar />
      <div className="flex flex-col w-[360px] items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]">
        <p className="relative self-stretch mt-[-1.00px] font-heading-6 font-[number:var(--heading-6-font-weight)] text-primary-color text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] [font-style:var(--heading-6-font-style)]">
          Vous n’êtes pas d’accord avec le deal ? 😕
        </p>
        <p className="relative self-stretch font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-primary-text-color text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] [font-style:var(--body-medium-regular-font-style)]">
          Nous allons transmettre vos infos à l’organisateur afin qu’il puisse
          corriger.
        </p>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src="/img/line-68.svg"
        />
        <div className="flex flex-col h-[220px] items-start gap-2.5 relative self-stretch w-full">
          <p className="relative w-fit mt-[-1.00px] font-body-large-medium font-[number:var(--body-large-medium-font-weight)] text-primary-color text-[length:var(--body-large-medium-font-size)] tracking-[var(--body-large-medium-letter-spacing)] leading-[var(--body-large-medium-line-height)] whitespace-nowrap [font-style:var(--body-large-medium-font-style)]">
            Indiquer vos infos à corriger
          </p>
          <div className="flex flex-col items-start relative flex-1 self-stretch w-full grow">
            <div className="flex items-start gap-2.5 p-5 self-stretch w-full grow bg-whitewhite rounded-md border border-solid border-stroke relative flex-1">
              <p className="mt-[-1.00px] font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-darkdark-6 text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] relative flex-1 [font-style:var(--body-medium-regular-font-style)]">
                ex. Changer l’adresse, augmenter le prix...
              </p>
            </div>
          </div>
          <div className="flex items-end justify-end gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-[42px] h-[22px] mr-[-2.00px]">
              <div className="absolute top-0 left-0 font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] text-right tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]">
                0/250
              </div>
            </div>
          </div>
        </div>
        <div className="gap-2.5 bg-primary-color flex items-center justify-center px-6 py-3 relative self-stretch w-full flex-[0_0_auto] rounded-md">
          <button className="all-[unset] box-border text-whitewhite relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            Envoyer pour relecture
          </button>
          <ArrowRight1 className="!relative !w-5 !h-5" color="white" />
        </div>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src="/img/line-68.svg"
        />
        <div className="gap-2 border border-solid border-primary-color flex items-center justify-center px-6 py-3 relative self-stretch w-full flex-[0_0_auto] rounded-md">
          <ArrowLeft1 className="!relative !w-5 !h-5" color="#1B4F4A" />
          <p className="text-primary-color relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            Annuler et revenir au deal
          </p>
        </div>
      </div>
    </div>
  );
};
