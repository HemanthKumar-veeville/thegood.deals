import React, { useEffect } from "react";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useTranslation } from "react-i18next";
import { ArrowLeft1 } from "../icons/ArrowLeft1";
import { useNavigate } from "react-router-dom";
import { Label } from "../components/LegalNotice";
import { GeneralConditions } from "../components/GeneralConditions";

export const Legal = ({ heading }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBack = () => {
    navigate("/auth?signup");
  };

  return (
    <div className="flex flex-col w-[360px] items-center relative bg-light-grey">
      <div className="items-center gap-[30px] pt-4 pb-12 px-5 flex-[0_0_auto] flex flex-col w-[360px] relative bg-light-grey">
        <div className="items-center gap-4 flex flex-col relative self-stretch w-full flex-[0_0_auto]">
          <div
            className="flex w-[290px] items-center gap-3 pt-0 pb-5 px-0 relative flex-[0_0_auto] border-b [border-bottom-style:solid] border-stroke cursor-pointer"
            onClick={handleBack}
          >
            <ArrowLeft1
              className="!relative !w-[18px] !h-[18px]"
              color="#637381"
            />
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#637381] text-base tracking-[0] leading-6 whitespace-nowrap">
              Back
            </div>
          </div>

          <GeneralConditions />
        </div>
      </div>
      <div
        id="legal"
        className="flex items-center gap-2.5 px-5 py-0 relative self-stretch w-full flex-[0_0_auto]"
      >
        <Header
          breakpoint="mobile"
          buttonDivClassName="!mt-[-1.00px] !text-green !ml-[-1.00px]"
          buttonStylePrimarySmallClassName="!border-white !mt-[-2.00px] !ml-[-2.00px] !flex-[0_0_auto] !bg-white"
          buttonText={t("contact_us.create_good_deal")}
          buttonText1={t("contact_us.manage_good_deal")}
          className="!flex-1 !px-5 !py-[25px] !grow !w-[unset]"
          crEzPartagezEtClassName="!tracking-[0] !text-4xl ![font-style:unset] !font-bold ![font-family:'Rethink_Sans',Helvetica] !leading-[43.2px]"
          text={t("contact_us.other_questions")}
          text1={t("contact_us.other_questions_description")}
          type="green"
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
        text2="How does it work?"
        text3="Bulk order"
        text4="Support / Contact"
        text5="FAQs"
        text6="Information"
        text7="Legal notices"
        text8="Privacy Policy"
        text9="General Conditions of Sales and Use"
        textInputDivClassName="!mt-[-1.00px] !text-[#4f4f4f] !ml-[-1.00px]"
        textInputText="Enter your email"
        textInputTextInputClassName="!self-stretch !border-white !rounded-[100px] !mr-[-2.00px] !mt-[-2.00px] !ml-[-2.00px] !flex-[0_0_auto] !w-full"
      />
    </div>
  );
};
