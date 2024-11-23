import React, { useEffect } from "react";
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
  picture1,
  picture2,
  picture3,
  picture4,
  picture5,
  picture6,
  placeHolderImage14,
} from "../../images";
import AppBar from "../../components/AppBar/AppBar";
import { useNavigate } from "react-router-dom";
import ScrollIntoView from "react-scroll-into-view";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import ImageRotator from "../../components/ImageRotator/ImageRotator";
import { useTranslation } from "react-i18next";
import { Button } from "../../components/RoundedButton";

const HowItWorks = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const IMAGES = [picture1, picture2, picture3, picture4];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const headingClassName = "";
  const text1 = t("how_it_works.text1");
  const text2 = t("how_it_works.text2");
  const headingClassNameOverride = "";
  const text3 = t("how_it_works.text3");
  const text4 = t("how_it_works.text4");
  const divClassName = "";
  const text5 = t("how_it_works.text5");
  const text6 = t("how_it_works.text6");
  const buttonText = t("how_it_works.buttonText");
  const buttonText1 = t("how_it_works.buttonText1");
  const buttonIcon = <IconChevronRight2 className="!relative !w-6 !h-6" />;
  const placeholderImage = placeHolderImage14;
  const values = [
    {
      heading: t("how_it_works.values.authenticity.heading"),
      definition: t("how_it_works.values.authenticity.definition"),
    },
    {
      heading: t("how_it_works.values.community.heading"),
      definition: t("how_it_works.values.community.definition"),
    },
    {
      heading: t("how_it_works.values.local_support.heading"),
      definition: t("how_it_works.values.local_support.definition"),
    },
  ];

  const reason = [
    {
      heading: t("how_it_works.reason.unique_products.heading"),
      definition: t("how_it_works.reason.unique_products.definition"),
    },
    {
      heading: t("how_it_works.reason.advantageous_prices.heading"),
      definition: t("how_it_works.reason.advantageous_prices.definition"),
    },
    {
      heading: t("how_it_works.reason.enriching_experience.heading"),
      definition: t("how_it_works.reason.enriching_experience.definition"),
    },
  ];

  return (
    <div className="flex flex-col w-full items-center relative bg-light-grey mx-auto">
      <div className="w-full items-center gap-[30px] pb-px px-5 flex-[0_0_auto] bg-light-grey flex flex-col relative overflow-hidden">
        <div
          id="order"
          className="items-center gap-2 flex flex-col relative self-stretch w-full flex-[0_0_auto]"
        >
          <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
            <p className="relative self-stretch mt-[-1.00px] [font-family:'Rethink_Sans',Helvetica] font-bold text-green text-[40px] text-center tracking-[0] leading-[48.0px]">
              {t("how_it_works.title")}
            </p>
            <p className="relative self-stretch [font-family:'Rethink_Sans',Helvetica] font-normal text-green text-lg text-center tracking-[0] leading-[27px]">
              {t("how_it_works.description")}
            </p>
          </div>
          <div className="inline-flex flex-col items-center gap-4 pt-4 pb-0 px-0 relative flex-[0_0_auto]">
            <button
              className="all-[unset] box-border inline-flex items-center justify-center gap-2 px-6 py-3 relative flex-[0_0_auto] mt-[-2.00px] bg-green rounded-[100px] border border-solid border-green hover:bg-[#15423b] hover:text-[#d4d4d4] cursor-pointer"
              onClick={() => navigate("/auth?login")}
            >
              <button className="all-[unset] box-border relative w-fit mt-[-1.00px] ml-[-1.00px] [font-family:'Rethink_Sans',Helvetica] font-normal text-white text-base tracking-[0] leading-6 whitespace-nowrap">
                {t("how_it_works.login")}
              </button>
            </button>
            <button
              className="all-[unset] text-green box-border inline-flex items-center justify-center gap-2 px-6 py-3 relative flex-[0_0_auto] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] rounded-[100px] border border-solid border-green hover:bg-[#1b4f4a] hover:text-white cursor-pointer"
              onClick={() => navigate("/auth?signup")}
            >
              <span className="all-[unset] box-border relative w-fit [font-family:'Rethink_Sans',Helvetica] font-normal text-base tracking-[0] leading-6 whitespace-nowrap hover:bg-[#1b4f4a] hover:text-white cursor-pointer">
                {t("how_it_works.create_account")}
              </span>
            </button>
          </div>
        </div>
      </div>
      <Layout
        breakpoint="mobile"
        className="!flex-[0_0_auto] !w-full"
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
        text={t("how_it_works.layout.text")}
        text1={t("how_it_works.layout.text1")}
        text2={t("how_it_works.layout.text2")}
        text3={t("how_it_works.layout.text3")}
        text4={t("how_it_works.layout.text4")}
        text5={t("how_it_works.layout.text5")}
        text6={t("how_it_works.layout.text6")}
      />
      <div
        id="about"
        className="flex items-center gap-2.5 px-5 py-0 relative self-stretch w-full flex-[0_0_auto]"
      >
        <Header
          breakpoint="mobile"
          buttonDivClassName="!mt-[-1.00px] !text-green !ml-[-1.00px]"
          buttonStylePrimarySmallClassName="!border-white !mt-[-2.00px] !ml-[-2.00px] !flex-[0_0_auto] !bg-white"
          buttonText={t("how_it_works.header.create_deal")}
          buttonText1={t("how_it_works.header.manage_deal")}
          className="!flex-1 !px-5 !py-[25px] !grow !w-[unset]"
          crEzPartagezEtClassName="!tracking-[0] !text-4xl ![font-style:unset] !font-bold ![font-family:'Rethink_Sans',Helvetica] !leading-[43.2px]"
          text={t("how_it_works.header.text")}
          text1={t("how_it_works.header.text1")}
          type="orange"
        />
      </div>
      <BreakpointDesktopWrapper
        breakpoint="mobile"
        buttonIcon={<IconChevronRight2 className="!relative !w-6 !h-6" />}
        buttonText={t("how_it_works.breakpoint.about_us")}
        buttonText1={t("how_it_works.breakpoint.about_us")}
        className="!flex-[0_0_auto] !w-full"
        divClassName="!tracking-[0] !text-xl ![font-style:unset] !font-bold ![font-family:'Rethink_Sans',Helvetica] !leading-[28.0px]"
        headingClassName="!tracking-[0] !text-4xl ![font-style:unset] !font-bold ![font-family:'Rethink_Sans',Helvetica] !leading-[43.2px]"
        headingClassNameOverride="!tracking-[0] !text-xl ![font-style:unset] !font-bold ![font-family:'Rethink_Sans',Helvetica] !leading-[28.0px]"
        placeholderImage={placeHolderImage12}
        text={t("how_it_works.breakpoint.text")}
        text1={t("how_it_works.breakpoint.text1")}
        text2={t("how_it_works.breakpoint.text2")}
        text3={t("how_it_works.breakpoint.text3")}
        text4={t("how_it_works.breakpoint.text4")}
        text5={t("how_it_works.breakpoint.text5")}
        text6={t("how_it_works.breakpoint.text6")}
        text7={t("how_it_works.breakpoint.text7")}
        text8={t("how_it_works.breakpoint.text8")}
      />
      <div
        id="about"
        className="flex items-center gap-2.5 px-5 pt-8 relative self-stretch w-full flex-[0_0_auto]"
      >
        <Header
          breakpoint="mobile"
          buttonDivClassName="!mt-[-1.00px] !text-green !ml-[-1.00px]"
          buttonStylePrimarySmallClassName="!border-white !mt-[-2.00px] !ml-[-2.00px] !flex-[0_0_auto] !bg-white"
          buttonText1={t("how_it_works.header.manage_deal")}
          className="!flex-1 !px-5 !py-[25px] !grow !w-[unset]"
          crEzPartagezEtClassName="!tracking-[0] !text-4xl ![font-style:unset] !font-bold ![font-family:'Rethink_Sans',Helvetica] !leading-[43.2px]"
          text={t("how_it_works.header.ready_to_get_started")}
          text1={t("how_it_works.header.ready_to_get_started_description")}
          type="green"
        />
      </div>
      <Footer
        breakpoint="mobile"
        buttonText={t("how_it_works.footer.subscribe")}
        className="!flex-[0_0_auto] !w-full"
        divClassName="![white-space:unset] !w-[155px]"
        linksClassName="!h-[485px] !flex-[unset]"
        spanClassName="!tracking-[0] !text-xs !font-normal ![font-family:'Rethink_Sans',Helvetica] !leading-[18px]"
        spanClassName1="!tracking-[0] !text-xs !font-normal ![font-family:'Rethink_Sans',Helvetica] !leading-[18px]"
        spanClassNameOverride="!text-[unset]"
        text={t("how_it_works.footer.sitemap")}
        text1={t("how_it_works.footer.about")}
        text10={t("how_it_works.footer.newsletter_title")}
        text11={t("how_it_works.footer.newsletter_description")}
        text12={t("how_it_works.footer.subscribe_agreement")}
        text13={t("how_it_works.footer.agree")}
        text14={t("how_it_works.footer.copyright")}
        text2={t("how_it_works.footer.how_it_works")}
        text3={t("how_it_works.footer.bulk_order")}
        text4={t("how_it_works.footer.support_contact")}
        text5={t("how_it_works.footer.faq")}
        text6={t("how_it_works.footer.information")}
        text7={t("how_it_works.footer.legal_notice")}
        text8={t("how_it_works.footer.privacy_policy")}
        text9={t("how_it_works.footer.general_conditions")}
        textInputDivClassName="!mt-[-1.00px] !text-[#4f4f4f] !ml-[-1.00px]"
        textInputText={t("how_it_works.footer.enter_email")}
        textInputTextInputClassName="!self-stretch !border-white !rounded-[100px] !mr-[-2.00px] !mt-[-2.00px] !ml-[-2.00px] !flex-[0_0_auto] !w-full"
      />
    </div>
  );
};

export default HowItWorks;
