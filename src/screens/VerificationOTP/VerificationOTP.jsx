import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Swal from "sweetalert2";
import { Button } from "../../components/Button/Button.jsx";
import CustomLoader from "../../components/CustomLoader/CustomLoader.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import { axiosInstance } from "../../helpers/helperMethods.js";

const OTPInput = ({ value, onChange, index, inputRefs }) => {
  return (
    <div className="flex flex-col w-12 h-12 items-start gap-[5px] relative">
      <input
        type="text"
        maxLength="1"
        value={value}
        onChange={(e) => onChange(e.target.value, index)}
        ref={inputRefs[index]}
        onKeyDown={(e) => {
          if (e.key === "Backspace" && !value && index > 0) {
            inputRefs[index - 1].current.focus();
          }
        }}
        onPaste={(e) => {
          const pasteData = e.clipboardData.getData("Text").slice(0, 5);
          const newOtp = [...otp];
          pasteData.split("").forEach((char, i) => {
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
        className="flex items-start justify-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 w-full grow bg-white rounded-md border border-solid border-stroke text-[#9CA3AF] text-base tracking-[0] leading-6 text-center focus:outline-[#1b4f4a]"
      />
    </div>
  );
};

export const VerificationOTP = ({ setIsLoading }) => {
  const { t } = useTranslation();
  const [otp, setOtp] = useState(Array(5).fill(""));
  const [seconds, setSeconds] = useState(33);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef(otp.map(() => React.createRef()));
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    const savedOtp = localStorage.getItem("otpInput");
    if (savedOtp) {
      setOtp(JSON.parse(savedOtp));
    }

    const timer = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
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

      setIsButtonDisabled(!newOtp.every((digit) => digit !== ""));
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("email", state?.email);
      formData.append("verification_code", otp.join(""));

      const response = await axiosInstance.post("verify", formData);
      if (response?.status === 201) {
        localStorage.removeItem("otpInput");
        navigate("/");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error?.response?.data?.detail,
      });
      setIsLoading(false);
    } finally {
      setLoading(false);
    }
  };

  const handleMail = async () => {
    try {
      setLoading(true); // Show loader

      const formData = new FormData();
      formData.append("email", state?.email);
      formData.append("verification_code", ""); // Empty string for resend request

      // Call the same API to resend the OTP by passing an empty verification_code
      const response = await axiosInstance.post("verify", formData);

      if (response?.status === 200) {
        Swal.fire({
          icon: "success",
          title: "OTP Resent",
          text: "A new OTP has been sent to your email address.",
        });
        setSeconds(33); // Reset the timer
      } else {
        throw new Error("Failed to resend OTP");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error?.response?.data?.detail || "Failed to resend OTP.",
      });
    } finally {
      setLoading(false); // Hide loader
    }
  };

  return (
    <div className="relative w-full h-[640px] bg-primary-background mx-auto">
      {!loading && (
        <div className="flex flex-col w-full items-start gap-[15px] px-[35px] py-[15px] absolute top-16 left-0">
          <div className="relative w-fit mt-[-1px] font-semibold text-[#1b4f4a] text-2xl text-center">
            {t("otp.confirm_email")}
          </div>
          <p className="relative w-fit text-[#1b4f4a] text-sm leading-[22px]">
            {t("otp.code_sent")} <br />
            {state?.email || "{email}"}
          </p>
          <div className="flex items-center justify-between w-full">
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
            <div className="relative w-fit text-secondary-text-color text-sm">
              {t("otp.send_again")} ({seconds}s)
            </div>
          )}
          {seconds === 0 && (
            <Button
              buttonText={t("otp.send_code_again")}
              onClick={handleMail}
              className="w-full"
              color="primary"
              kind="primary"
              round="semi-round"
              state="active"
            />
          )}
          <Button
            buttonText={t("otp.login")}
            onClick={handleSubmit}
            className="w-full"
            color="primary"
            kind="primary"
            round="semi-round"
            state={isButtonDisabled ? "disable" : "active"}
          />
        </div>
      )}
      {loading && <CustomLoader />}
    </div>
  );
};

export default VerificationOTP;
