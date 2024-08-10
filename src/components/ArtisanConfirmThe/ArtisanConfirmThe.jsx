import React from "react";
import { Box44 } from "../../icons/Box44";
import { ClockAlt11 } from "../../icons/ClockAlt11";
import { CrossCircle } from "../../icons/CrossCircle";
import { DeliveryTruck4 } from "../../icons/DeliveryTruck4";
import { Map } from "../../icons/Map";
import { Send2 } from "../../icons/Send2";
import { VerticalLine2 } from "../../icons/VerticalLine2";
import { Header } from "../Header";
import { RatingStar } from "../RatingStar";
import AppBar from "../AppBar/AppBar";
import {
  blogImage,
  Line63,
  Line_146_2,
  Line60,
  Line59,
  Rectangle_4592_5,
  Human,
} from "../../images";
import { Send1 } from "../../icons/Send1";

export const ArtisanConfirmThe = ({
  HEADERIcon = (
    <VerticalLine2 className="!relative !w-6 !h-6" color="#1B4F4A" />
  ),
  HEADERHeaderOpenClassName,
}) => {
  const handleRefuse = () => {
    alert("You have refused the deal.");
  };

  const handleConfirm = () => {
    alert("You have confirmed the deal.");
  };

  return (
    <div className="flex flex-col w-screen items-start relative bg-primary-background">
      <AppBar />
      <div className="flex-col w-[360px] items-start gap-[15px] px-[35px] py-[15px] flex relative flex-[0_0_auto]">
        <p className="relative self-stretch mt-[-1.00px] font-heading-6 font-[number:var(--heading-6-font-weight)] text-primary-color text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] [font-style:var(--heading-6-font-style)]">
          Dear craftsman, thank you for validating this deal 🤝
        </p>
        <p className="relative self-stretch font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-primary-text-color text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] [font-style:var(--body-medium-regular-font-style)]">
          Once the deal is confirmed, it will be offered for sale.
        </p>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <img
          className="relative self-stretch w-full h-[150px] object-cover"
          alt="Blog image"
          src={blogImage}
        />
        <p className="relative self-stretch font-heading-6 font-[number:var(--heading-6-font-weight)] text-primary-color text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] [font-style:var(--heading-6-font-style)]">
          Wine cratesDomaine de Cigaluse
        </p>
        <div className="flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
            <ClockAlt11 className="!relative !w-5 !h-5" color="#1B4F4A" />
            <p className="relative w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]">
              from August 15 to 30 (15 days)
            </p>
          </div>
        </div>
        <div className="flex self-stretch w-full items-center gap-2.5 relative flex-[0_0_auto]">
          <Map className="!relative !w-5 !h-5" />
          <p className="relative w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]">
            Domaine de Cigalus 11200 Bizanet
          </p>
        </div>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <div className="inline-flex items-center gap-[15px] relative flex-[0_0_auto]">
          <img
            className="relative w-[50px] h-[50px] object-cover"
            alt="Rectangle"
            src={Human}
          />
          <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]">
              Collection organized by
            </div>
            <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap">
              Abraham Thomas
            </div>
            <div className="inline-flex h-5 items-center gap-2.5 relative">
              <RatingStar
                className="!flex-[0_0_auto]"
                rating="four-star"
                size="small"
              />
            </div>
          </div>
        </div>
        <div className="relative self-stretch font-body-large-bold font-[number:var(--body-large-bold-font-weight)] text-primary-color text-[length:var(--body-large-bold-font-size)] tracking-[var(--body-large-bold-letter-spacing)] leading-[var(--body-large-bold-line-height)] [font-style:var(--body-large-bold-font-style)]">
          About the deal
        </div>
        <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-transparent text-base tracking-[0] leading-6">
          <span className="text-[#637381] font-body-medium-regular [font-style:var(--body-medium-regular-font-style)] font-[number:var(--body-medium-regular-font-weight)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] text-[length:var(--body-medium-regular-font-size)]">
            I discovered the Cilagus estate recently, and I must say that the
            wine there is exceptional. This discovery had such an impact on me
            that I would like to share it with you...
          </span>
          <span className="text-[#1b4f4a] font-body-medium-regular [font-style:var(--body-medium-regular-font-style)] font-[number:var(--body-medium-regular-font-weight)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] text-[length:var(--body-medium-regular-font-size)]">
            &nbsp;
          </span>
          <span className="font-bold text-[#1b4f4a] underline">Read more</span>
        </p>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <Box44 className="!relative !w-5 !h-5" />
          <p className="relative w-fit mt-[-1.00px] font-body-large-bold font-[number:var(--body-large-bold-font-weight)] text-primary-color text-[length:var(--body-large-bold-font-size)] tracking-[var(--body-large-bold-letter-spacing)] leading-[var(--body-large-bold-line-height)] whitespace-nowrap [font-style:var(--body-large-bold-font-style)]">
            What do customers receive?
          </p>
        </div>
        <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-transparent text-base tracking-[0] leading-6">
          <span className="text-[#637381] font-body-medium-regular [font-style:var(--body-medium-regular-font-style)] font-[number:var(--body-medium-regular-font-weight)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] text-[length:var(--body-medium-regular-font-size)]">
            Each bulk order will include a diverse selection of bottles from
            Cilaguse Estate, spanning robust red wines, delicate whites...
          </span>
          <span className="text-[#1b4f4a] font-body-medium-regular [font-style:var(--body-medium-regular-font-style)] font-[number:var(--body-medium-regular-font-weight)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] text-[length:var(--body-medium-regular-font-size)]">
            &nbsp;&nbsp;
          </span>
          <span className="font-bold text-[#1b4f4a] underline">Read more</span>
        </p>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <Box44 className="!relative !w-5 !h-5" />
          <p className="relative w-fit mt-[-1.00px] font-body-large-bold font-[number:var(--body-large-bold-font-weight)] text-primary-color text-[length:var(--body-large-bold-font-size)] tracking-[var(--body-large-bold-letter-spacing)] leading-[var(--body-large-bold-line-height)] whitespace-nowrap [font-style:var(--body-large-bold-font-style)]">
            Delivery location and date
          </p>
        </div>
        <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <ClockAlt11 className="!relative !w-5 !h-5" color="#1B4F4A" />
          <p className="relative w-fit mt-[-1.00px] font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-primary-text-color text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] whitespace-nowrap [font-style:var(--body-medium-regular-font-style)]">
            Saturday April 15, between 10 a.m
          </p>
        </div>
        <div className="flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <DeliveryTruck4 className="!relative !w-5 !h-5" color="#1B4F4A" />
          <p className="relative flex-1 mt-[-1.00px] font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-transparent text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] [font-style:var(--body-medium-regular-font-style)]">
            <span className="text-[#1b4f4a] font-body-medium-regular [font-style:var(--body-medium-regular-font-style)] font-[number:var(--body-medium-regular-font-weight)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] text-[length:var(--body-medium-regular-font-size)]">
              Chez Abraham{" "}
            </span>
            <span className="text-[#637381] font-body-medium-regular [font-style:var(--body-medium-regular-font-style)] font-[number:var(--body-medium-regular-font-weight)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] text-[length:var(--body-medium-regular-font-size)]">
              24 rue des Vignobles, 33000 Bordeaux
            </span>
          </p>
        </div>

        <div className="flex-col items-start gap-[15px] p-[15px] self-stretch w-full bg-whitewhite rounded-[5px] flex relative flex-[0_0_auto]">
          <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <Box44 className="!relative !w-5 !h-5" />
            <div className="relative w-fit mt-[-1.00px] font-body-large-bold font-[number:var(--body-large-bold-font-weight)] text-primary-color text-[length:var(--body-large-bold-font-size)] tracking-[var(--body-large-bold-letter-spacing)] leading-[var(--body-large-bold-line-height)] whitespace-nowrap [font-style:var(--body-large-bold-font-style)]">
              The good deal
            </div>
          </div>
          <img
            className="relative self-stretch w-full h-px object-cover"
            alt="Line"
            src={Line63}
          />
          <div className="flex flex-col items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative w-fit mt-[-1.00px] font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-primary-color text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] whitespace-nowrap [font-style:var(--body-medium-regular-font-style)]">
                Case of Rosé - 6 bottles
              </p>
            </div>
            <div className="flex flex-col items-start justify-center gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative w-fit mt-[-1.00px] font-body-small-medium font-[number:var(--body-small-medium-font-weight)] text-orangeorange text-[length:var(--body-small-medium-font-size)] tracking-[var(--body-small-medium-letter-spacing)] leading-[var(--body-small-medium-line-height)] whitespace-nowrap [font-style:var(--body-small-medium-font-style)]">
                Min quantity. per order: 2
              </p>
              <p className="relative w-fit font-body-small-medium font-[number:var(--body-small-medium-font-weight)] text-secondary-color text-[length:var(--body-small-medium-font-size)] tracking-[var(--body-small-medium-letter-spacing)] leading-[var(--body-small-medium-line-height)] whitespace-nowrap [font-style:var(--body-small-medium-font-style)]">
                Max quantity. per order: 13
              </p>
              <div className="relative w-fit font-body-small-medium font-[number:var(--body-small-medium-font-weight)] text-primary-color text-[length:var(--body-small-medium-font-size)] tracking-[var(--body-small-medium-letter-spacing)] leading-[var(--body-small-medium-line-height)] whitespace-nowrap [font-style:var(--body-small-medium-font-style)]">
                Total stock: 32
              </div>
            </div>
            <div className="items-center justify-end gap-[70px] self-stretch w-full flex relative flex-[0_0_auto]">
              <div className="inline-flex flex-col items-end relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-body-large-regular font-[number:var(--body-large-regular-font-weight)] text-primary-color text-[length:var(--body-large-regular-font-size)] text-right tracking-[var(--body-large-regular-letter-spacing)] leading-[var(--body-large-regular-line-height)] whitespace-nowrap [font-style:var(--body-large-regular-font-style)]">
                  €29.00 per unit
                </div>
              </div>
            </div>
          </div>
          <img
            className="relative self-stretch w-full h-px object-cover"
            alt="Line"
            src={Line63}
          />
          <div className="flex flex-col items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative w-fit mt-[-1.00px] font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-primary-color text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] whitespace-nowrap [font-style:var(--body-medium-regular-font-style)]">
                Case of Rosé - 6 bottles
              </p>
            </div>
            <div className="flex flex-col items-start justify-center gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative w-fit mt-[-1.00px] font-body-small-medium font-[number:var(--body-small-medium-font-weight)] text-orangeorange text-[length:var(--body-small-medium-font-size)] tracking-[var(--body-small-medium-letter-spacing)] leading-[var(--body-small-medium-line-height)] whitespace-nowrap [font-style:var(--body-small-medium-font-style)]">
                Min quantity. per order: 2
              </p>
              <p className="relative w-fit font-body-small-medium font-[number:var(--body-small-medium-font-weight)] text-secondary-color text-[length:var(--body-small-medium-font-size)] tracking-[var(--body-small-medium-letter-spacing)] leading-[var(--body-small-medium-line-height)] whitespace-nowrap [font-style:var(--body-small-medium-font-style)]">
                Max quantity. per order: 13
              </p>
              <div className="relative w-fit font-body-small-medium font-[number:var(--body-small-medium-font-weight)] text-primary-color text-[length:var(--body-small-medium-font-size)] tracking-[var(--body-small-medium-letter-spacing)] leading-[var(--body-small-medium-line-height)] whitespace-nowrap [font-style:var(--body-small-medium-font-style)]">
                Total stock: 32
              </div>
            </div>
            <div className="items-center justify-end gap-[70px] self-stretch w-full flex relative flex-[0_0_auto]">
              <div className="inline-flex flex-col items-end relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-body-large-regular font-[number:var(--body-large-regular-font-weight)] text-primary-color text-[length:var(--body-large-regular-font-size)] text-right tracking-[var(--body-large-regular-letter-spacing)] leading-[var(--body-large-regular-line-height)] whitespace-nowrap [font-style:var(--body-large-regular-font-style)]">
                  29.00 € à l’unité
                </div>
              </div>
            </div>
          </div>
          <img
            className="relative self-stretch w-full h-px object-cover"
            alt="Line"
            src={Line63}
          />
          <div className="flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
            <div
              onClick={handleRefuse}
              className="gap-2 bg-whitewhite border border-solid border-redred shadow-shadow-1 flex items-center justify-center px-6 py-3 relative flex-1 grow rounded-md"
            >
              <CrossCircle className="!relative !w-5 !h-5 !ml-[-6.75px]" />
              <button className="all-[unset] box-border mr-[-6.75px] text-redred relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                Refuse
              </button>
            </div>
            <div
              onClick={handleConfirm}
              className="gap-2.5 bg-primary-color flex items-center justify-center px-6 py-3 relative flex-1 grow rounded-md"
            >
              <Send1 className="!relative !w-5 !h-5 !ml-[-13.25px]" />
              <button className="all-[unset] box-border mr-[-13.25px] text-whitewhite relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
