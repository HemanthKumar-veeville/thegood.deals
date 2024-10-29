import{a as F,c as U,u as L,d as b,k as M,r as m,aI as O,j as e,C as P,S as V,L as s,Y as $,m as G,ax as w,Z as J,an as K,ah as Y,n as x,ad as Z,aG as k,aH as _,aJ as Q,aK as W}from"./index-oEatpdqh.js";import{C as j}from"./CrossCircle-CZTm-zib.js";import{S as N}from"./Send1-CmvfubtD.js";const X=({HEADERIcon:S=e.jsx(k,{className:"!relative !w-6 !h-6",color:"#1B4F4A"}),HEADERHeaderOpenClassName:ee})=>{var v,y,p;const{t}=F(),o=U(),d=L(),{deal:c,status:C,error:re}=b(a=>a.deals),i=new URLSearchParams(location.search).get("deal_id"),r=c==null?void 0:c.Deal,g=M(),f=g==null?void 0:g.pathname;b(a=>a.user.isUserLoggedIn);const[T,u]=m.useState(!1),[z,h]=m.useState(""),[A,I]=m.useState(null);m.useEffect(()=>{var l;const a=o(O(i)).unwrap();console.log({details:a}),I((l=a==null?void 0:a.Deal)==null?void 0:l.artisan_acc_id)},[o,i]);const E=()=>{d(`/deal-refused?deal_id=${i}`)},H=async a=>{const l={status:"accept",reason_for_refusal:""};try{const n=await o(_({dealId:a,dealUpdate:l}));if(console.log("resultAction",n),_.fulfilled.match(n)){const B=`https://thegood.deals/artisan-validation?deal_id=${a}`;await Q({accountId:A,refreshUrl:B,returnUrl:"https://thegood.deals/deal-confirmed"})}else console.error("Validation failed:",n.payload)}catch(n){console.error("An error occurred:",n)}},q=async()=>{try{const a=await o(W(i));console.log({response:a}),a.payload.code===201?d("/request-sent"):(u(!0),h(a.payload.detail||t("artisanConfirmThe.error_login_required")),d("/auth?login"))}catch{u(!0),h(t("artisanConfirmThe.error_request_failed"))}},D=()=>{q()},R=()=>{d("/")};return C==="loading"?e.jsx(P,{}):e.jsx("div",{className:"flex flex-col w-full items-start relative bg-primary-background",children:e.jsxs("div",{className:"flex-col w-full items-start gap-[15px] px-[35px] py-[15px] flex relative flex-[0_0_auto]",children:[T&&e.jsx(V,{message:z,buttonText:t("waiting_deal.got_it"),onClose:()=>u(!1)}),f!=="/deal_details"&&e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"relative self-stretch mt-[-1.00px] font-heading-6 font-[number:var(--heading-6-font-weight)] text-primary-color text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] [font-style:var(--heading-6-font-style)]",children:t("artisanConfirmThe.thank_you")}),e.jsx("p",{className:"relative self-stretch font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-primary-text-color text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] [font-style:var(--body-medium-regular-font-style)]",children:t("artisanConfirmThe.confirmation_notice")}),e.jsx(s,{})]}),e.jsx($,{pictures:(r==null?void 0:r.deal_images)||[G]}),e.jsx("p",{className:"relative self-stretch font-heading-6 font-[number:var(--heading-6-font-weight)] text-primary-color text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] [font-style:var(--heading-6-font-style)]",children:(r==null?void 0:r.deal_title)||"-"}),e.jsx("div",{className:"flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]",children:e.jsxs("div",{className:"inline-flex items-center gap-2.5 relative flex-[0_0_auto]",children:[e.jsx(w,{className:"!relative !w-5 !h-5",color:"#1B4F4A"}),e.jsx("p",{className:"relative w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]",children:(r==null?void 0:r.deal_duration)||"-"})]})}),e.jsxs("div",{className:"flex self-stretch w-full items-center gap-2.5 relative flex-[0_0_auto]",children:[e.jsx(J,{className:"!relative !w-5 !h-5"}),e.jsx("p",{className:"relative w-full font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] break-words [font-style:var(--body-small-regular-font-style)]",children:(r==null?void 0:r.collection_location)||"-"})]}),e.jsx(s,{}),e.jsxs("div",{className:"inline-flex items-center gap-[15px] relative flex-[0_0_auto]",children:[((v=r==null?void 0:r.organiser)==null?void 0:v.organiser_image)&&e.jsx("img",{className:"relative w-[50px] h-[50px] object-cover rounded-md",alt:"Organizer",src:(y=r==null?void 0:r.organiser)==null?void 0:y.organiser_image}),!((p=r==null?void 0:r.organiser)!=null&&p.organiser_image)&&e.jsx(K,{}),e.jsxs("div",{className:"inline-flex flex-col items-start relative flex-[0_0_auto]",children:[e.jsx("div",{className:"relative w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]",children:t("artisanConfirmThe.organized_by")}),e.jsx("div",{className:"relative w-fit [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap",children:(r==null?void 0:r.organiser.name)||"-"}),e.jsx("div",{className:"inline-flex h-5 items-center gap-2.5 relative",children:e.jsx(Y,{className:"!flex-[0_0_auto]",rating:(r==null?void 0:r.organiser.rating)||t("artisanConfirmThe.organizer_rating"),size:"small"})})]})]}),e.jsx("div",{className:"relative self-stretch font-body-large-bold font-[number:var(--body-large-bold-font-weight)] text-primary-color text-[length:var(--body-large-bold-font-size)] tracking-[var(--body-large-bold-letter-spacing)] leading-[var(--body-large-bold-line-height)] [font-style:var(--body-large-bold-font-style)]",children:t("artisanConfirmThe.about_deal")}),e.jsxs("p",{className:"relative self-stretch [font-family:'Inter',Helvetica] font-normal text-transparent text-base tracking-[0] leading-6",children:[e.jsx("span",{className:"text-[#637381] font-body-medium-regular [font-style:var(--body-medium-regular-font-style)] font-[number:var(--body-medium-regular-font-weight)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] text-[length:var(--body-medium-regular-font-size)]",children:(r==null?void 0:r.deal_description)||"-"}),e.jsx("span",{className:"font-bold text-[#1b4f4a] underline",children:t("artisanConfirmThe.read_more")})]}),e.jsx(s,{}),e.jsxs("div",{className:"flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]",children:[e.jsx(x,{className:"!relative !w-5 !h-5"}),e.jsx("p",{className:"relative w-fit mt-[-1.00px] font-body-large-bold font-[number:var(--body-large-bold-font-weight)] text-primary-color text-[length:var(--body-large-bold-font-size)] tracking-[var(--body-large-bold-letter-spacing)] leading-[var(--body-large-bold-line-height)] whitespace-nowrap [font-style:var(--body-large-bold-font-style)]",children:t("artisanConfirmThe.what_customers_receive")})]}),e.jsxs("p",{className:"relative self-stretch [font-family:'Inter',Helvetica] font-normal text-transparent text-base tracking-[0] leading-6",children:[e.jsx("span",{className:"text-[#637381] font-body-medium-regular [font-style:var(--body-medium-regular-font-style)] font-[number:var(--body-medium-regular-font-weight)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] text-[length:var(--body-medium-regular-font-size)]",children:(r==null?void 0:r["what's included"])||"-"}),e.jsx("span",{className:"font-bold text-[#1b4f4a] underline",children:t("artisanConfirmThe.read_more")})]}),e.jsx(s,{}),e.jsxs("div",{className:"flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]",children:[e.jsx(x,{className:"!relative !w-5 !h-5"}),e.jsx("p",{className:"relative w-fit mt-[-1.00px] font-body-large-bold font-[number:var(--body-large-bold-font-weight)] text-primary-color text-[length:var(--body-large-bold-font-size)] tracking-[var(--body-large-bold-letter-spacing)] leading-[var(--body-large-bold-line-height)] whitespace-nowrap [font-style:var(--body-large-bold-font-style)]",children:t("artisanConfirmThe.delivery_info")})]}),e.jsxs("div",{className:"flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]",children:[e.jsx(w,{className:"!relative !w-5 !h-5",color:"#1B4F4A"}),e.jsx("p",{className:"text-wrap relative w-fit mt-[-1.00px] font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-primary-text-color text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] whitespace-nowrap [font-style:var(--body-medium-regular-font-style)]",children:(r==null?void 0:r.collection_date)||"-"})]}),e.jsxs("div",{className:"flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]",children:[e.jsx(Z,{className:"!relative !w-5 !h-5",color:"#1B4F4A"}),e.jsx("p",{className:"relative flex-1 mt-[-1.00px] font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-transparent text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] [font-style:var(--body-medium-regular-font-style)]",children:e.jsx("span",{className:"text-[#1b4f4a] font-body-medium-regular [font-style:var(--body-medium-regular-font-style)] font-[number:var(--body-medium-regular-font-weight)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] text-[length:var(--body-medium-regular-font-size)]",children:(r==null?void 0:r.collection_location)||"-"})})]}),e.jsxs("div",{className:"flex-col items-start gap-[15px] p-[15px] self-stretch w-full bg-white rounded-[5px] flex relative flex-[0_0_auto]",children:[e.jsxs("div",{className:"flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]",children:[e.jsx(x,{className:"!relative !w-5 !h-5"}),e.jsx("div",{className:"relative w-fit mt-[-1.00px] font-body-large-bold font-[number:var(--body-large-bold-font-weight)] text-primary-color text-[length:var(--body-large-bold-font-size)] tracking-[var(--body-large-bold-letter-spacing)] leading-[var(--body-large-bold-line-height)] whitespace-nowrap [font-style:var(--body-large-bold-font-style)]",children:t("artisanConfirmThe.good_deal")})]}),e.jsx(s,{}),r==null?void 0:r.products.map((a,l)=>e.jsxs("div",{className:"flex flex-col items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]",children:[e.jsx("div",{className:"flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]",children:e.jsx("p",{className:"relative w-fit mt-[-1.00px] font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-primary-color text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] whitespace-nowrap [font-style:var(--body-medium-regular-font-style)]",children:a.product_name})}),e.jsxs("div",{className:"flex flex-col items-start justify-center gap-[5px] relative self-stretch w-full flex-[0_0_auto]",children:[e.jsxs("p",{className:"relative w-fit mt-[-1.00px] font-body-small-medium font-[number:var(--body-small-medium-font-weight)] text-orange text-[length:var(--body-small-medium-font-size)] tracking-[var(--body-small-medium-letter-spacing)] leading-[var(--body-small-medium-line-height)] whitespace-nowrap [font-style:var(--body-small-medium-font-style)]",children:[t("artisanConfirmThe.min_quantity"),":"," ",a.min_quantity_per_order]}),e.jsxs("p",{className:"relative w-fit font-body-small-medium font-[number:var(--body-small-medium-font-weight)] text-secondary-color text-[length:var(--body-small-medium-font-size)] tracking-[var(--body-small-medium-letter-spacing)] leading-[var(--body-small-medium-line-height)] whitespace-nowrap [font-style:var(--body-small-medium-font-style)]",children:[t("artisanConfirmThe.max_quantity"),":"," ",a.max_quantity_per_order]}),e.jsxs("div",{className:"relative w-fit font-body-small-medium font-[number:var(--body-small-medium-font-weight)] text-primary-color text-[length:var(--body-small-medium-font-size)] tracking-[var(--body-small-medium-letter-spacing)] leading-[var(--body-small-medium-line-height)] whitespace-nowrap [font-style:var(--body-small-medium-font-style)]",children:[t("artisanConfirmThe.total_stock"),": ",a.total_stock]})]}),e.jsx("div",{className:"items-center justify-end gap-[70px] self-stretch w-full flex relative flex-[0_0_auto]",children:e.jsx("div",{className:"inline-flex flex-col items-end relative flex-[0_0_auto]",children:e.jsxs("div",{className:"relative w-fit mt-[-1.00px] font-body-large-regular font-[number:var(--body-large-regular-font-weight)] text-primary-color text-[length:var(--body-large-regular-font-size)] text-right tracking-[var(--body-large-regular-letter-spacing)] leading-[var(--body-large-regular-line-height)] whitespace-nowrap [font-style:var(--body-large-regular-font-style)]",children:["€",a.price_per_unit," ",t("artisanConfirmThe.per_unit")]})})}),e.jsx(s,{})]},l)),f!=="/deal_details"&&e.jsxs("div",{className:"flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]",children:[e.jsxs("div",{onClick:E,className:"gap-2 bg-white border border-solid border-redred shadow-shadow-1 flex items-center justify-center px-6 py-3 relative flex-1 grow rounded-md cursor-pointer",children:[e.jsx(j,{className:"!relative !w-5 !h-5 !ml-[-6.75px]",fill:"#F23030"}),e.jsx("button",{className:"all-[unset] box-border mr-[-6.75px] text-redred relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-base text-center tracking-[0] leading-6 whitespace-nowrap",children:t("artisanConfirmThe.refuse")})]}),e.jsxs("div",{onClick:()=>H(i),className:"gap-2.5 bg-primary-color flex items-center justify-center px-6 py-3 relative flex-1 grow rounded-md cursor-pointer",children:[e.jsx(N,{className:"!relative !w-5 !h-5 !ml-[-13.25px]"}),e.jsx("button",{className:"all-[unset] box-border mr-[-13.25px] text-white relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-base text-center tracking-[0] leading-6 whitespace-nowrap",children:t("artisanConfirmThe.confirm")})]})]}),f==="/deal_details"&&e.jsxs("div",{className:"flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]",children:[e.jsxs("div",{onClick:R,className:"gap-2 bg-white border border-solid border-red shadow-shadow-1 flex items-center justify-center px-6 py-3 relative flex-1 grow rounded-md cursor-pointer",children:[e.jsx(j,{className:"!relative !w-5 !h-5 !ml-[-6.75px]"}),e.jsx("button",{className:"all-[unset] box-border mr-[-6.75px] text-red relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-base text-center tracking-[0] leading-6 whitespace-nowrap",children:t("artisanConfirmThe.ignore")})]}),e.jsxs("div",{onClick:D,className:"gap-2.5 bg-primary-color flex items-center justify-center px-6 py-3 relative flex-1 grow rounded-md cursor-pointer",children:[e.jsx(N,{className:"!relative !w-5 !h-5 !ml-[-13.25px]"}),e.jsx("button",{className:"all-[unset] box-border mr-[-13.25px] text-white relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-base text-center tracking-[0] leading-6 whitespace-nowrap",children:t("artisanConfirmThe.accept")})]})]})]})]})})},ne=()=>e.jsx(X,{HEADERHeaderOpenClassName:"![border-right-style:none] ![border-top-style:none] ![border-left-style:none]",HEADERIcon:e.jsx(k,{className:"!relative !w-6 !h-6",color:"#1B4F4A"})});export{ne as default};
