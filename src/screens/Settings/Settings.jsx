import React from "react";
import { useTranslation } from "react-i18next";
import { ArrowLeft1 } from "../../icons/ArrowLeft1";
import { BellAlt12 } from "../../icons/BellAlt12";
import { ChevronRight7 } from "../../icons/ChevronRight7";
import { Coin2 } from "../../icons/Coin2";
import { Flag } from "../../icons/Flag";
import { UserAlt4 } from "../../icons/UserAlt4/UserAlt4";
import { useNavigate } from "react-router-dom";

const SettingsPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };
  const handleProfileEdit = () => {
    navigate("/edit-profile");
  };
  const handleNotifications = () => {
    navigate("/notifications");
  };
  const handleLanguageSelection = () => {
    navigate("/select-language");
  };
  const handleCurrencySelection = () => {
    navigate("/select-currency");
  };
  const handleDeleteAccount = () => {
    navigate("/delete-account");
  };

  return (
    <div className="flex flex-col w-full h-screen items-start relative bg-primary-background">
      <div className="flex flex-col w-[360px] items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]">
        <div
          className="flex items-center gap-3 pt-0 pb-5 px-0 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-stroke cursor-pointer"
          onClick={handleBack}
        >
          <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
            <ArrowLeft1
              className="!relative !w-[18px] !h-[18px]"
              color="#637381"
            />
            <div className="relative w-fit mt-[-1.00px] font-body-medium-medium font-[number:var(--body-medium-medium-font-weight)] text-primary-text-color text-[length:var(--body-medium-medium-font-size)] tracking-[var(--body-medium-medium-letter-spacing)] leading-[var(--body-medium-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-medium-font-style)]">
              {t("common.back")}
            </div>
          </div>
        </div>
        <div className="relative self-stretch font-heading-6 font-[number:var(--heading-6-font-weight)] text-primary-color text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] [font-style:var(--heading-6-font-style)]">
          {t("settings.title")} ⚙️
        </div>
        <div className="flex flex-col items-start self-stretch w-full relative flex-[0_0_auto]">
          <div
            className="flex h-[54px] items-center justify-between px-0 py-[15px] relative self-stretch w-full border-b [border-bottom-style:solid] border-stroke cursor-pointer"
            onClick={handleProfileEdit}
          >
            <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
              <UserAlt4 className="!relative !w-[18px] !h-[18px]" />
              <div className="relative w-fit mt-[-1.00px] font-body-medium-medium font-[number:var(--body-medium-medium-font-weight)] text-primary-color text-[length:var(--body-medium-medium-font-size)] tracking-[var(--body-medium-medium-letter-spacing)] leading-[var(--body-medium-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-medium-font-style)]">
                {t("settings.edit_profile")}
              </div>
            </div>
            <ChevronRight7
              className="!relative !w-[18px] !h-[18px]"
              color="#1B4F4A"
            />
          </div>
          <div
            className="flex h-[54px] items-center justify-between px-0 py-[15px] relative self-stretch w-full border-b [border-bottom-style:solid] border-stroke cursor-pointer"
            onClick={handleNotifications}
          >
            <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
              <BellAlt12 className="!relative !w-[18px] !h-[18px]" />
              <div className="relative w-fit mt-[-1.00px] font-body-medium-medium font-[number:var(--body-medium-medium-font-weight)] text-primary-color text-[length:var(--body-medium-medium-font-size)] tracking-[var(--body-medium-medium-letter-spacing)] leading-[var(--body-medium-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-medium-font-style)]">
                {t("settings.notifications")}
              </div>
            </div>
            <ChevronRight7
              className="!relative !w-[18px] !h-[18px]"
              color="#1B4F4A"
            />
          </div>
          <div
            className="flex h-[54px] items-center justify-between px-0 py-[15px] relative self-stretch w-full border-b [border-bottom-style:solid] border-stroke cursor-pointer"
            onClick={handleLanguageSelection}
          >
            <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
              <Flag className="!relative !w-[18px] !h-[18px]" />
              <div className="relative w-fit mt-[-1.00px] font-body-medium-medium font-[number:var(--body-medium-medium-font-weight)] text-primary-color text-[length:var(--body-medium-medium-font-size)] tracking-[var(--body-medium-medium-letter-spacing)] leading-[var(--body-medium-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-medium-font-style)]">
                {t("settings.language")}
              </div>
            </div>
            <ChevronRight7
              className="!relative !w-[18px] !h-[18px]"
              color="#1B4F4A"
            />
          </div>
          <div
            className="flex h-[54px] items-center justify-between px-0 py-[15px] relative self-stretch w-full border-b [border-bottom-style:solid] border-stroke cursor-pointer"
            onClick={handleCurrencySelection}
          >
            <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
              <Coin2 className="!relative !w-[18px] !h-[18px]" />
              <div className="relative w-fit mt-[-1.00px] font-body-medium-medium font-[number:var(--body-medium-medium-font-weight)] text-primary-color text-[length:var(--body-medium-medium-font-size)] tracking-[var(--body-medium-medium-letter-spacing)] leading-[var(--body-medium-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-medium-font-style)]">
                {t("settings.currency")}
              </div>
            </div>
            <ChevronRight7
              className="!relative !w-[18px] !h-[18px]"
              color="#1B4F4A"
            />
          </div>
          <div
            className="flex h-[54px] items-center justify-between px-0 py-[15px] relative self-stretch w-full border-b [border-bottom-style:solid] border-stroke cursor-pointer"
            onClick={handleDeleteAccount}
          >
            <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
              <Coin2 className="!relative !w-[18px] !h-[18px]" />
              <div className="relative w-fit mt-[-1.00px] font-body-medium-medium font-[number:var(--body-medium-medium-font-weight)] text-primary-color text-[length:var(--body-medium-medium-font-size)] tracking-[var(--body-medium-medium-letter-spacing)] leading-[var(--body-medium-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-medium-font-style)]">
                {t("settings.trash_account")}
              </div>
            </div>
            <ChevronRight7
              className="!relative !w-[18px] !h-[18px]"
              color="#1B4F4A"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;
