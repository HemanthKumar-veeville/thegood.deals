/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import { Box4 } from "../../icons/Box4";
import { ChevronDown } from "../../icons/ChevronDown";
import { ChevronUp } from "../../icons/ChevronUp";
import { Send } from "../../icons/Send";
import { LogoTheGoodDeals } from "../LogoTheGoodDeals";
import { SizeXlCorner } from "../SizeXlCorner";

export const ArtisanEmailList = ({ HEADERClassName }) => {
  return (
    <div className="flex flex-col w-[360px] items-start relative bg-primary-background">
      <div
        className={`flex flex-col w-[360px] h-16 items-start relative bg-primary-background border-b [border-bottom-style:solid] border-stroke ${HEADERClassName}`}
      >
        <div className="flex h-16 items-center justify-around gap-8 pl-5 pr-3 py-0 relative self-stretch w-full">
          <div className="inline-flex items-start relative flex-[0_0_auto]">
            <LogoTheGoodDeals
              className="!flex-[0_0_auto]"
              thegoodDealsClassName="!text-[28px]"
            />
          </div>
        </div>
      </div>
      <div className="flex-col w-[360px] items-start gap-[15px] px-[35px] py-[15px] flex relative flex-[0_0_auto]">
        <p className="relative self-stretch mt-[-1.00px] font-heading-6 font-[number:var(--heading-6-font-weight)] text-primary-color text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] [font-style:var(--heading-6-font-style)]">
          Cher artisan,
          <br />
          merci de confirmer
          <br />
          le bon de commande 🧾
        </p>
        <p className="relative self-stretch font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-primary-text-color text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] [font-style:var(--body-medium-regular-font-style)]">
          Je vous pris de bien vouloir confirmer le bon de commande ci-dessous.
          Nous souhaitons nous assurer que toutes les informations sont
          correctes afin de déclencher le paiement.
          <br />
          <br />
          Merci de bien vouloir confirmer via le bouton à la fin de l’email.
        </p>
        <div className="flex items-center justify-center gap-2.5 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-primary-color rounded-md">
          <Send className="!relative !w-5 !h-5" />
          <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-whitewhite text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            Confirmer les infos
          </button>
        </div>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src="/img/line-73.svg"
        />
        <div className="inline-flex items-center gap-[15px] relative flex-[0_0_auto]">
          <SizeXlCorner
            className="!h-[50px] !w-[50px]"
            divClassName="!tracking-[0] !text-lg ![font-style:unset] !font-semibold ![font-family:'Inter',Helvetica] !left-[13px] !leading-10 !top-1"
            text="AT"
          />
          <div className="inline-flex flex-col items-start gap-[5px] relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap">
              Abraham Thomas
            </div>
            <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
              <Box4 className="!relative !w-5 !h-5" />
              <p className="relative w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]">
                1 commande sur le deal
              </p>
            </div>
          </div>
          <ChevronDown className="!relative !w-6 !h-6" color="#1B4F4A" />
        </div>
        <div className="flex flex-col items-start gap-[15px] pt-0 pb-[15px] px-[15px] relative self-stretch w-full flex-[0_0_auto] bg-whitewhite">
          <img
            className="relative self-stretch w-full h-px mt-[-1.00px] object-cover"
            alt="Line"
            src="/img/line-68-2.svg"
          />
          <div className="flex flex-col items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative w-fit mt-[-1.00px] font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-primary-color text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] whitespace-nowrap [font-style:var(--body-medium-regular-font-style)]">
                Caisse de Rosé - 6 bouteilles
              </p>
            </div>
            <div className="items-end justify-between self-stretch w-full flex relative flex-[0_0_auto]">
              <div className="flex items-center gap-2.5 relative flex-1 grow">
                <div className="relative w-fit mt-[-1.00px] font-body-medium-semibold font-[number:var(--body-medium-semibold-font-weight)] text-secondary-color text-[length:var(--body-medium-semibold-font-size)] tracking-[var(--body-medium-semibold-letter-spacing)] leading-[var(--body-medium-semibold-line-height)] whitespace-nowrap [font-style:var(--body-medium-semibold-font-style)]">
                  3 produits
                </div>
              </div>
              <div className="inline-flex flex-col items-end relative flex-[0_0_auto]">
                <p className="relative w-fit mt-[-1.00px] font-body-medium-semibold font-[number:var(--body-medium-semibold-font-weight)] text-secondary-color text-[length:var(--body-medium-semibold-font-size)] text-right tracking-[var(--body-medium-semibold-letter-spacing)] leading-[var(--body-medium-semibold-line-height)] whitespace-nowrap [font-style:var(--body-medium-semibold-font-style)]">
                  29.00 € x 3 = 87 €
                </p>
              </div>
            </div>
          </div>
          <div className="items-start flex flex-col gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative w-fit mt-[-1.00px] font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-primary-color text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] whitespace-nowrap [font-style:var(--body-medium-regular-font-style)]">
                Caisse de Blanc - 6 bouteilles
              </p>
            </div>
            <div className="items-end justify-between self-stretch w-full flex relative flex-[0_0_auto]">
              <div className="flex items-center gap-2.5 relative flex-1 grow">
                <div className="relative w-fit mt-[-1.00px] font-body-medium-semibold font-[number:var(--body-medium-semibold-font-weight)] text-secondary-color text-[length:var(--body-medium-semibold-font-size)] tracking-[var(--body-medium-semibold-letter-spacing)] leading-[var(--body-medium-semibold-line-height)] whitespace-nowrap [font-style:var(--body-medium-semibold-font-style)]">
                  3 produits
                </div>
              </div>
              <div className="inline-flex flex-col items-end relative flex-[0_0_auto]">
                <p className="relative w-fit mt-[-1.00px] font-body-medium-semibold font-[number:var(--body-medium-semibold-font-weight)] text-secondary-color text-[length:var(--body-medium-semibold-font-size)] text-right tracking-[var(--body-medium-semibold-letter-spacing)] leading-[var(--body-medium-semibold-line-height)] whitespace-nowrap [font-style:var(--body-medium-semibold-font-style)]">
                  29.00 € x 3 = 87 €
                </p>
              </div>
            </div>
          </div>
          <div className="items-end justify-between self-stretch w-full flex relative flex-[0_0_auto]">
            <div className="flex items-center gap-2.5 relative flex-1 grow">
              <div className="relative w-fit mt-[-1.00px] font-body-large-semibold font-[number:var(--body-large-semibold-font-weight)] text-primary-color text-[length:var(--body-large-semibold-font-size)] tracking-[var(--body-large-semibold-letter-spacing)] leading-[var(--body-large-semibold-line-height)] whitespace-nowrap [font-style:var(--body-large-semibold-font-style)]">
                Total
              </div>
            </div>
            <div className="inline-flex flex-col items-end relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-body-large-semibold font-[number:var(--body-large-semibold-font-weight)] text-primary-color text-[length:var(--body-large-semibold-font-size)] text-right tracking-[var(--body-large-semibold-letter-spacing)] leading-[var(--body-large-semibold-line-height)] whitespace-nowrap [font-style:var(--body-large-semibold-font-style)]">
                174 €
              </div>
            </div>
          </div>
        </div>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src="/img/line-73.svg"
        />
        <div className="inline-flex items-center gap-[15px] relative flex-[0_0_auto]">
          <SizeXlCorner
            className="!h-[50px] !w-[50px]"
            divClassName="!tracking-[0] !text-lg ![font-style:unset] !font-semibold ![font-family:'Inter',Helvetica] !left-[13px] !leading-10 !top-1"
            text="JD"
          />
          <div className="inline-flex flex-col items-start gap-[5px] relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap">
              Jane Doe
            </div>
            <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
              <Box4 className="!relative !w-5 !h-5" />
              <p className="relative w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]">
                1 commande sur le deal
              </p>
            </div>
          </div>
          <ChevronUp className="!relative !w-6 !h-6" />
        </div>
        <div className="flex flex-col items-start gap-[15px] pt-0 pb-[15px] px-[15px] relative self-stretch w-full flex-[0_0_auto] bg-whitewhite">
          <img
            className="relative self-stretch w-full h-px mt-[-1.00px] object-cover"
            alt="Line"
            src="/img/line-68-2.svg"
          />
          <div className="flex flex-col items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative w-fit mt-[-1.00px] font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-primary-color text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] whitespace-nowrap [font-style:var(--body-medium-regular-font-style)]">
                Caisse de Rosé - 6 bouteilles
              </p>
            </div>
            <div className="items-end justify-between self-stretch w-full flex relative flex-[0_0_auto]">
              <div className="flex items-center gap-2.5 relative flex-1 grow">
                <div className="relative w-fit mt-[-1.00px] font-body-medium-semibold font-[number:var(--body-medium-semibold-font-weight)] text-secondary-color text-[length:var(--body-medium-semibold-font-size)] tracking-[var(--body-medium-semibold-letter-spacing)] leading-[var(--body-medium-semibold-line-height)] whitespace-nowrap [font-style:var(--body-medium-semibold-font-style)]">
                  3 produits
                </div>
              </div>
              <div className="inline-flex flex-col items-end relative flex-[0_0_auto]">
                <p className="relative w-fit mt-[-1.00px] font-body-medium-semibold font-[number:var(--body-medium-semibold-font-weight)] text-secondary-color text-[length:var(--body-medium-semibold-font-size)] text-right tracking-[var(--body-medium-semibold-letter-spacing)] leading-[var(--body-medium-semibold-line-height)] whitespace-nowrap [font-style:var(--body-medium-semibold-font-style)]">
                  29.00 € x 3 = 87 €
                </p>
              </div>
            </div>
          </div>
          <div className="items-start flex flex-col gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative w-fit mt-[-1.00px] font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-primary-color text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] whitespace-nowrap [font-style:var(--body-medium-regular-font-style)]">
                Caisse de Blanc - 6 bouteilles
              </p>
            </div>
            <div className="items-end justify-between self-stretch w-full flex relative flex-[0_0_auto]">
              <div className="flex items-center gap-2.5 relative flex-1 grow">
                <div className="relative w-fit mt-[-1.00px] font-body-medium-semibold font-[number:var(--body-medium-semibold-font-weight)] text-secondary-color text-[length:var(--body-medium-semibold-font-size)] tracking-[var(--body-medium-semibold-letter-spacing)] leading-[var(--body-medium-semibold-line-height)] whitespace-nowrap [font-style:var(--body-medium-semibold-font-style)]">
                  3 produits
                </div>
              </div>
              <div className="inline-flex flex-col items-end relative flex-[0_0_auto]">
                <p className="relative w-fit mt-[-1.00px] font-body-medium-semibold font-[number:var(--body-medium-semibold-font-weight)] text-secondary-color text-[length:var(--body-medium-semibold-font-size)] text-right tracking-[var(--body-medium-semibold-letter-spacing)] leading-[var(--body-medium-semibold-line-height)] whitespace-nowrap [font-style:var(--body-medium-semibold-font-style)]">
                  29.00 € x 3 = 87 €
                </p>
              </div>
            </div>
          </div>
          <div className="items-end justify-between self-stretch w-full flex relative flex-[0_0_auto]">
            <div className="flex items-center gap-2.5 relative flex-1 grow">
              <div className="relative w-fit mt-[-1.00px] font-body-large-semibold font-[number:var(--body-large-semibold-font-weight)] text-primary-color text-[length:var(--body-large-semibold-font-size)] tracking-[var(--body-large-semibold-letter-spacing)] leading-[var(--body-large-semibold-line-height)] whitespace-nowrap [font-style:var(--body-large-semibold-font-style)]">
                Total
              </div>
            </div>
            <div className="inline-flex flex-col items-end relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-body-large-semibold font-[number:var(--body-large-semibold-font-weight)] text-primary-color text-[length:var(--body-large-semibold-font-size)] text-right tracking-[var(--body-large-semibold-letter-spacing)] leading-[var(--body-large-semibold-line-height)] whitespace-nowrap [font-style:var(--body-large-semibold-font-style)]">
                174 €
              </div>
            </div>
          </div>
        </div>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src="/img/line-73.svg"
        />
        <div className="inline-flex items-center gap-[15px] relative flex-[0_0_auto]">
          <SizeXlCorner
            className="!h-[50px] !w-[50px]"
            divClassName="!tracking-[0] !text-lg ![font-style:unset] !font-semibold ![font-family:'Inter',Helvetica] !left-[13px] !leading-10 !top-1"
            text="JD"
          />
          <div className="inline-flex flex-col items-start gap-[5px] relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap">
              Jane Doe
            </div>
            <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
              <Box4 className="!relative !w-5 !h-5" />
              <p className="relative w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]">
                1 commande sur le deal
              </p>
            </div>
          </div>
          <ChevronUp className="!relative !w-6 !h-6" />
        </div>
        <div className="flex flex-col items-start gap-[15px] pt-0 pb-[15px] px-[15px] relative self-stretch w-full flex-[0_0_auto] bg-whitewhite">
          <img
            className="relative self-stretch w-full h-px mt-[-1.00px] object-cover"
            alt="Line"
            src="/img/line-68-2.svg"
          />
          <div className="flex flex-col items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative w-fit mt-[-1.00px] font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-primary-color text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] whitespace-nowrap [font-style:var(--body-medium-regular-font-style)]">
                Caisse de Rosé - 6 bouteilles
              </p>
            </div>
            <div className="items-end justify-between self-stretch w-full flex relative flex-[0_0_auto]">
              <div className="flex items-center gap-2.5 relative flex-1 grow">
                <div className="relative w-fit mt-[-1.00px] font-body-medium-semibold font-[number:var(--body-medium-semibold-font-weight)] text-secondary-color text-[length:var(--body-medium-semibold-font-size)] tracking-[var(--body-medium-semibold-letter-spacing)] leading-[var(--body-medium-semibold-line-height)] whitespace-nowrap [font-style:var(--body-medium-semibold-font-style)]">
                  3 produits
                </div>
              </div>
              <div className="inline-flex flex-col items-end relative flex-[0_0_auto]">
                <p className="relative w-fit mt-[-1.00px] font-body-medium-semibold font-[number:var(--body-medium-semibold-font-weight)] text-secondary-color text-[length:var(--body-medium-semibold-font-size)] text-right tracking-[var(--body-medium-semibold-letter-spacing)] leading-[var(--body-medium-semibold-line-height)] whitespace-nowrap [font-style:var(--body-medium-semibold-font-style)]">
                  29.00 € x 3 = 87 €
                </p>
              </div>
            </div>
          </div>
          <div className="items-start flex flex-col gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative w-fit mt-[-1.00px] font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-primary-color text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] whitespace-nowrap [font-style:var(--body-medium-regular-font-style)]">
                Caisse de Blanc - 6 bouteilles
              </p>
            </div>
            <div className="items-end justify-between self-stretch w-full flex relative flex-[0_0_auto]">
              <div className="flex items-center gap-2.5 relative flex-1 grow">
                <div className="relative w-fit mt-[-1.00px] font-body-medium-semibold font-[number:var(--body-medium-semibold-font-weight)] text-secondary-color text-[length:var(--body-medium-semibold-font-size)] tracking-[var(--body-medium-semibold-letter-spacing)] leading-[var(--body-medium-semibold-line-height)] whitespace-nowrap [font-style:var(--body-medium-semibold-font-style)]">
                  3 produits
                </div>
              </div>
              <div className="inline-flex flex-col items-end relative flex-[0_0_auto]">
                <p className="relative w-fit mt-[-1.00px] font-body-medium-semibold font-[number:var(--body-medium-semibold-font-weight)] text-secondary-color text-[length:var(--body-medium-semibold-font-size)] text-right tracking-[var(--body-medium-semibold-letter-spacing)] leading-[var(--body-medium-semibold-line-height)] whitespace-nowrap [font-style:var(--body-medium-semibold-font-style)]">
                  29.00 € x 3 = 87 €
                </p>
              </div>
            </div>
          </div>
          <div className="items-end justify-between self-stretch w-full flex relative flex-[0_0_auto]">
            <div className="flex items-center gap-2.5 relative flex-1 grow">
              <div className="relative w-fit mt-[-1.00px] font-body-large-semibold font-[number:var(--body-large-semibold-font-weight)] text-primary-color text-[length:var(--body-large-semibold-font-size)] tracking-[var(--body-large-semibold-letter-spacing)] leading-[var(--body-large-semibold-line-height)] whitespace-nowrap [font-style:var(--body-large-semibold-font-style)]">
                Total
              </div>
            </div>
            <div className="inline-flex flex-col items-end relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-body-large-semibold font-[number:var(--body-large-semibold-font-weight)] text-primary-color text-[length:var(--body-large-semibold-font-size)] text-right tracking-[var(--body-large-semibold-letter-spacing)] leading-[var(--body-large-semibold-line-height)] whitespace-nowrap [font-style:var(--body-large-semibold-font-style)]">
                174 €
              </div>
            </div>
          </div>
        </div>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src="/img/line-73.svg"
        />
        <div className="flex-col items-start gap-[15px] p-[15px] self-stretch w-full bg-whitewhite rounded-[5px] flex relative flex-[0_0_auto]">
          <div className="items-end flex flex-col gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex justify-between self-stretch w-full items-end relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-body-large-bold font-[number:var(--body-large-bold-font-weight)] text-primary-color text-[length:var(--body-large-bold-font-size)] text-center tracking-[var(--body-large-bold-letter-spacing)] leading-[var(--body-large-bold-line-height)] whitespace-nowrap [font-style:var(--body-large-bold-font-style)]">
                Total TTC
              </div>
              <div className="relative w-fit mt-[-1.00px] font-body-large-bold font-[number:var(--body-large-bold-font-weight)] text-primary-color text-[length:var(--body-large-bold-font-size)] text-right tracking-[var(--body-large-bold-letter-spacing)] leading-[var(--body-large-bold-line-height)] whitespace-nowrap [font-style:var(--body-large-bold-font-style)]">
                552.00 €
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2.5 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-primary-color rounded-md">
            <Send className="!relative !w-5 !h-5" />
            <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-whitewhite text-base text-center tracking-[0] leading-6 whitespace-nowrap">
              Confirmer les infos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
