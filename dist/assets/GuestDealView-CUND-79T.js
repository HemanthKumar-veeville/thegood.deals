import{a as L,u as B,k as z,c as A,d as S,r as b,a1 as E,j as e,A as P,E as _,I as T,m as M,M as O,a2 as R,a3 as U,n as $,L as F}from"./index-DYXqT_ri.js";import"./StyleTypePrimary-BsDohl7s.js";import"./Box43-2sdI0--a.js";import"./Coins-jzLwGaOK.js";import{L as j}from"./Pencil1-D4Ehi2N_.js";import{U as G}from"./Users22-DSBegv8O.js";import"./Badges-CJB_hFuo.js";import{P as q,a as V}from"./ProgressBarGreen-BZ-2XqJ6.js";const te=()=>{var m,d,f,p,g,h,v,u,w;const{t:r}=L(),a=B(),l=z(),y=A(),N=S(s=>s.deals),{deal:i,status:Y}=N,t=((m=i==null?void 0:i.Deal)==null?void 0:m.deal)||{};console.log({dealData:t});const n=new URLSearchParams(l.search),o=n.get("deal_id"),c=n.get("is_creator"),k=()=>{a("/")},C=()=>{a("/admin-orders?deal_id="+o+"&is_creator="+c)};r("status.soon_out_stock"),r("status.finished"),r("status.in_stock"),r("status.waiting"),r("status.draft"),b.useEffect(()=>{window.scrollTo(0,0)},[]),b.useEffect(()=>{y(E(o))},[]);const x=()=>{a("/admin-view-deal?deal_id="+o+"&deal_type="+c)};return e.jsx("div",{className:"flex flex-col w-full items-start relative bg-primary-background mx-auto",children:e.jsxs("div",{className:"flex flex-col w-full items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]",children:[e.jsxs("div",{className:"flex-col flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]",children:[e.jsx("div",{className:"flex items-center gap-3 pt-0 pb-3 px-0 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-stroke",children:e.jsxs("div",{className:"inline-flex items-center gap-2 relative flex-[0_0_auto] cursor-pointer",onClick:k,children:[e.jsx(P,{className:"!relative !w-[18px] !h-[18px]",color:"#637381"}),e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-text-color text-base tracking-[0] leading-6 whitespace-nowrap",children:r("common.back")})]})}),e.jsx("div",{className:"flex items-start gap-[25px] px-[18px] py-[15px] relative self-stretch w-full flex-[0_0_auto] bg-greengreen-light-6 rounded-lg",children:e.jsxs("div",{className:"flex items-center gap-3 relative flex-1 grow",children:[e.jsx("div",{className:"relative w-5 h-5 bg-greengreen rounded-[10px]",children:e.jsx(_,{className:"!absolute !w-3 !h-3 !top-1 !left-1",color:"white"})}),e.jsxs("p",{className:"relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#004434] text-sm tracking-[0] leading-5",children:[e.jsxs("span",{className:"[font-family:'Inter',Helvetica] font-normal text-[#004434] text-sm tracking-[0] leading-5",children:[r("deal.ends_in"),e.jsx("br",{})]}),e.jsx("span",{className:"font-bold",children:r("deal.time_left",{days:t==null?void 0:t.end_in,hours:6})})]})]})}),e.jsx("div",{onClick:x,children:e.jsx(T,{pictures:(t==null?void 0:t.deal_images)||[M]})}),e.jsx("div",{onClick:x,className:"relative self-stretch [font-family:'Inter',Helvetica] font-semibold text-primary-color text-2xl tracking-[0] leading-[30px]",children:(t==null?void 0:t.title)||r("deal.title")}),((f=(d=l==null?void 0:l.state)==null?void 0:d.deal)==null?void 0:f.dealStatus)==="soon_out_stock"?e.jsx(q,{percentage:(p=t==null?void 0:t.progress)==null?void 0:p.split("%")[0]}):e.jsx(V,{percentage:(g=t==null?void 0:t.progress)==null?void 0:g.split("%")[0]}),e.jsxs("div",{className:"flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]",children:[e.jsxs("div",{className:"inline-flex items-center gap-2.5 relative flex-[0_0_auto]",children:[e.jsx(_,{className:"!relative !w-5 !h-5",color:"#1B4F4A"}),e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap",children:r("deal.end_in",{days:t==null?void 0:t.end_in})})]}),e.jsxs("div",{className:"inline-flex items-center gap-2.5 relative flex-[0_0_auto]",children:[e.jsx(G,{className:"!relative !w-5 !h-5",color:"#1B4F4A"}),e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap",children:r("deal.participants",{count:t==null?void 0:t.participants})})]})]}),e.jsxs("div",{className:"flex items-center gap-2.5 relative self-stretch w-full flex-[0_0_auto]",children:[e.jsx(O,{className:"!relative !w-5 !h-5"}),e.jsx("p",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-color text-sm tracking-[0] leading-[22px]",children:((h=t==null?void 0:t.collection_info)==null?void 0:h.location)||r("deal.location")})]}),e.jsx("img",{className:"relative self-stretch w-full h-[2px] object-cover",alt:"Line",src:j}),e.jsxs("div",{className:"inline-flex items-center gap-[15px] relative flex-[0_0_auto]",children:[e.jsx("img",{className:"relative w-[50px] h-[50px] object-cover rounded-md",alt:"Organizer",src:((v=t==null?void 0:t.organizer)==null?void 0:v.organiser_image)||R}),e.jsxs("div",{className:"inline-flex flex-col items-start relative flex-[0_0_auto]",children:[e.jsx("div",{className:"relative w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]",children:r("artisanConfirmThe.organized_by")}),e.jsx("div",{className:"relative w-fit [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap",children:((u=t==null?void 0:t.organizer)==null?void 0:u.name)||"Abraham Thomas"}),e.jsx("div",{className:"inline-flex h-5 items-center gap-2.5 relative",children:e.jsx(U,{className:"!flex-[0_0_auto]",rating:((w=t==null?void 0:t.organiser)==null?void 0:w.rating)||"four-star",size:"small"})})]})]}),e.jsxs("div",{className:"flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-whitewhite rounded-md shadow-shadow-1 cursor-pointer",onClick:C,children:[e.jsx($,{className:"!relative !w-5 !h-5"}),e.jsx("button",{className:"all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap",children:r("deal.my_orders")})]})]}),e.jsx("img",{className:"relative self-stretch w-full h-px object-cover",alt:"Line",src:j}),e.jsx("div",{className:"flex-col flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]",children:[{step:1,bgColor:"bg-primary-color",textColor:"text-whitewhite"},{step:2,bgColor:"bg-whitewhite border-2 border-solid border-primary-color",textColor:"text-primary-color"},{step:3,bgColor:"bg-graygray border-2 border-solid border-stroke",textColor:"text-primary-color"},{step:4,bgColor:"bg-graygray border-2 border-solid border-stroke",textColor:"text-primary-color"},{step:5,bgColor:"bg-graygray border-2 border-solid border-stroke",textColor:"text-primary-color"}].map(({step:s,bgColor:I,textColor:H})=>e.jsxs("div",{className:"inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto] mr-[-24.00px]",children:[e.jsx("div",{className:"relative w-[52px] h-[50px]",children:e.jsx("div",{className:`relative w-[50px] h-[50px] rounded-[25px] ${I}`,children:e.jsx("div",{className:`absolute top-2.5 left-[17px] [font-family:'Inter',Helvetica] font-medium ${H} text-xl tracking-[0] leading-[26px] whitespace-nowrap`,children:s})})}),e.jsx("p",{className:"relative w-fit [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6",children:r(`active_deal.step_${s}`)})]},s))}),e.jsx("img",{className:"relative self-stretch w-full h-px object-cover",alt:"Line",src:F})]})})};export{te as default};
