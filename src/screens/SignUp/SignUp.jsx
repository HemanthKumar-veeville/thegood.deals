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

export const SignUp = ({ setIsLoading }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  // Load saved form values from localStorage
  useEffect(() => {
    const savedValues = localStorage.getItem("signupFormValues");
    if (savedValues) {
      formik.setValues(JSON.parse(savedValues));
    }
  }, []);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      countryCode: { code: "+33", iso: "fr", name: "France" },
      phone: "",
      email: "",
      language: "English",
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
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed")
        .required("First name is required"),

      lastName: Yup.string()
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed")
        .required("Last name is required"),

      countryCode: Yup.object().required("Country code is required"),

      phone: Yup.string()
        .matches(/^\d+$/, "Phone number must contain only digits")
        .min(10, "Phone number must be at least 10 digits long")
        .max(13, "Phone number can't be longer than 13 digits")
        .required("Mobile number is required"),

      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),

      language: Yup.string().required("Language is required"),

      password: Yup.string()
        .min(8, "Password must be at least 8 characters long")
        .matches(/[a-z]/, "Password must contain at least one lowercase letter")
        .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
        .matches(/\d/, "Password must contain at least one number")
        .matches(
          /[~#@$%&!*_?^-]/,
          "Password must contain at least one special character from ~#@$%&!*_?^-"
        )
        .required("Password is required"),

      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Password must get confirmed"),

      address: Yup.string().required("Address is required"),

      additionalAddress: Yup.string(), // This field is optional, so no required validation

      city: Yup.string()
        .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed")
        .required("City is required"),

      postalCode: Yup.string()
        .matches(/^\d+$/, "Postal Code is invalid")
        .required("Postal Code is required"),

      country: Yup.string().required("Country is required"), // Added country validation

      currency: Yup.string().oneOf(["eur", "usd", "gbp"], "Invalid currency"), // Ensure only valid currency values

      acceptPrivacyPolicy: Yup.boolean()
        .oneOf([true], "You must accept the privacy policy")
        .required("You must accept the privacy policy"),

      agreeNewsletter: Yup.boolean(), // Optional, not required
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
          title: "Error!",
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

  return (
    <div className="flex flex-col w-full items-start gap-[20px] px-[35px] py-[15px] absolute top-[118px] left-0 bg-primary-background">
      <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-[#1b4f4a] text-2xl text-center tracking-[0] leading-[30px] whitespace-nowrap">
        Create an account
      </div>
      <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-lg text-center tracking-[0] leading-[26px] whitespace-nowrap">
        Your information
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col w-full gap-[20px]"
      >
        <InputField
          id="firstName"
          name="firstName"
          placeholder="First Name"
          formik={formik}
        />
        <InputField
          id="lastName"
          name="lastName"
          placeholder="Last Name"
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
          <InputField
            id="phone"
            name="phone"
            placeholder="Mobile number"
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
          placeholder="E-mail"
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
                French
              </option>
              <option value="English">English</option>
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
          Currency
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
                Euro - France
              </option>
              <option value="usd">USD - English</option>
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
          Your password
        </div>
        <InputField
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          formik={formik}
          showPassword={showPassword}
          toggleVisibility={togglePasswordVisibility}
        />
        <InputField
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          formik={formik}
          showPassword={showConfirmPassword}
          toggleVisibility={toggleConfirmPasswordVisibility}
        />

        {/* Password Hints */}
        <div className="flex flex-wrap text-[#637381] text-sm gap-x-4 gap-y-2 mt-2">
          {[
            "At least 8 characters",
            "Capital and lowercase letters",
            "A special character ~ #@$%&! *_?^-",
            "A number",
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
          Your address
        </div>
        <InputField
          id="address"
          name="address"
          placeholder="1 place with onions"
          formik={formik}
          label="Address (required)"
        />
        <InputField
          id="additionalAddress"
          name="additionalAddress"
          placeholder="Apartment 01"
          formik={formik}
          label="Additional address"
        />
        <InputField
          id="city"
          name="city"
          placeholder="Lille"
          formik={formik}
          label="City (required)"
        />
        <InputField
          id="postalCode"
          name="postalCode"
          placeholder="59000"
          formik={formik}
          label="Postal code (required)"
        />
        <InputField
          id="country"
          name="country"
          placeholder="France"
          formik={formik}
          label="Country (required)"
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
              I accept{" "}
            </span>
            <span className="underline" onClick={handlePrivacyPolicy}>
              privacy policy
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
              I agree to{" "}
            </span>
            <span className="underline" onClick={handleNewsLetter}>
              receive the newsletter
            </span>
          </p>
        </div>
        <Button
          buttonText="Register"
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
