import React, { useState, useEffect, useRef } from "react";
import { InfoCircle8 } from "../../icons/InfoCircle8/InfoCircle8";
import { fetchOrderById } from "../../redux/app/orders/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import CustomLoader from "../CustomLoader/CustomLoader";

export const OrderInfo = ({ orderId }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const tooltipRef = useRef(null);

  const dispatch = useDispatch();

  // Fetch the order data from Redux store
  const order = useSelector((state) => state.orders.order);
  const orderStatus = useSelector((state) => state.orders.orderStatus);
  const orderError = useSelector((state) => state.orders.orderError);
  const orderState = order?.Orders;

  // Dispatch fetchOrderById on component mount
  useEffect(() => {
    dispatch(fetchOrderById({ orderId }));
  }, []);

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
    return <div>Error: {orderError}</div>;
  }

  return (
    <div className="flex flex-col items-start gap-[15px] p-[15px] relative bg-white rounded-[5px] mx-auto w-full">
      <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex w-[162.5px] items-center gap-[5px] relative">
            <div className="relative w-fit mt-[-1.00px] font-body-extra-small-text-regular font-[number:var(--body-extra-small-text-regular-font-weight)] text-primary-text-color text-[length:var(--body-extra-small-text-regular-font-size)] text-center tracking-[var(--body-extra-small-text-regular-letter-spacing)] leading-[var(--body-extra-small-text-regular-line-height)] whitespace-nowrap [font-style:var(--body-extra-small-text-regular-font-style)]">
              Order
            </div>
          </div>
          <div className="inline-flex items-start justify-end gap-2.5 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-primary-color text-sm text-right tracking-[0] leading-[22px] whitespace-nowrap">
              {orderState?.order_total} €
            </div>
          </div>
        </div>

        {/* Tooltip functionality for Info Icon */}
        <div className="flex flex-col items-end gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]">
            <div className="flex w-full items-center gap-[5px] relative">
              <div className="relative w-fit mt-[-1.00px] font-body-extra-small-text-regular font-[number:var(--body-extra-small-text-regular-font-weight)] text-primary-text-color text-[length:var(--body-extra-small-text-regular-font-size)] text-center tracking-[var(--body-extra-small-text-regular-letter-spacing)] leading-[var(--body-extra-small-text-regular-line-height)] whitespace-nowrap [font-style:var(--body-extra-small-text-regular-font-style)]">
                Service Fees
              </div>
              <div className="relative">
                <span onClick={handleToggleTooltip}>
                  <InfoCircle8 className="!relative !w-3.5 !h-3.5 cursor-pointer" />
                </span>
                {showTooltip && (
                  <div
                    ref={tooltipRef}
                    className="absolute z-10 w-[260px] p-2 bg-white text-gray-800 border border-gray-300 rounded-md shadow-lg bottom-full left-1/2 transform -translate-x-1/2 mb-2"
                  >
                    TheGoodDeals Commission of 6%
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white border border-gray-300 -bottom-1 rotate-45"></div>
                  </div>
                )}
              </div>
            </div>
            <div className="inline-flex items-start justify-end gap-2.5 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-primary-color text-sm text-right tracking-[0] leading-[22px] whitespace-nowrap">
                {orderState?.service_fees} €
              </div>
            </div>
          </div>
        </div>

        {/* Rest of the component code */}
        <div className="flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex w-[162.5px] items-center gap-[5px] relative">
            <div className="relative w-fit mt-[-1.00px] font-body-extra-small-text-regular font-[number:var(--body-extra-small-text-regular-font-weight)] text-primary-text-color text-[length:var(--body-extra-small-text-regular-font-size)] text-center tracking-[var(--body-extra-small-text-regular-letter-spacing)] leading-[var(--body-extra-small-text-regular-line-height)] whitespace-nowrap [font-style:var(--body-extra-small-text-regular-font-style)]">
              Payment Fees
            </div>
          </div>
          <div className="inline-flex items-start justify-end gap-2.5 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-primary-color text-sm text-right tracking-[0] leading-[22px] whitespace-nowrap">
              {orderState?.payment_fees} €
            </div>
          </div>
        </div>

        <div className="flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex w-[162.5px] items-center gap-[5px] relative">
            <div className="relative w-fit mt-[-1.00px] font-body-extra-small-text-regular font-[number:var(--body-extra-small-text-regular-font-weight)] text-primary-text-color text-[length:var(--body-extra-small-text-regular-font-size)] text-center tracking-[var(--body-extra-small-text-regular-letter-spacing)] leading-[var(--body-extra-small-text-regular-line-height)] whitespace-nowrap [font-style:var(--body-extra-small-text-regular-font-style)]">
              Delivery Fees
            </div>
          </div>
          <div className="inline-flex items-start justify-end gap-2.5 relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-primary-color text-sm text-right tracking-[0] leading-[22px] whitespace-nowrap">
              {orderState?.delivery_fees}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
          <div className="flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]">
            <div className="relative w-fit font-body-extra-small-text-regular font-[number:var(--body-extra-small-text-regular-font-weight)] text-primary-text-color text-[length:var(--body-extra-small-text-regular-font-size)] text-center tracking-[var(--body-extra-small-text-regular-letter-spacing)] leading-[var(--body-extra-small-text-regular-line-height)] whitespace-nowrap [font-style:var(--body-extra-small-text-regular-font-style)]">
              TOTAL TTC
            </div>
            <div className="inline-flex items-start justify-end gap-2.5 relative flex-[0_0_auto]">
              <div className="[font-family:'Inter-Regular',Helvetica] font-normal text-primary-text-color leading-6 line-through relative w-fit mt-[-1.00px] text-sm text-right tracking-[0] whitespace-nowrap">
                {orderState?.mrp ?? "XX"} €
              </div>
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-primary-color text-sm text-right tracking-[0] leading-[22px] whitespace-nowrap">
                {orderState?.total_ttc ?? "XX"} €
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-fit font-body-extra-small-text-regular font-[number:var(--body-extra-small-text-regular-font-weight)] text-secondary-color text-[length:var(--body-extra-small-text-regular-font-size)] text-center tracking-[var(--body-extra-small-text-regular-letter-spacing)] leading-[var(--body-extra-small-text-regular-line-height)] whitespace-nowrap [font-style:var(--body-extra-small-text-regular-font-style)]">
            Save
          </div>
          <div className="font-body-small-medium font-[number:var(--body-small-medium-font-weight)] text-secondary-color leading-[var(--body-small-medium-line-height)] relative w-fit mt-[-1.00px] text-[length:var(--body-small-medium-font-size)] text-right tracking-[var(--body-small-medium-letter-spacing)] whitespace-nowrap [font-style:var(--body-small-medium-font-style)]">
            {orderState?.discount ?? "XX"} €
          </div>
        </div>
      </div>
    </div>
  );
};
