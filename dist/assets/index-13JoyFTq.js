import{a as h,r as v,j as e}from"./index-B0WL61aP.js";import{B as u}from"./Box4-prwpPLlE.js";import{C as g}from"./ChevronDown-BL9SqBgw.js";import{C as w}from"./ChevronUp-fvqvAHKY.js";import{S as x}from"./Send1-D1T76mWk.js";import{L as j}from"./LogoTheGoodDeals-Bw_adV_B.js";import{S as b}from"./SizeXlCorner-Dw3nZw3S.js";import{L as l}from"./line-63-BwS0eOFc.js";const O=({HEADERClassName:m})=>{const{t}=h(),r=[{initials:"AT",name:"Abraham Thomas",orders:1,expanded:!0,products:[{name:t("artisanEmailList.caseOfRose"),quantity:3,price:"29.00 €",totalPrice:"87 €"},{name:t("artisanEmailList.caseOfWhite"),quantity:3,price:"29.00 €",totalPrice:"87 €"}],totalPrice:"174 €"},{initials:"JD",name:"Jane Doe",orders:1,expanded:!1,products:[{name:t("artisanEmailList.caseOfRose"),quantity:3,price:"29.00 €",totalPrice:"87 €"},{name:t("artisanEmailList.caseOfWhite"),quantity:3,price:"29.00 €",totalPrice:"87 €"}],totalPrice:"174 €"},{initials:"KD",name:"Kate Doe",orders:1,expanded:!1,products:[{name:t("artisanEmailList.caseOfRose"),quantity:3,price:"29.00 €",totalPrice:"87 €"},{name:t("artisanEmailList.caseOfWhite"),quantity:3,price:"29.00 €",totalPrice:"87 €"}],totalPrice:"174 €"}],[c,d]=v.useState(r.map(a=>a.expanded)),f=a=>{d(i=>i.map((s,n)=>n===a?!s:s))},o=()=>{alert(t("artisanEmailList.confirmationAlert"))},p=r.reduce((a,i)=>{const s=parseFloat(i.totalPrice.replace(" €",""));return a+s},0);return e.jsxs("div",{className:"flex flex-col w-[360px] items-start relative bg-primary-background",children:[e.jsx("div",{className:`flex flex-col w-[360px] h-16 items-start relative bg-primary-background border-b border-solid border-stroke ${m}`,children:e.jsx("div",{className:"flex h-16 items-center justify-around gap-8 pl-5 pr-3 py-0 relative self-stretch w-full",children:e.jsx("div",{className:"inline-flex items-start relative flex-[0_0_auto]",children:e.jsx(j,{className:"!flex-[0_0_auto]",thegoodDealsClassName:"!text-[28px]"})})})}),e.jsxs("div",{className:"flex-col w-[360px] items-start gap-[15px] px-[35px] py-[15px] flex relative flex-[0_0_auto]",children:[e.jsx("p",{className:"relative self-stretch mt-[-1.00px] font-heading-6 text-primary-color text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)]",children:t("artisanEmailList.dearCraftsman")}),e.jsx("p",{className:"relative self-stretch font-body-medium-regular text-primary-text-color text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)]",children:t("artisanEmailList.confirmOrderForm")}),e.jsxs("div",{className:"flex items-center justify-center gap-2.5 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-primary-color rounded-md",children:[e.jsx(x,{className:"!relative !w-5 !h-5"}),e.jsx("button",{className:"all-[unset] box-border relative w-fit mt-[-1.00px] font-medium text-white text-base text-center tracking-[0] leading-6 whitespace-nowrap",onClick:o,children:t("artisanEmailList.confirmInformation")})]}),e.jsx("img",{className:"relative self-stretch w-full h-px object-cover",alt:t("artisanEmailList.line"),src:l}),r.map((a,i)=>e.jsxs("div",{className:`flex flex-col items-start gap-[15px] pt-0 pb-[15px] px-[15px] relative self-stretch w-full flex-[0_0_auto] ${i%2===0,"bg-white"}`,children:[e.jsx("img",{className:"relative self-stretch w-full h-px object-cover",alt:t("artisanEmailList.line"),src:l}),e.jsxs("div",{className:"flex items-center gap-[15px] relative flex-[0_0_auto] cursor-pointer",onClick:()=>f(i),children:[e.jsx(b,{className:"!h-[50px] !w-[50px]",divClassName:"!tracking-[0] !text-lg !font-semibold !font-sans !leading-10 !top-1",text:a.initials}),e.jsxs("div",{className:"inline-flex flex-col items-start gap-[5px] relative flex-[0_0_auto]",children:[e.jsx("div",{className:"relative w-fit mt-[-1.00px] font-medium text-primary-color text-base leading-6 whitespace-nowrap",children:a.name}),e.jsxs("div",{className:"inline-flex items-center gap-2.5 relative flex-[0_0_auto]",children:[e.jsx(u,{className:"!relative !w-5 !h-5"}),e.jsxs("p",{className:"relative w-fit mt-[-1.00px] text-primary-text-color text-sm leading-5 whitespace-nowrap",children:[a.orders," ",t("artisanEmailList.orderOnDeal")]})]})]}),c[i]?e.jsx(w,{className:"!relative !w-6 !h-6"}):e.jsx(g,{className:"!relative !w-6 !h-6"})]}),c[i]&&e.jsxs("div",{className:"flex flex-col items-start gap-[15px] pt-0 pb-[15px] px-[15px] relative self-stretch w-full flex-[0_0_auto]",children:[e.jsx("img",{className:"relative self-stretch w-full h-px mt-[-1.00px] object-cover",alt:t("artisanEmailList.line"),src:l}),a.products.map((s,n)=>e.jsxs("div",{className:"flex flex-col items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]",children:[e.jsx("div",{className:"flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]",children:e.jsx("p",{className:"relative w-fit mt-[-1.00px] font-medium text-primary-color text-base leading-6 whitespace-nowrap",children:s.name})}),e.jsxs("div",{className:"items-end justify-between self-stretch w-full flex relative flex-[0_0_auto]",children:[e.jsx("div",{className:"flex items-center gap-2.5 relative flex-1 grow",children:e.jsxs("div",{className:"relative w-fit mt-[-1.00px] text-secondary-color font-semibold text-base leading-6 whitespace-nowrap",children:[s.quantity," ",t("artisanEmailList.products")]})}),e.jsx("div",{className:"inline-flex flex-col items-end relative flex-[0_0_auto]",children:e.jsxs("p",{className:"relative w-fit mt-[-1.00px] text-secondary-color font-semibold text-base text-right leading-6 whitespace-nowrap",children:[s.price," x ",s.quantity," ="," ",s.totalPrice]})})]})]},n)),e.jsxs("div",{className:"items-end justify-between self-stretch w-full flex relative flex-[0_0_auto]",children:[e.jsx("div",{className:"flex items-center gap-2.5 relative flex-1 grow",children:e.jsx("div",{className:"relative w-fit mt-[-1.00px] font-semibold text-primary-color text-base leading-6 whitespace-nowrap",children:t("artisanEmailList.total")})}),e.jsx("div",{className:"inline-flex flex-col items-end relative flex-[0_0_auto]",children:e.jsx("div",{className:"relative w-fit mt-[-1.00px] font-semibold text-primary-color text-base text-right leading-6 whitespace-nowrap",children:a.totalPrice})})]})]})]},i)),e.jsx("img",{className:"relative self-stretch w-full h-px object-cover",alt:t("artisanEmailList.line"),src:l}),e.jsxs("div",{className:"flex-col items-start gap-[15px] p-[15px] self-stretch w-full bg-white rounded-[5px] flex relative flex-[0_0_auto]",children:[e.jsx("div",{className:"items-end flex flex-col gap-[5px] relative self-stretch w-full flex-[0_0_auto]",children:e.jsxs("div",{className:"flex justify-between self-stretch w-full items-end relative flex-[0_0_auto]",children:[e.jsx("div",{className:"relative w-fit mt-[-1.00px] font-bold text-primary-color text-base text-center leading-6 whitespace-nowrap",children:t("artisanEmailList.totalPrice")}),e.jsxs("div",{className:"relative w-fit mt-[-1.00px] font-bold text-primary-color text-base text-right leading-6 whitespace-nowrap",children:[p.toFixed(2)," €"]})]})}),e.jsxs("div",{className:"flex items-center justify-center gap-2.5 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-primary-color rounded-md",children:[e.jsx(x,{className:"!relative !w-5 !h-5"}),e.jsx("button",{className:"all-[unset] box-border relative w-fit mt-[-1.00px] font-medium text-white text-base text-center leading-6 whitespace-nowrap",onClick:o,children:t("artisanEmailList.confirmInformation")})]})]})]})]})};export{O as default};
