import{P as C,j as e,u as k,a as L,c as T,r as d,g as D,Q as O,C as v,N as S,L as o,k as A}from"./index-vUJNZ4sz.js";import{S as B}from"./SizeXlCorner-WWeOVCgF.js";import{C as E}from"./ChevronUp-BOCuY9Ms.js";import{S as I}from"./SuccessAlert-D4knHKwT.js";import{W as q}from"./Warning1-WSVJEZuU.js";import"./InfoCircle8-qOarFM8F.js";import"./CheckmarkCircle1-B_75opgi.js";const y=({color:f="#111928",className:h})=>e.jsx("svg",{className:`${h}`,fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M12 17.1C11.775 17.1 11.5875 17.025 11.4 16.875L2.77498 8.40001C2.43748 8.06251 2.43748 7.53751 2.77498 7.20001C3.11248 6.86251 3.63748 6.86251 3.97498 7.20001L12 15.0375L20.025 7.12501C20.3625 6.78751 20.8875 6.78751 21.225 7.12501C21.5625 7.46251 21.5625 7.98751 21.225 8.32501L12.6 16.8C12.4125 16.9875 12.225 17.1 12 17.1Z",fill:f})});y.propTypes={color:C.string};const W=({dealId:f,dealType:h})=>{var u;const g=k(),{t:s}=L(),j=T(),p=new URLSearchParams(location.search),n=p.get("deal_id"),r=p.get("is_creator"),[x,w]=d.useState({}),{orders:l,orderStatus:m,orderError:z}=D(t=>t.orders);console.log({orders:l});const c=((u=l==null?void 0:l.Orders)==null?void 0:u.length)>0?l==null?void 0:l.Orders:null;d.useEffect(()=>{j(O({dealId:n,dealType:r==="true"?"created":"invited"}))},[]);const b=t=>{w(i=>({...i,[t]:!i[t]}))},N=()=>{console.log(r),g(r==="true"?"/admin-active-deal?deal_id="+n+"&is_creator="+r:"/guest-deal-view?deal_id="+n+"&is_creator="+r)};return d.useEffect(()=>{window.scrollTo(0,0)},[]),m==="loading"?e.jsx(v,{}):(console.log("ordersState",c),e.jsxs("div",{className:"flex flex-col w-full h-full items-start relative bg-primary-background mx-auto",children:[m==="succeeded"&&e.jsxs("div",{className:"flex flex-col w-full items-start gap-4 px-8 py-4 relative",children:[e.jsx("div",{className:"flex items-center gap-3 pt-0 px-0 relative self-stretch w-full border-b border-stroke cursor-pointer",onClick:N,children:e.jsxs("div",{className:"inline-flex items-center gap-2",children:[e.jsx(S,{className:"w-4.5 h-4.5",color:"#637381"}),e.jsx("div",{className:"mt-[-1px] font-medium text-primary-text-color text-base",children:s("orders.back_to_deal")})]})}),e.jsx("img",{className:"self-stretch w-full h-px object-cover",alt:s("orders.line_alt"),src:o}),e.jsx("div",{className:"relative self-stretch font-semibold text-primary-color text-2xl",children:s("orders.my_orders")}),c==null?void 0:c.map(t=>e.jsxs("div",{children:[e.jsxs("div",{className:"inline-flex items-center justify-between w-full gap-4 cursor-pointer mt-3",onClick:()=>b(t.participant_name),children:[e.jsxs("div",{className:"flex gap-5",children:[e.jsx(B,{className:"h-14 w-14",divClassName:"tracking-0 text-lg font-semibold left-2 leading-10 top-1",text:t.participant_name.split(" ")[0].charAt(0).toUpperCase()+"."+t.participant_name.split(" ")[1].charAt(0).toUpperCase()+"."}),e.jsxs("div",{className:"inline-flex flex-col items-start gap-1.5",children:[e.jsx("div",{className:"mt-[-1px] font-medium text-primary-color text-base",children:t.participant_name}),e.jsxs("div",{className:"inline-flex items-center gap-2.5",children:[e.jsx(A,{className:"w-5 h-5"}),e.jsxs("p",{className:"mt-[-1px] font-normal text-primary-text-color text-sm leading-5.5",children:[t.orders_count," ",s("orders.order_on_deal")]})]})]})]}),x[t.participant_name]?e.jsx(E,{className:"w-6 h-6",color:"#1B4F4A"}):e.jsx(y,{className:"w-6 h-6",color:"#1B4F4A"})]}),e.jsx("div",{className:`transition-all duration-500 overflow-hidden ${x[t.participant_name]?"max-h-full":"max-h-0"}`,children:e.jsxs("div",{className:"flex flex-col items-start gap-4 pt-0 pb-4 px-4 bg-whitewhite mt-3 w-full",children:[e.jsx("img",{className:"self-stretch w-full h-px object-cover",alt:s("orders.line_alt"),src:o}),e.jsx("div",{className:`transition-all duration-500 overflow-hidden ${x[t.participant_name]?"max-h-full":"max-h-0"}`,children:t.orders.map(i=>e.jsxs("div",{className:"flex flex-col items-start gap-4 pt-0 pb-4 px-4 bg-whitewhite mt-3 w-full",children:[i.products.map((a,_)=>e.jsxs("div",{className:"flex flex-col items-start gap-1.5 self-stretch",children:[e.jsx("p",{className:"mt-[-1px] [font-family:'Inter-Regular',Helvetica] font-normal text-primary-color text-base tracking-[0] leading-6",children:a.product_title}),e.jsx("div",{className:"flex items-center justify-between gap-2.5 self-stretch",children:e.jsxs("div",{className:"flex items-center justify-between w-full",children:[e.jsxs("p",{className:"mt-[-1px] font-semibold text-secondary-color text-base",children:[a.product_quantity," ",s("orders.products")]}),e.jsxs("p",{className:"mt-[-1px] font-semibold text-secondary-color text-base text-right",children:["€ ",a.product_price," x"," ",a.product_quantity," = €"," ",a.product_price*a.product_quantity]})]})})]},_)),e.jsxs("div",{className:"flex flex-col items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]",children:[e.jsxs("div",{className:"flex items-center justify-between w-full",children:[e.jsx("p",{className:"font-body-extra-small-text-regular font-[number:var(--body-extra-small-text-regular-font-weight)] text-primary-text-color text-[length:var(--body-extra-small-text-regular-font-size)] text-center tracking-[var(--body-extra-small-text-regular-letter-spacing)] leading-[var(--body-extra-small-text-regular-line-height)] whitespace-nowrap [font-style:var(--body-extra-small-text-regular-font-style)]",children:s("orders.service_fees")}),e.jsxs("p",{className:"font-semibold text-primary-color text-sm text-right",children:[t.service_fees," €"]})]}),e.jsxs("div",{className:"flex items-center justify-between w-full",children:[e.jsx("p",{className:"font-body-extra-small-text-regular font-[number:var(--body-extra-small-text-regular-font-weight)] text-primary-text-color text-[length:var(--body-extra-small-text-regular-font-size)] text-center tracking-[var(--body-extra-small-text-regular-letter-spacing)] leading-[var(--body-extra-small-text-regular-line-height)] whitespace-nowrap [font-style:var(--body-extra-small-text-regular-font-style)]",children:s("orders.payment_fees")}),e.jsxs("p",{className:"font-semibold text-primary-color text-sm text-right",children:[t.payment_fees," €"]})]}),e.jsxs("div",{className:"flex items-center justify-between w-full",children:[e.jsx("p",{className:"font-body-extra-small-text-regular font-[number:var(--body-extra-small-text-regular-font-weight)] text-primary-text-color text-[length:var(--body-extra-small-text-regular-font-size)] text-center tracking-[var(--body-extra-small-text-regular-letter-spacing)] leading-[var(--body-extra-small-text-regular-line-height)] whitespace-nowrap [font-style:var(--body-extra-small-text-regular-font-style)]",children:s("orders.delivery_fees")}),e.jsx("p",{className:"font-semibold text-primary-color text-sm text-right",children:t.delivery_fees})]})]}),e.jsx("img",{className:"self-stretch w-full h-px object-cover",alt:s("orders.line_alt"),src:o}),e.jsxs("div",{className:"flex items-end justify-between self-stretch",children:[e.jsx("div",{className:"flex items-center gap-2.5 grow",children:e.jsx("div",{className:"font-semibold text-primary-color text-lg",children:s("orders.total")})}),e.jsx("div",{className:"inline-flex flex-col items-end",children:e.jsxs("div",{className:"font-semibold text-primary-color text-lg text-right",children:["€ ",t==null?void 0:t.total_ttc]})})]}),e.jsx("img",{className:"self-stretch w-full h-px object-cover",alt:s("orders.line_alt"),src:o})]},i.order_id))})]})}),e.jsx("img",{className:"self-stretch w-full h-px object-cover mt-3",alt:s("orders.line_alt"),src:o})]},t.participant_id)),(l==null?void 0:l.message)&&e.jsx("div",{className:"w-full",children:e.jsx(I,{className:"!flex !bg-cyancyan-light-3 w-[100%]",divClassName:"!tracking-[0] !text-sm !flex-1 ![white-space:unset] ![font-style:unset] !font-medium ![font-family:'Inter',Helvetica] !leading-5 !w-[unset]",frameClassName:"!flex-1 !flex !grow",groupClassName:"!bg-cyancyan",icon:e.jsx(q,{className:"!absolute !w-3 !h-3 !top-1 !left-1",color:"white"}),style:"three",text:l==null?void 0:l.message})})]}),m==="loading"&&e.jsx(v,{})]}))};export{W as default};