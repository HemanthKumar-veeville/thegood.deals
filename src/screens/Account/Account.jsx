import React, { useEffect, useState, useRef, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { MdOutlineArchive } from "react-icons/md";
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
  const [activeTab, setActiveTab] = useState("invited");
  const [page, setPage] = useState({ created: 1, invited: 1 }); // Per-tab pagination
  const [isFetchingMore, setIsFetchingMore] = useState(false);
  const [loadedDeals, setLoadedDeals] = useState({ created: [], invited: [] });
  const [hasMoreDeals, setHasMoreDeals] = useState({ created: true, invited: true }); // Per-tab tracking
  const [showArchivedButton, setShowArchivedButton] = useState({ created: false, invited: false }); // Per-tab archived button visibility
  const [archivedStartPage, setArchivedStartPage] = useState({ created: null, invited: null }); // Page number where archived deals start
  const [showArchivedDeals, setShowArchivedDeals] = useState({ created: false, invited: false }); // Track if archived deals are being shown (after button click)
  const [tabLoadStatus, setTabLoadStatus] = useState({ created: "idle", invited: "idle" }); // Per-tab load status: "idle" | "loading" | "succeeded" | "failed"

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const dealsState = useSelector((state) => state.deals);
  const { status } = dealsState;
  const { profile } = useSelector((state) => state.account);
  const scrollableContainerRef = useRef(null);
  const debounceTimerRef = useRef(null);
  const hasInitialLoadRef = useRef(false);
  const showArchivedDealsRef = useRef({ created: false, invited: false }); // Ref to track latest showArchivedDeals value

  useEffect(() => {
    if (isRequestSent)
      navigate(
        `/deal_details_invite?deal_id=${dealId}&&is_request_sent=${isRequestSent}`
      );
  }, [isRequestSent, dealId, navigate]);

  const loadDeals = useCallback(async (tab, pageNumber) => {
    // For page 1 (initial load), always allow the call (mandatory on tab switch)
    // For subsequent pages, apply guards to prevent unnecessary calls
    const isInitialLoad = pageNumber === 1;
    
    if (isInitialLoad) {
      // Only prevent if already loading for THIS specific tab
      // Allow if fetching for a different tab (tab switch scenario)
      if (isFetchingMore && tabLoadStatus[tab] === "loading") {
        return; // Already loading for this tab, skip
      }
      // If isFetchingMore is true but not for this tab, allow the call (tab switch)
    } else {
      // For subsequent pages, apply all guards
      if (
        status === "loading" ||
        isFetchingMore ||
        (!hasMoreDeals[tab] && !showArchivedDeals[tab]) ||
        (showArchivedButton[tab] && !showArchivedDeals[tab])
      ) {
        return;
      }
    }

    setIsFetchingMore(true); // Lock API call

    // Set loading status for first page load
    if (pageNumber === 1) {
      setTabLoadStatus((prevState) => ({
        ...prevState,
        [tab]: "loading",
      }));
    }

    try {
      const response = await dispatch(
        fetchDeals({ deal_type: tab, page: pageNumber, limit: 3 })
      ).unwrap();
      const newDeals = response.Deals || [];

      // Track if deals were actually added (for setting tabLoadStatus)
      let dealsWereAdded = false;

      // If archived deals are being shown, add all deals without filtering
      // Use ref to always get the latest value (avoids stale closure after tab switch)
      if (showArchivedDealsRef.current[tab]) {
        if (newDeals.length === 0) {
          setHasMoreDeals((prevState) => ({
            ...prevState,
            [tab]: false,
          }));
          // No deals from API - this is a valid empty state
          dealsWereAdded = true; // Mark as processed (even though empty)
        } else {
          // Prevent duplicates: filter out deals that already exist
          // Use functional update to get latest state
          let hasNewDeals = false;
          setLoadedDeals((prevState) => {
            const existingDeals = prevState[tab] || [];
            const existingDealIds = new Set(
              existingDeals.map((deal) => deal.id || deal.deal_id).filter(Boolean)
            );
            const uniqueNewDeals = newDeals.filter((deal) => {
              const dealId = deal.id || deal.deal_id;
              return dealId && !existingDealIds.has(dealId);
            });

            if (uniqueNewDeals.length > 0) {
              hasNewDeals = true;
              return {
                ...prevState,
                [tab]: [...existingDeals, ...uniqueNewDeals],
              };
            }

            // If all deals were duplicates, stop loading
            if (uniqueNewDeals.length === 0 && newDeals.length > 0) {
              setHasMoreDeals((prevState) => ({
                ...prevState,
                [tab]: false,
              }));
            }

            return prevState; // No changes if all duplicates
          });
          dealsWereAdded = hasNewDeals || (newDeals.length > 0); // True if we had deals (even if duplicates)
        }
      } else {
        // Before showing archived deals, filter and check for archived deals
        // Filter deals: only show deals with deal_status === "in_stock"
        const inStockDeals = [];
        let foundArchivedDeal = false;

        for (const deal of newDeals) {
          if (deal?.deal_status === "in_stock") {
            inStockDeals.push(deal);
          } else {
            // Found first archived deal - stop here
            foundArchivedDeal = true;
            break;
          }
        }

        // If we found archived deals, save the page number and show button
        if (foundArchivedDeal) {
          setArchivedStartPage((prevState) => ({
            ...prevState,
            [tab]: pageNumber,
          }));
          setShowArchivedButton((prevState) => ({
            ...prevState,
            [tab]: true,
          }));
          setHasMoreDeals((prevState) => ({
            ...prevState,
            [tab]: false, // Stop further API calls until button is clicked
          }));
        }

        // Only add in-stock deals to the list (prevent duplicates)
        if (inStockDeals.length > 0) {
          // Use functional update to get latest state and prevent stale closure
          setLoadedDeals((prevState) => {
            const existingDeals = prevState[tab] || [];
            const existingDealIds = new Set(
              existingDeals.map((deal) => deal.id || deal.deal_id).filter(Boolean)
            );
            const uniqueInStockDeals = inStockDeals.filter((deal) => {
              const dealId = deal.id || deal.deal_id;
              return dealId && !existingDealIds.has(dealId);
            });

            if (uniqueInStockDeals.length > 0) {
              return {
                ...prevState,
                [tab]: [...existingDeals, ...uniqueInStockDeals],
              };
            }

            return prevState; // No changes if all duplicates
          });
        }

        // If no deals or all deals were archived, stop loading
        if (newDeals.length === 0 || (inStockDeals.length === 0 && !foundArchivedDeal)) {
          setHasMoreDeals((prevState) => ({
            ...prevState,
            [tab]: false,
          }));
        }
      }

      // Set succeeded status for first page load AFTER processing
      // React batches state updates, so this will be applied together with setLoadedDeals
      if (pageNumber === 1) {
        setTabLoadStatus((prevState) => ({
          ...prevState,
          [tab]: "succeeded",
        }));
      }
    } catch (error) {
      console.error("Failed to load more deals: ", error);
      // On error, stop trying to load more to prevent infinite retries
      setHasMoreDeals((prevState) => ({
        ...prevState,
        [tab]: false,
      }));
      // Set failed status for first page load
      if (pageNumber === 1) {
        setTabLoadStatus((prevState) => ({
          ...prevState,
          [tab]: "failed",
        }));
      }
    } finally {
      setIsFetchingMore(false); // Unlock API call
    }
  }, [status, isFetchingMore, hasMoreDeals, showArchivedButton, showArchivedDeals, tabLoadStatus, dispatch]);

  const handleTabSwitch = useCallback(async (tab) => {
    // Reset ALL state for the new tab BEFORE making API call
    // This ensures clean state on every tab switch
    setActiveTab(tab);
    setPage((prevPage) => ({
      ...prevPage,
      [tab]: 1, // Reset to first page on tab switch
    }));
    setHasMoreDeals((prevState) => ({
      ...prevState,
      [tab]: true, // Reset hasMoreDeals flag for this tab
    }));
    setLoadedDeals((prevState) => ({
      ...prevState,
      [tab]: [], // Clear the deals for the new tab
    }));
    setShowArchivedButton((prevState) => ({
      ...prevState,
      [tab]: false, // Reset archived button visibility for this tab
    }));
    setArchivedStartPage((prevState) => ({
      ...prevState,
      [tab]: null, // Reset archived start page for this tab
    }));
    setShowArchivedDeals((prevState) => {
      const newState = {
        ...prevState,
        [tab]: false, // Reset archived deals visibility for this tab
      };
      // Update ref immediately to ensure loadDeals reads the correct value
      showArchivedDealsRef.current = newState;
      return newState;
    });
    setTabLoadStatus((prevState) => ({
      ...prevState,
      [tab]: "idle", // Reset load status for this tab
    }));
    
    // Reset scroll position when switching tabs
    if (scrollableContainerRef.current) {
      scrollableContainerRef.current.scrollTop = 0;
    }
    
    // Use setTimeout to ensure state updates are applied before API call
    // This guarantees state is reset before loadDeals executes
    setTimeout(() => {
      loadDeals(tab, 1); // Load the first page of deals
    }, 0);
  }, [loadDeals]);

  // Keep ref in sync with state (safety measure)
  useEffect(() => {
    showArchivedDealsRef.current = showArchivedDeals;
  }, [showArchivedDeals]);

  // Handle tab switch from location state and initial load
  useEffect(() => {
    const activeTabFromLocation = location?.state?.activeTab;
    const tabToUse = activeTabFromLocation || activeTab;
    
    // If location has a different tab, switch to it (this will also load deals)
    if (activeTabFromLocation && activeTabFromLocation !== activeTab) {
      handleTabSwitch(activeTabFromLocation);
      hasInitialLoadRef.current = true;
    } 
    // Otherwise, do initial load if not already done
    else if (!hasInitialLoadRef.current) {
      loadDeals(tabToUse, 1);
      hasInitialLoadRef.current = true;
    }
  }, [location?.state?.activeTab, activeTab, handleTabSwitch, loadDeals]);

  const handleContainerScroll = useCallback(() => {
    const container = scrollableContainerRef.current;
    if (!container) return;

    const { scrollTop, scrollHeight, clientHeight } = container;
    const threshold = 50; // pixels from bottom
    const isNearBottom = scrollTop + clientHeight >= scrollHeight - threshold;

    // Load more if:
    // - Near bottom
    // - Has more deals OR showing archived deals
    // - Not currently fetching
    // - Not loading
    // - Either archived deals are shown OR archived button is not shown
    if (
      isNearBottom &&
      (hasMoreDeals[activeTab] || showArchivedDeals[activeTab]) &&
      !isFetchingMore &&
      status !== "loading" &&
      (showArchivedDeals[activeTab] || !showArchivedButton[activeTab])
    ) {
      // Update page state first, then load deals
      const currentPage = page[activeTab] || 1;
      const nextPage = currentPage + 1;
      
      setPage((prevPage) => ({
        ...prevPage,
        [activeTab]: nextPage,
      }));
      
      // Load deals after state update
      loadDeals(activeTab, nextPage);
    }
  }, [activeTab, hasMoreDeals, isFetchingMore, status, showArchivedButton, showArchivedDeals, page, loadDeals]);

  useEffect(() => {
    const container = scrollableContainerRef.current;
    if (!container) return;

    // Clear any existing timer
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    const handleScroll = () => {
      // Clear previous timer
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
      // Set new timer
      debounceTimerRef.current = setTimeout(() => {
        handleContainerScroll();
      }, 200);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      container.removeEventListener("scroll", handleScroll);
      // Clear timer on cleanup
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [handleContainerScroll]);

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
          {(status === "loading" || tabLoadStatus[activeTab] === "loading" || (isFetchingMore && loadedDeals[activeTab]?.length === 0)) && <CustomLoader />}
          {tabLoadStatus[activeTab] === "failed" && (
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
                text={t("account.error_loading_deals")}
              />
            </div>
          )}
          {tabLoadStatus[activeTab] === "succeeded" && 
           loadedDeals[activeTab].length === 0 && 
           !isFetchingMore && 
           !showArchivedButton[activeTab] && (
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
          {loadedDeals[activeTab]?.map((deal, index) => (
            <div
              key={deal.id || deal.deal_id || `deal-${activeTab}-${index}`}
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
                  deal.dealStatus === "soon_out_stock" ? (
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
        {showArchivedButton[activeTab] && !showArchivedDeals[activeTab] && (
          <div className="w-full flex my-0">
            <button
              className="flex items-center justify-center gap-2 px-6 py-3 w-full bg-whitewhite rounded-md shadow-shadow-1 cursor-pointer font-medium text-base text-primary-color hover:bg-graygray-2"
              onClick={() => {
                // Start showing archived deals from the saved page number
                const startPage = archivedStartPage[activeTab];
                if (startPage) {
                  setShowArchivedDeals((prevState) => {
                    const newState = {
                      ...prevState,
                      [activeTab]: true,
                    };
                    // Update ref immediately to ensure loadDeals reads the correct value
                    showArchivedDealsRef.current = newState;
                    return newState;
                  });
                  setHasMoreDeals((prevState) => ({
                    ...prevState,
                    [activeTab]: true, // Re-enable loading for archived deals
                  }));
                  setPage((prevState) => ({
                    ...prevState,
                    [activeTab]: startPage, // Set page to archived start page
                  }));
                  // Load deals from the archived start page
                  loadDeals(activeTab, startPage);
                }
              }}
            >
              <span className="hidden sm:inline">---</span>
              <MdOutlineArchive className="!w-[18px] !h-[18px] text-primary-color" />
              <span>  {t("account.show_archived_deals")} <span className="hidden sm:inline">---</span></span>
            </button>
          </div>
        )}
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