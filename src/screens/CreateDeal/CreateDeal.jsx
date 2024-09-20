import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next"; // Import the useTranslation hook
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
import { Line63 } from "../../images";
import { Plus3 } from "../../icons/Plus3";
import { Minus1 } from "../../icons/Minus1";
import { Plus1 } from "../../icons/Plus1";
import ProductList from "../../components/ProductInfo/ProductList";
import { useDispatch } from "react-redux";
import { addNewDeal, getDealByDealId } from "../../redux/app/deals/dealSlice";
import CustomLoader from "../../components/CustomLoader/CustomLoader";
import Swal from "sweetalert2";
import { ArrowLeft } from "../../icons/ArrowLeft/ArrowLeft";
import AcceptConditions from "../../components/AcceptConditions";

const CreateDeal = () => {
  const { t } = useTranslation(); // Initialize translation hook
  const [formData, setFormData] = useState({
    description: "",
    collectionDate: "",
    contentDescription: "",
    manufacturerInfo: "",
    iban: "",
    bic: "",
    dealExpiration: "",
    acceptConditions: false,
    collectionLocation: "",
    pictures: [],
    deliveryCost: "",
  });
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [addMode, setAddMode] = useState(true);
  const [title, setTitle] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryParams = new URLSearchParams(location.search);
  const dealId = queryParams.get("deal_id");
  const [imagesForm, setImagesForm] = useState(new FormData());
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
      console.log(e.target.value);
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

  const handleLocationChange = (collectionLocation, e) => {
    setFormData((prevState) => ({
      ...prevState,
      collectionLocation: e.target.value,
    }));
  };

  const handleDeliveryCostChange = (deliveryCost) => {
    setFormData((prevState) => ({
      ...prevState,
      deliveryCost,
    }));
  };

  const handleDateChange = (type, date) => {
    setFormData((prevState) => ({
      ...prevState,
      [type]: date,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true at the start
    console.log({ formData, products, title });
    try {
      // Create FormData object and append form data
      const form = new FormData();
      form.append("title", title);
      form.append("description", formData.description);
      form.append("collection_location", formData.collectionLocation);
      form.append("collection_date", formData.collectionDate);
      form.append("content_description", formData.contentDescription);
      form.append("artisan_information", formData.manufacturerInfo);
      form.append("banking_info[iban]", formData.iban);
      form.append("banking_info[bic]", formData.bic);
      form.append("deal_expiration_date", formData.dealExpiration);
      form.append("terms_accepted", formData.acceptConditions);
      form.append("delivery_cost", formData.deliveryCost);
      // Log file names before appending them to FormData
      if (formData.pictures && formData.pictures.length > 0) {
        formData.pictures.forEach((file, index) => {
          if (file instanceof File) {
            console.log(`Appending file: ${file.name}`);
            form.append("images", file); // Append file objects with their metadata
          } else {
            console.error("Invalid file object", file);
          }
        });
      } else {
        console.error("No pictures selected.");
      }

      // Append product details
      products.forEach((product, index) => {
        Object.keys(product).forEach((key) => {
          form.append(`products[${index}][${key}]`, product[key]);
        });
      });

      // Dispatch the action to add a new deal
      const resultAction = await dispatch(addNewDeal(form)).unwrap();
      const dealId = resultAction.deal_id;

      // Handle successful submission
      console.log("Deal successfully created:", resultAction);
      navigate(`/inform-deal?id=${dealId}`);
    } catch (err) {
      // Handle error during submission
      console.error("Failed to create deal:", err);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err?.detail || "An error occurred while creating the deal",
      });
    } finally {
      setLoading(false); // Set loading to false after the API call is completed
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchDeal = async () => {
      if (dealId) {
        setLoading(true);
        console.log("Fetching deal with deal ID:", dealId);
        try {
          const response = await dispatch(getDealByDealId(dealId)).unwrap();
          const dealData = response?.Deal[0];

          if (dealData) {
            setTitle(dealData.deal_title ?? "Default Title");

            setFormData({
              description: dealData.description ?? "Default Description",
              collectionDate: dealData.collection_date ?? "2024-09-20T17:42",
              contentDescription:
                dealData.content_description ?? "Default Content Description",
              manufacturerInfo:
                dealData.artisan_information ?? "Default Manufacturer Info",
              iban: dealData.banking_info?.iban ?? "Default IBAN",
              bic: dealData.banking_info?.bic ?? "Default BIC",
              dealExpiration:
                dealData.deal_expiration_date ?? "2024-09-20T17:42",
              acceptConditions: dealData.terms_accepted ?? false,
              collectionLocation:
                dealData.collection_location ?? "Default Collection Location",
              pictures: dealData.images ?? [],
            });

            setProducts(dealData.products ?? []);
          }
        } catch (err) {
          console.error("Failed to fetch deal:", err);
        }
        setLoading(false);
      }
    };

    fetchDeal();
  }, [dealId]);

  const handleBack = () => {
    navigate("/");
  };

  // useEffect(() => {
  //   console.log({ products });
  // }, [products]);

  return (
    <>
      {loading && <CustomLoader />}
      {!loading && (
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full items-start relative bg-primary-background mx-auto"
        >
          <div className="flex flex-col w-full items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]">
            <div
              className="flex items-center gap-3 pt-0 pb-5 px-0 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-stroke"
              onClick={handleBack}
            >
              <div className="inline-flex items-center gap-2 relative flex-[0_0_auto]">
                <ArrowLeft
                  className="!relative !w-[18px] !h-[18px]"
                  color="#637381"
                />
                <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-text-color text-base tracking-[0] leading-6 whitespace-nowrap">
                  {t("common.back")}
                </div>
              </div>
            </div>
            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-[#1b4f4a] text-2xl text-center tracking-[0] leading-[30px] whitespace-nowrap">
              {t("create_deal.title")} {/* Create a good deal */}
            </div>
            <AddPictures onChange={handleAddPictures} setForm={setImagesForm} />
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
                label={t("create_deal.description_label")}
                label1="on"
                placeholder={t("create_deal.description_placeholder")}
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
            <div className="!w-full">
              <CollectionLocation
                type="collectionLocation"
                onChange={handleLocationChange}
                value={formData.collectionLocation}
              />
            </div>
            <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-base tracking-[0] leading-6 whitespace-nowrap">
              {t("create_deal.collection_date_label")}{" "}
              {/* Approximate collection date */}
            </div>
            <div className="w-full">
              <DatePicker
                name="collectionDate"
                date={formData.collectionDate}
                onChange={handleDateChange}
              />
            </div>
            <img
              className="relative self-stretch w-full h-px object-cover"
              alt="Line"
              src={Line63}
            />
            <div className="!w-full">
              <CollectionLocation
                type="deliveryCost"
                onChange={handleDeliveryCostChange}
                value={formData.deliveryCost}
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
                label={t("create_deal.content_description_label")}
                label1="on"
                placeholder={t("create_deal.content_description_placeholder")}
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
                label={t("create_deal.artisan_info_label")}
                label1="on"
                placeholder={t("create_deal.artisan_info_placeholder")}
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
              {t("create_deal.banking_info_label")}
            </p>
            <div className="w-full h-6">
              <div className="[font-family:'Inter-Regular',Helvetica] font-normal text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap">
                IBAN
              </div>
            </div>
            <div className="w-full">
              <BankingInfo
                name="iban"
                type="iban"
                value={formData.iban}
                onChange={handleChange}
                label={t("create_deal.iban_label")}
                placeholder={t("create_deal.iban_placeholder")}
              />
            </div>
            <div className="w-full h-6">
              <div className="[font-family:'Inter-Regular',Helvetica] font-normal text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap">
                BIC
              </div>
            </div>
            <div className="w-full">
              <BankingInfo
                name="bic"
                type="bic"
                value={formData.bic}
                onChange={handleChange}
                label={t("create_deal.bic_label")}
                placeholder={t("create_deal.bic_placeholder")}
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
                onChange={handleDateChange}
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
                {t("create_deal.add_products_label")} {/* Add products */}
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
                  {t("create_deal.add_another_product_label")}{" "}
                  {/* Add another product */}
                </button>
              </div>
            )}
            <img
              className="relative self-stretch w-full h-px object-cover"
              alt="Line"
              src={Line63}
            />
            <AcceptConditions formData={formData} handleChange={handleChange} />
            <button
              type="submit"
              className="gap-2.5 bg-[#1b4f4a] flex items-center justify-center px-6 py-3 relative self-stretch w-full flex-[0_0_auto] rounded-md cursor-pointer"
            >
              <div className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                {t("create_deal.next_step_button")} {/* Next step */}
              </div>
              <ArrowRight1 className="!relative !w-5 !h-5" color="white" />
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default CreateDeal;
