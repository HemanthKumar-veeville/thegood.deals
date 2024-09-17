import React, { useEffect } from "react";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { useTranslation } from "react-i18next";
import { ArrowLeft1 } from "../icons/ArrowLeft1";
import { useNavigate } from "react-router-dom";

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
          <div className="flex flex-col gap-5 self-stretch w-full items-start relative flex-[0_0_auto]">
            <div className="relative self-stretch mt-[-1.00px] font-heading-h1-mobile font-[number:var(--heading-h1-mobile-font-weight)] text-green text-[length:var(--heading-h1-mobile-font-size)] text-center tracking-[var(--heading-h1-mobile-letter-spacing)] leading-[var(--heading-h1-mobile-line-height)] [font-style:var(--heading-h1-mobile-font-style)]">
              {heading}
            </div>
            <p className="relative self-stretch [font-family:'Rethink_Sans',Helvetica] font-normal text-green text-lg tracking-[0] leading-[27px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              tempus rutrum leo non finibus. Maecenas libero eros, tempus et
              auctor et, viverra eu lacus. Curabitur auctor nec libero at porta.
              Nulla facilisi. Maecenas semper quis velit sit amet congue.
              Suspendisse potenti. Vivamus a diam arcu. Curabitur scelerisque
              arcu metus, venenatis rhoncus mi ullamcorper ac. Mauris aliquam
              viverra congue. Nulla facilisi. Duis in tempus massa. Quisque at
              molestie risus, tincidunt sodales tellus. Phasellus sit amet
              facilisis lectus.
              <br />
              Curabitur vitae nisl orci. Curabitur sit amet fringilla lectus.
              Aliquam sollicitudin euismod lorem in sollicitudin. Praesent eros
              dolor, malesuada eu placerat vel, euismod vitae enim. Aenean eget
              risus in tortor commodo posuere. Nam lorem nisi, sagittis at
              scelerisque nec, placerat quis ex. Donec scelerisque nibh in ipsum
              aliquam tempus. Praesent at mi tristique, mattis diam in, egestas
              tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Cras faucibus, mi in iaculis semper, purus erat pellentesque
              dolor, nec auctor sem neque eu libero. Duis velit libero,
              venenatis id pulvinar id, commodo ac sem. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Maecenas velit purus, varius et
              mauris quis, congue feugiat mauris. Nullam sed mollis tellus, eu
              pellentesque est. Duis scelerisque purus quis magna vestibulum
              mattis.
              <br />
              Vivamus rhoncus odio a augue scelerisque, feugiat tristique lorem
              dapibus. Integer efficitur pulvinar diam, nec bibendum odio
              dapibus eget. Proin id magna et felis laoreet lacinia eget non
              lacus. Mauris gravida tincidunt eros, quis imperdiet dui sodales
              euismod. Interdum et malesuada fames ac ante ipsum primis in
              faucibus. Sed posuere suscipit arcu vel hendrerit. Donec finibus
              nulla condimentum justo luctus accumsan. Donec non auctor eros.
              <br />
              Quisque fringilla dui et nulla commodo lacinia. Lorem ipsum dolor
              sit amet, consectetur adipiscing elit. Duis semper laoreet erat.
              In laoreet augue sed metus bibendum, at molestie dui efficitur.
              Sed sem dolor, laoreet ut egestas quis, suscipit ut risus. Ut sed
              justo vel arcu imperdiet bibendum at a lorem. Nullam leo lacus,
              ullamcorper sit amet dictum ullamcorper, ornare ut elit. Vivamus
              blandit vulputate ligula nec efficitur. Proin sed elit non metus
              aliquam mollis. Ut et dui sagittis, hendrerit dui vel, tincidunt
              massa. Curabitur nunc dolor, pellentesque at dapibus sed, tempus
              at lorem. Duis pharetra odio a ex dignissim commodo. Maecenas
              malesuada sollicitudin tristique. Phasellus at tortor vel elit
              faucibus scelerisque. Sed auctor sagittis eros, eget ornare nisi
              rutrum vitae. Morbi rutrum semper ex vel porttitor.
              <br />
              Morbi et augue lacus. Nulla libero libero, posuere non ultricies
              mattis, efficitur sagittis eros. Etiam dictum gravida turpis, at
              maximus neque hendrerit et. Aenean non lacus malesuada, tincidunt
              quam vel, gravida ex. Donec pretium porttitor efficitur. Duis
              magna urna, accumsan eu purus ac, laoreet fringilla ex. Vivamus et
              dui fringilla, mattis metus non, sodales urna.
            </p>
          </div>
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
