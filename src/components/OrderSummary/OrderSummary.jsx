import React, { useState, useEffect, useRef } from "react";
import { InfoCircle8 } from "../../icons/InfoCircle8/InfoCircle8";
import { fetchOrderById } from "../../redux/app/orders/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import CustomLoader from "../CustomLoader/CustomLoader";
import { useTranslation } from "react-i18next"; // Initialize translation
import { Line } from "../Line/Line";
import { ChevronDown1 } from "../../icons/ChevronDown1";
import { ChevronUp } from "../../icons/ChevronUp";

export const OrderSummary = ({ orderId }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef(null);
  const { t } = useTranslation(); // Use translation
  const [isOrderDetailsVisible, setIsOrderDetailsVisible] = useState(true); // Toggle visibility

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

  // Function to toggle tooltip visibility
  const handleToggleTooltip = () => {
    setShowTooltip((prev) => !prev);
  };

  // Function to toggle order details visibility
  const handleToggleOrderDetails = () => {
    setIsOrderDetailsVisible((prev) => !prev);
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
    <div>
      <div
        className="inline-flex items-center justify-between w-full gap-4 cursor-pointer mt-3"
        onClick={handleToggleOrderDetails} // Toggling order details
      >
        <div className="flex gap-5">
          <div className="inline-flex flex-col items-start gap-1.5">
            <div className="font-body-medium-bold font-[number:var(--body-medium-bold-font-weight)] text-primary-color text-[length:var(--body-medium-bold-font-size)] tracking-[var(--body-medium-bold-letter-spacing)] leading-[var(--body-medium-bold-line-height)] whitespace-nowrap [font-style:var(--body-medium-bold-font-style)]">
              {t("orders.summary")}
            </div>
          </div>
        </div>
        {isOrderDetailsVisible ? (
          <ChevronUp className="w-6 h-6" color="#1B4F4A" />
        ) : (
          <ChevronDown1 className="w-6 h-6" color="#1B4F4A" />
        )}
      </div>
      <div
        className={`transition-all duration-500 overflow-hidden ${
          isOrderDetailsVisible ? "max-h-full" : "max-h-0"
        }`}
      >
        <div className="flex flex-col items-start gap-4 pt-4 pb-4 px-4 bg-whitewhite mt-3 w-full">
          {/* Products in Each Order */}
          {orderState?.products?.map((product, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-1.5 self-stretch"
            >
              <p className="mt-[-1px] [font-family:'Inter-Regular',Helvetica] font-normal text-primary-color text-base tracking-[0] leading-6">
                {product.product_title}
              </p>
              <div className="flex items-center justify-between gap-2.5 self-stretch">
                <div className="flex items-center justify-between w-full">
                  <p className="mt-[-1px] font-semibold text-secondary-color text-base">
                    {product.product_quantity} {t("orders.products")}
                  </p>
                  <p className="mt-[-1px] font-semibold text-secondary-color text-base text-right">
                    € {product.product_price} x {product.product_quantity} = €{" "}
                    {product.product_amount}
                  </p>
                </div>
              </div>
            </div>
          ))}
          {/* Fees Section */}
          <div className="flex flex-col items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
            {/* Service Fees */}
            <div className="flex items-center justify-between w-full">
              <p className="font-body-extra-small-text-regular font-[number:var(--body-extra-small-text-regular-font-weight)] text-primary-text-color text-[length:var(--body-extra-small-text-regular-font-size)] text-center tracking-[var(--body-extra-small-text-regular-letter-spacing)] leading-[var(--body-extra-small-text-regular-line-height)] whitespace-nowrap [font-style:var(--body-extra-small-text-regular-font-style)]">
                {t("orders.service_fees")}
              </p>
              <p className="font-semibold text-primary-color text-sm text-right">
                {orderState?.service_fees} €
              </p>
            </div>
            {/* Payment Fees */}
            <div className="flex items-center justify-between w-full">
              <p className="font-body-extra-small-text-regular font-[number:var(--body-extra-small-text-regular-font-weight)] text-primary-text-color text-[length:var(--body-extra-small-text-regular-font-size)] text-center tracking-[var(--body-extra-small-text-regular-letter-spacing)] leading-[var(--body-extra-small-text-regular-line-height)] whitespace-nowrap [font-style:var(--body-extra-small-text-regular-font-style)]">
                {t("orders.payment_fees")}
              </p>
              <p className="font-semibold text-primary-color text-sm text-right">
                {orderState?.payment_fees} €
              </p>
            </div>
            {/* Delivery Fees */}
            <div className="flex items-center justify-between w-full">
              <p className="font-body-extra-small-text-regular font-[number:var(--body-extra-small-text-regular-font-weight)] text-primary-text-color text-[length:var(--body-extra-small-text-regular-font-size)] text-center tracking-[var(--body-extra-small-text-regular-letter-spacing)] leading-[var(--body-extra-small-text-regular-line-height)] whitespace-nowrap [font-style:var(--body-extra-small-text-regular-font-style)]">
                {t("orders.delivery_fees")}
              </p>
              <p className="font-semibold text-primary-color text-sm text-right">
                {t("order.deliveryFeesValue")}
              </p>
            </div>
          </div>
          <Line />
          {/* Total Per Order */}
          <div className="flex items-end justify-between self-stretch">
            <div className="flex items-center gap-2.5 grow">
              <div className="font-semibold text-primary-color text-lg">
                {t("orders.total")}
              </div>
            </div>
            <div className="inline-flex flex-col items-end">
              <div className="font-semibold text-primary-color text-lg text-right">
                € {orderState?.total_ttc}
              </div>
            </div>
          </div>
          <Line />
        </div>
      </div>
    </div>
  );
};
