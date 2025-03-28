import React, { useEffect, useState } from "react";
import { StyleTypePrimary } from "../../components/StyleTypePrimaryUpdate01";
import { ArrowLeft } from "../../icons/ArrowLeft/ArrowLeft";
import { Box43 } from "../../icons/Box43";
import { Box44 } from "../../icons/Box44";
import { ClockAlt13 } from "../../icons/ClockAlt13";
import { Coins } from "../../icons/Coins";
import { Map } from "../../icons/Map";
import { Pencil1 } from "../../icons/Pencil1";
import { UserAlt2 } from "../../icons/UserAlt2";
import { Users22 } from "../../icons/Users22";
import { VerticalLine3 } from "../../icons/VerticalLine3/VerticalLine3";
import { EuroCoin } from "../../icons/EuroCoin";
import {
  blogImage,
  Line571,
  Line59,
  Line60,
  Line69,
  Line_570_1,
  Line_571_1,
  FranceFlag,
} from "../../images";
import AppBar from "../../components/AppBar/AppBar";
import { useNavigate, useLocation } from "react-router-dom";
import { Badges } from "../../components/Badges";
import ProgressBarGreen from "../../components/ProgressBar/ProgressBarGreen";
import ProgressBarYellow from "../../components/ProgressBar/ProgressBarYellow";
import { getDealByDealId } from "../../redux/app/deals/dealSlice";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import { Send2 } from "../../icons/Send2";
import { DangerAlert } from "../../components/DangerAlert";
import { chargeGroupPayment } from "../../redux/app/payments/paymentSlice";
import CustomLoader from "../../components/CustomLoader/CustomLoader";
import { ShowCustomErrorModal } from "../../components/ErrorAlert/ErrorAlert";
import { CheckmarkCircle } from "../../icons/CheckmarkCircle";
import { Line } from "../../components/Line/Line";
import { Send1 } from "../../icons/Send1";
import { Chat } from "../../components/Chat";
import { BiRepost } from "react-icons/bi";
import { ShowCustomWarningModal } from "../../components/WarningAlert/WarningAlert";

const ActiveDeal = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const dealState = useSelector((state) => state.deals);
  const { deal, status, error } = dealState;
  const dealData = (deal?.Deal?.length && deal?.Deal[0]) || {};
  const { t } = useTranslation();
  const queryParams = new URLSearchParams(location.search);
  const deal_id = queryParams.get("deal_id");
  const is_creator = queryParams.get("is_creator");
  const [isCollectionInProgress, setIsCollectionInProgress] = useState(false);
  const [chargeStats, setChargeStats] = useState([]);
  const [isPaymentCollectedForAllOrders, setIsPaymentCollectedForAllOrders] =
    useState(false);
  const [isDealPaid, setIsDealPaid] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isWarning, setIsWarning] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [autoRetry, setAutoRetry] = useState(false);
  const [paymentAttempts, setPaymentAttempts] = useState(0);
  const [currentStep, setCurrentStep] = useState(2);
  const [steps, setSteps] = useState([
    { step: 1, bgColor: "", textColor: "" },
    { step: 2, bgColor: "", textColor: "" },
    { step: 3, bgColor: "", textColor: "" },
    { step: 4, bgColor: "", textColor: "" },
    { step: 5, bgColor: "", textColor: "" },
  ]);
  const handleBack = () => {
    navigate(-1);
  };
  console.log({ isError, errorMessage });
  const handleMyOrders = () => {
    navigate("/admin-orders?deal_id=" + deal_id + "&is_creator=" + is_creator);
  };

  const handleManageLovedOnes = () => {
    navigate("/admin-invitations?deal_id=" + deal_id);
  };

  const handleEditDeal = () => {
    navigate("/update-deal?deal_id=" + deal_id);
  };

  const handleRepostDeal = () => {
    navigate("/repost-deal?deal_id=" + deal_id);
  };

  const handleOrder = () => {
    navigate(
      "/admin-view-deal?deal_id=" + deal_id + "&deal_type=" + is_creator
    );
  };

  const statusBanner = {
    soon_out_stock: { text: t("active_deal.soon_out_stock"), color: "warning" },
    finished: { text: t("active_deal.finished"), color: "success" },
    in_stock: { text: t("active_deal.in_stock"), color: "success" },
    waiting: { text: t("active_deal.waiting"), color: "warning" },
    draft: { text: t("active_deal.draft"), color: "info" },
  };
  const fetchDeal = async () => {
    setIsError(false);
    setErrorMessage("");
    try {
      const res = await dispatch(getDealByDealId(deal_id));

      setIsPaymentCollectedForAllOrders(
        res?.payload?.Deal[0]?.payment_collected_for_all_orders
      );
      setIsDealPaid(res?.payload?.Deal[0]?.is_artisan_paid);
      setIsEmailSent(!!res?.payload?.Deal[0]?.is_email_sent);
      setSteps(updateSteps(steps, currentStep));
    } catch (err) {
      console.error(err);
      setIsError(true);
      setErrorMessage("An error occurred while fetching the deal.");
    }
  };

  useEffect(() => {
    fetchDeal();
  }, []);

  useEffect(() => {
    dealData?.deal_progress_percentage >= 100 ? setCurrentStep(4) : null;
  }, [dealData?.deal_progress_percentage]);

  useEffect(() => {
    dealData?.is_email_sent === true ? setCurrentStep(5) : null;
  }, [dealData?.is_email_sent]);

  useEffect(() => {
    dealData?.order_confirmed === true ? setCurrentStep(6) : null;
  }, [dealData?.order_confirmed]);

  useEffect(() => {
    setSteps(updateSteps(steps, currentStep));
  }, [currentStep]);

  const handleInviteLovedOnes = () => {
    navigate(
      `/invite-loved-ones?deal_id=${deal_id}` + "&is_creator=" + is_creator
    );
  };

  const payToArtisan = async () => {
    navigate(`/deal-wallet?deal_id=${deal_id}`);
  };

  const validateCollection = async () => {
    const progress = dealData?.deal_progress_percentage;
    if (progress == 0) {
      setIsError(true);
      setErrorMessage(t("active_deal.not_fullfilled"));
      return false; // Validation failed
    }
    if (progress < 100) {
      setIsWarning(true);
      setWarningMessage(t("active_deal.partially_fullfilled"));
      return false; // Validation failed
    }
    return true; // Validation succeeded
  };

  const handleConfirm = async () => {
    setIsWarning(false); // Close the warning modal
    setIsCollectionInProgress(true);
    try {
      // Attempt the API call
      const res = await dispatch(chargeGroupPayment({ dealId: deal_id }));

      // Update states based on API response
      setChargeStats(res?.payload?.deal_payment_stats);
      setIsPaymentCollectedForAllOrders(
        res?.payload?.payment_collected_for_all_orders
      );
      setAutoRetry(res?.payload?.Auto_retry);
      setPaymentAttempts(res?.payload?.payment_attempts);
      fetchDeal();
    } catch (error) {
      console.error("Error charging deal:", error);
      setIsError(true);
      setErrorMessage("An error occurred while processing the payment.");
    } finally {
      setIsCollectionInProgress(false);
    }
  };

  const handleRefuse = () => {
    setIsWarning(false); // Simply close the warning modal
  };

  const chargeDeal = async () => {
    const isValid = await validateCollection(); // Await the validation
    if (!isValid) {
      return; // Exit if validation fails
    }

    // If we get here, validation passed, proceed with payment collection
    setIsCollectionInProgress(true);
    try {
      const res = await dispatch(chargeGroupPayment({ dealId: deal_id }));
      setChargeStats(res?.payload?.deal_payment_stats);
      setIsPaymentCollectedForAllOrders(
        res?.payload?.payment_collected_for_all_orders
      );
      setAutoRetry(res?.payload?.Auto_retry);
      setPaymentAttempts(res?.payload?.payment_attempts);
    } catch (error) {
      console.error("Error charging deal:", error);
      setIsError(true);
      setErrorMessage("An error occurred while processing the payment.");
    } finally {
      setIsCollectionInProgress(false);
    }
  };

  function updateSteps(steps, currentStep) {
    return steps.map((step) => {
      if (step.step < currentStep) {
        return {
          ...step,
          bgColor: "bg-primary-color",
          textColor: "text-whitewhite",
        };
      } else if (step.step === currentStep) {
        return {
          ...step,
          bgColor: "bg-whitewhite border-2 border-solid border-primary-color",
          textColor: "text-primary-color",
        };
      } else {
        return {
          ...step,
          bgColor: "bg-graygray border-2 border-solid border-stroke",
          textColor: "text-primary-color",
        };
      }
    });
  }

  return (
    <div className="flex flex-col w-full items-start relative bg-primary-background mx-auto">
      {status === "loading" && <CustomLoader />}

      {status === "succeeded" && (
        <div className="flex flex-col w-full items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]">
          <div className="flex-col flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
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
            {isError && (
              <ShowCustomErrorModal
                message={errorMessage}
                buttonText={t("waiting_deal.got_it")}
                onClose={() => setIsError(false)} // Reset modal state on close
              />
            )}
            {isWarning && (
              <ShowCustomWarningModal
                message={warningMessage}
                buttonText={t("waiting_deal.got_it")}
                onClose={() => setIsWarning(false)} // Reset modal state on close
                handleConfirm={handleConfirm}
                handleRefuse={handleRefuse}
              />
            )}
            {isPaymentCollectedForAllOrders && dealData?.orders_count !== 0 && (
              <div className="flex items-start gap-[25px] px-[18px] py-[15px] relative self-stretch w-full flex-[0_0_auto] bg-greengreen-light-6 rounded-lg">
                <div className="flex items-center gap-3 relative flex-1 grow">
                  <div className="relative w-5 h-5 bg-greengreen rounded-[10px]">
                    <CheckmarkCircle
                      className="!absolute !w-3 !h-3 !top-1 !left-1"
                      color="white"
                    />
                  </div>
                  <p className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#004434] text-sm tracking-[0] leading-5">
                    <span className="font-bold">
                      {isDealPaid
                        ? t("active_deal.deal_completed")
                        : t("active_deal.deal_collected")}
                    </span>
                  </p>
                </div>
              </div>
            )}
            {dealData?.deal_ends_in > 0 && (
              <div className="flex items-start gap-[25px] px-[18px] py-[15px] relative self-stretch w-full flex-[0_0_auto] bg-greengreen-light-6 rounded-lg">
                <div className="flex items-center gap-3 relative flex-1 grow">
                  <div className="relative w-5 h-5 bg-greengreen rounded-[10px]">
                    <ClockAlt13
                      className="!absolute !w-3 !h-3 !top-1 !left-1"
                      color="white"
                    />
                  </div>
                  <p className="relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#004434] text-sm tracking-[0] leading-5">
                    <span className="[font-family:'Inter',Helvetica] font-normal text-[#004434] text-sm tracking-[0] leading-5">
                      {t("active_deal.deal_ends_in")}
                      <br />
                    </span>
                    <span className="font-bold">
                      {t("active_deal.endsIn", {
                        days: dealData?.deal_ends_in,
                      })}{" "}
                    </span>
                  </p>
                </div>
              </div>
            )}
            {Array.isArray(chargeStats) &&
              chargeStats?.length > 0 &&
              !isPaymentCollectedForAllOrders && (
                <DangerAlert
                  alertMessage={t("active_deal.danger_alert")}
                  participants={
                    (Array.isArray(chargeStats) && chargeStats) || []
                  }
                />
              )}
            <div
              onClick={
                dealData?.deal_status !== "expired" &&
                dealData?.deal_status !== "finished"
                  ? handleOrder
                  : null
              }
              className="!relative"
            >
              <ImageSlider
                pictures={dealData?.deal_images || [blogImage]}
                products={dealData?.products || []}
              />
            </div>
            <div
              onClick={
                dealData?.deal_status !== "expired" &&
                dealData?.deal_status !== "finished"
                  ? handleOrder
                  : null
              }
              className="relative self-stretch [font-family:'Inter',Helvetica] font-semibold text-primary-color text-2xl tracking-[0] leading-[30px]"
            >
              {dealData?.deal_title}
            </div>
            {location?.state?.deal?.dealStatus === "soon_out_stock" ? (
              <ProgressBarYellow
                percentage={dealData?.deal_progress_percentage}
              />
            ) : (
              <ProgressBarGreen
                percentage={dealData?.deal_progress_percentage}
              />
            )}
            <div className="flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
              <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
                <ClockAlt13 className="!relative !w-5 !h-5" color="#1B4F4A" />
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                  {t("deal.end_in", {
                    days: dealData?.deal_ends_in,
                  })}
                </div>
              </div>
              <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
                <Users22 className="!relative !w-5 !h-5" color="#1B4F4A" />
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                  {t("active_deal.participants_count", {
                    count: dealData?.participants_count,
                  })}
                </div>
              </div>
            </div>
            {/* Location */}
            <div
              className={`${
                isCollectionInProgress
                  ? "flex items-center gap-2.5 w-full"
                  : "flex items-center gap-2.5 w-full"
              }`}
            >
              <Map className="w-5 h-5" />
              <p className="w-full text-sm text-primary-color leading-[22px] break-words">
                {dealData?.collection_location || "-"}
              </p>
            </div>
            {!isPaymentCollectedForAllOrders && !autoRetry && (
              <div
                className="flex items-center justify-center gap-2.5 px-6 py-3 relative self-stretch w-full bg-primary-color rounded-md hover:bg-primary-dark-color cursor-pointer"
                onClick={!isPaymentCollectedForAllOrders ? chargeDeal : null}
              >
                <EuroCoin className="!relative !w-5 !h-5" />
                <button className="box-border font-medium text-white text-base text-center">
                  {!isEmailSent
                    ? t("active_deal.collect_payment")
                    : t("active_deal.retry_payment")}
                </button>
              </div>
            )}
            {isCollectionInProgress && <CustomLoader />}
            <Line />
            {dealData?.deal_status !== "expired" &&
              dealData?.deal_status !== "finished" && (
                <div
                  className="gap-2.5 bg-primary-color flex items-center justify-center px-6 py-3 relative self-stretch w-full flex-[0_0_auto] rounded-md cursor-pointer"
                  onClick={handleOrder}
                >
                  <Send1 className="!relative !w-5 !h-5" color="white" />

                  <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-whitewhite text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                    {t("active_deal.place_order")}
                  </button>
                </div>
              )}
            <div
              className="flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-whitewhite rounded-md shadow-shadow-1 cursor-pointer"
              onClick={handleMyOrders}
            >
              <Box44 className="!relative !w-5 !h-5" />
              <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                {t("active_deal.my_orders_label")}
              </button>
            </div>
            <div
              className="flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-whitewhite rounded-md shadow-shadow-1 cursor-pointer"
              onClick={handleManageLovedOnes}
            >
              <Users22 className="!relative !w-5 !h-5" color="#1B4F4A" />
              <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                {t("active_deal.manage_friends")}
              </button>
            </div>
            <div
              className="flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-whitewhite rounded-md shadow-shadow-1 cursor-pointer"
              onClick={handleInviteLovedOnes}
            >
              <Send2 className="!relative !w-5 !h-5" />
              <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                {t("invitations.invite_loved_ones")}
              </button>
            </div>
            {dealData?.payment_collected_for_all_orders === false && (
              <div
                className="flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] rounded-md border border-solid border-primary-color cursor-pointer"
                onClick={handleEditDeal}
              >
                <Pencil1 className="!relative !w-5 !h-5" color="#1B4F4A" />
                <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                  {t("active_deal.edit_deal_button")}
                </button>
              </div>
            )}
            {dealData?.payment_collected_for_all_orders === true && (
              <div
                className="flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] rounded-md border border-solid border-primary-color cursor-pointer"
                onClick={handleRepostDeal}
              >
                <BiRepost className="!relative !w-6 !h-6" color="#1B4F4A" />
                <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                  {t("active_deal.repost_deal_button")}
                </button>
              </div>
            )}
          </div>
          <Line />
          <div className="flex flex-col items-start p-5 relative self-stretch w-full flex-[0_0_auto] bg-whitewhite rounded-[5px] shadow-shadow-1">
            <div className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]">
              <div className="inline-flex items-center gap-3.5 relative flex-[0_0_auto]">
                <div className="relative w-[50px] h-[50px]">
                  <div className="relative h-[50px] rounded-[3px]">
                    <div className="absolute w-[50px] h-[50px] top-0 left-0 bg-secondary-color rounded-[3px] opacity-[0.08]" />
                    <Box43
                      className="!absolute !w-[26px] !h-[26px] !top-3 !left-3"
                      color="#13C296"
                    />
                  </div>
                </div>
                <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-darkdark text-base tracking-[0] leading-6 whitespace-nowrap">
                    {t("active_deal.my_orders_label")}
                  </div>
                  <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                    {t("active_deal.loved_ones_orders_label")}
                  </div>
                </div>
              </div>
              <div className="inline-flex items-end gap-[5px] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-bold text-darkdark text-2xl leading-[22px] [font-family:'Inter',Helvetica] tracking-[0] whitespace-nowrap">
                  {t("active_deal.orders_count", {
                    count: dealData?.ordered_count,
                  })}
                </div>
                <div className="relative w-[124px] h-[22px]">
                  <div className="inline-flex items-center gap-1 relative">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-greengreen text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                      {t("active_deal.orders_available", {
                        available: dealData?.total_product_count,
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Bar with dynamic width based on orders count */}
            <div className="relative w-full h-[7px] mt-4 bg-gray-300 rounded-full">
              <div
                className="absolute h-[7px] bg-greengreen rounded-full"
                style={{
                  width: `${
                    (dealData?.ordered_count / dealData?.total_product_count) *
                    100
                  }%`,
                  maxWidth: "100%",
                }}
              ></div>
            </div>
          </div>
          <div className="flex flex-col items-start p-5 relative self-stretch w-full flex-[0_0_auto] bg-whitewhite rounded-[5px] shadow-shadow-1">
            <div className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]">
              <div className="inline-flex items-center gap-3.5 relative flex-[0_0_auto]">
                <div className="relative w-[50px] h-[50px]">
                  <div className="relative h-[50px] rounded-[3px]">
                    <div className="bg-purplepurple absolute w-[50px] h-[50px] top-0 left-0 rounded-[3px] opacity-[0.08]" />
                    <Coins
                      className="!absolute !w-[26px] !h-[26px] !top-3 !left-3"
                      color="#8646F4"
                    />
                  </div>
                </div>
                <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-darkdark text-base tracking-[0] leading-6 whitespace-nowrap">
                    {t("active_deal.wallet_label")}
                  </div>
                  <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                    {t("active_deal.amount_collected_label")}
                  </div>
                </div>
              </div>
              <div className="inline-flex items-end gap-[5px] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-darkdark text-2xl tracking-[0] leading-[22px] whitespace-nowrap">
                  {`${dealData?.ordered_cost || 0} €`}
                </div>
                <div className="w-[67px] relative h-[22px]">
                  <div className="inline-flex items-center gap-1 relative">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-purplepurple text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                      {t("active_deal.amount_target", {
                        target: dealData?.overall_cost,
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Bar with dynamic width based on amount collected */}
            <div className="relative w-full h-[7px] mt-4 bg-gray-300 rounded-full">
              <div
                className="absolute h-[7px] bg-purplepurple rounded-full"
                style={{
                  width: `${
                    (dealData?.ordered_cost / dealData?.overall_cost) * 100
                  }%`,
                  maxWidth: "100%",
                }}
              ></div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-6 p-5 relative self-stretch w-full flex-[0_0_auto] bg-whitewhite rounded-[5px] shadow-shadow-1">
            <div className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto] mr-[-11.00px]">
              <div className="inline-flex items-center gap-3.5 relative flex-[0_0_auto]">
                <div className="relative w-[50px] h-[50px]">
                  <div className="relative h-[50px] rounded-[3px]">
                    <div className="bg-cyancyan absolute w-[50px] h-[50px] top-0 left-0 rounded-[3px] opacity-[0.08]" />
                    <Users22
                      className="!absolute !w-[26px] !h-[26px] !top-3 !left-3"
                      color="#01A9DB"
                    />
                  </div>
                </div>
                <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-darkdark text-base tracking-[0] leading-6 whitespace-nowrap">
                    {t("active_deal.relatives_label")}
                  </div>
                  <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                    {t("active_deal.participants_label")}
                  </div>
                </div>
              </div>
              <div className="inline-flex items-end gap-[5px] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-darkdark text-2xl tracking-[0] leading-[30px] whitespace-nowrap">
                  {t("active_deal.participants_count", {
                    count: dealData?.participants_count,
                  })}
                </div>
                <div className="w-[91px] relative h-[22px]" />
              </div>
            </div>
          </div>
          <Line />
          <Chat messages={[]} dealId={deal_id} />
          <Line />
          <div className="flex-col flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
            {steps.map(({ step, bgColor, textColor }) => (
              <div
                className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto] mr-[-24.00px]"
                key={step}
              >
                <div className="relative w-[52px] h-[50px]">
                  <div
                    className={`relative w-[50px] h-[50px] rounded-[25px] ${bgColor}`}
                  >
                    <div
                      className={`absolute top-2.5 left-[17px] [font-family:'Inter',Helvetica] font-medium ${textColor} text-xl tracking-[0] leading-[26px] whitespace-nowrap`}
                    >
                      {step}
                    </div>
                  </div>
                </div>
                <p className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6">
                  {t(`active_deal.step_${step}`)}
                </p>
              </div>
            ))}
          </div>
          <Line />
        </div>
      )}
    </div>
  );
};

export default ActiveDeal;
