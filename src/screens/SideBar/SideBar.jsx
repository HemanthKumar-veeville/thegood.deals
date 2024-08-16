import React, { useEffect } from "react";
import { Button } from "../../components/Button/Button";
import { LogoTheGoodDeals } from "../../components/LogoTheGoodDeals";
import { ChevronDown1 } from "../../icons/ChevronDown1";
import { UserAlt3 } from "../../icons/UserAlt3";
import { useNavigate, useLocation } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {}, [location]);

  const handleClose = () => {
    navigate(-1);
  };

  const handleProfile = () => {
    navigate("/");
  };

  const handleAbout = () => {
    navigate("/about-us");
  };

  const handleHowItWorks = () => {
    navigate("/how-it-works");
  };

  return (
    <div className="flex flex-col w-[360px] h-[812px] items-start relative bg-primary-background">
      <div className="flex flex-col w-[360px] h-[748px] items-start gap-2.5 pt-4 pb-40 px-5 relative">
        <div className="items-center justify-center gap-6 flex flex-col relative self-stretch w-full flex-[0_0_auto]">
          <div className="items-start flex flex-col relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex items-start gap-2 px-0 py-3 relative self-stretch w-full flex-[0_0_auto]">
              <div
                onClick={handleAbout}
                className="relative flex-1 mt-[-1.00px] font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[#2a4e4a] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]"
              >
                About
              </div>
            </div>
            <div
              className="flex items-start gap-2 px-0 py-3 relative self-stretch w-full flex-[0_0_auto]"
              onClick={handleHowItWorks}
            >
              <div className="relative flex-1 mt-[-1.00px] font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[#2a4e4a] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                How it works?
              </div>
            </div>
            <div className="flex items-start gap-2 px-0 py-3 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative flex-1 mt-[-1.00px] font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[#2a4e4a] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                FAQ
              </div>
            </div>
            <div className="flex items-start gap-2 px-0 py-3 relative self-stretch w-full flex-[0_0_auto]">
              <div className="flex items-center gap-1 relative flex-1 grow">
                <div className="relative flex-1 mt-[-1.00px] font-text-medium-normal font-[number:var(--text-medium-normal-font-weight)] text-[#2a4e4a] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)] [font-style:var(--text-medium-normal-font-style)]">
                  Contact us
                </div>
              </div>
            </div>
          </div>
          <div className="inline-flex flex-col items-center gap-4 pt-4 pb-0 px-0 relative flex-[0_0_auto] w-full">
            <button
              className="w-full all-[unset] box-border inline-flex items-center justify-center gap-2 px-6 py-3 relative flex-[0_0_auto] mt-[-2.00px] bg-green rounded-[100px] border border-solid border-green hover:bg-[#15423b] hover:text-[#d4d4d4] cursor-pointer"
              onClick={() => navigate("/auth?login")}
            >
              <button className="all-[unset] box-border relative w-fit mt-[-1.00px] ml-[-1.00px] [font-family:'Rethink_Sans',Helvetica] font-normal text-white text-base tracking-[0] leading-6 whitespace-nowrap">
                Create a good deal
              </button>
            </button>
            <button
              className="w-full all-[unset] text-green box-border inline-flex items-center justify-center gap-2 px-6 py-3 relative flex-[0_0_auto] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] rounded-[100px] border border-solid border-green hover:bg-[#1b4f4a] hover:text-white cursor-pointer"
              onClick={() => navigate("/auth?login")}
            >
              <span className="all-[unset] box-border relative w-fit [font-family:'Rethink_Sans',Helvetica] font-normal text-base tracking-[0] leading-6 whitespace-nowrap hover:bg-[#1b4f4a] hover:text-white cursor-pointer">
                My account
              </span>
            </button>
            <button
              className="w-full all-[unset] text-green box-border inline-flex items-center justify-center gap-2 px-6 py-3 relative flex-[0_0_auto] mb-[-1.00px] ml-[-1.00px] mr-[-1.00px] rounded-[100px] border border-solid border-green hover:bg-[#1b4f4a] hover:text-white cursor-pointer"
              onClick={() => navigate("/auth?login")}
            >
              <span className="all-[unset] box-border relative w-fit [font-family:'Rethink_Sans',Helvetica] font-normal text-base tracking-[0] leading-6 whitespace-nowrap hover:bg-[#1b4f4a] hover:text-white cursor-pointer">
                English
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
