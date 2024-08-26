import React, { useEffect } from "react";
import { ArrowLeft1 } from "../../icons/ArrowLeft1";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchNotificationSettings,
  updateNotificationSettings,
} from "../../redux/app/account/accountSlice";

const Notifications = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { notifications, status } = useSelector((state) => state.account);
  console.log({ notifications });
  useEffect(() => {
    dispatch(fetchNotificationSettings());
  }, []);

  const handleToggle = (type) => {
    const updatedNotifications = {
      ...notifications,
      [type]: !notifications[type],
    };
    dispatch(updateNotificationSettings(updatedNotifications));
  };

  const handleBack = () => {
    navigate("/settings");
  };

  return (
    <div className="flex flex-col w-full h-screen items-start relative bg-primary-background">
      <div className="flex flex-col w-[360px] items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]">
        <div
          className="flex items-center gap-3 pt-0 pb-5 px-0 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-stroke"
          onClick={handleBack}
        >
          <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
            <ArrowLeft1
              className="!relative !w-[18px] !h-[18px]"
              color="#637381"
            />
            <div className="relative w-fit mt-[-1.00px] font-body-medium-medium font-[number:var(--body-medium-medium-font-weight)] text-primary-text-color text-[length:var(--body-medium-medium-font-size)] tracking-[var(--body-medium-medium-letter-spacing)] leading-[var(--body-medium-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-medium-font-style)]">
              {t("common.back")}
            </div>
          </div>
        </div>
        <div className="relative self-stretch font-heading-6 font-[number:var(--heading-6-font-weight)] text-primary-color text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] [font-style:var(--heading-6-font-style)]">
          {t("notifications.title")}
        </div>
        <div className="flex flex-col items-start self-stretch w-full relative flex-[0_0_auto]">
          {notifications &&
            Object.keys(notifications).map((type, index) => (
              <div
                key={index}
                className="flex h-[54px] items-center justify-between px-0 py-[15px] relative self-stretch w-full border-b [border-bottom-style:solid] border-stroke"
              >
                <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                  <div className="relative w-fit mt-[-1.00px] font-body-medium-medium font-[number:var(--body-medium-medium-font-weight)] text-primary-color text-[length:var(--body-medium-medium-font-size)] tracking-[var(--body-medium-medium-letter-spacing)] leading-[var(--body-medium-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-medium-font-style)]">
                    {notifications[type]?.name}
                  </div>
                </div>
                <div
                  className={`relative w-[50px] h-[26px] mt-[-1.00px] mb-[-1.00px] rounded-[30px] cursor-pointer ${
                    notifications[type]?.enabled
                      ? "bg-primary-color"
                      : "bg-gray-300"
                  }`}
                  onClick={() => handleToggle(type)}
                >
                  <div
                    className={`relative w-[18px] h-[18px] top-1 bg-white rounded-[9px] transition-transform ${
                      notifications[type]?.enabled
                        ? "translate-x-7"
                        : "translate-x-1"
                    }`}
                  />
                </div>
              </div>
            ))}
          <div className="relative w-[159px] h-[26px]" />
        </div>
      </div>
    </div>
  );
};

export default Notifications;
