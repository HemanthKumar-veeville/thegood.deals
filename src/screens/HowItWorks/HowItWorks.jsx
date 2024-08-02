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
import { Button } from "../../components/RoundedButton";

export const HowItWorks = () => {
  const navigate = useNavigate();
  const IMAGES = [picture1, picture2, picture3, picture4];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <div className="w-screen items-center gap-[30px] pt-4 pb-px px-5 flex-[0_0_auto] bg-light-grey flex flex-col relative overflow-hidden">
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
              How it works ?
            </p>
            <p className="relative self-stretch [font-family:'Rethink_Sans',Helvetica] font-normal text-green text-lg text-center tracking-[0] leading-[27px]">
              We know that you can't wait to discover and share exceptional
              products with your loved ones. That's why we've made the process
              as simple and enjoyable as possible.
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
      <Layout
        breakpoint="mobile"
        className="!flex-[0_0_auto] !w-screen"
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
        text1="Define your offer carefully"
        text2="Start by creating an attractive ad in just a few clicks. Define the price, describe the products offered and present the craftsman behind these wonders. Make sure to include all the essential information to captivate your future buyers."
        text3="Share the enthusiasm"
        text4="Once your ad is ready, it’s time to invite your friends and family to check out the offer. Use our online platform to send invitations and share the announcement via social media or email. The more of you there are, the more advantageous rates you will be able to benefit from!"
        text5="Ensure perfect reception"
        text6="After collecting all the orders, the craftsman prepares the packages and ships them directly to your home. We ensure that delivery takes place in the best conditions so that your loved ones receive their products in perfect condition, ready to be enjoyed."
      />
      <div
        id="about"
        className="flex items-center gap-2.5 px-5 py-0 relative self-stretch w-full flex-[0_0_auto]"
      >
        <Header
          breakpoint="mobile"
          buttonDivClassName="!mt-[-1.00px] !text-green !ml-[-1.00px]"
          buttonStylePrimarySmallClassName="!border-white !mt-[-2.00px] !ml-[-2.00px] !flex-[0_0_auto] !bg-white"
          buttonText="Create a good deal"
          buttonText1="Manage my good deals"
          className="!flex-1 !px-5 !py-[25px] !grow !w-[unset]"
          crEzPartagezEtClassName="!tracking-[0] !text-4xl ![font-style:unset] !font-bold ![font-family:'Rethink_Sans',Helvetica] !leading-[43.2px]"
          text="It's that simple !"
          text1="In just a few steps, you can turn a purchase into a friendly and rewarding experience. Create an ad, invite your loved ones and enjoy the delights of local crafts together."
          type="orange"
        />
      </div>
      <BreakpointDesktopWrapper
        breakpoint="mobile"
        buttonIcon={<IconChevronRight2 className="!relative !w-6 !h-6" />}
        buttonText="About Us"
        buttonText1="About Us"
        className="!flex-[0_0_auto] !w-screen"
        divClassName="!tracking-[0] !text-xl ![font-style:unset] !font-bold ![font-family:'Rethink_Sans',Helvetica] !leading-[28.0px]"
        headingClassName="!tracking-[0] !text-4xl ![font-style:unset] !font-bold ![font-family:'Rethink_Sans',Helvetica] !leading-[43.2px]"
        headingClassNameOverride="!tracking-[0] !text-xl ![font-style:unset] !font-bold ![font-family:'Rethink_Sans',Helvetica] !leading-[28.0px]"
        placeholderImage={placeHolderImage12}
        text="Join the adventure"
        text1="Why choose The Good Deals?"
        text2=""
        text3="Quality products"
        text4="Each product is selected for its authenticity and exceptional quality."
        text5="Advantageous prices"
        text6="Thanks to bulk orders, benefit from preferential prices."
        text7="A friendly experience"
        text8="Share unique moments with your loved ones while supporting artisans in your region."
      />
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
          text="Ready to get started?"
          text1="Join our community and place your first bulk order today. If you have any questions or need assistance, our team is here to support you every step."
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
};
