import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDealDetailsByDealId } from "../../redux/app/deals/dealSlice";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import { RatingStar } from "../../components/RatingStar";
import { Box43 } from "../../icons/Box43";
import { ClockAlt11 } from "../../icons/ClockAlt11";
import { DeliveryTruck4 } from "../../icons/DeliveryTruck4";
import { Map } from "../../icons/Map";
import { Users2 } from "../../icons/Users2";
import ProgressBarGreen from "../../components/ProgressBar/ProgressBarGreen";
import ProgressBarYellow from "../../components/ProgressBar/ProgressBarYellow";
import { blogImage } from "../../images";
import CustomLoader from "../../components/CustomLoader/CustomLoader";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import { Cart } from "../../components/Cart/Cart";
import { ArrowLeft } from "../../icons/ArrowLeft/ArrowLeft";
import { UserAlt } from "../../icons/UserAlt";
import { Line } from "../../components/Line/Line";
import { formatDate } from "../../helpers/helperMethods";
import ReadMore from "../../components/Readmore/Readmore";
import { Chat } from "../../components/Chat/Chat";
import { ShowCustomErrorModal } from "../../components/ErrorAlert/ErrorAlert";

const AdminViewGoodDeal = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  // Extract deal_id from the query parameters
  const queryParams = new URLSearchParams(location.search);
  const deal_id = queryParams.get("deal_id");
  const is_creator = queryParams.get("is_creator");
  const { deal, status, error } = useSelector((state) => state.deals);

  const dealState = (deal?.Deal?.deal && deal?.Deal?.deal) || {};

  // Helper function to extract exact error message from various error formats
  const extractErrorMessage = (errorObj) => {
    if (!errorObj) return t("errors.request_failed");
    
    // Check for localized error messages (e.g., error.en, error.fr)
    const currentLang = localStorage.getItem("i18nextLng") || "en";
    if (errorObj[currentLang] && typeof errorObj[currentLang] === "string") {
      return errorObj[currentLang];
    }
    
    // Check common error message fields
    if (errorObj.detail && typeof errorObj.detail === "string") return errorObj.detail;
    if (errorObj.message && typeof errorObj.message === "string") return errorObj.message;
    if (errorObj.error && typeof errorObj.error === "string") return errorObj.error;
    
    // Check nested response data
    if (errorObj.response?.data) {
      const responseData = errorObj.response.data;
      if (responseData.detail && typeof responseData.detail === "string") return responseData.detail;
      if (responseData.message && typeof responseData.message === "string") return responseData.message;
      if (responseData.error && typeof responseData.error === "string") return responseData.error;
      if (typeof responseData === "string") return responseData;
    }
    
    // Check if error is a string
    if (typeof errorObj === "string") return errorObj;
    
    // Fallback to default message
    return t("errors.request_failed");
  };
  
  useEffect(() => {
    if (deal_id) {
      dispatch(fetchDealDetailsByDealId(deal_id));
    }
  }, [deal_id, dispatch]);

  if (!deal_id) {
    return <CustomLoader />;
  }

  if (status === "loading") {
    return <CustomLoader />;
  }

  if (status === "failed") {
    const errorMessage = extractErrorMessage(error);
    return (
      <div className="flex flex-col w-full items-start relative bg-primary-background">
        <ShowCustomErrorModal
          message={errorMessage}
          buttonText={t("waiting_deal.got_it")}
          onClose={() => navigate(-1)}
        />
      </div>
    );
  }

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex flex-col w-full items-start relative bg-primary-background">
      <div className="flex flex-col w-full items-start gap-[15px] px-[15px] py-[15px] relative flex-[0_0_auto]">
        <div className="flex items-center gap-3 pt-0 pb-5 px-0 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-stroke">
          <div
            className="inline-flex items-center gap-2 relative flex-[0_0_auto] cursor-pointer"
            onClick={handleBack}
          >
            <ArrowLeft
              className="!relative !w-[18px] !h-[18px]"
              color="#637381"
            />
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-text-color text-base tracking-[0] leading-6 whitespace-nowrap">
              {t("common.back")}
            </div>
          </div>
        </div>
        <ImageSlider pictures={dealState?.deal_images || [blogImage]} />
        <div className="relative self-stretch [font-family:'Inter',Helvetica] font-semibold text-primary-color text-2xl tracking-[0] leading-[30px]">
          {dealState?.title || t("admin.wine_crates")}
        </div>
        {dealState?.status === "soon_out_stock" ? (
          <ProgressBarYellow percentage={dealState?.progress} />
        ) : (
          <ProgressBarGreen percentage={dealState?.progress} />
        )}
        <div className="flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
            <ClockAlt11 className="!relative !w-5 !h-5" color="#1B4F4A" />
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap">
              {t("active_deal.endsIn", {
                days: dealState?.ends_in,
              })}
            </div>
          </div>
          <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
            <Users2 className="!relative !w-5 !h-5" />
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap">
              {t("admin.participants", { count: dealState?.participants })}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <Map className="!relative !w-5 !h-5" />
          <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-color text-sm tracking-[0] leading-[22px]">
            {dealState?.location}
          </p>
        </div>
        <Line />
        <div className="inline-flex items-center gap-[15px] relative flex-[0_0_auto] rounded-md">
          {dealState?.organizer?.organiser_image && (
            <img
              className="relative w-[50px] h-[50px] object-cover rounded-md"
              alt="Organizer"
              src={dealState?.organizer?.organiser_image}
            />
          )}
          {!dealState?.organizer?.organiser_image && <UserAlt />}
          <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap">
              {t("admin.collection_organized_by")}
            </div>
            <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap">
              {dealState?.organizer?.name}
            </div>
            <div className="inline-flex h-5 items-center gap-2.5 relative">
              <RatingStar
                className="!flex-[0_0_auto]"
                rating="five-star"
                size="small"
              />
            </div>
          </div>
        </div>
        <div className="relative self-stretch [font-family:'Inter',Helvetica] font-bold text-primary-color text-lg tracking-[0] leading-[26px]">
          {t("admin.about_the_deal")}
        </div>
        <ReadMore
          description={dealState?.description || "-"}
          readMoreText={t("artisanConfirmThe.read_more")}
          readLessText={t("artisanConfirmThe.read_less")}
        />
        <Line />
        <div className="relative self-stretch [font-family:'Inter',Helvetica] font-bold text-primary-color text-lg tracking-[0] leading-[26px]">
          {t("admin.about_the_artisan")}
        </div>
        <ReadMore
          description={dealState?.artisan_information || "-"}
          readMoreText={t("artisanConfirmThe.read_more")}
          readLessText={t("artisanConfirmThe.read_less")}
        />
        <Line />
        <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <Box43 className="!relative !w-5 !h-5" />
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-primary-color text-lg tracking-[0] leading-[26px] whitespace-nowrap">
            {t("admin.what_you_receive")}
          </div>
        </div>
        <ReadMore
          description={dealState?.content_description || "-"}
          readMoreText={t("artisanConfirmThe.read_more")}
          readLessText={t("artisanConfirmThe.read_less")}
        />
        <Line />
        <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <Box43 className="!relative !w-5 !h-5" />
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-primary-color text-lg tracking-[0] leading-[26px] whitespace-nowrap">
            {t("admin.delivery_location_and_date")}
          </div>
        </div>
        <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <ClockAlt11 className="!relative !w-5 !h-5" color="#1B4F4A" />
          <p className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-color text-base tracking-[0] leading-6">
            {formatDate(
              dealState?.collection_info?.date || "2024-12-08",
              "fr"
            ) || "-"}
          </p>
        </div>
        <div className="flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <DeliveryTruck4 className="!relative !w-5 !h-5" color="#1B4F4A" />
          <p className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-color text-base tracking-[0] leading-6">
            {dealState?.collection_info?.location}
          </p>
        </div>
        <Line />
        <Chat messages={[]} dealId={deal_id} />
        <Line />
        <Cart
          products={dealState?.products}
          dealId={deal_id}
          fetchDealDetailsByDealId={fetchDealDetailsByDealId}
        />
      </div>
    </div>
  );
};

export default AdminViewGoodDeal;
