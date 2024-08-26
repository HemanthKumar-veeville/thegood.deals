import React, { useState } from "react";
import { Button } from "../../components/Button/Button";
import { ArrowLeft1 } from "../../icons/ArrowLeft1";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../../redux/app/user/userSlice"; // Import the forgotPassword thunk
import { useNavigate } from "react-router-dom";

const LostPassword = () => {
  const { t } = useTranslation(); // Initialize the translation hook
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.user); // Access status and error from the state

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSendLink = () => {
    if (email) {
      dispatch(forgotPassword({ email }))
        .unwrap()
        .then(() => {
          navigate("/check-email");
          setEmail("");
        })
        .catch((err) => {
          alert(t("lostPassword.emailErrorAlert"));
        });
    } else {
      alert(t("lostPassword.enterEmailAlert"));
    }
  };

  const handleBack = () => {
    navigate("/auth?signin");
  };

  return (
    <div className="relative w-full h-screen bg-primary-background">
      <div className="flex flex-col w-[360px] items-start gap-[15px] px-[35px] py-[15px] absolute left-0">
        <div className="flex items-center gap-3 pt-0 pb-5 px-0 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-stroke">
          <div
            className="inline-flex items-center gap-2 relative flex-[0_0_auto]"
            onClick={handleBack}
          >
            <ArrowLeft1
              className="!relative !w-[18px] !h-[18px]"
              color="#637381"
            />
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-text-color text-base tracking-[0] leading-6 whitespace-nowrap">
              {t("lostPassword.back")}
            </div>
          </div>
        </div>
        <div className="relative w-fit font-heading-6 font-[number:var(--heading-6-font-weight)] text-primary-color text-[length:var(--heading-6-font-size)] text-center tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] whitespace-nowrap [font-style:var(--heading-6-font-style)]">
          {t("lostPassword.forgotPassword")}
        </div>
        <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-primary-color text-sm tracking-[0] leading-[22px]">
          {t("lostPassword.enterEmail")}
        </p>
        <div className="flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full">
          <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
            <div className="flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-whitewhite rounded-md border border-solid border-primary-color">
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder={t("lostPassword.emailPlaceholder")}
                className="w-full border-none outline-none"
              />
            </div>
          </div>
        </div>
        <div onClick={handleSendLink} className="w-full">
          <Button
            buttonText={t("lostPassword.receiveLinkButton")}
            className="!self-stretch !flex-[0_0_auto] !flex !w-full"
            color="primary"
            kind="primary"
            round="semi-round"
            state="default"
          />
        </div>
      </div>
    </div>
  );
};

export default LostPassword;
