import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserProfileWithDealsAndReviews } from "../../redux/app/user/userSlice";
import Slider from "react-slick"; // Import the react-slick slider
import { CardDeal } from "../../components/CardDeal";
import { RatingStar } from "../../components/RatingStar";
import { ArrowLeft } from "../../icons/ArrowLeft/ArrowLeft";
import { Box101 } from "../../icons/Box101";
import { EnvelopeAlt } from "../../icons/EnvelopeAlt";
import { MapMarker1 } from "../../icons/MapMarker1";
import { Star7 } from "../../icons/Star7";
import { StarFill1 } from "../../icons/StarFill1";
import { Users2 } from "../../icons/Users2";
import { Ellipse, Rectangle_5095 } from "../../images";
import ProgressBarYellow from "../../components/ProgressBar/ProgressBarYellow";
import ProgressBarGreen from "../../components/ProgressBar/ProgressBarGreen";
import { useNavigate } from "react-router-dom";
import "slick-carousel/slick/slick.css"; // Import slick-carousel styles
import "slick-carousel/slick/slick-theme.css"; // Import slick-carousel theme styles
import { FaArrowLeft, FaArrowRight, FaPlay, FaPause } from "react-icons/fa"; // Import icons
import { Warning1 } from "../../icons/Warning1";
import { SuccessAlert } from "../../components/WarningAlert";
import CustomLoader from "../../components/CustomLoader/CustomLoader";
import { UserAlt } from "../../icons/UserAlt";
import { Line } from "../../components/Line/Line";
import { getDealProgress, getMaxDiscount } from "../../helpers/helperMethods";
import { UserAlt2 } from "../../icons/UserAlt2";
import { Box44 } from "../../icons/Box44/Box44";
import { ClockDollar1 } from "../../icons/ClockDollar1";
import { Cog2 } from "../../icons/Cog2";
import { ChatAlt6 } from "../../icons/ChatAlt6";
import { UserLock1 } from "../../icons/UserLock1";
import { UserAlt4 } from "../../icons/UserAlt4/UserAlt4";

const MyInformation = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dealsSliderRef = useRef(null);
  const reviewsSliderRef = useRef(null);

  const { profile, userDeals, userReviews, status } = useSelector(
    (state) => state.user
  );
  const [isDealsPlaying, setIsDealsPlaying] = useState(true);
  const [isReviewsPlaying, setIsReviewsPlaying] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchUserProfileWithDealsAndReviews());
  }, []);

  const handleBack = () => {
    navigate("/");
  };

  const handleCardClick = (deal) => {
    if (!deal || !deal.deal_id) return;

    const route =
      deal.deal_status === "draft"
        ? "/admin-draft-deal"
        : deal.deal_status === "waiting"
        ? "/admin-waiting-deal"
        : activeTab === "created"
        ? "/admin-active-deal"
        : !isOrdered
        ? "/admin-view-deal"
        : "/guest-deal-view";

    navigate(`${route}?deal_id=${deal.deal_id}&is_creator=${deal.is_creator}`, {
      state: { deal },
    });
  };

  const handleDealsPlayPause = () => {
    setIsDealsPlaying((prev) => !prev);
    if (isDealsPlaying) {
      dealsSliderRef.current.slickPause();
    } else {
      dealsSliderRef.current.slickPlay();
    }
  };

  const handleReviewsPlayPause = () => {
    setIsReviewsPlaying((prev) => !prev);
    if (isReviewsPlaying) {
      reviewsSliderRef.current.slickPause();
    } else {
      reviewsSliderRef.current.slickPlay();
    }
  };

  const DealsPlayPauseButton = () => {
    return (
      <button className="text-primary-color" onClick={handleDealsPlayPause}>
        {isDealsPlaying ? <FaPause size={18} /> : <FaPlay size={18} />}
      </button>
    );
  };

  const ReviewsPlayPauseButton = () => {
    return (
      <button className="text-primary-color" onClick={handleReviewsPlayPause}>
        {isReviewsPlaying ? <FaPause size={18} /> : <FaPlay size={18} />}
      </button>
    );
  };

  const DealsPrevArrow = ({ onClick }) => {
    return (
      <button className="text-primary-color" onClick={onClick}>
        <FaArrowLeft size={18} />
      </button>
    );
  };

  const DealsNextArrow = ({ onClick }) => {
    return (
      <button className="text-primary-color" onClick={onClick}>
        <FaArrowRight size={18} />
      </button>
    );
  };

  const ReviewsPrevArrow = ({ onClick }) => {
    return (
      <button className="text-primary-color" onClick={onClick}>
        <FaArrowLeft size={18} />
      </button>
    );
  };

  const ReviewsNextArrow = ({ onClick }) => {
    return (
      <button className="text-primary-color" onClick={onClick}>
        <FaArrowRight size={18} />
      </button>
    );
  };

  const dealsSliderSettings = {
    dots: false,
    infinite: userDeals?.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: isDealsPlaying,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const reviewsSliderSettings = {
    dots: false,
    infinite: userReviews?.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: isReviewsPlaying,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const handleNavigation = (path) => navigate(path);

  return (
    <div className="flex flex-col w-full h-full items-start relative bg-primary-background min-h-screen">
      {status === "loading" && <CustomLoader />}

      {status === "succeeded" && (
        <div className="flex flex-col w-full items-start gap-[15px] px-[15px] py-[15px] relative">
          <div
            className="flex items-center gap-3 pt-0 pb-3 px-0 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-stroke"
            onClick={handleBack}
          >
            <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
              <ArrowLeft
                className="!relative !w-[18px] !h-[18px]"
                color="#637381"
              />
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-text-color text-base tracking-[0] leading-6 whitespace-nowrap">
                {t("common.back")}
              </div>
            </div>
          </div>
          <div className="inline-flex items-center gap-[15px] relative flex-[0_0_auto]">
            {profile?.profile_image !==
            "https://example.com/profiles/default.jpg" ? (
              <img
                className="w-[50px] h-[50px] relative object-cover rounded-md"
                alt="Rectangle"
                src={profile?.profile_image || Rectangle_5095} // Replace with real profile avatar
              />
            ) : (
              <UserAlt />
            )}
            <div className="inline-flex flex-col items-start relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-body-medium-medium font-[number:var(--body-medium-medium-font-weight)] text-primary-color text-[length:var(--body-medium-medium-font-size)] tracking-[var(--body-medium-medium-letter-spacing)] leading-[var(--body-medium-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-medium-font-style)]">
                {profile?.name || "User Name"}
              </div>
              <div className="inline-flex h-5 items-center gap-2.5 relative">
                <RatingStar
                  className="!flex-[0_0_auto]"
                  rating={profile?.rating || "four-star"} // Replace with real rating
                  size="small"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-[5px] w-full flex-[0_0_auto] relative self-stretch">
            <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
              <Box101 className="!relative !w-5 !h-5" />
              <div className="relative w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]">
                {t("myInformation.orders_placed", {
                  count: profile?.orders_placed || 0,
                })}
              </div>
            </div>
            <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
              <Users2 className="!relative !w-5 !h-5" color="#1B4F4A" />
              <div className="relative w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]">
                {t("myInformation.collections_organized", {
                  count: profile?.collections_organized || 0,
                })}
              </div>
            </div>
            <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
              <MapMarker1 className="!relative !w-5 !h-5" color="#1B4F4A" />
              <div className="relative w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)]">
                {profile?.address}
              </div>
            </div>
          </div>
          <>
            <Line />
            {[
              {
                icon: <UserAlt4 className="!w-5 !h-5" />,
                text: t("settings.edit_profile"),
                action: "/edit-profile",
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
            ].map(({ icon, text, action }) => (
              <div
                key={text}
                className={`inline-flex items-center gap-2.5 ${
                  action === "/admin-wallet"
                    ? "cursor-not-allowed opacity-50"
                    : "hover:text-primary-color-dark cursor-pointer"
                }`}
                onClick={
                  typeof action === "string" && action !== "/admin-wallet"
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
                {/* {(action === "/admin-orders" || action === "/admin-wallet") && (
                  <div className="ml-2 bg-secondary-color text-white rounded-full px-2 py-1 text-xs">
                    Coming Soon
                  </div>
                )} */}
              </div>
            ))}
          </>
          <Line />
          <div className="font-heading-6 font-[number:var(--heading-6-font-weight)] text-primary-color text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] relative self-stretch [font-style:var(--heading-6-font-style)]">
            {t("myInformation.deals")}
          </div>
          {status === "succeeded" && userDeals?.length > 0 && (
            <>
              <Slider
                ref={dealsSliderRef}
                {...dealsSliderSettings}
                className="w-full"
              >
                {userDeals?.map((deal) => (
                  <div
                    key={deal.deal_id}
                    className="cursor-pointer"
                    // onClick={() => handleCardClick(deal)}
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
                        deal.status === "soon_out_stock" ? (
                          <ProgressBarYellow
                            percentage={getDealProgress(deal?.products || [])}
                          />
                        ) : (
                          <ProgressBarGreen
                            percentage={getDealProgress(deal?.products || [])}
                          />
                        )
                      }
                      text={deal.title}
                      text1={deal.status}
                      participantsCount={deal.participants}
                      dealEndsIn={deal.ends_in}
                      dealImages={[deal.image]}
                      discount={getMaxDiscount(deal?.products || [])}
                    />
                  </div>
                ))}
              </Slider>
              {userDeals?.length > 1 && (
                <div className="flex justify-around items-between mt-1 w-full">
                  <DealsPrevArrow
                    onClick={() => dealsSliderRef.current.slickPrev()}
                  />
                  <DealsPlayPauseButton />
                  <DealsNextArrow
                    onClick={() => dealsSliderRef.current.slickNext()}
                  />
                </div>
              )}
            </>
          )}
          {status === "succeeded" && !userDeals?.length && (
            <SuccessAlert
              className="!flex !bg-orangeorange-light-5"
              divClassName="!text-orangeorange-dark !tracking-[0] !text-sm !flex-1 ![white-space:unset] ![font-style:unset] !font-medium ![font-family:'Inter',Helvetica] !leading-5 !w-[unset]"
              frameClassName="!flex-1 !flex !grow"
              groupClassName="!bg-orangeorange"
              icon={
                <Warning1
                  className="!absolute !w-3 !h-3 !top-1 !left-1"
                  color="white"
                />
              }
              style="three"
              text={t("myInformation.no_deals")}
            />
          )}
          <Line />
          <div className="font-heading-6 font-[number:var(--heading-6-font-weight)] text-primary-color text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] relative self-stretch [font-style:var(--heading-6-font-style)]">
            {t("myInformation.ratings")}
          </div>
          {userReviews?.length > 0 && (
            <>
              <Slider
                ref={reviewsSliderRef}
                {...reviewsSliderSettings}
                className="w-full"
              >
                {userReviews?.map((review) => (
                  <div key={review.review_id}>
                    <div className="flex flex-col items-start gap-5 pt-5 pb-[30px] px-[30px] relative self-stretch w-full flex-[0_0_auto] bg-whitewhite rounded-xl shadow-shadow-1">
                      <div className="flex flex-col items-start justify-center gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
                        <div className="inline-flex items-center gap-[15px] relative flex-[0_0_auto]">
                          <img
                            className="relative w-14 h-14 object-cover rounded-full"
                            alt="Author"
                            src={review.author_image || Ellipse}
                          />
                          <div className="inline-flex flex-col items-start gap-px relative flex-[0_0_auto]">
                            <div className="relative w-fit mt-[-1.00px] font-body-medium-medium font-[number:var(--body-medium-medium-font-weight)] text-darkdark text-[length:var(--body-medium-medium-font-size)] tracking-[var(--body-medium-medium-letter-spacing)] leading-[var(--body-medium-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-medium-font-style)]">
                              {review.author_name}
                            </div>
                            <div className="relative w-fit font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]">
                              {new Date(review.date).toLocaleDateString()}
                            </div>
                            <div className="inline-flex items-start gap-1 relative flex-[0_0_auto]">
                              {Array.from({ length: 5 }).map((_, index) =>
                                index < review.rating ? (
                                  <StarFill1
                                    key={index}
                                    className="!relative !w-4 !h-4"
                                  />
                                ) : (
                                  <Star7
                                    key={index}
                                    className="!relative !w-4 !h-4"
                                    color="#F59E0B"
                                  />
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
                        <p className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-darkdark text-base tracking-[0] leading-[26px] whitespace-nowrap">
                          {review.title}
                        </p>

                        <p className="relative self-stretch font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)]">
                          {review.content}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </Slider>
              {userReviews?.length > 1 && (
                <div className="flex justify-around items-between mt-1 w-full">
                  <ReviewsPrevArrow
                    onClick={() => reviewsSliderRef.current.slickPrev()}
                  />
                  <ReviewsPlayPauseButton />
                  <ReviewsNextArrow
                    onClick={() => reviewsSliderRef.current.slickNext()}
                  />
                </div>
              )}
            </>
          )}
          {userReviews?.length === 0 && (
            <div className="w-full">
              <SuccessAlert
                className="!flex !bg-orangeorange-light-5"
                divClassName="!text-orangeorange-dark !tracking-[0] !text-sm !flex-1 ![white-space:unset] ![font-style:unset] !font-medium ![font-family:'Inter',Helvetica] !leading-5 !w-[unset]"
                frameClassName="!flex-1 !flex !grow"
                groupClassName="!bg-orangeorange"
                icon={
                  <Warning1
                    className="!absolute !w-3 !h-3 !top-1 !left-1"
                    color="white"
                  />
                }
                style="three"
                text={t("myInformation.no_reviews")}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default MyInformation;
