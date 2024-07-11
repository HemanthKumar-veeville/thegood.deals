import React from "react";
import { BreakpointDesktopWrapper } from "../../components/BreakpointDesktopWrapper";
import { Faq } from "../../components/Faq";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Layout } from "../../components/Layout";
import { IconChevronRight2 } from "../../icons/IconChevronRight2";
import { UserAlt4 } from "../../icons/UserAlt4/UserAlt4";
import { VerticalLine3 } from "../../icons/VerticalLine3/VerticalLine3";
import {
  frame14x10,
  frame14x11,
  frame14x9,
  placeHolderImage11,
  placeHolderImage12,
  placeHolderImage16,
  placeHolderImage18,
  placeHolderImage19,
  placeHolderImage2,
  placeHolderImage8,
  placeHolderImage9,
} from "../../images";

export const Home = () => {
  return (
    <div className="flex flex-col w-[360px] items-center relative bg-light-grey mx-auto">
      <header className="flex flex-col w-[360px] h-16 items-start relative bg-primary-background [border-top-style:none] [border-right-style:none] border-b [border-bottom-style:solid] [border-left-style:none] border-stroke">
        <div className="flex h-16 items-center justify-between pl-5 pr-3 py-0 relative self-stretch w-full">
          <div className="flex w-12 h-12 items-center justify-center gap-2.5 relative">
            <VerticalLine3 className="!relative !w-6 !h-6" />
          </div>
          <div className="inline-flex items-start relative flex-[0_0_auto]">
            <div className="inline-flex items-start relative flex-[0_0_auto]">
              <div className="inline-flex items-start relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Source_Serif_Pro',Helvetica] font-bold text-[#1b4f4a] text-[28px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                  thegood.deals
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-12 h-12 items-center justify-center gap-2.5 relative">
            <UserAlt4 className="!relative !w-6 !h-6" />
          </div>
        </div>
      </header>
      <div className="w-[360px] items-center gap-[30px] pt-4 pb-px px-5 flex-[0_0_auto] bg-light-grey flex flex-col relative overflow-hidden">
        <div className="ml-[-532.81px] mr-[-532.81px] relative flex-[0_0_auto]">
          <div className="flex w-[1355px] h-[169px] items-start gap-4 absolute top-0 -left-7">
            <img
              className="w-[206.38px] mb-[-1388.00px] ml-[-2319.42px] relative self-stretch"
              alt="Placeholder image"
              src={placeHolderImage16}
            />
            <img
              className="w-[206.38px] mb-[-1388.00px] ml-[-2097.04px] relative self-stretch"
              alt="Placeholder image"
              src={placeHolderImage16}
            />
            <img
              className="w-[110.55px] object-cover relative self-stretch"
              alt="Placeholder image"
              src={placeHolderImage2}
            />
            <img
              className="relative self-stretch w-[206.38px] object-cover"
              alt="Placeholder image"
              src={placeHolderImage18}
            />
            <img
              className="w-[11.07px] object-cover relative self-stretch"
              alt="Placeholder image"
              src={placeHolderImage19}
            />
            <img
              className="w-[206.38px] mb-[-1388.00px] ml-[-1207.53px] relative self-stretch"
              alt="Placeholder image"
              src={placeHolderImage11}
            />
          </div>
          <div className="flex w-[1355px] items-start gap-4 absolute top-[185px] left-[75px]">
            <img
              className="w-[206.38px] mb-[-1203.33px] ml-[-2422.61px] relative self-stretch"
              alt="Placeholder image"
              src={placeHolderImage11}
            />
            <img
              className="w-[206.38px] mb-[-1203.33px] ml-[-2200.23px] relative self-stretch"
              alt="Placeholder image"
              src={placeHolderImage11}
            />
            <img
              className="relative self-stretch w-[206.38px] object-cover"
              alt="Placeholder image"
              src={placeHolderImage8}
            />
            <img
              className="w-[130.26px] object-cover relative self-stretch"
              alt="Placeholder image"
              src={placeHolderImage9}
            />
            <img
              className="w-[206.38px] mb-[-1203.33px] ml-[-1533.10px] relative self-stretch"
              alt="Placeholder image"
              src={placeHolderImage11}
            />
            <img
              className="w-[206.38px] mb-[-1203.33px] ml-[-1310.72px] relative self-stretch"
              alt="Placeholder image"
              src={placeHolderImage11}
            />
          </div>
        </div>
        <div className="items-center gap-2 flex flex-col relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
            <p className="relative self-stretch mt-[-1.00px] [font-family:'Rethink_Sans',Helvetica] font-bold text-green text-[40px] text-center tracking-[0] leading-[48.0px]">
              Exceptional products at friendly prices
            </p>
            <p className="relative self-stretch [font-family:'Rethink_Sans',Helvetica] font-normal text-green text-lg text-center tracking-[0] leading-[27px]">
              Offer your loved ones the opportunity to discover exceptional
              products, thanks to our group orders. Benefit from preferential
              rates, but also enjoy together the richness and authenticity of
              our terroirs.
            </p>
          </div>
          <div className="inline-flex flex-col items-center gap-4 pt-4 pb-0 px-0 relative flex-[0_0_auto]">
            <button className="all-[unset] box-border inline-flex items-center justify-center gap-2 px-6 py-3 relative flex-[0_0_auto] mt-[-2.00px] bg-green rounded-[100px] border border-solid border-green">
              <button className="all-[unset] box-border relative w-fit mt-[-1.00px] ml-[-1.00px] [font-family:'Rethink_Sans',Helvetica] font-normal text-white text-base tracking-[0] leading-6 whitespace-nowrap">
                To log in
              </button>
            </button>
            <button className="all-[unset] box-border inline-flex items-center justify-center gap-2 px-6 py-3 relative flex-[0_0_auto] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] rounded-[100px] border border-solid border-green">
              <button className="all-[unset] box-border relative w-fit [font-family:'Rethink_Sans',Helvetica] font-normal text-green text-base tracking-[0] leading-6 whitespace-nowrap">
                Create an account
              </button>
            </button>
          </div>
        </div>
      </div>
      <Layout
        breakpoint="mobile"
        className="!flex-[0_0_auto] !w-[360px]"
        divClassName="!tracking-[0] !text-2xl ![font-style:unset] !font-bold ![font-family:'Rethink_Sans',Helvetica] !leading-[33.6px]"
        divClassNameOverride="!tracking-[0] !text-2xl ![font-style:unset] !font-bold ![font-family:'Rethink_Sans',Helvetica] !leading-[33.6px]"
        frame={frame14x9}
        frame1={frame14x11}
        frameClassName="!left-[104px] !top-[426px]"
        frameClassNameOverride="!left-[104px] !top-[799px]"
        headingClassName="!tracking-[0] !text-[32px] ![font-style:unset] !font-bold ![font-family:'Rethink_Sans',Helvetica] !leading-[38.4px]"
        headingClassNameOverride="!tracking-[0] !text-2xl ![font-style:unset] !font-bold ![font-family:'Rethink_Sans',Helvetica] !leading-[33.6px]"
        img={frame14x10}
        imgClassName="!left-[104px]"
        text="Savor the delights of local crafts together, in three simple steps"
        text1="Create your ad"
        text2="By creating an attractive ad where you define the price, give details of the products offered and introduce the craftsman. All the information your potential buyers need."
        text3="Invite your loved ones"
        text4="Encourage them to explore the offer and place an order, all facilitated by an online platform. This is an opportunity to introduce him to . products"
        text5="Deliver the Marchandise"
        text6="This includes the preparation of the packages by the craftsman and their delivery to you. Make sure that your loved ones receive the products under the best conditions."
      />
      <div className="flex items-center gap-2.5 px-5 py-0 relative self-stretch w-full flex-[0_0_auto]">
        <Header
          breakpoint="mobile"
          buttonDivClassName="!mt-[-1.00px] !text-green !ml-[-1.00px]"
          buttonStylePrimarySmallClassName="!border-white !mt-[-2.00px] !ml-[-2.00px] !flex-[0_0_auto] !bg-white"
          buttonText="Create a good deal"
          buttonText1="Manage my good deals"
          className="!flex-1 !px-5 !py-[25px] !grow !w-[unset]"
          crEzPartagezEtClassName="!tracking-[0] !text-4xl ![font-style:unset] !font-bold ![font-family:'Rethink_Sans',Helvetica] !leading-[43.2px]"
          text="Create, Share and Enjoy with a bulk order!"
          text1="In just a few clicks, create an order, invite your loved ones and share the pleasure of discovering together the unique flavors of local crafts. Take advantage of advantageous prices, support artisans in your region, and transform each purchase into a friendly and enriching experience."
        />
      </div>
      <BreakpointDesktopWrapper
        breakpoint="mobile"
        buttonIcon={<IconChevronRight2 className="!relative !w-6 !h-6" />}
        buttonText="How it works ?"
        buttonText1="About Us"
        className="!flex-[0_0_auto] !w-[360px]"
        divClassName="!tracking-[0] !text-xl ![font-style:unset] !font-bold ![font-family:'Rethink_Sans',Helvetica] !leading-[28.0px]"
        headingClassName="!tracking-[0] !text-4xl ![font-style:unset] !font-bold ![font-family:'Rethink_Sans',Helvetica] !leading-[43.2px]"
        headingClassNameOverride="!tracking-[0] !text-xl ![font-style:unset] !font-bold ![font-family:'Rethink_Sans',Helvetica] !leading-[28.0px]"
        placeholderImage={placeHolderImage12}
        text="Our approach"
        text1="Embark on the adventure of artisanal flavors"
        text2="By joining our group order community, benefit from advantageous prices while sharing the pleasure of tasting the best of local crafts. Make each purchase a unique experience, supporting artisans and sharing moments with your loved ones."
        text3="Shared consumption experience"
        text4="An enriching social experience, strengthening bonds with family and friends while discovering exceptional products together."
        text5="Support and promotion of local artisans"
        text6="By favoring products from local crafts, you contribute to maintaining and promoting the unique know-how of our regions."
      />
      <div className="flex w-[360px] items-center gap-2.5 px-5 py-0 relative flex-[0_0_auto]">
        <Faq
          breakpoint="mobile"
          buttonStylePrimarySmallClassName="!self-stretch !mr-[-1.00px] !ml-[-1.00px] !mb-[-1.00px] !flex-[0_0_auto] !flex !w-full"
          buttonText="Questions ? . Contact us"
          className="!flex-1 !px-5 !py-[25px] !grow !w-[unset]"
          divClassName="!tracking-[0] !text-4xl ![font-style:unset] !font-bold ![font-family:'Rethink_Sans',Helvetica] !leading-[43.2px]"
          questionClassName="!mt-[-1.00px]"
          text="You will find answers to the most common questions regarding our bulk ordering platform for artisan products."
          text1="How does bulk ordering work on your platform?"
          text2="Who are the partner artisans?"
          text3="How do I invite my loved ones to join a group order?"
          text4="How is the price of products calculated?"
          text5="How does delivery work?"
        />
      </div>
      <Footer
        breakpoint="mobile"
        buttonText="Subscribe"
        className="!flex-[0_0_auto] !w-[360px]"
        divClassName="![white-space:unset] !w-[155px]"
        linksClassName="!h-[485px] !flex-[unset]"
        spanClassName="!tracking-[0] !text-xs !font-normal ![font-family:'Rethink_Sans',Helvetica] !leading-[18px]"
        spanClassName1="!tracking-[0] !text-xs !font-normal ![font-family:'Rethink_Sans',Helvetica] !leading-[18px]"
        spanClassNameOverride="!text-[unset]"
        text="Sitemap"
        text1="About"
        text10="Our committed newsletter"
        text11="Stay informed (only once a month) of our news"
        text12="By subscribing, you agree to our "
        text13=" and consent to receive updates from our company."
        text14="© 2024 The Good Deals. All rights reserved."
        text2="How it works ?"
        text3="Bulk order"
        text4="Support / Contact"
        text5="FAQs"
        text6="Information"
        text7="Legal Notice"
        text8="Privacy Policy"
        text9="General Conditions of Sales and Use"
        textInputDivClassName="!mt-[-1.00px] !text-[#4f4f4f] !ml-[-1.00px]"
        textInputText="Enter your email"
        textInputTextInputClassName="!self-stretch !border-white !rounded-[100px] !mr-[-2.00px] !mt-[-2.00px] !ml-[-2.00px] !flex-[0_0_auto] !w-full"
      />
    </div>
  );
};
