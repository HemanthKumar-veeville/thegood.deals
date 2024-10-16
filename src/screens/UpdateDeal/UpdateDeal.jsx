import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next"; // Import the useTranslation hook
import { useNavigate } from "react-router-dom";
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
  addNewDeal,
  getDealByDealId,
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
  const { t } = useTranslation();
  const [isError, setIsError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const dealForm = useSelector((state) => state.deals.dealForm);
  const dealTitle = useSelector((state) => state.deals.title);

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");

    return `${year}-${month}-${day}T${hours}:${minutes}`;
  };

  const [formData, setFormData] = useState(dealForm);
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [addMode, setAddMode] = useState(true);
  const [title, setTitle] = useState(dealTitle);
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

  const handleLocationChange = (e) => {
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
    setLoading(true);

    try {
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

      if (formData.pictures && formData.pictures.length > 0) {
        formData.pictures.forEach((file) => {
          if (file instanceof File) {
            form.append("images", file);
          }
        });
      }

      products.forEach((product, index) => {
        Object.keys(product).forEach((key) => {
          form.append(`products[${index}][${key}]`, product[key]);
        });
      });

      const resultAction = await dispatch(
        updateDealForm({ dealId, form })
      ).unwrap();
      console.log(t("create_deal.console_success"), resultAction);
      navigate(`/inform-deal?id=${dealId}`);
    } catch (err) {
      setIsError(true);
      setErrorMessage(err?.detail || t("create_deal.error_message"));
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const fetchDeal = async () => {
      if (dealId) {
        setLoading(true);
        try {
          const response = await dispatch(getDealByDealId(dealId)).unwrap();
          const dealData = response?.Deal[0];

          if (dealData) {
            setTitle(dealData.deal_title ?? t("create_deal.default_title"));
            setFormData({
              description:
                dealData.description ?? t("create_deal.default_description"),
              collectionDate:
                dealData.collection_date ?? formatDate(new Date()),
              contentDescription:
                dealData.content_description ??
                t("create_deal.default_content_description"),
              manufacturerInfo:
                dealData.artisan_information ??
                t("create_deal.default_manufacturer_info"),
              iban:
                dealData.banking_info?.iban ?? t("create_deal.default_iban"),
              bic: dealData.banking_info?.bic ?? t("create_deal.default_bic"),
              dealExpiration:
                dealData.deal_expiration_date ?? formatDate(new Date()),
              acceptConditions: dealData.terms_accepted ?? false,
              collectionLocation:
                dealData.collection_location ??
                t("create_deal.default_collection_location"),
              pictures: dealData.images ?? [],
            });
            setProducts(dealData.products ?? []);
          }
        } catch (err) {
          console.error(t("create_deal.console_fetching_error"), err);
        }
        setLoading(false);
      }
    };

    fetchDeal();
  }, [dealId, t]);

  useEffect(() => {
    dispatch(updateTitle(title));
    dispatch(updateDealForm(formData));
  }, [formData, title]);

  const handleBack = () => {
    navigate("/");
  };

  return (
    <>
      {loading && <CustomLoader />}
      {isError && (
        <ShowCustomErrorModal
          message={errorMessage}
          buttonText={t("waiting_deal.got_it")}
          onClose={() => setIsError(false)}
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
              {t("create_deal.title")}
            </div>
            <AddPictures onChange={handleAddPictures} setForm={setImagesForm} />
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
            <div className="!w-full">
              <CollectionLocation
                type="deliveryCost"
                onChange={handleDeliveryCostChange}
                value={formData.deliveryCost}
              />
            </div>
            <Line />
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
            <Line />
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
            <Line />
            <p className="relative w-full [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-lg tracking-[0] leading-[26px]">
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
            <Line />
            <DealExpiration />
            <div className="w-full">
              <DatePicker
                name="dealExpiration"
                value={formData.dealExpiration}
                onChange={handleDateChange}
              />
            </div>
            <Line />
            <ProductList products={products} />
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