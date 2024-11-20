import React, { useState } from "react";
import { ShoppingCart111 } from "../../icons/ShoppingCart111";
import { Minus1 } from "../../icons/Minus1";
import { Plus1 } from "../../icons/Plus1";
import { Send1 } from "../../icons/Send1";
import { useDispatch } from "react-redux";
import { createOrder } from "../../redux/app/orders/orderSlice";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"; // Import the translation hook
import { ShowCustomErrorModal } from "../ErrorAlert/ErrorAlert";
import { Line } from "../Line/Line";

export const Cart = ({ products, dealId, fetchDealDetailsByDealId }) => {
  const { t } = useTranslation(); // Initialize the translation hook
  const [cartItems, setCartItems] = useState(products);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  console.log({ products });
  const handleQuantityChange = (index, action) => {
    const updatedItems = cartItems?.map((item, idx) => {
      if (idx === index) {
        if (action === "increment") {
          return { ...item, quantity: item.quantity + 1 };
        } else if (action === "decrement" && item.quantity >= 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
      }
      return item;
    });
    setCartItems(updatedItems);
  };

  const totalSavings = cartItems?.reduce((acc, item) => {
    return acc + (item.max_retail_price - item.price) * item.quantity;
  }, 0);

  const handlePayment = async () => {
    try {
      // Dispatch the createOrder thunk
      const response = await dispatch(
        createOrder({ dealId, products: cartItems })
      ).unwrap();
      const orderId = response?.order_id;
      navigate("/payment?orderId=" + orderId + "&dealId=" + dealId);
    } catch (error) {
      // Handle error with SweetAlert
      setIsError(true);
      setErrorMessage(error?.detail || t("cart.errorMessage"));
    }
  };

  return (
    <div className="flex flex-col items-start gap-[15px] p-[15px] relative bg-whitewhite rounded-[5px]">
      <div className="flex items-center gap-2.5 self-stretch w-full relative flex-[0_0_auto]">
        <ShoppingCart111 className="!relative !w-5 !h-5" />
        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-primary-color text-lg tracking-[0] leading-[26px] whitespace-nowrap">
          {t("cart.myBasket")}
        </div>
      </div>
      <Line />
      {isError && (
        <ShowCustomErrorModal
          message={errorMessage}
          buttonText={t("waiting_deal.got_it")}
          onClose={() => setIsError(false)} // Reset modal state on close
        />
      )}
      {cartItems?.map((product, index) => (
        <div
          key={index}
          className="items-start flex flex-col gap-[5px] relative self-stretch w-full flex-[0_0_auto]"
        >
          <div className="flex items-center gap-2.5 self-stretch w-full relative flex-[0_0_auto]">
            <p className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap">
              {product.name}
            </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
            <p className="relative w-fit mt-[-1.00px] font-body-small-medium font-[number:var(--body-small-medium-font-weight)] text-orange text-[length:var(--body-small-medium-font-size)] tracking-[var(--body-small-medium-letter-spacing)] leading-[var(--body-small-medium-line-height)] whitespace-nowrap [font-style:var(--body-small-medium-font-style)]">
              {t("artisanConfirmThe.min_quantity")}:{" "}
              {product?.min_quantity_per_order || "-"}
            </p>
            <p className="relative w-fit font-body-small-medium font-[number:var(--body-small-medium-font-weight)] text-secondary-color text-[length:var(--body-small-medium-font-size)] tracking-[var(--body-small-medium-letter-spacing)] leading-[var(--body-small-medium-line-height)] whitespace-nowrap [font-style:var(--body-small-medium-font-style)]">
              {t("artisanConfirmThe.max_quantity")}:{" "}
              {product?.max_quantity_per_order || "-"}
            </p>
            <div className="relative w-fit font-body-small-medium font-[number:var(--body-small-medium-font-weight)] text-primary-color text-[length:var(--body-small-medium-font-size)] tracking-[var(--body-small-medium-letter-spacing)] leading-[var(--body-small-medium-line-height)] whitespace-nowrap [font-style:var(--body-small-medium-font-style)]">
              {t("artisanConfirmThe.total_stock")}:{" "}
              {product?.total_stock || "-"}
            </div>
          </div>
          <div className="flex items-center gap-2.5 self-stretch w-full relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-orangeorange text-sm tracking-[0] leading-[22px] whitespace-nowrap">
              {t("cart.available", { count: product.availability })}
            </div>
          </div>
          <div className="flex items-end justify-between self-stretch w-full relative flex-[0_0_auto]">
            <div className="flex w-full items-end justify-between relative self-stretch">
              <div className="inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto]">
                <div className="relative w-[81.17px] h-[25px] mr-[-2.00px]">
                  <div className="relative w-[79px] h-[25px] bg-whitewhite rounded-[3.47px] border-[0.69px] border-solid border-stroke">
                    <span
                      className="transition-transform transform hover:scale-95 active:scale-90"
                      onClick={() => handleQuantityChange(index, "decrement")}
                    >
                      <Minus1 className="!absolute !w-2 !h-2 !top-2 !left-[7px]" />
                    </span>
                    <div className="absolute top-[3px] left-9 [font-family:'Inter-Medium',Helvetica] font-medium text-primary-color text-[11.1px] tracking-[0] leading-[16.7px] whitespace-nowrap">
                      {product.quantity}
                    </div>
                    <span
                      className="transition-transform transform hover:scale-95 active:scale-90"
                      onClick={() => handleQuantityChange(index, "increment")}
                    >
                      <Plus1 className="!absolute !w-2 !h-2 !top-2 !left-[62px]" />
                    </span>
                  </div>
                </div>
              </div>
              <div className="inline-flex items-center justify-center gap-2 relative flex-[0_0_auto]">
                <div className="mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-primary-color leading-6 line-through relative w-fit text-sm text-right tracking-[0] whitespace-nowrap">
                  {product.max_retail_price} €
                </div>
                <div className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-secondary-color leading-[22px] relative w-fit text-sm text-right tracking-[0] whitespace-nowrap">
                  {product.price} €
                </div>
                <div className="inline-flex items-center justify-center gap-px px-1.5 py-0 relative flex-[0_0_auto] bg-greengreen-dark rounded">
                  <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-whitewhite text-[10px] tracking-[0] leading-5 whitespace-nowrap">
                    {product?.discount}%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Line />
        </div>
      ))}

      <div className="items-end flex flex-col gap-[5px] relative self-stretch w-full flex-[0_0_auto]">
        <div className="flex items-end justify-between self-stretch w-full relative flex-[0_0_auto]">
          <div className="relative w-fit font-body-extra-small-text-regular font-[number:var(--body-extra-small-text-regular-font-weight)] text-primary-text-color text-xs text-center tracking-[0] leading-5 whitespace-nowrap">
            {t("cart.totalTTC")}
          </div>
          <div className="inline-flex items-start justify-end gap-2.5 relative flex-[0_0_auto]">
            <div className="mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-primary-text-color leading-6 line-through relative w-fit text-sm text-right tracking-[0] whitespace-nowrap">
              {cartItems
                ?.reduce(
                  (acc, item) => acc + item.max_retail_price * item.quantity,
                  0
                )
                ?.toFixed(2)}{" "}
              €
            </div>
            <div className="mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-primary-color leading-[22px] relative w-fit text-sm text-right tracking-[0] whitespace-nowrap">
              {cartItems
                ?.reduce((acc, item) => acc + item.price * item.quantity, 0)
                ?.toFixed(2)}{" "}
              €
            </div>
          </div>
        </div>
        <div className="flex items-end justify-between self-stretch w-full relative flex-[0_0_auto]">
          <div className="relative w-fit font-body-extra-small-text-regular text-secondary-color text-xs text-center tracking-[0] leading-5 whitespace-nowrap">
            {t("cart.save")}
          </div>
          <div className="mt-[-1.00px] font-body-small-medium text-secondary-color leading-6 relative w-fit text-xs text-right tracking-[0] whitespace-nowrap">
            {totalSavings?.toFixed(2)} €
          </div>
        </div>
      </div>
      {cartItems?.length !==
        cartItems?.filter((product) => product?.quantity === 0)?.length && (
        <div
          className="flex items-center justify-center gap-2.5 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-primary-color rounded-md transition-transform transform hover:scale-95 active:scale-90"
          onClick={handlePayment}
        >
          <Send1 className="!relative !w-5 !h-5" />
          <button className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-whitewhite text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            {t("cart.payment")}
          </button>
        </div>
      )}
    </div>
  );
};
