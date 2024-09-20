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
              {product.name}
            </h3>
            <p className="text-darkdark-6 text-sm">
              Total Stock: {product.total_stock}
            </p>
            <p className="text-darkdark-6 text-sm">
              Min Quantity: {product.minimum_quantity}
            </p>
            <p className="text-darkdark-6 text-sm">
              Max Quantity: {product.maximum_quantity}
            </p>
            <p className="text-darkdark-6 text-sm">
              Market Price: {product.market_price}
            </p>
            <p className="text-darkdark-6 text-sm">
              Good Deal Price: {product.deal_price}
            </p>
            <p className="text-darkdark-6 text-sm">
              Estimated Discount: {product.estimated_discount}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductList;
