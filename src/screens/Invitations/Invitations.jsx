import React, { useEffect } from "react";
import { SizeXlCorner } from "../../components/SizeXlCorner";
import { ArrowLeft1 } from "../../icons/ArrowLeft1";
import { Box43 } from "../../icons/Box43";
import { CheckmarkCircle } from "../../icons/CheckmarkCircle";
import { CrossCircle2 } from "../../icons/CrossCircle2";
import { Send2 } from "../../icons/Send2";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchRequestsByDeal,
  processRequest,
} from "../../redux/app/requests/requestSlice";
import { fetchParticipantsByDeal } from "../../redux/app/participants/participantSlice";
import CustomLoader from "../../components/CustomLoader/CustomLoader";
import { SuccessAlert } from "../../components/SuccessAlert/SuccessAlert.jsx";
import { Warning1 } from "../../icons/Warning1/Warning1.jsx";
import { Line } from "../../components/Line/Line.jsx";

const Invitations = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { requests, requestStatus } = useSelector((state) => state.requests);
  const { participants, participantStatus } = useSelector(
    (state) => state.participants
  );
  const queryParams = new URLSearchParams(location.search);
  const deal_id = queryParams.get("deal_id");
  const is_creator = queryParams.get("is_creator");

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchRequestsByDeal(deal_id));
    dispatch(fetchParticipantsByDeal(deal_id));
  }, [dispatch, deal_id]);

  const handleAccept = async (requestId) => {
    await dispatch(
      processRequest({
        dealId: deal_id,
        requestId,
        inviteStatus: "accept",
      })
    );
    await dispatch(fetchRequestsByDeal(deal_id));
    await dispatch(fetchParticipantsByDeal(deal_id));
  };

  const handleRefuse = async (requestId) => {
    await dispatch(
      processRequest({
        dealId: deal_id,
        requestId,
        inviteStatus: "refuse",
      })
    );
    await dispatch(fetchRequestsByDeal(deal_id));
    await dispatch(fetchParticipantsByDeal(deal_id));
  };

  const handleBackToDeal = () => {
    navigate(-1);
  };

  const handleInviteLovedOnes = () => {
    navigate(
      `/invite-loved-ones?deal_id=${deal_id}` + "&is_creator=" + is_creator
    );
  };

  // Check if either status is loading
  const isLoading =
    requestStatus === "loading" || participantStatus === "loading";

  if (isLoading) {
    return <CustomLoader />; // Display a single loader for the entire page
  }

  return (
    <div className="flex flex-col w-full items-start relative bg-primary-background mx-auto h-screen">
      <div className="flex flex-col w-full items-start gap-[15px] px-[15px] py-[15px] relative flex-[0_0_auto]">
        <div
          className="flex items-center gap-3 pt-0 pb-5 px-0 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-stroke cursor-pointer"
          onClick={handleBackToDeal}
        >
          <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
            <ArrowLeft1
              className="!relative !w-[18px] !h-[18px]"
              color="#637381"
            />
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-text-color text-base tracking-[0] leading-6 whitespace-nowrap">
              {t("invitations.back_to_deal")}
            </div>
          </div>
        </div>
        <div className="relative self-stretch [font-family:'Inter',Helvetica] font-semibold text-primary-color text-2xl tracking-[0] leading-[30px]">
          {t("invitations.managing_loved_ones")}
        </div>
        {requests?.length > 0 && (
          <>
            <div className="flex flex-col items-start gap-2.5 self-stretch w-full relative flex-[0_0_auto]">
              <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-orangeorange text-lg tracking-[0] leading-[26px]">
                {t("invitations.new_requests")}
              </div>
            </div>

            {requests?.map((request, index) => (
              <div key={request.participant_id}>
                <div className="inline-flex items-center gap-[15px] relative flex-[0_0_auto]">
                  <SizeXlCorner
                    className="!h-[50px] !w-[50px]"
                    divClassName="!tracking-[0] !text-lg ![font-style:unset] !font-semibold ![font-family:'Inter',Helvetica] !left-2 !leading-10 !top-1"
                    text={request.participant_name
                      .split(" ")
                      .map((n) => n[0])
                      .join(".")}
                  />
                  <div className="inline-flex flex-col items-start gap-[5px] relative flex-[0_0_auto]">
                    <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap">
                      {request.participant_name}
                    </div>
                    {!request.accepted && !request.refused && (
                      <div className="inline-flex items-start gap-[5px] relative flex-[0_0_auto] mb-5">
                        <div
                          className="inline-flex items-center gap-2.5 px-2.5 py-[5px] relative flex-[0_0_auto] bg-primary-color rounded-[5px] cursor-pointer"
                          onClick={() => handleAccept(request.request_id)}
                        >
                          <CheckmarkCircle className="!relative !w-5 !h-5" />
                          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-whitewhite text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                            {t("invitations.accept_button")}
                          </div>
                        </div>
                        <div
                          className="inline-flex items-center gap-2.5 px-2.5 py-[5px] bg-redred rounded-[5px] relative flex-[0_0_auto] cursor-pointer"
                          onClick={() => handleRefuse(request.request_id)}
                        >
                          <CrossCircle2 className="!relative !w-5 !h-5" />
                          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-whitewhite text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                            {t("invitations.refuse_button")}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <Line />
              </div>
            ))}
          </>
        )}
        {requests?.length === 0 && (
          <div className="w-full">
            <SuccessAlert
              className="!flex !bg-cyancyan-light-3 w-[100%]"
              divClassName="!tracking-[0] !text-sm !flex-1 ![white-space:unset] ![font-style:unset] !font-medium ![font-family:'Inter',Helvetica] !leading-5 !w-[unset]"
              frameClassName="!flex-1 !flex !grow"
              groupClassName="!bg-cyancyan"
              icon={
                <Warning1
                  className="!absolute !w-3 !h-3 !top-1 !left-1"
                  color="white"
                />
              }
              style="three"
              text={t("invitations.no_requests")}
            />
          </div>
        )}
        <div
          className="flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-whitewhite rounded-md shadow-shadow-1 cursor-pointer"
          onClick={handleInviteLovedOnes}
        >
          <Send2 className="!relative !w-5 !h-5" />
          <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            {t("invitations.invite_loved_ones")}
          </button>
        </div>
        <Line />
        <div className="flex flex-col items-start gap-[15px] self-stretch w-full relative flex-[0_0_auto]">
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-lg tracking-[0] leading-[26px]">
            {t("invitations.list_of_relatives")}
          </div>
          <div className="inline-flex flex-col items-start gap-[15px] relative flex-[0_0_auto]">
            {participants?.map((participant, index) => (
              <div
                key={participant.participant_id}
                className="flex items-center gap-[15px] self-stretch w-full relative flex-[0_0_auto]"
              >
                <SizeXlCorner
                  className="!h-[50px] !w-[50px]"
                  divClassName="!tracking-[0] !text-lg ![font-style:unset] !font-semibold ![font-family:'Inter',Helvetica] !left-[9px] !leading-10 !top-1"
                  text={participant.participant_name
                    .split(" ")
                    .map((n) => n[0])
                    .join(".")}
                />
                <div className="inline-flex flex-col items-start gap-[5px] relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap">
                    {participant.participant_name}
                  </div>
                  {/* <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
                    <Box43 className="!relative !w-5 !h-5" />
                    <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                      {participant.orders_count}{" "}
                      {participant.orders_count > 1
                        ? t("invitations.order_on_deal_plural")
                        : t("invitations.order_on_deal_singular")}
                    </p>
                  </div> */}
                </div>
              </div>
            ))}
            {participants?.length === 0 && (
              <div className="w-full">
                <SuccessAlert
                  className="!flex !bg-cyancyan-light-3 w-[100%]"
                  divClassName="!tracking-[0] !text-sm !flex-1 ![white-space:unset] ![font-style:unset] !font-medium ![font-family:'Inter',Helvetica] !leading-5 !w-[unset]"
                  frameClassName="!flex-1 !flex !grow"
                  groupClassName="!bg-cyancyan"
                  icon={
                    <Warning1
                      className="!absolute !w-3 !h-3 !top-1 !left-1"
                      color="white"
                    />
                  }
                  style="three"
                  text={t("invitations.not_invited")}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invitations;
