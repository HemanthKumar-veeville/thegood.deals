import{a as B,u as S,k as A,c as L,d as z,r as b,ai as E,j as e,A as P,X as _,Y as T,m as F,Z as O,L as y,aj as R,n as U}from"./index-BSh7ZGCM.js";import"./StyleTypePrimary-BV1uJh4L.js";import"./Box43-Df9xva7K.js";import"./Coins-8-CRWRSd.js";import"./Pencil1-BwtOnU_0.js";import{U as $}from"./Users22-DWun0LRl.js";import{H as G}from"./human-Dor2S4ux.js";import"./Badges-B19BdGYN.js";import{P as M,a as Y}from"./ProgressBarGreen-eL3huW-5.js";import{S as q}from"./Send1-BdAy3aTh.js";const V="data:image/svg+xml,%3csvg%20width='290'%20height='1'%20viewBox='0%200%20290%201'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cline%20y1='0.5'%20x2='290'%20y2='0.5'%20stroke='%23DFE4EA'/%3e%3c/svg%3e",ae=()=>{var m,d,p,f,g,h,v,u,w;const{t:r}=B(),l=S(),a=A(),j=L(),N=z(s=>s.deals),{deal:i,status:X}=N,t=((m=i==null?void 0:i.Deal)==null?void 0:m.deal)||{};console.log({dealData:t});const c=new URLSearchParams(a.search),o=c.get("deal_id"),x=c.get("is_creator"),k=()=>{l("/")},C=()=>{l("/admin-orders?deal_id="+o+"&is_creator="+x)};r("status.soon_out_stock"),r("status.finished"),r("status.in_stock"),r("status.waiting"),r("status.draft"),b.useEffect(()=>{window.scrollTo(0,0)},[]),b.useEffect(()=>{j(E(o))},[]);const n=()=>{l("/admin-view-deal?deal_id="+o+"&deal_type="+x)};return e.jsx("div",{className:"flex flex-col w-full items-start relative bg-primary-background mx-auto",children:e.jsxs("div",{className:"flex flex-col w-full items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]",children:[e.jsxs("div",{className:"flex-col flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]",children:[e.jsx("div",{className:"flex items-center gap-3 pt-0 pb-3 px-0 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-stroke",children:e.jsxs("div",{className:"inline-flex items-center gap-2 relative flex-[0_0_auto] cursor-pointer",onClick:k,children:[e.jsx(P,{className:"!relative !w-[18px] !h-[18px]",color:"#637381"}),e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-text-color text-base tracking-[0] leading-6 whitespace-nowrap",children:r("common.back")})]})}),e.jsx("div",{className:"flex items-start gap-[25px] px-[18px] py-[15px] relative self-stretch w-full flex-[0_0_auto] bg-greengreen-light-6 rounded-lg",children:e.jsxs("div",{className:"flex items-center gap-3 relative flex-1 grow",children:[e.jsx("div",{className:"relative w-5 h-5 bg-greengreen rounded-[10px]",children:e.jsx(_,{className:"!absolute !w-3 !h-3 !top-1 !left-1",color:"white"})}),e.jsxs("p",{className:"relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#004434] text-sm tracking-[0] leading-5",children:[e.jsxs("span",{className:"[font-family:'Inter',Helvetica] font-normal text-[#004434] text-sm tracking-[0] leading-5",children:[r("deal.ends_in"),e.jsx("br",{})]}),e.jsx("span",{className:"font-bold",children:r("deal.time_left",{days:t==null?void 0:t.end_in,hours:6})})]})]})}),e.jsx("div",{onClick:n,children:e.jsx(T,{pictures:(t==null?void 0:t.deal_images)||[F]})}),e.jsx("div",{onClick:n,className:"relative self-stretch [font-family:'Inter',Helvetica] font-semibold text-primary-color text-2xl tracking-[0] leading-[30px]",children:(t==null?void 0:t.title)||r("deal.title")}),((p=(d=a==null?void 0:a.state)==null?void 0:d.deal)==null?void 0:p.dealStatus)==="soon_out_stock"?e.jsx(M,{percentage:(f=t==null?void 0:t.progress)==null?void 0:f.split("%")[0]}):e.jsx(Y,{percentage:(g=t==null?void 0:t.progress)==null?void 0:g.split("%")[0]}),e.jsxs("div",{className:"flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]",children:[e.jsxs("div",{className:"inline-flex items-center gap-2.5 relative flex-[0_0_auto]",children:[e.jsx(_,{className:"!relative !w-5 !h-5",color:"#1B4F4A"}),e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap",children:r("deal.end_in",{days:t==null?void 0:t.end_in})})]}),e.jsxs("div",{className:"inline-flex items-center gap-2.5 relative flex-[0_0_auto]",children:[e.jsx($,{className:"!relative !w-5 !h-5",color:"#1B4F4A"}),e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap",children:r("deal.participants",{count:t==null?void 0:t.participants})})]})]}),e.jsxs("div",{className:"flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]",children:[e.jsx(O,{className:"!relative !w-5 !h-5"}),e.jsx("p",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-color text-sm tracking-[0] leading-[22px]",children:((h=t==null?void 0:t.collection_info)==null?void 0:h.location)||r("deal.location")})]}),e.jsx(y,{}),e.jsxs("div",{className:"inline-flex items-center gap-[15px] relative flex-[0_0_auto]",children:[e.jsx("img",{className:"relative w-[50px] h-[50px] object-cover rounded-md",alt:"Organizer",src:((v=t==null?void 0:t.organizer)==null?void 0:v.organiser_image)||G}),e.jsxs("div",{className:"inline-flex flex-col items-start relative flex-[0_0_auto]",children:[e.jsx("div",{className:"relative w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]",children:r("artisanConfirmThe.organized_by")}),e.jsx("div",{className:"relative w-fit [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap",children:((u=t==null?void 0:t.organizer)==null?void 0:u.name)||"Abraham Thomas"}),e.jsx("div",{className:"inline-flex h-5 items-center gap-2.5 relative",children:e.jsx(R,{className:"!flex-[0_0_auto]",rating:((w=t==null?void 0:t.organiser)==null?void 0:w.rating)||"four-star",size:"small"})})]})]}),e.jsxs("div",{className:"gap-2.5 bg-primary-color flex items-center justify-center px-6 py-3 relative self-stretch w-full flex-[0_0_auto] rounded-md cursor-pointer",onClick:n,children:[e.jsx(q,{className:"!relative !w-5 !h-5",color:"white"}),e.jsx("button",{className:"all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-whitewhite text-base text-center tracking-[0] leading-6 whitespace-nowrap",children:r("active_deal.place_order")})]}),e.jsxs("div",{className:"flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-whitewhite rounded-md shadow-shadow-1 cursor-pointer",onClick:C,children:[e.jsx(U,{className:"!relative !w-5 !h-5"}),e.jsx("button",{className:"all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap",children:r("active_deal.my_orders_label")})]})]}),e.jsx("img",{className:"relative self-stretch w-full h-px object-cover",alt:"Line",src:V}),e.jsx("div",{className:"flex-col flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]",children:[{step:1,bgColor:"bg-primary-color",textColor:"text-whitewhite"},{step:2,bgColor:"bg-whitewhite border-2 border-solid border-primary-color",textColor:"text-primary-color"},{step:3,bgColor:"bg-graygray border-2 border-solid border-stroke",textColor:"text-primary-color"},{step:4,bgColor:"bg-graygray border-2 border-solid border-stroke",textColor:"text-primary-color"},{step:5,bgColor:"bg-graygray border-2 border-solid border-stroke",textColor:"text-primary-color"}].map(({step:s,bgColor:I,textColor:H})=>e.jsxs("div",{className:"inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto] mr-[-24.00px]",children:[e.jsx("div",{className:"relative w-[52px] h-[50px]",children:e.jsx("div",{className:`relative w-[50px] h-[50px] rounded-[25px] ${I}`,children:e.jsx("div",{className:`absolute top-2.5 left-[17px] [font-family:'Inter',Helvetica] font-medium ${H} text-xl tracking-[0] leading-[26px] whitespace-nowrap`,children:s})})}),e.jsx("p",{className:"relative w-fit [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6",children:r(`active_deal.step_${s}`)})]},s))}),e.jsx(y,{})]})})};export{ae as default};
