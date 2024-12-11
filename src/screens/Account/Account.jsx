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
import { blogImage } from "../../images";
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
import { Box44 } from "../../icons/Box44/Box44.jsx";
import { Line } from "../../components/Line/Line.jsx";
import {
  getDealProgress,
  getMaxDiscount,
} from "../../helpers/helperMethods.js";
import BoxCreated from "../../icons/BoxCreated/BoxCreated.jsx";

const Account = ({ isRequestSent, dealId }) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("invited");
  const [page, setPage] = useState(1); // Start from page 1
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [loadedDeals, setLoadedDeals] = useState({ created: [], invited: [] });
  const [hasMoreDeals, setHasMoreDeals] = useState(true); // Prevent further calls if no more deals

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const dealsState = useSelector((state) => state.deals);
  const { status } = dealsState;
  const { profile } = useSelector((state) => state.user);
  const scrollableContainerRef = useRef(null);

  useEffect(() => {
    if (isRequestSent)
      navigate(
        `/deal_details_invite?deal_id=${dealId}&&is_request_sent=${isRequestSent}`
      );
  }, [isRequestSent, dealId, navigate]);

  useEffect(() => {
    const activeTabFromLocation = location?.state?.activeTab || activeTab;
    handleTabSwitch(activeTabFromLocation);
  }, [location, activeTab]);

  const handleTabSwitch = async (tab) => {
    setActiveTab(tab);
    setPage(1); // Reset to first page on tab switch
    setHasMoreDeals(true); // Reset hasMoreDeals flag
    setLoadedDeals((prevState) => ({
      ...prevState,
      [tab]: [], // Clear the deals for the new tab
    }));
    loadDeals(tab, 1); // Load the first page of deals
  };

  const loadDeals = async (tab, pageNumber) => {
    if (status === "loading" || isFetchingMore || !hasMoreDeals) return; // Prevent multiple calls

    setIsFetchingMore(true); // Lock API call

    try {
      const response = await dispatch(
        fetchDeals({ deal_type: tab, page: pageNumber, limit: 3 }) // Fetch deals
      ).unwrap();
      const newDeals = response.Deals || [];

      if (newDeals.length === 0) {
        setHasMoreDeals(false); // Stop further API calls if no new deals
      } else {
        setLoadedDeals((prevState) => ({
          ...prevState,
          [tab]: [...prevState[tab], ...newDeals],
        }));
      }
    } catch (error) {
      console.error("Failed to load more deals: ", error);
    } finally {
      setIsFetchingMore(false); // Unlock API call
    }
  };

  const handleContainerScroll = () => {
    const { scrollTop, scrollHeight, clientHeight } =
      scrollableContainerRef.current;

    if (
      scrollTop + clientHeight >= scrollHeight - 50 &&
      hasMoreDeals &&
      !isFetchingMore
    ) {
      setPage((prevPage) => {
        const nextPage = prevPage + 1;
        loadDeals(activeTab, nextPage);
        return nextPage;
      });
    }
  };

  useEffect(() => {
    const debounce = (func, delay) => {
      let timer;
      return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(() => func(...args), delay);
      };
    };

    const debouncedScroll = debounce(handleContainerScroll, 200);

    const scrollableContainer = scrollableContainerRef.current;
    if (scrollableContainer) {
      scrollableContainer.addEventListener("scroll", debouncedScroll);
    }
    return () => {
      if (scrollableContainer) {
        scrollableContainer.removeEventListener("scroll", debouncedScroll);
      }
    };
  }, [hasMoreDeals, isFetchingMore]);

  useEffect(() => {
    const fetchUserProfileData = async () => {
      try {
        await dispatch(fetchUserProfileWithDealsAndReviews());
        await dispatch(checkUserLoginStatus());
      } catch (error) {
        console.error("Failed to fetch user profile or login status: ", error);
      }
    };
    fetchUserProfileData();
  }, [dispatch]);

  const handleNavigation = (path) => navigate(path);

  const handleCardClick = (deal) => {
    if (!deal || !deal.deal_id) return;

    const route =
      deal.deal_status === "draft"
        ? "/admin-draft-deal"
        : deal.deal_status === "waiting"
        ? "/admin-waiting-deal"
        : activeTab === "created"
        ? "/admin-active-deal"
        : !deal?.is_order_placed
        ? "/admin-view-deal"
        : "/guest-deal-view";

    navigate(`${route}?deal_id=${deal.deal_id}&is_creator=${deal.is_creator}`, {
      state: { deal },
    });
  };

  const handleSignOut = async () => {
    try {
      await dispatch(logoutUser());
    } catch (error) {
      console.error("Failed to log out: ", error);
    }
  };

  return (
    <div
      className="flex flex-col w-full items-start relative bg-primary-background mx-auto h-[800px] overflow-y-auto custom-scrollbar"
      ref={scrollableContainerRef}
    >
      <div className="flex flex-col w-full items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto] z-0">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-primary-color text-2xl text-center tracking-[0] leading-[30px] whitespace-nowrap capitalize">
          {`Hey, ${profile?.name || ""} 👋🏻`}
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
        <Line />
        <div className="relative w-fit font-semibold text-primary-color text-2xl text-center">
          {t("account.my_good_deals")}
        </div>
        <div className="flex w-full">
          {["invited", "created"].map((tab) => (
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
                  tab === "invited"
                    ? "!rounded-[6px_0_0_6px]"
                    : "!rounded-[0_6px_6px_0]"
                }`}
                icon={
                  tab === "created" ? (
                    <BoxCreated
                      className="!w-[18px] !h-[18px]"
                      color={activeTab === "created" ? "white" : "#1B4F4A"}
                    />
                  ) : (
                    <Box44
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
        <div className="w-full">
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
          {status === "succeeded" && loadedDeals[activeTab].length === 0 && (
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
                text={
                  activeTab === "created" ? (
                    <>
                      {t("create_deal.created_empty")}
                      <br />
                      {t("create_deal.created_action")}
                    </>
                  ) : (
                    <>
                      {t("create_deal.invited_empty")}
                      <br />
                      {t("create_deal.invited_action")}
                    </>
                  )
                }
              />
            </div>
          )}
          {loadedDeals[activeTab]?.map((deal) => (
            <div
              key={deal.id}
              onClick={() => handleCardClick(deal)}
              className="cursor-pointer mb-5 w-full"
            >
              <CardDeal
                badgesColor="success"
                badgesText1={deal.deal_status || "No Status"}
                text={deal.deal_title || "No Title"}
                text1={deal.deal_status || "No Status"}
                participantsCount={deal.deal_participants_count || 0}
                dealEndsIn={deal?.deal_ends_in || "N/A"}
                isGuestDeal={activeTab === "invited"}
                dealImages={deal?.images || [blogImage]}
                override={
                  deal.dealStatus === "soon_out_stock" ? (
                    <ProgressBarYellow
                      percentage={getDealProgress(deal?.products || [])}
                    />
                  ) : (
                    <ProgressBarGreen
                      percentage={getDealProgress(deal?.products || [])}
                    />
                  )
                }
                organizer={deal?.organiser_name || "No Organizer"}
                discount={getMaxDiscount(deal?.products || [])}
              />
            </div>
          ))}
        </div>
        {isFetchingMore && <CustomLoader />}
        {status !== "loading" && (
          <>
            <Line />
            {[
              {
                icon: <UserAlt2 className="!w-5 !h-5" />,
                text: t("account.my_information"),
                action: "/my-information",
              },
              {
                icon: <Box44 className="!w-5 !h-5" />,
                text: t("account.my_orders"),
                action: "/admin-orders",
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
                className={`inline-flex items-center gap-2.5 ${
                  action === "/admin-wallet" || action === "/admin-orders"
                    ? "cursor-not-allowed opacity-50"
                    : "hover:text-primary-color-dark cursor-pointer"
                }`}
                onClick={
                  typeof action === "string" &&
                  action !== "/admin-wallet" &&
                  action !== "/admin-orders"
                    ? () => handleNavigation(action)
                    : action === "/admin-orders"
                    ? null
                    : action
                }
              >
                {icon}
                <div className="font-normal text-primary-text-color text-base">
                  {text}
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Account;
