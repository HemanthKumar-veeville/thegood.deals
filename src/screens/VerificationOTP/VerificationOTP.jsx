import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next"; // Import the useTranslation hook
import Swal from "sweetalert2";
import { Button } from "../../components/Button/Button.jsx";
import AppBar from "../../components/AppBar/AppBar";
import { useLocation, useNavigate } from "react-router-dom";
import { axiosInstance } from "../../helpers/helperMethods.js";
import CustomLoader from "../../components/CustomLoader/CustomLoader.jsx";

const OTPInput = ({ value, onChange, index, inputRefs }) => (
  <div className="flex flex-col w-12 h-12 items-start gap-[5px] relative">
    <div className="flex flex-col items-center gap-2.5 relative flex-1 self-stretch w-full grow">
      <input
        type="text"
        maxLength="1"
        value={value}
        onChange={(e) => onChange(e.target.value, index)}
        ref={inputRefs[index]}
        onKeyDown={(e) => {
          if (e.key === "Backspace" && !value) {
            if (index > 0) {
              inputRefs[index - 1].current.focus();
            }
          }
        }}
        onPaste={(e) => {
          const pasteData = e.clipboardData.getData("Text");
          const newOtp = [...otp];
          pasteData
            .slice(0, 5)
            .split("")
            .forEach((char, i) => {
              if (index + i < otp.length) {
                newOtp[index + i] = char;
                inputRefs[index + i].current.value = char;
              }
            });
          setOtp(newOtp);
          inputRefs[
            Math.min(index + pasteData.length, otp.length - 1)
          ].current.focus();
          e.preventDefault();
        }}
        className="flex items-start justify-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-stroke text-[#9CA3AF] text-base tracking-[0] leading-6 text-center focus: outline-[#1b4f4a]"
      />
    </div>
  </div>
);

export const VerificationOTP = ({ setIsLoading }) => {
  const { t } = useTranslation(); // Initialize translation hook
  const [otp, setOtp] = useState(Array(5).fill(""));
  const [seconds, setSeconds] = useState(33);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef(otp.map(() => React.createRef()));
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;

  useEffect(() => {
    const savedOtp = JSON.parse(localStorage.getItem("otpInput"));
    if (savedOtp) {
      setOtp(savedOtp);
    }
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => (prevSeconds > 0 ? prevSeconds - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    localStorage.setItem("otpInput", JSON.stringify(otp));
  }, [otp]);

  const handleChange = (value, index) => {
    if (/^[0-9]$/.test(value) || value === "") {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (value !== "" && index < otp.length - 1) {
        inputRefs.current[index + 1].current.focus();
      }
      if (newOtp.every((digit) => digit !== "")) {
        setIsButtonDisabled(false);
      } else {
        setIsButtonDisabled(true);
      }
    }
  };

  const handleSubmit = async () => {
    setLoading(true); // Show loader
    console.log("OTP submitted:", otp.join(""));

    const formData = new FormData();
    formData.append("email", state?.email);
    formData.append("verification_code", otp.join(""));

    try {
      const response = await axiosInstance.post("verify", formData);

      if (response?.status === 201) {
        localStorage.removeItem("otpInput");
        navigate("/account");
      }
    } catch (error) {
      console.error("There was an error!", error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error?.response?.data?.detail,
      });
      setIsLoading(false);
    }
    setLoading(false); // Hide loader
  };

  const handleMail = () => {
    console.log("Mail Sent");
    setSeconds(33);
  };

  return (
    <div className="relative w-screen h-[640px] bg-primary-background mx-auto">
      {!loading && (
        <div className="flex flex-col w-screen items-start gap-[15px] px-[35px] py-[15px] absolute top-16 left-0">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold !text-[#1b4f4a] text-2xl text-center tracking-[0] leading-[30px] whitespace-nowrap">
            {t("otp.confirm_email")} {/* Confirm your email */}
          </div>
          <p className="relative w-fit [font-family:'Inter',Helvetica] font-normal !text-[#1b4f4a] text-sm tracking-[0] leading-[22px]">
            {t("otp.code_sent")} <br />
            {state?.email || "{email}"}
          </p>
          <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
            {otp.map((value, index) => (
              <OTPInput
                key={index}
                value={value}
                onChange={handleChange}
                index={index}
                inputRefs={inputRefs.current}
              />
            ))}
          </div>
          {seconds !== 0 && (
            <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-secondary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap">
              {t("otp.send_again")} ({seconds}s) {/* Send again in */}
            </div>
          )}
          {seconds === 0 && (
            <div onClick={handleMail} className="!w-full">
              <Button
                buttonText={t("otp.send_code_again")} // Send Code Again
                className="!self-stretch !flex-[0_0_auto] !flex !w-full hover:bg-secondary-background cursor-pointer"
                color="primary"
                kind="primary"
                round="semi-round"
                state="active"
              />
            </div>
          )}
          <div onClick={handleSubmit} className="!w-full">
            <Button
              buttonText={t("otp.login")} // To log in
              className="!self-stretch !flex-[0_0_auto] !flex !w-full hover:bg-secondary-background cursor-pointer"
              color="primary"
              kind="primary"
              round="semi-round"
              state={isButtonDisabled ? "disable" : "active"}
            />
          </div>
        </div>
      )}
      {loading && <CustomLoader />}
    </div>
  );
};

export default VerificationOTP;
