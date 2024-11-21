import React, { useEffect, useState } from "react";
import { ChevronDown } from "../icons/ChevronDown"; // Ensure this path is correct
import { useTranslation } from "react-i18next";

// Static list of country codes
const countryCodes = [
  { name: "Afghanistan", value: "AFGHANISTAN" },
  { name: "Albania", value: "ALBANIA" },
  { name: "Algeria", value: "ALGERIA" },
  { name: "Andorra", value: "ANDORRA" },
  { name: "Angola", value: "ANGOLA" },
  { name: "Antigua And Barbuda", value: "ANTIGUA_AND_BARBUDA" },
  { name: "Argentina", value: "ARGENTINA" },
  { name: "Armenia", value: "ARMENIA" },
  { name: "Australia", value: "AUSTRALIA" },
  { name: "Austria", value: "AUSTRIA" },
  { name: "Azerbaijan", value: "AZERBAIJAN" },
  { name: "Bahamas", value: "BAHAMAS" },
  { name: "Bahrain", value: "BAHRAIN" },
  { name: "Bangladesh", value: "BANGLADESH" },
  { name: "Barbados", value: "BARBADOS" },
  { name: "Belarus", value: "BELARUS" },
  { name: "Belgium", value: "BELGIUM" },
  { name: "Belize", value: "BELIZE" },
  { name: "Benin", value: "BENIN" },
  { name: "Bhutan", value: "BHUTAN" },
  { name: "Bolivia", value: "BOLIVIA" },
  { name: "Bosnia And Herzegovina", value: "BOSNIA_AND_HERZEGOVINA" },
  { name: "Botswana", value: "BOTSWANA" },
  { name: "Brazil", value: "BRAZIL" },
  { name: "Brunei", value: "BRUNEI" },
  { name: "Bulgaria", value: "BULGARIA" },
  { name: "Burkina Faso", value: "BURKINA_FASO" },
  { name: "Burundi", value: "BURUNDI" },
  { name: "Cabo Verde", value: "CABO_VERDE" },
  { name: "Cambodia", value: "CAMBODIA" },
  { name: "Cameroon", value: "CAMEROON" },
  { name: "Canada", value: "CANADA" },
  { name: "Central African Republic", value: "CENTRAL_AFRICAN_REPUBLIC" },
  { name: "Chad", value: "CHAD" },
  { name: "Chile", value: "CHILE" },
  { name: "China", value: "CHINA" },
  { name: "Colombia", value: "COLOMBIA" },
  { name: "Comoros", value: "COMOROS" },
  { name: "Congo", value: "CONGO" },
  { name: "Costa Rica", value: "COSTA_RICA" },
  { name: "Croatia", value: "CROATIA" },
  { name: "Cuba", value: "CUBA" },
  { name: "Cyprus", value: "CYPRUS" },
  { name: "Czechia", value: "CZECHIA" },
  { name: "Denmark", value: "DENMARK" },
  { name: "Djibouti", value: "DJIBOUTI" },
  { name: "Dominica", value: "DOMINICA" },
  { name: "Dominican Republic", value: "DOMINICAN_REPUBLIC" },
  { name: "Ecuador", value: "ECUADOR" },
  { name: "Egypt", value: "EGYPT" },
  { name: "El Salvador", value: "EL_SALVADOR" },
  { name: "Equatorial Guinea", value: "EQUATORIAL_GUINEA" },
  { name: "Eritrea", value: "ERITREA" },
  { name: "Estonia", value: "ESTONIA" },
  { name: "Eswatini", value: "ESWATINI" },
  { name: "Ethiopia", value: "ETHIOPIA" },
  { name: "Fiji", value: "FIJI" },
  { name: "Finland", value: "FINLAND" },
  { name: "France", value: "FRANCE" },
  { name: "Gabon", value: "GABON" },
  { name: "Gambia", value: "GAMBIA" },
  { name: "Georgia", value: "GEORGIA" },
  { name: "Germany", value: "GERMANY" },
  { name: "Ghana", value: "GHANA" },
  { name: "Greece", value: "GREECE" },
  { name: "Grenada", value: "GRENADA" },
  { name: "Guatemala", value: "GUATEMALA" },
  { name: "Guinea", value: "GUINEA" },
  { name: "Guinea Bissau", value: "GUINEA_BISSAU" },
  { name: "Guyana", value: "GUYANA" },
  { name: "Haiti", value: "HAITI" },
  { name: "Honduras", value: "HONDURAS" },
  { name: "Hungary", value: "HUNGARY" },
  { name: "Iceland", value: "ICELAND" },
  { name: "India", value: "INDIA" },
  { name: "Indonesia", value: "INDONESIA" },
  { name: "Iran", value: "IRAN" },
  { name: "Iraq", value: "IRAQ" },
  { name: "Ireland", value: "IRELAND" },
  { name: "Israel", value: "ISRAEL" },
  { name: "Italy", value: "ITALY" },
  { name: "Jamaica", value: "JAMAICA" },
  { name: "Japan", value: "JAPAN" },
  { name: "Jordan", value: "JORDAN" },
  { name: "Kazakhstan", value: "KAZAKHSTAN" },
  { name: "Kenya", value: "KENYA" },
  { name: "Kiribati", value: "KIRIBATI" },
  { name: "Korea North", value: "KOREA_NORTH" },
  { name: "Korea South", value: "KOREA_SOUTH" },
  { name: "Kosovo", value: "KOSOVO" },
  { name: "Kuwait", value: "KUWAIT" },
  { name: "Kyrgyzstan", value: "KYRGYZSTAN" },
  { name: "Laos", value: "LAOS" },
  { name: "Latvia", value: "LATVIA" },
  { name: "Lebanon", value: "LEBANON" },
  { name: "Lesotho", value: "LESOTHO" },
  { name: "Liberia", value: "LIBERIA" },
  { name: "Libya", value: "LIBYA" },
  { name: "Liechtenstein", value: "LIECHTENSTEIN" },
  { name: "Lithuania", value: "LITHUANIA" },
  { name: "Luxembourg", value: "LUXEMBOURG" },
  { name: "Madagascar", value: "MADAGASCAR" },
  { name: "Malawi", value: "MALAWI" },
  { name: "Malaysia", value: "MALAYSIA" },
  { name: "Maldives", value: "MALDIVES" },
  { name: "Mali", value: "MALI" },
  { name: "Malta", value: "MALTA" },
  { name: "Marshall Islands", value: "MARSHALL_ISLANDS" },
  { name: "Mauritania", value: "MAURITANIA" },
  { name: "Mauritius", value: "MAURITIUS" },
  { name: "Mexico", value: "MEXICO" },
  { name: "Micronesia", value: "MICRONESIA" },
  { name: "Moldova", value: "MOLDOVA" },
  { name: "Monaco", value: "MONACO" },
  { name: "Mongolia", value: "MONGOLIA" },
  { name: "Montenegro", value: "MONTENEGRO" },
  { name: "Morocco", value: "MOROCCO" },
  { name: "Mozambique", value: "MOZAMBIQUE" },
  { name: "Myanmar", value: "MYANMAR" },
  { name: "Namibia", value: "NAMIBIA" },
  { name: "Nauru", value: "NAURU" },
  { name: "Nepal", value: "NEPAL" },
  { name: "Netherlands", value: "NETHERLANDS" },
  { name: "New Zealand", value: "NEW_ZEALAND" },
  { name: "Nicaragua", value: "NICARAGUA" },
  { name: "Niger", value: "NIGER" },
  { name: "Nigeria", value: "NIGERIA" },
  { name: "North Macedonia", value: "NORTH_MACEDONIA" },
  { name: "Norway", value: "NORWAY" },
  { name: "Oman", value: "OMAN" },
  { name: "Pakistan", value: "PAKISTAN" },
  { name: "Palau", value: "PALAU" },
  { name: "Palestine", value: "PALESTINE" },
  { name: "Panama", value: "PANAMA" },
  { name: "Papua New Guinea", value: "PAPUA_NEW_GUINEA" },
  { name: "Paraguay", value: "PARAGUAY" },
  { name: "Peru", value: "PERU" },
  { name: "Philippines", value: "PHILIPPINES" },
  { name: "Poland", value: "POLAND" },
  { name: "Portugal", value: "PORTUGAL" },
  { name: "Qatar", value: "QATAR" },
  { name: "Romania", value: "ROMANIA" },
  { name: "Russia", value: "RUSSIA" },
  { name: "Rwanda", value: "RWANDA" },
  { name: "Saint Kitts And Nevis", value: "SAINT_KITTS_AND_NEVIS" },
  { name: "Saint Lucia", value: "SAINT_LUCIA" },
  {
    name: "Saint Vincent And The Grenadines",
    value: "SAINT_VINCENT_AND_THE_GRENADINES",
  },
  { name: "Samoa", value: "SAMOA" },
  { name: "San Marino", value: "SAN_MARINO" },
  { name: "Sao Tome And Principe", value: "SAO_TOME_AND_PRINCIPE" },
  { name: "Saudi Arabia", value: "SAUDI_ARABIA" },
  { name: "Senegal", value: "SENEGAL" },
  { name: "Serbia", value: "SERBIA" },
  { name: "Seychelles", value: "SEYCHELLES" },
  { name: "Sierra Leone", value: "SIERRA_LEONE" },
  { name: "Singapore", value: "SINGAPORE" },
  { name: "Slovakia", value: "SLOVAKIA" },
  { name: "Slovenia", value: "SLOVENIA" },
  { name: "Solomon Islands", value: "SOLOMON_ISLANDS" },
  { name: "Somalia", value: "SOMALIA" },
  { name: "South Africa", value: "SOUTH_AFRICA" },
  { name: "South Sudan", value: "SOUTH_SUDAN" },
  { name: "Spain", value: "SPAIN" },
  { name: "Sri Lanka", value: "SRI_LANKA" },
  { name: "Sudan", value: "SUDAN" },
  { name: "Suriname", value: "SURINAME" },
  { name: "Sweden", value: "SWEDEN" },
  { name: "Switzerland", value: "SWITZERLAND" },
  { name: "Syria", value: "SYRIA" },
  { name: "Tajikistan", value: "TAJIKISTAN" },
  { name: "Tanzania", value: "TANZANIA" },
  { name: "Thailand", value: "THAILAND" },
  { name: "Timor Leste", value: "TIMOR_LESTE" },
  { name: "Togo", value: "TOGO" },
  { name: "Tonga", value: "TONGA" },
  { name: "Trinidad And Tobago", value: "TRINIDAD_AND_TOBAGO" },
  { name: "Tunisia", value: "TUNISIA" },
  { name: "Turkey", value: "TURKEY" },
  { name: "Turkmenistan", value: "TURKMENISTAN" },
  { name: "Tuvalu", value: "TUVALU" },
  { name: "Uganda", value: "UGANDA" },
  { name: "Ukraine", value: "UKRAINE" },
  { name: "United Arab Emirates", value: "UNITED_ARAB_EMIRATES" },
  { name: "United Kingdom", value: "UNITED_KINGDOM" },
  { name: "United States Of America", value: "UNITED_STATES_OF_AMERICA" },
  { name: "Uruguay", value: "URUGUAY" },
  { name: "Uzbekistan", value: "UZBEKISTAN" },
  { name: "Vanuatu", value: "VANUATU" },
  { name: "Vatican City", value: "VATICAN_CITY" },
  { name: "Venezuela", value: "VENEZUELA" },
  { name: "Vietnam", value: "VIETNAM" },
  { name: "Yemen", value: "YEMEN" },
  { name: "Zambia", value: "ZAMBIA" },
  { name: "Zimbabwe", value: "ZIMBABWE" },
];

export const NameDropdown = ({ id, name, selectedCode, setSelectedCode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useTranslation();

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Handle country selection
  const selectCountryCode = (code) => {
    setSelectedCode(code); // Update state in the parent
    setIsOpen(false); // Close the dropdown
  };

  useEffect(() => {
    const defaultCountry = countryCodes.find((c) => c.name === "France");
    if (!selectedCode) {
      setSelectedCode(defaultCountry); // Set default country if none is selected
    }
  }, [selectedCode, setSelectedCode]);

  return (
    <div className="inline-flex flex-col h-12 items-start gap-[5px] relative w-full">
      {/* Dropdown Trigger */}
      <div
        id={id}
        className="inline-flex items-center gap-2.5 px-[15px] py-3 relative flex-1 grow bg-white rounded-md border border-solid border-stroke cursor-pointer w-full"
        onClick={toggleDropdown}
      >
        <div className="inline-flex items-center gap-2.5 relative flex-[0_0_auto]">
          <div className="relative w-fit mt-[-1.00px] font-normal text-primary-text-color text-base leading-6 whitespace-nowrap">
            {selectedCode?.name || t("signup.country")}
          </div>
        </div>
        <ChevronDown className="ml-auto h-4 w-4" />
      </div>

      {/* Dropdown Options */}
      {isOpen && (
        <div className="absolute top-full mt-1 w-full bg-white border border-stroke rounded-md shadow-lg z-10 max-h-64 overflow-auto custom-scrollbar">
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
    </div>
  );
};
