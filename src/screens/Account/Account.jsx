import React, { useEffect, useState } from "react";
import { ButtonGroup } from "../../components/ButtonGroup";
import { CardDeal } from "../../components/CardDeal";
import { StyleTypePrimaryWrapper } from "../../components/StyleTypePrimaryWrapper";
import { CirclePlus92 } from "../../icons/CirclePlus92";
import { ClockDollar1 } from "../../icons/ClockDollar1";
import { Cog2 } from "../../icons/Cog2";
import { UserAlt2 } from "../../icons/UserAlt2";
import { UserAlt5 } from "../../icons/UserAlt5";
import { UserLock1 } from "../../icons/UserLock1";
import { Users3 } from "../../icons/Users3";
import { ChatAlt6 } from "../../icons/ChatAlt6";
import { Line63, Line_60_1, Line_59_2 } from "../../images";
import AppBar from "../../components/AppBar/AppBar";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProgressBarYellow from "../../components/ProgressBar/ProgressBarYellow";
import ProgressBarGreen from "../../components/ProgressBar/ProgressBarGreen";
import { fetchDeals } from "../../redux/app/deals/dealSlice";
import { CustomLoader } from "../../components/CustomLoader";

const Account = () => {
  const [activeTab, setActiveTab] = useState("created");
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const dealsState = useSelector((state) => state.deals);
  const { deals, status } = dealsState;
  console.log({ status });
  useEffect(() => {
    location?.state?.activeTab &&
      handleTabSwitch(location?.state?.activeTab || activeTab);
  }, [activeTab]);

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
    dispatch(fetchDeals({ deal_type: tab, page: 1, limit: 3 }));
  };

  useEffect(() => {
    dispatch(fetchDeals({ deal_type: "created", page: 1, limit: 3 }));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCreateDeal = () => {
    navigate("/create-deal");
  };

  const handleMyInformation = () => {
    navigate("/my-information");
  };

  const handleWalletDetails = () => {
    navigate("/admin-wallet");
  };

  const handleSettings = () => {
    navigate("/settings");
  };

  const handleAcquireHelp = () => {
    navigate("/help-me");
  };

  const handleSignOut = () => {
    navigate("/auth?login");
  };

  const handleCardClick = (deal) => {
    switch (deal?.dealStatus) {
      case "draft":
        navigate("/admin-draft-deal", { state: { deal } });
        break;
      case "waiting":
        navigate("/admin-waiting-deal", { state: { deal } });
        break;
      case "in_stock":
        activeTab !== "created"
          ? navigate("/guest-deal-view", { state: { deal } })
          : navigate("/admin-active-deal", { state: { deal } });
        break;
      case "out_of_stock":
        activeTab !== "created"
          ? navigate("/guest-deal-view", { state: { deal } })
          : navigate("/admin-active-deal", { state: { deal } });
        break;
      case "finished":
        activeTab !== "created"
          ? navigate("/guest-deal-view", { state: { deal } })
          : navigate("/admin-active-deal", { state: { deal } });
        break;
      default:
        navigate("/admin-active-deal", { state: { deal } });
    }
  };

  return (
    <div className="flex flex-col w-screen items-start relative bg-primary-background mx-auto h-screen">
      <AppBar />
      <div className="flex flex-col w-screen items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto] z-0">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-primary-color text-2xl text-center tracking-[0] leading-[30px] whitespace-nowrap">
          Hey 👋🏻 Anthony
        </div>
        <div
          className="flex items-center justify-center gap-2.5 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-primary-color rounded-md hover:bg-primary-dark-color cursor-pointer"
          onClick={handleCreateDeal}
        >
          <CirclePlus92 className="!relative !w-5 !h-5" />
          <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            Create a good deal
          </button>
        </div>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <div className="relative w-fit [font-family:'Inter',Helvetica] font-semibold text-primary-color text-2xl text-center tracking-[0] leading-[30px] whitespace-nowrap">
          My good deals
        </div>
        <div className="flex items-start relative self-stretch w-full flex-[0_0_auto]">
          <div
            className={`flex-1 flex grow cursor-pointer ${
              activeTab === "created"
                ? "bg-primary-dark-color text-white"
                : "text-primary-color hover:bg-gray-200"
            }`}
            onClick={() => handleTabSwitch("created")}
          >
            <ButtonGroup
              buttonClassName={`!mt-[-1.00px]`}
              className={`!rounded-[6px_0px_0px_6px] !mt-[-1.50px] !ml-[-1.50px] !mb-[-1.50px] !flex-1 !flex !grow`}
              icon={
                <UserAlt5
                  className="!relative !w-[18px] !h-[18px]"
                  color={activeTab === "created" ? "white" : "#1B4F4A"}
                />
              }
              state={activeTab === "created" ? "active" : "default"}
              text="Created"
            />
          </div>
          <div
            className={`flex-1 flex grow cursor-pointer ${
              activeTab === "invited"
                ? "bg-primary-dark-color text-white"
                : "text-primary-color hover:bg-gray-200"
            }`}
            onClick={() => handleTabSwitch("invited")}
          >
            <ButtonGroup
              buttonClassName={`!mt-[-1.00px]`}
              className={`!rounded-[0px_6px_6px_0px] !mr-[-1.00px] !mt-[-1.00px] !mb-[-1.00px] !flex-1 !flex !grow`}
              icon={
                <Users3
                  className="!relative !w-[18px] !h-[18px]"
                  color={activeTab === "invited" ? "white" : "#1B4F4A"}
                />
              }
              state={activeTab === "invited" ? "active" : "default"}
              text="Invited"
            />
          </div>
        </div>
        {status === "loading" && <CustomLoader />}
        {status !== "loading" &&
          deals?.Deals?.map((deal) => (
            <div
              onClick={() => handleCardClick(deal)}
              className="cursor-pointer"
            >
              <CardDeal
                badgesColor="success"
                badgesDivClassName="!tracking-[0] !text-xs ![font-style:unset] !font-medium ![font-family:'Inter',Helvetica] !leading-5"
                badgesText1={deal.dealStatus}
                caissesDeVinsClassName="!tracking-[0] !text-base ![font-style:unset] !font-bold ![font-family:'Inter',Helvetica] !leading-6"
                className="!flex-[0_0_auto]"
                divClassName="!tracking-[0] !text-sm ![font-style:unset] !font-medium ![font-family:'Inter',Helvetica] !leading-[22px]"
                divClassNameOverride="!tracking-[0] !text-sm ![font-style:unset] !font-normal ![font-family:'Inter',Helvetica] !leading-[22px]"
                override={
                  deal.dealStatus === "out_of_stock" ? (
                    <ProgressBarYellow percentage={98} />
                  ) : (
                    <ProgressBarGreen percentage={90} />
                  )
                }
                text={deal.deal_title}
                text1={deal.deal_status}
                participantsCount={deal.deal_participants_count}
                dealEndsIn={deal?.deal_ends_in}
                isGuestDeal={activeTab === "invited"}
              />
            </div>
          ))}
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <div
          className="inline-flex items-center gap-2.5 relative flex-[0_0_auto] hover:text-primary-color-dark cursor-pointer"
          onClick={handleMyInformation}
        >
          <UserAlt2 className="!relative !w-5 !h-5" />
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-base tracking-[0] leading-6 whitespace-nowrap">
            My information
          </div>
        </div>
        <div
          className="inline-flex items-center gap-2.5 relative flex-[0_0_auto] hover:text-primary-color-dark cursor-pointer"
          onClick={handleWalletDetails}
        >
          <ClockDollar1 className="!relative !w-5 !h-5" color="#1B4F4A" />
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-base tracking-[0] leading-6 whitespace-nowrap">
            Wallet details
          </div>
        </div>
        <div
          className="inline-flex items-center gap-2.5 relative flex-[0_0_auto] hover:text-primary-color-dark cursor-pointer"
          onClick={handleSettings}
        >
          <Cog2 className="!relative !w-5 !h-5" color="#1B4F4A" />
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-base tracking-[0] leading-6 whitespace-nowrap">
            Settings
          </div>
        </div>
        <div
          className="inline-flex items-center gap-2.5 relative flex-[0_0_auto] hover:text-primary-color-dark cursor-pointer"
          onClick={handleAcquireHelp}
        >
          <ChatAlt6 className="!relative !w-5 !h-5" color="#1B4F4A" />
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-base tracking-[0] leading-6 whitespace-nowrap">
            Acquire help
          </div>
        </div>
        <div
          className="inline-flex items-center gap-2.5 relative flex-[0_0_auto] hover:text-primary-color-dark cursor-pointer"
          onClick={handleSignOut}
        >
          <UserLock1 className="!relative !w-5 !h-5" color="#1B4F4A" />
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-base tracking-[0] leading-6 whitespace-nowrap">
            Sign out
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
