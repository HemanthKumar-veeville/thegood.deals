import React, { useState } from "react";
import { ChevronDown } from "../../icons/ChevronDown/ChevronDown";
import { useNavigate } from "react-router-dom";
import { UserAlt } from "../../icons/UserAlt";
import { VerticalLine } from "../../icons/VerticalLine";
import SideBar from "../../screens/SideBar/SideBar";

function AppBar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className="relative">
      <header className="flex flex-col w-screen h-16 items-start relative bg-primary-background border-b border-stroke z-50">
        <div className="flex h-16 items-center justify-between pl-5 pr-3 py-0 relative self-stretch w-full">
          <div
            className="flex w-12 h-12 items-center justify-center gap-2.5 relative hover:bg-gray-200 rounded-full cursor-pointer"
            onClick={handleOpen}
          >
            {!open ? (
              <VerticalLine className="!relative !w-6 !h-6" />
            ) : (
              <ChevronDown className="!relative !w-6 !h-6" />
            )}
          </div>
          <div className="inline-flex items-start relative flex-[0_0_auto]">
            <div className="inline-flex items-start relative flex-[0_0_auto]">
              <div className="inline-flex items-start relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-bold text-[28px] text-center tracking-[0] leading-[normal] whitespace-nowrap">
                  <span className="text-primary-color">thegood</span>
                  <span className="text-custom-yellow">.</span>
                  <span className="text-custom-orange">deals</span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex w-12 h-12 items-center justify-center gap-2.5 relative hover:bg-gray-200 rounded-full cursor-pointer"
            onClick={() => navigate("/auth?login")}
          >
            <UserAlt className="!relative !w-6 !h-6" />
          </div>
        </div>
      </header>
      {open && <SideBar onClose={handleOpen} />}
    </div>
  );
}

export default AppBar;
