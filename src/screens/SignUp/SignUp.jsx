import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "../../components/Button/Button";
import { EyeAlt8 } from "../../icons/EyeAlt8/EyeAlt8";
import { useNavigate } from "react-router-dom";
import { Placeholder } from "../../components/Dropdown/Dropdown";
import { axiosInstance } from "../../helpers/helperMethods";
import Swal from "sweetalert2";
import { Dropdown } from "../../components/CountryDropDown";

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
      phone: "",
      email: "",
      language: "",
      password: "",
      confirmPassword: "",
      address: "",
      additionalAddress: "",
      city: "",
      postalCode: "",
      country: "",
      acceptPrivacyPolicy: false,
      agreeNewsletter: false,
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      phone: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      language: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Required"),
      address: Yup.string().required("Required"),
      city: Yup.string().required("Required"),
      postalCode: Yup.string().required("Required"),
      acceptPrivacyPolicy: Yup.boolean().oneOf(
        [true],
        "You must accept the privacy policy"
      ),
    }),
    onSubmit: (values) => {
      navigate("/verify", { state: { email: values.email } });
      console.log("Form values:", values);
      formik.resetForm();
      setShowPassword(false); // Reset password visibility state
      setShowConfirmPassword(false); // Reset confirm password visibility state
      // Handle form submission (e.g., send values to the server)
      // handleSignup(values);
    },
  });

  // Save form values to localStorage on change
  useEffect(() => {
    localStorage.setItem("signupFormValues", JSON.stringify(formik.values));
  }, [formik.values]);

  const handleSignup = async () => {
    const values = formik.values;
    console.log({ values });
    setIsLoading(true);
    const formData = new FormData();
    formData.append("firstname", values.firstName);
    formData.append("lastname", values.lastName);
    formData.append("phone", values.phone);
    formData.append("email", values.email);
    formData.append("password", values.password);
    formData.append("address", values.address);
    formData.append("addl_address", values.additionalAddress);
    formData.append("city", values.city);
    formData.append("postal_code", values.postalCode);
    formData.append("country", "India");

    try {
      const response = await axiosInstance.post("register", formData);

      if (response?.status === 200) {
        if (response?.data?.is_mail_sent === true) {
          navigate("/verify", { state: { email: values.email } });
          formik.resetForm();
          setShowPassword(false); // Reset password visibility state
          setShowConfirmPassword(false); // Reset confirm password visibility state
          localStorage.removeItem("signupFormValues"); // Clear localStorage after successful submission
        }
      }
      console.log({ response });
    } catch (error) {
      console.error("There was an error!", error);
      Swal.fire({
        title: "Error!",
        text: error?.response?.data?.detail,
        icon: "error",
        confirmButtonText: "OK",
      });
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="flex flex-col w-full items-start gap-[15px] px-[35px] py-[15px] absolute top-[118px] left-0 bg-primary-background">
      <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-[#1b4f4a] text-2xl text-center tracking-[0] leading-[30px] whitespace-nowrap">
        Create an account
      </div>
      <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-lg text-center tracking-[0] leading-[26px] whitespace-nowrap">
        Your information
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col w-full gap-[15px]"
      >
        <div className="flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full">
          <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
            <input
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.firstName}
              className={`flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border ${
                formik.touched.firstName && formik.errors.firstName
                  ? "border-red-500"
                  : "focus:outline-none focus:ring-1 focus:ring-[#1b4f4a]"
              } hover:bg-gray-100 cursor-pointer focus:outline-none`}
              autoComplete="off"
            />
            {formik.touched.firstName && formik.errors.firstName ? (
              <div className="text-red-500 text-sm">
                {formik.errors.firstName}
              </div>
            ) : null}
          </div>
        </div>
        <div className="flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full">
          <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
            <input
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Last Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.lastName}
              className={`flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border ${
                formik.touched.lastName && formik.errors.lastName
                  ? "border-red-500"
                  : "focus:outline-none focus:ring-1 focus:ring-[#1b4f4a]"
              } hover:bg-gray-100 cursor-pointer focus:outline-none`}
              autoComplete="off"
            />
            {formik.touched.lastName && formik.errors.lastName ? (
              <div className="text-red-500 text-sm">
                {formik.errors.lastName}
              </div>
            ) : null}
          </div>
        </div>
        <div className="flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full">
          <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
            <input
              id="phone"
              name="phone"
              type="text"
              placeholder="Mobile number"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
              className={`flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border ${
                formik.touched.phone && formik.errors.phone
                  ? "border-red-500"
                  : "focus:outline-none focus:ring-1 focus:ring-[#1b4f4a]"
              } hover:bg-gray-100 cursor-pointer focus:outline-none`}
              autoComplete="off"
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className="text-red-500 text-sm">{formik.errors.phone}</div>
            ) : null}
          </div>
        </div>
        <div className="flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full">
          <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
            <input
              id="email"
              name="email"
              type="email"
              placeholder="E-mail"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={`flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : "focus:outline-none focus:ring-1 focus:ring-[#1b4f4a]"
              } hover:bg-gray-100 cursor-pointer focus:outline-none`}
              autoComplete="off"
            />
            {/* {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            ) : null} */}
          </div>
        </div>
        <Placeholder />
        <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-lg text-center tracking-[0] leading-[26px] whitespace-nowrap">
          Currency
        </div>
        <Placeholder />
        <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-lg text-center tracking-[0] leading-[26px] whitespace-nowrap">
          Your password
        </div>
        <div className="flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full">
          <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
            <div className="flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-stroke hover:bg-gray-100 cursor-pointer">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className={`flex items-center justify-between relative flex-1 grow bg-transparent outline-none ${
                  formik.touched.password && formik.errors.password
                    ? "border-red-500"
                    : ""
                }`}
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="flex items-center justify-center !relative !w-4 !h-4 hover:text-primary cursor-pointer"
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                <EyeAlt8 />
              </button>
            </div>
            {/* {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-sm">
                {formik.errors.password}
              </div>
            ) : null} */}
          </div>
        </div>
        <div className="flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full">
          <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
            <div className="flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-stroke hover:bg-gray-100 cursor-pointer">
              <input
                id="confirmPassword"
                name="confirmPassword"
                type={showPassword ? "text" : "password"}
                placeholder="Confirm Password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.confirmPassword}
                className={`flex items-center justify-between relative flex-1 grow bg-transparent outline-none ${
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword
                    ? "border-red-500"
                    : ""
                }`}
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="flex items-center justify-center !relative !w-4 !h-4 hover:text-primary cursor-pointer"
                aria-label={
                  showConfirmPassword ? "Hide password" : "Show password"
                }
              >
                <EyeAlt8 />
              </button>
            </div>
            {/* {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-sm">
                {formik.errors.password}
              </div>
            ) : null} */}
          </div>
        </div>
        <div className="relative w-[280px] h-[71px]">
          <div className="relative h-[71px]">
            <div className="flex w-[280px] items-center gap-[15px] absolute top-0 left-0">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#637381] text-sm text-center tracking-[0] leading-[22px]">
                8 characters
              </div>
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#637381] text-sm text-center tracking-[0] leading-[22px]">
                1 capital letter
              </div>
            </div>
            <div className="flex w-[280px] items-center gap-[21px] absolute top-[27px] left-0">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#637381] text-sm text-center tracking-[0] leading-[22px]">
                1 lower case
              </div>
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#637381] text-sm text-center tracking-[0] leading-[22px]">
                1 digit
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-lg text-center tracking-[0] leading-[26px] whitespace-nowrap">
          Your address
        </div>
        <div className="h-20 flex flex-col items-start gap-[5px] relative self-stretch w-full">
          <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
            <div className="flex w-[250px] items-start gap-2.5 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                Address (required)
              </div>
            </div>
            <div className="flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full">
              <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
                <input
                  id="address"
                  name="address"
                  type="text"
                  placeholder="SA street"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.address}
                  className={`flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border ${
                    formik.touched.address && formik.errors.address
                      ? "border-red-500"
                      : "focus:outline-none focus:ring-1 focus:ring-[#1b4f4a]"
                  } hover:bg-gray-100 cursor-pointer focus:outline-none`}
                  autoComplete="off"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="h-20 flex flex-col items-start gap-[5px] relative self-stretch w-full">
          <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
            <div className="flex w-[250px] items-start gap-2.5 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#1b4f4a] text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                Additional address
              </div>
            </div>
            <div className="flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full">
              <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
                <input
                  id="additionalAddress"
                  name="additionalAddress"
                  type="text"
                  placeholder="Satya's colony"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.additionalAddress}
                  className={`flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border ${
                    formik.touched.additionalAddress &&
                    formik.errors.additionalAddress
                      ? "border-red-500"
                      : "focus:outline-none focus:ring-1 focus:ring-[#1b4f4a]"
                  } hover:bg-gray-100 cursor-pointer focus:outline-none`}
                  autoComplete="off"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="h-20 flex flex-col items-start gap-[5px] relative self-stretch w-full">
          <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
            <div className="flex w-[250px] items-start gap-2.5 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                City (required)
              </div>
            </div>
            <div className="flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full">
              <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
                <input
                  id="city"
                  name="city"
                  type="text"
                  placeholder="Veeville"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.city}
                  className={`flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border ${
                    formik.touched.city && formik.errors.city
                      ? "border-red-500"
                      : "focus:outline-none focus:ring-1 focus:ring-[#1b4f4a]"
                  } hover:bg-gray-100 cursor-pointer focus:outline-none`}
                  autoComplete="off"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="h-20 flex flex-col items-start gap-[5px] relative self-stretch w-full">
          <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
            <div className="flex w-[250px] items-start gap-2.5 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                Postal code (required)
              </div>
            </div>
            <div className="flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full">
              <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
                <input
                  id="postalCode"
                  name="postalCode"
                  type="text"
                  placeholder="560094"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.postalCode}
                  className={`flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border ${
                    formik.touched.postalCode && formik.errors.postalCode
                      ? "border-red-500"
                      : "focus:outline-none focus:ring-1 focus:ring-[#1b4f4a]"
                  } hover:bg-gray-100 cursor-pointer focus:outline-none`}
                  autoComplete="off"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="h-20 flex flex-col items-start gap-[5px] relative self-stretch w-full">
          <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
            <div className="flex w-[250px] items-start gap-2.5 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                Country (required)
              </div>
            </div>
            <div className="flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full">
              <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
                <input
                  id="country"
                  name="country"
                  type="text"
                  placeholder="France"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.country}
                  className={`flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border ${
                    formik.touched.country && formik.errors.country
                      ? "border-red-500"
                      : "focus:outline-none focus:ring-1 focus:ring-[#1b4f4a]"
                  } hover:bg-gray-100 cursor-pointer focus:outline-none`}
                  autoComplete="off"
                />
              </div>
            </div>
          </div>
        </div>
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
            <span className="underline">privacy policy</span>
          </p>
        </div>
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
            <span className="underline">receive the newsletter</span>
          </p>
        </div>
        <button onClick={handleSignup}>
          <Button
            buttonText="Register"
            className="!self-stretch !flex-[0_0_auto] !flex !w-full"
            color="primary"
            kind="primary"
            round="semi-round"
            state="default"
            type="submit"
          />
        </button>
      </form>
    </div>
  );
};

export default SignUp;
