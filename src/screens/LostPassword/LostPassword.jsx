import React, { useState } from "react";
import { Button } from "../../components/Button/Button";
import { ArrowLeft1 } from "../../icons/ArrowLeft1";
import { useDispatch } from "react-redux";
import { forgotPassword } from "../../redux/app/user/userSlice"; // Import the forgotPassword thunk
import { useNavigate } from "react-router-dom";
import CustomLoader from "../../components/CustomLoader/CustomLoader"; // Assuming you have a CustomLoader component
import { useTranslation } from "react-i18next";
import { ShowCustomWarningModal } from "../../components/ShowCustomWarningModal/ShowCustomWarningModal";
import { ShowCustomErrorModal } from "../../components/ErrorAlert/ErrorAlert";

const LostPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false); // State to manage loading
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const [isWarning, setIsWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const validateEmail = (email) => {
    // Check if the email is empty
    if (!email) {
      return t("lost_password.errors.empty_email");
    }

    // Check if the email contains an "@" symbol
    if (!email.includes("@")) {
      return t("lost_password.errors.invalid_at");
    }

    // Check if the email contains a domain
    const parts = email.split("@");
    if (parts.length !== 2 || !parts[1].includes(".")) {
      return t("lost_password.errors.invalid_domain");
    }

    // Check for general email validity
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return t("lost_password.errors.invalid_email");
    }

    return null; // Return null if no validation errors
  };

  const handleSendLink = async () => {
    setWarningMessage("");
    const validationError = validateEmail(email);
    if (validationError) {
      setWarningMessage(validationError);
      setIsWarning(true);
      return;
    }

    try {
      setLoading(true); // Start loading
      await dispatch(forgotPassword({ email })).unwrap(); // Wait for the dispatch to finish
      setEmail(""); // Clear the email input
      navigate("/check-email"); // Navigate to the check-email page
    } catch (err) {
      const errorMessage =
        err?.[i18n.language] ||
        err?.detail ||
        t("lost_password.errors.send_error");
      setErrorMessage(errorMessage);
      setIsError(true);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleBack = () => {
    navigate("/auth?signin");
  };

  return (
    <div className="relative w-full h-screen bg-primary-background">
      {loading && <CustomLoader />} {/* Show loader when loading is true */}
      {isWarning && (
        <ShowCustomWarningModal
          message={warningMessage}
          buttonText={t("waiting_deal.got_it")}
          onClose={() => setIsWarning(false)} // Reset modal state on close
        />
      )}
      {isError && (
        <ShowCustomErrorModal
          message={errorMessage}
          buttonText={t("waiting_deal.got_it")}
          onClose={() => setIsError(false)} // Reset modal state on close
        />
      )}
      {!loading && (
        <div className="flex flex-col w-full items-start gap-[15px] px-[15px] py-[15px] absolute left-0">
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
                {t("common.back")}
              </div>
            </div>
          </div>
          <div className="relative w-fit font-heading-6 font-[number:var(--heading-6-font-weight)] text-primary-color text-[length:var(--heading-6-font-size)] text-center tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] whitespace-nowrap [font-style:var(--heading-6-font-style)]">
            {t("lost_password.title")}
          </div>
          <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-primary-color text-sm tracking-[0] leading-[22px]">
            {t("lost_password.description")}
          </p>
          <div className="flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full">
            <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
              <div className="flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-whitewhite rounded-md border border-solid border-primary-color">
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder={t("lost_password.email_placeholder")}
                  className="w-full border-none outline-none"
                />
              </div>
            </div>
          </div>
          <div onClick={handleSendLink} className="w-full">
            <Button
              buttonText={t("lost_password.send_link_button")}
              className="!self-stretch !flex-[0_0_auto] !flex !w-full"
              color="primary"
              kind="primary"
              round="semi-round"
              state="default"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default LostPassword;
