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
import { Plus3 } from "../../icons/Plus3";
import ProductList from "../../components/ProductInfo/ProductList";
import { useDispatch, useSelector } from "react-redux";
import {
  updateDealByDealId,
  getDealByDealIdForEdit,
  updateDealForm,
  updateTitle,
  updateImages,
} from "../../redux/app/deals/dealSlice";
import CustomLoader from "../../components/CustomLoader/CustomLoader";
import { ArrowLeft } from "../../icons/ArrowLeft/ArrowLeft";
import AcceptConditions from "../../components/AcceptConditions";
import { ShowCustomErrorModal } from "../../components/ErrorAlert/ErrorAlert";
import { Line } from "../../components/Line/Line";

const UpdateDeal = () => {
  const { t } = useTranslation(); // Initialize translation hook
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const dealForm = useSelector((state) => state.deals.dealForm);
  const dealTitle = useSelector((state) => state.deals.title);
  const [productUnderEdit, setProductUnderEdit] = useState(null);
  const [isProductUpdated, setIsProductUpdated] = useState(false);
  const [isDraftDeal, setIsDraftDeal] = useState(false);

  // Helper function to generate calendar days
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-indexed
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };
  const [formData, setFormData] = useState(dealForm);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [addMode, setAddMode] = useState(false);
  const [title, setTitle] = useState(dealTitle);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const queryParams = new URLSearchParams(location.search);
  const dealId = queryParams.get("deal_id");
  const [imagesForm, setImagesForm] = useState(new FormData());
  const [existingImages, setExistingImages] = useState([]);

  const addProduct = (product) => {
    setIsProductUpdated(true);
    setProducts([...products, product]);
  };
  console.log({ products });
  const handleChange = (type, e) => {
    if (type === "acceptConditions") {
      setFormData((prevState) => ({
        ...prevState,
        acceptConditions: !formData.acceptConditions,
      }));
    } else {
      console.log(t("create_deal.console_input_change"), e.target.value); // Log translated message
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
    console.log(t("create_deal.console_submit"), { formData, products, title }); // Translated console message

    try {
      // Create FormData object and append form data
      const form = new FormData();
      console.log({ formData });
      form.append("title", title);
      form.append("description", formData.description);
      form.append("collection_location", formData.collectionLocation);
      form.append("collection_date", formData.collectionDate);
      form.append("content_description", formData.contentDescription);
      form.append("artisan_information", formData.manufacturerInfo);
      form.append("deal_expiration_date", formData.dealExpiration);
      form.append("terms_accepted", formData.acceptConditions);
      form.append("delivery_cost", formData.deliveryCost);
      console.log({ pictures: formData?.pictures });
      form.append("existing_images", existingImages);
      // Append image files
      if (formData.pictures && formData.pictures.length > 0) {
        console.log("pictures available");
        formData.pictures.forEach((file, index) => {
          if (file instanceof File) {
            console.log(t("create_deal.console_append_file"), file.name); // Translated log message
            form.append("images", file); // Append file objects
          } else {
            console.error(t("create_deal.console_invalid_file")); // Translated error message
          }
        });
      } else {
        console.error(t("create_deal.console_no_pictures")); // Translated error message
      }

      // Append product details
      products.forEach((product, index) => {
        Object.keys(product).forEach((key) => {
          if (key !== "product_id")
            form.append(`products[${index}][${key}]`, product[key]);
        });
      });

      // Dispatch action to add a new deal
      const resultAction = await dispatch(
        updateDealByDealId({ dealId, updatedDeal: form })
      ).unwrap();

      console.log(t("create_deal.console_success"), resultAction); // Success message
      !isDraftDeal
        ? isProductUpdated
          ? navigate(`/inform-deal?id=${dealId}`)
          : navigate(-1)
        : navigate(`/inform-deal?id=${dealId}`);
    } catch (err) {
      console.error(t("create_deal.console_failure"), err); // Failure message
      setIsError(true);
      setErrorMessage(err?.detail || t("create_deal.error_message"));
    } finally {
      setLoading(false); // Set loading to false after the API call
    }
  };

  useEffect(() => {
    const fetchDeal = async () => {
      setLoading(true);
      console.log(t("create_deal.console_fetching"), dealId); // Translated fetching message
      try {
        const response = await dispatch(
          getDealByDealIdForEdit(dealId)
        ).unwrap();
        const dealData = response;

        if (dealData) {
          console.log({ images: dealData?.images });
          setTitle(dealData.title);
          console.log({ imgs: dealData?.images });
          setExistingImages(dealData?.images);
          setFormData({
            description: dealData.description,
            collectionDate:
              dealData.collection_date?.slice(0, 16) ?? formatDate(new Date()),
            contentDescription: dealData.content_description,
            manufacturerInfo: dealData.artisan_information,
            dealExpiration:
              dealData.deal_expiration_date?.slice(0, 16) ??
              formatDate(new Date()),
            acceptConditions: dealData.terms_accepted ?? false,
            collectionLocation: dealData.collection_location,
            pictures: dealData?.images || [],
            deliveryCost: 0,
          });
          console.log({ status: dealData?.deal_status });
          setIsDraftDeal(dealData?.deal_status == 1);
          setProducts(dealData.products ?? []);
        }
      } catch (err) {
        console.error(t("create_deal.console_fetching_error"), err); // Fetch error message
      }
      setLoading(false);
    };

    fetchDeal();
  }, []);

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(updateTitle(title));
    dispatch(updateImages(existingImages));
    dispatch(updateDealForm(formData));
  }, [formData, title]);

  const onEdit = (productToBeEdited) => {
    setAddMode(true);
    setProductUnderEdit(productToBeEdited);
  };

  const onDelete = (productId) => {
    console.log("Delete exc");
    setIsProductUpdated(true);
    setProducts((prevProducts) =>
      prevProducts?.filter((product) => product?.product_id !== productId)
    );
  };

  return (
    <>
      {loading && <CustomLoader />}
      {isError && (
        <ShowCustomErrorModal
          message={errorMessage}
          buttonText={t("waiting_deal.got_it")}
          onClose={() => setIsError(false)} // Reset modal state on close
        />
      )}
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
              {t("create_deal.update_title")}
            </div>
            <AddPictures
              onChange={handleAddPictures}
              setForm={setImagesForm}
              images={formData?.pictures}
              existingImages={existingImages}
              setExistingImages={setExistingImages}
            />
            <TitleInput dealTitle={title} setDealTitle={setTitle} />
            <div className="w-full">
              <Textarea
                name="description"
                type="description"
                description={formData.description}
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
            <Line />
            <div className="!w-full">
              <CollectionLocation
                type="collectionLocation"
                onChange={handleLocationChange}
                value={formData.collectionLocation}
              />
            </div>
            <div className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-base tracking-[0] leading-6 whitespace-nowrap">
              {t("create_deal.collection_date_label")}
            </div>
            <div className="w-full">
              <DatePicker
                name="collectionDate"
                date={formData.collectionDate}
                onChange={handleDateChange}
              />
            </div>
            <Line />
            <div className="w-full">
              <Textarea
                name="contentDescription"
                type="contentDescription"
                description={formData.contentDescription}
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
            <Line />
            <div className="w-full">
              <Textarea
                name="manufacturerInfo"
                type="manufacturerInfo"
                description={formData.manufacturerInfo}
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
            <Line />
            <DealExpiration />
            <div className="w-full">
              <DatePicker
                name="dealExpiration"
                date={formData.dealExpiration}
                onChange={handleDateChange}
              />
            </div>
            {!addMode && (
              <>
                <Line />
                <ProductList
                  products={products}
                  onEdit={onEdit}
                  onDelete={onDelete}
                />
              </>
            )}
            <Line />
            <div className="flex w-[250px] items-start gap-2.5 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-lg tracking-[0] leading-[26px] whitespace-nowrap">
                {t("create_deal.add_products_label")}
              </div>
            </div>
            {addMode === true && (
              <ProductInfo
                addProduct={addProduct}
                setAddMode={setAddMode}
                addMode={addMode}
                product={productUnderEdit}
                setProduct={setProductUnderEdit}
                onDelete={onDelete}
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
                  {t("create_deal.add_another_product_label")}
                </button>
              </div>
            )}
            <Line />
            <AcceptConditions formData={formData} handleChange={handleChange} />
            <button
              type="submit"
              className="gap-2.5 bg-[#1b4f4a] flex items-center justify-center px-6 py-3 relative self-stretch w-full flex-[0_0_auto] rounded-md cursor-pointer"
            >
              <div className="all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-6 whitespace-nowrap">
                {t("create_deal.next_step_button")}
              </div>
              <ArrowRight1 className="!relative !w-5 !h-5" color="white" />
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default UpdateDeal;
