import React, { useState, useEffect } from "react";
import { ArrowLeft2 } from "../../icons/ArrowLeft2";
import { Box4 } from "../../icons/Box4";
import { FileExport2 } from "../../icons/FileExport2";
import { UserAlt2 } from "../../icons/UserAlt2";
import { VerticalLine3 } from "../../icons/VerticalLine3/VerticalLine3";
import AppBar from "../../components/AppBar/AppBar";
import { Line63 } from "../../images";
import { useNavigate } from "react-router-dom";

const Wallet = () => {
  const [fundsUnlocked, setFundsUnlocked] = useState(false);
  const navigate = useNavigate();
  const handleUnlockFunds = () => {
    // Logic for unlocking funds
    setFundsUnlocked(true);
    navigate("/admin-withdrawal");
  };

  const handleBackToHome = () => {
    // Logic for navigating back to home
    navigate("/account");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col w-screen h-screen items-start relative bg-primary-background mx-auto">
      <AppBar />
      <div className="flex flex-col w-screen items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]">
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
              Back
            </div>
          </div>
        </div>
        <div className="relative self-stretch [font-family:'Inter',Helvetica] font-semibold text-primary-color text-2xl tracking-[0] leading-[30px]">
          My wallet
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
                  My wallet
                </div>
                <div className="relative w-fit [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                  Deal amount collected
                </div>
              </div>
            </div>
            <div className="inline-flex items-end gap-[5px] relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-darkdark text-2xl tracking-[0] leading-[30px] whitespace-nowrap">
                €823
              </div>
              <div className="relative w-[91px] h-[22px]" />
            </div>
          </div>
        </div>
        <p className="relative self-stretch [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-base tracking-[0] leading-6">
          The money from your deals is stored here!
          <br />
          You can unlock it once the deals expire.
        </p>
        <div
          className="flex items-center justify-center gap-2.5 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-primary-color rounded-md cursor-pointer"
          onClick={handleUnlockFunds}
        >
          <FileExport2 className="!relative !w-5 !h-5" />
          <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-whitewhite text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            Unlock funds
          </button>
        </div>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <div
          className="flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-whitewhite rounded-md shadow-shadow-1 cursor-pointer"
          onClick={handleBackToHome}
        >
          <ArrowLeft2 className="!relative !w-5 !h-5" color="#1B4F4A" />
          <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
