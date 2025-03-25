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
import { RatingStar } from "../RatingStar";
import { blogImage, Human } from "../../images";
import { useNavigate, useLocation } from "react-router-dom";
import CustomLoader from "../CustomLoader/CustomLoader";
import { createRequest } from "../../redux/app/requests/requestSlice";
import { validationByArtisan } from "../../redux/app/deals/dealSlice";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import { UserAlt } from "../../icons/UserAlt";
import { Line } from "../Line/Line";
import { onboardStripeAccount } from "../../helpers/helperMethods";
import { ShowCustomErrorModal } from "../ErrorAlert/ErrorAlert";
import { InfoCircle8 } from "../../icons/InfoCircle8/InfoCircle8";
import { calculateDaysBetweenDates } from "../../helpers/helperMethods";
import { formatDateReversed, formatDate } from "../../helpers/helperMethods";
import ReadMore from "../Readmore/Readmore";
import { getVisitorId } from "../../utils/fingerprint";

export const ArtisanConfirmThe = ({
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
  const dealState = deal?.Deal;
  const pathLocation = useLocation();
  const pathname = pathLocation?.pathname;
  const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [accountId, setAccountId] = useState(null);
  const [visitorId, setVisitorId] = useState("");
  useEffect(() => {
    const fetchVisitorId = async () => {
      const visitorId = await getVisitorId();
      setVisitorId(visitorId);
    };
    fetchVisitorId();
    const fetchDetails = async () => {
      const details = await dispatch(
        fetchDealValidationDetails({ dealId, visitorId })
      ).unwrap();
      setAccountId(details?.Deal?.artisan_acc_id);
    };
    fetchDetails();
  }, [dispatch, dealId, visitorId]);

  const handleRefuse = () => {
    navigate(`/deal-refused?deal_id=${dealId}`);
  };

  const handleConfirm = async (dealId) => {
    const formData = { status: "accept", reason_for_refusal: "" };

    try {
      const resultAction = await dispatch(
        validationByArtisan({ dealId, dealUpdate: formData })
      );
      if (validationByArtisan.fulfilled.match(resultAction)) {
        const refreshUrl = `https://thegood.deals/artisan-validation?deal_id=${dealId}`;
        const returnUrl = `https://thegood.deals/deal-confirmed`;
        await onboardStripeAccount({ accountId, refreshUrl, returnUrl });
      } else {
        console.error("Validation failed:", resultAction.payload);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  const handleAcceptRequest = async () => {
    try {
      const response = await dispatch(createRequest(dealId));
      if (response.payload.code === 201) {
        navigate("/request-sent");
      } else {
        setIsError(true);
        setErrorMessage(
          response.payload.detail || t("artisanConfirmThe.error_login_required")
        );
        navigate("/auth?login");
      }
    } catch (error) {
      setIsError(true);
      setErrorMessage(t("artisanConfirmThe.error_request_failed"));
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
      <div className="flex-col w-full items-start gap-[15px] px-[15px] py-[15px] flex relative flex-[0_0_auto]">
        {isError && (
          <ShowCustomErrorModal
            message={errorMessage}
            buttonText={t("waiting_deal.got_it")}
            onClose={() => setIsError(false)} // Reset modal state on close
          />
        )}
        {pathname !== "/deal_details" && (
          <>
            <p className="relative self-stretch mt-[-1.00px] font-heading-6 font-[number:var(--heading-6-font-weight)] text-primary-color text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] [font-style:var(--heading-6-font-style)]">
              {t("artisanConfirmThe.thank_you")}
            </p>
            <p className="relative self-stretch font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-primary-text-color text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] [font-style:var(--body-medium-regular-font-style)]">
              {t("artisanConfirmThe.confirmation_notice")}
            </p>
            <Line />
          </>
        )}
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
          {dealState?.organiser?.organiser_image && (
            <img
              className="relative w-[50px] h-[50px] object-cover rounded-md"
              alt="Organizer"
              src={dealState?.organiser?.organiser_image}
            />
          )}
          {!dealState?.organiser?.organiser_image && <UserAlt />}
          <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]">
              {t("artisanConfirmThe.organized_by")}
            </div>
            <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap">
              {dealState?.organiser.name || "-"}
            </div>
            <div className="inline-flex h-5 items-center gap-2.5 relative">
              <RatingStar
                className="!flex-[0_0_auto]"
                rating={
                  dealState?.organiser.rating ||
                  t("artisanConfirmThe.organizer_rating")
                }
                size="small"
              />
            </div>
          </div>
        </div>
        <div className="relative self-stretch font-body-large-bold font-[number:var(--body-large-bold-font-weight)] text-primary-color text-[length:var(--body-large-bold-font-size)] tracking-[var(--body-large-bold-letter-spacing)] leading-[var(--body-large-bold-line-height)] [font-style:var(--body-large-bold-font-style)]">
          {t("artisanConfirmThe.about_deal")}
        </div>
        <ReadMore
          description={dealState?.deal_description || "-"}
          readMoreText={t("artisanConfirmThe.read_more")}
          readLessText={t("artisanConfirmThe.read_less")}
        />
        <Line />
        <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <Box44 className="!relative !w-5 !h-5" />
          <p className="relative w-fit mt-[-1.00px] font-body-large-bold font-[number:var(--body-large-bold-font-weight)] text-primary-color text-[length:var(--body-large-bold-font-size)] tracking-[var(--body-large-bold-letter-spacing)] leading-[var(--body-large-bold-line-height)] whitespace-nowrap [font-style:var(--body-large-bold-font-style)]">
            {t("artisanConfirmThe.what_customers_receive")}
          </p>
        </div>
        <ReadMore
          description={dealState?.content_description || "-"}
          readMoreText={t("artisanConfirmThe.read_more")}
          readLessText={t("artisanConfirmThe.read_less")}
        />
        <Line />
        <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <Box44 className="!relative !w-5 !h-5" />
          <p className="relative w-fit mt-[-1.00px] font-body-large-bold font-[number:var(--body-large-bold-font-weight)] text-primary-color text-[length:var(--body-large-bold-font-size)] tracking-[var(--body-large-bold-letter-spacing)] leading-[var(--body-large-bold-line-height)] whitespace-nowrap [font-style:var(--body-large-bold-font-style)]">
            {t("artisanConfirmThe.delivery_info")}
          </p>
        </div>
        <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <ClockAlt11 className="!relative !w-5 !h-5" color="#1B4F4A" />
          <p className="text-wrap relative w-fit mt-[-1.00px] font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-primary-text-color text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] whitespace-nowrap [font-style:var(--body-medium-regular-font-style)]">
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
        <div className="flex-col items-start gap-[15px] p-[15px] self-stretch w-full bg-white rounded-[5px] flex relative flex-[0_0_auto]">
          <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
            <Box44 className="!relative !w-5 !h-5" />
            <div className="relative w-fit mt-[-1.00px] font-body-large-bold font-[number:var(--body-large-bold-font-weight)] text-primary-color text-[length:var(--body-large-bold-font-size)] tracking-[var(--body-large-bold-letter-spacing)] leading-[var(--body-large-bold-line-height)] whitespace-nowrap [font-style:var(--body-large-bold-font-style)]">
              {t("artisanConfirmThe.good_deal")}
            </div>
          </div>
          <Line />
          {dealState?.products.map((product, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]"
            >
              <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
                <p className="relative w-fit mt-[-1.00px] font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-primary-color text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] whitespace-nowrap [font-style:var(--body-medium-regular-font-style)]">
                  {product.product_name}
                </p>
              </div>
              <div className="flex flex-col items-start justify-center gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
                <p className="relative w-fit mt-[-1.00px] font-body-small-medium font-[number:var(--body-small-medium-font-weight)] text-orange text-[length:var(--body-small-medium-font-size)] tracking-[var(--body-small-medium-letter-spacing)] leading-[var(--body-small-medium-line-height)] whitespace-nowrap [font-style:var(--body-small-medium-font-style)]">
                  {t("artisanConfirmThe.min_quantity")}:{" "}
                  {product.min_quantity_per_order}
                </p>
                <p className="relative w-fit font-body-small-medium font-[number:var(--body-small-medium-font-weight)] text-secondary-color text-[length:var(--body-small-medium-font-size)] tracking-[var(--body-small-medium-letter-spacing)] leading-[var(--body-small-medium-line-height)] whitespace-nowrap [font-style:var(--body-small-medium-font-style)]">
                  {t("artisanConfirmThe.max_quantity")}:{" "}
                  {product.max_quantity_per_order}
                </p>
                <div className="relative w-fit font-body-small-medium font-[number:var(--body-small-medium-font-weight)] text-primary-color text-[length:var(--body-small-medium-font-size)] tracking-[var(--body-small-medium-letter-spacing)] leading-[var(--body-small-medium-line-height)] whitespace-nowrap [font-style:var(--body-small-medium-font-style)]">
                  {t("artisanConfirmThe.total_stock")}: {product.total_stock}
                </div>
              </div>
              <div className="items-center justify-end gap-[70px] self-stretch w-full flex relative flex-[0_0_auto]">
                <div className="inline-flex flex-col items-end relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-body-large-regular font-[number:var(--body-large-regular-font-weight)] text-primary-color text-[length:var(--body-large-regular-font-size)] text-right tracking-[var(--body-large-regular-letter-spacing)] leading-[var(--body-large-regular-line-height)] whitespace-nowrap [font-style:var(--body-large-regular-font-style)]">
                    €{product.price_per_unit} {t("artisanConfirmThe.per_unit")}
                  </div>
                </div>
              </div>
              <Line />
            </div>
          ))}
          <div className="flex items-center gap-[15px] relative">
            <InfoCircle8
              className="!relative !w-4.5 !h-4.5 cursor-pointer"
              color="#2a4e4a"
            />
            <p className="relative flex-1 mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-sm tracking-tight leading-5">
              <span className="[font-family:'Inter-Regular',Helvetica] font-normal text-black text-sm tracking-tight leading-5">
                {t("stripeAccount.message.part1")}
              </span>{" "}
              <span className="underline">
                {t("stripeAccount.message.kyc")}
              </span>
              <span className="[font-family:'Inter-Regular',Helvetica] font-normal text-black text-sm tracking-tight leading-5">
                {t("stripeAccount.message.part2")}
              </span>
            </p>
          </div>
          {pathname !== "/deal_details" && (
            <div className="flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
              <div
                onClick={handleRefuse}
                className="gap-2 bg-white border border-solid border-redred shadow-shadow-1 flex items-center justify-center px-6 py-3 relative flex-1 grow rounded-md cursor-pointer"
              >
                <CrossCircle
                  className="!relative !w-5 !h-5 !ml-[-6.75px]"
                  fill="#F23030"
                />
                <button className="all-[unset] box-border mr-[-6.75px] text-redred relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                  {t("artisanConfirmThe.refuse")}
                </button>
              </div>
              <div
                onClick={() => handleConfirm(dealId)}
                className="gap-2.5 bg-primary-color flex items-center justify-center px-6 py-3 relative flex-1 grow rounded-md cursor-pointer"
              >
                <Send1 className="!relative !w-5 !h-5 !ml-[-13.25px]" />
                <button className="all-[unset] box-border mr-[-13.25px] text-white relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                  {t("artisanConfirmThe.confirm")}
                </button>
              </div>
            </div>
          )}
          {pathname === "/deal_details" && (
            <div className="flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
              <div
                onClick={handleIgnore}
                className="gap-2 bg-white border border-solid border-red shadow-shadow-1 flex items-center justify-center px-6 py-3 relative flex-1 grow rounded-md cursor-pointer"
              >
                <CrossCircle className="!relative !w-5 !h-5 !ml-[-6.75px]" />
                <button className="all-[unset] box-border mr-[-6.75px] text-red relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                  {t("artisanConfirmThe.ignore")}
                </button>
              </div>
              <div
                onClick={handleAccept}
                className="gap-2.5 bg-primary-color flex items-center justify-center px-6 py-3 relative flex-1 grow rounded-md cursor-pointer"
              >
                <Send1 className="!relative !w-5 !h-5 !ml-[-13.25px]" />
                <button className="all-[unset] box-border mr-[-13.25px] text-white relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                  {t("artisanConfirmThe.accept")}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArtisanConfirmThe;
