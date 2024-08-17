import PropTypes from "prop-types";
import React, { useState } from "react";
import { Button } from "../RoundedButton";
import { plus14 } from "../../images";
import { useNavigate } from "react-router-dom";

export const Faq = ({
  breakpoint,
  className,
  divClassName,
  text = "Vous trouverez des réponses aux questions les plus courantes concernant notre plateforme de commande groupée de produits artisanaux.",
  buttonText = "Des intérrogations ? Contactez-nous",
  buttonStylePrimarySmallClassName,
  questionClassName,
  que1,
  que2,
  que3,
  que4,
  que5,
  ans1,
  ans2,
  ans3,
  ans4,
  ans5,
  buttonDivClassName,
  questionClassNameOverride,
}) => {
  const [openQuestion, setOpenQuestion] = useState(null);
  const navigate = useNavigate();

  const toggleQuestion = (question) => {
    if (openQuestion === question) {
      setOpenQuestion(null);
    } else {
      setOpenQuestion(question);
    }
  };

  const handleContactUs = () => {
    navigate("/help-me");
  };

  const questions = [que1, que2, que3, que4, que5];
  const answers = [ans1, ans2, ans3, ans4, ans5];

  return (
    <div
      className={`flex flex-col items-start overflow-hidden rounded-[30px] bg-blue relative ${
        breakpoint === "mobile" ? "w-[375px]" : "w-[1312px]"
      } ${breakpoint === "mobile" ? "gap-12" : "gap-20"} ${
        breakpoint === "mobile" ? "px-5 py-16" : "px-16 py-[60px]"
      } ${className}`}
    >
      <div
        className={`w-full flex self-stretch items-start flex-[0_0_auto] relative ${
          breakpoint === "mobile" ? "flex-col" : ""
        } ${breakpoint === "mobile" ? "gap-12" : "gap-20"}`}
      >
        <div
          className={`flex flex-col items-start relative ${
            breakpoint === "mobile" ? "w-full" : "w-[500px]"
          } ${breakpoint === "mobile" ? "self-stretch" : ""} ${
            breakpoint === "mobile" ? "gap-6" : "gap-8"
          } ${breakpoint === "mobile" ? "flex-[0_0_auto]" : ""}`}
        >
          <div
            className={`w-full flex self-stretch flex-col items-start flex-[0_0_auto] relative ${
              breakpoint === "mobile" ? "gap-5" : "gap-6"
            }`}
          >
            <div
              className={`self-stretch mt-[-1.00px] text-green relative ${
                breakpoint === "mobile"
                  ? "font-heading-h2-mobile"
                  : "font-heading-h2"
              } ${
                breakpoint === "mobile"
                  ? "tracking-[var(--heading-h2-mobile-letter-spacing)]"
                  : "tracking-[var(--heading-h2-letter-spacing)]"
              } ${
                breakpoint === "mobile"
                  ? "text-[length:var(--heading-h2-mobile-font-size)]"
                  : "text-[length:var(--heading-h2-font-size)]"
              } ${
                breakpoint === "mobile"
                  ? "[font-style:var(--heading-h2-mobile-font-style)]"
                  : "[font-style:var(--heading-h2-font-style)]"
              } ${
                breakpoint === "mobile"
                  ? "font-[number:var(--heading-h2-mobile-font-weight)]"
                  : "font-[number:var(--heading-h2-font-weight)]"
              } ${
                breakpoint === "mobile"
                  ? "leading-[var(--heading-h2-mobile-line-height)]"
                  : "leading-[var(--heading-h2-line-height)]"
              } ${divClassName}`}
            >
              FAQs
            </div>
            <p className="[font-family:'Rethink_Sans',Helvetica] self-stretch tracking-[0] text-lg text-green font-normal leading-[27px] relative">
              {text}
            </p>
          </div>
          <div onClick={handleContactUs}>
            <Button
              className={buttonStylePrimarySmallClassName}
              darkMode={false}
              divClassName={buttonDivClassName}
              iconPosition="no-icon"
              small={false}
              style="secondary"
              text={buttonText}
            />
          </div>
        </div>
        <div
          className={`flex flex-col items-start gap-4 relative ${
            breakpoint === "mobile" ? "w-full" : ""
          } ${breakpoint === "mobile" ? "self-stretch" : ""} ${
            breakpoint === "desktop" ? "grow" : ""
          } ${breakpoint === "mobile" ? "flex-[0_0_auto]" : "flex-1"}`}
        >
          {questions.map((question, index) => (
            <div key={index} className="w-full">
              <div
                className={`border border-solid border-green w-full flex flex-col self-stretch items-start flex-[0_0_auto] overflow-hidden transition-all duration-1000 rounded-[30px] relative ${
                  breakpoint === "mobile" ? "px-5 py-4" : "px-6 py-4"
                } ${breakpoint === "desktop" ? "justify-center" : ""}`}
                onClick={() => toggleQuestion(index)}
              >
                <div className="flex items-center !w-full cursor-pointer relative justify-between">
                  <p
                    className={`[font-family:'Rethink_Sans',Helvetica] tracking-[0] text-base flex-1 text-green font-bold leading-6 relative ${
                      breakpoint === "mobile" ? "mt-[-1.00px]" : ""
                    } max-w-[calc(100%-2rem)]`} // Ensures wrapping and space for the icon
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
                    openQuestion === index ? "max-h-96 mt-4 " : "max-h-0"
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
  );
};

Faq.propTypes = {
  breakpoint: PropTypes.oneOf(["desktop", "mobile"]),
  text: PropTypes.string,
  buttonText: PropTypes.string,
  que1: PropTypes.string.isRequired,
  que2: PropTypes.string.isRequired,
  que3: PropTypes.string.isRequired,
  que4: PropTypes.string.isRequired,
  que5: PropTypes.string.isRequired,
  ans1: PropTypes.string.isRequired,
  ans2: PropTypes.string.isRequired,
  ans3: PropTypes.string.isRequired,
  ans4: PropTypes.string.isRequired,
  ans5: PropTypes.string.isRequired,
  className: PropTypes.string,
  divClassName: PropTypes.string,
  buttonStylePrimarySmallClassName: PropTypes.string,
  buttonDivClassName: PropTypes.string,
  questionClassName: PropTypes.string,
  questionClassNameOverride: PropTypes.string,
};
