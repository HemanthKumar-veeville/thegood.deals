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
} from "../../images";
import AppBar from "../../components/AppBar/AppBar";
import { useNavigate } from "react-router-dom";
import ScrollIntoView from "react-scroll-into-view";
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import ImageRotator from "../../components/ImageRotator/ImageRotator";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../context/LanguageContext";

const Home = () => {
  const navigate = useNavigate();
  const IMAGES = [picture1, picture2, picture3, picture4];

  const { t } = useTranslation();
  const { selectedLanguage } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col w-full items-center relative bg-light-grey mx-auto">
      <ImageRotator images={IMAGES} direction="left" />
      <ImageRotator images={IMAGES} direction="right" />
      <div className="w-full items-center gap-[30px] pt-4 pb-px px-5 flex-[0_0_auto] bg-light-grey flex flex-col relative overflow-hidden">
        <div
          id="how"
          className="ml-[-532.81px] mr-[-532.81px] relative flex-[0_0_auto]"
        >
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
        <div
          id="order"
          className="items-center gap-2 flex flex-col relative self-stretch w-full flex-[0_0_auto]"
        >
          <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
            <p className="relative self-stretch mt-[-1.00px] [font-family:'Rethink_Sans',Helvetica] font-bold text-green text-[40px] text-center tracking-[0] leading-[48.0px]">
              {t("home.title")}
            </p>
            <p className="relative self-stretch [font-family:'Rethink_Sans',Helvetica] font-normal text-green text-lg text-center tracking-[0] leading-[27px]">
              {t("home.description")}
            </p>
          </div>
          <div className="inline-flex flex-col items-center gap-4 pt-4 pb-0 px-0 relative flex-[0_0_auto]">
            <button
              className="all-[unset] box-border inline-flex items-center justify-center gap-2 px-6 py-3 relative flex-[0_0_auto] mt-[-2.00px] bg-green rounded-[100px] border border-solid border-green hover:bg-[#15423b] hover:text-[#d4d4d4] cursor-pointer"
              onClick={() => navigate("/auth?login")}
            >
              <button className="all-[unset] box-border relative w-fit mt-[-1.00px] ml-[-1.00px] [font-family:'Rethink_Sans',Helvetica] font-normal text-white text-base tracking-[0] leading-6 whitespace-nowrap">
                {t("home.login")}
              </button>
            </button>
            <button
              className="all-[unset] text-green box-border inline-flex items-center justify-center gap-2 px-6 py-3 relative flex-[0_0_auto] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] rounded-[100px] border border-solid border-green hover:bg-[#1b4f4a] hover:text-white cursor-pointer"
              onClick={() => navigate("/auth?signup")}
            >
              <span className="all-[unset] box-border relative w-fit [font-family:'Rethink_Sans',Helvetica] font-normal text-base tracking-[0] leading-6 whitespace-nowrap hover:bg-[#1b4f4a] hover:text-white cursor-pointer">
                {t("home.create_account")}
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
        text={t("home.layout.text")}
        text1={t("home.layout.text1")}
        text2={t("home.layout.text2")}
        text3={t("home.layout.text3")}
        text4={t("home.layout.text4")}
        text5={t("home.layout.text5")}
        text6={t("home.layout.text6")}
      />
      <div
        id="about"
        className="flex items-center gap-2.5 px-5 py-0 relative self-stretch w-full flex-[0_0_auto]"
      >
        <Header
          breakpoint="mobile"
          buttonDivClassName="!mt-[-1.00px] !text-green !ml-[-1.00px]"
          buttonStylePrimarySmallClassName="!border-white !mt-[-2.00px] !ml-[-2.00px] !flex-[0_0_auto] !bg-white"
          buttonText={t("home.header.create_deal")}
          buttonText1={t("home.header.manage_deal")}
          className="!flex-1 !px-5 !py-[25px] !grow !w-[unset]"
          crEzPartagezEtClassName="!tracking-[0] !text-4xl ![font-style:unset] !font-bold ![font-family:'Rethink_Sans',Helvetica] !leading-[43.2px]"
          text={t("home.header.text")}
          text1={t("home.header.text1")}
          type="orange"
        />
      </div>
      <BreakpointDesktopWrapper
        breakpoint="mobile"
        buttonIcon={<IconChevronRight2 className="!relative !w-6 !h-6" />}
        buttonText={t("home.breakpoint.how_it_works")}
        buttonText1={t("home.breakpoint.about_us")}
        className="!flex-[0_0_auto] !w-full"
        divClassName="!tracking-[0] !text-xl ![font-style:unset] !font-bold ![font-family:'Rethink_Sans',Helvetica] !leading-[28.0px]"
        headingClassName="!tracking-[0] !text-4xl ![font-style:unset] !font-bold ![font-family:'Rethink_Sans',Helvetica] !leading-[43.2px]"
        headingClassNameOverride="!tracking-[0] !text-xl ![font-style:unset] !font-bold ![font-family:'Rethink_Sans',Helvetica] !leading-[28.0px]"
        placeholderImage={placeHolderImage12}
        text={t("home.breakpoint.text")}
        text1={t("home.breakpoint.text1")}
        text2={t("home.breakpoint.text2")}
        text3={t("home.breakpoint.text3")}
        text4={t("home.breakpoint.text4")}
        text5={t("home.breakpoint.text5")}
        text6={t("home.breakpoint.text6")}
      />
      <div
        id="faq"
        className="flex w-full items-center gap-2.5 px-5 py-0 relative flex-[0_0_auto]"
      >
        <Faq
          breakpoint="mobile"
          buttonStylePrimarySmallClassName="!self-stretch !mr-[-1.00px] !ml-[-1.00px] !mb-[-1.00px] !flex-[0_0_auto] !flex !w-full"
          buttonText={t("home.faq.button_text")}
          className="!flex-1 !px-5 !py-[25px] !grow !w-[unset]"
          divClassName="!tracking-[0] !text-4xl ![font-style:unset] !font-bold ![font-family:'Rethink_Sans',Helvetica] !leading-[43.2px]"
          questionClassName="!mt-[-1.00px]"
          text={t("home.faq.text")}
          que1={t("home.faq.que1")}
          que2={t("home.faq.que2")}
          que3={t("home.faq.que3")}
          que4={t("home.faq.que4")}
          que5={t("home.faq.que5")}
          ans1={t("home.faq.ans1")}
          ans2={t("home.faq.ans2")}
          ans3={t("home.faq.ans3")}
          ans4={t("home.faq.ans4")}
          ans5={t("home.faq.ans5")}
        />
      </div>
      <Footer
        breakpoint="mobile"
        buttonText={t("home.footer.subscribe")}
        className="!flex-[0_0_auto] !w-full"
        divClassName="![white-space:unset] !w-[155px]"
        linksClassName="!h-[485px] !flex-[unset]"
        spanClassName="!tracking-[0] !text-xs !font-normal ![font-family:'Rethink_Sans',Helvetica] !leading-[18px]"
        spanClassName1="!tracking-[0] !text-xs !font-normal ![font-family:'Rethink_Sans',Helvetica] !leading-[18px]"
        spanClassNameOverride="!text-[unset]"
        text={t("home.footer.sitemap")}
        text1={t("home.footer.about")}
        text2={t("home.footer.how_it_works")}
        text3={t("home.footer.bulk_order")}
        text4={t("home.footer.support_contact")}
        text5={t("home.footer.faq")}
        text6={t("home.footer.information")}
        text7={t("home.footer.legal_notice")}
        text8={t("home.footer.privacy_policy")}
        text9={t("home.footer.general_conditions")}
        text10={t("home.footer.newsletter_title")}
        text11={t("home.footer.newsletter_description")}
        text12={t("home.footer.subscribe_agreement")}
        text13={t("home.footer.agree")}
        text14={t("home.footer.copyright")}
        textInputDivClassName="!mt-[-1.00px] !text-[#4f4f4f] !ml-[-1.00px]"
        textInputText={t("home.footer.enter_email")}
        textInputTextInputClassName="!self-stretch !border-white !rounded-[100px] !mr-[-2.00px] !mt-[-2.00px] !ml-[-2.00px] !flex-[0_0_auto] !w-full"
      />
    </div>
  );
};

export default Home;
