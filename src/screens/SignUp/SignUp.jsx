import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "../../components/Button/Button";
import { EyeAlt8 } from "../../icons/EyeAlt8/EyeAlt8";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../helpers/helperMethods";
import Swal from "sweetalert2";
import { Dropdown } from "../../components/CountryDropDown";
import { ChevronDown } from "../../icons/ChevronDown";
import { useTranslation } from "react-i18next";

const InputField = ({
  id,
  name,
  type = "text",
  placeholder,
  formik,
  label,
  showPassword = false,
  toggleVisibility,
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
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              <EyeAlt8 />
            </button>
          )}
        </div>
        {/* Error message with proper margin to avoid overlapping */}
        {formik.touched[name] && formik.errors[name] && name !== "phone" ? (
          <div className="text-red-500 text-sm mt-2">{formik.errors[name]}</div>
        ) : null}
      </div>
    </div>
  );
};

const MobileInputField = ({
  id,
  name,
  type = "text",
  placeholder,
  formik,
  label,
  showPassword = false,
  toggleVisibility,
}) => {
  return (
    <div className="w-[calc(100%-1%)]  flex flex-col items-start gap-2 relative">
      {label && (
        <label
          htmlFor={id}
          className="[font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-sm leading-[22px] mb-[2px] w-full"
        >
          {label}
        </label>
      )}
      <div className="w-[calc(100%-1%)]  ">
        <div
          className={`flex items-center gap-2.5 pl-5 pr-4 py-3 w-[calc(100%-1%)]   bg-white rounded-md border cursor-pointer hover:bg-gray-100 ${
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
            className="flex-1 bg-transparent outline-none w-[calc(100%-1%)]  "
            autoComplete="off"
          />
          {toggleVisibility && (
            <button
              type="button"
              onClick={toggleVisibility}
              className="flex items-center justify-center !relative !w-4 !h-4 hover:text-primary cursor-pointer"
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              <EyeAlt8 />
            </button>
          )}
        </div>
        {/* Error message with proper margin to avoid overlapping */}
        {formik.touched[name] && formik.errors[name] && name !== "phone" ? (
          <div className="text-red-500 text-sm mt-2">{formik.errors[name]}</div>
        ) : null}
      </div>
    </div>
  );
};

export const SignUp = ({ setIsLoading }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  // Load saved form values from localStorage
  useEffect(() => {
    const savedValues = localStorage.getItem("signupFormValues");
    if (savedValues) {
      formik.setValues(JSON.parse(savedValues));
    }
  }, []);
  console.log(i18n.language);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      countryCode: { code: "+33", iso: "fr", name: "France" },
      phone: "",
      email: "",
      language: i18n?.language == "en" ? "English" : "French",
      password: "",
      confirmPassword: "",
      address: "",
      additionalAddress: "",
      city: "",
      postalCode: "",
      country: "",
      currency: "usd",
      acceptPrivacyPolicy: false,
      agreeNewsletter: false,
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .matches(
          /^[a-zA-ZÀ-ÿ\u00C0-\u017F\s'-’]+$/,
          t("signup.errors.first_name")
        )
        .required(t("signup.errors.first_name")),
      lastName: Yup.string()
        .matches(
          /^[a-zA-ZÀ-ÿ\u00C0-\u017F\s'-’]+$/,
          t("signup.errors.last_name")
        )
        .required(t("signup.errors.last_name")),
      countryCode: Yup.object().required(t("signup.errors.country_code")),
      phone: Yup.string()
        .matches(/^\d+$/, t("signup.errors.phone_number"))
        .min(10, t("signup.errors.phone_number"))
        .max(13, t("signup.errors.phone_number"))
        .required(t("signup.errors.phone_number")),
      email: Yup.string()
        .email(t("signup.errors.email"))
        .required(t("signup.errors.email")),
      language: Yup.string().required(t("signup.errors.language")),
      password: Yup.string()
        .min(8, t("signup.password_hints.min_length"))
        .matches(/[a-z]/, t("signup.password_hints.lowercase"))
        .matches(/[A-Z]/, t("signup.password_hints.uppercase"))
        .matches(/\d/, t("signup.password_hints.number"))
        .matches(/[~#@$%&!*_?^-]/, t("signup.password_hints.special_character"))
        .required(t("signup.errors.password")),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], t("signup.errors.confirm_password"))
        .required(t("signup.errors.confirm_password")),
      address: Yup.string().required(t("signup.errors.address")),
      city: Yup.string()
        .matches(/^[a-zA-ZÀ-ÿ\u00C0-\u017F\s'-’]+$/, t("signup.errors.city"))
        .required(t("signup.errors.city")),
      postalCode: Yup.string()
        .matches(/^[A-Za-z0-9- ]{3,10}$/, t("signup.errors.postal_code"))
        .required(t("signup.errors.postal_code")),
      country: Yup.string().required(t("signup.errors.country")),
      currency: Yup.string().oneOf(
        ["eur", "usd", "gbp"],
        t("signup.errors.currency")
      ),
      acceptPrivacyPolicy: Yup.boolean()
        .oneOf([true], t("signup.errors.accept_privacy_policy"))
        .required(t("signup.errors.accept_privacy_policy")),
      agreeNewsletter: Yup.boolean(), // Optional
    }),
    onSubmit: async (values) => {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("firstname", values.firstName);
      formData.append("lastname", values.lastName);
      formData.append("country_code", values.countryCode.code);
      formData.append("phone", values.phone);
      formData.append("email", values.email);
      formData.append("language", values.language);
      formData.append("password", values.password);
      formData.append("address", values.address);
      formData.append("addl_address", values.additionalAddress);
      formData.append("city", values.city);
      formData.append("postal_code", values.postalCode);
      formData.append("country", values.country);
      formData.append("currency", values.currency);
      formData.append("accept_privacy_policy", values.acceptPrivacyPolicy);
      formData.append("agree_newsletter", values.agreeNewsletter);

      try {
        const response = await axiosInstance.post("register", formData);

        if (response?.status === 200 && response?.data?.is_mail_sent === true) {
          formik.resetForm();
          setShowPassword(false); // Reset password visibility state
          setShowConfirmPassword(false); // Reset confirm password visibility state
          localStorage.removeItem("signupFormValues"); // Clear localStorage after successful submission
          navigate("/verify", { state: { email: values.email } });
          window.scrollTo(0, 0);
        }
      } catch (error) {
        Swal.fire({
          title: t("signup.errors.error_title"),
          text: error?.response?.data?.detail,
          icon: "error",
          confirmButtonText: "OK",
        });
        setIsLoading(false);
      }
    },
  });

  const handlePrivacyPolicy = () => {
    navigate("/privacy-policy");
  };

  const handleNewsLetter = () => {
    navigate("/newsletter-indication");
  };

  // Save form values to localStorage on change
  useEffect(() => {
    localStorage.setItem("signupFormValues", JSON.stringify(formik.values));
  }, [formik.values]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  useEffect(() => {
    formik.values.language === "English"
      ? i18n.changeLanguage("en")
      : i18n.changeLanguage("fr");
  }, [formik.values.language]);

  return (
    <div className="flex flex-col w-full items-start gap-[20px] px-[35px] py-[15px] absolute top-[118px] left-0 bg-primary-background">
      <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-[#1b4f4a] text-2xl text-center tracking-[0] leading-[30px] whitespace-nowrap">
        {t("signup.title")}
      </div>
      <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-lg text-center tracking-[0] leading-[26px] whitespace-nowrap">
        {t("signup.subtitle")}
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col w-full gap-[20px]"
      >
        <InputField
          id="firstName"
          name="firstName"
          placeholder={t("signup.first_name")}
          formik={formik}
        />
        <InputField
          id="lastName"
          name="lastName"
          placeholder={t("signup.last_name")}
          formik={formik}
        />
        <div className="flex h-12 items-start gap-[5px] relative self-stretch !w-full">
          <Dropdown
            id="countryCode"
            name="countryCode"
            selectedCode={formik.values.countryCode}
            setSelectedCode={(value) =>
              formik.setFieldValue("countryCode", value)
            }
            formik={formik}
          />
          <MobileInputField
            id="phone"
            name="phone"
            placeholder={t("signup.mobile_number")}
            formik={formik}
          />
        </div>
        {formik?.touched["phone"] && formik?.errors["phone"] ? (
          <div className="text-red-500 text-sm mt-[2px]">
            {formik.errors["phone"]}
          </div>
        ) : null}
        <InputField
          id="email"
          name="email"
          type="email"
          placeholder={t("signup.email")}
          formik={formik}
        />
        <div className="flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full">
          <div className="relative w-full [font-family:'Inter-Regular',Helvetica] font-normal text-darkdark-6 text-base tracking-[0] leading-6 whitespace-nowrap">
            <select
              id="language"
              name="language"
              value={formik.values.language}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full pl-5 pr-10 py-3 bg-white rounded-md border ${
                formik.touched.language && formik.errors.language
                  ? "border-red-500"
                  : "focus:outline-none focus:ring-1 focus:ring-[#1b4f4a]"
              } hover:bg-gray-100 cursor-pointer appearance-none`}
            >
              <option value="French" defaultValue={true}>
                {t("language.french")}
              </option>
              <option value="English">{t("language.english")}</option>
            </select>
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
              <ChevronDown className="w-4 h-4 text-gray-600" />
            </div>
          </div>
          {formik.touched.language && formik.errors.language ? (
            <div className="text-red-500 text-sm mt-[2px]">
              {formik.errors.language}
            </div>
          ) : null}
        </div>

        {/* Currency Dropdown */}
        <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-lg text-center tracking-[0] leading-[26px] whitespace-nowrap">
          {t("signup.currency")}
        </div>
        <div className="flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full">
          <div className="relative w-full [font-family:'Inter-Regular',Helvetica] font-normal text-darkdark-6 text-base tracking-[0] leading-6 whitespace-nowrap">
            <select
              id="currency"
              name="currency"
              value={formik.values.currency}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full pl-5 pr-10 py-3 bg-white rounded-md border ${
                formik.touched.currency && formik.errors.currency
                  ? "border-red-500"
                  : "focus:outline-none focus:ring-1 focus:ring-[#1b4f4a]"
              } hover:bg-gray-100 cursor-pointer appearance-none`}
            >
              <option value="eur" defaultValue={true}>
                {t("signup.currency_options.eur")}
              </option>
              <option value="usd">{t("signup.currency_options.usd")}</option>
            </select>
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
              <ChevronDown className="w-4 h-4 text-gray-600" />
            </div>
          </div>
          {formik.touched.currency && formik.errors.currency ? (
            <div className="text-red-500 text-sm mt-[2px]">
              {formik.errors.currency}
            </div>
          ) : null}
        </div>

        <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-lg text-center tracking-[0] leading-[26px] whitespace-nowrap">
          {t("signup.password")}
        </div>
        <InputField
          id="password"
          name="password"
          type="password"
          placeholder={t("signup.password")}
          formik={formik}
          showPassword={showPassword}
          toggleVisibility={togglePasswordVisibility}
        />
        <InputField
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder={t("signup.confirm_password")}
          formik={formik}
          showPassword={showConfirmPassword}
          toggleVisibility={toggleConfirmPasswordVisibility}
        />

        {/* Password Hints */}
        <div className="flex flex-wrap text-[#637381] text-sm gap-x-4 gap-y-2 mt-2">
          {[
            t("signup.password_hints.min_length"),
            t("signup.password_hints.uppercase_lowercase"),
            t("signup.password_hints.special_character"),
            t("signup.password_hints.number"),
          ].map((requirement, idx) => (
            <div
              key={idx}
              className="relative w-fit font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] text-center tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]"
            >
              <span className="mr-1">•</span> {requirement}
            </div>
          ))}
        </div>

        <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-lg text-center tracking-[0] leading-[26px] whitespace-nowrap">
          {t("signup.address")}
        </div>
        <InputField
          id="address"
          name="address"
          placeholder={t("signup.address")}
          formik={formik}
          label={t("signup.address")}
        />
        <InputField
          id="additionalAddress"
          name="additionalAddress"
          placeholder={t("signup.additional_address")}
          formik={formik}
          label={t("signup.additional_address")}
        />
        <InputField
          id="city"
          name="city"
          placeholder={t("signup.city")}
          formik={formik}
          label={t("signup.city")}
        />
        <InputField
          id="postalCode"
          name="postalCode"
          placeholder={t("signup.postal_code")}
          formik={formik}
          label={t("signup.postal_code")}
        />
        <InputField
          id="country"
          name="country"
          placeholder={t("signup.country")}
          formik={formik}
          label={t("signup.country")}
        />

        <div className="flex flex-wrap items-center gap-[10px_10px] relative self-stretch w-full flex-[0_0_auto]">
          <input
            id="acceptPrivacyPolicy"
            name="acceptPrivacyPolicy"
            type="checkbox"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            checked={formik.values.acceptPrivacyPolicy}
            className="form-checkbox h-4 w-4 text-primary"
          />
          <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#1b4f4a] text-xs tracking-[0] leading-5 whitespace-nowrap">
            <span className="[font-family:'Inter',Helvetica] font-normal text-[#1b4f4a] text-xs tracking-[0] leading-5">
              {t("signup.privacy_policy")}
            </span>
            <span className="underline" onClick={handlePrivacyPolicy}>
              {t("signup.privacy_policy_link")}
            </span>
          </p>
        </div>
        {formik.touched.acceptPrivacyPolicy &&
        formik.errors.acceptPrivacyPolicy ? (
          <div className="text-red-500 text-sm mt-[2px]">
            {formik.errors.acceptPrivacyPolicy}
          </div>
        ) : null}
        <div className="flex flex-wrap items-center gap-[10px_10px] relative self-stretch w-full flex-[0_0_auto]">
          <input
            id="agreeNewsletter"
            name="agreeNewsletter"
            type="checkbox"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            checked={formik.values.agreeNewsletter}
            className="form-checkbox h-4 w-4 text-primary"
          />
          <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#1b4f4a] text-xs tracking-[0] leading-5 whitespace-nowrap">
            <span className="[font-family:'Inter',Helvetica] font-normal text-[#1b4f4a] text-xs tracking-[0] leading-5">
              {t("signup.newsletter")}
            </span>
            <span className="underline" onClick={handleNewsLetter}>
              {t("signup.newsletter_link")}
            </span>
          </p>
        </div>
        <Button
          buttonText={t("signup.register_button")}
          className="!self-stretch !flex-[0_0_auto] !flex !w-full"
          color="primary"
          kind="primary"
          round="semi-round"
          state="default"
          type="submit"
        />
      </form>
    </div>
  );
};

export default SignUp;
