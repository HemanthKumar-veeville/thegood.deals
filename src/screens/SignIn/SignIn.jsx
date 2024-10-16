import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from "../../components/Button/Button.jsx";
import { AppleBrand1 } from "../../icons/AppleBrand1/AppleBrand1.jsx";
import { EyeAlt8 } from "../../icons/EyeAlt8/EyeAlt8.jsx";
import { FacebookFill } from "../../icons/FacebookFill/FacebookFill.jsx";
import { Google } from "../../icons/Google/Google.jsx";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../helpers/helperMethods.js";
import { useDispatch, useSelector } from "react-redux";
import {
  checkUserLoginStatus,
  updateSignInForm,
  resetSignInForm,
  setErrorMessage,
  setIsError,
} from "../../redux/app/user/userSlice.js";
import { useTranslation } from "react-i18next";
import { ShowCustomErrorModal } from "../../components/ErrorAlert/ErrorAlert.jsx";

const SignIn = ({ setIsLoading }) => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const signInForm = useSelector((state) => state.user.signInForm);
  const errorMessage = signInForm.errorMessage; // Get the error message from Redux
  const isError = signInForm.isError;

  const login = async (formData) => {
    try {
      const response = await axiosInstance.post("login", formData);
      if (response?.status === 200) {
        dispatch(checkUserLoginStatus());
        dispatch(resetSignInForm()); // Clear form values after successful login
        navigate("/");
      }
    } catch (error) {
      // Extract the error message correctly
      console.log(error);
      const errorMsg =
        error.response?.data?.detail || // Server error response
        error.message || // General error message
        t("login.error"); // Fallback to a default message

      dispatch(setErrorMessage(errorMsg)); // Set error message to Redux state
      dispatch(setIsError(true));
      setIsLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: signInForm, // Load form values from Redux
    validationSchema: Yup.object({
      email: Yup.string()
        .email(t("login.invalid_email"))
        .required(t("login.required")),
      password: Yup.string().required(t("login.required")),
    }),
    onSubmit: async (values) => {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("email", values.email);
      formData.append("password", values.password);
      await login(formData);
    },
    enableReinitialize: true, // Ensures values are persisted on re-render
  });

  // Dispatch form changes to Redux after Formik has updated its internal state
  const handleFieldChange = (e) => {
    formik.handleChange(e); // Let Formik manage the state first
    const updatedValues = { ...formik.values, [e.target.name]: e.target.value }; // Capture the updated values
    dispatch(updateSignInForm(updatedValues)); // Persist form values to Redux after Formik updates
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleForgotPassword = () => {
    navigate("/lost-password");
  };

  const handleGoogleSignIn = async () => {
    try {
      // Directly call the backend API route
      const res = await axiosInstance("/login/google");

      // Handle success (store token, navigate, etc.)
      console.log("Login successful:", res.data);

      // You might want to store the received token or handle navigation here
      // For example:
      // localStorage.setItem('token', res.data.token);
      // navigate('/dashboard');
    } catch (error) {
      // Handle error
      console.error(
        "Google Sign-In error:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <div className="flex flex-col w-full items-start gap-[15px] px-[35px] py-[15px] absolute top-[118px] left-0">
      <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-[#1b4f4a] text-2xl text-center tracking-[0] leading-[30px] whitespace-nowrap">
        {t("login.title")}
      </div>
      {isError && (
        <ShowCustomErrorModal
          message={errorMessage}
          buttonText={t("waiting_deal.got_it")}
          onClose={() => dispatch(setIsError(false))} // Reset modal state on close
        />
      )}
      <form
        onSubmit={formik.handleSubmit}
        className="flex flex-col w-full gap-[15px]"
      >
        <div className="flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full">
          <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
            <input
              id="email"
              name="email"
              type="email"
              placeholder={t("login.email_placeholder")}
              onChange={handleFieldChange} // Use handleFieldChange to update both Formik and Redux
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className={`flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border ${
                formik.touched.email && formik.errors.email
                  ? "border-red-500"
                  : "focus:outline-none focus:ring-1 focus:ring-[#1b4f4a]"
              } hover:bg-gray-100 cursor-pointer focus:outline-none`}
              autoComplete="off"
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            )}
          </div>
        </div>
        <div
          className={`flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full ${
            formik.touched.email && formik.errors.email ? "mt-8" : ""
          }`}
        >
          <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
            <div className="flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-stroke hover:bg-gray-100 cursor-pointer">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder={t("login.password_placeholder")}
                onChange={handleFieldChange} // Use handleFieldChange to update both Formik and Redux
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
                aria-label={
                  showPassword
                    ? t("login.hide_password")
                    : t("login.show_password")
                }
              >
                <EyeAlt8 />
              </button>
            </div>
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-500 text-sm">
                {formik.errors.password}
              </div>
            )}
          </div>
        </div>
        <Button
          buttonText={t("login.login_button")}
          className={`!self-stretch !flex-[0_0_auto] !flex !w-full hover:bg-secondary-background cursor-pointer ${
            formik.touched.password && formik.errors.password ? "mt-8" : ""
          }`}
          color="primary"
          kind="primary"
          round="semi-round"
          state="default"
          type="submit"
        />
      </form>
      <div className="relative self-stretch w-full h-7">
        <div className="relative w-[290px] h-7">
          <img
            className="absolute w-[290px] h-px top-[13px] left-0 object-cover"
            alt={t("login.line_alt")}
            src="https://c.animaapp.com/pST4Ri5V/img/line-61-1.svg"
          />
          <div className="flex w-[138px] h-7 items-start justify-center gap-2.5 px-2.5 py-0.5 absolute top-0 left-[76px] bg-primary-background">
            <div className="relative w-fit mt-[-1.00px] ml-[-3.13px] mr-[-3.13px] [font-family:'Inter',Helvetica] font-normal text-secondary-text-color text-base tracking-[0] leading-6 whitespace-nowrap">
              {t("login.login_with")}
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-start justify-center gap-5 relative self-stretch w-full flex-[0_0_auto]">
        <div
          onClick={handleGoogleSignIn}
          className="relative w-[45px] h-[45px] bg-[#d64937] rounded-md hover:bg-[#b8372c] cursor-pointer"
        >
          <Google className="!absolute !w-5 !h-5 !top-[13px] !left-[13px]" />
        </div>
        <div className="relative w-[45px] h-[45px] bg-black rounded-md hover:bg-[#333] cursor-pointer">
          <AppleBrand1
            className="!absolute !w-5 !h-5 !top-3 !left-3"
            color="white"
          />
        </div>
        <div className="relative w-[45px] h-[45px] bg-[#4064ac] rounded-md hover:bg-[#36548f] cursor-pointer">
          <FacebookFill
            className="!absolute !w-5 !h-5 !top-[13px] !left-3"
            color="white"
          />
        </div>
      </div>
      <div
        className="flex flex-col items-center gap-2 relative self-stretch w-full flex-[0_0_auto]"
        onClick={handleForgotPassword}
      >
        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-darkdark text-base tracking-[0] leading-6 whitespace-nowrap hover:underline cursor-pointer">
          {t("login.forgot_password")}
        </div>
      </div>
    </div>
  );
};

export { SignIn };
