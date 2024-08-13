import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import AppBar from "../../components/AppBar/AppBar";
import AddPictures from "../../components/AddPictures/AddPictures";
import TitleInput from "../../components/TitleInput/TitleInput";
import { Textarea } from "../../components/Textarea";
import DatePicker from "../../components/DatePicker/DatePicker";
import BankingInfo from "../../components/BankingInfo/BankingInfo";
import CollectionLocation from "../../components/CollectionLocation/CollectionLocation";
import DealExpiration from "../../components/DealExpiration/DealExpiration";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import { Button } from "../../components/Button/Button";
import { CheckBox } from "../../components/CheckBox";
import { ArrowRight1 } from "../../icons/ArrowRight1";
import { Line63, Line_146_2 } from "../../images";
import { ChevronRight1 } from "../../icons/ChevronRight1";
import { ChevronLeft1 } from "../../icons/ChevronLeft1";
import { Plus3 } from "../../icons/Plus3";
import { Minus1 } from "../../icons/Minus1";
import { Plus1 } from "../../icons/Plus1";
import ProductList from "../../components/ProductInfo/ProductList";
import { useSelector, useDispatch } from "react-redux";
// import { addDeal } from "../../redux/app/deals/dealSlice";

const CreateDeal = () => {
  const [formData, setFormData] = useState({
    description: "",
    collectionDate: "",
    contentDescription: "",
    manufacturerInfo: "",
    iban: "",
    bic: "",
    dealExpiration: "",
    acceptConditions: false,
    minProducts: 2,
    collectionLocation: "",
    pictures: [],
  });

  const [products, setProducts] = useState([]);
  const [addMode, setAddMode] = useState(true);
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const addProduct = (product) => {
    setProducts([...products, product]);
  };

  const handleChange = (type, e) => {
    if (type === "acceptConditions") {
      setFormData((prevState) => ({
        ...prevState,
        acceptConditions: !formData.acceptConditions,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [type]: e.target.value,
      }));
    }
  };

  const handleAddPictures = (pictures) => {
    setFormData((prevState) => ({
      ...prevState,
      pictures,
    }));
  };

  const handleLocationChange = (collectionLocation) => {
    setFormData((prevState) => ({
      ...prevState,
      collectionLocation,
    }));
  };

  const handleMinProductsChange = (delta) => {
    setFormData((prevState) => ({
      ...prevState,
      minProducts: Math.max(1, prevState.minProducts + delta),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ ...formData, title, products });
    // dispatch(addDeal({ ...formData, title, products }));
    navigate("/inform-deal");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-screen items-start relative bg-primary-background mx-auto"
    >
      <AppBar />
      <div className="flex flex-col w-screen items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]">
        <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-[#1b4f4a] text-2xl text-center tracking-[0] leading-[30px] whitespace-nowrap">
          Create a good deal
        </div>
        <AddPictures onChange={handleAddPictures} />
        <TitleInput dealTitle={title} setDealTitle={setTitle} />
        <div className="w-full">
          <Textarea
            name="description"
            type="description"
            value={formData.description}
            onChange={handleChange}
            className="!self-stretch !w-full"
            divClassName="!text-[#1b4f4a] !text-lg !leading-[26px]"
            divClassNameOverride="!tracking-[0] !text-base !flex-1 ![white-space:unset] ![font-style:unset] !font-normal ![font-family:'Inter',Helvetica] !leading-6 !w-[unset]"
            groupClassName="!w-[42px]"
            helperText="off"
            label="Description of the deal"
            label1="on"
            placeholder="ex. I discovered this incredible winery..."
            secondLabel="on"
            secondLabelText="0/250"
            state="default"
          />
        </div>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <CollectionLocation
          type="collectionLocation"
          onChange={handleLocationChange}
        />
        <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-base tracking-[0] leading-6 whitespace-nowrap">
          Approximate collection date
        </div>
        <div className="w-full">
          <DatePicker
            name="collectionDate"
            value={formData.collectionDate}
            onChange={() => handleChange("collectionDate")}
          />
        </div>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <div className="w-full">
          <Textarea
            name="contentDescription"
            type="contentDescription"
            value={formData.contentDescription}
            onChange={handleChange}
            className="!self-stretch !w-full"
            divClassName="!text-[#1b4f4a] !text-lg !leading-[26px]"
            divClassNameOverride="!tracking-[0] !text-base !flex-1 ![white-space:unset] ![font-style:unset] !font-normal ![font-family:'Inter',Helvetica] !leading-6 !w-[unset]"
            groupClassName="!w-[42px]"
            helperText="off"
            label="Describe the content"
            label1="on"
            placeholder="ex. Each order will include a varied selection of ... bottles"
            secondLabel="on"
            secondLabelText="0/250"
            state="default"
          />
        </div>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <div className="w-full">
          <Textarea
            name="manufacturerInfo"
            type="manufacturerInfo"
            value={formData.manufacturerInfo}
            onChange={handleChange}
            className="!self-stretch !w-full"
            divClassName="!text-[#1b4f4a] !text-lg ![white-space:unset] !leading-[26px] !w-[236px]"
            divClassNameOverride="!tracking-[0] !text-base !flex-1 ![white-space:unset] ![font-style:unset] !font-normal ![font-family:'Inter',Helvetica] !leading-6 !w-[unset]"
            groupClassName="!w-[42px]"
            helperText="off"
            label="Information from the artisian/manufacturer"
            label1="on"
            placeholder="ex. Domaine de Cigalus 11200 Bizanet"
            secondLabel="on"
            secondLabelText="0/250"
            state="default"
          />
        </div>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <p className="relative w-[230px] [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-lg tracking-[0] leading-[26px]">
          Banking information for the artisian
        </p>
        <div className="w-full">
          <BankingInfo
            name="iban"
            type="iban"
            value={formData.iban}
            onChange={handleChange}
            label="IBAN"
            placeholder="ENXXXXXXXXXXXXXXXXXXXX"
          />
        </div>
        <div className="w-full">
          <BankingInfo
            name="bic"
            type="bic"
            value={formData.bic}
            onChange={handleChange}
            label="BIC"
            placeholder="XXXXXXXXXXX"
          />
        </div>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <DealExpiration />
        <div className="w-full">
          <DatePicker
            name="dealExpiration"
            value={formData.dealExpiration}
            onChange={() => handleChange("dealExpiration")}
          />
        </div>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <ProductList products={products} />
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <div className="flex w-[250px] items-start gap-2.5 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-lg tracking-[0] leading-[26px] whitespace-nowrap">
            Add products
          </div>
        </div>
        {addMode === true && (
          <ProductInfo
            addProduct={addProduct}
            setAddMode={setAddMode}
            addMode={addMode}
          />
        )}
        {!addMode && (
          <div
            className="gap-2 bg-white shadow-shadow-1 flex items-center justify-center px-6 py-3 relative self-stretch w-full flex-[0_0_auto] rounded-md cursor-pointer"
            onClick={() => setAddMode(!addMode)}
          >
            <Plus3 className="!relative !w-5 !h-5" />
            <button
              type="button"
              className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-base text-center tracking-[0] leading-6 whitespace-nowrap"
            >
              Add another product
            </button>
          </div>
        )}
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <div className="relative w-[260px] h-[97px]">
          <div className="flex-col items-start top-0 flex w-[260px] absolute left-0">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-lg tracking-[0] leading-[26px] whitespace-nowrap">
              Minimum products
            </div>
            <div className="flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap">
                by order
              </div>
            </div>
          </div>
          <div className="items-center gap-[70px] top-[61px] flex w-[260px] absolute left-0">
            <div className="inline-flex flex-col items-start gap-3 relative flex-[0_0_auto]">
              <div className="relative w-[116px] h-9 mr-[-2.00px]">
                <div className="relative w-[114px] h-9 bg-white rounded-[5px] border border-solid border-stroke flex items-center justify-between px-2">
                  <div onClick={() => handleMinProductsChange(-1)}>
                    <Minus1
                      className="!w-3 !h-3 cursor-pointer"
                      color="#1B4F4A"
                    />
                  </div>
                  <div className="[font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                    {formData.minProducts}
                  </div>
                  <div onClick={() => handleMinProductsChange(1)}>
                    <Plus1
                      className="!w-3 !h-3 cursor-pointer"
                      color="#1B4F4A"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className="relative self-stretch w-full h-px object-cover"
          alt="Line"
          src={Line63}
        />
        <div className="w-full flex items-center gap-2.5">
          <CheckBox
            name="acceptConditions"
            checked={formData.acceptConditions ? "ON" : "OFF"}
            onChange={() => handleChange("acceptConditions")}
            checkedOffStyleClassName="!flex-[0_0_auto]"
            divClassName="!text-primary-text-color !tracking-[0] !text-base ![font-style:unset] !font-normal ![font-family:'Inter',Helvetica] !leading-6 cursor-pointer"
            style="two"
            text=""
            text1="ON"
          />
          <p className="[font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-base tracking-[0] leading-6">
            I accept the General Conditions of Sale
          </p>
        </div>
        <button
          type="submit"
          className="gap-2.5 bg-[#1b4f4a] flex items-center justify-center px-6 py-3 relative self-stretch w-full flex-[0_0_auto] rounded-md cursor-pointer"
        >
          <div className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-6 whitespace-nowrap">
            Next step
          </div>
          <ArrowRight1 className="!relative !w-5 !h-5" color="white" />
        </button>
      </div>
    </form>
  );
};

export { CreateDeal };
