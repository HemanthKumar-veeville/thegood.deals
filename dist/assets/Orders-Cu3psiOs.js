import{P as _,j as e,u as b,a as C,c as L,r as m,g as k,G as T,C as B}from"./index-BxJQCT5-.js";import{S as D}from"./SizeXlCorner-2dVvfpnE.js";import{B as S}from"./Box44-Coa792pn.js";import{C as O}from"./ChevronUp-PtJI8XKK.js";import{L as d}from"./line-63-BwS0eOFc.js";import u from"./CustomLoader-Bg0dVSVi.js";import{S as q}from"./SuccessAlert-MW9ue4lT.js";import{W as A}from"./Warning1-DBviTjyH.js";const j=({color:x="#111928",className:p})=>e.jsx("svg",{className:`${p}`,fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M12 17.1C11.775 17.1 11.5875 17.025 11.4 16.875L2.77498 8.40001C2.43748 8.06251 2.43748 7.53751 2.77498 7.20001C3.11248 6.86251 3.63748 6.86251 3.97498 7.20001L12 15.0375L20.025 7.12501C20.3625 6.78751 20.8875 6.78751 21.225 7.12501C21.5625 7.46251 21.5625 7.98751 21.225 8.32501L12.6 16.8C12.4125 16.9875 12.225 17.1 12 17.1Z",fill:x})});j.propTypes={color:_.string};const z=({dealId:x,dealType:p})=>{const f=b(),{t:l}=C(),v=L(),h=new URLSearchParams(location.search),c=h.get("deal_id"),r=h.get("is_creator"),[g,N]=m.useState({}),{orders:a,orderStatus:o,orderError:E}=k(s=>s.orders),n=a==null?void 0:a.Orders;m.useEffect(()=>{v(T({dealId:c,dealType:r?"created":"invited"}))},[]);const w=s=>{N(t=>({...t,[s]:!t[s]}))},y=()=>{console.log(r),f(r==="true"?"/admin-active-deal?deal_id="+c+"&is_creator="+r:"/guest-deal-view?deal_id="+c+"&is_creator="+r)};return m.useEffect(()=>{window.scrollTo(0,0)},[]),o==="loading"?e.jsx(u,{}):(console.log("ordersState",a),e.jsxs("div",{className:"flex flex-col w-full h-screen items-start relative bg-primary-background mx-auto",children:[o==="succeeded"&&e.jsxs("div",{className:"flex flex-col w-full items-start gap-4 px-8 py-4 relative",children:[e.jsx("div",{className:"flex items-center gap-3 pt-0 px-0 relative self-stretch w-full border-b border-stroke cursor-pointer",onClick:y,children:e.jsxs("div",{className:"inline-flex items-center gap-2",children:[e.jsx(B,{className:"w-4.5 h-4.5",color:"#637381"}),e.jsx("div",{className:"mt-[-1px] font-medium text-primary-text-color text-base",children:l("orders.back_to_deal")})]})}),e.jsx("img",{className:"self-stretch w-full h-px object-cover",alt:l("orders.line_alt"),src:d}),e.jsx("div",{className:"relative self-stretch font-semibold text-primary-color text-2xl",children:l("orders.my_orders")}),n==null?void 0:n.map(s=>e.jsxs("div",{children:[e.jsxs("div",{className:"inline-flex items-center gap-4 cursor-pointer",onClick:()=>w(s.participant_name),children:[e.jsx(D,{className:"h-12.5 w-12.5",divClassName:"tracking-0 text-lg font-semibold left-2 leading-10 top-1",text:s.participant_name.charAt(0).toUpperCase()}),e.jsxs("div",{className:"inline-flex flex-col items-start gap-1.5",children:[e.jsx("div",{className:"mt-[-1px] font-medium text-primary-color text-base",children:s.participant_name}),e.jsxs("div",{className:"inline-flex items-center gap-2.5",children:[e.jsx(S,{className:"w-5 h-5"}),e.jsxs("p",{className:"mt-[-1px] font-normal text-primary-text-color text-sm leading-5.5",children:[s.order_count," ",l("orders.order_on_deal")]})]})]}),g[s.participant_name]?e.jsx(O,{className:"w-6 h-6",color:"#1B4F4A"}):e.jsx(j,{className:"w-6 h-6",color:"#1B4F4A"})]}),e.jsx("div",{className:`transition-all duration-500 overflow-hidden ${g[s.participant_name]?"max-h-screen":"max-h-0"}`,children:e.jsxs("div",{className:"flex flex-col items-start gap-4 pt-0 pb-4 px-4 bg-whitewhite",children:[e.jsx("img",{className:"self-stretch w-full h-px object-cover",alt:l("orders.line_alt"),src:d}),s.products.map((t,i)=>e.jsxs("div",{className:"flex flex-col items-start gap-1.5 self-stretch",children:[e.jsx("div",{className:"flex items-center gap-2.5 self-stretch",children:e.jsx("p",{className:"mt-[-1px] font-normal text-primary-color text-base",children:t.product_title})}),e.jsxs("div",{className:"flex items-end justify-between self-stretch",children:[e.jsx("div",{className:"flex items-center gap-2.5 grow",children:e.jsxs("div",{className:"mt-[-1px] font-semibold text-secondary-color text-base",children:[t.product_quantity," products"]})}),e.jsx("div",{className:"inline-flex flex-col items-end",children:e.jsxs("p",{className:"mt-[-1px] font-semibold text-secondary-color text-base text-right",children:["€",t.product_price," x"," ",t.product_quantity," = €",t.product_price*t.product_quantity]})})]})]},i)),e.jsxs("div",{className:"flex items-end justify-between self-stretch",children:[e.jsx("div",{className:"flex items-center gap-2.5 grow",children:e.jsx("div",{className:"mt-[-1px] font-semibold text-primary-color text-lg",children:l("orders.total")})}),e.jsx("div",{className:"inline-flex flex-col items-end",children:e.jsxs("div",{className:"mt-[-1px] font-semibold text-primary-color text-lg text-right",children:["€",s.products.reduce((t,i)=>t+i.product_price*i.product_quantity,0)]})})]})]})}),e.jsx("img",{className:"self-stretch w-full h-px object-cover",alt:l("orders.line_alt"),src:d})]},s.participant_name)),(a==null?void 0:a.message)&&e.jsx("div",{className:"w-full",children:e.jsx(q,{className:"!flex !bg-cyancyan-light-3 w-[100%]",divClassName:"!tracking-[0] !text-sm !flex-1 ![white-space:unset] ![font-style:unset] !font-medium ![font-family:'Inter',Helvetica] !leading-5 !w-[unset]",frameClassName:"!flex-1 !flex !grow",groupClassName:"!bg-cyancyan",icon:e.jsx(A,{className:"!absolute !w-3 !h-3 !top-1 !left-1",color:"white"}),style:"three",text:a==null?void 0:a.message})})]}),o==="loading"&&e.jsx(u,{})]}))};export{z as default};
