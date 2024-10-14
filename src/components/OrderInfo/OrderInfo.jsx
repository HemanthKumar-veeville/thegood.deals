import React, { useState, useEffect, useRef } from "react";
import { InfoCircle8 } from "../../icons/InfoCircle8/InfoCircle8";
import { fetchOrderById } from "../../redux/app/orders/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import CustomLoader from "../CustomLoader/CustomLoader";
import { useTranslation } from "react-i18next"; // Initialize translation

export const OrderInfo = ({ orderId }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef(null);
  const { t } = useTranslation(); // Use translation

  const dispatch = useDispatch();

  // Fetch the order data from Redux store
  const order = useSelector((state) => state.orders.order);
  const orderStatus = useSelector((state) => state.orders.orderStatus);
  const orderError = useSelector((state) => state.orders.orderError);
  const orderState = order?.Orders;

  // Dispatch fetchOrderById on component mount
  useEffect(() => {
    dispatch(fetchOrderById({ orderId }));
  }, [dispatch, orderId]);

  console.log({ orderState });

  // Function to toggle tooltip visibility
  const handleToggleTooltip = () => {
    setShowTooltip((prev) => !prev);
  };

  // Close tooltip on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (tooltipRef.current && !tooltipRef.current.contains(event.target)) {
        setShowTooltip(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [tooltipRef]);

  // Handle loading and error states
  if (orderStatus === "loading") {
    return <CustomLoader />;
  }

  if (orderStatus === "failed") {
    return <div>{t("order.error", { error: orderError })}</div>;
  }

  return (
    <div className="flex flex-col items-start gap-[15px] p-[15px] relative bg-white rounded-[5px] mx-auto w-full">
      <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex w-[162.5px] items-center gap-[5px] relative">
            <div className="relative w-fit mt-[-1.00px] font-body-extra-small-text-regular text-primary-text-color">
              {t("order.orderLabel")} {/* Localized 'Order' */}
            </div>
          </div>
          <div className="inline-flex items-start justify-end gap-2.5 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-semibold text-primary-color text-sm text-right">
              {orderState?.order_total} €
            </div>
          </div>
        </div>

        {/* Tooltip functionality for Info Icon */}
        <div className="flex flex-col items-end gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex w-full items-center gap-[5px] relative">
              <div className="relative w-fit mt-[-1.00px] font-body-extra-small-text-regular text-primary-text-color">
                {t("order.serviceFeesLabel")} {/* Localized 'Service Fees' */}
              </div>
              <div className="relative">
                <span onClick={handleToggleTooltip}>
                  <InfoCircle8
                    className="!relative !w-3.5 !h-3.5 cursor-pointer"
                    color="#2a4e4a"
                  />
                </span>
                {showTooltip && (
                  <div
                    ref={tooltipRef}
                    className="absolute z-10 w-[265px] p-2 bg-white text-gray-800 border border-gray-300 rounded-md shadow-lg bottom-full left-1/2 transform -translate-x-1/2 mb-2"
                  >
                    {t("order.serviceFeesTooltip")}{" "}
                    {/* Localized tooltip text */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white border border-gray-300 -bottom-1 rotate-45"></div>
                  </div>
                )}
              </div>
            </div>
            <div className="inline-flex items-start justify-end gap-2.5 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-semibold text-primary-color text-sm text-right">
                {orderState?.service_fees} €
              </div>
            </div>
          </div>
        </div>

        {/* Payment Fees */}
        <div className="flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex w-[162.5px] items-center gap-[5px] relative">
            <div className="relative w-fit mt-[-1.00px] font-body-extra-small-text-regular text-primary-text-color">
              {t("order.paymentFeesLabel")} {/* Localized 'Payment Fees' */}
            </div>
          </div>
          <div className="inline-flex items-start justify-end gap-2.5 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-semibold text-primary-color text-sm text-right">
              {orderState?.payment_fees} €
            </div>
          </div>
        </div>

        {/* Delivery Fees */}
        <div className="flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex w-[162.5px] items-center gap-[5px] relative">
            <div className="relative w-fit mt-[-1.00px] font-body-extra-small-text-regular text-primary-text-color">
              {t("order.deliveryFeesLabel")} {/* Localized 'Delivery Fees' */}
            </div>
          </div>
          <div className="inline-flex items-start justify-end gap-2.5 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-semibold text-primary-color text-sm text-right">
              {orderState?.delivery_fees} €
            </div>
          </div>
        </div>

        {/* TOTAL TTC */}
        <div className="flex flex-col items-end gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-fit font-body-extra-small-text-regular text-primary-text-color">
              {t("order.totalTTC")} {/* Localized 'TOTAL TTC' */}
            </div>
            <div className="inline-flex items-start justify-end gap-2.5 relative flex-[0_0_auto]">
              <div className="font-normal text-primary-text-color leading-6 line-through relative w-fit mt-[-1.00px] text-sm text-right">
                {orderState?.mrp ?? t("order.priceUnknown")} €
              </div>
              <div className="relative w-fit mt-[-1.00px] font-semibold text-primary-color text-sm text-right">
                {orderState?.total_ttc ?? t("order.totalUnknown")} €
              </div>
            </div>
          </div>
        </div>

        {/* Save */}
        <div className="flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-fit font-body-extra-small-text-regular text-secondary-color">
            {t("order.saveLabel")} {/* Localized 'Save' */}
          </div>
          <div className="font-small-medium text-secondary-color leading-small relative w-fit mt-[-1.00px] text-right">
            {orderState?.discount ?? t("order.discountUnknown")} €
          </div>
        </div>
      </div>
    </div>
  );
};
