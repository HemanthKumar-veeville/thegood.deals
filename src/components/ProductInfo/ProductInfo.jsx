import React, { useState } from "react";
import { Plus3 } from "../../icons/Plus3";
import { WebsiteMoney } from "../../icons/WebsiteMoney";
import ProductQuantity from "./ProductQuantity";
import { StyleTypePrimary } from "../../components/StyleTypePrimaryUpdated";
import { Line_60_1, Line59, Polygon_1_1 } from "../../images";
import { Box4 } from "../../icons/Box4";

const ProductInfo = ({ addProduct, addMode, setAddMode }) => {
  const [minQuantity, setMinQuantity] = useState(2);
  const [maxQuantity, setMaxQuantity] = useState(13);
  const [goodDealPrice, setGoodDealPrice] = useState("");
  const [productTitle, setProductTitle] = useState("");

  const handleAddClick = () => {
    const newProduct = {
      name: productTitle,
      minimum_quantity: minQuantity,
      maximum_quantity: maxQuantity,
      deal_price: goodDealPrice,
      estimated_discount: 50,
      market_price: 23,
      total_stock: 10,
    };
    addProduct(newProduct);
    setProductTitle("");
    setMinQuantity(2);
    setMaxQuantity(13);
    setGoodDealPrice("");
    setAddMode(!addMode);
  };

  return (
    <div className="flex flex-col items-start gap-[15px] p-[15px] relative self-stretch w-full flex-[0_0_auto] bg-white rounded-[5px]">
      <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-base tracking-[0] leading-6 whitespace-nowrap">
        Product Title
      </div>
      <input
        type="text"
        placeholder="ex. Case of Rosé - 6 bottles"
        value={productTitle}
        onChange={(e) => setProductTitle(e.target.value)}
        className="flex h-[46px] items-center gap-2.5 pl-5 pr-4 py-3 relative self-stretch w-full bg-white rounded-md border border-solid border-stroke"
      />
      <div className="flex-col items-start top-0 flex w-[260px]  left-0">
        <div className=" w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-base tracking-[0] leading-6 whitespace-nowrap">
          Total stock
        </div>
        <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap">
            by product
          </div>
        </div>
      </div>
      <div className="flex h-[46px] items-center gap-2.5 pl-5 pr-4 py-3 relative bg-whitewhite rounded-md border border-solid border-stroke w-full">
        <Box4 className="!relative !w-4 !h-4" />
        <div className="flex items-center gap-[116px] relative flex-1 grow mt-[-1.00px] mb-[-1.00px]">
          <div className="relative w-fit mt-[-1.00px] font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-darkdark-6 text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] whitespace-nowrap [font-style:var(--body-medium-regular-font-style)]">
            ex. 32
          </div>
        </div>
      </div>
      <ProductQuantity
        label="Minimum quantity"
        value={minQuantity}
        setValue={setMinQuantity}
      />
      <ProductQuantity
        label="Maximum quantity"
        value={maxQuantity}
        setValue={setMaxQuantity}
      />
      <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative w-fit mt-[-1.00px] font-family:'Inter',Helvetica font-medium text-[#1b4f4a] text-base tracking-[0] leading-6 whitespace-nowrap">
          Maximum retail price
        </div>
      </div>
      <div className="flex h-[46px] items-center gap-2.5 pl-5 pr-4 py-3 relative self-stretch w-full bg-white rounded-md border border-solid border-stroke">
        <WebsiteMoney className="!relative !w-4 !h-4" color="#6B7280" />
        <input
          type="number"
          placeholder="ex. €29.00"
          value={goodDealPrice}
          onChange={(e) => setGoodDealPrice(e.target.value)}
          className="flex items-center gap-[116px] relative flex-1 grow mt-[-1.00px] mb-[-1.00px] w-fit font-family:'Inter',Helvetica font-normal text-darkdark-6 text-base tracking-[0] leading-6 whitespace-nowrap border-none outline-none"
        />
      </div>
      <div className="flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]">
        <div className="relative w-fit mt-[-1.00px] font-family:'Inter',Helvetica font-medium text-[#1b4f4a] text-base tracking-[0] leading-6 whitespace-nowrap">
          Good deal price
        </div>
      </div>
      <div className="flex h-[46px] items-center gap-2.5 pl-5 pr-4 py-3 relative self-stretch w-full bg-white rounded-md border border-solid border-stroke">
        <WebsiteMoney className="!relative !w-4 !h-4" color="#6B7280" />
        <input
          type="number"
          placeholder="ex. €29.00"
          value={goodDealPrice}
          onChange={(e) => setGoodDealPrice(e.target.value)}
          className="flex items-center gap-[116px] relative flex-1 grow mt-[-1.00px] mb-[-1.00px] w-fit font-family:'Inter',Helvetica font-normal text-darkdark-6 text-base tracking-[0] leading-6 whitespace-nowrap border-none outline-none"
        />
      </div>
      <div className="flex flex-col w-[260px] items-start relative flex-[0_0_auto]">
        <div className="relative w-fit mt-[-1.00px] font-family:'Inter',Helvetica font-medium text-[#1b4f4a] text-base tracking-[0] leading-6 whitespace-nowrap">
          Estimated discount
        </div>
        <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
          <p className="relative w-fit mt-[-1.00px] font-family:'Inter',Helvetica font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap">
            compared to the public price
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
        progressPercentage={75} // Example percentage
      />
      <div
        className="gap-2 border border-solid border-[#1b4f4a] flex items-center justify-center px-6 py-3 relative self-stretch w-full flex-[0_0_auto] rounded-md cursor-pointer"
        onClick={handleAddClick}
      >
        <Plus3 className="!relative !w-5 !h-5" />
        <button className="all-[unset] box-border relative w-fit mt-[-1.00px] font-family:'Inter',Helvetica font-medium text-[#1b4f4a] text-base text-center tracking-[0] leading-6 whitespace-nowrap">
          Add
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
