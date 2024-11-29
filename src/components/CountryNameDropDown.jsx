import React, { useEffect, useState } from "react";
import { ChevronDown } from "../icons/ChevronDown"; // Ensure this path is correct
import { useTranslation } from "react-i18next";

export const NameDropdown = ({
  id,
  name,
  selectedCode,
  setSelectedCode,
  formik,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();
  // Static list of country codes
  const countryCodes = [
    { name: t("countries.AFGHANISTAN"), value: "AFGHANISTAN" },
    { name: t("countries.ALBANIA"), value: "ALBANIA" },
    { name: t("countries.ALGERIA"), value: "ALGERIA" },
    { name: t("countries.ANDORRA"), value: "ANDORRA" },
    { name: t("countries.ANGOLA"), value: "ANGOLA" },
    { name: t("countries.ANTIGUA_AND_BARBUDA"), value: "ANTIGUA_AND_BARBUDA" },
    { name: t("countries.ARGENTINA"), value: "ARGENTINA" },
    { name: t("countries.ARMENIA"), value: "ARMENIA" },
    { name: t("countries.AUSTRALIA"), value: "AUSTRALIA" },
    { name: t("countries.AUSTRIA"), value: "AUSTRIA" },
    { name: t("countries.AZERBAIJAN"), value: "AZERBAIJAN" },
    { name: t("countries.BAHAMAS"), value: "BAHAMAS" },
    { name: t("countries.BAHRAIN"), value: "BAHRAIN" },
    { name: t("countries.BANGLADESH"), value: "BANGLADESH" },
    { name: t("countries.BARBADOS"), value: "BARBADOS" },
    { name: t("countries.BELARUS"), value: "BELARUS" },
    { name: t("countries.BELGIUM"), value: "BELGIUM" },
    { name: t("countries.BELIZE"), value: "BELIZE" },
    { name: t("countries.BENIN"), value: "BENIN" },
    { name: t("countries.BHUTAN"), value: "BHUTAN" },
    { name: t("countries.BOLIVIA"), value: "BOLIVIA" },
    {
      name: t("countries.BOSNIA_AND_HERZEGOVINA"),
      value: "BOSNIA_AND_HERZEGOVINA",
    },
    { name: t("countries.BOTSWANA"), value: "BOTSWANA" },
    { name: t("countries.BRAZIL"), value: "BRAZIL" },
    { name: t("countries.BRUNEI"), value: "BRUNEI" },
    { name: t("countries.BULGARIA"), value: "BULGARIA" },
    { name: t("countries.BURKINA_FASO"), value: "BURKINA_FASO" },
    { name: t("countries.BURUNDI"), value: "BURUNDI" },
    { name: t("countries.CABO_VERDE"), value: "CABO_VERDE" },
    { name: t("countries.CAMBODIA"), value: "CAMBODIA" },
    { name: t("countries.CAMEROON"), value: "CAMEROON" },
    { name: t("countries.CANADA"), value: "CANADA" },
    {
      name: t("countries.CENTRAL_AFRICAN_REPUBLIC"),
      value: "CENTRAL_AFRICAN_REPUBLIC",
    },
    { name: t("countries.CHAD"), value: "CHAD" },
    { name: t("countries.CHILE"), value: "CHILE" },
    { name: t("countries.CHINA"), value: "CHINA" },
    { name: t("countries.COLOMBIA"), value: "COLOMBIA" },
    { name: t("countries.COMOROS"), value: "COMOROS" },
    { name: t("countries.CONGO"), value: "CONGO" },
    { name: t("countries.COSTA_RICA"), value: "COSTA_RICA" },
    { name: t("countries.CROATIA"), value: "CROATIA" },
    { name: t("countries.CUBA"), value: "CUBA" },
    { name: t("countries.CYPRUS"), value: "CYPRUS" },
    { name: t("countries.CZECHIA"), value: "CZECHIA" },
    { name: t("countries.DENMARK"), value: "DENMARK" },
    { name: t("countries.DJIBOUTI"), value: "DJIBOUTI" },
    { name: t("countries.DOMINICA"), value: "DOMINICA" },
    { name: t("countries.DOMINICAN_REPUBLIC"), value: "DOMINICAN_REPUBLIC" },
    { name: t("countries.ECUADOR"), value: "ECUADOR" },
    { name: t("countries.EGYPT"), value: "EGYPT" },
    { name: t("countries.EL_SALVADOR"), value: "EL_SALVADOR" },
    { name: t("countries.EQUATORIAL_GUINEA"), value: "EQUATORIAL_GUINEA" },
    { name: t("countries.ERITREA"), value: "ERITREA" },
    { name: t("countries.ESTONIA"), value: "ESTONIA" },
    { name: t("countries.ESWATINI"), value: "ESWATINI" },
    { name: t("countries.ETHIOPIA"), value: "ETHIOPIA" },
    { name: t("countries.FIJI"), value: "FIJI" },
    { name: t("countries.FINLAND"), value: "FINLAND" },
    { name: t("countries.FRANCE"), value: "FRANCE" },
    { name: t("countries.GABON"), value: "GABON" },
    { name: t("countries.GAMBIA"), value: "GAMBIA" },
    { name: t("countries.GEORGIA"), value: "GEORGIA" },
    { name: t("countries.GERMANY"), value: "GERMANY" },
    { name: t("countries.GHANA"), value: "GHANA" },
    { name: t("countries.GREECE"), value: "GREECE" },
    { name: t("countries.GRENADA"), value: "GRENADA" },
    { name: t("countries.GUATEMALA"), value: "GUATEMALA" },
    { name: t("countries.GUINEA"), value: "GUINEA" },
    { name: t("countries.GUINEA_BISSAU"), value: "GUINEA_BISSAU" },
    { name: t("countries.GUYANA"), value: "GUYANA" },
    { name: t("countries.HAITI"), value: "HAITI" },
    { name: t("countries.HONDURAS"), value: "HONDURAS" },
    { name: t("countries.HUNGARY"), value: "HUNGARY" },
    { name: t("countries.ICELAND"), value: "ICELAND" },
    { name: t("countries.INDIA"), value: "INDIA" },
    { name: t("countries.INDONESIA"), value: "INDONESIA" },
    { name: t("countries.IRAN"), value: "IRAN" },
    { name: t("countries.IRAQ"), value: "IRAQ" },
    { name: t("countries.IRELAND"), value: "IRELAND" },
    { name: t("countries.ISRAEL"), value: "ISRAEL" },
    { name: t("countries.ITALY"), value: "ITALY" },
    { name: t("countries.JAMAICA"), value: "JAMAICA" },
    { name: t("countries.JAPAN"), value: "JAPAN" },
    { name: t("countries.JORDAN"), value: "JORDAN" },
    { name: t("countries.KAZAKHSTAN"), value: "KAZAKHSTAN" },
    { name: t("countries.KENYA"), value: "KENYA" },
    { name: t("countries.KIRIBATI"), value: "KIRIBATI" },
    { name: t("countries.KOREA_NORTH"), value: "KOREA_NORTH" },
    { name: t("countries.KOREA_SOUTH"), value: "KOREA_SOUTH" },
    { name: t("countries.KOSOVO"), value: "KOSOVO" },
    { name: t("countries.KUWAIT"), value: "KUWAIT" },
    { name: t("countries.KYRGYZSTAN"), value: "KYRGYZSTAN" },
    { name: t("countries.LAOS"), value: "LAOS" },
    { name: t("countries.LATVIA"), value: "LATVIA" },
    { name: t("countries.LEBANON"), value: "LEBANON" },
    { name: t("countries.LESOTHO"), value: "LESOTHO" },
    { name: t("countries.LIBERIA"), value: "LIBERIA" },
    { name: t("countries.LIBYA"), value: "LIBYA" },
    { name: t("countries.LIECHTENSTEIN"), value: "LIECHTENSTEIN" },
    { name: t("countries.LITHUANIA"), value: "LITHUANIA" },
    { name: t("countries.LUXEMBOURG"), value: "LUXEMBOURG" },
    { name: t("countries.MADAGASCAR"), value: "MADAGASCAR" },
    { name: t("countries.MALAWI"), value: "MALAWI" },
    { name: t("countries.MALAYSIA"), value: "MALAYSIA" },
    { name: t("countries.MALDIVES"), value: "MALDIVES" },
    { name: t("countries.MALI"), value: "MALI" },
    { name: t("countries.MALTA"), value: "MALTA" },
    { name: t("countries.MARSHALL_ISLANDS"), value: "MARSHALL_ISLANDS" },
    { name: t("countries.MAURITANIA"), value: "MAURITANIA" },
    { name: t("countries.MAURITIUS"), value: "MAURITIUS" },
    { name: t("countries.MEXICO"), value: "MEXICO" },
    { name: t("countries.MICRONESIA"), value: "MICRONESIA" },
    { name: t("countries.MOLDOVA"), value: "MOLDOVA" },
    { name: t("countries.MONACO"), value: "MONACO" },
    { name: t("countries.MONGOLIA"), value: "MONGOLIA" },
    { name: t("countries.MONTENEGRO"), value: "MONTENEGRO" },
    { name: t("countries.MOROCCO"), value: "MOROCCO" },
    { name: t("countries.MOZAMBIQUE"), value: "MOZAMBIQUE" },
    { name: t("countries.MYANMAR"), value: "MYANMAR" },
    { name: t("countries.NAMIBIA"), value: "NAMIBIA" },
    { name: t("countries.NAURU"), value: "NAURU" },
    { name: t("countries.NEPAL"), value: "NEPAL" },
    { name: t("countries.NETHERLANDS"), value: "NETHERLANDS" },
    { name: t("countries.NEW_ZEALAND"), value: "NEW_ZEALAND" },
    { name: t("countries.NICARAGUA"), value: "NICARAGUA" },
    { name: t("countries.NIGER"), value: "NIGER" },
    { name: t("countries.NIGERIA"), value: "NIGERIA" },
    { name: t("countries.NORTH_MACEDONIA"), value: "NORTH_MACEDONIA" },
    { name: t("countries.NORWAY"), value: "NORWAY" },
    { name: t("countries.OMAN"), value: "OMAN" },
    { name: t("countries.PAKISTAN"), value: "PAKISTAN" },
    { name: t("countries.PALAU"), value: "PALAU" },
    { name: t("countries.PALESTINE"), value: "PALESTINE" },
    { name: t("countries.PANAMA"), value: "PANAMA" },
    { name: t("countries.PAPUA_NEW_GUINEA"), value: "PAPUA_NEW_GUINEA" },
    { name: t("countries.PARAGUAY"), value: "PARAGUAY" },
    { name: t("countries.PERU"), value: "PERU" },
    { name: t("countries.PHILIPPINES"), value: "PHILIPPINES" },
    { name: t("countries.POLAND"), value: "POLAND" },
    { name: t("countries.PORTUGAL"), value: "PORTUGAL" },
    { name: t("countries.QATAR"), value: "QATAR" },
    { name: t("countries.ROMANIA"), value: "ROMANIA" },
    { name: t("countries.RUSSIA"), value: "RUSSIA" },
    { name: t("countries.RWANDA"), value: "RWANDA" },
    {
      name: t("countries.SAINT_KITTS_AND_NEVIS"),
      value: "SAINT_KITTS_AND_NEVIS",
    },
    { name: t("countries.SAINT_LUCIA"), value: "SAINT_LUCIA" },
    {
      name: t("countries.SAINT_VINCENT_AND_THE_GRENADINES"),
      value: "SAINT_VINCENT_AND_THE_GRENADINES",
    },
    { name: t("countries.SAMOA"), value: "SAMOA" },
    { name: t("countries.SAN_MARINO"), value: "SAN_MARINO" },
    {
      name: t("countries.SAO_TOME_AND_PRINCIPE"),
      value: "SAO_TOME_AND_PRINCIPE",
    },
    { name: t("countries.SAUDI_ARABIA"), value: "SAUDI_ARABIA" },
    { name: t("countries.SENEGAL"), value: "SENEGAL" },
    { name: t("countries.SERBIA"), value: "SERBIA" },
    { name: t("countries.SEYCHELLES"), value: "SEYCHELLES" },
    { name: t("countries.SIERRA_LEONE"), value: "SIERRA_LEONE" },
    { name: t("countries.SINGAPORE"), value: "SINGAPORE" },
    { name: t("countries.SLOVAKIA"), value: "SLOVAKIA" },
    { name: t("countries.SLOVENIA"), value: "SLOVENIA" },
    { name: t("countries.SOLOMON_ISLANDS"), value: "SOLOMON_ISLANDS" },
    { name: t("countries.SOMALIA"), value: "SOMALIA" },
    { name: t("countries.SOUTH_AFRICA"), value: "SOUTH_AFRICA" },
    { name: t("countries.SOUTH_SUDAN"), value: "SOUTH_SUDAN" },
    { name: t("countries.SPAIN"), value: "SPAIN" },
    { name: t("countries.SRI_LANKA"), value: "SRI_LANKA" },
    { name: t("countries.SUDAN"), value: "SUDAN" },
    { name: t("countries.SURINAME"), value: "SURINAME" },
    { name: t("countries.SWEDEN"), value: "SWEDEN" },
    { name: t("countries.SWITZERLAND"), value: "SWITZERLAND" },
    { name: t("countries.SYRIA"), value: "SYRIA" },
    { name: t("countries.TAJIKISTAN"), value: "TAJIKISTAN" },
    { name: t("countries.TANZANIA"), value: "TANZANIA" },
    { name: t("countries.THAILAND"), value: "THAILAND" },
    { name: t("countries.TIMOR_LESTE"), value: "TIMOR_LESTE" },
    { name: t("countries.TOGO"), value: "TOGO" },
    { name: t("countries.TONGA"), value: "TONGA" },
    { name: t("countries.TRINIDAD_AND_TOBAGO"), value: "TRINIDAD_AND_TOBAGO" },
    { name: t("countries.TUNISIA"), value: "TUNISIA" },
    { name: t("countries.TURKEY"), value: "TURKEY" },
    { name: t("countries.TURKMENISTAN"), value: "TURKMENISTAN" },
    { name: t("countries.TUVALU"), value: "TUVALU" },
    { name: t("countries.UGANDA"), value: "UGANDA" },
    { name: t("countries.UKRAINE"), value: "UKRAINE" },
    {
      name: t("countries.UNITED_ARAB_EMIRATES"),
      value: "UNITED_ARAB_EMIRATES",
    },
    { name: t("countries.UNITED_KINGDOM"), value: "UNITED_KINGDOM" },
    {
      name: t("countries.UNITED_STATES_OF_AMERICA"),
      value: "UNITED_STATES_OF_AMERICA",
    },
    { name: t("countries.URUGUAY"), value: "URUGUAY" },
    { name: t("countries.UZBEKISTAN"), value: "UZBEKISTAN" },
    { name: t("countries.VANUATU"), value: "VANUATU" },
    { name: t("countries.VATICAN_CITY"), value: "VATICAN_CITY" },
    { name: t("countries.VENEZUELA"), value: "VENEZUELA" },
    { name: t("countries.VIETNAM"), value: "VIETNAM" },
    { name: t("countries.YEMEN"), value: "YEMEN" },
    { name: t("countries.ZAMBIA"), value: "ZAMBIA" },
    { name: t("countries.ZIMBABWE"), value: "ZIMBABWE" },
  ];

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Handle country selection
  const selectCountryCode = (code) => {
    setSelectedCode(code); // Update local state
    formik.setFieldValue(name, code.value); // Update Formik field value
    setIsOpen(false); // Close the dropdown
  };

  useEffect(() => {
    const defaultCountry = countryCodes.find((c) => c.name === "France");

    // Set default country if none is selected
    if (!selectedCode && !formik.values[name]) {
      setSelectedCode(defaultCountry); // Update local state
      formik.setFieldValue(name, defaultCountry.value); // Update Formik field value
    }
  }, [selectedCode, formik.values[name]]);

  return (
    <div className="inline-flex flex-col h-12 items-start gap-[5px] relative !w-full">
      {/* Dropdown Trigger */}
      <div
        id={id}
        className="inline-flex items-center gap-2.5 px-[15px] py-3 relative flex-1 grow bg-white rounded-md border border-solid border-stroke cursor-pointer  !w-full"
        onClick={toggleDropdown}
      >
        <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-primary-text-color text-base tracking-[0] leading-6 whitespace-nowrap">
            {selectedCode?.name || t("signup.country")}
          </div>
        </div>
        <ChevronDown className="ml-auto h-4 w-4" />
      </div>

      {/* Dropdown Options */}
      {isOpen && (
        <div className="absolute top-full mt-1 w-[100%] bg-white border border-stroke rounded-md shadow-lg z-10 max-h-64 overflow-auto custom-scrollbar">
          {countryCodes.map((code) => (
            <div
              key={code.value}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
              onClick={() => selectCountryCode(code)}
            >
              <span>{code.name}</span>
            </div>
          ))}
        </div>
      )}

      {/* Error Message */}
      {formik.touched[name] && formik.errors[name] && (
        <div className="text-red-500 text-sm mt-1">{formik.errors[name]}</div>
      )}
    </div>
  );
};
