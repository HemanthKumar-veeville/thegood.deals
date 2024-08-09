/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { ArrowRight1 } from "../../icons/ArrowRight1";
import { Star5 } from "../../icons/Star5";
import { StarFill1 } from "../../icons/StarFill1";
import { VerticalLine } from "../../icons/VerticalLine";
import { Header } from "../Header";
import AppBar from "../AppBar/AppBar";

export const GuestsSendReviews = ({
  HEADERHeaderOpenClassName,
  HEADERIcon = <VerticalLine className="!relative !w-6 !h-6" color="#1B4F4A" />,
}) => {
  return (
    <div className="flex flex-col w-[360px] items-start relative bg-primary-background">
      <AppBar />
      <div className="flex flex-col w-[360px] items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]">
        <div className="relative self-stretch mt-[-1.00px] font-heading-6 font-[number:var(--heading-6-font-weight)] text-primary-color text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] [font-style:var(--heading-6-font-style)]">
          Donnez-vous votre avis !
        </div>
        <p className="relative self-stretch font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-primary-text-color text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] [font-style:var(--body-medium-regular-font-style)]">
          Merci d’avoir utiliser notre service, qu’en avez-vous pensé ?
        </p>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src="/img/line-71.svg"
        />
        <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="w-[247px] flex flex-col items-start relative flex-[0_0_auto]">
            <div className="relative self-stretch mt-[-1.00px] font-body-large-medium font-[number:var(--body-large-medium-font-weight)] text-primary-color text-[length:var(--body-large-medium-font-size)] tracking-[var(--body-large-medium-letter-spacing)] leading-[var(--body-large-medium-line-height)] [font-style:var(--body-large-medium-font-style)]">
              Notez l’organisateur du deal
            </div>
            <p className="relative self-stretch font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)]">
              L’organisateur a-t-il été à la hauteur ?
            </p>
          </div>
          <div className="inline-flex items-center gap-[8.33px] relative flex-[0_0_auto]">
            <div className="inline-flex items-start gap-[6.25px] relative flex-[0_0_auto]">
              <StarFill1
                className="!relative !w-[25px] !h-[25px]"
                color="#F59E0B"
              />
              <StarFill1 className="!relative !w-[25px] !h-[25px]" />
              <StarFill1 className="!relative !w-[25px] !h-[25px]" />
              <StarFill1 className="!relative !w-[25px] !h-[25px]" />
              <Star5
                className="!relative !w-[25px] !h-[25px]"
                color="#F59E0B"
              />
            </div>
          </div>
          <div className="flex flex-col h-[120px] items-start relative self-stretch w-full">
            <div className="flex-1 grow flex items-start gap-2.5 p-5 relative self-stretch w-full bg-whitewhite rounded-md border border-solid border-stroke">
              <div className="relative flex-1 mt-[-1.00px] font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-darkdark-6 text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] [font-style:var(--body-medium-regular-font-style)]">
                Remarques...
              </div>
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
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src="/img/line-71.svg"
        />
        <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="self-stretch w-full flex flex-col items-start relative flex-[0_0_auto]">
            <div className="relative self-stretch mt-[-1.00px] font-body-large-medium font-[number:var(--body-large-medium-font-weight)] text-primary-color text-[length:var(--body-large-medium-font-size)] tracking-[var(--body-large-medium-letter-spacing)] leading-[var(--body-large-medium-line-height)] [font-style:var(--body-large-medium-font-style)]">
              Notez les produits
            </div>
            <p className="relative self-stretch font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)]">
              Les produits reçus correspondent-ils
              <br />à vos attentes ?
            </p>
          </div>
          <div className="inline-flex items-center gap-[8.33px] relative flex-[0_0_auto]">
            <div className="inline-flex items-start gap-[6.25px] relative flex-[0_0_auto]">
              <StarFill1
                className="!relative !w-[25px] !h-[25px]"
                color="#F59E0B"
              />
              <StarFill1 className="!relative !w-[25px] !h-[25px]" />
              <StarFill1 className="!relative !w-[25px] !h-[25px]" />
              <StarFill1 className="!relative !w-[25px] !h-[25px]" />
              <Star5
                className="!relative !w-[25px] !h-[25px]"
                color="#F59E0B"
              />
            </div>
          </div>
          <div className="flex flex-col h-[120px] items-start relative self-stretch w-full">
            <div className="flex-1 grow flex items-start gap-2.5 p-5 relative self-stretch w-full bg-whitewhite rounded-md border border-solid border-stroke">
              <div className="relative flex-1 mt-[-1.00px] font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-darkdark-6 text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] [font-style:var(--body-medium-regular-font-style)]">
                Remarques...
              </div>
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
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src="/img/line-71.svg"
        />
        <div className="flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="self-stretch w-full flex flex-col items-start relative flex-[0_0_auto]">
            <p className="relative self-stretch mt-[-1.00px] font-body-large-medium font-[number:var(--body-large-medium-font-weight)] text-primary-color text-[length:var(--body-large-medium-font-size)] tracking-[var(--body-large-medium-letter-spacing)] leading-[var(--body-large-medium-line-height)] [font-style:var(--body-large-medium-font-style)]">
              Notez la plateforme Good Deals
            </p>
            <p className="relative self-stretch font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)]">
              Avez-vous apprécié utiliser notre site ?
            </p>
          </div>
          <div className="inline-flex items-center gap-[8.33px] relative flex-[0_0_auto]">
            <div className="inline-flex items-start gap-[6.25px] relative flex-[0_0_auto]">
              <StarFill1
                className="!relative !w-[25px] !h-[25px]"
                color="#F59E0B"
              />
              <StarFill1 className="!relative !w-[25px] !h-[25px]" />
              <StarFill1 className="!relative !w-[25px] !h-[25px]" />
              <StarFill1 className="!relative !w-[25px] !h-[25px]" />
              <Star5
                className="!relative !w-[25px] !h-[25px]"
                color="#F59E0B"
              />
            </div>
          </div>
          <div className="flex flex-col h-[120px] items-start relative self-stretch w-full">
            <div className="h-[120px] flex items-start gap-2.5 p-5 relative self-stretch w-full bg-whitewhite rounded-md border border-solid border-stroke">
              <div className="relative flex-1 mt-[-1.00px] font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-darkdark-6 text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] [font-style:var(--body-medium-regular-font-style)]">
                Remarques...
              </div>
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
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src="/img/line-71.svg"
        />
        <div className="flex items-center justify-center gap-2.5 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-primary-color rounded-md">
          <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-whitewhite text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            Envoyer mon avis
          </button>
          <ArrowRight1 className="!relative !w-5 !h-5" color="white" />
        </div>
      </div>
    </div>
  );
};
