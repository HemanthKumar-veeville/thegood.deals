import{a as F,c as L,u as U,d as b,l as M,r as m,j as e,C as O,S as P,L as i,_ as V,o as $,az as w,$ as K,ar as G,al as J,p as x,ah as Q,aK as k,aM as W,aL as j,aN as X,aO as Y}from"./index-0nvX_hof.js";import{C as _}from"./CrossCircle-Cg2IKPTT.js";import{S as N}from"./Send1-uWYouaK6.js";import{I as Z}from"./InfoCircle8-DqsAGyqG.js";const S=({HEADERIcon:ee=e.jsx(k,{className:"!relative !w-6 !h-6",color:"#1B4F4A"}),HEADERHeaderOpenClassName:ae})=>{var v,p,y;const{t}=F(),o=L(),d=U(),{deal:c,status:C,error:te}=b(r=>r.deals),n=new URLSearchParams(location.search).get("deal_id"),a=c==null?void 0:c.Deal,g=M(),f=g==null?void 0:g.pathname;b(r=>r.user.isUserLoggedIn);const[z,u]=m.useState(!1),[T,h]=m.useState(""),[A,I]=m.useState(null);m.useEffect(()=>{(async()=>{var s;const l=await o(W(n)).unwrap();console.log({details:l}),I((s=l==null?void 0:l.Deal)==null?void 0:s.artisan_acc_id)})()},[o,n]);const H=()=>{d(`/deal-refused?deal_id=${n}`)},E=async r=>{const l={status:"accept",reason_for_refusal:""};try{const s=await o(j({dealId:r,dealUpdate:l}));if(console.log("resultAction",s),j.fulfilled.match(s)){const B=`https://thegood.deals/artisan-validation?deal_id=${r}`;await X({accountId:A,refreshUrl:B,returnUrl:"https://thegood.deals/deal-confirmed"})}else console.error("Validation failed:",s.payload)}catch(s){console.error("An error occurred:",s)}},D=async()=>{try{const r=await o(Y(n));console.log({response:r}),r.payload.code===201?d("/request-sent"):(u(!0),h(r.payload.detail||t("artisanConfirmThe.error_login_required")),d("/auth?login"))}catch{u(!0),h(t("artisanConfirmThe.error_request_failed"))}},R=()=>{D()},q=()=>{d("/")};return C==="loading"?e.jsx(O,{}):e.jsx("div",{className:"flex flex-col w-full items-start relative bg-primary-background",children:e.jsxs("div",{className:"flex-col w-full items-start gap-[15px] px-[35px] py-[15px] flex relative flex-[0_0_auto]",children:[z&&e.jsx(P,{message:T,buttonText:t("waiting_deal.got_it"),onClose:()=>u(!1)}),f!=="/deal_details"&&e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"relative self-stretch mt-[-1.00px] font-heading-6 font-[number:var(--heading-6-font-weight)] text-primary-color text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] [font-style:var(--heading-6-font-style)]",children:t("artisanConfirmThe.thank_you")}),e.jsx("p",{className:"relative self-stretch font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-primary-text-color text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] [font-style:var(--body-medium-regular-font-style)]",children:t("artisanConfirmThe.confirmation_notice")}),e.jsx(i,{})]}),e.jsx(V,{pictures:(a==null?void 0:a.deal_images)||[$]}),e.jsx("p",{className:"relative self-stretch font-heading-6 font-[number:var(--heading-6-font-weight)] text-primary-color text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] [font-style:var(--heading-6-font-style)]",children:(a==null?void 0:a.deal_title)||"-"}),e.jsx("div",{className:"flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]",children:e.jsxs("div",{className:"inline-flex items-center gap-2.5 relative flex-[0_0_auto]",children:[e.jsx(w,{className:"!relative !w-5 !h-5",color:"#1B4F4A"}),e.jsx("p",{className:"relative w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]",children:(a==null?void 0:a.deal_duration)||"-"})]})}),e.jsxs("div",{className:"flex self-stretch w-full items-center gap-2.5 relative flex-[0_0_auto]",children:[e.jsx(K,{className:"!relative !w-5 !h-5"}),e.jsx("p",{className:"relative w-full font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] break-words [font-style:var(--body-small-regular-font-style)]",children:(a==null?void 0:a.collection_location)||"-"})]}),e.jsx(i,{}),e.jsxs("div",{className:"inline-flex items-center gap-[15px] relative flex-[0_0_auto]",children:[((v=a==null?void 0:a.organiser)==null?void 0:v.organiser_image)&&e.jsx("img",{className:"relative w-[50px] h-[50px] object-cover rounded-md",alt:"Organizer",src:(p=a==null?void 0:a.organiser)==null?void 0:p.organiser_image}),!((y=a==null?void 0:a.organiser)!=null&&y.organiser_image)&&e.jsx(G,{}),e.jsxs("div",{className:"inline-flex flex-col items-start relative flex-[0_0_auto]",children:[e.jsx("div",{className:"relative w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]",children:t("artisanConfirmThe.organized_by")}),e.jsx("div",{className:"relative w-fit [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap",children:(a==null?void 0:a.organiser.name)||"-"}),e.jsx("div",{className:"inline-flex h-5 items-center gap-2.5 relative",children:e.jsx(J,{className:"!flex-[0_0_auto]",rating:(a==null?void 0:a.organiser.rating)||t("artisanConfirmThe.organizer_rating"),size:"small"})})]})]}),e.jsx("div",{className:"relative self-stretch font-body-large-bold font-[number:var(--body-large-bold-font-weight)] text-primary-color text-[length:var(--body-large-bold-font-size)] tracking-[var(--body-large-bold-letter-spacing)] leading-[var(--body-large-bold-line-height)] [font-style:var(--body-large-bold-font-style)]",children:t("artisanConfirmThe.about_deal")}),e.jsxs("p",{className:"relative self-stretch [font-family:'Inter',Helvetica] font-normal text-transparent text-base tracking-[0] leading-6",children:[e.jsx("span",{className:"text-[#637381] font-body-medium-regular [font-style:var(--body-medium-regular-font-style)] font-[number:var(--body-medium-regular-font-weight)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] text-[length:var(--body-medium-regular-font-size)]",children:(a==null?void 0:a.deal_description)||"-"}),e.jsx("span",{className:"font-bold text-[#1b4f4a] underline",children:t("artisanConfirmThe.read_more")})]}),e.jsx(i,{}),e.jsxs("div",{className:"flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]",children:[e.jsx(x,{className:"!relative !w-5 !h-5"}),e.jsx("p",{className:"relative w-fit mt-[-1.00px] font-body-large-bold font-[number:var(--body-large-bold-font-weight)] text-primary-color text-[length:var(--body-large-bold-font-size)] tracking-[var(--body-large-bold-letter-spacing)] leading-[var(--body-large-bold-line-height)] whitespace-nowrap [font-style:var(--body-large-bold-font-style)]",children:t("artisanConfirmThe.what_customers_receive")})]}),e.jsxs("p",{className:"relative self-stretch [font-family:'Inter',Helvetica] font-normal text-transparent text-base tracking-[0] leading-6",children:[e.jsx("span",{className:"text-[#637381] font-body-medium-regular [font-style:var(--body-medium-regular-font-style)] font-[number:var(--body-medium-regular-font-weight)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] text-[length:var(--body-medium-regular-font-size)]",children:(a==null?void 0:a["what's included"])||"-"}),e.jsx("span",{className:"font-bold text-[#1b4f4a] underline",children:t("artisanConfirmThe.read_more")})]}),e.jsx(i,{}),e.jsxs("div",{className:"flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]",children:[e.jsx(x,{className:"!relative !w-5 !h-5"}),e.jsx("p",{className:"relative w-fit mt-[-1.00px] font-body-large-bold font-[number:var(--body-large-bold-font-weight)] text-primary-color text-[length:var(--body-large-bold-font-size)] tracking-[var(--body-large-bold-letter-spacing)] leading-[var(--body-large-bold-line-height)] whitespace-nowrap [font-style:var(--body-large-bold-font-style)]",children:t("artisanConfirmThe.delivery_info")})]}),e.jsxs("div",{className:"flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]",children:[e.jsx(w,{className:"!relative !w-5 !h-5",color:"#1B4F4A"}),e.jsx("p",{className:"text-wrap relative w-fit mt-[-1.00px] font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-primary-text-color text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] whitespace-nowrap [font-style:var(--body-medium-regular-font-style)]",children:(a==null?void 0:a.collection_date)||"-"})]}),e.jsxs("div",{className:"flex items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]",children:[e.jsx(Q,{className:"!relative !w-5 !h-5",color:"#1B4F4A"}),e.jsx("p",{className:"relative flex-1 mt-[-1.00px] font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-transparent text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] [font-style:var(--body-medium-regular-font-style)]",children:e.jsx("span",{className:"text-[#1b4f4a] font-body-medium-regular [font-style:var(--body-medium-regular-font-style)] font-[number:var(--body-medium-regular-font-weight)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] text-[length:var(--body-medium-regular-font-size)]",children:(a==null?void 0:a.collection_location)||"-"})})]}),e.jsxs("div",{className:"flex-col items-start gap-[15px] p-[15px] self-stretch w-full bg-white rounded-[5px] flex relative flex-[0_0_auto]",children:[e.jsxs("div",{className:"flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]",children:[e.jsx(x,{className:"!relative !w-5 !h-5"}),e.jsx("div",{className:"relative w-fit mt-[-1.00px] font-body-large-bold font-[number:var(--body-large-bold-font-weight)] text-primary-color text-[length:var(--body-large-bold-font-size)] tracking-[var(--body-large-bold-letter-spacing)] leading-[var(--body-large-bold-line-height)] whitespace-nowrap [font-style:var(--body-large-bold-font-style)]",children:t("artisanConfirmThe.good_deal")})]}),e.jsx(i,{}),a==null?void 0:a.products.map((r,l)=>e.jsxs("div",{className:"flex flex-col items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]",children:[e.jsx("div",{className:"flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]",children:e.jsx("p",{className:"relative w-fit mt-[-1.00px] font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-primary-color text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] whitespace-nowrap [font-style:var(--body-medium-regular-font-style)]",children:r.product_name})}),e.jsxs("div",{className:"flex flex-col items-start justify-center gap-[5px] relative self-stretch w-full flex-[0_0_auto]",children:[e.jsxs("p",{className:"relative w-fit mt-[-1.00px] font-body-small-medium font-[number:var(--body-small-medium-font-weight)] text-orange text-[length:var(--body-small-medium-font-size)] tracking-[var(--body-small-medium-letter-spacing)] leading-[var(--body-small-medium-line-height)] whitespace-nowrap [font-style:var(--body-small-medium-font-style)]",children:[t("artisanConfirmThe.min_quantity"),":"," ",r.min_quantity_per_order]}),e.jsxs("p",{className:"relative w-fit font-body-small-medium font-[number:var(--body-small-medium-font-weight)] text-secondary-color text-[length:var(--body-small-medium-font-size)] tracking-[var(--body-small-medium-letter-spacing)] leading-[var(--body-small-medium-line-height)] whitespace-nowrap [font-style:var(--body-small-medium-font-style)]",children:[t("artisanConfirmThe.max_quantity"),":"," ",r.max_quantity_per_order]}),e.jsxs("div",{className:"relative w-fit font-body-small-medium font-[number:var(--body-small-medium-font-weight)] text-primary-color text-[length:var(--body-small-medium-font-size)] tracking-[var(--body-small-medium-letter-spacing)] leading-[var(--body-small-medium-line-height)] whitespace-nowrap [font-style:var(--body-small-medium-font-style)]",children:[t("artisanConfirmThe.total_stock"),": ",r.total_stock]})]}),e.jsx("div",{className:"items-center justify-end gap-[70px] self-stretch w-full flex relative flex-[0_0_auto]",children:e.jsx("div",{className:"inline-flex flex-col items-end relative flex-[0_0_auto]",children:e.jsxs("div",{className:"relative w-fit mt-[-1.00px] font-body-large-regular font-[number:var(--body-large-regular-font-weight)] text-primary-color text-[length:var(--body-large-regular-font-size)] text-right tracking-[var(--body-large-regular-letter-spacing)] leading-[var(--body-large-regular-line-height)] whitespace-nowrap [font-style:var(--body-large-regular-font-style)]",children:["€",r.price_per_unit," ",t("artisanConfirmThe.per_unit")]})})}),e.jsx(i,{})]},l)),e.jsxs("div",{className:"flex items-center gap-[15px] relative",children:[e.jsx(Z,{className:"!relative !w-4.5 !h-4.5 cursor-pointer",color:"#2a4e4a"}),e.jsxs("p",{className:"relative flex-1 mt-[-1.00px] [font-family:'Inter-Regular',Helvetica] font-normal text-black text-sm tracking-tight leading-5",children:[e.jsx("span",{className:"[font-family:'Inter-Regular',Helvetica] font-normal text-black text-sm tracking-tight leading-5",children:t("stripeAccount.message.part1")})," ",e.jsx("span",{className:"underline",children:t("stripeAccount.message.kyc")}),e.jsx("span",{className:"[font-family:'Inter-Regular',Helvetica] font-normal text-black text-sm tracking-tight leading-5",children:t("stripeAccount.message.part2")})]})]}),f!=="/deal_details"&&e.jsxs("div",{className:"flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]",children:[e.jsxs("div",{onClick:H,className:"gap-2 bg-white border border-solid border-redred shadow-shadow-1 flex items-center justify-center px-6 py-3 relative flex-1 grow rounded-md cursor-pointer",children:[e.jsx(_,{className:"!relative !w-5 !h-5 !ml-[-6.75px]",fill:"#F23030"}),e.jsx("button",{className:"all-[unset] box-border mr-[-6.75px] text-redred relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-base text-center tracking-[0] leading-6 whitespace-nowrap",children:t("artisanConfirmThe.refuse")})]}),e.jsxs("div",{onClick:()=>E(n),className:"gap-2.5 bg-primary-color flex items-center justify-center px-6 py-3 relative flex-1 grow rounded-md cursor-pointer",children:[e.jsx(N,{className:"!relative !w-5 !h-5 !ml-[-13.25px]"}),e.jsx("button",{className:"all-[unset] box-border mr-[-13.25px] text-white relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-base text-center tracking-[0] leading-6 whitespace-nowrap",children:t("artisanConfirmThe.confirm")})]})]}),f==="/deal_details"&&e.jsxs("div",{className:"flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]",children:[e.jsxs("div",{onClick:q,className:"gap-2 bg-white border border-solid border-red shadow-shadow-1 flex items-center justify-center px-6 py-3 relative flex-1 grow rounded-md cursor-pointer",children:[e.jsx(_,{className:"!relative !w-5 !h-5 !ml-[-6.75px]"}),e.jsx("button",{className:"all-[unset] box-border mr-[-6.75px] text-red relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-base text-center tracking-[0] leading-6 whitespace-nowrap",children:t("artisanConfirmThe.ignore")})]}),e.jsxs("div",{onClick:R,className:"gap-2.5 bg-primary-color flex items-center justify-center px-6 py-3 relative flex-1 grow rounded-md cursor-pointer",children:[e.jsx(N,{className:"!relative !w-5 !h-5 !ml-[-13.25px]"}),e.jsx("button",{className:"all-[unset] box-border mr-[-13.25px] text-white relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-base text-center tracking-[0] leading-6 whitespace-nowrap",children:t("artisanConfirmThe.accept")})]})]})]})]})})},de=()=>e.jsx(S,{HEADERHeaderOpenClassName:"![border-right-style:none] ![border-top-style:none] ![border-left-style:none]",HEADERIcon:e.jsx(k,{className:"!relative !w-6 !h-6",color:"#1B4F4A"})});export{de as default};