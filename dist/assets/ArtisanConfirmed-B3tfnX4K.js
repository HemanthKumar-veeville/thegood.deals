import{a as T,c as z,u as A,g as h,f as I,r as H,Y as L,j as e,X as x,Z as D}from"./index-B0WL61aP.js";import{B as g}from"./Box44-Bx5hqh7U.js";import{C as v}from"./ClockAlt11-hYutpUHj.js";import{C as p}from"./CrossCircle-nCMjftWo.js";import{D as E}from"./DeliveryTruck4-GClA9NPp.js";import{M as R}from"./Map-jw6F8I30.js";import{S as y}from"./Send1-D1T76mWk.js";import{V as b}from"./VerticalLine2-mHWzLWUA.js";import{R as q}from"./RatingStar-BEdNFV09.js";import{L as l}from"./line-63-BwS0eOFc.js";import{b as B}from"./blog-image-BEA4eBPN.js";import{H as F}from"./human-Dor2S4ux.js";import O from"./CustomLoader-C8eQf-Ao.js";import{S as P}from"./sweetalert2.all-DEXiqHiS.js";import{I as V}from"./ImageSlider-BG-ma90A.js";import"./Star-B_MN45wq.js";const U=({HEADERIcon:M=e.jsx(b,{className:"!relative !w-6 !h-6",color:"#1B4F4A"}),HEADERHeaderOpenClassName:X})=>{var u;const{t}=T(),o=z(),i=A(),{deal:m,status:w,error:Y}=h(a=>a.deals),s=new URLSearchParams(location.search).get("deal_id"),r=m==null?void 0:m.Deal,d=I(),c=d==null?void 0:d.pathname;h(a=>a.user.isUserLoggedIn),H.useEffect(()=>{o(L(s))},[o,s]);const j=()=>{i(`/deal-refused?deal_id=${s}`)},_=async a=>{const f={status:"accept",reason_for_refusal:""};try{const n=await o(x({dealId:a,dealUpdate:f}));console.log("resultAction",n),x.fulfilled.match(n)?i("/deal-confirmed"):console.error("Validation failed:",n.payload)}catch(n){console.error("An error occurred:",n)}},N=async()=>{try{(await o(D(s))).payload.code===201?i("/request-sent"):i("/auth?login")}catch{P.fire({icon:"error",title:"Oops...",text:"Failed to send request. Please try again."})}},k=()=>{N()},C=()=>{i("/")};return w==="loading"?e.jsx(O,{}):e.jsx("div",{className:"flex flex-col w-full items-start relative bg-primary-background",children:e.jsxs("div",{className:"flex-col w-full items-start gap-[15px] px-[35px] py-[15px] flex relative flex-[0_0_auto]",children:[c!=="/deal_details"&&e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"relative self-stretch mt-[-1.00px] font-heading-6 font-[number:var(--heading-6-font-weight)] text-primary-color text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] [font-style:var(--heading-6-font-style)]",children:t("artisanConfirmThe.thank_you")}),e.jsx("p",{className:"relative self-stretch font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-primary-text-color text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] [font-style:var(--body-medium-regular-font-style)]",children:t("artisanConfirmThe.confirmation_notice")}),e.jsx("img",{className:"relative self-stretch w-full h-px object-cover",alt:"Line",src:l})]}),e.jsx(V,{pictures:(r==null?void 0:r.deal_images)||[B]}),e.jsx("p",{className:"relative self-stretch font-heading-6 font-[number:var(--heading-6-font-weight)] text-primary-color text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] [font-style:var(--heading-6-font-style)]",children:(r==null?void 0:r.deal_title)||t("artisanConfirmThe.wine_crates")}),e.jsx("div",{className:"flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]",children:e.jsxs("div",{className:"inline-flex items-center gap-2.5 relative flex-[0_0_auto]",children:[e.jsx(v,{className:"!relative !w-5 !h-5",color:"#1B4F4A"}),e.jsx("p",{className:"relative w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]",children:(r==null?void 0:r.deal_duration)||t("artisanConfirmThe.deal_duration")})]})}),e.jsxs("div",{className:"flex self-stretch w-full items-center gap-2.5 relative flex-[0_0_auto]",children:[e.jsx(R,{className:"!relative !w-5 !h-5"}),e.jsx("p",{className:"relative w-full font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] break-words [font-style:var(--body-small-regular-font-style)]",children:(r==null?void 0:r.location)||t("artisanConfirmThe.location")})]}),e.jsx("img",{className:"relative self-stretch w-full h-px object-cover",alt:"Line",src:l}),e.jsxs("div",{className:"inline-flex items-center gap-[15px] relative flex-[0_0_auto]",children:[e.jsx("img",{className:"relative w-[50px] h-[50px] object-cover rounded-md",alt:"Organizer",src:((u=r==null?void 0:r.organiser)==null?void 0:u.organiser_image)||F}),e.jsxs("div",{className:"inline-flex flex-col items-start relative flex-[0_0_auto]",children:[e.jsx("div",{className:"relative w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]",children:t("artisanConfirmThe.organized_by")}),e.jsx("div",{className:"relative w-fit [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap",children:(r==null?void 0:r.organiser.name)||"Abraham Thomas"}),e.jsx("div",{className:"inline-flex h-5 items-center gap-2.5 relative",children:e.jsx(q,{className:"!flex-[0_0_auto]",rating:(r==null?void 0:r.organiser.rating)||"four-star",size:"small"})})]})]}),e.jsx("div",{className:"relative self-stretch font-body-large-bold font-[number:var(--body-large-bold-font-weight)] text-primary-color text-[length:var(--body-large-bold-font-size)] tracking-[var(--body-large-bold-letter-spacing)] leading-[var(--body-large-bold-line-height)] [font-style:var(--body-large-bold-font-style)]",children:t("artisanConfirmThe.about_deal")}),e.jsxs("p",{className:"relative self-stretch [font-family:'Inter',Helvetica] font-normal text-transparent text-base tracking-[0] leading-6",children:[e.jsx("span",{className:"text-[#637381] font-body-medium-regular [font-style:var(--body-medium-regular-font-style)] font-[number:var(--body-medium-regular-font-weight)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] text-[length:var(--body-medium-regular-font-size)]",children:(r==null?void 0:r.deal_description)||t("artisanConfirmThe.deal_description")}),e.jsx("span",{className:"font-bold text-[#1b4f4a] underline",children:t("artisanConfirmThe.read_more")})]}),e.jsx("img",{className:"relative self-stretch w-full h-px object-cover",alt:"Line",src:l}),e.jsxs("div",{className:"flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]",children:[e.jsx(g,{className:"!relative !w-5 !h-5"}),e.jsx("p",{className:"relative w-fit mt-[-1.00px] font-body-large-bold font-[number:var(--body-large-bold-font-weight)] text-primary-color text-[length:var(--body-large-bold-font-size)] tracking-[var(--body-large-bold-letter-spacing)] leading-[var(--body-large-bold-line-height)] whitespace-nowrap [font-style:var(--body-large-bold-font-style)]",children:t("artisanConfirmThe.what_customers_receive")})]}),e.jsxs("p",{className:"relative self-stretch [font-family:'Inter',Helvetica] font-normal text-transparent text-base tracking-[0] leading-6",children:[e.jsx("span",{className:"text-[#637381] font-body-medium-regular [font-style:var(--body-medium-regular-font-style)] font-[number:var(--body-medium-regular-font-weight)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] text-[length:var(--body-medium-regular-font-size)]",children:(r==null?void 0:r["what's included"])||t("artisanConfirmThe.customers_receive")}),e.jsx("span",{className:"font-bold text-[#1b4f4a] underline",children:t("artisanConfirmThe.read_more")})]}),e.jsx("img",{className:"relative self-stretch w-full h-px object-cover",alt:"Line",src:l}),e.jsxs("div",{className:"flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]",children:[e.jsx(g,{className:"!relative !w-5 !h-5"}),e.jsx("p",{className:"relative w-fit mt-[-1.00px] font-body-large-bold font-[number:var(--body-large-bold-font-weight)] text-primary-color text-[length:var(--body-large-bold-font-size)] tracking-[var(--body-large-bold-letter-spacing)] leading-[var(--body-large-bold-line-height)] whitespace-nowrap [font-style:var(--body-large-bold-font-style)]",children:t("artisanConfirmThe.delivery_info")})]}),e.jsxs("div",{className:"flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]",children:[e.jsx(v,{className:"!relative !w-5 !h-5",color:"#1B4F4A"}),e.jsx("p",{className:"relative w-fit mt-[-1.00px] font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-primary-text-color text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] whitespace-nowrap [font-style:var(--body-medium-regular-font-style)]",children:(r==null?void 0:r.delivery_date)||t("artisanConfirmThe.delivery_date")})]}),e.jsxs("div",{className:"flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]",children:[e.jsx(E,{className:"!relative !w-5 !h-5",color:"#1B4F4A"}),e.jsxs("p",{className:"relative flex-1 mt-[-1.00px] font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-transparent text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] [font-style:var(--body-medium-regular-font-style)]",children:[e.jsx("span",{className:"text-[#1b4f4a] font-body-medium-regular [font-style:var(--body-medium-regular-font-style)] font-[number:var(--body-medium-regular-font-weight)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] text-[length:var(--body-medium-regular-font-size)]",children:(r==null?void 0:r.delivery_location)||t("artisanConfirmThe.delivery_location")}),e.jsx("span",{className:"text-[#637381] font-body-medium-regular [font-style:var(--body-medium-regular-font-style)] font-[number:var(--body-medium-regular-font-weight)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] text-[length:var(--body-medium-regular-font-size)]",children:(r==null?void 0:r.address)||t("artisanConfirmThe.address")})]})]}),e.jsxs("div",{className:"flex-col items-start gap-[15px] p-[15px] self-stretch w-full bg-white rounded-[5px] flex relative flex-[0_0_auto]",children:[e.jsxs("div",{className:"flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]",children:[e.jsx(g,{className:"!relative !w-5 !h-5"}),e.jsx("div",{className:"relative w-fit mt-[-1.00px] font-body-large-bold font-[number:var(--body-large-bold-font-weight)] text-primary-color text-[length:var(--body-large-bold-font-size)] tracking-[var(--body-large-bold-letter-spacing)] leading-[var(--body-large-bold-line-height)] whitespace-nowrap [font-style:var(--body-large-bold-font-style)]",children:t("artisanConfirmThe.good_deal")})]}),e.jsx("img",{className:"relative self-stretch w-full h-px object-cover",alt:"Line",src:l}),r==null?void 0:r.products.map((a,f)=>e.jsxs("div",{className:"flex flex-col items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]",children:[e.jsx("div",{className:"flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]",children:e.jsx("p",{className:"relative w-fit mt-[-1.00px] font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-primary-color text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] whitespace-nowrap [font-style:var(--body-medium-regular-font-style)]",children:a.product_name})}),e.jsxs("div",{className:"flex flex-col items-start justify-center gap-[5px] relative self-stretch w-full flex-[0_0_auto]",children:[e.jsxs("p",{className:"relative w-fit mt-[-1.00px] font-body-small-medium font-[number:var(--body-small-medium-font-weight)] text-orange text-[length:var(--body-small-medium-font-size)] tracking-[var(--body-small-medium-letter-spacing)] leading-[var(--body-small-medium-line-height)] whitespace-nowrap [font-style:var(--body-small-medium-font-style)]",children:[t("artisanConfirmThe.min_quantity"),":"," ",a.min_quantity_per_order]}),e.jsxs("p",{className:"relative w-fit font-body-small-medium font-[number:var(--body-small-medium-font-weight)] text-secondary-color text-[length:var(--body-small-medium-font-size)] tracking-[var(--body-small-medium-letter-spacing)] leading-[var(--body-small-medium-line-height)] whitespace-nowrap [font-style:var(--body-small-medium-font-style)]",children:[t("artisanConfirmThe.max_quantity"),":"," ",a.max_quantity_per_order]}),e.jsxs("div",{className:"relative w-fit font-body-small-medium font-[number:var(--body-small-medium-font-weight)] text-primary-color text-[length:var(--body-small-medium-font-size)] tracking-[var(--body-small-medium-letter-spacing)] leading-[var(--body-small-medium-line-height)] whitespace-nowrap [font-style:var(--body-small-medium-font-style)]",children:[t("artisanConfirmThe.total_stock"),": ",a.total_stock]})]}),e.jsx("div",{className:"items-center justify-end gap-[70px] self-stretch w-full flex relative flex-[0_0_auto]",children:e.jsx("div",{className:"inline-flex flex-col items-end relative flex-[0_0_auto]",children:e.jsxs("div",{className:"relative w-fit mt-[-1.00px] font-body-large-regular font-[number:var(--body-large-regular-font-weight)] text-primary-color text-[length:var(--body-large-regular-font-size)] text-right tracking-[var(--body-large-regular-letter-spacing)] leading-[var(--body-large-regular-line-height)] whitespace-nowrap [font-style:var(--body-large-regular-font-style)]",children:["€",a.price_per_unit," ",t("artisanConfirmThe.per_unit")]})})}),e.jsx("img",{className:"relative self-stretch w-full h-px object-cover",alt:"Line",src:l})]},f)),c!=="/deal_details"&&e.jsxs("div",{className:"flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]",children:[e.jsxs("div",{onClick:j,className:"gap-2 bg-white border border-solid border-red shadow-shadow-1 flex items-center justify-center px-6 py-3 relative flex-1 grow rounded-md cursor-pointer",children:[e.jsx(p,{className:"!relative !w-5 !h-5 !ml-[-6.75px]"}),e.jsx("button",{className:"all-[unset] box-border mr-[-6.75px] text-red relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-base text-center tracking-[0] leading-6 whitespace-nowrap",children:t("artisanConfirmThe.refuse")})]}),e.jsxs("div",{onClick:()=>_(s),className:"gap-2.5 bg-primary-color flex items-center justify-center px-6 py-3 relative flex-1 grow rounded-md cursor-pointer",children:[e.jsx(y,{className:"!relative !w-5 !h-5 !ml-[-13.25px]"}),e.jsx("button",{className:"all-[unset] box-border mr-[-13.25px] text-white relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-base text-center tracking-[0] leading-6 whitespace-nowrap",children:t("artisanConfirmThe.confirm")})]})]}),c==="/deal_details"&&e.jsxs("div",{className:"flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]",children:[e.jsxs("div",{onClick:C,className:"gap-2 bg-white border border-solid border-red shadow-shadow-1 flex items-center justify-center px-6 py-3 relative flex-1 grow rounded-md cursor-pointer",children:[e.jsx(p,{className:"!relative !w-5 !h-5 !ml-[-6.75px]"}),e.jsx("button",{className:"all-[unset] box-border mr-[-6.75px] text-red relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-base text-center tracking-[0] leading-6 whitespace-nowrap",children:"Ignore"})]}),e.jsxs("div",{onClick:k,className:"gap-2.5 bg-primary-color flex items-center justify-center px-6 py-3 relative flex-1 grow rounded-md cursor-pointer",children:[e.jsx(y,{className:"!relative !w-5 !h-5 !ml-[-13.25px]"}),e.jsx("button",{className:"all-[unset] box-border mr-[-13.25px] text-white relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-base text-center tracking-[0] leading-6 whitespace-nowrap",children:"Accept"})]})]})]})]})})},me=()=>e.jsx(U,{HEADERHeaderOpenClassName:"![border-right-style:none] ![border-top-style:none] ![border-left-style:none]",HEADERIcon:e.jsx(b,{className:"!relative !w-6 !h-6",color:"#1B4F4A"})});export{me as default};
