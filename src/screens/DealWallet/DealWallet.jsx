import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft2 } from "../../icons/ArrowLeft2";
import { Box4 } from "../../icons/Box4";
import { FileExport2 } from "../../icons/FileExport2";
import { Line } from "../../components/Line/Line";
import {
  fetchStripeBalance,
  payoutArtisan,
} from "../../redux/app/payments/paymentSlice";
import CustomLoader from "../../components/CustomLoader/CustomLoader";
import { ShowCustomErrorModal } from "../../components/ErrorAlert/ErrorAlert";
import { ShowCustomSuccessModal } from "../../components/ShowCustomSuccessModal/ShowCustomSuccessModal";

const DealWallet = () => {
  const { t } = useTranslation();
  const [fundsUnlocked, setFundsUnlocked] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [serverMessage, setServerMessage] = useState("");

  // Get balance and loading status from Redux store
  const { balance, status, error } = useSelector((state) => state.payments);
  const availableBalance = balance?.balance?.available[0];
  const pendingBalance = balance?.balance?.pending[0];

  // Extract deal_id from query params
  const dealId = new URLSearchParams(location.search).get("deal_id");

  const handleUnlockFunds = async () => {
    setFundsUnlocked(true);
    setLoading(true);
    try {
      const res = await dispatch(
        payoutArtisan({
          dealId,
          amount: (availableBalance?.amount / 100).toFixed(2),
          currency: availableBalance?.currency,
        })
      ).unwrap();
      await dispatch(fetchStripeBalance({ dealId }));
      setShowSuccessModal(true);
      setServerMessage(
        `${res?.message?.status} for ${
          availableBalance?.amount / 100
        } ${(availableBalance?.currency).toUpperCase()} with payment ID ${
          res?.message?.Payout_ID
        }.`
      );
    } catch (err) {
      setErrorMessage(err?.detail);
      setIsError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleBackToHome = () => {
    navigate(-1);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    // Dispatch fetchStripeBalance when the component mounts
    if (dealId) {
      dispatch(fetchStripeBalance({ dealId }));
      setLoading(false);
    }
  }, [dealId, dispatch]);

  return (
    <div className="flex flex-col w-full h-screen items-start relative bg-primary-background mx-auto">
      {loading && <CustomLoader />}
      {isError && (
        <ShowCustomErrorModal
          message={errorMessage}
          buttonText={t("waiting_deal.got_it")}
          onClose={() => setIsError(false)} // Reset modal state on close
        />
      )}
      {showSuccessModal && (
        <ShowCustomSuccessModal
          message={serverMessage}
          buttonText={t("waiting_deal.got_it")}
          onClose={() => setShowSuccessModal(false)}
        />
      )}
      {!loading && (
        <div className="flex flex-col w-full items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]">
          <div className="flex items-center gap-3 pt-0 pb-5 px-0 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-stroke">
            <div
              className="inline-flex items-center gap-2 relative flex-[0_0_auto] cursor-pointer"
              onClick={handleBackToHome}
            >
              <ArrowLeft2
                className="!relative !w-[18px] !h-[18px]"
                color="#637381"
              />
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-text-color text-base tracking-[0] leading-6 whitespace-nowrap">
                {t("deal_wallet.back_button")}
              </div>
            </div>
          </div>
          <div className="relative self-stretch [font-family:'Inter',Helvetica] font-semibold text-primary-color text-2xl tracking-[0] leading-[30px]">
            {t("deal_wallet.title")}
          </div>

          <div className="flex flex-col items-start gap-6 p-5 self-stretch w-full bg-whitewhite rounded-[5px] shadow-shadow-1 relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]">
              <div className="inline-flex items-center gap-3.5 relative flex-[0_0_auto]">
                <div className="relative w-[50px] h-[50px]">
                  <div className="relative h-[50px] rounded-[3px]">
                    <div className="absolute w-[50px] h-[50px] top-0 left-0 bg-purplepurple rounded-[3px] opacity-[0.08]" />
                    <Box4
                      className="!absolute !w-[26px] !h-[26px] !top-3 !left-3"
                      color="#8646F4"
                    />
                  </div>
                </div>
                <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-darkdark text-base tracking-[0] leading-6 whitespace-nowrap">
                    {t("deal_wallet.wallet_info_heading")}
                  </div>
                  <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                    {t("deal_wallet.wallet_info_subheading")}
                  </div>
                </div>
              </div>
              <div className="w-full flex justify-between items-center">
                <div className="relative mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-darkdark text-2xl tracking-[0] leading-[30px] whitespace-nowrap">
                  {`${t("deal_wallet.available_balance")}`}
                </div>
                <div className="relative mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-darkdark text-2xl tracking-[0] leading-[30px] whitespace-nowrap">
                  {`${pendingBalance?.currency === "eur" ? "€" : "USD" || "€"}${
                    (
                      pendingBalance?.amount / 100 +
                      availableBalance?.amount / 100
                    ).toFixed(2) || 0
                  }`}
                </div>
              </div>
              <div className="w-full flex justify-between items-center">
                <div className="relative mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-darkdark text-2xl tracking-[0] leading-[30px] whitespace-nowrap">
                  {`${t("deal_wallet.approved_balance")}`}
                </div>
                <div className="relative mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-darkdark text-2xl tracking-[0] leading-[30px] whitespace-nowrap">
                  {`${
                    availableBalance?.currency === "eur" ? "€" : "USD" || "€"
                  }${(availableBalance?.amount / 100).toFixed(2) || 0}`}
                </div>
              </div>
            </div>
          </div>

          <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-base tracking-[0] leading-6">
            {t("deal_wallet.info_text")}
          </p>
          <div
            className="flex items-center justify-center gap-2.5 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-primary-color rounded-md cursor-pointer"
            onClick={handleUnlockFunds}
          >
            <FileExport2 className="!relative !w-5 !h-5" />
            <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-whitewhite text-base text-center tracking-[0] leading-6 whitespace-nowrap">
              {t("deal_wallet.unlock_funds_button")}
            </button>
          </div>
          <Line />
          <div
            className="flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-whitewhite rounded-md shadow-shadow-1 cursor-pointer"
            onClick={handleBackToHome}
          >
            <ArrowLeft2 className="!relative !w-5 !h-5" color="#1B4F4A" />
            <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap">
              {t("deal_wallet.back_to_home_button")}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DealWallet;
