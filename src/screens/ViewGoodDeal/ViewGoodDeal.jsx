import React from "react";
import { Badges } from "../../components/Badges";
import { StyleTypePrimary } from "../../components/StyleTypePrimaryUpdate01";
import { ArrowLeft1 } from "../../icons/ArrowLeft1";
import { Box41 } from "../../icons/Box41";
import { ClockAlt1 } from "../../icons/ClockAlt1";
import { DeliveryTruck4 } from "../../icons/DeliveryTruck4";
import { Map } from "../../icons/Map";
import { Minus } from "../../icons/Minus";
import { Plus3 } from "../../icons/Plus3";
import { Send1 } from "../../icons/Send1";
import { ShoppingCart11 } from "../../icons/ShoppingCart11";
import { UserAlt } from "../../icons/UserAlt";
import { Users2 } from "../../icons/Users2";
import { VerticalLine2 } from "../../icons/VerticalLine2";
import {
  blogImage,
  Line63,
  Line_146_2,
  Line60,
  Line59,
  Rectangle_4592_5,
} from "../../images";
import AppBar from "../../components/AppBar/AppBar";

export const ViewGoodDeal = () => {
  return (
    <div className="flex flex-col w-[360px] items-start relative bg-primary-background mx-auto">
      <AppBar />
      <div className="flex flex-col w-[360px] items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]">
        <div className="flex items-center gap-3 pt-0 pb-5 px-0 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-stroke">
          <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
            <ArrowLeft1
              className="!relative !w-[18px] !h-[18px]"
              color="#637381"
            />
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-text-color text-base tracking-[0] leading-6 whitespace-nowrap">
              Back
            </div>
          </div>
        </div>
        <img
          className="relative self-stretch w-full h-[150px] object-cover"
          alt="Blog image"
          src={blogImage}
        />
        <Badges
          className="!left-[275px] !absolute !bg-blueblue-light-5 !top-[86px]"
          color="warning"
          divClassName="!text-blueblue !tracking-[0] !text-lg ![font-style:unset] !font-medium ![font-family:'Inter',Helvetica] !leading-5"
          round="semi-round"
          state="duo-tone"
          text1="🇫🇷"
        />
        <div className="relative self-stretch [font-family:'Inter',Helvetica] font-semibold text-primary-color text-2xl tracking-[0] leading-[30px]">
          Wine cratesDomaine de Cigaluse
        </div>
        <StyleTypePrimary
          className="!self-stretch !w-full !relative"
          divClassName="!tracking-[0] !text-xs ![font-style:unset] !font-medium ![font-family:'Inter',Helvetica] !left-[27px] !leading-5"
          groupClassName="!w-[290px]"
          line={Line60}
          lineClassName="!w-40"
          overlapClassName="!w-[290px]"
          overlapGroupClassName={`bg-[url(${Line59})]`}
          text="50% sold"
        />
        <div className="flex items-start gap-[15px] w-full flex-[0_0_auto] relative self-stretch">
          <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
            <ClockAlt1 className="!relative !w-5 !h-5" color="#1B4F4A" />
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap">
              end in 12 days
            </div>
          </div>
          <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
            <Users2 className="!relative !w-5 !h-5" />
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap">
              13 participants
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2.5 self-stretch w-full relative flex-[0_0_auto]">
          <Map className="!relative !w-5 !h-5" />
          <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-color text-sm tracking-[0] leading-[22px] whitespace-nowrap">
            Domaine de Cigalus 11200 Bizanet
          </p>
        </div>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <Badges
          className="!left-[47px] !absolute !top-[86px]"
          color="warning"
          divClassName="!tracking-[0] !text-xs ![font-style:unset] !font-medium ![font-family:'Inter',Helvetica] !leading-5"
          round="semi-round"
          state="duo-tone"
          text1="Soon to be out of stock"
        />
        <div className="inline-flex items-center gap-[15px] relative flex-[0_0_auto]">
          <img
            className="relative w-[50px] h-[50px] object-cover"
            alt="Rectangle"
            src={Rectangle_4592_5}
          />
          <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap">
              Collection organized by
            </div>
            <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap">
              Anthony Brabant
            </div>
          </div>
        </div>
        <div className="relative self-stretch [font-family:'Inter',Helvetica] font-bold text-primary-color text-lg tracking-[0] leading-[26px]">
          About the deal
        </div>
        <p className="[font-family:'Inter',Helvetica] font-normal text-primary-text-color text-base tracking-[0] leading-6 relative self-stretch">
          <span className="[font-family:'Inter',Helvetica] font-normal text-[#637381] text-base tracking-[0] leading-6">
            I discovered the Cilagus estate recently, and I must say that the
            wine there is exceptional. This discovery had such an impact on me
            that I would like to share it with you...{" "}
          </span>
          <span className="font-bold underline">Read more</span>
        </p>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <div className="flex items-center gap-2.5 self-stretch w-full relative flex-[0_0_auto]">
          <Box41 className="!relative !w-5 !h-5" />
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-primary-color text-lg tracking-[0] leading-[26px] whitespace-nowrap">
            What do you receive?
          </div>
        </div>
        <p className="[font-family:'Inter',Helvetica] font-normal text-primary-text-color text-base tracking-[0] leading-6 relative self-stretch">
          <span className="[font-family:'Inter',Helvetica] font-normal text-[#637381] text-base tracking-[0] leading-6">
            Each bulk order will include a diverse selection of bottles from
            Cilaguse Estate, spanning robust red wines, delicate whites...{" "}
          </span>
          <span className="font-bold underline">Read more</span>
        </p>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <div className="flex items-center gap-2.5 self-stretch w-full relative flex-[0_0_auto]">
          <Box41 className="!relative !w-5 !h-5" />
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-primary-color text-lg tracking-[0] leading-[26px] whitespace-nowrap">
            Delivery location and date
          </div>
        </div>
        <div className="flex items-center gap-2.5 self-stretch w-full relative flex-[0_0_auto]">
          <ClockAlt1 className="!relative !w-5 !h-5" color="#1B4F4A" />
          <p className="relative w-fit mt-[-1.00px] mr-[-85.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-base tracking-[0] leading-6 whitespace-nowrap">
            Saturday April 15, between 10 a.m. and 3 p.m.
          </p>
        </div>
        <div className="flex items-start gap-2.5 self-stretch w-full relative flex-[0_0_auto]">
          <DeliveryTruck4 className="!relative !w-5 !h-5" color="#1B4F4A" />
          <p className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-color text-base tracking-[0] leading-6">
            Chez Anthony24 rue des Vignobles, 33000 Bordeaux
          </p>
        </div>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <div className="flex flex-col items-start gap-[15px] p-[15px] w-full flex-[0_0_auto] bg-whitewhite rounded-[5px] relative self-stretch">
          <div className="flex items-center gap-2.5 self-stretch w-full relative flex-[0_0_auto]">
            <ShoppingCart11 className="!relative !w-5 !h-5" color="#1B4F4A" />
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-primary-color text-lg tracking-[0] leading-[26px] whitespace-nowrap">
              My basket
            </div>
          </div>
          <img
            className="relative self-stretch w-full h-px object-cover"
            alt="Line"
            src={Line63}
          />
          <div className="flex flex-col items-start gap-[5px] self-stretch w-full relative flex-[0_0_auto]">
            <div className="flex items-center gap-2.5 self-stretch w-full relative flex-[0_0_auto]">
              <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap">
                Case of Rosé - 6 bottles
              </p>
            </div>
            <div className="flex items-center gap-2.5 self-stretch w-full relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-orangeorange text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                3 available
              </div>
            </div>
            <div className="flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex flex-col items-end relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-color text-lg text-right tracking-[0] leading-[26px] whitespace-nowrap">
                  €29.00
                </div>
              </div>
              <div className="flex w-[260px] items-end justify-between ml-[-61px] relative self-stretch">
                <div className="inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto]">
                  <div className="relative w-[81.17px] h-[25px] mr-[-2.00px]">
                    <div className="relative w-[79px] h-[25px] bg-whitewhite rounded-[3.47px] border-[0.69px] border-solid border-stroke">
                      <img
                        className="absolute w-px h-[25px] -top-px left-[23px]"
                        alt="Line"
                        src={Line_146_2}
                      />
                      <img
                        className="absolute w-px h-[25px] -top-px left-[55px]"
                        alt="Line"
                        src={Line_146_2}
                      />
                      <Minus className="!absolute !w-2 !h-2 !top-2 !left-[7px]" />
                      <Plus3 className="!absolute !w-2 !h-2 !top-2 !left-[62px]" />
                      <div className="absolute top-[3px] left-9 [font-family:'Inter',Helvetica] font-medium text-primary-color text-[11.1px] tracking-[0] leading-[16.7px] whitespace-nowrap">
                        1
                      </div>
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-center justify-center gap-2 relative flex-[0_0_auto]">
                  <div className="mt-[-1.00px] font-normal text-primary-color leading-6 line-through relative w-fit [font-family:'Inter',Helvetica] text-sm text-right tracking-[0] whitespace-nowrap">
                    67.99 €
                  </div>
                  <div className="font-semibold text-secondary-color leading-[22px] relative w-fit [font-family:'Inter',Helvetica] text-sm text-right tracking-[0] whitespace-nowrap">
                    29.00 €
                  </div>
                  <div className="inline-flex items-center justify-center gap-px px-1.5 py-0 relative flex-[0_0_auto] bg-greengreen-dark rounded">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-whitewhite text-[10px] tracking-[0] leading-5 whitespace-nowrap">
                      -57%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="relative self-stretch w-full h-px object-cover"
            alt="Line"
            src={Line63}
          />
          <div className="flex flex-col items-start gap-[5px] self-stretch w-full relative flex-[0_0_auto]">
            <div className="flex items-center gap-2.5 self-stretch w-full relative flex-[0_0_auto]">
              <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap">
                Case of White - 6 bottles
              </p>
            </div>
            <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-cyancyan text-sm tracking-[0] leading-[22px] whitespace-nowrap">
              15 available
            </div>
            <div className="flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex flex-col items-end relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-body-large-regular font-[number:var(--body-large-regular-font-weight)] text-primary-color text-[length:var(--body-large-regular-font-size)] text-right tracking-[var(--body-large-regular-letter-spacing)] leading-[var(--body-large-regular-line-height)] whitespace-nowrap [font-style:var(--body-large-regular-font-style)]">
                  29.00 €
                </div>
              </div>
              <div className="flex w-[260px] items-end justify-between ml-[-66px] relative self-stretch">
                <div className="inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto]">
                  <div className="relative w-[81.17px] h-[25px] mr-[-2.00px]">
                    <div className="relative w-[79px] h-[25px] bg-whitewhite rounded-[3.47px] border-[0.69px] border-solid border-stroke">
                      <img
                        className="absolute w-px h-[25px] -top-px left-[23px]"
                        alt="Line"
                        src={Line_146_2}
                      />
                      <img
                        className="absolute w-px h-[25px] -top-px left-[55px]"
                        alt="Line"
                        src={Line_146_2}
                      />
                      <Minus className="!absolute !w-2 !h-2 !top-2 !left-[7px]" />
                      <Plus3 className="!absolute !w-2 !h-2 !top-2 !left-[62px]" />
                      <div className="absolute top-[3px] left-9 [font-family:'Inter',Helvetica] font-medium text-primary-color text-[11.1px] tracking-[0] leading-[16.7px] whitespace-nowrap">
                        1
                      </div>
                    </div>
                  </div>
                </div>
                <div className="inline-flex items-center justify-center gap-2 relative flex-[0_0_auto]">
                  <div className="mt-[-1.00px] font-normal text-primary-color leading-6 line-through relative w-fit [font-family:'Inter',Helvetica] text-sm text-right tracking-[0] whitespace-nowrap">
                    67.99 €
                  </div>
                  <div className="font-semibold text-secondary-color leading-[22px] relative w-fit [font-family:'Inter',Helvetica] text-sm text-right tracking-[0] whitespace-nowrap">
                    29.00 €
                  </div>
                  <div className="inline-flex items-center justify-center gap-px px-1.5 py-0 relative flex-[0_0_auto] bg-greengreen-dark rounded">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-whitewhite text-[10px] tracking-[0] leading-5 whitespace-nowrap">
                      -57%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img
            className="relative self-stretch w-full h-px object-cover"
            alt="Line"
            src={Line63}
          />
          <div className="flex flex-col items-end gap-[5px] self-stretch w-full relative flex-[0_0_auto]">
            <div className="flex flex-col items-start self-stretch w-full relative flex-[0_0_auto]">
              <div className="flex flex-col items-end gap-[5px] self-stretch w-full relative flex-[0_0_auto]">
                <div className="flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]">
                  <div className="relative w-fit font-body-extra-small-text-regular font-[number:var(--body-extra-small-text-regular-font-weight)] text-primary-text-color text-[length:var(--body-extra-small-text-regular-font-size)] text-center tracking-[var(--body-extra-small-text-regular-letter-spacing)] leading-[var(--body-extra-small-text-regular-line-height)] whitespace-nowrap [font-style:var(--body-extra-small-text-regular-font-style)]">
                    TOTAL TTC
                  </div>
                  <div className="inline-flex items-start justify-end gap-2.5 relative flex-[0_0_auto]">
                    <div className="mt-[-1.00px] font-normal text-primary-text-color leading-6 line-through relative w-fit [font-family:'Inter',Helvetica] text-sm text-right tracking-[0] whitespace-nowrap">
                      135,98 €
                    </div>
                    <div className="mt-[-1.00px] font-semibold text-primary-color leading-[22px] relative w-fit [font-family:'Inter',Helvetica] text-sm text-right tracking-[0] whitespace-nowrap">
                      58.00 €
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]">
                <div className="relative w-fit font-body-extra-small-text-regular font-[number:var(--body-extra-small-text-regular-font-weight)] text-secondary-color text-[length:var(--body-extra-small-text-regular-font-size)] text-center tracking-[var(--body-extra-small-text-regular-letter-spacing)] leading-[var(--body-extra-small-text-regular-line-height)] whitespace-nowrap [font-style:var(--body-extra-small-text-regular-font-style)]">
                  Économisez
                </div>
                <div className="mt-[-1.00px] font-[number:var(--body-small-medium-font-weight)] text-secondary-color leading-[var(--body-small-medium-line-height)] relative w-fit font-body-small-medium text-[length:var(--body-small-medium-font-size)] text-right tracking-[var(--body-small-medium-letter-spacing)] whitespace-nowrap [font-style:var(--body-small-medium-font-style)]">
                  77,98 €
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2.5 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-primary-color rounded-md">
            <Send1 className="!relative !w-5 !h-5" color="white" />
            <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-whitewhite text-base text-center tracking-[0] leading-6 whitespace-nowrap">
              Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
