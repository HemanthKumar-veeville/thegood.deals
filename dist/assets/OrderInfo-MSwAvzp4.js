import{r as i,a as h,c as p,g as o,V as j,j as e,C as w}from"./index-B-1kzR92.js";import{I as g}from"./InfoCircle8-DqWdA-me.js";const b=({orderId:x})=>{const[f,n]=i.useState(!1),r=i.useRef(null),{t:s}=h(),c=p(),a=o(l=>l.orders.order),d=o(l=>l.orders.orderStatus),m=o(l=>l.orders.orderError),t=a==null?void 0:a.Orders;i.useEffect(()=>{c(j({orderId:x}))},[c,x]),console.log({orderState:t});const v=()=>{n(l=>!l)};return i.useEffect(()=>{const l=u=>{r.current&&!r.current.contains(u.target)&&n(!1)};return document.addEventListener("mousedown",l),()=>{document.removeEventListener("mousedown",l)}},[r]),d==="loading"?e.jsx(w,{}):d==="failed"?e.jsx("div",{children:s("order.error",{error:m})}):e.jsx("div",{className:"flex flex-col items-start gap-[15px] p-[15px] relative bg-white rounded-[5px] mx-auto w-full",children:e.jsxs("div",{className:"flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]",children:[e.jsxs("div",{className:"flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]",children:[e.jsx("div",{className:"flex w-[162.5px] items-center gap-[5px] relative",children:e.jsxs("div",{className:"relative w-fit mt-[-1.00px] font-body-extra-small-text-regular text-primary-text-color",children:[s("order.orderLabel")," "]})}),e.jsx("div",{className:"inline-flex items-start justify-end gap-2.5 relative flex-[0_0_auto]",children:e.jsxs("div",{className:"relative w-fit mt-[-1.00px] font-semibold text-primary-color text-sm text-right",children:[t==null?void 0:t.order_total," €"]})})]}),e.jsx("div",{className:"flex flex-col items-end gap-[5px] relative self-stretch w-full flex-[0_0_auto]",children:e.jsxs("div",{className:"flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]",children:[e.jsxs("div",{className:"flex w-full items-center gap-[5px] relative",children:[e.jsxs("div",{className:"relative w-fit mt-[-1.00px] font-body-extra-small-text-regular text-primary-text-color",children:[s("order.serviceFeesLabel")," "]}),e.jsxs("div",{className:"relative",children:[e.jsx("span",{onClick:v,children:e.jsx(g,{className:"!relative !w-3.5 !h-3.5 cursor-pointer",color:"#2a4e4a"})}),f&&e.jsxs("div",{ref:r,className:"absolute z-10 w-[260px] p-2 bg-white text-gray-800 border border-gray-300 rounded-md shadow-lg bottom-full left-1/2 transform -translate-x-1/2 mb-2",children:[s("order.serviceFeesTooltip")," ",e.jsx("div",{className:"absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white border border-gray-300 -bottom-1 rotate-45"})]})]})]}),e.jsx("div",{className:"inline-flex items-start justify-end gap-2.5 relative flex-[0_0_auto]",children:e.jsxs("div",{className:"relative w-fit mt-[-1.00px] font-semibold text-primary-color text-sm text-right",children:[t==null?void 0:t.service_fees," €"]})})]})}),e.jsxs("div",{className:"flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]",children:[e.jsx("div",{className:"flex w-[162.5px] items-center gap-[5px] relative",children:e.jsxs("div",{className:"relative w-fit mt-[-1.00px] font-body-extra-small-text-regular text-primary-text-color",children:[s("order.paymentFeesLabel")," "]})}),e.jsx("div",{className:"inline-flex items-start justify-end gap-2.5 relative flex-[0_0_auto]",children:e.jsxs("div",{className:"relative w-fit mt-[-1.00px] font-semibold text-primary-color text-sm text-right",children:[t==null?void 0:t.payment_fees," €"]})})]}),e.jsxs("div",{className:"flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]",children:[e.jsx("div",{className:"flex w-[162.5px] items-center gap-[5px] relative",children:e.jsxs("div",{className:"relative w-fit mt-[-1.00px] font-body-extra-small-text-regular text-primary-text-color",children:[s("order.deliveryFeesLabel")," "]})}),e.jsx("div",{className:"inline-flex items-start justify-end gap-2.5 relative flex-[0_0_auto]",children:e.jsxs("div",{className:"relative w-fit mt-[-1.00px] font-semibold text-primary-color text-sm text-right",children:[t==null?void 0:t.delivery_fees," €"]})})]}),e.jsx("div",{className:"flex flex-col items-end gap-[5px] relative self-stretch w-full flex-[0_0_auto]",children:e.jsxs("div",{className:"flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]",children:[e.jsxs("div",{className:"relative w-fit font-body-extra-small-text-regular text-primary-text-color",children:[s("order.totalTTC")," "]}),e.jsxs("div",{className:"inline-flex items-start justify-end gap-2.5 relative flex-[0_0_auto]",children:[e.jsxs("div",{className:"font-normal text-primary-text-color leading-6 line-through relative w-fit mt-[-1.00px] text-sm text-right",children:[(t==null?void 0:t.mrp)??s("order.priceUnknown")," €"]}),e.jsxs("div",{className:"relative w-fit mt-[-1.00px] font-semibold text-primary-color text-sm text-right",children:[(t==null?void 0:t.total_ttc)??s("order.totalUnknown")," €"]})]})]})}),e.jsxs("div",{className:"flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]",children:[e.jsxs("div",{className:"relative w-fit font-body-extra-small-text-regular text-secondary-color",children:[s("order.saveLabel")," "]}),e.jsxs("div",{className:"font-small-medium text-secondary-color leading-small relative w-fit mt-[-1.00px] text-right",children:[(t==null?void 0:t.discount)??s("order.discountUnknown")," €"]})]})]})})};export{b as O};
