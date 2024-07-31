import React from "react";
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

function AboutUs() {
  const IMAGES = [picture1, picture2, picture3, picture4];
  const headingClassName = "";
  const text1 = "Our values";
  const text2 =
    "En rejoignant notre communauté de commande groupée, bénéficiez de prix avantageux tout en partageant le plaisir de goûter au meilleur de l&#39;artisanat local. Faites de chaque achat une expérience unique, soutenant les artisans et partageant des moments avec vos proches.";
  const headingClassNameOverride = "";
  const text3 = "Expérience de<br/>consommation partagée";
  const text4 =
    "Une expérience sociale enrichissante, renforçant les liens avec famille et amis tout en découvrant ensemble des produits exceptionnels.";
  const divClassName = "";
  const text5 = "Soutien et valorisation<br/>des artisans locaux";
  const text6 =
    "En privilégiant les produits issus de l&#39;artisanat local, vous contribuez au maintien et à la valorisation des savoir-faire uniques de nos régions.";
  const buttonText = "How it works ?";
  const buttonText1 = "À propos de nous";
  const buttonIcon = <IconChevronRight2 className="!relative !w-6 !h-6" />;
  const placeholderImage = placeHolderImage14;
  const values = [
    {
      heading: "Authenticity",
      definition:
        "Products that tell a story, that of our terroirs and their passionate artisans.",
    },
    {
      heading: "Community",
      definition:
        "We believe in the power of sharing and friendly experiences. Each bulk order is an opportunity to strengthen ties with your friends and family.",
    },
    {
      heading: "Local support",
      definition:
        "You participate in promoting and maintaining the unique know-how of our regions. Each purchase is a gesture of support for our artisans.",
    },
  ];

  const reason = [
    {
      heading: "Unique products",
      definition:
        "Each artisan is selected for the quality and authenticity of their products. You will discover flavors and creations that you will not find anywhere else.",
    },
    {
      heading: "Advantageous prices",
      definition:
        "Thanks to bulk orders, you benefit from preferential rates. The more the merrier!",
    },
    {
      heading: "An enriching experience",
      definition:
        "Ordering on The Good Deals is much more than a simple purchase. This is an opportunity to share precious moments with your loved ones while supporting a local and sustainable economy.",
    },
  ];
  return (
    <div className="flex flex-col w-screen items-center relative bg-light-grey mx-auto">
      <AppBar />
      <ImageRotator images={IMAGES} direction="left" />
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
              About The Good Deals
            </p>
            <p className="relative self-stretch [font-family:'Rethink_Sans',Helvetica] font-normal text-green text-lg text-center tracking-[0] leading-[27px]">
              We are delighted to welcome you to our community dedicated to
              discovering exceptional products at affordable prices.. The Good
              Deals is above all a human and gourmet adventure, where each group
              order becomes a celebration of local flavors and know-how.
            </p>
          </div>
          <div className="inline-flex flex-col items-center gap-4 pt-4 pb-0 px-0 relative flex-[0_0_auto]">
            <button
              className="all-[unset] box-border inline-flex items-center justify-center gap-2 px-6 py-3 relative flex-[0_0_auto] mt-[-2.00px] bg-green rounded-[100px] border border-solid border-green hover:bg-[#15423b] hover:text-[#d4d4d4] cursor-pointer"
              onClick={() => navigate("/auth?login")}
            >
              <button className="all-[unset] box-border relative w-fit mt-[-1.00px] ml-[-1.00px] [font-family:'Rethink_Sans',Helvetica] font-normal text-white text-base tracking-[0] leading-6 whitespace-nowrap">
                To log in
              </button>
            </button>
            <button
              className="all-[unset] text-green box-border inline-flex items-center justify-center gap-2 px-6 py-3 relative flex-[0_0_auto] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] rounded-[100px] border border-solid border-green hover:bg-[#1b4f4a] hover:text-white cursor-pointer"
              onClick={() => navigate("/auth?signup")}
            >
              <span className="all-[unset] box-border relative w-fit [font-family:'Rethink_Sans',Helvetica] font-normal text-base tracking-[0] leading-6 whitespace-nowrap hover:bg-[#1b4f4a] hover:text-white cursor-pointer">
                Create an account
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
          buttonText="Create a good deal"
          buttonText1="Manage my good deals"
          className="!flex-1 !px-5 !py-[25px] !grow !w-[unset]"
          crEzPartagezEtClassName="!tracking-[0] !text-4xl ![font-style:unset] !font-bold ![font-family:'Rethink_Sans',Helvetica] !leading-[43.2px]"
          text="Our mission"
          text1="Allow you to benefit from the best artisans in our regions and allow you to share their treasures with your loved ones. By joining forces, we make exceptional products accessible to all, while supporting local talent."
          type="orange"
        />
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
              <div className="inline-flex flex-col items-start justify-center gap-6 pt-4 pb-0 px-0 relative flex-[0_0_auto]">
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
                  className={`text-[length:var(--heading-h2-mobile-font-size)] leading-[var(--heading-h2-mobile-line-height)] relative self-stretch mt-[-1.00px] font-heading-h2-mobile font-[number:var(--heading-h2-mobile-font-weight)] text-green tracking-[var(--heading-h2-mobile-letter-spacing)] [font-style:var(--heading-h2-mobile-font-style)] ${headingClassName}`}
                >
                  Why choose us ?
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
          buttonText="Create a good deal"
          buttonText1="Manage my good deals"
          className="!flex-1 !px-5 !py-[25px] !grow !w-[unset]"
          crEzPartagezEtClassName="!tracking-[0] !text-4xl ![font-style:unset] !font-bold ![font-family:'Rethink_Sans',Helvetica] !leading-[43.2px]"
          text="Join us on this great adventure!"
          text1="Creating an order is as simple as it is user-friendly. In just a few clicks, launch an ad, invite your friends and enjoy the delights of local crafts together."
          type="green"
        />
      </div>
      <Footer
        breakpoint="mobile"
        buttonText="Subscribe"
        className="!flex-[0_0_auto] !w-screen"
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
}

export default AboutUs;
