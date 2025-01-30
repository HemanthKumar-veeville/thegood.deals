import React, { useState, useEffect } from "react";
import { ChatAlt1 } from "../../icons/ChatAlt1";
import { CopyAlt } from "../../icons/CopyAlt";
import { Envelope } from "../../icons/Envelope";
import { FacebookMessenger2 } from "../../icons/FacebookMessenger2";
import { Plus } from "../../icons/Plus";
import { Send1 } from "../../icons/Send1";
import { Whatsapp } from "../../icons/Whatsapp";
import { useTranslation } from "react-i18next";
import AppBar from "../../components/AppBar/AppBar";
import { useNavigate } from "react-router-dom";
import { Line } from "../../components/Line/Line";
import { ShowCustomErrorModal } from "../../components/ErrorAlert/ErrorAlert";
import { ShowCustomSuccessModal } from "../../components/ShowCustomSuccessModal/ShowCustomSuccessModal";
import { useSelector, useDispatch } from "react-redux";
import { getDealByDealId } from "../../redux/app/deals/dealSlice";
import { WS_URL } from "../../config";

const InviteLovedOnes = () => {
  const { t } = useTranslation();
  const [emails, setEmails] = useState([]);
  const [newEmail, setNewEmail] = useState("");
  const queryParams = new URLSearchParams(location.search);
  const dealId = queryParams.get("deal_id");
  const is_creator = queryParams.get("is_creator");
  const link = `https://${WS_URL}/deal_details_invite?deal_id=${dealId}`;
  const deal = useSelector((state) => state.deals.deal?.Deal[0]);

  const shareLink = `
📦 *${deal?.deal_title}*

👉 *${t("inviteLovedOnes.invite_head")}*: 
🔗 ${link}
`;

  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const dispatch = useDispatch();

  const handleAddEmail = () => {
    if (newEmail && !emails.includes(newEmail)) {
      setEmails([...emails, newEmail]);
      setNewEmail("");
    }
  };

  const handleDeleteEmail = (email) => {
    setEmails(emails.filter((e) => e !== email));
  };

  const handleSendInvitations = () => {
    setEmails([]);
    navigate("/admin-invitations-sent");
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(shareLink);
      setIsSuccess(true);
      setSuccessMessage(t("inviteLovedOnes.copied_to_clipboard.message"));
    } catch (err) {
      setIsError(true);
      setErrorMessage(err);
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleShareViaWhatsApp = () => {
    const url = `https://wa.me/?text=${encodeURIComponent(shareLink)}`;
    window.open(url, "_blank");
  };

  const handleShareViaMessenger = () => {
    const url = `fb-messenger://share?link=${encodeURIComponent(shareLink)}`;
    window.open(url, "_blank");
  };

  const handleShareViaSMS = () => {
    const url = `sms:?body=${encodeURIComponent(shareLink)}`;
    window.open(url, "_blank");
  };

  useEffect(() => {
    dispatch(getDealByDealId(dealId));
  }, []);
  return (
    <div className="flex flex-col w-full items-start relative bg-primary-background mx-auto">
      {isError && (
        <ShowCustomErrorModal
          message={errorMessage}
          buttonText={t("waiting_deal.got_it")}
          onClose={() => setIsError(false)}
        />
      )}
      {isSuccess && (
        <ShowCustomSuccessModal
          message={successMessage}
          buttonText={t("waiting_deal.got_it")}
          onClose={() => setIsSuccess(false)} // Reset modal state on close
        />
      )}
      <div className="flex-col w-full items-start gap-[15px] px-[35px] py-[15px] flex-[0_0_auto] flex relative">
        <p className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-primary-color text-2xl tracking-[0] leading-[30px]">
          {t("inviteLovedOnes.title")}
        </p>
        <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-base tracking-[0] leading-6">
          {t("inviteLovedOnes.description")}
        </p>
        <Line />
        <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap">
          {t("inviteLovedOnes.via_messaging")}
        </div>
        <div className="items-start justify-center gap-5 self-stretch w-full flex-[0_0_auto] flex relative">
          <div
            className="bg-[#24cc62] relative w-[45px] h-[45px] rounded-md cursor-pointer"
            onClick={handleShareViaWhatsApp}
          >
            <Whatsapp className="!absolute !w-5 !h-5 !top-[13px] !left-[13px]" />
          </div>
          <div
            className="bg-[#b83bd0] relative w-[45px] h-[45px] rounded-md cursor-pointer"
            onClick={handleShareViaMessenger}
          >
            <FacebookMessenger2
              className="!absolute !w-5 !h-5 !top-3 !left-3"
              color="white"
            />
          </div>
          <div
            className="bg-secondary-color relative w-[45px] h-[45px] rounded-md cursor-pointer"
            onClick={handleShareViaSMS}
          >
            <ChatAlt1 className="!absolute !w-5 !h-5 !top-[13px] !left-3" />
          </div>
        </div>
        <Line />
        <div className="relative self-stretch [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6">
          {t("inviteLovedOnes.via_email_invitations")}
        </div>
        <div className="flex h-[46px] items-center gap-2.5 pl-5 pr-4 py-3 relative self-stretch w-full bg-whitewhite rounded-md border border-solid border-stroke">
          <Envelope className="!relative !w-4 !h-4" color="#6B7280" />
          <input
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            placeholder={t("inviteLovedOnes.placeholder_email")}
            className="flex-1 grow bg-transparent outline-none [font-family:'Inter',Helvetica] text-darkdark-6 text-base"
          />
        </div>
        <div
          className="flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-whitewhite rounded-md shadow-shadow-1 cursor-pointer"
          onClick={handleAddEmail}
        >
          <Plus className="!relative !w-5 !h-5" />
          <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            {t("inviteLovedOnes.add_loved_one")}
          </button>
        </div>
        <div className="flex flex-wrap gap-2 mt-4">
          {emails.map((email, index) => (
            <div
              key={index}
              className="flex items-center bg-primary-color text-white rounded-full px-4 py-2 cursor-pointer shadow-md"
            >
              <span className="mr-2">{email}</span>
              <button
                onClick={() => handleDeleteEmail(email)}
                className="text-sm font-bold text-white hover:text-gray-300"
              >
                &times;
              </button>
            </div>
          ))}
        </div>
        <div
          className="gap-2.5 bg-primary-color flex items-center justify-center px-6 py-3 relative self-stretch w-full flex-[0_0_auto] rounded-md cursor-pointer"
          onClick={handleSendInvitations}
        >
          <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-whitewhite text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            {t("inviteLovedOnes.send_invitation")}
          </button>
          <Send1 className="!relative !w-5 !h-5" color="white" />
        </div>
        <Line />
        <p className="relative self-stretch [font-family:'Inter',Helvetica] font-semibold text-primary-color text-2xl tracking-[0] leading-[30px]">
          {t("inviteLovedOnes.share_link_title")}
        </p>
        <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-base tracking-[0] leading-6">
          {t("inviteLovedOnes.share_link_description")}
        </p>
        <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap">
          {link.slice(0, 50).split("//")[1].split("deal_id").join("")}
        </div>
        <div
          className="flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-whitewhite rounded-md shadow-shadow-1 cursor-pointer"
          onClick={handleCopyLink}
        >
          <CopyAlt className="!relative !w-5 !h-5" color="#1B4F4A" />
          <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            {t("inviteLovedOnes.copy_link")}
          </button>
        </div>
        <Line />
        <button
          className="all-[unset] box-border gap-2 border border-solid border-primary-color flex items-center justify-center px-6 py-3 relative self-stretch w-full flex-[0_0_auto] rounded-md cursor-pointer"
          onClick={handleBack}
        >
          <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            {t("inviteLovedOnes.back_button")}
          </button>
        </button>
      </div>
    </div>
  );
};

export default InviteLovedOnes;
