import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Plus3 } from "../../icons/Plus3";
import { WebsiteMoney } from "../../icons/WebsiteMoney";
import ProductQuantity from "./ProductQuantity";
import { StyleTypePrimary } from "../../components/StyleTypePrimaryUpdated";
import { Line_60_1, Polygon_1_1 } from "../../images";
import { Box4 } from "../../icons/Box4";
import { ShowCustomErrorModal } from "../ErrorAlert/ErrorAlert";
import CheckMark from "../../icons/CheckMark/CheckMark";

const ProductInfo = ({
  addProduct,
  addMode,
  setAddMode,
  product,
  setProduct,
  onDelete,
}) => {
  const { t } = useTranslation();
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [minQuantity, setMinQuantity] = useState(
    product?.minimum_quantity || 2
  );
  const [maxQuantity, setMaxQuantity] = useState(
    product?.maximum_quantity || 10
  );
  const [goodDealPrice, setGoodDealPrice] = useState(product?.deal_price || "");
  const [maximumRetailPrice, setMaximumRetailPrice] = useState(
    product?.market_price || ""
  );
  const [productTitle, setProductTitle] = useState(product?.name || "");
  const [totalStock, setTotalStock] = useState(product?.total_stock || "");
  const [discountPercentage, setDiscountPercentage] = useState(
    product?.estimated_discount || 0
  );
  const [errors, setErrors] = useState({}); // Validation error state

  useEffect(() => {
    if (
      maximumRetailPrice &&
      goodDealPrice &&
      maximumRetailPrice > 0 &&
      goodDealPrice > 0
    ) {
      const discount = (1 - goodDealPrice / maximumRetailPrice) * 100;
      setDiscountPercentage(Math.max(discount.toFixed(2), 0));
    } else {
      setDiscountPercentage(0);
    }
  }, [maximumRetailPrice, goodDealPrice]);

  const productValidations = [
    {
      condition: !productTitle.trim(),
      field: "productTitle",
      message: t("productInfo.errors.productTitleRequired"),
    },
    {
      condition: productTitle.length > 75,
      field: "productTitle",
      message: t("productInfo.errors.productTitleTooLong"),
    },
    {
      condition: !totalStock || totalStock < 0,
      field: "totalStock",
      message: t("productInfo.errors.totalStockPositive"),
    },
    {
      condition: !maximumRetailPrice || maximumRetailPrice <= 0,
      field: "maximumRetailPrice",
      message: t("productInfo.errors.maximumRetailPricePositive"),
    },
    {
      condition: !goodDealPrice || goodDealPrice <= 0,
      field: "goodDealPrice",
      message: t("productInfo.errors.goodDealPricePositive"),
    },
    {
      condition: Number(goodDealPrice) >= Number(maximumRetailPrice),
      field: "goodDealPrice",
      message: t("productInfo.errors.goodDealPriceLower"),
    },
    {
      condition: !minQuantity || minQuantity <= 0,
      field: "minQuantity",
      message: t("productInfo.errors.minQuantityPositive"),
    },
    {
      condition: !maxQuantity || maxQuantity <= 0 || maxQuantity < minQuantity,
      field: "maxQuantity",
      message: t("productInfo.errors.maxQuantityValid"),
    },
  ];

  const validateProduct = (validations) => {
    const newErrors = {};

    // Reset initial states
    setIsError(false);
    setErrorMessage("");

    // Validate and populate errors
    validations.forEach(({ condition, field, message }) => {
      if (condition) {
        setIsError(true);
        if (!newErrors[field]) {
          newErrors[field] = message;
        }
      }
    });

    // Set the first error message
    if (Object.keys(newErrors).length > 0) {
      setErrorMessage(Object.values(newErrors)[0]);
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddClick = () => {
    // Check if total stock is zero and product exists
    if (product && totalStock == 0) {
      onDelete(product.product_id);
      setAddMode(!addMode);
      setProduct(null);
      return;
    }

    if (!validateProduct(productValidations)) return;

    // Reset initial states
    setIsError(false);
    setErrorMessage("");

    const newProduct = {
      product_id: product?.product_id || productTitle + Math.random(1, 1000),
      name: productTitle,
      minimum_quantity: minQuantity,
      maximum_quantity: maxQuantity,
      deal_price: goodDealPrice,
      estimated_discount: discountPercentage,
      market_price: maximumRetailPrice,
      total_stock: totalStock,
    };
    addProduct(newProduct);
    setProductTitle("");
    setMinQuantity(2);
    setMaxQuantity(13);
    setGoodDealPrice("");
    setMaximumRetailPrice("");
    setTotalStock("");
    setDiscountPercentage(0);
    setAddMode(!addMode);
    setProduct(null);
  };

  return (
    <div className="flex flex-col items-start gap-[15px] p-[15px] relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[5px]">
      {isError && (
        <ShowCustomErrorModal
          message={errorMessage}
          buttonText={t("waiting_deal.got_it")}
          onClose={() => setIsError(false)} // Reset modal state on close
        />
      )}
      <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-base tracking-[0] leading-6 whitespace-nowrap">
        {t("productInfo.productTitleLabel")}
      </div>
      <div className="relative w-full">
        <input
          type="text"
          placeholder={t("productInfo.productTitlePlaceholder")}
          value={productTitle}
          onChange={(e) => setProductTitle(e.target.value)}
          maxLength={75}
          className="flex h-[46px] items-center gap-2.5 pl-5 pr-4 py-3 relative self-stretch w-full bg-white rounded-md border border-solid border-stroke"
        />
        <div className="absolute right-2 bottom-[-20px] text-xs text-gray-500  [font-family:'Inter',Helvetica]">
          {productTitle.length}/75
        </div>
      </div>
      <div className="flex-col items-start flex w-[260px]">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-base tracking-[0] leading-6 whitespace-nowrap">
          {t("productInfo.totalStockLabel")}
        </div>
        <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap">
            {t("productInfo.byProductText")}
          </div>
        </div>
      </div>
      <div className="flex h-[46px] items-center gap-2.5 pl-5 pr-4 py-3 relative self-stretch w-full bg-white rounded-md border border-solid border-stroke">
        <Box4 className="!relative !w-4 !h-4" />
        <input
          type="number"
          placeholder={t("productInfo.totalStockPlaceholder")}
          value={totalStock}
          onChange={(e) => setTotalStock(e.target.value)}
          className="flex items-center gap-[116px] relative flex-1 grow mt-[-1.00px] mb-[-1.00px] w-fit font-family:'Inter',Helvetica font-normal text-darkdark-6 text-base tracking-[0] leading-6 whitespace-nowrap border-none outline-none"
        />
      </div>
      <ProductQuantity
        label={t("productInfo.minQuantityLabel")}
        value={minQuantity}
        setValue={setMinQuantity}
      />
      <ProductQuantity
        label={t("productInfo.maxQuantityLabel")}
        value={maxQuantity}
        setValue={setMaxQuantity}
      />
      <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative w-fit mt-[-1.00px] font-family:'Inter',Helvetica font-medium text-[#1b4f4a] text-base tracking-[0] leading-6 whitespace-nowrap">
          {t("productInfo.maximumRetailPriceLabel")}
        </div>
      </div>
      <div className="flex h-[46px] items-center gap-2.5 pl-5 pr-4 py-3 relative self-stretch w-full bg-white rounded-md border border-solid border-stroke">
        <WebsiteMoney className="!relative !w-4 !h-4" color="#6B7280" />
        <input
          type="number"
          placeholder={t("productInfo.maximumRetailPricePlaceholder")}
          value={maximumRetailPrice}
          onChange={(e) => setMaximumRetailPrice(e.target.value)}
          className="flex items-center gap-[116px] relative flex-1 grow mt-[-1.00px] mb-[-1.00px] w-fit font-family:'Inter',Helvetica font-normal text-darkdark-6 text-base tracking-[0] leading-6 whitespace-nowrap border-none outline-none"
        />
      </div>
      <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative w-fit mt-[-1.00px] font-family:'Inter',Helvetica font-medium text-[#1b4f4a] text-base tracking-[0] leading-6 whitespace-nowrap">
          {t("productInfo.goodDealPriceLabel")}
        </div>
      </div>
      <div
        className={`flex h-[46px] items-center gap-2.5 pl-5 pr-4 py-3 relative self-stretch w-full bg-white rounded-md border border-solid border-stroke`}
      >
        <WebsiteMoney className="!relative !w-4 !h-4" color="#6B7280" />
        <input
          type="number"
          placeholder={t("productInfo.goodDealPricePlaceholder")}
          value={goodDealPrice}
          onChange={(e) => setGoodDealPrice(e.target.value)}
          className="flex items-center gap-[116px] relative flex-1 grow mt-[-1.00px] mb-[-1.00px] w-fit font-family:'Inter',Helvetica font-normal text-darkdark-6 text-base tracking-[0] leading-6 whitespace-nowrap border-none outline-none"
          // disabled={product?.product_id}
        />
      </div>
      <div className="flex flex-col w-[260px] items-start relative flex-[0_0_auto]">
        <div className="relative w-fit mt-[-1.00px] font-family:'Inter',Helvetica font-medium text-[#1b4f4a] text-base tracking-[0] leading-6 whitespace-nowrap">
          {t("productInfo.estimatedDiscountLabel")}
        </div>
        <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <p className="relative w-fit mt-[-1.00px] font-family:'Inter',Helvetica font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap">
            {discountPercentage}% {t("productInfo.estimatedDiscountText")}
          </p>
        </div>
      </div>
      <StyleTypePrimary
        className="your-classname"
        groupClassName="your-group-classname"
        overlapGroupClassName="your-overlap-group-classname"
        lineClassName="your-line-classname"
        line={Line_60_1}
        tooltipPolygon={Polygon_1_1}
        tooltipPositionTopColorClassName="your-tooltip-classname"
        progressPercentage={discountPercentage}
      />
      <div
        className="gap-2.5 bg-[#1b4f4a] flex items-center justify-center px-6 py-3 relative self-stretch w-full flex-[0_0_auto] rounded-md cursor-pointer"
        onClick={handleAddClick}
      >
        <CheckMark className="!relative !w-5 !h-5" />
        <button
          type="button"
          className="all-[unset] box-border relative w-fit mt-[-1.00px] font-family:'Inter',Helvetica font-medium text-white text-base text-center tracking-[0] leading-6 whitespace-nowrap"
        >
          {t("productInfo.addButtonText")}
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
