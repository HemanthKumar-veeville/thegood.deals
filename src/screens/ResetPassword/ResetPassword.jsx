import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "../../components/Button/Button";
import { EyeAlt8 } from "../../icons/EyeAlt8/EyeAlt8";
import { useDispatch } from "react-redux";
import { resetPassword } from "../../redux/app/user/userSlice";
import { useNavigate } from "react-router-dom";
import CustomLoader from "../../components/CustomLoader/CustomLoader";
import { useTranslation } from "react-i18next";
import { ShowCustomErrorModal } from "../../components/ErrorAlert/ErrorAlert";

const InputField = ({
  id,
  name,
  type = "text",
  placeholder,
  formik,
  label,
  showPassword = false,
  toggleVisibility,
  t,
}) => {
  return (
    <div className="w-full flex flex-col items-start gap-2 relative">
      {label && (
        <label
          htmlFor={id}
          className="[font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-sm leading-[22px] mb-[2px] w-full"
        >
          {label}
        </label>
      )}
      <div className="w-full">
        <div
          className={`flex items-center gap-2.5 pl-5 pr-4 py-3 w-full bg-white rounded-md border cursor-pointer hover:bg-gray-100 ${
            formik.touched[name] && formik.errors[name]
              ? "border-red-500 border-solid"
              : "focus-within:ring-1 focus-within:ring-[#1b4f4a] border"
          }`}
        >
          <input
            id={id}
            name={name}
            type={showPassword ? "text" : type}
            placeholder={placeholder}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values[name]}
            className="flex-1 bg-transparent outline-none"
            autoComplete="off"
          />
          {toggleVisibility && (
            <button
              type="button"
              onClick={toggleVisibility}
              className="flex items-center justify-center !relative !w-4 !h-4 hover:text-primary cursor-pointer"
              aria-label={
                showPassword
                  ? t("resetPassword.hide_password")
                  : t("resetPassword.show_password")
              }
            >
              <EyeAlt8 />
            </button>
          )}
        </div>
        {/* Error message */}
        {formik.touched[name] && formik.errors[name] && (
          <div className="text-red-500 text-sm mt-2">{formik.errors[name]}</div>
        )}
      </div>
    </div>
  );
};

const ResetPassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const emailParam = new URLSearchParams(window.location.search).get("email");
    if (emailParam) {
      formik.setFieldValue("email", emailParam);
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
      email: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(8, t("resetPassword.passwordCriteria.8characters"))
        .matches(/[a-z]/, t("resetPassword.passwordCriteria.1lowerCase"))
        .matches(/[A-Z]/, t("resetPassword.passwordCriteria.1capitalLetter"))
        .matches(/\d/, t("resetPassword.passwordCriteria.1digit"))
        .matches(
          /[!\"#$%&'()*+,-./:;<=>?@[\\]_`{}~€¢£¥§©®«»¼½¾±°¿÷ÐÑØ×ƒÆßæœ©®¥×ß«¬÷ÐÑØÞµ¶·ß±×‡•◊œß€™‰≈∆«»−×÷≠≤≥Ω∑]/,
          t("resetPassword.passwordCriteria.special_character")
        )
        .required(t("resetPassword.errors.password")),
      confirmPassword: Yup.string()
        .oneOf(
          [Yup.ref("password"), null],
          t("resetPassword.errors.confirm_password")
        )
        .required(t("resetPassword.errors.confirm_password")),
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try {
        await dispatch(resetPassword(values)).unwrap();
        navigate("/reset-password-success");
      } catch (error) {
        setIsError(true);
        setErrorMessage(
          error?.response?.data?.detail ||
            t("resetPassword.errors.generic_error")
        );
      } finally {
        setLoading(false);
      }
    },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="relative w-full h-screen bg-primary-background">
      {loading && <CustomLoader />}
      {isError && (
        <ShowCustomErrorModal
          message={errorMessage}
          buttonText={t("waiting_deal.got_it")}
          onClose={() => setIsError(false)}
        />
      )}
      {!loading && (
        <div className="flex flex-col w-full items-start gap-[15px] px-[35px] py-[15px] absolute left-0">
          <div className="relative w-fit font-heading-6 font-semibold text-primary-color text-[length:var(--heading-6-font-size)] text-center">
            {t("resetPassword.newPassword")}
          </div>
          <p className="font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)]">
            {t("resetPassword.passwordInstruction")}
          </p>

          <form onSubmit={formik.handleSubmit} className="w-full space-y-5">
            <InputField
              id="password"
              name="password"
              type="password"
              placeholder={t("resetPassword.passwordPlaceholder")}
              formik={formik}
              showPassword={showPassword}
              toggleVisibility={togglePasswordVisibility}
              t={t}
            />

            <InputField
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              placeholder={t("resetPassword.confirmPasswordPlaceholder")}
              formik={formik}
              showPassword={showConfirmPassword}
              toggleVisibility={toggleConfirmPasswordVisibility}
              t={t}
            />

            {/* Password Hints */}
            <div className="flex flex-wrap text-[#637381] text-sm gap-x-4 gap-y-2 mt-2">
              {[
                t("resetPassword.passwordCriteria.8characters"),
                t("resetPassword.passwordCriteria.1capitalLetter"),
                t("resetPassword.passwordCriteria.special_character"),
                t("resetPassword.passwordCriteria.1digit"),
              ].map((requirement, idx) => (
                <div
                  key={idx}
                  className="font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] text-center tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]"
                >
                  <span className="mr-1">•</span> {requirement}
                </div>
              ))}
            </div>

            <Button
              buttonText={t("resetPassword.changePasswordButton")}
              className="!self-stretch !flex-[0_0_auto] !flex !w-full"
              color="primary"
              kind="primary"
              round="semi-round"
              state="default"
              type="submit"
            />
          </form>
        </div>
      )}
    </div>
  );
};

export default ResetPassword;
