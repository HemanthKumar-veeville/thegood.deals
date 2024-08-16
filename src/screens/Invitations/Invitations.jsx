import React, { useState, useEffect } from "react";
import { SizeXlCorner } from "../../components/SizeXlCorner";
import { ArrowLeft1 } from "../../icons/ArrowLeft1";
import { Box43 } from "../../icons/Box43";
import { CheckmarkCircle } from "../../icons/CheckmarkCircle";
import { CrossCircle2 } from "../../icons/CrossCircle2";
import { Send2 } from "../../icons/Send2";
import { UserAlt4 } from "../../icons/UserAlt4/UserAlt4";
import { VerticalLine3 } from "../../icons/VerticalLine3/VerticalLine3";
import AppBar from "../../components/AppBar/AppBar";
import { Line63 } from "../../images";
import { useNavigate } from "react-router-dom";

const Invitations = () => {
  const [requests, setRequests] = useState([
    { name: "Abraham Thomas", accepted: false, refused: false },
    { name: "Karthik Ramesh", accepted: false, refused: false },
  ]);
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAccept = (name) => {
    setRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.name === name
          ? { ...request, accepted: true, refused: false }
          : request
      )
    );
  };

  const handleRefuse = (name) => {
    setRequests((prevRequests) =>
      prevRequests.map((request) =>
        request.name === name
          ? { ...request, accepted: false, refused: true }
          : request
      )
    );
  };

  const handleBackToDeal = () => {
    navigate("/admin-active-deal");
  };

  const handleInviteLovedOnes = () => {
    navigate("/invite-loved-ones");
  };

  return (
    <div className="flex flex-col w-screen items-start relative bg-primary-background mx-auto h-screen">
      <div className="flex flex-col w-screen items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]">
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
              Back to the deal
            </div>
          </div>
        </div>
        <div className="relative self-stretch [font-family:'Inter',Helvetica] font-semibold text-primary-color text-2xl tracking-[0] leading-[30px]">
          Managing my loved ones
        </div>
        <div className="flex flex-col items-start gap-2.5 self-stretch w-full relative flex-[0_0_auto]">
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-orangeorange text-lg tracking-[0] leading-[26px]">
            New requests
          </div>
        </div>
        {requests.map((request, index) => (
          <div key={index}>
            <div className="inline-flex items-center gap-[15px] relative flex-[0_0_auto]">
              <SizeXlCorner
                className="!h-[50px] !w-[50px]"
                divClassName="!tracking-[0] !text-lg ![font-style:unset] !font-semibold ![font-family:'Inter',Helvetica] !left-2 !leading-10 !top-1"
                text={request.name
                  .split(" ")
                  .map((n) => n[0])
                  .join(".")}
              />
              <div className="inline-flex flex-col items-start gap-[5px] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap">
                  {request.name}
                </div>
                {!request.accepted && !request.refused && (
                  <div className="inline-flex items-start gap-[5px] relative flex-[0_0_auto] mb-5">
                    <div
                      className="inline-flex items-center gap-2.5 px-2.5 py-[5px] relative flex-[0_0_auto] bg-primary-color rounded-[5px] cursor-pointer"
                      onClick={() => handleAccept(request.name)}
                    >
                      <CheckmarkCircle className="!relative !w-5 !h-5" />
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-whitewhite text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                        Accept
                      </div>
                    </div>
                    <div
                      className="inline-flex items-center gap-2.5 px-2.5 py-[5px] bg-redred rounded-[5px] relative flex-[0_0_auto] cursor-pointer"
                      onClick={() => handleRefuse(request.name)}
                    >
                      <CrossCircle2 className="!relative !w-5 !h-5" />
                      <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-whitewhite text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                        Refuse
                      </div>
                    </div>
                  </div>
                )}
                {request.accepted && (
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-green-500 text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                    Request accepted
                  </div>
                )}
                {request.refused && (
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-red-500 text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                    Request refused
                  </div>
                )}
              </div>
            </div>
            <img
              className="relative self-stretch w-full h-px object-cover"
              alt="Line"
              src={Line63}
            />
          </div>
        ))}
        <div
          className="flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-whitewhite rounded-md shadow-shadow-1 cursor-pointer"
          onClick={handleInviteLovedOnes}
        >
          <Send2 className="!relative !w-5 !h-5" />
          <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            Invite my loved ones
          </button>
        </div>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <div className="flex flex-col items-start gap-[15px] self-stretch w-full relative flex-[0_0_auto]">
          <div className="relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-lg tracking-[0] leading-[26px]">
            List of relatives
          </div>
          <div className="inline-flex flex-col items-start gap-[15px] relative flex-[0_0_auto]">
            <div className="flex items-center gap-[15px] self-stretch w-full relative flex-[0_0_auto]">
              <SizeXlCorner
                className="!h-[50px] !w-[50px]"
                divClassName="!tracking-[0] !text-lg ![font-style:unset] !font-semibold ![font-family:'Inter',Helvetica] !left-[9px] !leading-10 !top-1"
                text="J.D."
              />
              <div className="inline-flex flex-col items-start gap-[5px] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap">
                  Jon Doe
                </div>
                <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
                  <Box43 className="!relative !w-5 !h-5" />
                  <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                    1 order on the deal
                  </p>
                </div>
              </div>
            </div>
            <div className="inline-flex items-center gap-[15px] relative flex-[0_0_auto]">
              <SizeXlCorner
                className="!h-[50px] !w-[50px]"
                divClassName="!tracking-[0] !text-lg ![font-style:unset] !font-semibold ![font-family:'Inter',Helvetica] !left-[9px] !leading-10 !top-1"
                text="J.D."
              />
              <div className="inline-flex flex-col items-start gap-[5px] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap">
                  Jane Doe
                </div>
                <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
                  <Box43 className="!relative !w-5 !h-5" />
                  <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                    2 orders on the deal
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invitations;
