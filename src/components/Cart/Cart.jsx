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

export const Cart = ({ products, dealId, fetchDealDetailsByDealId }) => {
  const { t } = useTranslation(); // Initialize the translation hook
  const [cartItems, setCartItems] = useState(products);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const handleQuantityChange = (
    index,
    action,
    minQuantity,
    maxQuantity,
    availableQuantity
  ) => {
    const updatedItems = cartItems?.map((item, idx) => {
      if (idx === index) {
        if (action === "increment") {
          if (item.quantity < maxQuantity && item.quantity < availableQuantity)
            return { ...item, quantity: item.quantity + 1 };
          else return { ...item, quantity: item.quantity };
        } else if (action === "decrement" && item.quantity >= 1) {
          return { ...item, quantity: item.quantity - 1 };
        }
      }
      return item;
    });
    setCartItems(updatedItems);
  };

  const handleKeyDown = (
    event,
    index,
    action,
    minQuantity,
    maxQuantity,
    availableQuantity
  ) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleQuantityChange(
        index,
        action,
        minQuantity,
        maxQuantity,
        availableQuantity
      );
    }
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
      if (!response?.exist) {
        navigate("/payment?orderId=" + orderId + "&dealId=" + dealId);
      } else {
        navigate(`/thanks-payment-setup?orderId=${orderId}`);
      }
    } catch (error) {
      // Handle error with SweetAlert
      setIsError(true);
      setErrorMessage(error?.detail || t("cart.errorMessage"));
    }
  };

  return (
    <div className="flex flex-col items-start gap-[15px] p-[15px] relative bg-whitewhite rounded-[0.25rem] w-full">
      <div className="flex items-center gap-2.5 self-stretch w-full relative flex-[0_0_auto]">
        <ShoppingCart111 className="!relative !w-5 !h-5" />
        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Bold',Helvetica] font-bold text-primary-color text-lg tracking-[0] leading-[26px] whitespace-nowrap">
          {t("cart.myBasket")}
        </div>
      </div>
      <div className="w-full h-px bg-stroke" />
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
            <p className="relative w-full [font-family:'Inter-Regular',Helvetica] font-normal text-primary-color text-base tracking-[0] leading-6">
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
          <div className="inline-flex flex-col items-start gap-2.5 relative flex-[0_0_auto]">
            <div className="relative flex items-center bg-whitewhite rounded-[0.25rem] border border-solid border-stroke h-11 w-[140px] sm:w-[160px] shadow-sm overflow-hidden">
              <button
                type="button"
                aria-label={t("cart.decreaseQuantity") || "Decrease quantity"}
                tabIndex={0}
                disabled={
                  product.quantity <= 1 ||
                  product.quantity <= product.min_quantity_per_order
                }
                className={`
                      flex items-center justify-center w-11 h-11 min-w-[44px] min-h-[44px]
                      rounded-l-[0.25rem] border-r border-solid border-stroke
                      transition-all duration-150 ease-in-out
                      outline-none
                      focus-visible:ring-2 focus-visible:ring-primary-color focus-visible:ring-offset-1
                      disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50
                      ${
                        product.quantity <= 1 ||
                        product.quantity <= product.min_quantity_per_order
                          ? ""
                          : "cursor-pointer hover:bg-primary-color/5 active:bg-primary-color/10 active:scale-[0.97]"
                      }
                    `}
                onClick={(e) => {
                  e.currentTarget.blur();
                  handleQuantityChange(
                    index,
                    "decrement",
                    product.min_quantity_per_order,
                    product.max_quantity_per_order,
                    product.availability
                  );
                }}
                onKeyDown={(e) =>
                  handleKeyDown(
                    e,
                    index,
                    "decrement",
                    product.min_quantity_per_order,
                    product.max_quantity_per_order,
                    product.availability
                  )
                }
              >
                <Minus1 className="!relative !w-4 !h-4 text-primary-color" />
              </button>
              <div className="flex-1 flex items-center justify-center min-w-[48px] px-2 py-1.5">
                <span className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-primary-color text-base tracking-[0] leading-normal whitespace-nowrap select-none">
                  {product.quantity}
                </span>
              </div>
              <button
                type="button"
                aria-label={t("cart.increaseQuantity") || "Increase quantity"}
                tabIndex={0}
                disabled={
                  product.quantity >= product.max_quantity_per_order ||
                  product.quantity >= product.availability
                }
                className={`
                      flex items-center justify-center w-11 h-11 min-w-[44px] min-h-[44px]
                      rounded-r-[0.25rem] border-l border-solid border-stroke
                      transition-all duration-150 ease-in-out
                      outline-none
                      focus-visible:ring-2 focus-visible:ring-primary-color focus-visible:ring-offset-1
                      disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50
                      ${
                        product.quantity >= product.max_quantity_per_order ||
                        product.quantity >= product.availability
                          ? ""
                          : "cursor-pointer hover:bg-primary-color/5 active:bg-primary-color/10 active:scale-[0.97]"
                      }
                    `}
                onClick={(e) => {
                  e.currentTarget.blur();
                  handleQuantityChange(
                    index,
                    "increment",
                    product.min_quantity_per_order,
                    product.max_quantity_per_order,
                    product.availability
                  );
                }}
                onKeyDown={(e) =>
                  handleKeyDown(
                    e,
                    index,
                    "increment",
                    product.min_quantity_per_order,
                    product.max_quantity_per_order,
                    product.availability
                  )
                }
              >
                <Plus1 className="!relative !w-4 !h-4 text-primary-color" />
              </button>
            </div>
          </div>

          <div className="flex items-end justify-between self-stretch w-full relative flex-[0_0_auto] overflow-x-auto">
            <div className="flex w-full items-end justify-between relative self-stretch flex-wrap">
              <div className="flex items-center gap-2.5 self-stretch w-auto max-w-[50%] flex-1 min-w-0">
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-orangeorange text-sm tracking-[0] leading-[22px] whitespace-nowrap overflow-hidden text-ellipsis">
                  {t("cart.available", { count: product.availability })}
                </div>
              </div>
              <div className="flex items-center justify-end gap-2 flex-1">
                <div className="mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-primary-color leading-6 line-through relative text-sm text-right tracking-[0] whitespace-nowrap">
                  {product.max_retail_price} €
                </div>
                <div className="[font-family:'Inter-SemiBold',Helvetica] font-semibold text-secondary-color leading-[22px] relative text-sm text-right tracking-[0] whitespace-nowrap">
                  {product.price} €
                </div>
                <div className="flex items-center justify-center gap-px px-1.5 py-0 bg-greengreen-dark rounded min-w-[28px] max-w-[44px] h-5">
                  <div className="relative mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-whitewhite text-[10px] tracking-[0] leading-5 whitespace-nowrap">
                    {Math.round(product?.discount)}%
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-px bg-stroke" />
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
        cartItems?.filter((product) => product?.quantity === 0)?.length &&
        cartItems?.filter(
          (product) =>
            product?.quantity == 0 ||
            product?.quantity >= product.min_quantity_per_order
        )?.length === cartItems?.length && (
          <div
            className="flex items-center justify-center gap-2.5 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-primary-color rounded-[0.25rem] transition-transform transform hover:scale-95 active:scale-90"
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
