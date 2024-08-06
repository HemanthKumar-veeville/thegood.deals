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

function ContactUs() {
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const FAQS = [
    {
      ques: "How does bulk ordering work on your platform?",
      ans: "Our platform allows you to create ads for artisanal products, invite loved ones to participate, and easily manage orders and deliveries.",
    },
    {
      ques: "Who are the partner artisans?",
      ans: "We collaborate with passionate local artisans who are rigorously selected for the quality and authenticity of their products.. Each of them has a unique story to tell through their creations.",
    },
    {
      ques: "How do I invite my loved ones to join a group order?",
      ans: "Once your ad is created, you can invite your friends and family by sharing a link via email or on social media. Our platform makes this process easy in just a few clicks.",
    },
    {
      ques: "How is the price of products calculated?",
      ans: "The price of the products is set by the artisans and may vary depending on the size of the bulk order. The higher the number of participants, the more advantageous the price per product can be.",
    },
    {
      ques: "How does delivery work?",
      ans: "The craftsmen prepare and ship the packages directly to the address of your choice. We ensure that delivery goes smoothly so that the products arrive in perfect condition.",
    },
    {
      ques: "What is the delivery delay ?",
      ans: "The delivery time depends on each craftsman and the location of your address. Generally, you can expect to receive your products within 5-7 business days after the bulk order is placed.",
    },
    {
      ques: "Can I track my order?",
      ans: "Yes, once your order has been shipped, you will receive a tracking number to follow the delivery progress in real time.",
    },
    {
      ques: "What happens if I have a problem with my order?",
      ans: "If you have a problem with your order, our customer service team is on hand to help you resolve it quickly. Contact us via our contact form or by phone.",
    },
    {
      ques: "Is there a minimum amount for bulk orders?",
      ans: "Minimum amount for bulk orders may vary depending on products and artisans. Details are specified in each ad.",
    },
    {
      ques: "What payment methods do you accept?",
      ans: "We accept major credit cards (Visa, MasterCard, American Express). All payments are secure.",
    },
    {
      ques: "How can I cancel or modify my order?",
      ans: "To cancel or change an order, please contact us as soon as possible. If the order has not yet been processed, we will do our best to accommodate your request.",
    },
    {
      ques: "Can I return products?",
      ans: "Given the handmade nature of our products, returns are generally only accepted in the event of defective or damaged product. Please see our returns policy for full details.",
    },
    {
      ques: "How can I become an artisan partner?",
      ans: "If you are a tradesman interested in our platform, we would be delighted to speak with you. Contact us via our contact form mentioning your interest in becoming a partner.",
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
      <AppBar />
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
              FAQs
            </p>
            <p className="relative self-stretch [font-family:'Rethink_Sans',Helvetica] font-normal text-green text-lg text-center tracking-[0] leading-[27px]">
              You will find answers to the most common questions regarding our
              bulk ordering platform for artisanal products.
            </p>
            <p className="relative self-stretch [font-family:'Rethink_Sans',Helvetica] font-normal text-green text-lg text-center tracking-[0] leading-[27px]">
              <b>Any questions?</b> Contact us, we are here . to help you !
            </p>
          </div>
          <div className="inline-flex flex-col items-center gap-4 pt-4 pb-0 px-0 relative flex-[0_0_auto]">
            <button
              className="all-[unset] box-border inline-flex items-center justify-center gap-2 px-6 py-3 relative flex-[0_0_auto] mt-[-2.00px] bg-green rounded-[100px] border border-solid border-green hover:bg-[#15423b] hover:text-[#d4d4d4] cursor-pointer"
              onClick={() => navigate("/auth?login")}
            >
              <button className="all-[unset] box-border relative w-fit mt-[-1.00px] ml-[-1.00px] [font-family:'Rethink_Sans',Helvetica] font-normal text-white text-base tracking-[0] leading-6 whitespace-nowrap">
                Contact us
              </button>
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
          buttonText="Create a good deal"
          buttonText1="Manage my good deals"
          className="!flex-1 !px-5 !py-[25px] !grow !w-[unset]"
          crEzPartagezEtClassName="!tracking-[0] !text-4xl ![font-style:unset] !font-bold ![font-family:'Rethink_Sans',Helvetica] !leading-[43.2px]"
          text="Other questions ?"
          text1="If you have any further questions or need more information, please do not hesitate to contact us. We are here to accompany you on this wonderful adventure of discovery and sharing!"
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

export default ContactUs;
