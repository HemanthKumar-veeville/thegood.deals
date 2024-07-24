import React from "react";

const ProductList = ({ products }) => {
  return (
    <div className="flex flex-col items-start gap-[15px] p-[15px] bg-white rounded-[5px] w-full">
      <h2 className="font-family:'Inter',Helvetica font-medium text-[#1b4f4a] text-base tracking-[0] leading-6">
        Product List
      </h2>
      {products.length === 0 ? (
        <p className="text-darkdark-6 text-sm">No products added yet.</p>
      ) : (
        products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col items-start gap-[5px] p-[10px] bg-gray-100 rounded-[5px] w-full"
          >
            <h3 className="font-family:'Inter',Helvetica font-medium text-[#1b4f4a] text-base tracking-[0] leading-6">
              {product.productTitle}
            </h3>
            <p className="text-darkdark-6 text-sm">
              {product.productDescription}
            </p>
            <p className="text-darkdark-6 text-sm">
              Min Quantity: {product.minQuantity}
            </p>
            <p className="text-darkdark-6 text-sm">
              Max Quantity: {product.maxQuantity}
            </p>
            <p className="text-darkdark-6 text-sm">
              Good Deal Price: {product.goodDealPrice}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;
