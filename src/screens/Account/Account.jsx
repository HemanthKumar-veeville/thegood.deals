import React, { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { ButtonGroup } from "../../components/ButtonGroup";
import { CardDeal } from "../../components/CardDeal";
import { CirclePlus92 } from "../../icons/CirclePlus92";
import { ClockDollar1 } from "../../icons/ClockDollar1";
import { Cog2 } from "../../icons/Cog2";
import { UserAlt2 } from "../../icons/UserAlt2";
import { UserLock1 } from "../../icons/UserLock1";
import { ChatAlt6 } from "../../icons/ChatAlt6";
import { blogImage } from "../../images";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProgressBarYellow from "../../components/ProgressBar/ProgressBarYellow";
import ProgressBarGreen from "../../components/ProgressBar/ProgressBarGreen";
import { fetchDeals } from "../../redux/app/deals/dealSlice";
import CustomLoader from "../../components/CustomLoader/CustomLoader.jsx";
import { logoutUser } from "../../redux/app/user/userSlice";
import { SuccessAlert } from "../../components/SuccessAlert/SuccessAlert.jsx";
import { Warning1 } from "../../icons/Warning1/Warning1.jsx";
import { Box44 } from "../../icons/Box44/Box44.jsx";
import { Line } from "../../components/Line/Line.jsx";
import { getMaxDiscount } from "../../helpers/helperMethods.js";
import BoxCreated from "../../icons/BoxCreated/BoxCreated.jsx";

const Account = ({ isRequestSent, dealId }) => {
  const { t } = useTranslation();
  const [filterType, setFilterType] = useState("active"); // "active" | "archived"
  const [activeTab, setActiveTab] = useState("invited");
  const [page, setPage] = useState(1); // Start from page 1
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [loadedDeals, setLoadedDeals] = useState({
    active: { created: [], invited: [] },
    archived: { created: [], invited: [] },
  });
  const [hasMoreDeals, setHasMoreDeals] = useState(true); // Prevent further calls if no more deals

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const dealsState = useSelector((state) => state.deals);
  const { status } = dealsState;
  const { profile } = useSelector((state) => state.account);
  const scrollableContainerRef = useRef(null);
  
  useEffect(() => {
    if (dealId)
      navigate(
        `/admin-view-deal?deal_id=${dealId}&is_creator=${false}`
      );
  }, [dealId, navigate]);

  // Initial load on mount
  useEffect(() => {
    const initialTab = location?.state?.activeTab || activeTab;
    // Load initial deals for default filter + tab
    if (loadedDeals[filterType][initialTab].length === 0 && !isFetchingMore && status !== "loading") {
      setPage(1);
      setHasMoreDeals(true);
      loadDeals(initialTab, 1, filterType);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Only run on mount

  // Handle location state changes
  useEffect(() => {
    const activeTabFromLocation = location?.state?.activeTab;
    if (activeTabFromLocation && activeTabFromLocation !== activeTab) {
      handleTabSwitch(activeTabFromLocation);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location]);

  // Helper functions to filter deals by status
  const isActiveDeal = (deal) => {
    const activeStatuses = ['in_stock', 'soon_out_stock', 'waiting', 'draft', 'payment_pending'];
    return activeStatuses.includes(deal.deal_status);
  };

  const isArchivedDeal = (deal) => {
    const archivedStatuses = ['finished', 'expired'];
    return archivedStatuses.includes(deal.deal_status);
  };

  const handleFilterSwitch = (filter) => {
    setFilterType(filter);
    setPage(1); // Reset to first page on filter switch
    setHasMoreDeals(true); // Reset hasMoreDeals flag
    // Clear deals for current filter + tab combination
    setLoadedDeals((prevState) => ({
      ...prevState,
      [filter]: {
        ...prevState[filter],
        [activeTab]: [], // Clear the deals for the current tab
      },
    }));
    loadDeals(activeTab, 1, filter); // Load the first page with new filter
  };

  const handleTabSwitch = async (tab) => {
    setActiveTab(tab);
    setPage(1); // Reset to first page on tab switch
    setHasMoreDeals(true); // Reset hasMoreDeals flag
    // Clear deals for current filter + new tab combination
    setLoadedDeals((prevState) => ({
      ...prevState,
      [filterType]: {
        ...prevState[filterType],
        [tab]: [], // Clear the deals for the new tab
      },
    }));
    loadDeals(tab, 1, filterType); // Load the first page with current filter
  };

  const loadDeals = async (tab, pageNumber, filter = filterType, retryCount = 0) => {
    if (status === "loading" || isFetchingMore || !hasMoreDeals) return; // Prevent multiple calls

    setIsFetchingMore(true); // Lock API call

    try {
      const response = await dispatch(
        fetchDeals({ deal_type: tab, page: pageNumber, limit: 3 }) // Fetch deals
      ).unwrap();
      const allDeals = response.Deals || [];

      // Filter deals based on filter type (active/archived)
      const filteredDeals = allDeals.filter((deal) =>
        filter === "active" ? isActiveDeal(deal) : isArchivedDeal(deal)
      );

      if (allDeals.length === 0) {
        // No more deals from API
        setHasMoreDeals(false);
      } else if (filteredDeals.length === 0) {
        // All deals on this page were filtered out
        if (allDeals.length < 3) {
          // Got less than a full page - no more deals
          setHasMoreDeals(false);
        } else if (retryCount < 5) {
          // Got a full page but all filtered - try next page (max 5 retries to prevent infinite loop)
          setIsFetchingMore(false); // Unlock before recursive call
          loadDeals(tab, pageNumber + 1, filter, retryCount + 1);
          return;
        } else {
          // Too many retries - stop to prevent infinite loop
          setHasMoreDeals(false);
        }
      } else {
        // We have filtered deals to add
        setLoadedDeals((prevState) => ({
          ...prevState,
          [filter]: {
            ...prevState[filter],
            [tab]: [...prevState[filter][tab], ...filteredDeals],
          },
        }));
      }
    } catch (error) {
      console.error("Failed to load more deals: ", error);
      setHasMoreDeals(false); // Stop on error
    } finally {
      setIsFetchingMore(false); // Unlock API call
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

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        scrollableContainerRef.current || {};

      if (
        scrollTop + clientHeight >= scrollHeight - 50 &&
        hasMoreDeals &&
        !isFetchingMore
      ) {
        setPage((prevPage) => {
          const nextPage = prevPage + 1;
          loadDeals(activeTab, nextPage, filterType);
          return nextPage;
        });
      }
    };

    const debouncedScroll = debounce(handleScroll, 200);

    const scrollableContainer = scrollableContainerRef.current;
    if (scrollableContainer) {
      scrollableContainer.addEventListener("scroll", debouncedScroll);
    }
    return () => {
      if (scrollableContainer) {
        scrollableContainer.removeEventListener("scroll", debouncedScroll);
      }
    };
  }, [hasMoreDeals, isFetchingMore, filterType, activeTab]);

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
        : deal?.invite_accepted
        ? !deal?.is_order_placed
          ? deal?.deal_status !== "expired" && deal?.deal_status !== "finished"
            ? "/admin-view-deal"
            : "/guest-deal-view"
          : "/guest-deal-view"
        : "/request-pending-deal";

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
      className="flex flex-col w-full items-start relative bg-primary-background mx-auto h-[800px] overflow-y-auto scrollbar-hide"
      ref={scrollableContainerRef}
    >
      <div className="flex flex-col w-full items-start gap-[15px] px-[15px] py-[15px] relative flex-[0_0_auto] z-0">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-primary-color text-2xl text-center tracking-[0] leading-[30px] whitespace-nowrap capitalize">
          {`Hey, ${
            profile?.data?.first_name + " " + profile?.data?.last_name || ""
          } 👋🏻`}
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
        {/* Filter Toggle: Active / Archived */}
        <div className="flex w-full mb-3">
          {["active", "archived"].map((filter) => (
            <div
              key={filter}
              className={`flex-1 flex grow cursor-pointer ${
                filterType === filter
                  ? "bg-primary-dark-color text-white"
                  : "text-primary-color hover:bg-gray-200"
              }`}
              onClick={() => handleFilterSwitch(filter)}
            >
              <ButtonGroup
                buttonClassName="!mt-[-1.00px]"
                className={`!flex-1 !flex grow ${
                  filter === "active"
                    ? "!rounded-[6px_0_0_6px]"
                    : "!rounded-[0_6px_6px_0]"
                }`}
                state={filterType === filter ? "active" : "default"}
                text={t(`account.${filter}`)}
              />
            </div>
          ))}
        </div>
        {/* Tab Navigation: Invited / Created */}
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
          {status === "succeeded" &&
            loadedDeals[filterType][activeTab].length === 0 && (
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
                  text={t(`account.no_${filterType}_${activeTab}_deals`)}
                />
              </div>
            )}
          {loadedDeals[filterType][activeTab]?.map((deal, index) => (
            <div
              key={deal.deal_id || deal.id || `deal-${index}`}
              onClick={() => handleCardClick(deal)}
              className="cursor-pointer mb-5 w-full"
            >
              <CardDeal
                badgesColor="success"
                badgesText1={
                  deal?.invite_accepted === false
                    ? t("create_deal.invite_pending")
                    : deal.deal_status || "No Status"
                }
                text={deal.deal_title || "No Title"}
                text1={deal.deal_status || "No Status"}
                participantsCount={deal.deal_participants_count || 0}
                dealEndsIn={deal?.deal_ends_in || "N/A"}
                isGuestDeal={activeTab === "invited"}
                dealImages={deal?.images || [blogImage]}
                override={
                  deal.deal_status === "soon_out_stock" ? (
                    <ProgressBarYellow
                      percentage={deal?.deal_progress_percentage}
                    />
                  ) : (
                    <ProgressBarGreen
                      percentage={deal?.deal_progress_percentage}
                    />
                  )
                }
                organizer={deal?.organiser_name || "No Organizer"}
                discount={getMaxDiscount(deal?.products || [])}
                isInvitePending={
                  "invite_accepted" in deal ? !deal?.invite_accepted : false
                }
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
