import React, { useState } from "react";
import { Button } from "../../components/Button/Button";
import { EyeAlt4 } from "../../icons/EyeAlt4";
import { useTranslation } from "react-i18next";

const ResetPassword = () => {
  const { t } = useTranslation(); // Initialize the translation hook
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const validatePassword = () => {
    const lengthValid = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const passwordsMatch = password === confirmPassword;

    return (
      lengthValid && hasUppercase && hasLowercase && hasNumber && passwordsMatch
    );
  };

  const handleSubmit = () => {
    if (validatePassword()) {
      alert(t("resetPassword.passwordChangedSuccess"));
      // Add further logic for password change here
    } else {
      alert(t("resetPassword.passwordCriteriaError"));
    }
  };

  return (
    <div className="relative w-screen h-screen bg-primary-background">
      <div className="flex flex-col w-[360px] items-start gap-[15px] px-[35px] py-[15px] absolute top-16 left-0">
        <div className="relative w-fit mt-[-1.00px] font-heading-6 font-[number:var(--heading-6-font-weight)] text-primary-color text-[length:var(--heading-6-font-size)] text-center tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] whitespace-nowrap [font-style:var(--heading-6-font-style)]">
          {t("resetPassword.newPassword")}
        </div>
        <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-primary-color text-sm tracking-[0] leading-[22px]">
          {t("resetPassword.passwordInstruction")}
        </p>
        <div className="flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full">
          <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
            <div className="flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-whitewhite rounded-md border border-solid border-stroke">
              <div className="flex items-center justify-between relative flex-1 grow">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder={t("resetPassword.passwordPlaceholder")}
                  className="flex-1 bg-transparent border-none outline-none"
                />
                <div onClick={togglePasswordVisibility}>
                  <EyeAlt4 className="!relative !cursor-pointer !w-4 !h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full">
          <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
            <div className="flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-whitewhite rounded-md border border-solid border-stroke">
              <div className="flex items-center justify-between relative flex-1 grow">
                <input
                  type={showPassword ? "text" : "password"}
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  placeholder={t("resetPassword.confirmPasswordPlaceholder")}
                  className="flex-1 bg-transparent border-none outline-none"
                />
                <div onClick={togglePasswordVisibility}>
                  <EyeAlt4 className="!relative !cursor-pointer !w-4 !h-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-[280px] h-[49px]">
          <div className="flex w-[280px] items-center gap-[15px] absolute top-0 left-0">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm text-center tracking-[0] leading-[22px] whitespace-nowrap">
              {t("resetPassword.passwordCriteria.8characters")}
            </div>
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm text-center tracking-[0] leading-[22px] whitespace-nowrap">
              {t("resetPassword.passwordCriteria.1capitalLetter")}
            </div>
          </div>
          <div className="flex w-[280px] items-center gap-[21px] absolute top-[27px] left-0">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm text-center tracking-[0] leading-[22px] whitespace-nowrap">
              {t("resetPassword.passwordCriteria.1lowerCase")}
            </div>
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm text-center tracking-[0] leading-[22px] whitespace-nowrap">
              {t("resetPassword.passwordCriteria.1digit")}
            </div>
          </div>
        </div>
        <div onClick={handleSubmit} className="w-full">
          <Button
            buttonText={t("resetPassword.changePasswordButton")}
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

export default ResetPassword;
