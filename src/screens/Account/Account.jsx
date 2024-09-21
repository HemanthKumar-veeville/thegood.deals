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
import { blogImage, Line63 } from "../../images";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProgressBarYellow from "../../components/ProgressBar/ProgressBarYellow";
import ProgressBarGreen from "../../components/ProgressBar/ProgressBarGreen";
import { fetchDeals } from "../../redux/app/deals/dealSlice";
import CustomLoader from "../../components/CustomLoader/CustomLoader.jsx";
import {
  checkUserLoginStatus,
  logoutUser,
  fetchUserProfileWithDealsAndReviews,
} from "../../redux/app/user/userSlice";
import { SuccessAlert } from "../../components/SuccessAlert/SuccessAlert.jsx";
import { Warning1 } from "../../icons/Warning1/Warning1.jsx";

const Account = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("created");
  const [page, setPage] = useState(1);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const dealsState = useSelector((state) => state.deals);
  const { deals = [], status } = dealsState;
  const { profile } = useSelector((state) => state.user);
  const scrollableContainerRef = useRef(null);
  console.log({ deals });
  useEffect(() => {
    const activeTabFromLocation = location?.state?.activeTab || activeTab;
    handleTabSwitch(activeTabFromLocation);
  }, [location, activeTab, dispatch]);

  const handleTabSwitch = (tab) => {
    setActiveTab(tab);
    setPage(1);
    dispatch(fetchDeals({ deal_type: tab, page: 1, limit: 3 }));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchUserProfileWithDealsAndReviews());
    dispatch(checkUserLoginStatus());
  }, [dispatch]);

  const handleNavigation = (path) => navigate(path);

  const handleCardClick = (deal) => {
    if (!deal || !deal.deal_id) return; // Handle case where deal data is empty or missing

    const route =
      deal.deal_status === "draft"
        ? "/admin-draft-deal"
        : deal.deal_status === "waiting"
        ? "/admin-waiting-deal"
        : activeTab === "created"
        ? "/admin-active-deal"
        : "/guest-deal-view";

    navigate(`${route}?deal_id=${deal.deal_id}&is_creator=${deal.is_creator}`, {
      state: { deal },
    });
  };

  const loadMoreDeals = (direction) => {
    if (status === "loading" || isFetchingMore) return;

    setIsFetchingMore(true);
    const nextPage = direction === "bottom" ? page + 1 : Math.max(1, page - 1);
    dispatch(fetchDeals({ deal_type: activeTab, page: nextPage, limit: 3 }))
      .then(() => setPage(nextPage))
      .finally(() => setIsFetchingMore(false));
  };

  const handleContainerScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } =
      scrollableContainerRef.current;
    if (scrollTop === 0) loadMoreDeals("top");
    else if (scrollTop + clientHeight >= scrollHeight - 50)
      loadMoreDeals("bottom");
  };

  // Define handleSignOut function
  const handleSignOut = () => {
    dispatch(logoutUser()).then(() => {
      navigate("/auth?login");
    });
  };

  return (
    <div className="flex flex-col w-full items-start relative bg-primary-background mx-auto h-full">
      <div className="flex flex-col w-full items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto] z-0">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-primary-color text-2xl text-center tracking-[0] leading-[30px] whitespace-nowrap capitalize">
          {`Hey, ${profile?.name || "User"} 👋🏻`}
        </div>
        <div
          className="flex items-center justify-center gap-2.5 px-6 py-3 relative self-stretch w-full bg-primary-color rounded-md hover:bg-primary-dark-color cursor-pointer"
          onClick={() => handleNavigation("/create-deal")}
        >
          <CirclePlus92 className="!w-5 !h-5" />
          <button className="box-border font-medium text-white text-base text-center">
            {t("account.create_deal")}
          </button>
        </div>
        <img className="self-stretch w-full h-px" alt="Line" src={Line63} />
        <div className="relative w-fit font-semibold text-primary-color text-2xl text-center">
          {t("account.my_good_deals")}
        </div>
        <div className="flex w-full">
          {["created", "invited"].map((tab) => (
            <div
              key={tab}
              className={`flex-1 flex grow cursor-pointer ${
                activeTab === tab
                  ? "bg-primary-dark-color text-white"
                  : "text-primary-color hover:bg-gray-200"
              }`}
              onClick={() => handleTabSwitch(tab)}
            >
              <ButtonGroup
                buttonClassName="!mt-[-1.00px]"
                className={`!flex-1 !flex grow ${
                  tab === "created"
                    ? "!rounded-[6px_0_0_6px]"
                    : "!rounded-[0_6px_6px_0]"
                }`}
                icon={
                  tab === "created" ? (
                    <UserAlt5
                      className="!w-[18px] !h-[18px]"
                      color={activeTab === "created" ? "white" : "#1B4F4A"}
                    />
                  ) : (
                    <Users3
                      className="!w-[18px] !h-[18px]"
                      color={activeTab === "invited" ? "white" : "#1B4F4A"}
                    />
                  )
                }
                state={activeTab === tab ? "active" : "default"}
                text={t(`account.${tab}`)}
              />
            </div>
          ))}
        </div>
        <div
          className="h-[500px] overflow-y-auto custom-scrollbar"
          ref={scrollableContainerRef}
          onScroll={handleContainerScroll}
        >
          {status === "loading" && <CustomLoader />}
          {status === "failed" && (
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
                text="Error Fetching the Deals"
              />
            </div>
          )}
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
          {deals?.Deals?.map((deal) => (
            <div
              key={deal.id}
              onClick={() => handleCardClick(deal)}
              className="cursor-pointer mb-5"
            >
              <CardDeal
                badgesColor="success"
                badgesText1={deal.deal_status || "No Status"} // Handle missing deal status
                text={deal.deal_title || "No Title"} // Handle missing deal title
                text1={deal.deal_status || "No Status"} // Handle missing deal status
                participantsCount={deal.deal_participants_count || 0} // Handle missing participants
                dealEndsIn={deal?.deal_ends_in || "N/A"} // Handle missing end date
                isGuestDeal={activeTab === "invited"}
                dealImages={deal?.images || [blogImage]} // Provide default image
                override={
                  deal.dealStatus === "out_of_stock" ? (
                    <ProgressBarYellow percentage={98} />
                  ) : (
                    <ProgressBarGreen percentage={90} />
                  )
                }
              />
            </div>
          ))}
        </div>
        {isFetchingMore && <CustomLoader />}
        <img className="self-stretch w-full h-px" alt="Line" src={Line63} />
        {[
          {
            icon: <UserAlt2 className="!w-5 !h-5" />,
            text: t("account.my_information"),
            action: "/my-information",
          },
          {
            icon: <ClockDollar1 className="!w-5 !h-5" color="#1B4F4A" />,
            text: t("account.wallet_details"),
            action: "/admin-wallet",
          },
          {
            icon: <Cog2 className="!w-5 !h-5" color="#1B4F4A" />,
            text: t("account.settings"),
            action: "/settings",
          },
          {
            icon: <ChatAlt6 className="!w-5 !h-5" color="#1B4F4A" />,
            text: t("account.acquire_help"),
            action: "/help-me",
          },
          {
            icon: <UserLock1 className="!w-5 !h-5" color="#1B4F4A" />,
            text: t("account.sign_out"),
            action: handleSignOut,
          },
        ].map(({ icon, text, action }) => (
          <div
            key={text}
            className="inline-flex items-center gap-2.5 cursor-pointer hover:text-primary-color-dark"
            onClick={
              typeof action === "string"
                ? () => handleNavigation(action)
                : action
            }
          >
            {icon}
            <div className="font-normal text-primary-text-color text-base">
              {text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Account;
