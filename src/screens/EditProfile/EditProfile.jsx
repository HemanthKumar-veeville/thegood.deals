import React, { useState, useEffect, useCallback } from "react";
import { Button } from "../../components/Button/Button";
import { ArrowLeft1 } from "../../icons/ArrowLeft1";
import { EyeAlt4 } from "../../icons/EyeAlt4";
import { Pencil } from "../../icons/Pencil";
import { PencilAlt } from "../../icons/PencilAlt";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import {
  fetchUserProfile,
  updateUserProfile,
} from "../../redux/app/account/accountSlice";
import { ChevronDown } from "../../icons/ChevronDown";
import { UserAlt } from "../../icons/UserAlt";
import { useTranslation } from "react-i18next"; // Import useTranslation for localization
import { ShowCustomErrorModal } from "../../components/ErrorAlert/ErrorAlert";
import { ShowCustomSuccessModal } from "../../components/ShowCustomSuccessModal/ShowCustomSuccessModal";
import CustomLoader from "../../components/CustomLoader/CustomLoader";
import { NameDropdown } from "../../components/CountryNameDropDown";

const EditProfile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { profile: fetchedProfile, status } = useSelector(
    (state) => state.account
  );
  const { t } = useTranslation(); // Initialize the translation hook
  const [fileUploaded, setFileUploaded] = useState(null);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [serverMessage, setServerMessage] = useState("");
  const [selectedCode, setSelectedCode] = useState(null);

  const initialProfileState = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    currentPassword: "",
    newPassword: "",
    language: "English", // Default language state
    address: "",
    additionalAddress: "",
    city: "",
    postalCode: "",
    country: "",
    profilepicture: "",
  };

  const formik = useFormik({
    initialValues: {
      country: selectedCode || "",
    },
    enableReinitialize: true,
    onSubmit: async (values) => {
      try {
        const res = await dispatch(
          updateUserProfile({ country: values.country })
        );

        if (res?.payload?.detail) {
          throw new Error(res.payload.detail);
        } else {
          const refetchRes = await dispatch(fetchUserProfile());
          if (refetchRes?.payload?.detail) {
            throw new Error(refetchRes.payload.detail);
          }
        }

        setShowSuccessModal(true);
        setServerMessage(t("edit_profile.success"));
      } catch (error) {
        setShowErrorModal(true);
        setServerMessage(t("edit_profile.error"));
      }
    },
  });

  const [profile, setProfile] = useState(initialProfileState);
  const [editField, setEditField] = useState(null);
  const [showPassword, setShowPassword] = useState({
    current: false,
    new: false,
  });

  // Fetching user profile on mount
  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

  // Setting profile once fetched
  useEffect(() => {
    if (fetchedProfile?.data) {
      const {
        first_name,
        last_name,
        phone,
        email,
        address,
        addl_address,
        city,
        postal_code,
        country,
        profile_picture,
        language,
      } = fetchedProfile.data;

      setProfile({
        firstName: first_name || "",
        lastName: last_name || "",
        phone: phone || "",
        email: email || "",
        currentPassword: "",
        newPassword: "",
        language: language || "French",
        address: address || "",
        additionalAddress: addl_address || "",
        city: city || "",
        postalCode: postal_code || "",
        country: country || "",
        profilepicture: profile_picture || "",
      });
    }
  }, [fetchedProfile]);

  const handleBack = useCallback(() => {
    navigate("/settings");
  }, [navigate]);

  const handleEdit = (field) => setEditField(field);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  const handleSave = useCallback(async () => {
    try {
      setEditField(null);

      // Call updateUserProfile and check response
      const res = await dispatch(
        updateUserProfile({ ...profile, profilepicture: fileUploaded })
      );

      // Check if there's an error in the response
      if (res?.payload?.detail) {
        console.log({ error: res.payload.detail });
        throw new Error(res.payload.detail); // Explicitly throw the error
      } else {
        const res = await dispatch(fetchUserProfile());
        if (res?.payload?.detail) {
          console.log({ error: res.payload.detail });
          throw new Error(res.payload.detail); // Explicitly throw the error
        }
      }

      // If no error, show success modal
      setShowSuccessModal(true);
      console.log("success");
    } catch (error) {
      // Check if error is an object, and convert it to a string if necessary
      const errorMessage =
        typeof error === "object" ? t("edit_profile.error") : error;

      // Show error modal when an error is caught
      setShowErrorModal(true);
      setServerMessage(errorMessage); // Use the stringified or raw error message
      console.log(errorMessage);
    }
  }, [dispatch, profile, fileUploaded]);

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFileUploaded(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfile((prevProfile) => ({
          ...prevProfile,
          profilepicture: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const togglePasswordVisibility = (field) => {
    setShowPassword((prevState) => ({
      ...prevState,
      [field]: !prevState[field],
    }));
  };

  const renderField = (fieldName, value, type = "text", placeholder = "") =>
    editField === fieldName ? (
      <input
        name={fieldName}
        type={type}
        value={value || ""}
        onChange={handleChange} // Update state but no API call here
        autoFocus
        placeholder={placeholder}
        className="relative w-full mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-darkdark-5 text-base tracking-[0] leading-6 focus:outline-none"
      />
    ) : (
      <div
        className="relative w-full mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-darkdark-5 text-base tracking-[0] leading-6 whitespace-nowrap"
        onClick={() => handleEdit(fieldName)}
      >
        {value || ""}
      </div>
    );

  return (
    <div className="flex flex-col w-full items-start relative bg-primary-background">
      {status === "loading" && <CustomLoader />}
      {status !== "loading" && (
        <div className="flex flex-col w-full items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]">
          <div
            className="flex w-full items-center gap-3 pt-0 pb-5 px-0 relative flex-[0_0_auto] border-b [border-bottom-style:solid] border-stroke cursor-pointer"
            onClick={handleBack}
          >
            <ArrowLeft1
              className="!relative !w-[18px] !h-[18px]"
              color="#637381"
            />
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#637381] text-base tracking-[0] leading-6 whitespace-nowrap">
              {t("edit_profile.back")}
            </div>
          </div>
          <div className="relative w-fit font-heading-6 font-[number:var(--heading-6-font-weight)] text-[#1b4f4a] text-[length:var(--heading-6-font-size)] text-center tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] whitespace-nowrap [font-style:var(--heading-6-font-style)]">
            {t("edit_profile.title")}
          </div>
          <div className="flex items-center justify-start relative self-stretch w-full flex-[0_0_auto] gap-[15px]">
            <div className="inline-flex items-center gap-[15px] relative flex-[0_0_auto]">
              {profile?.profilepicture === "" ? (
                <UserAlt />
              ) : (
                <img
                  className="relative w-[50px] h-[50px] object-cover rounded-lg"
                  alt="Profile"
                  src={profile.profilepicture}
                />
              )}
            </div>
            {showErrorModal && (
              <ShowCustomErrorModal
                message={serverMessage}
                buttonText={t("waiting_deal.got_it")}
                onClose={() => setShowErrorModal(true)} // Reset modal state on close
              />
            )}
            {showSuccessModal && (
              <ShowCustomSuccessModal
                message={serverMessage}
                buttonText={t("waiting_deal.got_it")}
                onClose={() => setShowSuccessModal(false)} // Reset modal state on close
              />
            )}
            <div className="inline-flex items-center justify-center gap-1.5 px-3 py-[5px] relative flex-[0_0_auto] bg-[#1b4f4a] rounded-[5px]">
              <PencilAlt className="!relative !w-3.5 !h-3.5" color="white" />
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                {t("edit_profile.change_profile_picture")}
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handlePhotoChange}
                className="absolute inset-0 opacity-0 cursor-pointer"
              />
            </div>
          </div>

          <div className="relative w-fit font-body-large-medium font-[number:var(--body-large-medium-font-weight)] text-[#1b4f4a] text-[length:var(--body-large-medium-font-size)] text-center tracking-[var(--body-large-medium-letter-spacing)] leading-[var(--body-large-medium-line-height)] whitespace-nowrap [font-style:var(--body-large-medium-font-style)]">
            {t("edit_profile.your_information")}
          </div>

          {[
            { name: "firstName", label: t("edit_profile.first_name") },
            { name: "lastName", label: t("edit_profile.last_name") },
            { name: "phone", label: t("edit_profile.phone") },
            { name: "email", label: t("edit_profile.email") },
          ].map(({ name, label }) => (
            <div
              key={name}
              className="flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full cursor-pointer"
              onClick={() => handleEdit(name)}
            >
              <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
                <div className="flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-stroke">
                  <div className="flex items-center justify-between relative flex-1 grow">
                    {renderField(name, profile[name], "text", label)}
                    <Pencil className="!relative !w-4 !h-4" />
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full">
            <div className="relative w-full">
              <select
                name="language"
                value={profile.language}
                onChange={handleChange}
                className="w-full pl-5 pr-10 py-3 bg-white rounded-md border border-solid border-stroke text-darkdark-5 text-base font-normal focus:outline-none appearance-none"
              >
                <option value="French">French</option>
                <option value="English">English</option>
              </select>
              <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
                <ChevronDown className="!relative !w-4 !h-4" />
              </div>
            </div>
          </div>

          <div className="relative w-fit font-body-large-medium font-[number:var(--body-large-medium-font-weight)] text-[#1b4f4a] text-[length:var(--body-large-medium-font-size)] text-center tracking-[var(--body-large-medium-letter-spacing)] leading-[var(--body-large-medium-line-height)] whitespace-nowrap [font-style:var(--body-large-medium-font-style)]">
            {t("edit_profile.your_address")}
          </div>

          {[
            {
              name: "address",
              label: t("edit_profile.address"),
              heading: t("edit_profile.address"),
            },
            {
              name: "additionalAddress",
              label: t("edit_profile.additional_address"),
              heading: t("edit_profile.additional_address"),
            },
            {
              name: "city",
              label: t("edit_profile.city"),
              heading: t("edit_profile.city"),
            },
            {
              name: "postalCode",
              label: t("edit_profile.postal_code"),
              heading: t("edit_profile.postal_code"),
            },
          ].map(({ name, label, heading }) => (
            <div
              key={name}
              className="flex flex-col h-20 items-start gap-[5px] relative self-stretch w-full cursor-pointer"
            >
              <div className="flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow">
                <div className="flex w-full items-start gap-2.5 relative flex-[0_0_auto]">
                  <div className="font-[number:var(--body-small-medium-font-weight)] relative w-fit mt-[-1.00px] font-body-small-medium text-[#1b4f4a] text-[length:var(--body-small-medium-font-size)] tracking-[var(--body-small-medium-letter-spacing)] leading-[var(--body-small-medium-line-height)] [font-style:var(--body-small-medium-font-style)]">
                    {heading}{" "}
                    {name !== "additionalAddress" && t("edit_profile.required")}
                  </div>
                </div>
                <div
                  className="flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full"
                  onClick={() => handleEdit(name)}
                >
                  <div className="flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-stroke">
                    <div className="flex items-center justify-between relative flex-1 grow">
                      {renderField(name, profile[name], "text", label)}
                      <Pencil className="!relative !w-4 !h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="flex h-12 items-start gap-[5px] relative self-stretch !w-full">
            <NameDropdown
              id="country"
              name="country"
              selectedCode={selectedCode}
              setSelectedCode={setSelectedCode}
              formik={formik}
            />
          </div>
          <div onClick={handleSave} className="w-full">
            <Button
              buttonText={t("edit_profile.confirm_changes")}
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

export default EditProfile;
