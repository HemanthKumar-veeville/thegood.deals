import React, { useEffect } from "react";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useTranslation } from "react-i18next";
import { ArrowLeft1 } from "../icons/ArrowLeft1";
import { useNavigate } from "react-router-dom";
import { GeneralConditions } from "../components/GeneralConditions";

export const GeneralConditionsScreen = ({ heading }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col w-full items-center relative bg-light-grey">
      <div className="items-center gap-[30px] pt-4 pb-12 px-5 flex-[0_0_auto] flex flex-col w-[360px] relative bg-light-grey">
        <div className="items-center gap-4 flex flex-col relative self-stretch w-full flex-[0_0_auto]">
          <div
            className="flex w-full items-center gap-3 pt-0 pb-5 px-0 relative flex-[0_0_auto] border-b [border-bottom-style:solid] border-stroke cursor-pointer"
            onClick={handleBack}
          >
            <ArrowLeft1
              className="!relative !w-[18px] !h-[18px]"
              color="#637381"
            />
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#637381] text-base tracking-[0] leading-6 whitespace-nowrap">
              {t("general_conditions.back")}
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
          buttonText={t("general_conditions.contact_us.create_good_deal")}
          buttonText1={t("general_conditions.contact_us.manage_good_deal")}
          className="!flex-1 !px-5 !py-[25px] !grow !w-[unset]"
          crEzPartagezEtClassName="!tracking-[0] !text-4xl ![font-style:unset] !font-bold ![font-family:'Rethink_Sans',Helvetica] !leading-[43.2px]"
          text={t("general_conditions.contact_us.other_questions")}
          text1={t("general_conditions.contact_us.other_questions_description")}
          type="green"
        />
      </div>
      <Footer
        breakpoint="mobile"
        buttonText={t("general_conditions.footer.subscribe")}
        className="!flex-[0_0_auto]"
        divClassName="![white-space:unset] !w-[155px]"
        linksClassName="!h-[485px] !flex-[unset]"
        spanClassName="!tracking-[0] !text-xs !font-normal ![font-family:'Rethink_Sans',Helvetica] !leading-[18px]"
        spanClassName1="!tracking-[0] !text-xs !font-normal ![font-family:'Rethink_Sans',Helvetica] !leading-[18px]"
        spanClassNameOverride="!text-[unset]"
        text={t("general_conditions.footer.sitemap")}
        text1={t("general_conditions.footer.about")}
        text10={t("general_conditions.footer.newsletter_commitment")}
        text11={t("general_conditions.footer.stay_informed")}
        text12={t("general_conditions.footer.consent_agreement")}
        text13={t("general_conditions.footer.receive_updates")}
        text14={t("general_conditions.footer.copyright")}
        text2={t("general_conditions.footer.how_it_works")}
        text3={t("general_conditions.footer.bulk_order")}
        text4={t("general_conditions.footer.support_contact")}
        text5={t("general_conditions.footer.faqs")}
        text6={t("general_conditions.footer.information")}
        text7={t("general_conditions.footer.legal_notices")}
        text8={t("general_conditions.footer.privacy_policy")}
        text9={t("general_conditions.footer.general_conditions")}
        textInputDivClassName="!mt-[-1.00px] !text-[#4f4f4f] !ml-[-1.00px]"
        textInputText={t("general_conditions.footer.enter_email")}
        textInputTextInputClassName="!self-stretch !border-white !rounded-[100px] !mr-[-2.00px] !mt-[-2.00px] !ml-[-2.00px] !flex-[0_0_auto] !w-full"
      />
    </div>
  );
};
