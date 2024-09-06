import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { ButtonGroup } from "../../components/ButtonGroup";
import { CardDeal } from "../../components/CardDeal";
import { CirclePlus92 } from "../../icons/CirclePlus92";
import { ClockDollar1 } from "../../icons/ClockDollar1";
import { Cog2 } from "../../icons/Cog2";
import { UserAlt2 } from "../../icons/UserAlt2";
import { UserAlt5 } from "../../icons/UserAlt5";
import { UserLock1 } from "../../icons/UserLock1";
import { Users3 } from "../../icons/Users3";
import { ChatAlt6 } from "../../icons/ChatAlt6";
import { Line63 } from "../../images";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProgressBarYellow from "../../components/ProgressBar/ProgressBarYellow";
import ProgressBarGreen from "../../components/ProgressBar/ProgressBarGreen";
import { fetchDeals } from "../../redux/app/deals/dealSlice";
import CustomLoader from "../../components/CustomLoader/CustomLoader.jsx";
import { logoutUser } from "../../redux/app/user/userSlice";
import { SuccessAlert } from "../../components/SuccessAlert/SuccessAlert.jsx";
import { Warning1 } from "../../icons/Warning1/Warning1.jsx";

const Account = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("created");
  const [page, setPage] = useState(1); // Track current page
  const [isFetchingMore, setIsFetchingMore] = useState(false); // Track if more data is being fetched

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const dealsState = useSelector((state) => state.deals);
  const { deals, status } = dealsState;

  const scrollableContainerRef = useRef(null); // Ref for the scrollable container

  useEffect(() => {
    if (location?.state?.activeTab) {
      handleTabSwitch(location.state.activeTab || activeTab);
    } else {
      dispatch(fetchDeals({ deal_type: activeTab, page: 1, limit: 3 }));
    }
  }, [activeTab, dispatch]);

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
    setPage(1); // Reset to page 1 when switching tabs
    dispatch(fetchDeals({ deal_type: tab, page: 1, limit: 3 }));
  };

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
    dispatch(logoutUser()).then(() => {
      navigate("/auth?login");
    });
  };

  const handleCardClick = (deal) => {
    switch (deal?.dealStatus) {
      case "draft":
        navigate(
          `/admin-draft-deal?deal_id=${deal.deal_id}&is_creator=${deal.is_creator}`,
          { state: { deal } }
        );
        break;
      case "waiting":
        navigate(
          `/admin-waiting-deal?deal_id=${deal.deal_id}&is_creator=${deal.is_creator}`,
          { state: { deal } }
        );
        break;
      case "in_stock":
        activeTab !== "created"
          ? navigate(
              `/guest-deal-view?deal_id=${deal.deal_id}&is_creator=${deal.is_creator}`,
              { state: { deal } }
            )
          : navigate(
              `/admin-active-deal?deal_id=${deal.deal_id}&is_creator=${deal.is_creator}`,
              { state: { deal } }
            );
        break;
      case "out_of_stock":
        activeTab !== "created"
          ? navigate(
              `/guest-deal-view?deal_id=${deal.deal_id}&is_creator=${deal.is_creator}`,
              { state: { deal } }
            )
          : navigate(
              `/admin-active-deal?deal_id=${deal.deal_id}&is_creator=${deal.is_creator}`,
              { state: { deal } }
            );
        break;
      case "finished":
        activeTab !== "created"
          ? navigate(
              `/guest-deal-view?deal_id=${deal.deal_id}&is_creator=${deal.is_creator}`,
              { state: { deal } }
            )
          : navigate(
              `/admin-active-deal?deal_id=${deal.deal_id}&is_creator=${deal.is_creator}`,
              { state: { deal } }
            );
        break;
      default:
        navigate(
          `/admin-active-deal?deal_id=${deal.deal_id}&is_creator=${deal.is_creator}`,
          { state: { deal } }
        );
    }
  };

  // Function to load more deals when scrolled to the top or bottom
  const loadMoreDeals = (direction) => {
    if (status === "loading" || isFetchingMore) return;

    setIsFetchingMore(true); // Indicate that more data is being fetched
    const nextPage = direction === "bottom" ? page + 1 : Math.max(1, page - 1);

    dispatch(fetchDeals({ deal_type: activeTab, page: nextPage, limit: 3 }))
      .then(() => {
        setPage((prevPage) => nextPage); // Update the page number after fetching
      })
      .finally(() => {
        setIsFetchingMore(false); // Reset the fetching state
      });
  };

  // Function to handle scroll event on the container
  const handleContainerScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } =
      scrollableContainerRef.current;
    console.log(scrollTop, scrollHeight, clientHeight);
    if (scrollTop === 0) {
      // Reached the top
      loadMoreDeals("top");
    } else if (scrollTop + clientHeight >= scrollHeight - 50) {
      // Reached the bottom
      loadMoreDeals("bottom");
    }
  };

  return (
    <div className="flex flex-col w-full items-start relative bg-primary-background mx-auto h-full">
      <div className="flex flex-col w-full items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto] z-0">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-primary-color text-2xl text-center tracking-[0] leading-[30px] whitespace-nowrap">
          {t("account.greeting")} {/* Hey 👋🏻 Anthony */}
        </div>
        <div
          className="flex items-center justify-center gap-2.5 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-primary-color rounded-md hover:bg-primary-dark-color cursor-pointer"
          onClick={handleCreateDeal}
        >
          <CirclePlus92 className="!relative !w-5 !h-5" />
          <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            {t("account.create_deal")} {/* Create a good deal */}
          </button>
        </div>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <div className="relative w-fit [font-family:'Inter',Helvetica] font-semibold text-primary-color text-2xl text-center tracking-[0] leading-[30px] whitespace-nowrap">
          {t("account.my_good_deals")} {/* My good deals */}
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
              text={t("account.created")}
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
              text={t("account.invited")}
            />
          </div>
        </div>
        <div
          className="h-72 overflow-y-auto"
          ref={scrollableContainerRef}
          onScroll={handleContainerScroll}
        >
          {status === "loading" && <CustomLoader />}
          {status !== "loading" &&
            deals?.Deals?.map((deal) => (
              <div
                onClick={() => handleCardClick(deal)}
                className="cursor-pointer mb-5"
                key={deal.id} // Add key to the mapped elements
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
                  dealImage={deal.deal_image}
                />
              </div>
            ))}
          {status !== "loading" && deals?.Deals?.length === 0 && (
            <div className="w-[18rem]">
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
                text={
                  activeTab === "created" ? (
                    <>
                      You don't have any deals.
                      <br />
                       Create one now!
                    </>
                  ) : (
                    <>
                      You are not in any deals.
                      <br />
                       Wait until you are invited!
                    </>
                  )
                }
              />
            </div>
          )}
        </div>
        {isFetchingMore && <CustomLoader />} {/* Loader for infinite scroll */}
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
            {t("account.my_information")} {/* My information */}
          </div>
        </div>
        <div
          className="inline-flex items-center gap-2.5 relative flex-[0_0_auto] hover:text-primary-color-dark cursor-pointer"
          onClick={handleWalletDetails}
        >
          <ClockDollar1 className="!relative !w-5 !h-5" color="#1B4F4A" />
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-base tracking-[0] leading-6 whitespace-nowrap">
            {t("account.wallet_details")} {/* Wallet details */}
          </div>
        </div>
        <div
          className="inline-flex items-center gap-2.5 relative flex-[0_0_auto] hover:text-primary-color-dark cursor-pointer"
          onClick={handleSettings}
        >
          <Cog2 className="!relative !w-5 !h-5" color="#1B4F4A" />
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-base tracking-[0] leading-6 whitespace-nowrap">
            {t("account.settings")} {/* Settings */}
          </div>
        </div>
        <div
          className="inline-flex items-center gap-2.5 relative flex-[0_0_auto] hover:text-primary-color-dark cursor-pointer"
          onClick={handleAcquireHelp}
        >
          <ChatAlt6 className="!relative !w-5 !h-5" color="#1B4F4A" />
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-base tracking-[0] leading-6 whitespace-nowrap">
            {t("account.acquire_help")} {/* Acquire help */}
          </div>
        </div>
        <div
          className="inline-flex items-center gap-2.5 relative flex-[0_0_auto] hover:text-primary-color-dark cursor-pointer"
          onClick={handleSignOut}
        >
          <UserLock1 className="!relative !w-5 !h-5" color="#1B4F4A" />
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-base tracking-[0] leading-6 whitespace-nowrap">
            {t("account.sign_out")} {/* Sign out */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;
