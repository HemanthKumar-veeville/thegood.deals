import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrdersByDeal } from "../../redux/app/orders/orderSlice"; // Adjust the import path as needed
import { SizeXlCorner } from "../../components/SizeXlCorner";
import { ArrowLeft1 } from "../../icons/ArrowLeft1";
import { Box44 } from "../../icons/Box44";
import { ChevronDown1 } from "../../icons/ChevronDown1";
import { ChevronUp } from "../../icons/ChevronUp";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Line63 } from "../../images";
import CustomLoader from "../../components/CustomLoader/CustomLoader";
import { SuccessAlert } from "../../components/SuccessAlert/SuccessAlert.jsx";
import { Warning1 } from "../../icons/Warning1/Warning1.jsx";

const Orders = ({ dealId, dealType }) => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const queryParams = new URLSearchParams(location.search);
  const deal_id = queryParams.get("deal_id");
  const is_creator = queryParams.get("is_creator");

  const [isOrderDetailsVisible, setIsOrderDetailsVisible] = useState({});

  const { orders, orderStatus, orderError } = useSelector(
    (state) => state.orders
  );
  console.log({ orders });
  const ordersState = orders?.Orders?.length > 0 ? orders?.Orders[0] : null;

  useEffect(() => {
    dispatch(
      fetchOrdersByDeal({
        dealId: deal_id,
        dealType: is_creator === "true" ? "created" : "invited",
      })
    );
  }, []);

  const handleToggleOrderDetails = (name) => {
    setIsOrderDetailsVisible((prevState) => ({
      ...prevState,
      [name]: !prevState[name],
    }));
  };

  const handleBackToDeal = () => {
    console.log(is_creator);
    is_creator === "true"
      ? navigate(
          "/admin-active-deal?deal_id=" + deal_id + "&is_creator=" + is_creator
        )
      : navigate(
          "/guest-deal-view?deal_id=" + deal_id + "&is_creator=" + is_creator
        );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (orderStatus === "loading") {
    return <CustomLoader />;
  }
  console.log("ordersState", orders);
  return (
    <div className="flex flex-col w-full h-screen items-start relative bg-primary-background mx-auto">
      {orderStatus === "succeeded" && (
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
          <img
            className="self-stretch w-full h-px object-cover"
            alt={t("orders.line_alt")}
            src={Line63}
          />
          <div className="relative self-stretch font-semibold text-primary-color text-2xl">
            {t("orders.my_orders")}
          </div>

          {ordersState?.orders?.map((order) => (
            <div key={ordersState.participant_name}>
              <div
                className="inline-flex items-center gap-4 cursor-pointer mt-3"
                onClick={() =>
                  handleToggleOrderDetails(ordersState.participant_name)
                }
              >
                <SizeXlCorner
                  className="h-14 w-14"
                  divClassName="tracking-0 text-lg font-semibold left-2 leading-10 top-1"
                  text={
                    ordersState.participant_name
                      .split(" ")[0]
                      .charAt(0)
                      .toUpperCase() +
                    "." +
                    ordersState.participant_name
                      .split(" ")[1]
                      .charAt(0)
                      .toUpperCase()
                  }
                />
                <div className="inline-flex flex-col items-start gap-1.5">
                  <div className="mt-[-1px] font-medium text-primary-color text-base">
                    {ordersState.participant_name}
                  </div>
                  <div className="inline-flex items-center gap-2.5">
                    <Box44 className="w-5 h-5" />
                    <p className="mt-[-1px] font-normal text-primary-text-color text-sm leading-5.5">
                      {ordersState.order_count} {t("orders.order_on_deal")}
                    </p>
                  </div>
                </div>
                {isOrderDetailsVisible[ordersState.participant_name] ? (
                  <ChevronUp className="w-6 h-6" color="#1B4F4A" />
                ) : (
                  <ChevronDown1 className="w-6 h-6" color="#1B4F4A" />
                )}
              </div>
              <div
                className={`transition-all duration-500 overflow-hidden ${
                  isOrderDetailsVisible[ordersState.participant_name]
                    ? "max-h-screen"
                    : "max-h-0"
                }`}
              >
                <div className="flex flex-col items-start gap-4 pt-0 pb-4 px-4 bg-whitewhite mt-3 w-full">
                  <img
                    className="self-stretch w-full h-px object-cover"
                    alt={t("orders.line_alt")}
                    src={Line63}
                  />
                  {order.products.map((product, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-start gap-1.5 self-stretch"
                    >
                      <div className="flex items-center gap-2.5 self-stretch">
                        <p className="mt-[-1px] font-normal text-primary-color text-base">
                          {product.product_title}
                        </p>
                      </div>
                      <div className="flex items-end justify-between self-stretch">
                        <div className="flex items-center gap-2.5 grow">
                          <div className="mt-[-1px] font-semibold text-secondary-color text-base">
                            {product.product_quantity} products
                          </div>
                        </div>
                        <div className="inline-flex flex-col items-end">
                          <p className="mt-[-1px] font-semibold text-secondary-color text-base text-right">
                            €{product.product_price} x{" "}
                            {product.product_quantity} = €
                            {product.product_price * product.product_quantity}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="flex items-end justify-between self-stretch">
                    <div className="flex items-center gap-2.5 grow">
                      <div className="mt-[-1px] font-semibold text-primary-color text-lg">
                        {t("orders.total")}
                      </div>
                    </div>
                    <div className="inline-flex flex-col items-end">
                      <div className="mt-[-1px] font-semibold text-primary-color text-lg text-right">
                        €
                        {order.products.reduce(
                          (total, product) =>
                            total +
                            product.product_price * product.product_quantity,
                          0
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <img
                className="self-stretch w-full h-px object-cover mt-3"
                alt={t("orders.line_alt")}
                src={Line63}
              />
            </div>
          ))}
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
                text={orders?.message}
              />
            </div>
          )}
        </div>
      )}
      {orderStatus === "loading" && <CustomLoader />}
    </div>
  );
};

export default Orders;
