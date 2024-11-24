import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next"; // Import the useTranslation hook
import { Button } from "../../components/Button/Button.jsx";
import AppBar from "../../components/AppBar/AppBar";
import { useLocation, useNavigate } from "react-router-dom";
import { axiosInstance } from "../../helpers/helperMethods.js";
import CustomLoader from "../../components/CustomLoader/CustomLoader.jsx";
import { checkUserLoginStatus } from "../../redux/app/user/userSlice.js";
import { useDispatch } from "react-redux";
import { ShowCustomErrorModal } from "../../components/ErrorAlert/ErrorAlert.jsx";
import { ShowCustomSuccessModal } from "../../components/ShowCustomSuccessModal/ShowCustomSuccessModal.jsx";

const OTPInput = ({ value, onChange, index, inputRefs, otp, setOtp }) => (
  <div className="flex flex-col w-12 h-12 items-start gap-[5px] relative">
    <div className="flex flex-col items-center gap-2.5 relative flex-1 self-stretch w-full grow">
      <input
        type="text"
        maxLength="1"
        value={value}
        onChange={(e) => onChange(e.target.value, index)}
        ref={inputRefs.current[index]}
        onKeyDown={(e) => {
          if (e.key === "Backspace" && !value) {
            if (index > 0) {
              inputRefs.current[index - 1].current.focus();
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
                inputRefs.current[index + i].current.value = char;
              }
            });
          setOtp(newOtp);
          inputRefs.current[
            Math.min(index + pasteData.length, otp.length - 1)
          ].current.focus();
          e.preventDefault();
        }}
        inputMode="numeric" // Ensures the numeric keyboard is displayed
        pattern="[0-9]*" // Accepts only numeric input
        className="flex items-start justify-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-stroke text-[#1b4f4a] text-base tracking-[0] leading-6 text-center focus:outline-none"
      />
    </div>
  </div>
);

const Countdown = ({ initialSeconds, onResend, t }) => {
  const secondsRef = useRef(initialSeconds);
  const [displaySeconds, setDisplaySeconds] = useState(secondsRef.current);

  useEffect(() => {
    const timer = setInterval(() => {
      if (secondsRef.current > 0) {
        secondsRef.current -= 1;
        setDisplaySeconds(secondsRef.current);
      }
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval on component unmount
  }, []);

  return (
    <>
      {displaySeconds !== 0 ? (
        <div className="relative w-fit font-normal text-secondary-text-color text-sm leading-[22px] whitespace-nowrap">
          {t("otp.send_again")} ({displaySeconds}s) {/* Send again in */}
        </div>
      ) : (
        <div onClick={onResend} className="w-full">
          <Button
            buttonText={t("otp.send_code_again")} // Send Code Again
            className="w-full hover:bg-secondary-background cursor-pointer"
            color="primary"
            kind="primary"
            round="semi-round"
            state="active"
          />
        </div>
      )}
    </>
  );
};

export const VerificationOTP = () => {
  const { t } = useTranslation(); // Initialize translation hook
  const [otp, setOtp] = useState(Array(5).fill(""));
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const inputRefs = useRef(otp.map(() => React.createRef()));
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email");
  const dispatch = useDispatch();
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleResendOTP = async () => {
    try {
      const response = await axiosInstance.post("resend_code");

      if (response?.status === 200) {
        setIsSuccess(true);
        setSuccessMessage(t("otp.code_sent") + " " + (email || "{email}"));
      }
    } catch (error) {
      console.error(t("Payment.error_title"), error);
      setIsError(true);
      setErrorMessage(error?.response?.data?.detail);
    }
  };

  useEffect(() => {
    handleResendOTP();
  }, []);

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

    const formData = new FormData();
    formData.append("email", email);
    formData.append("verification_code", otp.join(""));

    try {
      const response = await axiosInstance.post("verify", formData);

      if (response?.status === 201) {
        dispatch(checkUserLoginStatus());
        navigate("/");
      }
    } catch (error) {
      console.error(t("Payment.error_title"), error);
      setIsError(true);
      setErrorMessage(error?.response?.data?.detail);
    } finally {
      setOtp(Array(5).fill(""));
      setLoading(false);
    }
  };

  return (
    <div className="relative w-full h-[640px] bg-primary-background mx-auto">
      {isError && (
        <ShowCustomErrorModal
          message={errorMessage}
          buttonText={t("waiting_deal.got_it")}
          onClose={() => setIsError(false)}
        />
      )}
      {isSuccess && (
        <ShowCustomSuccessModal
          message={successMessage}
          buttonText={t("waiting_deal.got_it")}
          onClose={() => setIsSuccess(false)} // Reset modal state on close
        />
      )}
      {!loading && (
        <div className="flex flex-col w-full items-start gap-[15px] px-[35px] py-[15px] absolute left-0">
          <div className="relative w-fit mt-[-1.00px] font-semibold text-[#1b4f4a] text-2xl text-center leading-[30px] whitespace-nowrap">
            {t("otp.confirm_email")} {/* Confirm your email */}
          </div>
          <p className="relative w-fit font-normal text-[#1b4f4a] text-sm leading-[22px]">
            {t("otp.code_sent")} <br />
            {email || "{email}"}
          </p>
          <div className="flex items-center justify-between w-full">
            {otp.map((value, index) => (
              <OTPInput
                key={index}
                value={value}
                onChange={handleChange}
                index={index}
                inputRefs={inputRefs}
                otp={otp}
                setOtp={setOtp}
              />
            ))}
          </div>
          <Countdown
            initialSeconds={180}
            onResend={handleResendOTP}
            t={t} // Pass the translation function
          />
          <div
            onClick={!isButtonDisabled ? handleSubmit : null}
            className="w-full"
          >
            <Button
              buttonText={t("otp.login")} // To log in
              className="w-full hover:bg-secondary-background cursor-pointer"
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
