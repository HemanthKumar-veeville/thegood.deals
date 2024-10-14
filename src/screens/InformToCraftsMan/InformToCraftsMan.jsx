import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ArrowRight } from "../../icons/ArrowRight";
import { CirclePlus55 } from "../../icons/CirclePlus55";
import { Envelope } from "../../icons/Envelope";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { inviteArtisan } from "../../redux/app/deals/dealSlice";
import CustomLoader from "../../components/CustomLoader/CustomLoader"; // Assuming you have a CustomLoader component
import { ShowCustomErrorModal } from "../../components/ErrorAlert/ErrorAlert";
import { Line } from "../../components/Line/Line";

const InformToCraftsMan = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false); // State to manage loading
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { status, error } = useSelector((state) => state.deals);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [searchParams] = useSearchParams();
  const dealId = searchParams.get("id"); // Get the 'id' from the URL

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const validateEmail = (email) => {
    if (!email) {
      return t("inform_craftsman.errors.email_empty");
    }
    if (!email.includes("@")) {
      return t("inform_craftsman.errors.invalid_at_symbol");
    }
    const parts = email.split("@");
    if (parts.length !== 2 || !parts[1].includes(".")) {
      return t("inform_craftsman.errors.invalid_domain");
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return t("inform_craftsman.errors.invalid_format");
    }
    return null; // Return null if no validation errors
  };

  const handleSubmit = async () => {
    const validationError = validateEmail(email);
    if (validationError) {
      setIsError(true);
      setErrorMessage(validationError);
      return;
    }

    if (!dealId) {
      setIsError(true);
      setErrorMessage(t("inform_craftsman.errors.deal_id_missing_message"));
      return;
    }

    try {
      setLoading(true); // Start loading
      await dispatch(inviteArtisan({ dealId, email })).unwrap();
      setEmail(""); // Clear the email input
      navigate("/thanks-admin");
    } catch (err) {
      console.error("Failed to invite artisan:", err);
      setIsError(true);
      setErrorMessage(t("inform_craftsman.errors.invitation_failed_message"));
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleFinishLater = () => {
    navigate(`/admin-draft-deal?deal_id=${dealId}`);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col w-full h-screen items-start relative bg-primary-background mx-auto">
      {isError && (
        <ShowCustomErrorModal
          message={errorMessage}
          buttonText={t("waiting_deal.got_it")}
          onClose={() => setIsError(false)} // Reset modal state on close
        />
      )}
      {loading && <CustomLoader />} {/* Show loader when loading is true */}
      {!loading && (
        <div className="flex-col w-full items-start gap-[15px] px-[35px] py-[15px] flex-[0_0_auto] flex relative">
          <p className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-primary-color text-2xl tracking-[0] leading-[30px]">
            {t("inform_craftsman.confirm_deal_title")}
          </p>
          <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-base tracking-[0] leading-6">
            {t("inform_craftsman.confirm_deal_message")}
          </p>
          <Line />
          <p className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap">
            {t("inform_craftsman.indicate_email")}
          </p>
          <div className="flex h-[46px] items-center gap-2.5 pl-5 pr-4 py-3 relative self-stretch w-full bg-whitewhite rounded-md border border-solid border-stroke">
            <Envelope className="!relative !w-4 !h-4" color="#6B7280" />
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder={t("inform_craftsman.email_placeholder")}
              className="flex-1 border-none outline-none"
            />
          </div>
          <div
            className="flex items-center justify-center gap-2.5 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-primary-color rounded-md cursor-pointer"
            onClick={handleSubmit}
          >
            <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-whitewhite text-base text-center tracking-[0] leading-6 whitespace-nowrap">
              {t("inform_craftsman.send_to_artisan")}
            </button>
            <ArrowRight className="!relative !w-5 !h-5" color="white" />
          </div>
          <Line />
          <div
            className="flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] rounded-md border border-solid border-primary-color cursor-pointer"
            onClick={handleFinishLater}
          >
            <CirclePlus55 className="!relative !w-5 !h-5" color="#1B4F4A" />
            <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap">
              {t("inform_craftsman.finish_later")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default InformToCraftsMan;
