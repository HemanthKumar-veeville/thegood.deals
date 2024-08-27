import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "../../components/Button/Button";
import { ArrowLeft1 } from "../../icons/ArrowLeft1";
import { EyeAlt4 } from "../../icons/EyeAlt4";
import { Pencil } from "../../icons/Pencil";
import { PencilAlt } from "../../icons/PencilAlt";
import { Rectangle5095_1 } from "../../images";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchUserProfile,
  updateUserProfile,
} from "../../redux/app/account/accountSlice";

const EditProfile = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { profile: fetchedProfile, status } = useSelector(
    (state) => state.account
  );

  const [profile, setProfile] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    password: "*******************",
    address: "",
    additionalAddress: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const [editField, setEditField] = useState(null);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchUserProfile());
    }
  }, [dispatch, status]);

  useEffect(() => {
    if (fetchedProfile) {
      setProfile(fetchedProfile);
    }
  }, [fetchedProfile]);

  const handleBack = () => {
    navigate("/settings");
  };

  const handleEdit = (field) => {
    setEditField(field);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setEditField(null);
    dispatch(updateUserProfile(profile));
  };

  const renderField = (fieldName, value, type = "text", placeholder = "") => {
    return editField === fieldName ? (
      <input
        name={fieldName}
        type={type}
        value={value}
        onChange={handleChange}
        onBlur={handleSave}
        autoFocus
        placeholder={placeholder}
        className="relative w-full mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-darkdark-5 text-base tracking-[0] leading-6 focus:outline-none"
      />
    ) : (
      <div
        className="relative w-full mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-darkdark-5 text-base tracking-[0] leading-6 whitespace-nowrap"
        onClick={() => handleEdit(fieldName)}
      >
        {value}
      </div>
    );
  };

  return (
    <div className="flex flex-col w-[360px] items-start relative bg-primary-background">
      <div className="flex flex-col w-[360px] items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]">
        <div
          className="flex w-[290px] items-center gap-3 pt-0 pb-5 px-0 relative flex-[0_0_auto] border-b [border-bottom-style:solid] border-stroke cursor-pointer"
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
          {t("profile.my_account")} ✏️
        </div>
        <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex items-center gap-[15px] relative flex-[0_0_auto]">
            <img
              className="relative w-[50px] h-[50px] object-cover"
              alt="Rectangle"
              src={Rectangle5095_1}
            />
          </div>
          <div className="inline-flex items-center justify-center gap-1.5 px-3 py-[5px] relative flex-[0_0_auto] bg-[#1b4f4a] rounded-[5px]">
            <PencilAlt className="!relative !w-3.5 !h-3.5" color="white" />
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[0] leading-[22px] whitespace-nowrap">
              {t("profile.change_profile_picture")}
            </div>
          </div>
        </div>
        <div className="relative w-fit font-body-large-medium font-[number:var(--body-large-medium-font-weight)] text-[#1b4f4a] text-[length:var(--body-large-medium-font-size)] text-center tracking-[var(--body-large-medium-letter-spacing)] leading-[var(--body-large-medium-line-height)] whitespace-nowrap [font-style:var(--body-large-medium-font-style)]">
          {t("profile.your_information")}
        </div>
        <div
          className="flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full cursor-pointer"
          onClick={() => handleEdit("firstName")}
        >
          <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
            <div className="flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-stroke">
              <div className="flex items-center justify-between relative flex-1 grow">
                {renderField(
                  "firstName",
                  profile.firstName,
                  "text",
                  t("profile.first_name_placeholder")
                )}
                <Pencil className="!relative !w-4 !h-4" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full cursor-pointer"
          onClick={() => handleEdit("lastName")}
        >
          <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
            <div className="flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-stroke">
              <div className="flex items-center justify-between relative flex-1 grow">
                {renderField(
                  "lastName",
                  profile.lastName,
                  "text",
                  t("profile.last_name_placeholder")
                )}
                <Pencil className="!relative !w-4 !h-4" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full cursor-pointer"
          onClick={() => handleEdit("phone")}
        >
          <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
            <div className="flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-stroke">
              <div className="flex items-center justify-between relative flex-1 grow">
                {renderField(
                  "phone",
                  profile.phone,
                  "text",
                  t("profile.phone_placeholder")
                )}
                <Pencil className="!relative !w-4 !h-4" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full cursor-pointer"
          onClick={() => handleEdit("email")}
        >
          <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
            <div className="flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-stroke">
              <div className="flex items-center justify-between relative flex-1 grow">
                {renderField(
                  "email",
                  profile.email,
                  "text",
                  t("profile.email_placeholder")
                )}
                <Pencil className="!relative !w-4 !h-4" />
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full cursor-pointer"
          onClick={() => handleEdit("password")}
        >
          <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
            <div className="flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-stroke">
              <div className="flex items-center justify-between relative flex-1 grow">
                {renderField(
                  "password",
                  profile.password,
                  "password",
                  t("profile.password_placeholder")
                )}
                <EyeAlt4 className="!relative !w-4 !h-4" />
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col h-20 items-start gap-[5px] relative self-stretch w-full cursor-pointer"
          onClick={() => handleEdit("address")}
        >
          <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
            <div className="flex w-[250px] items-start gap-2.5 relative flex-[0_0_auto]">
              <div className="font-[number:var(--body-small-medium-font-weight)] relative w-fit mt-[-1.00px] font-body-small-medium text-[#1b4f4a] text-[length:var(--body-small-medium-font-size)] tracking-[var(--body-small-medium-letter-spacing)] leading-[var(--body-small-medium-line-height)] whitespace-nowrap [font-style:var(--body-small-medium-font-style)]">
                {t("profile.address")} ({t("profile.required")})
              </div>
            </div>
            <div
              className="flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full cursor-pointer"
              onClick={() => handleEdit("address")}
            >
              <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
                <div className="flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-stroke">
                  <div className="flex items-center justify-between relative flex-1 grow">
                    {renderField(
                      "address",
                      profile.address,
                      "text",
                      t("profile.address_placeholder")
                    )}
                    <Pencil className="!relative !w-4 !h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col h-20 items-start gap-[5px] relative self-stretch w-full cursor-pointer"
          onClick={() => handleEdit("additionalAddress")}
        >
          <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
            <div className="flex w-[250px] items-start gap-2.5 relative flex-[0_0_auto]">
              <div className="font-normal relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] text-[#1b4f4a] text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                {t("profile.additional_address")}
              </div>
            </div>
            <div
              className="flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full cursor-pointer"
              onClick={() => handleEdit("address")}
            >
              <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
                <div className="flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-stroke">
                  <div className="flex items-center justify-between relative flex-1 grow">
                    {renderField(
                      "additionalAddress",
                      profile.additionalAddress,
                      "text",
                      t("profile.additional_address_placeholder")
                    )}
                    <Pencil className="!relative !w-4 !h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col h-20 items-start gap-[5px] relative self-stretch w-full cursor-pointer"
          onClick={() => handleEdit("city")}
        >
          <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
            <div className="flex w-[250px] items-start gap-2.5 relative flex-[0_0_auto]">
              <div className="font-[number:var(--body-small-medium-font-weight)] relative w-fit mt-[-1.00px] font-body-small-medium text-[#1b4f4a] text-[length:var(--body-small-medium-font-size)] tracking-[var(--body-small-medium-letter-spacing)] leading-[var(--body-small-medium-line-height)] whitespace-nowrap [font-style:var(--body-small-medium-font-style)]">
                {t("profile.city")} ({t("profile.required")})
              </div>
            </div>
            <div
              className="flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full cursor-pointer"
              onClick={() => handleEdit("address")}
            >
              <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
                <div className="flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-stroke">
                  <div className="flex items-center justify-between relative flex-1 grow">
                    {renderField(
                      "city",
                      profile.city,
                      "text",
                      t("profile.city_placeholder")
                    )}
                    <Pencil className="!relative !w-4 !h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col h-20 items-start gap-[5px] relative self-stretch w-full cursor-pointer"
          onClick={() => handleEdit("postalCode")}
        >
          <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
            <div className="flex w-[250px] items-start gap-2.5 relative flex-[0_0_auto]">
              <div className="font-[number:var(--body-small-medium-font-weight)] relative w-fit mt-[-1.00px] font-body-small-medium text-[#1b4f4a] text-[length:var(--body-small-medium-font-size)] tracking-[var(--body-small-medium-letter-spacing)] leading-[var(--body-small-medium-line-height)] whitespace-nowrap [font-style:var(--body-small-medium-font-style)]">
                {t("profile.postal_code")} ({t("profile.required")})
              </div>
            </div>
            <div
              className="flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full cursor-pointer"
              onClick={() => handleEdit("postalCode")}
            >
              <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
                <div className="flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-stroke">
                  <div className="flex items-center justify-between relative flex-1 grow">
                    {renderField(
                      "postalCode",
                      profile.postalCode,
                      "text",
                      t("profile.postal_code_placeholder")
                    )}
                    <Pencil className="!relative !w-4 !h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="flex flex-col h-20 items-start gap-[5px] relative self-stretch w-full cursor-pointer"
          onClick={() => handleEdit("country")}
        >
          <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
            <div className="flex w-[250px] items-start gap-2.5 relative flex-[0_0_auto]">
              <div className="font-[number:var(--body-small-medium-font-weight)] relative w-fit mt-[-1.00px] font-body-small-medium text-[#1b4f4a] text-[length:var(--body-small-medium-font-size)] tracking-[var(--body-small-medium-letter-spacing)] leading-[var(--body-small-medium-line-height)] whitespace-nowrap [font-style:var(--body-small-medium-font-style)]">
                {t("profile.country")} ({t("profile.required")})
              </div>
            </div>
            <div className="flex items-center gap-[116px] relative flex-1 grow">
              {renderField(
                "country",
                profile.country,
                "text",
                t("profile.country_placeholder")
              )}
            </div>
          </div>
        </div>
        <div onClick={handleSave} className="w-full">
          <Button
            buttonText={t("profile.confirm_changes")}
            className="!self-stretch !flex-[0_0_auto] !flex !w-full"
            color="primary"
            kind="primary"
            round="semi-round"
            state="default"
          />
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
