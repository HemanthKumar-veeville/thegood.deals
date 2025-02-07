import React, { useEffect } from "react";
import { ArrowLeft1 } from "../../icons/ArrowLeft1";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchNotificationSettings,
  updateNotificationSettings,
} from "../../redux/app/account/accountSlice";
import { Button } from "../../components/Button/Button";

const TermsOfUse = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { notifications, status } = useSelector((state) => state.account);
  useEffect(() => {
    dispatch(fetchNotificationSettings());
  }, []);

  const handleToggle = (type) => {
    const updatedNotifications = {
      ...notifications,
      [type]: !notifications[type],
    };
    dispatch(updateNotificationSettings(updatedNotifications));
  };

  const handleBack = () => {
    navigate("/settings");
  };

  const notifications = [
    { name: t("TermsOfUse.consent_management"), enabled: true },
    { name: t("TermsOfUse.data_access_portability"), enabled: true },
    { name: t("TermsOfUse.data_deletion"), enabled: true },
    { name: t("TermsOfUse.privacy_policy"), enabled: true },
  ];

  return (
    <div className="flex flex-col w-full h-screen items-start relative bg-primary-background">
      <div className="flex flex-col w-full items-start gap-[15px] px-[15px] py-[15px] relative flex-[0_0_auto]">
        <div
          className="flex items-center gap-3 pt-0 pb-5 px-0 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-stroke"
          onClick={handleBack}
        >
          <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
            <ArrowLeft1
              className="!relative !w-[18px] !h-[18px]"
              color="#637381"
            />
            <div className="relative w-fit mt-[-1.00px] font-body-medium-medium font-[number:var(--body-medium-medium-font-weight)] text-primary-text-color text-[length:var(--body-medium-medium-font-size)] tracking-[var(--body-medium-medium-letter-spacing)] leading-[var(--body-medium-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-medium-font-style)]">
              {t("TermsOfUse.back")} {/* Translation for 'Back' */}
            </div>
          </div>
        </div>
        <div className="relative self-stretch font-heading-6 font-[number:var(--heading-6-font-weight)] text-primary-color text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] [font-style:var(--heading-6-font-style)]">
          {t("TermsOfUse.heading", "Terms of Use 🔒")}{" "}
          {/* Translation for 'Terms of Use 🔒' */}
        </div>
        <div className="flex flex-col items-start self-stretch w-full relative flex-[0_0_auto]">
          {notifications &&
            Object.keys(notifications).map((type, index) => (
              <div
                key={index}
                className="flex items-center justify-between px-0 py-[15px] relative self-stretch w-full border-b [border-bottom-style:solid] border-stroke"
              >
                <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                  <div className="relative w-52 mt-[-1.00px] font-body-medium-medium font-[number:var(--body-medium-medium-font-weight)] text-primary-color text-[length:var(--body-medium-medium-font-size)] tracking-[var(--body-medium-medium-letter-spacing)] leading-[var(--body-medium-medium-line-height)] [font-style:var(--body-medium-medium-font-style)]">
                    {notifications[type]?.name}
                  </div>
                </div>
                <div
                  className={`relative w-[50px] h-[26px] mt-[-1.00px] mb-[-1.00px] rounded-[30px] cursor-pointer ${
                    notifications[type]?.enabled
                      ? "bg-primary-color"
                      : "bg-gray-300"
                  }`}
                  // onClick={() => handleToggle(type)}
                >
                  <div
                    className={`relative w-[18px] h-[18px] top-1 bg-white rounded-[9px] transition-transform ${
                      notifications[type]?.enabled
                        ? "translate-x-7"
                        : "translate-x-1"
                    }`}
                  />
                </div>
              </div>
            ))}
          <div className="relative w-[159px] h-[26px]" />
        </div>
        {/* <div className="w-full">
          <Button
            buttonText={t("TermsOfUse.all_agreement_button")}
            className="!self-stretch !flex-[0_0_auto] !flex !w-full"
            color="primary"
            kind="primary"
            round="semi-round"
            state="default"
          />
        </div> */}
        {/* <div className="gap-2 border border-solid border-[#1b4f4a] flex items-center justify-center px-6 py-3 relative self-stretch w-full flex-[0_0_auto] rounded-md cursor-pointer">
          <button className="all-[unset] box-border relative w-fit mt-[-1.00px] font-family:'Inter',Helvetica font-medium text-[#1b4f4a] text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            {t("TermsOfUse.confirm_selection_button", "Confirm selection")}{" "}
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default TermsOfUse;
