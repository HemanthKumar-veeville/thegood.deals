import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { ArrowLeft } from "../../icons/ArrowLeft/ArrowLeft";
import { Pencil1 } from "../../icons/Pencil1";
import { blogImage, Line63, Line69, FranceFlag } from "../../images";
import { DraftBanner } from "../../components/Banners/DraftBanner";
import { Badges } from "../../components/Badges";
import { useNavigate, useLocation } from "react-router-dom";

const DraftDeal = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleBack = () => {
    navigate("/");
  };

  const statusBanner = {
    out_of_stock: {
      text: t("draft_deal.badges.out_of_stock"),
      color: "warning",
    },
    finished: { text: t("draft_deal.badges.finished"), color: "success" },
    in_stock: { text: t("draft_deal.badges.in_stock"), color: "success" },
    waiting: { text: t("draft_deal.badges.waiting"), color: "warning" },
    draft: { text: t("draft_deal.badges.draft"), color: "info" },
  };

  const dealStatus = state?.deal?.dealStatus;
  const badgeColor = statusBanner[dealStatus]?.color;
  const badgeText = statusBanner[dealStatus]?.text;

  return (
    <div className="flex flex-col w-full items-start relative bg-primary-background mx-auto">
      <div className="flex flex-col w-full items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]">
        {/* Back Button */}
        <div className="flex items-center gap-3 py-2 px-0 relative self-stretch w-full flex-[0_0_auto]">
          <div
            className="inline-flex items-center gap-2 relative flex-[0_0_auto] cursor-pointer"
            onClick={handleBack}
          >
            <ArrowLeft
              className="!relative !w-[18px] !h-[18px]"
              color="#637381"
            />
            <div className="relative w-fit font-medium text-primary-text-color text-base leading-6 whitespace-nowrap">
              {t("draft_deal.back_button", "Back")}
            </div>
          </div>
        </div>

        {/* Banner */}
        <DraftBanner className="relative w-full bg-blue-100 text-blue-800 rounded-md p-3" />

        {/* Image */}
        <img
          className="relative self-stretch w-full h-[150px] object-cover rounded-md"
          alt="Wine crates"
          src={blogImage}
        />

        {/* Title */}
        <div className="relative self-stretch font-semibold text-primary-color text-2xl leading-[30px]">
          Wine crates <br /> Domaine de Cigaluse
        </div>

        {/* Edit Button */}
        <div className="flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full rounded-md border border-solid border-primary-color">
          <Pencil1 className="!relative !w-5 !h-5" color="#1B4F4A" />
          <button className="all-[unset] w-fit font-medium text-primary-color text-base text-center leading-6 whitespace-nowrap">
            {t("draft_deal.edit_button", "Edit the deal")}
          </button>
        </div>

        {/* Status Badge */}
        <Badges
          className="!left-[45px] !absolute !top-[170px]"
          color={badgeColor}
          divClassName="!tracking-[0] !text-xs !font-medium !leading-5"
          round="semi-round"
          state="duo-tone"
          text1={badgeText}
          text2={
            ["in_stock", "finished"].includes(dealStatus)
              ? badgeText
              : dealStatus
          }
        />

        {/* Flag Badge */}
        <Badges
          className="!left-[280px] !absolute !bg-blueblue-light-5 !top-[170px]"
          color="warning"
          divClassName="!text-blueblue !text-lg !font-medium !leading-5"
          round="semi-round"
          state="duo-tone"
          imageSrc={FranceFlag}
        />

        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line69}
        />

        {/* Steps List */}
        <div className="flex-col flex items-start gap-[15px] relative self-stretch w-full">
          {[
            t("draft_deal.step_1", "The artisan accepted the deal"),
            t("draft_deal.step_2", "The good deal in progress"),
            t("draft_deal.step_3", "Goal achieved! 🎉"),
            t("draft_deal.step_4", "Order sent to the artisan"),
            t(
              "draft_deal.step_5",
              "Organizer coordinates with artisan for delivery"
            ),
          ].map((step, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-2.5 relative"
            >
              <div className="relative w-[52px] h-[50px]">
                <div className="relative w-[50px] h-[50px] bg-graygray rounded-[25px] border-2 border-solid border-stroke">
                  <div className="absolute top-2.5 left-[17px] font-medium text-primary-color text-xl leading-[26px]">
                    {index + 1}
                  </div>
                </div>
              </div>
              <div className="relative w-fit font-medium text-primary-color text-base leading-6">
                {step}
              </div>
            </div>
          ))}
        </div>

        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
      </div>
    </div>
  );
};

export default DraftDeal;
