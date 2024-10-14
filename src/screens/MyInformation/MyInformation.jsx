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

const MyInformation = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const sliderRef = useRef(null);

  const { profile, userDeals, userReviews, status } = useSelector(
    (state) => state.user
  );
  console.log({ profile, userDeals, userReviews, status });
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchUserProfileWithDealsAndReviews());
  }, []);

  const handleBack = () => {
    navigate("/");
  };

  const handleCardClick = (deal) => {
    navigate(`/deal/${deal.deal_id}`);
  };

  const handlePlayPause = () => {
    setIsPlaying((prev) => !prev);
    if (isPlaying) {
      sliderRef.current.slickPause();
    } else {
      sliderRef.current.slickPlay();
    }
  };

  const NextArrow = ({ onClick }) => {
    return (
      <button className="text-primary-color" onClick={onClick}>
        <FaArrowRight size={18} />
      </button>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <button className="text-primary-color" onClick={onClick}>
        <FaArrowLeft size={18} />
      </button>
    );
  };

  const PlayPauseButton = () => {
    return (
      <button className="text-primary-color" onClick={handlePlayPause}>
        {isPlaying ? <FaPause size={18} /> : <FaPlay size={18} />}
      </button>
    );
  };

  const sliderSettings = {
    dots: false,
    infinite: userDeals?.length > 1, // Disable infinite scroll if there's only one deal
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: isPlaying,
    autoplaySpeed: 3000,
    arrows: false, // We will use custom arrows instead
  };

  return (
    <div className="flex flex-col w-full h-full items-start relative bg-primary-background min-h-screen">
      {status === "loading" && <CustomLoader />}

      {status === "succeeded" && (
        <div className="flex flex-col w-full items-start gap-[15px] px-[35px] py-[15px] relative">
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
          <Line />
          <div className="flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] rounded-md border border-solid border-primary-color">
            <EnvelopeAlt className="!relative !w-5 !h-5" color="#1B4F4A" />
            <button className="all-[unset] box-border relative w-fit mt-[-1.00px] font-body-medium-medium font-[number:var(--body-medium-medium-font-weight)] text-primary-color text-[length:var(--body-medium-medium-font-size)] text-center tracking-[var(--body-medium-medium-letter-spacing)] leading-[var(--body-medium-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-medium-font-style)]">
              {t("myInformation.contact", { name: profile?.name || "User" })}
            </button>
          </div>
          <Line />
          <div className="font-heading-6 font-[number:var(--heading-6-font-weight)] text-primary-color text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] relative self-stretch [font-style:var(--heading-6-font-style)]">
            {t("myInformation.deals")}
          </div>
          {status === "succeeded" && userDeals?.length > 0 && (
            <>
              {/* Carousel Slider for Deals */}
              <Slider ref={sliderRef} {...sliderSettings} className="w-full">
                {userDeals?.map((deal) => (
                  <div key={deal.deal_id} className="cursor-pointer">
                    <CardDeal
                      badgesColor="success"
                      badgesDivClassName="!tracking-[0] !text-xs ![font-style:unset] !font-medium ![font-family:'Inter',Helvetica] !leading-5"
                      badgesText1={deal.dealStatus}
                      caissesDeVinsClassName="!tracking-[0] !text-base ![font-style:unset] !font-bold ![font-family:'Inter',Helvetica] !leading-6"
                      className="!flex-[0_0_auto]"
                      divClassName="!tracking-[0] !text-sm ![font-style:unset] !font-medium ![font-family:'Inter',Helvetica] !leading-[22px]"
                      divClassNameOverride="!tracking-[0] !text-sm ![font-style:unset] !font-normal ![font-family:'Inter',Helvetica] !leading-[22px]"
                      override={
                        deal?.progress === "0%" ? null : deal.status ===
                          "soon_out_stock" ? (
                          <ProgressBarYellow percentage={deal.progress || 80} />
                        ) : (
                          <ProgressBarGreen percentage={deal.progress || 90} />
                        )
                      }
                      text={deal.title}
                      text1={deal.status}
                      participantsCount={deal.participants}
                      dealEndsIn={deal.ends_in}
                      dealImages={[deal.image]}
                    />
                  </div>
                ))}
              </Slider>
              {userDeals?.length > 1 && (
                <div className="flex justify-around items-between mt-1   w-full">
                  <PrevArrow onClick={() => sliderRef.current.slickPrev()} />
                  <PlayPauseButton />
                  <NextArrow onClick={() => sliderRef.current.slickNext()} />
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
          {userReviews?.length > 0 &&
            userReviews?.map((review) => (
              <div
                key={review.id}
                className="flex flex-col items-start gap-5 pt-5 pb-[30px] px-[30px] relative self-stretch w-full flex-[0_0_auto] bg-whitewhite rounded-xl shadow-shadow-1"
              >
                <div className="flex flex-col items-start justify-center gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
                  <div className="inline-flex items-center gap-[15px] relative flex-[0_0_auto]">
                    <img
                      className="relative w-14 h-14 object-cover"
                      alt="Ellipse"
                      src={Ellipse} // Replace with user's avatar if available
                    />
                    <div className="inline-flex flex-col items-start gap-px relative flex-[0_0_auto]">
                      <div className="relative w-fit mt-[-1.00px] font-body-medium-medium font-[number:var(--body-medium-medium-font-weight)] text-darkdark text-[length:var(--body-medium-medium-font-size)] tracking-[var(--body-medium-medium-letter-spacing)] leading-[var(--body-medium-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-medium-font-style)]">
                        {review.reviewerName}
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
                    {review.comment}
                  </p>
                </div>
              </div>
            ))}
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
