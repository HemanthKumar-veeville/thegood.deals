import{r as m,j as e}from"./index-DpeMktlG.js";import{C as p}from"./ChevronDown-CUQh6z21.js";const x=[{code:"+1",iso:"us",name:"United States"},{code:"+44",iso:"gb",name:"United Kingdom"},{code:"+33",iso:"fr",name:"France"},{code:"+49",iso:"de",name:"Germany"},{code:"+91",iso:"in",name:"India"},{code:"+61",iso:"au",name:"Australia"},{code:"+81",iso:"jp",name:"Japan"},{code:"+86",iso:"cn",name:"China"},{code:"+7",iso:"ru",name:"Russia"},{code:"+55",iso:"br",name:"Brazil"},{code:"+27",iso:"za",name:"South Africa"},{code:"+34",iso:"es",name:"Spain"},{code:"+39",iso:"it",name:"Italy"},{code:"+52",iso:"mx",name:"Mexico"},{code:"+54",iso:"ar",name:"Argentina"},{code:"+90",iso:"tr",name:"Turkey"},{code:"+82",iso:"kr",name:"South Korea"},{code:"+65",iso:"sg",name:"Singapore"},{code:"+60",iso:"my",name:"Malaysia"},{code:"+62",iso:"id",name:"Indonesia"},{code:"+31",iso:"nl",name:"Netherlands"},{code:"+47",iso:"no",name:"Norway"},{code:"+46",iso:"se",name:"Sweden"},{code:"+45",iso:"dk",name:"Denmark"},{code:"+32",iso:"be",name:"Belgium"},{code:"+41",iso:"ch",name:"Switzerland"},{code:"+48",iso:"pl",name:"Poland"},{code:"+43",iso:"at",name:"Austria"},{code:"+420",iso:"cz",name:"Czech Republic"},{code:"+351",iso:"pt",name:"Portugal"},{code:"+30",iso:"gr",name:"Greece"},{code:"+20",iso:"eg",name:"Egypt"},{code:"+234",iso:"ng",name:"Nigeria"},{code:"+63",iso:"ph",name:"Philippines"},{code:"+94",iso:"lk",name:"Sri Lanka"},{code:"+92",iso:"pk",name:"Pakistan"},{code:"+964",iso:"iq",name:"Iraq"},{code:"+98",iso:"ir",name:"Iran"},{code:"+972",iso:"il",name:"Israel"},{code:"+973",iso:"bh",name:"Bahrain"},{code:"+974",iso:"qa",name:"Qatar"},{code:"+966",iso:"sa",name:"Saudi Arabia"},{code:"+971",iso:"ae",name:"United Arab Emirates"},{code:"+353",iso:"ie",name:"Ireland"},{code:"+372",iso:"ee",name:"Estonia"},{code:"+358",iso:"fi",name:"Finland"},{code:"+356",iso:"mt",name:"Malta"},{code:"+386",iso:"si",name:"Slovenia"},{code:"+1-876",iso:"jm",name:"Jamaica"},{code:"+64",iso:"nz",name:"New Zealand"}],u=({id:t,name:i,selectedCode:a,setSelectedCode:d,formik:s})=>{const[n,r]=m.useState(!1),l=()=>{r(!n)},c=o=>{d(o),s.setFieldValue(i,o),r(!1)};return m.useEffect(()=>{c({code:"+33",iso:"fr",name:"France"})},[]),e.jsxs("div",{className:"inline-flex flex-col h-12 items-start gap-[5px] relative",children:[e.jsxs("div",{id:t,className:"inline-flex items-center gap-2.5 px-[15px] py-3 relative flex-1 grow bg-white rounded-md border border-solid border-stroke cursor-pointer w-28",onClick:l,children:[e.jsxs("div",{className:"inline-flex items-center gap-2.5 relative flex-[0_0_auto]",children:[e.jsx("img",{src:`https://flagcdn.com/w20/${a==null?void 0:a.iso}.png`,alt:a==null?void 0:a.name,className:"w-5 h-5"}),e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-primary-text-color text-base tracking-[0] leading-6 whitespace-nowrap",children:a==null?void 0:a.code})]}),e.jsx(p,{className:"ml-auto h-4 w-4"})]}),n&&e.jsx("div",{className:"absolute top-full mt-1 w-[130%] bg-white border border-stroke rounded-md shadow-lg z-10 max-h-64 overflow-auto custom-scrollbar",children:x.map(o=>e.jsxs("div",{className:"px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2",onClick:()=>c(o),children:[e.jsx("img",{src:`https://flagcdn.com/w20/${o.iso}.png`,alt:o.name,className:"w-5 h-5"}),e.jsx("span",{children:o.code})]},o.code))}),s.touched[i]&&s.errors[i]&&e.jsx("div",{className:"text-red-500 text-sm mt-1",children:s.errors[i]})]})};export{u as D};
