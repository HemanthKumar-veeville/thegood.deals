import React from "react";
import { ArrowLeft } from "../icons/ArrowLeft/ArrowLeft";
import { Button } from "../components/Button/Button";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteAccount } from "../redux/app/user/userSlice";

function DeleteAccount() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleBack = () => {
    navigate(-1);
  };

  const handleDelete = async () => {
    try {
      await dispatch(deleteAccount()).unwrap();
      navigate("/delete-account-message");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col w-[360px] items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]">
      <div
        className="flex w-[290px] items-center gap-3 pt-0 pb-5 px-0 relative flex-[0_0_auto] border-b [border-bottom-style:solid] border-stroke"
        onClick={handleBack}
      >
        <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
          <ArrowLeft
            className="!relative !w-[18px] !h-[18px]"
            color="#637381"
          />
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#637381] text-base tracking-[0] leading-6 whitespace-nowrap">
            {t("DeleteAccount.common.back")}
          </div>
        </div>
      </div>

      <div className="relative w-fit font-heading-6 font-[number:var(--heading-6-font-weight)] text-[#1b4f4a] text-[length:var(--heading-6-font-size)] text-center tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] whitespace-nowrap [font-style:var(--heading-6-font-style)]">
        {t("DeleteAccount.delete_account.heading")}
      </div>

      <p className="relative self-stretch font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-[#637381] text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] [font-style:var(--body-medium-regular-font-style)]">
        {t("DeleteAccount.delete_account.description")}
      </p>

      <div className="relative w-fit font-body-large-medium font-[number:var(--body-large-medium-font-weight)] text-[#1b4f4a] text-[length:var(--body-large-medium-font-size)] text-center tracking-[var(--body-large-medium-letter-spacing)] leading-[var(--body-large-medium-line-height)] whitespace-nowrap [font-style:var(--body-large-medium-font-style)]">
        {t("DeleteAccount.delete_account.confirmation")}
      </div>

      <div onClick={handleDelete}>
        <Button
          buttonText={t("DeleteAccount.delete_account.button_text")}
          className="!self-stretch !flex-[0_0_auto] !flex !bg-redred !w-full"
          color="primary"
          kind="primary"
          round="semi-round"
          state="default"
        />
      </div>
    </div>
  );
}

export default DeleteAccount;
