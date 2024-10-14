import{a as q,c as D,u as R,d as p,k as B,r as u,am as F,j as e,C as M,L as l,I as U,m as O,af as w,M as P,a3 as V,n as h,$,ak as C,al as j,an as G}from"./index-Dai7qyE_.js";import{C as _}from"./CrossCircle-AM57e4_7.js";import{S as N}from"./Send1-C5LXMkLP.js";import{U as J}from"./UserAlt-CXtM_TAD.js";const K=({HEADERIcon:Q=e.jsx(C,{className:"!relative !w-6 !h-6",color:"#1B4F4A"}),HEADERHeaderOpenClassName:W})=>{var v,y,b;const{t:a}=q(),o=D(),s=R(),{deal:m,status:k,error:X}=p(t=>t.deals),i=new URLSearchParams(location.search).get("deal_id"),r=m==null?void 0:m.Deal,d=B(),c=d==null?void 0:d.pathname;p(t=>t.user.isUserLoggedIn);const[T,f]=u.useState(!1),[z,x]=u.useState("");u.useEffect(()=>{o(F(i))},[o,i]);const A=()=>{s(`/deal-refused?deal_id=${i}`)},I=async t=>{const g={status:"accept",reason_for_refusal:""};try{const n=await o(j({dealId:t,dealUpdate:g}));console.log("resultAction",n),j.fulfilled.match(n)?s("/deal-confirmed"):console.error("Validation failed:",n.payload)}catch(n){console.error("An error occurred:",n)}},E=async()=>{try{const t=await o(G(i));console.log({response:t}),t.payload.code===201?s("/request-sent"):(f(!0),x(t.payload.detail||a("artisanConfirmThe.error_login_required")),s("/auth?login"))}catch{f(!0),x(a("artisanConfirmThe.error_request_failed"))}},H=()=>{E()},L=()=>{s("/")};return k==="loading"?e.jsx(M,{}):e.jsx("div",{className:"flex flex-col w-full items-start relative bg-primary-background",children:e.jsxs("div",{className:"flex-col w-full items-start gap-[15px] px-[35px] py-[15px] flex relative flex-[0_0_auto]",children:[T&&e.jsx(ShowCustomErrorModal,{message:z,buttonText:a("waiting_deal.got_it"),onClose:()=>f(!1)}),c!=="/deal_details"&&e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"relative self-stretch mt-[-1.00px] font-heading-6 font-[number:var(--heading-6-font-weight)] text-primary-color text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] [font-style:var(--heading-6-font-style)]",children:a("artisanConfirmThe.thank_you")}),e.jsx("p",{className:"relative self-stretch font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-primary-text-color text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] [font-style:var(--body-medium-regular-font-style)]",children:a("artisanConfirmThe.confirmation_notice")}),e.jsx("img",{className:"relative self-stretch w-full h-px object-cover",alt:"Line",src:l})]}),e.jsx(U,{pictures:(r==null?void 0:r.deal_images)||[O]}),e.jsx("p",{className:"relative self-stretch font-heading-6 font-[number:var(--heading-6-font-weight)] text-primary-color text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] [font-style:var(--heading-6-font-style)]",children:(r==null?void 0:r.deal_title)||a("artisanConfirmThe.wine_crates")}),e.jsx("div",{className:"flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]",children:e.jsxs("div",{className:"inline-flex items-center gap-2.5 relative flex-[0_0_auto]",children:[e.jsx(w,{className:"!relative !w-5 !h-5",color:"#1B4F4A"}),e.jsx("p",{className:"relative w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]",children:(r==null?void 0:r.deal_duration)||a("artisanConfirmThe.deal_duration")})]})}),e.jsxs("div",{className:"flex self-stretch w-full items-center gap-2.5 relative flex-[0_0_auto]",children:[e.jsx(P,{className:"!relative !w-5 !h-5"}),e.jsx("p",{className:"relative w-full font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] break-words [font-style:var(--body-small-regular-font-style)]",children:(r==null?void 0:r.location)||a("artisanConfirmThe.location")})]}),e.jsx("img",{className:"relative self-stretch w-full h-px object-cover",alt:"Line",src:l}),e.jsxs("div",{className:"inline-flex items-center gap-[15px] relative flex-[0_0_auto]",children:[((v=r==null?void 0:r.organiser)==null?void 0:v.organiser_image)&&e.jsx("img",{className:"relative w-[50px] h-[50px] object-cover rounded-md",alt:"Organizer",src:(y=r==null?void 0:r.organiser)==null?void 0:y.organiser_image}),!((b=r==null?void 0:r.organiser)!=null&&b.organiser_image)&&e.jsx(J,{}),e.jsxs("div",{className:"inline-flex flex-col items-start relative flex-[0_0_auto]",children:[e.jsx("div",{className:"relative w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]",children:a("artisanConfirmThe.organized_by")}),e.jsx("div",{className:"relative w-fit [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap",children:(r==null?void 0:r.organiser.name)||a("artisanConfirmThe.organizer_name")}),e.jsx("div",{className:"inline-flex h-5 items-center gap-2.5 relative",children:e.jsx(V,{className:"!flex-[0_0_auto]",rating:(r==null?void 0:r.organiser.rating)||a("artisanConfirmThe.organizer_rating"),size:"small"})})]})]}),e.jsx("div",{className:"relative self-stretch font-body-large-bold font-[number:var(--body-large-bold-font-weight)] text-primary-color text-[length:var(--body-large-bold-font-size)] tracking-[var(--body-large-bold-letter-spacing)] leading-[var(--body-large-bold-line-height)] [font-style:var(--body-large-bold-font-style)]",children:a("artisanConfirmThe.about_deal")}),e.jsxs("p",{className:"relative self-stretch [font-family:'Inter',Helvetica] font-normal text-transparent text-base tracking-[0] leading-6",children:[e.jsx("span",{className:"text-[#637381] font-body-medium-regular [font-style:var(--body-medium-regular-font-style)] font-[number:var(--body-medium-regular-font-weight)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] text-[length:var(--body-medium-regular-font-size)]",children:(r==null?void 0:r.deal_description)||a("artisanConfirmThe.deal_description")}),e.jsx("span",{className:"font-bold text-[#1b4f4a] underline",children:a("artisanConfirmThe.read_more")})]}),e.jsx("img",{className:"relative self-stretch w-full h-px object-cover",alt:"Line",src:l}),e.jsxs("div",{className:"flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]",children:[e.jsx(h,{className:"!relative !w-5 !h-5"}),e.jsx("p",{className:"relative w-fit mt-[-1.00px] font-body-large-bold font-[number:var(--body-large-bold-font-weight)] text-primary-color text-[length:var(--body-large-bold-font-size)] tracking-[var(--body-large-bold-letter-spacing)] leading-[var(--body-large-bold-line-height)] whitespace-nowrap [font-style:var(--body-large-bold-font-style)]",children:a("artisanConfirmThe.what_customers_receive")})]}),e.jsxs("p",{className:"relative self-stretch [font-family:'Inter',Helvetica] font-normal text-transparent text-base tracking-[0] leading-6",children:[e.jsx("span",{className:"text-[#637381] font-body-medium-regular [font-style:var(--body-medium-regular-font-style)] font-[number:var(--body-medium-regular-font-weight)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] text-[length:var(--body-medium-regular-font-size)]",children:(r==null?void 0:r["what's included"])||a("artisanConfirmThe.customers_receive")}),e.jsx("span",{className:"font-bold text-[#1b4f4a] underline",children:a("artisanConfirmThe.read_more")})]}),e.jsx("img",{className:"relative self-stretch w-full h-px object-cover",alt:"Line",src:l}),e.jsxs("div",{className:"flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]",children:[e.jsx(h,{className:"!relative !w-5 !h-5"}),e.jsx("p",{className:"relative w-fit mt-[-1.00px] font-body-large-bold font-[number:var(--body-large-bold-font-weight)] text-primary-color text-[length:var(--body-large-bold-font-size)] tracking-[var(--body-large-bold-letter-spacing)] leading-[var(--body-large-bold-line-height)] whitespace-nowrap [font-style:var(--body-large-bold-font-style)]",children:a("artisanConfirmThe.delivery_info")})]}),e.jsxs("div",{className:"flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]",children:[e.jsx(w,{className:"!relative !w-5 !h-5",color:"#1B4F4A"}),e.jsx("p",{className:"relative w-fit mt-[-1.00px] font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-primary-text-color text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] whitespace-nowrap [font-style:var(--body-medium-regular-font-style)]",children:(r==null?void 0:r.delivery_date)||a("artisanConfirmThe.delivery_date")})]}),e.jsxs("div",{className:"flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]",children:[e.jsx($,{className:"!relative !w-5 !h-5",color:"#1B4F4A"}),e.jsx("p",{className:"relative flex-1 mt-[-1.00px] font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-transparent text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] [font-style:var(--body-medium-regular-font-style)]",children:e.jsx("span",{className:"text-[#1b4f4a] font-body-medium-regular [font-style:var(--body-medium-regular-font-style)] font-[number:var(--body-medium-regular-font-weight)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] text-[length:var(--body-medium-regular-font-size)]",children:(r==null?void 0:r.location)||a("artisanConfirmThe.delivery_location")})})]}),e.jsxs("div",{className:"flex-col items-start gap-[15px] p-[15px] self-stretch w-full bg-white rounded-[5px] flex relative flex-[0_0_auto]",children:[e.jsxs("div",{className:"flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]",children:[e.jsx(h,{className:"!relative !w-5 !h-5"}),e.jsx("div",{className:"relative w-fit mt-[-1.00px] font-body-large-bold font-[number:var(--body-large-bold-font-weight)] text-primary-color text-[length:var(--body-large-bold-font-size)] tracking-[var(--body-large-bold-letter-spacing)] leading-[var(--body-large-bold-line-height)] whitespace-nowrap [font-style:var(--body-large-bold-font-style)]",children:a("artisanConfirmThe.good_deal")})]}),e.jsx("img",{className:"relative self-stretch w-full h-px object-cover",alt:"Line",src:l}),r==null?void 0:r.products.map((t,g)=>e.jsxs("div",{className:"flex flex-col items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]",children:[e.jsx("div",{className:"flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]",children:e.jsx("p",{className:"relative w-fit mt-[-1.00px] font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-primary-color text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] whitespace-nowrap [font-style:var(--body-medium-regular-font-style)]",children:t.product_name})}),e.jsxs("div",{className:"flex flex-col items-start justify-center gap-[5px] relative self-stretch w-full flex-[0_0_auto]",children:[e.jsxs("p",{className:"relative w-fit mt-[-1.00px] font-body-small-medium font-[number:var(--body-small-medium-font-weight)] text-orange text-[length:var(--body-small-medium-font-size)] tracking-[var(--body-small-medium-letter-spacing)] leading-[var(--body-small-medium-line-height)] whitespace-nowrap [font-style:var(--body-small-medium-font-style)]",children:[a("artisanConfirmThe.min_quantity"),":"," ",t.min_quantity_per_order]}),e.jsxs("p",{className:"relative w-fit font-body-small-medium font-[number:var(--body-small-medium-font-weight)] text-secondary-color text-[length:var(--body-small-medium-font-size)] tracking-[var(--body-small-medium-letter-spacing)] leading-[var(--body-small-medium-line-height)] whitespace-nowrap [font-style:var(--body-small-medium-font-style)]",children:[a("artisanConfirmThe.max_quantity"),":"," ",t.max_quantity_per_order]}),e.jsxs("div",{className:"relative w-fit font-body-small-medium font-[number:var(--body-small-medium-font-weight)] text-primary-color text-[length:var(--body-small-medium-font-size)] tracking-[var(--body-small-medium-letter-spacing)] leading-[var(--body-small-medium-line-height)] whitespace-nowrap [font-style:var(--body-small-medium-font-style)]",children:[a("artisanConfirmThe.total_stock"),": ",t.total_stock]})]}),e.jsx("div",{className:"items-center justify-end gap-[70px] self-stretch w-full flex relative flex-[0_0_auto]",children:e.jsx("div",{className:"inline-flex flex-col items-end relative flex-[0_0_auto]",children:e.jsxs("div",{className:"relative w-fit mt-[-1.00px] font-body-large-regular font-[number:var(--body-large-regular-font-weight)] text-primary-color text-[length:var(--body-large-regular-font-size)] text-right tracking-[var(--body-large-regular-letter-spacing)] leading-[var(--body-large-regular-line-height)] whitespace-nowrap [font-style:var(--body-large-regular-font-style)]",children:["€",t.price_per_unit," ",a("artisanConfirmThe.per_unit")]})})}),e.jsx("img",{className:"relative self-stretch w-full h-px object-cover",alt:"Line",src:l})]},g)),c!=="/deal_details"&&e.jsxs("div",{className:"flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]",children:[e.jsxs("div",{onClick:A,className:"gap-2 bg-white border border-solid border-redred shadow-shadow-1 flex items-center justify-center px-6 py-3 relative flex-1 grow rounded-md cursor-pointer",children:[e.jsx(_,{className:"!relative !w-5 !h-5 !ml-[-6.75px]",fill:"#F23030"}),e.jsx("button",{className:"all-[unset] box-border mr-[-6.75px] text-redred relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-base text-center tracking-[0] leading-6 whitespace-nowrap",children:a("artisanConfirmThe.refuse")})]}),e.jsxs("div",{onClick:()=>I(i),className:"gap-2.5 bg-primary-color flex items-center justify-center px-6 py-3 relative flex-1 grow rounded-md cursor-pointer",children:[e.jsx(N,{className:"!relative !w-5 !h-5 !ml-[-13.25px]"}),e.jsx("button",{className:"all-[unset] box-border mr-[-13.25px] text-white relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-base text-center tracking-[0] leading-6 whitespace-nowrap",children:a("artisanConfirmThe.confirm")})]})]}),c==="/deal_details"&&e.jsxs("div",{className:"flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]",children:[e.jsxs("div",{onClick:L,className:"gap-2 bg-white border border-solid border-red shadow-shadow-1 flex items-center justify-center px-6 py-3 relative flex-1 grow rounded-md cursor-pointer",children:[e.jsx(_,{className:"!relative !w-5 !h-5 !ml-[-6.75px]"}),e.jsx("button",{className:"all-[unset] box-border mr-[-6.75px] text-red relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-base text-center tracking-[0] leading-6 whitespace-nowrap",children:a("artisanConfirmThe.ignore")})]}),e.jsxs("div",{onClick:H,className:"gap-2.5 bg-primary-color flex items-center justify-center px-6 py-3 relative flex-1 grow rounded-md cursor-pointer",children:[e.jsx(N,{className:"!relative !w-5 !h-5 !ml-[-13.25px]"}),e.jsx("button",{className:"all-[unset] box-border mr-[-13.25px] text-white relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-base text-center tracking-[0] leading-6 whitespace-nowrap",children:a("artisanConfirmThe.accept")})]})]})]})]})})},ae=()=>e.jsx(K,{HEADERHeaderOpenClassName:"![border-right-style:none] ![border-top-style:none] ![border-left-style:none]",HEADERIcon:e.jsx(C,{className:"!relative !w-6 !h-6",color:"#1B4F4A"})});export{ae as default};
