import React from "react";
import { Badges } from "../../components/Badges";
import { RatingStar } from "../../components/RatingStar";
import { StyleTypePrimary } from "../../components/StyleTypePrimary";
import { Box43 } from "../../icons/Box43";
import { ClockAlt11 } from "../../icons/ClockAlt11";
import { DeliveryTruck4 } from "../../icons/DeliveryTruck4";
import { Map } from "../../icons/Map";
import { Minus1 } from "../../icons/Minus1";
import { Pencil } from "../../icons/Pencil";
import { Plus3 } from "../../icons/Plus3";
import { Send } from "../../icons/Send";
import { Send2 } from "../../icons/Send2";
import { ShoppingCart111 } from "../../icons/ShoppingCart111";
import { UserAlt2 } from "../../icons/UserAlt2";
import { Users2 } from "../../icons/Users2";
import { VerticalLine2 } from "../../icons/VerticalLine2";
import AppBar from "../../components/AppBar/AppBar";

const AdminViewGoodDeal = () => {
  return (
    <div className="flex flex-col w-screen items-start relative bg-primary-background">
      <AppBar />
      <div className="flex flex-col w-[360px] items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]">
        <div className="flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-center justify-center gap-2 px-6 py-3 relative flex-1 grow bg-whitewhite rounded-md shadow-shadow-1">
            <Pencil className="!relative !w-5 !h-5 !ml-[-7.25px]" />
            <button className="all-[unset] box-border relative w-fit mt-[-1.00px] mr-[-7.25px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap">
              To modify
            </button>
          </div>
          <div className="flex items-center justify-center gap-2 px-6 py-3 relative flex-1 grow bg-whitewhite rounded-md shadow-shadow-1">
            <Send className="!relative !w-5 !h-5" />
            <button className="all-[unset] box-border text-primary-color relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-base text-center tracking-[0] leading-6 whitespace-nowrap">
              Invite
            </button>
          </div>
        </div>
        <img
          className="relative self-stretch w-full h-[150px] object-cover"
          alt="Blog image"
          src="/img/blog-image.png"
        />
        <div className="relative self-stretch [font-family:'Inter',Helvetica] font-semibold text-primary-color text-2xl tracking-[0] leading-[30px]">
          Wine cratesDomaine de Cigaluse
        </div>
        <StyleTypePrimary
          className="!self-stretch !w-full !relative"
          divClassName="!tracking-[0] !text-xs ![font-style:unset] !font-medium ![font-family:'Inter',Helvetica] !left-[76px] !leading-5"
          groupClassName="!w-[290px]"
          line="/img/line-60.svg"
          lineClassName="!w-[220px]"
          overlapClassName="!w-[290px]"
          overlapGroupClassName="bg-[url(/static/img/line-59.svg)]"
          text="80% sold"
        />
        <div className="flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
            <ClockAlt11 className="!relative !w-5 !h-5" color="#1B4F4A" />
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
        <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <Map className="!relative !w-5 !h-5" />
          <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-color text-sm tracking-[0] leading-[22px] whitespace-nowrap">
            Domaine de Cigalus 11200 Bizanet
          </p>
        </div>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src="/img/line-65.svg"
        />
        <Badges
          className="!absolute !left-[47px] !top-[86px]"
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
            src="/img/rectangle-5095.png"
          />
          <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap">
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
          src="/img/line-65.svg"
        />
        <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <Box43 className="!relative !w-5 !h-5" />
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
          src="/img/line-65.svg"
        />
        <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <Box43 className="!relative !w-5 !h-5" />
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-primary-color text-lg tracking-[0] leading-[26px] whitespace-nowrap">
            Delivery location and date
          </div>
        </div>
        <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <ClockAlt11 className="!relative !w-5 !h-5" color="#1B4F4A" />
          <p className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-color text-base tracking-[0] leading-6">
            Saturday April 15, between 10 a.m
          </p>
        </div>
        <div className="flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <DeliveryTruck4 className="!relative !w-5 !h-5" color="#1B4F4A" />
          <p className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-color text-base tracking-[0] leading-6">
            Chez Abraham24 rue des Vignobles, 33000 Bordeaux
          </p>
        </div>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src="/img/line-65.svg"
        />
        <div className="flex flex-col items-start gap-[15px] p-[15px] w-full flex-[0_0_auto] bg-whitewhite rounded-[5px] relative self-stretch">
          <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <ShoppingCart111 className="!relative !w-5 !h-5" color="#1B4F4A" />
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-primary-color text-lg tracking-[0] leading-[26px] whitespace-nowrap">
              My basket
            </div>
          </div>
          <img
            className="relative self-stretch w-full h-px object-cover"
            alt="Line"
            src="/img/line-68.svg"
          />
          <div className="flex flex-col items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap">
                Case of Rosé - 6 bottles
              </p>
            </div>
            <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-orangeorange text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                3 available
              </div>
            </div>
            <div className="flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
                <div className="relative w-[116px] h-9 mr-[-2.00px]">
                  <div className="relative w-[114px] h-9 bg-whitewhite rounded-[5px] border border-solid border-stroke">
                    <img
                      className="absolute w-px h-9 -top-px left-[33px] object-cover"
                      alt="Line"
                      src="/img/line-146-1.svg"
                    />
                    <img
                      className="absolute w-px h-9 -top-px left-[79px] object-cover"
                      alt="Line"
                      src="/img/line-146-1.svg"
                    />
                    <Minus1
                      className="!absolute !w-3 !h-3 !top-[11px] !left-2.5"
                      color="#1B4F4A"
                    />
                    <Plus3
                      className="!absolute !w-3 !h-3 !top-[11px] !left-[90px]"
                      color="#1B4F4A"
                    />
                    <div className="absolute top-[5px] left-[52px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap">
                      1
                    </div>
                  </div>
                </div>
              </div>
              <div className="inline-flex flex-col items-end relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-color text-lg text-right tracking-[0] leading-[26px] whitespace-nowrap">
                  €29.00
                </div>
              </div>
            </div>
          </div>
          <img
            className="relative self-stretch w-full h-px object-cover"
            alt="Line"
            src="/img/line-68.svg"
          />
          <div className="flex flex-col items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap">
                Case of White - 6 bottles
              </p>
            </div>
            <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-secondary-color text-sm tracking-[0] leading-[22px] whitespace-nowrap">
              15 available
            </div>
            <div className="flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
                <div className="relative w-[116px] h-9 mr-[-2.00px]">
                  <div className="relative w-[114px] h-9 bg-whitewhite rounded-[5px] border border-solid border-stroke">
                    <img
                      className="absolute w-px h-9 -top-px left-[33px] object-cover"
                      alt="Line"
                      src="/img/line-146-1.svg"
                    />
                    <img
                      className="absolute w-px h-9 -top-px left-[79px] object-cover"
                      alt="Line"
                      src="/img/line-146-1.svg"
                    />
                    <Minus1
                      className="!absolute !w-3 !h-3 !top-[11px] !left-2.5"
                      color="#1B4F4A"
                    />
                    <Plus3
                      className="!absolute !w-3 !h-3 !top-[11px] !left-[90px]"
                      color="#1B4F4A"
                    />
                    <div className="absolute top-[5px] left-[52px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap">
                      1
                    </div>
                  </div>
                </div>
              </div>
              <div className="inline-flex flex-col items-end relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-color text-lg text-right tracking-[0] leading-[26px] whitespace-nowrap">
                  €29.00
                </div>
              </div>
            </div>
          </div>
          <img
            className="relative self-stretch w-full h-px object-cover"
            alt="Line"
            src="/img/line-68.svg"
          />
          <div className="flex flex-col items-end gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-xs text-center tracking-[0] leading-5 whitespace-nowrap">
                TOTAL PRICE
              </div>
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-primary-color text-lg text-right tracking-[0] leading-[26px] whitespace-nowrap">
                €58.00
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2.5 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-primary-color rounded-md">
            <Send2 className="!relative !w-5 !h-5" color="white" />
            <button className="all-[unset] box-border text-whitewhite relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-base text-center tracking-[0] leading-6 whitespace-nowrap">
              Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminViewGoodDeal;
