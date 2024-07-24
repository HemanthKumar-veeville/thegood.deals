import React, { useState } from "react";
import { Plus3 } from "../../icons/Plus3";
import { WebsiteMoney } from "../../icons/WebsiteMoney";
import ProductQuantity from "./ProductQuantity";
import { StyleTypePrimary } from "../../components/StyleTypePrimaryUpdated";
import { Line_60_1, Line59, Polygon_1_1 } from "../../images";

const ProductInfo = ({ addProduct, addMode, setAddMode }) => {
  const [minQuantity, setMinQuantity] = useState(2);
  const [maxQuantity, setMaxQuantity] = useState(13);
  const [goodDealPrice, setGoodDealPrice] = useState("");
  const [productTitle, setProductTitle] = useState("");

  const handleAddClick = () => {
    const newProduct = {
      productTitle,
      minQuantity,
      maxQuantity,
      goodDealPrice,
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
        className="!self-stretch !w-full"
        groupClassName="!w-[260px]"
        line={Line_60_1}
        lineClassName="!w-36"
        overlapGroupClassName={`bg-[url(${Line59})]`}
        tooltipPolygon={Polygon_1_1}
        tooltipPositionTopColorClassName="!absolute !left-[122px] !bg-[#1b4f4a] !top-0"
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
