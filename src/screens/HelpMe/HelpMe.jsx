import React, { useState } from "react";
import { Textarea } from "../../components/TextareaUpdated";
import { ArrowRightCircle2 } from "../../icons/ArrowRightCircle2";
import { Envelope } from "../../icons/Envelope";
import { Phone2 } from "../../icons/Phone2";
import { Send2 } from "../../icons/Send2";
import { UserAlt5 } from "../../icons/UserAlt5";
import { VerticalLine } from "../../icons/VerticalLine";
import AppBar from "../../components/AppBar/AppBar";
import { Line63 } from "../../images";

export const PublicNeedHelp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    privacyAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, message, privacyAccepted } = formData;
    if (!name || !email || !phone || !message || !privacyAccepted) {
      alert(
        "Please fill out all fields and accept the privacy policy before submitting."
      );
      return;
    }
    console.log("Form Data Submitted:", formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
      privacyAccepted: false,
    });
    // Add your form submission logic here (e.g., send data to API)
  };

  return (
    <div className="flex flex-col w-[360px] items-start relative bg-primary-background">
      <AppBar />
      <div className="flex-col w-[360px] items-start gap-[15px] px-[35px] py-[15px] flex-[0_0_auto] flex relative">
        <div className="relative self-stretch mt-[-1.00px] font-heading-6 font-[number:var(--heading-6-font-weight)] text-primary-color text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] [font-style:var(--heading-6-font-style)]">
          Need help? 🛟
        </div>
        <p className="relative self-stretch font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-primary-text-color text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] [font-style:var(--body-medium-regular-font-style)]">
          Our team is here to answer your questions.
        </p>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap">
          Via our form
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
            placeholder="Your name"
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
            placeholder="Your email"
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
            placeholder="Your phone"
            className="flex-1 outline-none"
          />
        </div>
        <Textarea
          className="!self-stretch !w-full"
          helperText="off"
          label1="off"
          placeholder="Your message"
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
              I accept{" "}
            </span>
            <span className="underline">privacy policy</span>
          </p>
        </div>
        <div className="flex items-center justify-center gap-2.5 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-primary-color rounded-md">
          <button
            onClick={handleSubmit}
            className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-whitewhite text-base text-center tracking-[0] leading-6 whitespace-nowrap"
          >
            Send my message
          </button>
          <Send2 className="!relative !w-5 !h-5" color="white" />
        </div>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <p className="relative self-stretch font-heading-6 font-[number:var(--heading-6-font-weight)] text-primary-color text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] [font-style:var(--heading-6-font-style)]">
          Our FAQ may also be useful to you 💡
        </p>
        <div className="flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-whitewhite rounded-md shadow-shadow-1">
          <ArrowRightCircle2 className="!relative !w-5 !h-5" />
          <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            See the FAQ page
          </button>
        </div>
      </div>
    </div>
  );
};
