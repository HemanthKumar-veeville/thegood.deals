import{r as a,a as g,c as w,d as x,a8 as j,j as e,C as N,L as o,u as _,A as k}from"./index-BSh7ZGCM.js";import"./InfoCircle8-B6lPM7WR.js";import{C}from"./ChevronDown1-CeKD485S.js";import{C as E}from"./ChevronUp-Bet3Crdg.js";const I=({orderId:l})=>{var p;const[d,m]=a.useState(!1),i=a.useRef(null),{t:r}=g(),[f,y]=a.useState(!0),h=w(),n=x(t=>t.orders.order),u=x(t=>t.orders.orderStatus),v=x(t=>t.orders.orderError),s=n==null?void 0:n.Orders;a.useEffect(()=>{h(j({orderId:l}))},[h,l]),console.log({orderState:s});const b=()=>{y(t=>!t)};return a.useEffect(()=>{const t=c=>{i.current&&!i.current.contains(c.target)&&m(!1)};return document.addEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)}},[i]),u==="loading"?e.jsx(N,{}):u==="failed"?e.jsx("div",{children:r("order.error",{error:v})}):e.jsxs("div",{children:[e.jsxs("div",{className:"inline-flex items-center justify-between w-full gap-4 cursor-pointer mt-3",onClick:b,children:[e.jsx("div",{className:"flex gap-5",children:e.jsx("div",{className:"inline-flex flex-col items-start gap-1.5",children:e.jsx("div",{className:"font-body-medium-bold font-[number:var(--body-medium-bold-font-weight)] text-primary-color text-[length:var(--body-medium-bold-font-size)] tracking-[var(--body-medium-bold-letter-spacing)] leading-[var(--body-medium-bold-line-height)] whitespace-nowrap [font-style:var(--body-medium-bold-font-style)]",children:r("orders.summary")})})}),f?e.jsx(E,{className:"w-6 h-6",color:"#1B4F4A"}):e.jsx(C,{className:"w-6 h-6",color:"#1B4F4A"})]}),e.jsx("div",{className:`transition-all duration-500 overflow-hidden ${f?"max-h-full":"max-h-0"}`,children:e.jsxs("div",{className:"flex flex-col items-start gap-4 pt-4 pb-4 px-4 bg-whitewhite mt-3 w-full",children:[(p=s==null?void 0:s.products)==null?void 0:p.map((t,c)=>e.jsxs("div",{className:"flex flex-col items-start gap-1.5 self-stretch",children:[e.jsx("p",{className:"mt-[-1px] [font-family:'Inter-Regular',Helvetica] font-normal text-primary-color text-base tracking-[0] leading-6",children:t.product_title}),e.jsx("div",{className:"flex items-center justify-between gap-2.5 self-stretch",children:e.jsxs("div",{className:"flex items-center justify-between w-full",children:[e.jsxs("p",{className:"mt-[-1px] font-semibold text-secondary-color text-base",children:[t.product_quantity," ",r("orders.products")]}),e.jsxs("p",{className:"mt-[-1px] font-semibold text-secondary-color text-base text-right",children:["€ ",t.product_price," x ",t.product_quantity," = €"," ",t.product_price*t.product_quantity]})]})})]},c)),e.jsxs("div",{className:"flex flex-col items-start gap-[5px] relative self-stretch w-full flex-[0_0_auto]",children:[e.jsxs("div",{className:"flex items-center justify-between w-full",children:[e.jsx("p",{className:"font-body-extra-small-text-regular font-[number:var(--body-extra-small-text-regular-font-weight)] text-primary-text-color text-[length:var(--body-extra-small-text-regular-font-size)] text-center tracking-[var(--body-extra-small-text-regular-letter-spacing)] leading-[var(--body-extra-small-text-regular-line-height)] whitespace-nowrap [font-style:var(--body-extra-small-text-regular-font-style)]",children:r("orders.service_fees")}),e.jsxs("p",{className:"font-semibold text-primary-color text-sm text-right",children:[s==null?void 0:s.service_fees," €"]})]}),e.jsxs("div",{className:"flex items-center justify-between w-full",children:[e.jsx("p",{className:"font-body-extra-small-text-regular font-[number:var(--body-extra-small-text-regular-font-weight)] text-primary-text-color text-[length:var(--body-extra-small-text-regular-font-size)] text-center tracking-[var(--body-extra-small-text-regular-letter-spacing)] leading-[var(--body-extra-small-text-regular-line-height)] whitespace-nowrap [font-style:var(--body-extra-small-text-regular-font-style)]",children:r("orders.payment_fees")}),e.jsxs("p",{className:"font-semibold text-primary-color text-sm text-right",children:[s==null?void 0:s.payment_fees," €"]})]}),e.jsxs("div",{className:"flex items-center justify-between w-full",children:[e.jsx("p",{className:"font-body-extra-small-text-regular font-[number:var(--body-extra-small-text-regular-font-weight)] text-primary-text-color text-[length:var(--body-extra-small-text-regular-font-size)] text-center tracking-[var(--body-extra-small-text-regular-letter-spacing)] leading-[var(--body-extra-small-text-regular-line-height)] whitespace-nowrap [font-style:var(--body-extra-small-text-regular-font-style)]",children:r("orders.delivery_fees")}),e.jsx("p",{className:"font-semibold text-primary-color text-sm text-right",children:s==null?void 0:s.delivery_fees})]})]}),e.jsx(o,{}),e.jsxs("div",{className:"flex items-end justify-between self-stretch",children:[e.jsx("div",{className:"flex items-center gap-2.5 grow",children:e.jsx("div",{className:"font-semibold text-primary-color text-lg",children:r("orders.total")})}),e.jsx("div",{className:"inline-flex flex-col items-end",children:e.jsxs("div",{className:"font-semibold text-primary-color text-lg text-right",children:["€ ",s==null?void 0:s.total_ttc]})})]}),e.jsx(o,{})]})})]})},R=()=>{const{t:l}=g(),d=_(),i=new URLSearchParams(location.search).get("orderId"),r=()=>{d("/")};return a.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsx("div",{className:"flex flex-col w-full h-screen items-start relative bg-primary-background mx-auto",children:e.jsxs("div",{className:"flex flex-col w-full items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]",children:[e.jsx("div",{className:"relative self-stretch mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-primary-color text-2xl tracking-[0] leading-[30px]",children:l("thanks_withdrawal.thanks")}),e.jsx("p",{className:"relative self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-primary-text-color text-base tracking-[0] leading-6",children:l("thanks_withdrawal.debit_info")}),e.jsx(o,{}),e.jsx(I,{orderId:i}),e.jsx(o,{}),e.jsxs("div",{className:"flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-whitewhite rounded-md shadow-shadow-1 cursor-pointer",onClick:r,children:[e.jsx(k,{className:"!relative !w-5 !h-5",color:"#1B4F4A"}),e.jsx("button",{className:"all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap",children:l("thanks_withdrawal.back_to_home")})]})]})})};export{R as default};
