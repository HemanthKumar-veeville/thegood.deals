import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDealDetailsByDealId } from "../../redux/app/deals/dealSlice";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import { Badges } from "../../components/Badges";
import { RatingStar } from "../../components/RatingStar";
import { Box43 } from "../../icons/Box43";
import { ClockAlt11 } from "../../icons/ClockAlt11";
import { DeliveryTruck4 } from "../../icons/DeliveryTruck4";
import { Map } from "../../icons/Map";
import { Minus1 } from "../../icons/Minus1";
import { Pencil } from "../../icons/Pencil";
import { Plus3 } from "../../icons/Plus3";
import { Send } from "../../icons/Send";
import { Send2 } from "../../icons/Send2";
import { ShoppingCart111 } from "../../icons/ShoppingCart111";
import { Users2 } from "../../icons/Users2";
import ProgressBarGreen from "../../components/ProgressBar/ProgressBarGreen";
import ProgressBarYellow from "../../components/ProgressBar/ProgressBarYellow";
import { blogImage, Human, Line63 } from "../../images";
import CustomLoader from "../../components/CustomLoader/CustomLoader";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import { Cart } from "../../components/Cart/Cart";

const AdminViewGoodDeal = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const sampleProducts = [
    {
      name: "Case of Rosé - 6 bottles",
      availability: 3,
      originalPrice: 67.99,
      price: 29.0,
      quantity: 1,
    },
    {
      name: "Case of White - 6 bottles",
      availability: 15,
      originalPrice: 67.99,
      price: 29.0,
      quantity: 1,
    },
  ];

  // Extract deal_id from the query parameters
  const queryParams = new URLSearchParams(location.search);
  const deal_id = queryParams.get("deal_id");
  const is_creator = queryParams.get("is_creator");

  const { deal, status, error } = useSelector((state) => state.deals);

  const dealState = (deal?.Deal?.deal && deal?.Deal?.deal) || {};

  useEffect(() => {
    dispatch(fetchDealDetailsByDealId(deal_id));
  }, []);

  if (status === "loading") {
    return <CustomLoader />;
  }

  console.log({ dealState });
  return (
    <div className="flex flex-col w-full items-start relative bg-primary-background">
      <div className="flex flex-col w-full items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]">
        {is_creator && (
          <div className="flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-center justify-center gap-2 px-6 py-3 relative flex-1 grow bg-whitewhite rounded-md shadow-shadow-1">
              <Pencil className="!relative !w-5 !h-5 !ml-[-7.25px]" />
              <button className="all-[unset] box-border relative w-fit mt-[-1.00px] mr-[-7.25px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                {t("admin.modify")}
              </button>
            </div>
            <div className="flex items-center justify-center gap-2 px-6 py-3 relative flex-1 grow bg-whitewhite rounded-md shadow-shadow-1">
              <Send className="!relative !w-5 !h-5" />
              <button className="all-[unset] box-border text-primary-color relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                {t("admin.invite")}
              </button>
            </div>
          </div>
        )}
        <ImageSlider pictures={dealState?.deal_images || [blogImage]} />
        <div className="relative self-stretch [font-family:'Inter',Helvetica] font-semibold text-primary-color text-2xl tracking-[0] leading-[30px]">
          {dealState?.title || t("admin.wine_crates")}
        </div>
        {dealState?.progress !== "0%" &&
          (dealState?.status === "soon_out_stock" ? (
            <ProgressBarYellow percentage={dealState?.progress} />
          ) : (
            <ProgressBarGreen percentage={dealState?.progress} />
          ))}
        <div className="flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
            <ClockAlt11 className="!relative !w-5 !h-5" color="#1B4F4A" />
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap">
              {dealState?.end_in}
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
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />

        <div className="inline-flex items-center gap-[15px] relative flex-[0_0_auto]">
          <img
            className="relative w-[50px] h-[50px] object-cover"
            alt="Organizer"
            src={Human}
          />
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
                rating="four-star"
                size="small"
              />
            </div>
          </div>
        </div>
        <div className="relative self-stretch [font-family:'Inter',Helvetica] font-bold text-primary-color text-lg tracking-[0] leading-[26px]">
          {t("admin.about_the_deal")}
        </div>
        <p className="[font-family:'Inter',Helvetica] font-normal text-primary-text-color text-base tracking-[0] leading-6 relative self-stretch">
          <span className="[font-family:'Inter',Helvetica] font-normal text-[#637381] text-base tracking-[0] leading-6">
            {dealState?.description}
          </span>
          <span className="font-bold underline">{t("common.read_more")}</span>
        </p>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <Box43 className="!relative !w-5 !h-5" />
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-primary-color text-lg tracking-[0] leading-[26px] whitespace-nowrap">
            {t("admin.what_you_receive")}
          </div>
        </div>
        <p className="[font-family:'Inter',Helvetica] font-normal text-primary-text-color text-base tracking-[0] leading-6 relative self-stretch">
          <span className="[font-family:'Inter',Helvetica] font-normal text-[#637381] text-base tracking-[0] leading-6">
            {t("admin.bulk_order_includes")}{" "}
          </span>
          <span className="font-bold underline">{t("common.read_more")}</span>
        </p>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <Box43 className="!relative !w-5 !h-5" />
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-primary-color text-lg tracking-[0] leading-[26px] whitespace-nowrap">
            {t("admin.delivery_location_and_date")}
          </div>
        </div>
        <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <ClockAlt11 className="!relative !w-5 !h-5" color="#1B4F4A" />
          <p className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-color text-base tracking-[0] leading-6">
            {dealState?.collection_info?.date}
          </p>
        </div>
        <div className="flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <DeliveryTruck4 className="!relative !w-5 !h-5" color="#1B4F4A" />
          <p className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-color text-base tracking-[0] leading-6">
            {dealState?.collection_info?.location}
          </p>
        </div>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
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
