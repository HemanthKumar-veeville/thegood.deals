import React from "react";
import { useTranslation } from "react-i18next";
import { FiEdit, FiTrash2 } from "react-icons/fi"; // Importing edit and delete icons from react-icons

const ProductList = ({ products, onEdit, onDelete }) => {
  const { t } = useTranslation(); // Use the translation hook
  const editDeal = (product) => {
    onDelete(product?.product_id);
    onEdit(product);
  };

  return (
    <div className="flex flex-col items-start gap-[15px] p-[15px] bg-white rounded-[5px] w-full">
      <h2 className="font-family:'Inter',Helvetica font-medium text-[#1b4f4a] text-base tracking-[0] leading-6">
        {t("ProductList.productListTitle")}
      </h2>
      {products.length === 0 ? (
        <p className="text-darkdark-6 text-sm">
          {t("ProductList.noProductsMessage")}
        </p>
      ) : (
        products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-start gap-[5px] p-[10px] bg-gray-100 rounded-[5px] w-full"
          >
            <div className="flex justify-between w-full">
              <h3 className="font-family:'Inter',Helvetica font-medium text-[#1b4f4a] text-base tracking-[0] leading-6">
                {product.name}
              </h3>
              <div className="flex gap-2">
                <FiEdit
                  className="text-[#4a90e2] cursor-pointer"
                  onClick={() => editDeal(product)}
                />
                <FiTrash2
                  className="text-[#e74c3c] cursor-pointer"
                  onClick={() => onDelete(product?.product_id)}
                />
              </div>
            </div>
            <p className="text-darkdark-6 text-sm">
              {t("ProductList.totalStock")}: {product.total_stock}
            </p>
            <p className="text-darkdark-6 text-sm">
              {t("ProductList.minQuantity")}: {product.minimum_quantity}
            </p>
            <p className="text-darkdark-6 text-sm">
              {t("ProductList.maxQuantity")}: {product.maximum_quantity}
            </p>
            <p className="text-darkdark-6 text-sm">
              {t("ProductList.marketPrice")}: {product.market_price}
            </p>
            <p className="text-darkdark-6 text-sm">
              {t("ProductList.goodDealPrice")}: {product.deal_price}
            </p>
            <p className="text-darkdark-6 text-sm">
              {t("ProductList.estimatedDiscount")}: {product.estimated_discount}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;
