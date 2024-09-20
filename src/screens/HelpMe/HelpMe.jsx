import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Textarea } from "../../components/TextareaUpdated";
import { ArrowRightCircle2 } from "../../icons/ArrowRightCircle2";
import { Envelope } from "../../icons/Envelope";
import { Send1 } from "../../icons/Send1";
import { UserAlt5 } from "../../icons/UserAlt5";
import { Line63 } from "../../images";
import { ArrowLeft1 } from "../../icons/ArrowLeft1";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { submitHelpRequest } from "../../redux/app/public/publicSlice";
import { Dropdown } from "../../components/CountryDropDown";
import { useFormik } from "formik";
import * as Yup from "yup";

const PublicNeedHelp = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { helpRequestStatus, helpRequestError, helpRequestMessage } =
    useSelector((state) => state.public);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      country_code: "",
      message: "",
      accept_privacy_policy: false,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .required(t("public_need_help.name_required"))
        .min(2, t("public_need_help.name_too_short")),
      email: Yup.string()
        .email(t("public_need_help.invalid_email"))
        .required(t("public_need_help.email_required")),
      phone: Yup.string()
        .required(t("public_need_help.phone_required"))
        .matches(/^[0-9]+$/, t("public_need_help.invalid_phone")),
      message: Yup.string()
        .required(t("public_need_help.message_required"))
        .min(10, t("public_need_help.message_too_short")),
      accept_privacy_policy: Yup.boolean().oneOf(
        [true],
        t("public_need_help.accept_privacy_policy")
      ),
    }),
    onSubmit: (values, { resetForm }) => {
      dispatch(submitHelpRequest(values))
        .unwrap()
        .then(() => {
          resetForm();
          navigate("/help-request-sent");
        })
        .catch((error) => {
          alert(error?.detail || t("public_need_help.error_generic"));
          console.error("Error:", error);
        });
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBack = () => {
    navigate("/");
  };

  const handlePrivacyPolicy = () => {
    navigate("/privacy-policy");
  };

  const handleFaq = () => {
    navigate("/contact-us");
  };

  return (
    <div className="flex flex-col w-full items-start relative bg-primary-background">
      <div className="flex-col w-full items-start gap-[15px] px-[35px] py-[15px] flex flex-auto relative">
        <div className="flex items-center gap-3 w-full border-b border-stroke">
          <div className="inline-flex items-center gap-2" onClick={handleBack}>
            <ArrowLeft1 className="w-[18px] h-[18px]" color="#637381" />
            <div className="font-medium text-primary-text-color text-base">
              {t("public_need_help.back")}
            </div>
          </div>
        </div>
        <img className="w-full h-px object-cover" alt="Line" src={Line63} />
        <div className="text-primary-color text-lg font-medium">
          {t("public_need_help.title")}
        </div>
        <p className="text-primary-text-color">
          {t("public_need_help.description")}
        </p>
        <img className="w-full h-px object-cover" alt="Line" src={Line63} />
        <div className="font-medium text-primary-color text-base">
          {t("public_need_help.form_title")}
        </div>
        <form onSubmit={formik.handleSubmit} className="w-full space-y-4">
          <div className="relative flex items-center gap-3 py-3 bg-white rounded-md border">
            <UserAlt5 className="w-4 h-4 ml-2" color="#6B7280" fill="#111928" />
            <input
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder={t("public_need_help.name_placeholder")}
              className="flex-1 outline-none bg-transparent"
            />
          </div>
          {formik.touched.name && formik.errors.name && (
            <div className="text-red-500 text-xs mt-1">
              {formik.errors.name}
            </div>
          )}
          <div className="relative flex items-center gap-3 py-3 bg-white rounded-md border">
            <Envelope className="w-4 h-4 ml-2" color="#6B7280" />
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder={t("public_need_help.email_placeholder")}
              className="flex-1 outline-none bg-transparent"
            />
          </div>
          {formik.touched.email && formik.errors.email && (
            <div className="text-red-500 text-xs mt-1">
              {formik.errors.email}
            </div>
          )}
          <div className="flex items-start gap-3 w-full">
            <Dropdown
              id="country_code"
              name="country_code"
              selectedCode={formik.values.country_code}
              setSelectedCode={(value) =>
                formik.setFieldValue("country_code", value)
              }
              formik={formik}
            />
            <div className="relative flex items-center gap-3 py-3 bg-white rounded-md border flex-1">
              <input
                id="phone"
                name="phone"
                type="tel" // Better for phone numbers
                value={formik.values.phone}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder={t("signup.mobile_number")}
                className="flex-1 outline-none bg-transparent px-3"
                autoComplete="off"
              />
            </div>
          </div>
          {formik.touched.phone && formik.errors.phone && (
            <div className="text-red-500 text-xs mt-1">
              {formik.errors.phone}
            </div>
          )}
          <Textarea
            className="w-full"
            helperText="off"
            label1="off"
            placeholder={t("public_need_help.message_placeholder")}
            secondLabel="off"
            state="default"
            name="message"
            value={formik.values.message}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.message && formik.errors.message && (
            <div className="text-red-500 text-xs mt-1">
              {formik.errors.message}
            </div>
          )}
          <div className="flex items-center gap-2.5">
            <input
              type="checkbox"
              name="accept_privacy_policy"
              checked={formik.values.accept_privacy_policy}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className="w-5 h-5 bg-white rounded border border-stroke"
            />
            <p className="text-xs text-primary-color">
              <span className="text-[#1b4f4a]">
                {t("public_need_help.privacy_accept_text")}
              </span>
              <span className="underline" onClick={handlePrivacyPolicy}>
                {t("public_need_help.privacy_policy")}
              </span>
            </p>
          </div>
          {formik.touched.accept_privacy_policy &&
            formik.errors.accept_privacy_policy && (
              <div className="text-red-500 text-xs mt-1">
                {formik.errors.accept_privacy_policy}
              </div>
            )}
          <div className="flex items-center justify-center gap-2.5 py-3 w-full bg-primary-color rounded-md">
            <button type="submit" className="text-white text-base font-medium">
              {t("public_need_help.send_message")}
            </button>
            <Send1 className="w-5 h-5" color="white" fill="white" />
          </div>
        </form>
        <img className="w-full h-px object-cover" alt="Line" src={Line63} />
        <p className="text-primary-color text-lg font-medium">
          {t("public_need_help.faq_title")}
        </p>
        <div
          className="flex items-center justify-center gap-2 py-3 w-full bg-white rounded-md shadow-shadow-1"
          onClick={handleFaq}
        >
          <ArrowRightCircle2 className="w-5 h-5" />
          <button className="text-primary-color text-base font-medium">
            {t("public_need_help.see_faq")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PublicNeedHelp;
