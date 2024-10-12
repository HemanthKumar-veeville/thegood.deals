import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { Button } from "../../components/Button/Button.jsx";
import { AppleBrand1 } from "../../icons/AppleBrand1/AppleBrand1.jsx";
import { EyeAlt8 } from "../../icons/EyeAlt8/EyeAlt8.jsx";
import { FacebookFill } from "../../icons/FacebookFill/FacebookFill.jsx";
import { Google } from "../../icons/Google/Google.jsx";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../helpers/helperMethods.js";
import { useDispatch } from "react-redux";
import { checkUserLoginStatus } from "../../redux/app/user/userSlice.js";
import { useTranslation } from "react-i18next";

const SignIn = ({ setIsLoading }) => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const savedValues = JSON.parse(localStorage.getItem("signInForm"));
    if (savedValues) {
      formik.setValues(savedValues);
    }
  }, []);

  const login = async (formData) => {
    try {
      const response = await axiosInstance.post("login", formData);

      if (response?.status === 200) {
        // Optionally log or access the cookie if needed
        console.log("Cookies:", document.cookie);

        // Proceed with your success actions
        localStorage.removeItem("signInForm");
        dispatch(checkUserLoginStatus());
        navigate("/");
      }
      console.log({ response });
    } catch (error) {
      console.error("There was an error!", error);
      setErrorMessage(error.message);
      setIsLoading(false);
    }
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
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
  });

  useEffect(() => {
    localStorage.setItem("signInForm", JSON.stringify(formik.values));
  }, [formik.values]);

  useEffect(() => {
    console.log({ errorMessage });
  }, [errorMessage]);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPassword = () => {
    navigate("/lost-password");
  };

  const handleGoogleSignIn = () => {};

  return (
    <div className="flex flex-col w-full items-start gap-[15px] px-[35px] py-[15px] absolute top-[118px] left-0">
      <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-[#1b4f4a] text-2xl text-center tracking-[0] leading-[30px] whitespace-nowrap">
        {t("login.title")}
      </div>
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
            {formik.touched.email && formik.errors.email ? (
              <div className="text-red-500 text-sm">{formik.errors.email}</div>
            ) : null}
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
                aria-label={
                  showPassword
                    ? t("login.hide_password")
                    : t("login.show_password")
                }
              >
                <EyeAlt8 />
              </button>
            </div>
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-sm">
                {formik.errors.password}
              </div>
            ) : null}
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
