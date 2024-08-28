import React, { useState } from "react";
import { Button } from "../../components/Button/Button";
import { EyeAlt4 } from "../../icons/EyeAlt4";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../redux/app/user/userSlice"; // Import the resetPassword thunk
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; // Import SweetAlert2

const ResetPassword = () => {
  const { t } = useTranslation(); // Initialize the translation hook
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.user); // Access status and error from the state

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
    const errors = [];

    if (password.length < 8) {
      errors.push("Password must be at least 8 characters long.");
    }
    if (!/[A-Z]/.test(password)) {
      errors.push("Password must contain at least one uppercase letter.");
    }
    if (!/[a-z]/.test(password)) {
      errors.push("Password must contain at least one lowercase letter.");
    }
    if (!/[0-9]/.test(password)) {
      errors.push("Password must contain at least one digit.");
    }
    if (password !== confirmPassword) {
      errors.push("Passwords do not match.");
    }

    if (errors.length > 0) {
      Swal.fire({
        title: "Password Validation Failed",
        html: `<ul style="text-align: left;">${errors
          .map((error) => `<li>${error}</li>`)
          .join("")}</ul>`,
        icon: "error",
        confirmButtonText: "OK",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = () => {
    if (validatePassword()) {
      dispatch(resetPassword({ password, confirmPassword }))
        .unwrap()
        .then(() => {
          navigate("/reset-password-success");
        })
        .catch((err) => {
          Swal.fire({
            title: "Error",
            text: err?.message,
            icon: "error",
            confirmButtonText: "OK",
          });
        });
    }
  };

  return (
    <div className="relative w-full h-screen bg-primary-background">
      <div className="flex flex-col w-[360px] items-start gap-[15px] px-[35px] py-[15px] absolute left-0">
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
