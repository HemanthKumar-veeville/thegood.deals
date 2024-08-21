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
  const location = useLocation();

  const handleBack = () => {
    navigate("/account");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  return (
    <div className="flex flex-col w-full items-start relative bg-primary-background mx-auto">
      <div className="flex flex-col w-full items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]">
        <div className="flex-col flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-center gap-3 pt-0 pb-5 px-0 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-stroke">
            <div
              className="inline-flex items-center gap-2 relative flex-[0_0_auto] cursor-pointer"
              onClick={handleBack}
            >
              <ArrowLeft
                className="!relative !w-[18px] !h-[18px]"
                color="#637381"
              />
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-text-color text-base tracking-[0] leading-6 whitespace-nowrap">
                {t("draft_deal.back_button")}
              </div>
            </div>
          </div>
          <DraftBanner />
          <img
            className="relative self-stretch w-full h-[150px] object-cover"
            alt="Blog image"
            src={blogImage}
          />
          <div className="relative self-stretch [font-family:'Inter',Helvetica] font-semibold text-primary-color text-2xl tracking-[0] leading-[30px]">
            {t("draft_deal.title")}
          </div>
          <div className="flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] rounded-md border border-solid border-primary-color">
            <Pencil1 className="!relative !w-5 !h-5" color="#1B4F4A" />
            <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap">
              {t("draft_deal.edit_button")}
            </button>
          </div>
        </div>
        <Badges
          className="!left-[45px] !absolute !top-[170px]"
          color={statusBanner[location?.state?.deal?.dealStatus]?.color}
          divClassName="!tracking-[0] !text-xs ![font-style:unset] !font-medium ![font-family:'Inter',Helvetica] !leading-5"
          round="semi-round"
          state="duo-tone"
          text1={statusBanner[location?.state?.deal?.dealStatus]?.text}
          text2={
            location?.state?.deal?.dealStatus === "in_stock" ||
            location?.state?.deal?.dealStatus === "finished"
              ? statusBanner[location?.state?.deal?.dealStatus]?.text
              : location?.state?.deal?.dealStatus
          }
        />
        <Badges
          className="!left-[280px] !absolute !bg-blueblue-light-5 !top-[170px]"
          color="warning"
          divClassName="!text-blueblue !tracking-[0] !text-lg ![font-style:unset] !font-medium ![font-family:'Inter',Helvetica] !leading-5"
          round="semi-round"
          state="duo-tone"
          imageSrc={FranceFlag}
        />
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line69}
        />
        <div className="flex-col flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
            <div className="relative w-[52px] h-[50px]">
              <div className="relative w-[50px] h-[50px] bg-graygray rounded-[25px] border-2 border-solid border-stroke">
                <div className="absolute top-2.5 left-[17px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-xl tracking-[0] leading-[26px] whitespace-nowrap">
                  1
                </div>
              </div>
            </div>
            <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap">
              {t("draft_deal.step_1")}
            </div>
          </div>
          <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
            <div className="relative w-[52px] h-[50px]">
              <div className="relative w-[50px] h-[50px] bg-graygray rounded-[25px] border-2 border-solid border-stroke">
                <div className="absolute top-2.5 left-[17px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-xl tracking-[0] leading-[26px] whitespace-nowrap">
                  2
                </div>
              </div>
            </div>
            <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap">
              {t("draft_deal.step_2")}
            </div>
          </div>
          <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
            <div className="relative w-[52px] h-[50px]">
              <div className="relative w-[50px] h-[50px] bg-graygray rounded-[25px] border-2 border-solid border-stroke">
                <div className="absolute top-2.5 left-[17px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-xl tracking-[0] leading-[26px] whitespace-nowrap">
                  3
                </div>
              </div>
            </div>
            <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap">
              {t("draft_deal.step_3")}
            </div>
          </div>
          <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
            <div className="relative w-[52px] h-[50px]">
              <div className="relative w-[50px] h-[50px] bg-graygray rounded-[25px] border-2 border-solid border-stroke">
                <div className="absolute top-2.5 left-[17px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-xl tracking-[0] leading-[26px] whitespace-nowrap">
                  4
                </div>
              </div>
            </div>
            <div className="inline-flex flex-col items-start justify-center relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap">
                {t("draft_deal.step_4")}
              </div>
            </div>
          </div>
          <div className="inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto]">
            <div className="relative w-[52px] h-[50px]">
              <div className="relative w-[50px] h-[50px] bg-graygray rounded-[25px] border-2 border-solid border-stroke">
                <div className="absolute top-2.5 left-[17px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-xl tracking-[0] leading-[26px] whitespace-nowrap">
                  5
                </div>
              </div>
            </div>
            <p className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6">
              {t("draft_deal.step_5")}
            </p>
          </div>
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
