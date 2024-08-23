import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Textarea } from "../../components/TextareaUpdated";
import { ArrowRightCircle2 } from "../../icons/ArrowRightCircle2";
import { Envelope } from "../../icons/Envelope";
import { Phone2 } from "../../icons/Phone2";
import { Send1 } from "../../icons/Send1";
import { UserAlt5 } from "../../icons/UserAlt5";
import AppBar from "../../components/AppBar/AppBar";
import { Line63 } from "../../images";
import { ArrowLeft1 } from "../../icons/ArrowLeft1";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { submitHelpRequest } from "../../redux/app/public/publicSlice";

const PublicNeedHelp = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    privacyAccepted: false,
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { helpRequestStatus, helpRequestError, helpRequestMessage } =
    useSelector((state) => state.public);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, message, privacyAccepted } = formData;
    if (!name || !email || !phone || !message || !privacyAccepted) {
      alert(t("public_need_help.fill_all_fields"));
      return;
    }

    dispatch(submitHelpRequest(formData))
      .unwrap()
      .then(() => {
        alert(t("public_need_help.success_message"));
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
          privacyAccepted: false,
        });
        navigate("/admin-invitations-sent");
      })
      .catch((error) => {
        alert(t("public_need_help.error_message"));
        console.error("Error:", error);
      });
  };

  const handleBack = () => {
    navigate("/account");
  };

  return (
    <div className="flex flex-col w-[360px] items-start relative bg-primary-background">
      <div className="flex-col w-[360px] items-start gap-[15px] px-[35px] py-[15px] flex-[0_0_auto] flex relative">
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
              {t("public_need_help.back")}
            </div>
          </div>
        </div>
        <div className="relative self-stretch mt-[-1.00px] font-heading-6 font-[number:var(--heading-6-font-weight)] text-primary-color text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] [font-style:var(--heading-6-font-style)]">
          {t("public_need_help.title")}
        </div>
        <p className="relative self-stretch font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-primary-text-color text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] [font-style:var(--body-medium-regular-font-style)]">
          {t("public_need_help.description")}
        </p>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap">
          {t("public_need_help.form_title")}
        </div>
        <div className="flex h-[46px] items-center gap-2.5 pl-5 pr-4 py-3 relative self-stretch w-full bg-whitewhite rounded-md border border-solid border-stroke">
          <UserAlt5
            className="!relative !w-4 !h-4"
            color="#6B7280"
            fill="#111928"
          />
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={t("public_need_help.name_placeholder")}
            className="flex-1 outline-none"
          />
        </div>
        <div className="flex h-[46px] items-center gap-2.5 pl-5 pr-4 py-3 relative self-stretch w-full bg-whitewhite rounded-md border border-solid border-stroke">
          <Envelope className="!relative !w-4 !h-4" color="#6B7280" />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={t("public_need_help.email_placeholder")}
            className="flex-1 outline-none"
          />
        </div>
        <div className="flex h-[46px] items-center gap-2.5 pl-5 pr-4 py-3 relative self-stretch w-full bg-whitewhite rounded-md border border-solid border-stroke">
          <Phone2 className="!relative !w-4 !h-4" />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder={t("public_need_help.phone_placeholder")}
            className="flex-1 outline-none"
          />
        </div>
        <Textarea
          className="!self-stretch !w-full"
          helperText="off"
          label1="off"
          placeholder={t("public_need_help.message_placeholder")}
          secondLabel="off"
          state="default"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
        <div className="flex flex-wrap items-center gap-[10px_10px] relative self-stretch w-full flex-[0_0_auto]">
          <input
            type="checkbox"
            name="privacyAccepted"
            checked={formData.privacyAccepted}
            onChange={handleChange}
            className="w-5 h-5 bg-whitewhite rounded border border-solid border-stroke"
          />
          <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-color text-xs tracking-[0] leading-5 whitespace-nowrap">
            <span className="[font-family:'Inter',Helvetica] font-normal text-[#1b4f4a] text-xs tracking-[0] leading-5">
              {t("public_need_help.privacy_accept_text")}
            </span>
            <span className="underline">
              {t("public_need_help.privacy_policy")}
            </span>
          </p>
        </div>
        <div
          className="flex items-center justify-center gap-2.5 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-primary-color rounded-md"
          onClick={handleSubmit}
        >
          <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-whitewhite text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            {t("public_need_help.send_message")}
          </button>
          <Send1 className="!relative !w-5 !h-5" color="white" />
        </div>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <p className="relative self-stretch font-heading-6 font-[number:var(--heading-6-font-weight)] text-primary-color text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] [font-style:var(--heading-6-font-style)]">
          {t("public_need_help.faq_title")}
        </p>
        <div className="flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-whitewhite rounded-md shadow-shadow-1">
          <ArrowRightCircle2 className="!relative !w-5 !h-5" />
          <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            {t("public_need_help.see_faq")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PublicNeedHelp;
