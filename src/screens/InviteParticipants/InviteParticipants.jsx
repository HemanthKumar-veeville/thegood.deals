import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDealValidationDetails } from "../../redux/app/deals/dealSlice";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { Box44 } from "../../icons/Box44";
import { ClockAlt11 } from "../../icons/ClockAlt11";
import { CrossCircle } from "../../icons/CrossCircle";
import { DeliveryTruck4 } from "../../icons/DeliveryTruck4";
import { Map } from "../../icons/Map";
import { Send1 } from "../../icons/Send1";
import { VerticalLine2 } from "../../icons/VerticalLine2";
import { RatingStar } from "../../components/RatingStar";
import { blogImage, Human } from "../../images";
import { useNavigate, useLocation } from "react-router-dom";
import CustomLoader from "../../components/CustomLoader/CustomLoader";
import { createRequest } from "../../redux/app/requests/requestSlice";
import { validationByArtisan } from "../../redux/app/deals/dealSlice";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import { ClockAlt13 } from "../../icons/ClockAlt13";
import { Access } from "../../components/Access/Access";
import { Line } from "../../components/Line/Line";
import { UserAlt } from "../../icons/UserAlt";
import { ShowCustomErrorModal } from "../../components/ErrorAlert/ErrorAlert";
import { ShowCustomSuccessModal } from "../../components/ShowCustomSuccessModal/ShowCustomSuccessModal";
import {
  calculateDaysBetweenDates,
  formatDateReversed,
  formatDate,
} from "../../helpers/helperMethods";

export const InviteParticipants = ({
  HEADERIcon = (
    <VerticalLine2 className="!relative !w-6 !h-6" color="#1B4F4A" />
  ),
  HEADERHeaderOpenClassName,
}) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { deal, status, error } = useSelector((state) => state.deals);
  const queryParams = new URLSearchParams(location.search);
  const dealId = queryParams.get("deal_id");
  const is_request_sent = queryParams.get("is_request_sent");
  const dealState = deal?.Deal;
  const pathLocation = useLocation();
  const pathname = pathLocation?.pathname;
  const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isRequestSent, setIsRequestSent] = useState(is_request_sent || false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    dispatch(fetchDealValidationDetails(dealId));
  }, [dispatch, dealId]);

  const handleRefuse = () => {
    navigate(`/deal-refused?deal_id=${dealId}`);
  };

  const handleConfirm = async (dealId) => {
    const formData = { status: "accept", reason_for_refusal: "" };

    try {
      // Dispatch the async thunk with formData as the dealUpdate
      const resultAction = await dispatch(
        validationByArtisan({ dealId, dealUpdate: formData })
      );
      console.log("resultAction", resultAction);
      // Check if the thunk was fulfilled
      if (validationByArtisan.fulfilled.match(resultAction)) {
        // Navigate to the confirmation page
        navigate("/deal-confirmed");
      } else {
        // Handle any validation errors here
        console.error("Validation failed:", resultAction.payload);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleAcceptRequest = async () => {
    try {
      const response = await dispatch(createRequest(dealId)).unwrap();
      console.log({ response });
      if (response?.detail === "Request created successfully") {
        setIsSuccess(true);
        setIsRequestSent(true);
      } else if (response?.is_user_logged_in === false) {
        navigate("/auth?signin");
      }
    } catch (error) {
      setErrorMessage(error?.detail || t("errors.request_failed"));
      setIsError(true);
    }
  };

  const handleAccept = () => {
    handleAcceptRequest();
  };

  const handleIgnore = () => {
    navigate("/");
  };

  if (status === "loading") {
    return <CustomLoader />;
  }

  return (
    <div className="flex flex-col w-full items-start relative bg-primary-background">
      {isError && (
        <ShowCustomErrorModal
          message={errorMessage}
          buttonText={t("waiting_deal.got_it")}
          onClose={() => setIsError(false)}
        />
      )}
      {isSuccess && (
        <ShowCustomSuccessModal
          message={"Once the organizer confirms, you will be able to order."}
          buttonText={t("waiting_deal.got_it")}
          onClose={() => setIsSuccess(false)} // Reset modal state on close
        />
      )}
      <div className="flex-col w-full items-start gap-[15px] px-[35px] py-[15px] flex relative flex-[0_0_auto]">
        <ImageSlider pictures={dealState?.deal_images || [blogImage]} />
        <p className="relative self-stretch font-heading-6 font-[number:var(--heading-6-font-weight)] text-primary-color text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] [font-style:var(--heading-6-font-style)]">
          {dealState?.deal_title || "-"}
        </p>
        <div className="flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
            <ClockAlt11 className="!relative !w-5 !h-5" color="#1B4F4A" />
            <p className="relative w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]">
              {t("artisanConfirmThe.deal_duration", {
                start_date: formatDateReversed(
                  dealState?.deal_start_date || "2024-12-08",
                  "fr-FR"
                ),
                end_date: formatDateReversed(
                  dealState?.deal_end_date || "2024-12-08",
                  "fr-FR"
                ),
                days: calculateDaysBetweenDates(
                  dealState?.deal_start_date,
                  dealState?.deal_end_date
                ),
              })}
            </p>
          </div>
        </div>
        <div className="flex self-stretch w-full items-center gap-2.5 relative flex-[0_0_auto]">
          <Map className="!relative !w-5 !h-5" />
          <p className="relative w-full font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] break-words [font-style:var(--body-small-regular-font-style)]">
            {dealState?.collection_location || "-"}
          </p>
        </div>
        <Line />
        <div className="inline-flex items-center gap-[15px] relative flex-[0_0_auto]">
          {dealState?.organiser?.organiser_image ? (
            <img
              className="relative w-[50px] h-[50px] object-cover rounded-md"
              alt="Organizer"
              src={dealState?.organiser?.organiser_image}
            />
          ) : (
            <UserAlt />
          )}
          <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]">
              {t("artisanConfirmThe.organized_by")}
            </div>
            <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap">
              {dealState?.organiser.name ||
                t("artisanConfirmThe.organizer_name")}
            </div>
            <div className="inline-flex h-5 items-center gap-2.5 relative">
              <RatingStar
                className="!flex-[0_0_auto]"
                rating={dealState?.organiser.rating || "four-star"}
                size="small"
              />
            </div>
          </div>
        </div>
        <div className="relative self-stretch font-body-large-bold font-[number:var(--body-large-bold-font-weight)] text-primary-color text-[length:var(--body-large-bold-font-size)] tracking-[var(--body-large-bold-letter-spacing)] leading-[var(--body-large-bold-line-height)] [font-style:var(--body-large-bold-font-style)]">
          {t("artisanConfirmThe.about_deal")}
        </div>
        <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-transparent text-base tracking-[0] leading-6">
          <span className="text-[#637381] font-body-medium-regular [font-style:var(--body-medium-regular-font-style)] font-[number:var(--body-medium-regular-font-weight)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] text-[length:var(--body-medium-regular-font-size)]">
            {dealState?.deal_description ||
              t("artisanConfirmThe.deal_description")}
          </span>
          <span className="font-bold text-[#1b4f4a] underline">
            {t("artisanConfirmThe.read_more")}
          </span>
        </p>
        <Line />
        <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <Box44 className="!relative !w-5 !h-5" />
          <p className="relative w-fit mt-[-1.00px] font-body-large-bold font-[number:var(--body-large-bold-font-weight)] text-primary-color text-[length:var(--body-large-bold-font-size)] tracking-[var(--body-large-bold-letter-spacing)] leading-[var(--body-large-bold-line-height)] whitespace-nowrap [font-style:var(--body-large-bold-font-style)]">
            {t("artisanConfirmThe.what_customers_receive")}
          </p>
        </div>
        <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-transparent text-base tracking-[0] leading-6">
          <span className="text-[#637381] font-body-medium-regular [font-style:var(--body-medium-regular-font-style)] font-[number:var(--body-medium-regular-font-weight)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] text-[length:var(--body-medium-regular-font-size)]">
            {dealState?.content_description || "-"}
          </span>
          <span className="font-bold text-[#1b4f4a] underline">
            {t("artisanConfirmThe.read_more")}
          </span>
        </p>
        <Line />
        <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <Box44 className="!relative !w-5 !h-5" />
          <p className="relative w-fit mt-[-1.00px] font-body-large-bold font-[number:var(--body-large-bold-font-weight)] text-primary-color text-[length:var(--body-large-bold-font-size)] tracking-[var(--body-large-bold-letter-spacing)] leading-[var(--body-large-bold-line-height)] whitespace-nowrap [font-style:var(--body-large-bold-font-style)]">
            {t("artisanConfirmThe.delivery_info")}
          </p>
        </div>
        <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <ClockAlt11 className="!relative !w-5 !h-5" color="#1B4F4A" />
          <p className="relative w-fit mt-[-1.00px] font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-primary-text-color text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] [font-style:var(--body-medium-regular-font-style)]">
            {formatDate(dealState?.collection_date || "2024-12-08", "fr") ||
              "-"}
          </p>
        </div>
        <div className="flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <DeliveryTruck4 className="!relative !w-5 !h-5" color="#1B4F4A" />
          <p className="relative flex-1 mt-[-1.00px] font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-transparent text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] [font-style:var(--body-medium-regular-font-style)]">
            <span className="text-[#1b4f4a] font-body-medium-regular [font-style:var(--body-medium-regular-font-style)] font-[number:var(--body-medium-regular-font-weight)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] text-[length:var(--body-medium-regular-font-size)]">
              {dealState?.collection_location || "-"}
            </span>
          </p>
        </div>
        <Access
          isUserLoggedIn={isUserLoggedIn}
          handleAccept={handleAccept}
          isRequestSent={isRequestSent}
        />
      </div>
    </div>
  );
};

export default InviteParticipants;
