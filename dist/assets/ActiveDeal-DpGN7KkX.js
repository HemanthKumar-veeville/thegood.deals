import{u as I,f as H,c as C,g as B,a as L,r as v,n as A,j as e,A as $}from"./index-CUeh2-Zc.js";import"./StyleTypePrimary-CPJhVVvs.js";import{B as P}from"./Box43-C9j1qFON.js";import{B as E}from"./Box44-D7SUAuUd.js";import{C as h,a as F}from"./Coins-BEAKTPEx.js";import{M}from"./Map-CbttZPlv.js";import{P as S,L as O}from"./Pencil1-geUa4diT.js";import{U as c}from"./Users22-D3WwQOaI.js";import{L as u}from"./line-63-BwS0eOFc.js";import{b as U}from"./blog-image-BEA4eBPN.js";import"./UserAlt-BGdQ3iax.js";import"./SideBar-HoCELGdO.js";import"./Badges-B0tj2L7M.js";import{P as R,a as T}from"./ProgressBarGreen-Douypap0.js";import{I as q}from"./ImageSlider-z46Dx8rf.js";import"./sweetalert2.all-C3Nj7_42.js";import"./france-flag-icon-BP-lwE0P.js";const oe=()=>{var m,p,f;const s=I(),o=H(),g=C(),_=B(r=>r.deals),{deal:a,status:G}=_,t=((m=a==null?void 0:a.Deal)==null?void 0:m.length)&&(a==null?void 0:a.Deal[0])||{},{t:l}=L();console.log({deal:a});const n=new URLSearchParams(o.search),i=n.get("deal_id"),x=n.get("is_creator"),w=()=>{s("/")},j=()=>{s("/admin-orders?deal_id="+i+"&is_creator="+x)},b=()=>{s("/admin-invitations?deal_id="+i)},N=()=>{s("/create-deal?deal_id="+i)},d=()=>{s("/admin-view-deal?deal_id="+i+"&deal_type="+x)};return l("active_deal.soon_out_stock"),l("active_deal.finished"),l("active_deal.in_stock"),l("active_deal.waiting"),l("active_deal.draft"),v.useEffect(()=>{window.scrollTo(0,0)},[]),v.useEffect(()=>{g(A(i))},[]),console.log({dealData:t}),e.jsx("div",{className:"flex flex-col w-full items-start relative bg-primary-background mx-auto",children:e.jsxs("div",{className:"flex flex-col w-full items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]",children:[e.jsxs("div",{className:"flex-col flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]",children:[e.jsx("div",{className:"flex items-center gap-3 pt-0 pb-5 px-0 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-stroke",children:e.jsxs("div",{className:"inline-flex items-center gap-2 relative flex-[0_0_auto] cursor-pointer",onClick:w,children:[e.jsx($,{className:"!relative !w-[18px] !h-[18px]",color:"#637381"}),e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-text-color text-base tracking-[0] leading-6 whitespace-nowrap",children:l("common.back")})]})}),e.jsx("div",{className:"flex items-start gap-[25px] px-[18px] py-[15px] relative self-stretch w-full flex-[0_0_auto] bg-greengreen-light-6 rounded-lg",children:e.jsxs("div",{className:"flex items-center gap-3 relative flex-1 grow",children:[e.jsx("div",{className:"relative w-5 h-5 bg-greengreen rounded-[10px]",children:e.jsx(h,{className:"!absolute !w-3 !h-3 !top-1 !left-1",color:"white"})}),e.jsxs("p",{className:"relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#004434] text-sm tracking-[0] leading-5",children:[e.jsxs("span",{className:"[font-family:'Inter',Helvetica] font-normal text-[#004434] text-sm tracking-[0] leading-5",children:[l("active_deal.deal_ends_in"),e.jsx("br",{})]}),e.jsx("span",{className:"font-bold",children:`${t==null?void 0:t.deal_ends_in} days and 6 hours`})]})]})}),e.jsx("div",{onClick:d,children:e.jsx(q,{pictures:(t==null?void 0:t.deal_images)||[U]})}),e.jsx("div",{onClick:d,className:"relative self-stretch [font-family:'Inter',Helvetica] font-semibold text-primary-color text-2xl tracking-[0] leading-[30px]",children:t==null?void 0:t.deal_title}),(t==null?void 0:t.deal_progress_percentage)!==0&&(((f=(p=o==null?void 0:o.state)==null?void 0:p.deal)==null?void 0:f.dealStatus)==="soon_out_stock"?e.jsx(R,{percentage:t==null?void 0:t.deal_progress_percentage}):e.jsx(T,{percentage:t==null?void 0:t.deal_progress_percentage})),e.jsxs("div",{className:"flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]",children:[e.jsxs("div",{className:"inline-flex items-center gap-2.5 relative flex-[0_0_auto]",children:[e.jsx(h,{className:"!relative !w-5 !h-5",color:"#1B4F4A"}),e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap",children:`ends in ${t==null?void 0:t.deal_ends_in} days`})]}),e.jsxs("div",{className:"inline-flex items-center gap-2.5 relative flex-[0_0_auto]",children:[e.jsx(c,{className:"!relative !w-5 !h-5",color:"#1B4F4A"}),e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap",children:l("active_deal.participants_count",{count:t==null?void 0:t.participants_count})})]})]}),e.jsxs("div",{className:"flex items-center gap-2.5 w-full",children:[e.jsx(M,{className:"w-5 h-5"}),e.jsx("p",{className:"w-full text-sm text-primary-color leading-[22px] break-words",children:(t==null?void 0:t.collection_location)||"No location available"})]}),e.jsxs("div",{className:"flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-whitewhite rounded-md shadow-shadow-1 cursor-pointer",onClick:j,children:[e.jsx(E,{className:"!relative !w-5 !h-5"}),e.jsx("button",{className:"all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap",children:l("active_deal.my_orders_label")})]}),e.jsxs("div",{className:"flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-whitewhite rounded-md shadow-shadow-1 cursor-pointer",onClick:b,children:[e.jsx(c,{className:"!relative !w-5 !h-5",color:"#1B4F4A"}),e.jsx("button",{className:"all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap",children:"Managing my friends"})]}),e.jsxs("div",{className:"flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] rounded-md border border-solid border-primary-color cursor-pointer",onClick:N,children:[e.jsx(S,{className:"!relative !w-5 !h-5",color:"#1B4F4A"}),e.jsx("button",{className:"all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap",children:l("active_deal.edit_deal_button")})]})]}),e.jsx("img",{className:"relative self-stretch w-full h-px object-cover",alt:"Line",src:O}),e.jsxs("div",{className:"flex flex-col items-start p-5 relative self-stretch w-full flex-[0_0_auto] bg-whitewhite rounded-[5px] shadow-shadow-1",children:[e.jsxs("div",{className:"inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]",children:[e.jsxs("div",{className:"inline-flex items-center gap-3.5 relative flex-[0_0_auto]",children:[e.jsx("div",{className:"relative w-[50px] h-[50px]",children:e.jsxs("div",{className:"relative h-[50px] rounded-[3px]",children:[e.jsx("div",{className:"absolute w-[50px] h-[50px] top-0 left-0 bg-secondary-color rounded-[3px] opacity-[0.08]"}),e.jsx(P,{className:"!absolute !w-[26px] !h-[26px] !top-3 !left-3",color:"#13C296"})]})}),e.jsxs("div",{className:"inline-flex flex-col items-start relative flex-[0_0_auto]",children:[e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-darkdark text-base tracking-[0] leading-6 whitespace-nowrap",children:l("active_deal.my_orders_label")}),e.jsx("div",{className:"relative w-fit [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap",children:l("active_deal.loved_ones_orders_label")})]})]}),e.jsxs("div",{className:"inline-flex items-end gap-[5px] relative flex-[0_0_auto]",children:[e.jsx("div",{className:"relative w-fit mt-[-1.00px] font-bold text-darkdark text-2xl leading-[22px] [font-family:'Inter',Helvetica] tracking-[0] whitespace-nowrap",children:l("active_deal.orders_count",{count:t==null?void 0:t.orders_count})}),e.jsx("div",{className:"relative w-[124px] h-[22px]",children:e.jsx("div",{className:"inline-flex items-center gap-1 relative",children:e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-greengreen text-sm tracking-[0] leading-[22px] whitespace-nowrap",children:l("active_deal.orders_available",{available:t==null?void 0:t.participants_count})})})})]})]}),e.jsx("div",{className:"relative w-full h-[7px] mt-4 bg-gray-300 rounded-full",children:e.jsx("div",{className:"absolute h-[7px] bg-greengreen rounded-full",style:{width:`${0/20*100}%`}})})]}),e.jsxs("div",{className:"flex flex-col items-start p-5 relative self-stretch w-full flex-[0_0_auto] bg-whitewhite rounded-[5px] shadow-shadow-1",children:[e.jsxs("div",{className:"inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]",children:[e.jsxs("div",{className:"inline-flex items-center gap-3.5 relative flex-[0_0_auto]",children:[e.jsx("div",{className:"relative w-[50px] h-[50px]",children:e.jsxs("div",{className:"relative h-[50px] rounded-[3px]",children:[e.jsx("div",{className:"bg-purplepurple absolute w-[50px] h-[50px] top-0 left-0 rounded-[3px] opacity-[0.08]"}),e.jsx(F,{className:"!absolute !w-[26px] !h-[26px] !top-3 !left-3",color:"#8646F4"})]})}),e.jsxs("div",{className:"inline-flex flex-col items-start relative flex-[0_0_auto]",children:[e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-darkdark text-base tracking-[0] leading-6 whitespace-nowrap",children:l("active_deal.wallet_label")}),e.jsx("div",{className:"relative w-fit [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap",children:l("active_deal.amount_collected_label")})]})]}),e.jsxs("div",{className:"inline-flex items-end gap-[5px] relative flex-[0_0_auto]",children:[e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-darkdark text-2xl tracking-[0] leading-[22px] whitespace-nowrap",children:`€${(t==null?void 0:t.current_amount)||0}`}),e.jsx("div",{className:"w-[67px] relative h-[22px]",children:e.jsx("div",{className:"inline-flex items-center gap-1 relative",children:e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-purplepurple text-sm tracking-[0] leading-[22px] whitespace-nowrap",children:l("active_deal.amount_target",{target:(t==null?void 0:t.orders_count)*(t==null?void 0:t.deal_price)})})})})]})]}),e.jsx("div",{className:"relative w-full h-[7px] mt-4 bg-gray-300 rounded-full",children:e.jsx("div",{className:"absolute h-[7px] bg-purplepurple rounded-full",style:{width:`${((t==null?void 0:t.current_amount)||0/((t==null?void 0:t.orders_count)*(t==null?void 0:t.deal_price)))*100}%`}})})]}),e.jsx("div",{className:"flex flex-col items-start gap-6 p-5 relative self-stretch w-full flex-[0_0_auto] bg-whitewhite rounded-[5px] shadow-shadow-1",children:e.jsxs("div",{className:"inline-flex flex-col items-start gap-5 relative flex-[0_0_auto] mr-[-11.00px]",children:[e.jsxs("div",{className:"inline-flex items-center gap-3.5 relative flex-[0_0_auto]",children:[e.jsx("div",{className:"relative w-[50px] h-[50px]",children:e.jsxs("div",{className:"relative h-[50px] rounded-[3px]",children:[e.jsx("div",{className:"bg-cyancyan absolute w-[50px] h-[50px] top-0 left-0 rounded-[3px] opacity-[0.08]"}),e.jsx(c,{className:"!absolute !w-[26px] !h-[26px] !top-3 !left-3",color:"#01A9DB"})]})}),e.jsxs("div",{className:"inline-flex flex-col items-start relative flex-[0_0_auto]",children:[e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-darkdark text-base tracking-[0] leading-6 whitespace-nowrap",children:l("active_deal.relatives_label")}),e.jsx("div",{className:"relative w-fit [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap",children:l("active_deal.participants_label")})]})]}),e.jsxs("div",{className:"inline-flex items-end gap-[5px] relative flex-[0_0_auto]",children:[e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-darkdark text-2xl tracking-[0] leading-[30px] whitespace-nowrap",children:l("active_deal.participants_count",{count:t==null?void 0:t.participants_count})}),e.jsx("div",{className:"w-[91px] relative h-[22px]"})]})]})}),e.jsx("img",{className:"relative self-stretch w-full h-px object-cover",alt:"Line",src:u}),e.jsx("div",{className:"flex-col flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]",children:[{step:1,bgColor:"bg-primary-color",textColor:"text-whitewhite"},{step:2,bgColor:"bg-whitewhite border-2 border-solid border-primary-color",textColor:"text-primary-color"},{step:3,bgColor:"bg-graygray border-2 border-solid border-stroke",textColor:"text-primary-color"},{step:4,bgColor:"bg-graygray border-2 border-solid border-stroke",textColor:"text-primary-color"},{step:5,bgColor:"bg-graygray border-2 border-solid border-stroke",textColor:"text-primary-color"}].map(({step:r,bgColor:y,textColor:k})=>e.jsxs("div",{className:"inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto] mr-[-24.00px]",children:[e.jsx("div",{className:"relative w-[52px] h-[50px]",children:e.jsx("div",{className:`relative w-[50px] h-[50px] rounded-[25px] ${y}`,children:e.jsx("div",{className:`absolute top-2.5 left-[17px] [font-family:'Inter',Helvetica] font-medium ${k} text-xl tracking-[0] leading-[26px] whitespace-nowrap`,children:r})})}),e.jsx("p",{className:"relative w-fit [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6",children:l(`active_deal.step_${r}`)})]},r))}),e.jsx("img",{className:"relative self-stretch w-full h-px object-cover",alt:"Line",src:u})]})})};export{oe as default};
