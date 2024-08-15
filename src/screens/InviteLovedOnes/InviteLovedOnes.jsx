import React, { useState, useEffect } from "react";
import { ChatAlt1 } from "../../icons/ChatAlt1";
import { CopyAlt } from "../../icons/CopyAlt";
import { Envelope } from "../../icons/Envelope";
import { FacebookMessenger2 } from "../../icons/FacebookMessenger2";
import { Plus } from "../../icons/Plus";
import { Send1 } from "../../icons/Send1";
import { UserAlt2 } from "../../icons/UserAlt2";
import { VerticalLine3 } from "../../icons/VerticalLine3/VerticalLine3";
import { Whatsapp } from "../../icons/Whatsapp";
import { Line63 } from "../../images";
import AppBar from "../../components/AppBar/AppBar";
import { useNavigate } from "react-router-dom";

const InviteLovedOnes = () => {
  const [emails, setEmails] = useState([]);
  const [newEmail, setNewEmail] = useState("");
  const shareLink = "thegood.deal/2343qvsgdfb";
  const navigate = useNavigate();

  const handleAddEmail = () => {
    if (newEmail) {
      setEmails([...emails, newEmail]);
      setNewEmail("");
    }
  };

  const handleSendInvitations = () => {
    setEmails([]);
    navigate("/admin-invitations-sent");
  };

  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(shareLink)
      .then(() => {
        alert("Link copied to clipboard");
      })
      .catch((err) => {
        console.error("Could not copy text: ", err);
      });
  };

  const handleBack = () => {
    navigate("/admin-invitations");
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
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col w-screen items-start relative bg-primary-background mx-auto">
      <AppBar />
      <div className="flex-col w-screen items-start gap-[15px] px-[35px] py-[15px] flex-[0_0_auto] flex relative">
        <p className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-primary-color text-2xl tracking-[0] leading-[30px]">
          Invite your loved ones
          <br />
          to order 🍎
        </p>
        <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-base tracking-[0] leading-6">
          Once your invitations have been sent,
          <br />
          your loved ones will be able to order.
        </p>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap">
          Via messaging or SMS
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
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <div className="relative self-stretch [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6">
          Via email invitations
        </div>
        <div className="flex h-[46px] items-center gap-2.5 pl-5 pr-4 py-3 relative self-stretch w-full bg-whitewhite rounded-md border border-solid border-stroke">
          <Envelope className="!relative !w-4 !h-4" color="#6B7280" />
          <input
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            placeholder="ex. contact@gmail.com"
            className="flex-1 grow bg-transparent outline-none [font-family:'Inter',Helvetica] text-darkdark-6 text-base"
          />
        </div>
        <div
          className="flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-whitewhite rounded-md shadow-shadow-1 cursor-pointer"
          onClick={handleAddEmail}
        >
          <Plus className="!relative !w-5 !h-5" />
          <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            Add a loved one
          </button>
        </div>
        <div
          className="gap-2.5 bg-primary-color flex items-center justify-center px-6 py-3 relative self-stretch w-full flex-[0_0_auto] rounded-md cursor-pointer"
          onClick={handleSendInvitations}
        >
          <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-whitewhite text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            Send invitation
          </button>
          <Send1 className="!relative !w-5 !h-5" color="white" />
        </div>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <p className="relative self-stretch [font-family:'Inter',Helvetica] font-semibold text-primary-color text-2xl tracking-[0] leading-[30px]">
          Otherwise, copy and paste this share link 🔗
        </p>
        <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-base tracking-[0] leading-6">
          This link is to be shared between you in order to maintain the
          exclusivity of the deal 😉
        </p>
        <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap">
          {shareLink}
        </div>
        <div
          className="flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-whitewhite rounded-md shadow-shadow-1 cursor-pointer"
          onClick={handleCopyLink}
        >
          <CopyAlt className="!relative !w-5 !h-5" color="#1B4F4A" />
          <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            Copy link
          </button>
        </div>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <button
          className="all-[unset] box-border gap-2 border border-solid border-primary-color flex items-center justify-center px-6 py-3 relative self-stretch w-full flex-[0_0_auto] rounded-md cursor-pointer"
          onClick={handleBack}
        >
          <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            Back
          </button>
        </button>
      </div>
    </div>
  );
};

export default InviteLovedOnes;
