import{u as _,a as C,c as k,r as m,d as O,ab as D,ac as S,j as e,C as y,a9 as A,L as i,W as T,o as B}from"./index-Bvyf-SBd.js";import{S as E}from"./SizeXlCorner-CvwPhD1q.js";import{C as I}from"./ChevronDown1-CEc-vTdm.js";import{C as L}from"./ChevronUp-BXS2Ochd.js";import{S as q}from"./SuccessAlert-CuDB8J9I.js";import"./InfoCircle8-BFJZXyOH.js";import"./CheckmarkCircle1-BnptUpek.js";const G=({dealId:z,dealType:U})=>{var u;const j=_(),{t:l}=C(),d=k(),f=new URLSearchParams(location.search),h=f.get("deal_id"),g=f.get("is_creator"),[c,v]=m.useState({}),{orders:s,orderStatus:x,orderError:F}=O(t=>t.orders);console.log({orders:s});const o=((u=s==null?void 0:s.Orders)==null?void 0:u.length)>0?s==null?void 0:s.Orders:null;m.useEffect(()=>{d(h?D({dealId:h,dealType:g==="true"?"created":"invited"}):S())},[]);const b=t=>{v(r=>({...r,[t]:!r[t]}))},w=()=>{console.log(g),j(-1)};return m.useEffect(()=>{window.scrollTo(0,0)},[]),x==="loading"?e.jsx(y,{}):(console.log("ordersState",o),e.jsxs("div",{className:"flex flex-col w-full h-full items-start relative bg-primary-background mx-auto",children:[e.jsxs("div",{className:"flex flex-col w-full items-start gap-4 px-8 py-4 relative",children:[e.jsx("div",{className:"flex items-center gap-3 pt-0 px-0 relative self-stretch w-full border-b border-stroke cursor-pointer",onClick:w,children:e.jsxs("div",{className:"inline-flex items-center gap-2",children:[e.jsx(A,{className:"w-4.5 h-4.5",color:"#637381"}),e.jsx("div",{className:"mt-[-1px] font-medium text-primary-text-color text-base",children:l("orders.back_to_deal")})]})}),e.jsx(i,{}),e.jsx("div",{className:"relative self-stretch font-semibold text-primary-color text-2xl",children:l("orders.my_orders")}),x==="succeeded"&&e.jsxs(e.Fragment,{children:[(s==null?void 0:s.message)&&e.jsx("div",{className:"w-full",children:e.jsx(q,{className:"!flex !bg-cyancyan-light-3 w-[100%]",divClassName:"!tracking-[0] !text-sm !flex-1 ![white-space:unset] ![font-style:unset] !font-medium ![font-family:'Inter',Helvetica] !leading-5 !w-[unset]",frameClassName:"!flex-1 !flex !grow",groupClassName:"!bg-cyancyan",icon:e.jsx(T,{className:"!absolute !w-3 !h-3 !top-1 !left-1",color:"white"}),style:"three",text:l("orders.empty")})}),o==null?void 0:o.map(t=>{var r;return e.jsxs("div",{children:[e.jsxs("div",{className:"inline-flex items-center justify-between w-full gap-4 cursor-pointer mt-3",onClick:()=>b(t.participant_name),children:[e.jsxs("div",{className:"flex gap-5",children:[e.jsx(E,{className:"h-14 w-14",divClassName:"tracking-0 text-lg font-semibold left-2 leading-10 top-1",text:t.participant_name.split(" ")[0].charAt(0).toUpperCase()+"."+t.participant_name.split(" ")[1].charAt(0).toUpperCase()+"."}),e.jsxs("div",{className:"inline-flex flex-col items-start gap-1.5",children:[e.jsx("div",{className:"mt-[-1px] font-medium text-primary-color text-base",children:t.participant_name}),e.jsxs("div",{className:"inline-flex items-center gap-2.5",children:[e.jsx(B,{className:"w-5 h-5"}),e.jsxs("p",{className:"mt-[-1px] font-normal text-primary-text-color text-sm leading-5.5",children:[t.orders_count," ",l("orders.order_on_deal")]})]})]})]}),c[t.participant_name]?e.jsx(L,{className:"w-6 h-6",color:"#1B4F4A"}):e.jsx(I,{className:"w-6 h-6",color:"#1B4F4A"})]}),e.jsx("div",{className:`transition-all duration-500 overflow-hidden ${c[t.participant_name]?"max-h-full":"max-h-0"}`,children:e.jsxs("div",{className:"flex flex-col items-start gap-4 pt-0 pb-4 px-4 bg-whitewhite mt-3 w-full",children:[e.jsx(i,{}),e.jsx("div",{className:`transition-all duration-500 overflow-hidden ${c[t.participant_name]?"max-h-full":"max-h-0"}`,children:(r=t==null?void 0:t.orders)==null?void 0:r.map(n=>{var p;return e.jsxs("div",{className:"flex flex-col items-start gap-4 pt-0 pb-4 px-4 bg-whitewhite mt-3 w-full",children:[(p=n==null?void 0:n.products)==null?void 0:p.map((a,N)=>e.jsxs("div",{className:"flex flex-col items-start gap-1.5 self-stretch",children:[e.jsx("p",{className:"mt-[-1px] [font-family:'Inter-Regular',Helvetica] font-normal text-primary-color text-base tracking-[0] leading-6",children:a.product_title}),e.jsx("div",{className:"flex items-center justify-between gap-2.5 self-stretch",children:e.jsxs("div",{className:"flex items-center justify-between w-full",children:[e.jsxs("p",{className:"mt-[-1px] font-semibold text-secondary-color text-base",children:[a.product_quantity," ",l("orders.products")]}),e.jsxs("p",{className:"mt-[-1px] font-semibold text-secondary-color text-base text-right",children:["€ ",a.product_price," x"," ",a.product_quantity," = €"," ",a.product_price*a.product_quantity]})]})})]},N)),e.jsxs("div",{className:"flex flex-col items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]",children:[e.jsxs("div",{className:"flex items-center justify-between w-full",children:[e.jsx("p",{className:"font-body-extra-small-text-regular font-[number:var(--body-extra-small-text-regular-font-weight)] text-primary-text-color text-[length:var(--body-extra-small-text-regular-font-size)] text-center tracking-[var(--body-extra-small-text-regular-letter-spacing)] leading-[var(--body-extra-small-text-regular-line-height)] whitespace-nowrap [font-style:var(--body-extra-small-text-regular-font-style)]",children:l("orders.service_fees")}),e.jsxs("p",{className:"font-semibold text-primary-color text-sm text-right",children:[t.service_fees," €"]})]}),e.jsxs("div",{className:"flex items-center justify-between w-full",children:[e.jsx("p",{className:"font-body-extra-small-text-regular font-[number:var(--body-extra-small-text-regular-font-weight)] text-primary-text-color text-[length:var(--body-extra-small-text-regular-font-size)] text-center tracking-[var(--body-extra-small-text-regular-letter-spacing)] leading-[var(--body-extra-small-text-regular-line-height)] whitespace-nowrap [font-style:var(--body-extra-small-text-regular-font-style)]",children:l("orders.payment_fees")}),e.jsxs("p",{className:"font-semibold text-primary-color text-sm text-right",children:[t.payment_fees," €"]})]}),e.jsxs("div",{className:"flex items-center justify-between w-full",children:[e.jsx("p",{className:"font-body-extra-small-text-regular font-[number:var(--body-extra-small-text-regular-font-weight)] text-primary-text-color text-[length:var(--body-extra-small-text-regular-font-size)] text-center tracking-[var(--body-extra-small-text-regular-letter-spacing)] leading-[var(--body-extra-small-text-regular-line-height)] whitespace-nowrap [font-style:var(--body-extra-small-text-regular-font-style)]",children:l("orders.delivery_fees")}),e.jsx("p",{className:"font-semibold text-primary-color text-sm text-right",children:t.delivery_fees})]})]}),e.jsx(i,{}),e.jsxs("div",{className:"flex items-end justify-between self-stretch",children:[e.jsx("div",{className:"flex items-center gap-2.5 grow",children:e.jsx("div",{className:"font-semibold text-primary-color text-lg",children:l("orders.total")})}),e.jsx("div",{className:"inline-flex flex-col items-end",children:e.jsxs("div",{className:"font-semibold text-primary-color text-lg text-right",children:["€ ",t==null?void 0:t.total_ttc]})})]}),e.jsx(i,{})]},n.order_id)})})]})}),e.jsx("div",{className:"mt-3",children:e.jsx(i,{})})]},t.participant_id)})]})]}),x==="loading"&&e.jsx(y,{})]}))};export{G as default};
