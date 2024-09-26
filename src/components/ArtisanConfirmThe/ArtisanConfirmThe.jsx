import React, { useEffect } from "react";
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
import { Line63, blogImage, Human } from "../../images";
import { useNavigate, useLocation } from "react-router-dom";
import CustomLoader from "../CustomLoader/CustomLoader";
import { createRequest } from "../../redux/app/requests/requestSlice";
import Swal from "sweetalert2";
import { validationByArtisan } from "../../redux/app/deals/dealSlice";
import ImageSlider from "../../components/ImageSlider/ImageSlider";

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
      const response = await dispatch(createRequest(dealId));
      console.log({ response });
      if (response.payload.code === 201) {
        navigate("/request-sent");
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text:
            response.payload.message || "You need to login to send a request.",
        });
        navigate("/auth?login");
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Failed to send request. Please try again.",
      });
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
      <div className="flex-col w-full items-start gap-[15px] px-[35px] py-[15px] flex relative flex-[0_0_auto]">
        {pathname !== "/deal_details" && (
          <>
            <p className="relative self-stretch mt-[-1.00px] font-heading-6 font-[number:var(--heading-6-font-weight)] text-primary-color text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] [font-style:var(--heading-6-font-style)]">
              {t("artisanConfirmThe.thank_you")}
            </p>
            <p className="relative self-stretch font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-primary-text-color text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] [font-style:var(--body-medium-regular-font-style)]">
              {t("artisanConfirmThe.confirmation_notice")}
            </p>
            <img
              className="relative self-stretch w-full h-px object-cover"
              alt="Line"
              src={Line63}
            />
          </>
        )}
        <ImageSlider pictures={dealState?.deal_images || [blogImage]} />
        <p className="relative self-stretch font-heading-6 font-[number:var(--heading-6-font-weight)] text-primary-color text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] [font-style:var(--heading-6-font-style)]">
          {dealState?.deal_title || t("artisanConfirmThe.wine_crates")}
        </p>
        <div className="flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
            <ClockAlt11 className="!relative !w-5 !h-5" color="#1B4F4A" />
            <p className="relative w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]">
              {dealState?.deal_duration || t("artisanConfirmThe.deal_duration")}
            </p>
          </div>
        </div>
        <div className="flex self-stretch w-full items-center gap-2.5 relative flex-[0_0_auto]">
          <Map className="!relative !w-5 !h-5" />
          <p className="relative w-full font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] break-words [font-style:var(--body-small-regular-font-style)]">
            {dealState?.location || t("artisanConfirmThe.location")}
          </p>
        </div>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <div className="inline-flex items-center gap-[15px] relative flex-[0_0_auto]">
          <img
            className="relative w-[50px] h-[50px] object-cover rounded-md"
            alt="Organizer"
            src={dealState?.organiser?.organiser_image || Human}
          />
          <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]">
              {t("artisanConfirmThe.organized_by")}
            </div>
            <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap">
              {dealState?.organiser.name || "Abraham Thomas"}
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
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <Box44 className="!relative !w-5 !h-5" />
          <p className="relative w-fit mt-[-1.00px] font-body-large-bold font-[number:var(--body-large-bold-font-weight)] text-primary-color text-[length:var(--body-large-bold-font-size)] tracking-[var(--body-large-bold-letter-spacing)] leading-[var(--body-large-bold-line-height)] whitespace-nowrap [font-style:var(--body-large-bold-font-style)]">
            {t("artisanConfirmThe.what_customers_receive")}
          </p>
        </div>
        <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-transparent text-base tracking-[0] leading-6">
          <span className="text-[#637381] font-body-medium-regular [font-style:var(--body-medium-regular-font-style)] font-[number:var(--body-medium-regular-font-weight)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] text-[length:var(--body-medium-regular-font-size)]">
            {dealState?.["what's included"] ||
              t("artisanConfirmThe.customers_receive")}
          </span>
          <span className="font-bold text-[#1b4f4a] underline">
            {t("artisanConfirmThe.read_more")}
          </span>
        </p>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <Box44 className="!relative !w-5 !h-5" />
          <p className="relative w-fit mt-[-1.00px] font-body-large-bold font-[number:var(--body-large-bold-font-weight)] text-primary-color text-[length:var(--body-large-bold-font-size)] tracking-[var(--body-large-bold-letter-spacing)] leading-[var(--body-large-bold-line-height)] whitespace-nowrap [font-style:var(--body-large-bold-font-style)]">
            {t("artisanConfirmThe.delivery_info")}
          </p>
        </div>
        <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <ClockAlt11 className="!relative !w-5 !h-5" color="#1B4F4A" />
          <p className="relative w-fit mt-[-1.00px] font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-primary-text-color text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] whitespace-nowrap [font-style:var(--body-medium-regular-font-style)]">
            {dealState?.delivery_date || t("artisanConfirmThe.delivery_date")}
          </p>
        </div>
        <div className="flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <DeliveryTruck4 className="!relative !w-5 !h-5" color="#1B4F4A" />
          <p className="relative flex-1 mt-[-1.00px] font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-transparent text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] [font-style:var(--body-medium-regular-font-style)]">
            <span className="text-[#1b4f4a] font-body-medium-regular [font-style:var(--body-medium-regular-font-style)] font-[number:var(--body-medium-regular-font-weight)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] text-[length:var(--body-medium-regular-font-size)]">
              {dealState?.location || t("artisanConfirmThe.delivery_location")}
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
          <img
            className="relative self-stretch w-full h-px object-cover"
            alt="Line"
            src={Line63}
          />
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
              <img
                className="relative self-stretch w-full h-px object-cover"
                alt="Line"
                src={Line63}
              />
            </div>
          ))}
          {pathname !== "/deal_details" && (
            <div className="flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
              <div
                onClick={handleRefuse}
                className="gap-2 bg-white border border-solid border-red shadow-shadow-1 flex items-center justify-center px-6 py-3 relative flex-1 grow rounded-md cursor-pointer"
              >
                <CrossCircle className="!relative !w-5 !h-5 !ml-[-6.75px]" />
                <button className="all-[unset] box-border mr-[-6.75px] text-red relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-base text-center tracking-[0] leading-6 whitespace-nowrap">
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
                  Ignore
                </button>
              </div>
              <div
                onClick={handleAccept}
                className="gap-2.5 bg-primary-color flex items-center justify-center px-6 py-3 relative flex-1 grow rounded-md cursor-pointer"
              >
                <Send1 className="!relative !w-5 !h-5 !ml-[-13.25px]" />
                <button className="all-[unset] box-border mr-[-13.25px] text-white relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                  Accept
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
