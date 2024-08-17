import React, { useEffect, useState } from "react";
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
import { plus14 } from "../../images";
import { useTranslation } from "react-i18next";

function ContactUs() {
  const { t } = useTranslation();
  const IMAGES = [picture1, picture2, picture3, picture4];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const FAQS = [
    {
      ques: t("contact_us.faq_1.question"),
      ans: t("contact_us.faq_1.answer"),
    },
    {
      ques: t("contact_us.faq_2.question"),
      ans: t("contact_us.faq_2.answer"),
    },
    {
      ques: t("contact_us.faq_3.question"),
      ans: t("contact_us.faq_3.answer"),
    },
    {
      ques: t("contact_us.faq_4.question"),
      ans: t("contact_us.faq_4.answer"),
    },
    {
      ques: t("contact_us.faq_5.question"),
      ans: t("contact_us.faq_5.answer"),
    },
    {
      ques: t("contact_us.faq_6.question"),
      ans: t("contact_us.faq_6.answer"),
    },
    {
      ques: t("contact_us.faq_7.question"),
      ans: t("contact_us.faq_7.answer"),
    },
    {
      ques: t("contact_us.faq_8.question"),
      ans: t("contact_us.faq_8.answer"),
    },
    {
      ques: t("contact_us.faq_9.question"),
      ans: t("contact_us.faq_9.answer"),
    },
    {
      ques: t("contact_us.faq_10.question"),
      ans: t("contact_us.faq_10.answer"),
    },
    {
      ques: t("contact_us.faq_11.question"),
      ans: t("contact_us.faq_11.answer"),
    },
    {
      ques: t("contact_us.faq_12.question"),
      ans: t("contact_us.faq_12.answer"),
    },
    {
      ques: t("contact_us.faq_13.question"),
      ans: t("contact_us.faq_13.answer"),
    },
  ];

  const [openQuestion, setOpenQuestion] = useState(null);

  const toggleQuestion = (question) => {
    if (openQuestion === question) {
      setOpenQuestion(null);
    } else {
      setOpenQuestion(question);
    }
  };

  const questions = FAQS?.map((faq) => faq.ques);
  const answers = FAQS?.map((faq) => faq.ans);

  return (
    <div className="flex flex-col w-screen items-center relative bg-light-grey mx-auto">
      <div className="w-screen items-center gap-[30px] pt-2 pb-px px-5 flex-[0_0_auto] bg-light-grey flex flex-col relative overflow-hidden">
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
              {t("contact_us.title")}
            </p>
            <p className="relative self-stretch [font-family:'Rethink_Sans',Helvetica] font-normal text-green text-lg text-center tracking-[0] leading-[27px]">
              {t("contact_us.description")}
            </p>
            <p className="relative self-stretch [font-family:'Rethink_Sans',Helvetica] font-normal text-green text-lg text-center tracking-[0] leading-[27px]">
              <b>{t("contact_us.any_questions")}</b>{" "}
              {t("contact_us.contact_us")}
            </p>
          </div>
          <div className="inline-flex flex-col items-center gap-4 pt-4 pb-0 px-0 relative flex-[0_0_auto]">
            <button
              className="all-[unset] box-border inline-flex items-center justify-center gap-2 px-6 py-3 relative flex-[0_0_auto] mt-[-2.00px] bg-green rounded-[100px] border border-solid border-green hover:bg-[#15423b] hover:text-[#d4d4d4] cursor-pointer"
              onClick={() => navigate("/auth?login")}
            >
              <span className="all-[unset] box-border relative w-fit mt-[-1.00px] ml-[-1.00px] [font-family:'Rethink_Sans',Helvetica] font-normal text-white text-base tracking-[0] leading-6 whitespace-nowrap">
                {t("contact_us.contact_us_button")}
              </span>
            </button>
          </div>
        </div>
      </div>
      <div
        id="contact"
        className={`flex flex-col bg-light-grey relative items-start gap-12 px-5 py-16 !flex-[0_0_auto] !w-screen`}
      >
        <div
          className={`w-full flex self-stretch flex-[0_0_auto] relative flex-col items-start gap-12`}
        >
          <>
            <div className="gap-2 flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
              <div className="gap-6 flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                <div className="flex flex-col items-start gap-6 px-0 py-2 relative self-stretch w-full flex-[0_0_auto]">
                  {questions.map((question, index) => (
                    <div key={index} className="w-full">
                      <div
                        className={`border border-solid border-green w-full flex flex-col self-stretch items-start flex-[0_0_auto] overflow-hidden transition-all duration-1000 rounded-[30px] relative px-5 py-4`}
                        onClick={() => toggleQuestion(index)}
                      >
                        <div className="flex items-center !w-full cursor-pointer relative justify-between">
                          <p
                            className={`[font-family:'Rethink_Sans',Helvetica] tracking-[0] text-base flex-1 text-green font-bold leading-6 relative mt-[-1.00px] max-w-[calc(100%-2rem)]`} // Ensures wrapping and space for the icon
                          >
                            {question}
                          </p>
                          <img
                            className={`w-8 h-8 absolute right-0 transition-transform duration-500 ${
                              openQuestion === index ? "rotate-45" : ""
                            }`}
                            alt="Plus"
                            src={plus14}
                          />
                        </div>
                        <div
                          className={`text-green w-full break-words transition-max-height duration-1000 overflow-hidden ${
                            openQuestion === index
                              ? "max-h-96 mt-4 "
                              : "max-h-0"
                          }`}
                        >
                          <p>{answers[index]}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
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
        buttonText={t("footer.subscribe")}
        className="!flex-[0_0_auto] !w-screen"
        divClassName="![white-space:unset] !w-[155px]"
        linksClassName="!h-[485px] !flex-[unset]"
        spanClassName="!tracking-[0] !text-xs !font-normal ![font-family:'Rethink_Sans',Helvetica] !leading-[18px]"
        spanClassName1="!tracking-[0] !text-xs !font-normal ![font-family:'Rethink_Sans',Helvetica] !leading-[18px]"
        spanClassNameOverride="!text-[unset]"
        text={t("footer.sitemap")}
        text1={t("footer.about")}
        text10={t("footer.committed_newsletter")}
        text11={t("footer.newsletter_info")}
        text12={t("footer.subscribe_agreement")}
        text13={t("footer.consent")}
        text14={t("footer.copyright")}
        text2={t("footer.how_it_works")}
        text3={t("footer.bulk_order")}
        text4={t("footer.support_contact")}
        text5={t("footer.faqs")}
        text6={t("footer.information")}
        text7={t("footer.legal_notice")}
        text8={t("footer.privacy_policy")}
        text9={t("footer.general_conditions")}
        textInputDivClassName="!mt-[-1.00px] !text-[#4f4f4f] !ml-[-1.00px]"
        textInputText={t("footer.enter_email")}
        textInputTextInputClassName="!self-stretch !border-white !rounded-[100px] !mr-[-2.00px] !mt-[-2.00px] !ml-[-2.00px] !flex-[0_0_auto] !w-full"
      />
    </div>
  );
}

export default ContactUs;
