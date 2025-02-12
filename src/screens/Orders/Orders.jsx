import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchOrdersByDeal,
  fetchOrders,
} from "../../redux/app/orders/orderSlice"; // Adjust the import path as needed
import { SizeXlCorner } from "../../components/SizeXlCorner";
import { ArrowLeft1 } from "../../icons/ArrowLeft1";
import { Box44 } from "../../icons/Box44";
import { ChevronDown1 } from "../../icons/ChevronDown1";
import { ChevronUp } from "../../icons/ChevronUp";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import CustomLoader from "../../components/CustomLoader/CustomLoader";
import { SuccessAlert } from "../../components/SuccessAlert/SuccessAlert.jsx";
import { Warning1 } from "../../icons/Warning1/Warning1.jsx";
import { OrderInfo } from "../../components/OrderInfo/OrderInfo.jsx";
import { Line } from "../../components/Line/Line.jsx";
import { ArrowRight1 } from "../../icons/ArrowRight1/ArrowRight1.jsx";
import CustomStatus from "../../components/CustomStatus/CustomStatus.jsx";
import { cancelOrderByOrderId } from "../../redux/app/orders/orderSlice";
import { ShowCustomErrorModal } from "../../components/ErrorAlert/ErrorAlert.jsx";
import { ShowCustomSuccessModal } from "../../components/ShowCustomSuccessModal/ShowCustomSuccessModal.jsx";

const Orders = ({ dealId, dealType }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const queryParams = new URLSearchParams(location.search);
  const deal_id = queryParams.get("deal_id");
  const is_creator = queryParams.get("is_creator");
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isOrderDetailsVisible, setIsOrderDetailsVisible] = useState({});
  const [isSuccess, setIsSuccess] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const { orders, orderStatus, orderError } = useSelector(
    (state) => state.orders
  );
  const ordersState = orders?.Orders?.length > 0 ? orders?.Orders : null;

  const handleCloseSuccessModal = () => {
    setIsSuccess(false);
    setSuccessMessage("");
    if (deal_id) {
      dispatch(
        fetchOrdersByDeal({
          dealId: deal_id,
          dealType: is_creator === "true" ? "created" : "invited",
        })
      );
    } else {
      dispatch(fetchOrders());
    }
  };

  useEffect(() => {
    if (deal_id) {
      dispatch(
        fetchOrdersByDeal({
          dealId: deal_id,
          dealType: is_creator === "true" ? "created" : "invited",
        })
      );
    } else {
      dispatch(fetchOrders());
    }
  }, []);

  const handleToggleOrderDetails = (name) => {
    setIsOrderDetailsVisible((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  const handleEditPayment = (orderId) => {
    navigate(`/payment?orderId=${orderId}&is_edit_mode=${true}`);
  };

  const handleCancelOrder = async (orderId) => {
    try {
      await dispatch(cancelOrderByOrderId(orderId)).unwrap();
      setIsSuccess(true);
      setSuccessMessage(t("orders.order_cancelled"));
    } catch (error) {
      console.error("Failed to cancel order:", error);
      setIsError(true);
      setErrorMessage(error?.detail);
    }
  };

  const handleBackToDeal = () => {
    navigate(-1);
  };

  if (orderStatus === "loading") {
    return <CustomLoader />;
  }
  return (
    <div className="flex flex-col w-full h-full items-start relative bg-primary-background mx-auto">
      <div className="flex flex-col w-full items-start gap-4 px-8 py-4 relative">
        <div
          className="flex items-center gap-3 pt-0 px-0 relative self-stretch w-full border-b border-stroke cursor-pointer"
          onClick={handleBackToDeal}
        >
          <div className="inline-flex items-center gap-2">
            <ArrowLeft1 className="w-4.5 h-4.5" color="#637381" />
            <div className="mt-[-1px] font-medium text-primary-text-color text-base">
              {t("orders.back_to_deal")}
            </div>
          </div>
        </div>
        <Line />
        <div className="relative self-stretch font-semibold text-primary-color text-2xl">
          {t("orders.my_orders")}
        </div>
        {isError && (
          <ShowCustomErrorModal
            message={errorMessage}
            buttonText={t("waiting_deal.got_it")}
            onClose={() => setIsError(false)} // Reset modal state on close
          />
        )}
        {isSuccess && (
          <ShowCustomSuccessModal
            message={successMessage}
            buttonText={t("waiting_deal.got_it")}
            onClose={handleCloseSuccessModal} // Reset modal state on close
          />
        )}
        <>
          {orders?.message && (
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
                text={t("orders.empty")}
              />
            </div>
          )}
          {ordersState?.map((participant) => (
            <div key={participant.participant_id}>
              <div
                className="inline-flex items-center justify-between w-full gap-4 cursor-pointer mt-3"
                onClick={() =>
                  handleToggleOrderDetails(participant.participant_name)
                }
              >
                <div className="flex gap-5">
                  <SizeXlCorner
                    className="h-14 w-14"
                    divClassName="tracking-0 text-lg font-semibold left-2 leading-10 top-1"
                    text={
                      participant.participant_name
                        .split(" ")[0]
                        .charAt(0)
                        .toUpperCase() +
                      "." +
                      participant.participant_name
                        .split(" ")[1]
                        .charAt(0)
                        .toUpperCase() +
                      "."
                    }
                  />
                  <div className="inline-flex flex-col items-start gap-1.5">
                    <div className="mt-[-1px] font-medium text-primary-color text-base">
                      {participant.participant_name}
                    </div>
                    <div className="inline-flex items-center gap-2.5">
                      <Box44 className="w-5 h-5" />
                      <p className="mt-[-1px] font-normal text-primary-text-color text-sm leading-5.5">
                        {participant.orders_count} {t("orders.order_on_deal")}
                      </p>
                    </div>
                  </div>
                </div>
                {isOrderDetailsVisible[participant.participant_name] ? (
                  <ChevronUp className="w-6 h-6" color="#1B4F4A" />
                ) : (
                  <ChevronDown1 className="w-6 h-6" color="#1B4F4A" />
                )}
              </div>
              <div
                className={`transition-all duration-500 overflow-hidden ${
                  isOrderDetailsVisible[participant.participant_name]
                    ? "max-h-full"
                    : "max-h-0"
                }`}
              >
                <div className="flex flex-col items-start gap-4 pt-0 pb-4 px-4 bg-whitewhite mt-3 w-full">
                  <Line />
                  {/* Orders Details */}
                  <div
                    className={`transition-all duration-500 overflow-hidden ${
                      isOrderDetailsVisible[participant.participant_name]
                        ? "max-h-full"
                        : "max-h-0"
                    }`}
                  >
                    {participant?.orders?.map((order) => (
                      <div
                        key={order.order_id}
                        className="flex flex-col items-start gap-4 pt-0 pb-4 px-4 bg-whitewhite mt-3 w-full"
                      >
                        {order.payment_status !== "succeeded" && (
                          <CustomStatus text={t("orders.awaiting_payment")} />
                        )}
                        {/* Products in Each Order */}
                        {order?.products?.map((product, index) => (
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
                                  {product.product_quantity}{" "}
                                  {t("orders.products")}
                                </p>
                                <p className="mt-[-1px] font-semibold text-secondary-color text-base text-right">
                                  € {product.product_price} x{" "}
                                  {product.product_quantity} = €{" "}
                                  {product.product_price *
                                    product.product_quantity}
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
                              {participant.service_fees} €
                            </p>
                          </div>
                          {/* Payment Fees */}
                          <div className="flex items-center justify-between w-full">
                            <p className="font-body-extra-small-text-regular font-[number:var(--body-extra-small-text-regular-font-weight)] text-primary-text-color text-[length:var(--body-extra-small-text-regular-font-size)] text-center tracking-[var(--body-extra-small-text-regular-letter-spacing)] leading-[var(--body-extra-small-text-regular-line-height)] whitespace-nowrap [font-style:var(--body-extra-small-text-regular-font-style)]">
                              {t("orders.payment_fees")}
                            </p>
                            <p className="font-semibold text-primary-color text-sm text-right">
                              {t("order.paymentFeesValue")}
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
                              € {participant?.total_ttc}
                            </div>
                          </div>
                        </div>
                        <Line />
                        {order.payment_status !== "succeeded" && (
                          <>
                            <div
                              className="mt-3 flex items-center justify-center gap-2.5 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-primary-color rounded-md"
                              onClick={() => handleEditPayment(order.order_id)}
                            >
                              <button
                                type="submit"
                                className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-6 whitespace-nowrap"
                              >
                                {t("orders.edit_payment")}{" "}
                                {/* Translated button text */}
                              </button>
                              <ArrowRight1
                                className="!relative !w-5 !h-5"
                                color="white"
                              />
                            </div>
                            {order.payment_status !== "succeeded" && (
                              <button
                                className="all-[unset] box-border gap-2 border border-solid border-[#F23030] flex items-center justify-center px-6 py-3 relative self-stretch w-full flex-[0_0_auto] rounded-md cursor-pointer"
                                onClick={() =>
                                  handleCancelOrder(order.order_id)
                                }
                              >
                                <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#F23030] text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                                  {t("orders.cancel_order")}
                                </button>
                              </button>
                            )}
                            <Line />
                          </>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-3">
                <Line />
              </div>
            </div>
          ))}
        </>
      </div>
      {orderStatus === "loading" && <CustomLoader />}
    </div>
  );
};

export default Orders;
