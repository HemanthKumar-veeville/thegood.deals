import React, { useState, useEffect } from "react";
import { Button } from "../../components/Button/Button";
import { ArrowLeft1 } from "../../icons/ArrowLeft1";
import { ChevronDown } from "../../icons/ChevronDown";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchLanguageSetting,
  updateLanguageSetting,
} from "../../redux/app/account/accountSlice";
import CustomLoader from "../../components/CustomLoader/CustomLoader";

const LanguageSelection = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { language, status } = useSelector((state) => state.account);

  const [selectedLanguage, setSelectedLanguage] = useState(
    language || "French" // Default to French if no language is set
  );
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    // Fetch current language setting when component mounts
    dispatch(fetchLanguageSetting());
  }, [dispatch]);

  useEffect(() => {
    if (language) {
      setSelectedLanguage(language);
      // Change the i18n language immediately
      i18n.changeLanguage(language.toLowerCase());
    }
  }, [language, i18n]);

  const handleBack = () => {
    navigate(-1);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const selectLanguage = (lang) => {
    setSelectedLanguage(lang);
    setDropdownOpen(false);
  };

  const confirmLanguage = async () => {
    if (selectedLanguage !== language) {
      await dispatch(updateLanguageSetting(selectedLanguage));
      console.log({ selectedLanguage });
      i18n.changeLanguage(
        selectedLanguage.toLowerCase() === "english" ? "en" : "fr"
      );
    }
  };

  return (
    <div className="flex flex-col w-full h-screen items-start relative bg-primary-background">
      {status === "loading" && <CustomLoader />}
      {status !== "loading" && (
        <div className="inline-flex flex-col items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto] w-full">
          <div
            className="flex w-full items-center gap-3 pt-0 pb-5 px-0 relative flex-[0_0_auto] border-b [border-bottom-style:solid] border-stroke"
            onClick={handleBack}
          >
            <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
              <ArrowLeft1
                className="!relative !w-[18px] !h-[18px]"
                color="#637381"
              />
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#637381] text-base tracking-[0] leading-6 whitespace-nowrap">
                {t("common.back")}
              </div>
            </div>
          </div>
          <div className="relative w-fit font-heading-6 font-[number:var(--heading-6-font-weight)] text-[#1b4f4a] text-[length:var(--heading-6-font-size)] text-center tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] whitespace-nowrap [font-style:var(--heading-6-font-style)]">
            {t("language.change")}
          </div>
          <div className="flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full">
            <div
              className="flex items-center gap-2.5 px-5 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-stroke"
              onClick={toggleDropdown}
            >
              <div className="flex items-center justify-between relative flex-1 grow">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#1b4f4a] text-base tracking-[0] leading-6 whitespace-nowrap">
                  {t(`language.${selectedLanguage}`)}
                </div>
                <ChevronDown className="!relative !w-4 !h-4" color="#1B4F4A" />
              </div>
            </div>
            {dropdownOpen && (
              <div className="absolute z-10 mt-10 w-full bg-white rounded-md shadow-lg border border-stroke">
                <div
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => selectLanguage("French")}
                >
                  {t("language.french")}
                </div>
                <div
                  className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                  onClick={() => selectLanguage("English")}
                >
                  {t("language.english")}
                </div>
              </div>
            )}
          </div>
          <div onClick={confirmLanguage} className="w-full">
            <Button
              buttonText={t("common.confirm")}
              className="!self-stretch !flex-[0_0_auto] !flex !w-full"
              color="primary"
              kind="primary"
              round="semi-round"
              state="default"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelection;
