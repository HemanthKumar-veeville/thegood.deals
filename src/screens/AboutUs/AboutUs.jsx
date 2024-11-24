import React, { useEffect } from "react";
import AppBar from "../../components/AppBar/AppBar";
import ImageRotator from "../../components/ImageRotator/ImageRotator";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
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
import { IconChevronRight2 } from "../../icons/IconChevronRight2";
import { Button } from "../../components/RoundedButton";
import { useTranslation } from "react-i18next"; // Import for translation
import { useNavigate } from "react-router-dom";

function AboutUs() {
  const IMAGES = [picture1, picture2, picture3, picture4];
  const { t } = useTranslation(); // Hook for translation
  const headingClassName = "";
  const text1 = t("about_us.values");
  const text2 = t("about_us.values_description");
  const headingClassNameOverride = "";
  const text3 = t("about_us.shared_experience");
  const text4 = t("about_us.shared_experience_description");
  const divClassName = "";
  const text5 = t("about_us.local_support");
  const text6 = t("about_us.local_support_description");
  const buttonText = t("about_us.how_it_works");
  const buttonText1 = t("about_us.about_us");
  const buttonIcon = <IconChevronRight2 className="!relative !w-6 !h-6" />;
  const placeholderImage = placeHolderImage14;
  const navigate = useNavigate();

  const values = [
    {
      heading: t("about_us.authenticity"),
      definition: t("about_us.authenticity_description"),
    },
    {
      heading: t("about_us.community"),
      definition: t("about_us.community_description"),
    },
    {
      heading: t("about_us.local_support_heading"),
      definition: t("about_us.local_support_heading_description"),
    },
  ];

  const reason = [
    {
      heading: t("about_us.unique_products"),
      definition: t("about_us.unique_products_description"),
    },
    {
      heading: t("about_us.advantageous_prices"),
      definition: t("about_us.advantageous_prices_description"),
    },
    {
      heading: t("about_us.enriching_experience"),
      definition: t("about_us.enriching_experience_description"),
    },
  ];

  return (
    <div className="flex flex-col w-full items-center relative bg-light-grey mx-auto">
      <ImageRotator images={IMAGES} direction="left" />
      <div className="w-full items-center gap-[30px] pt-2 pb-px px-5 flex-[0_0_auto] bg-light-grey flex flex-col relative overflow-hidden">
        <div
          id="order"
          className="items-center gap-2 flex flex-col relative self-stretch w-full flex-[0_0_auto]"
        >
          <div className="flex flex-col items-start gap-5 relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              <p className="mx-auto w-[300px] relative self-stretch mt-[-1.00px] [font-family:'Rethink_Sans',Helvetica] font-bold text-green text-[40px] text-center tracking-[0] leading-[48.0px]">
                {t("about_us.about_good_deals_p1")}
              </p>
              <p className="mx-auto w-[300px] relative self-stretch mt-[-1.00px] [font-family:'Rethink_Sans',Helvetica] font-bold text-[#EA7035] text-[40px] text-center tracking-[0] leading-[48.0px]">
                {t("about_us.about_good_deals_p2")}
              </p>
            </div>
            <p className="relative self-stretch [font-family:'Rethink_Sans',Helvetica] font-normal text-green text-lg text-center tracking-[0] leading-[27px]">
              {t("about_us.welcome_description")}
            </p>
          </div>
          <div className="inline-flex flex-col items-center gap-4 pt-4 pb-0 px-0 relative flex-[0_0_auto]">
            <button
              className="all-[unset] box-border inline-flex items-center justify-center gap-2 px-6 py-3 relative flex-[0_0_auto] mt-[-2.00px] bg-green rounded-[100px] border border-solid border-green hover:bg-[#15423b] hover:text-[#d4d4d4] cursor-pointer"
              onClick={() => navigate("/auth?login")}
            >
              <button className="all-[unset] box-border relative w-fit mt-[-1.00px] ml-[-1.00px] [font-family:'Rethink_Sans',Helvetica] font-normal text-white text-base tracking-[0] leading-6 whitespace-nowrap">
                {t("about_us.login")}
              </button>
            </button>
            <button
              className="all-[unset] text-green box-border inline-flex items-center justify-center gap-2 px-6 py-3 relative flex-[0_0_auto] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] rounded-[100px] border border-solid border-green hover:bg-[#1b4f4a] hover:text-white cursor-pointer"
              onClick={() => navigate("/auth?signup")}
            >
              <span className="all-[unset] box-border relative w-fit [font-family:'Rethink_Sans',Helvetica] font-normal text-base tracking-[0] leading-6 whitespace-nowrap hover:bg-[#1b4f4a] hover:text-white cursor-pointer">
                {t("about_us.create_account")}
              </span>
            </button>
          </div>
        </div>
      </div>
      <div
        id="about"
        className="flex items-center gap-2.5 px-5 pt-8 relative self-stretch w-full flex-[0_0_auto]"
      >
        <Header
          breakpoint="mobile"
          buttonDivClassName="!mt-[-1.00px] !text-green !ml-[-1.00px]"
          buttonStylePrimarySmallClassName="!border-white !mt-[-2.00px] !ml-[-2.00px] !flex-[0_0_auto] !bg-white"
          buttonText={t("about_us.create_deal")}
          buttonText1={t("about_us.manage_deal")}
          className="!flex-1 !px-5 !py-[25px] !grow !w-[unset]"
          crEzPartagezEtClassName="!tracking-[0] !text-4xl ![font-style:unset] !font-bold ![font-family:'Rethink_Sans',Helvetica] !leading-[43.2px]"
          text={t("about_us.our_mission")}
          text1={t("about_us.mission_description")}
          type="orange"
        />
      </div>
      <div
        id="contact"
        className={`flex flex-col bg-light-grey relative items-start gap-12 px-5 pt-10 !flex-[0_0_auto] !w-full`}
      >
        <div
          className={`w-full flex self-stretch flex-[0_0_auto] relative flex-col items-start gap-12`}
        >
          <>
            <div className="gap-2 flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              <div className="gap-6 flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                  <div className="gap-5 flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                    <p
                      className={`text-[length:var(--heading-h2-mobile-font-size)] leading-[var(--heading-h2-mobile-line-height)] relative self-stretch mt-[-1.00px] font-heading-h2-mobile font-[number:var(--heading-h2-mobile-font-weight)] text-green tracking-[var(--heading-h2-mobile-letter-spacing)] [font-style:var(--heading-h2-mobile-font-style)] ${headingClassName}`}
                    >
                      {text1}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-6 px-0 py-2 relative self-stretch w-full flex-[0_0_auto]">
                  {values?.map((value) => (
                    <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                      <div
                        className={`text-[length:var(--heading-h6-font-size)] leading-[var(--heading-h6-line-height)] relative self-stretch mt-[-1.00px] font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-green tracking-[var(--heading-h6-letter-spacing)] [font-style:var(--heading-h6-font-style)] ${headingClassNameOverride}`}
                      >
                        {value?.heading}
                      </div>
                      <p className="relative self-stretch [font-family:'Rethink_Sans',Helvetica] font-normal text-green text-base tracking-[0] leading-6">
                        {value?.definition}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="inline-flex flex-col items-start justify-center gap-6 pt-4 pb-0 px-0 relative flex-[0_0_auto]"
                onClick={() => navigate("/how-it-works")}
              >
                <Button
                  className="!mr-[-1.00px] !mt-[-1.00px] !ml-[-1.00px] !flex-[0_0_auto]"
                  darkMode={false}
                  iconPosition="no-icon"
                  small={false}
                  style="secondary"
                  text={buttonText}
                />
              </div>
            </div>
            <div className="w-full">
              <img
                className="relative self-stretch w-full h-[348px] object-fit"
                alt="Placeholder image"
                src={placeholderImage}
              />
            </div>
            <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
              <div className="gap-5 flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                <p
                  className={`w-64 text-[length:var(--heading-h2-mobile-font-size)] leading-[var(--heading-h2-mobile-line-height)] relative self-stretch mt-[-1.00px] font-heading-h2-mobile font-[number:var(--heading-h2-mobile-font-weight)] text-green tracking-[var(--heading-h2-mobile-letter-spacing)] [font-style:var(--heading-h2-mobile-font-style)] ${headingClassName}`}
                >
                  {t("about_us.why_choose_us")}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-start gap-6 px-0 py-2 relative self-stretch w-full flex-[0_0_auto]">
              {reason?.map((value) => (
                <div className="flex flex-col items-start gap-3 relative self-stretch w-full flex-[0_0_auto]">
                  <div
                    className={`text-[length:var(--heading-h6-font-size)] leading-[var(--heading-h6-line-height)] relative self-stretch mt-[-1.00px] font-heading-h6 font-[number:var(--heading-h6-font-weight)] text-green tracking-[var(--heading-h6-letter-spacing)] [font-style:var(--heading-h6-font-style)] ${headingClassNameOverride}`}
                  >
                    {value?.heading}
                  </div>
                  <p className="relative self-stretch [font-family:'Rethink_Sans',Helvetica] font-normal text-green text-base tracking-[0] leading-6">
                    {value?.definition}
                  </p>
                </div>
              ))}
            </div>
          </>
        </div>
      </div>
      <div
        id="about"
        className="flex items-center gap-2.5 px-5 pt-8 relative self-stretch w-full flex-[0_0_auto]"
      >
        <Header
          breakpoint="mobile"
          buttonDivClassName="!mt-[-1.00px] !text-green !ml-[-1.00px]"
          buttonStylePrimarySmallClassName="!border-white !mt-[-2.00px] !ml-[-2.00px] !flex-[0_0_auto] !bg-white"
          buttonText={t("about_us.create_deal")}
          buttonText1={t("about_us.manage_deal")}
          className="!flex-1 !px-5 !py-[25px] !grow !w-[unset]"
          crEzPartagezEtClassName="!tracking-[0] !text-4xl ![font-style:unset] !font-bold ![font-family:'Rethink_Sans',Helvetica] !leading-[43.2px]"
          text={t("about_us.join_adventure")}
          text1={t("about_us.join_adventure_description")}
          type="green"
        />
      </div>
      <Footer
        breakpoint="mobile"
        buttonText={t("about_us.subscribe")}
        className="!flex-[0_0_auto] !w-full"
        divClassName="![white-space:unset] !w-[155px]"
        linksClassName="!h-[485px] !flex-[unset]"
        spanClassName="!tracking-[0] !text-xs !font-normal ![font-family:'Rethink_Sans',Helvetica] !leading-[18px]"
        spanClassName1="!tracking-[0] !text-xs !font-normal ![font-family:'Rethink_Sans',Helvetica] !leading-[18px]"
        spanClassNameOverride="!text-[unset]"
        text={t("about_us.sitemap")}
        text1={t("about_us.about")}
        text10={t("about_us.newsletter_title")}
        text11={t("about_us.newsletter_description")}
        text12={t("about_us.subscribe_agreement")}
        text13={t("about_us.agree")}
        text14={t("about_us.copyright")}
        text2={t("about_us.how_it_works")}
        text3={t("about_us.bulk_order")}
        text4={t("about_us.support_contact")}
        text5={t("about_us.faq")}
        text6={t("about_us.information")}
        text7={t("about_us.legal_notice")}
        text8={t("about_us.privacy_policy")}
        text9={t("about_us.general_conditions")}
        textInputDivClassName="!mt-[-1.00px] !text-[#4f4f4f] !ml-[-1.00px]"
        textInputText={t("about_us.enter_email")}
        textInputTextInputClassName="!self-stretch !border-white !rounded-[100px] !mr-[-2.00px] !mt-[-2.00px] !ml-[-2.00px] !flex-[0_0_auto] !w-full"
      />
    </div>
  );
}

export default AboutUs;
