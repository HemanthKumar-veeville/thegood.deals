import{j as e,u as I,f as B,c as L,g as $,a as A,r as v,n as P,A as M}from"./index-B7fPwD1b.js";import"./StyleTypePrimary-vAv5246U.js";import{B as S}from"./Box43-BW5uvlKg.js";import{B as E}from"./Box44-CE3IQkiW.js";import{C as h,a as F}from"./Coins-CUfUsvcK.js";import{M as O}from"./Map-BoT10S9v.js";import{L as u,P as U}from"./Pencil1-CnGlAcwZ.js";import{U as n}from"./Users22-B6vHJZjF.js";import{L as g}from"./line-63-BwS0eOFc.js";import{b as Z}from"./blog-image-BEA4eBPN.js";import"./UserAlt-D4SCZBim.js";import"./SideBar-vWxSSk10.js";import"./Badges-ClQvu62l.js";import{P as R,a as T}from"./ProgressBarGreen-BI4ywAvR.js";import{I as q}from"./ImageSlider-CrcElpBt.js";import{S as G}from"./Send2-B1TXR6v-.js";import"./sweetalert2.all-D3SiiMin.js";import"./france-flag-icon-BP-lwE0P.js";const Y=({className:a})=>e.jsxs("svg",{className:`${a}`,fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",children:[e.jsxs("g",{clipPath:"url(#clip0_310_5986)",children:[e.jsx("path",{d:"M11.9998 0.674999C5.73731 0.674999 0.674805 5.7375 0.674805 12C0.674805 18.2625 5.73731 23.325 11.9998 23.325C18.2623 23.325 23.3248 18.2625 23.3248 12C23.3248 5.7375 18.2623 0.674999 11.9998 0.674999ZM11.9998 21.675C6.67481 21.675 2.3248 17.325 2.3248 12C2.3248 6.675 6.67481 2.325 11.9998 2.325C17.3248 2.325 21.6748 6.675 21.6748 12C21.6748 17.325 17.3248 21.675 11.9998 21.675Z",fill:"white"}),e.jsx("path",{d:"M14.5496 7.6125C14.9996 7.6125 15.3746 7.2375 15.3746 6.7875C15.3746 6.3375 14.9996 5.9625 14.5496 5.9625C11.8871 5.9625 9.52461 7.8 8.73711 10.2375H7.61211C7.16211 10.2375 6.78711 10.6125 6.78711 11.0625C6.78711 11.5125 7.16211 11.8875 7.61211 11.8875H8.47461C8.47461 11.925 8.47461 11.9625 8.47461 12C8.47461 12.375 8.51211 12.75 8.58711 13.125H7.61211C7.16211 13.125 6.78711 13.5 6.78711 13.95C6.78711 14.4 7.16211 14.775 7.61211 14.775H9.18711C10.2371 16.6875 12.2621 18.0375 14.5496 18.0375C14.9996 18.0375 15.3746 17.6625 15.3746 17.2125C15.3746 16.7625 14.9996 16.3875 14.5496 16.3875C13.2371 16.3875 12.0371 15.7875 11.2121 14.8125H12.8621C13.3121 14.8125 13.6871 14.4375 13.6871 13.9875C13.6871 13.5375 13.3121 13.1625 12.8621 13.1625H10.3121C10.1996 12.7875 10.1621 12.4125 10.1621 12.0375C10.1621 12 10.1621 11.9625 10.1621 11.925H12.8621C13.3121 11.925 13.6871 11.55 13.6871 11.1C13.6871 10.65 13.3121 10.275 12.8621 10.275H10.5371C11.2496 8.7 12.8246 7.6125 14.5496 7.6125Z",fill:"white"})]}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_310_5986",children:e.jsx("rect",{fill:"white",height:"24",width:"24"})})})]}),de=()=>{var m,p,f;const a=I(),o=B(),w=L(),_=$(r=>r.deals),{deal:i,status:z}=_,t=((m=i==null?void 0:i.Deal)==null?void 0:m.length)&&(i==null?void 0:i.Deal[0])||{},{t:l}=A();console.log({deal:i});const x=new URLSearchParams(o.search),s=x.get("deal_id"),c=x.get("is_creator"),j=()=>{a("/")},b=()=>{a("/admin-orders?deal_id="+s+"&is_creator="+c)},N=()=>{a("/admin-invitations?deal_id="+s)},y=()=>{a("/create-deal?deal_id="+s)},d=()=>{a("/admin-view-deal?deal_id="+s+"&deal_type="+c)};l("active_deal.soon_out_stock"),l("active_deal.finished"),l("active_deal.in_stock"),l("active_deal.waiting"),l("active_deal.draft"),v.useEffect(()=>{window.scrollTo(0,0)},[]),v.useEffect(()=>{w(P(s))},[]),console.log({dealData:t});const k=()=>{a(`/invite-loved-ones?deal_id=${s}&is_creator=`+c)};return e.jsx("div",{className:"flex flex-col w-full items-start relative bg-primary-background mx-auto",children:e.jsxs("div",{className:"flex flex-col w-full items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]",children:[e.jsxs("div",{className:"flex-col flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]",children:[e.jsx("div",{className:"flex items-center gap-3 pt-0 pb-5 px-0 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-stroke",children:e.jsxs("div",{className:"inline-flex items-center gap-2 relative flex-[0_0_auto] cursor-pointer",onClick:j,children:[e.jsx(M,{className:"!relative !w-[18px] !h-[18px]",color:"#637381"}),e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-text-color text-base tracking-[0] leading-6 whitespace-nowrap",children:l("common.back")})]})}),e.jsx("div",{className:"flex items-start gap-[25px] px-[18px] py-[15px] relative self-stretch w-full flex-[0_0_auto] bg-greengreen-light-6 rounded-lg",children:e.jsxs("div",{className:"flex items-center gap-3 relative flex-1 grow",children:[e.jsx("div",{className:"relative w-5 h-5 bg-greengreen rounded-[10px]",children:e.jsx(h,{className:"!absolute !w-3 !h-3 !top-1 !left-1",color:"white"})}),e.jsxs("p",{className:"relative flex-1 mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#004434] text-sm tracking-[0] leading-5",children:[e.jsxs("span",{className:"[font-family:'Inter',Helvetica] font-normal text-[#004434] text-sm tracking-[0] leading-5",children:[l("active_deal.deal_ends_in"),e.jsx("br",{})]}),e.jsx("span",{className:"font-bold",children:`${t==null?void 0:t.deal_ends_in} days and 6 hours`})]})]})}),e.jsx("div",{onClick:d,children:e.jsx(q,{pictures:(t==null?void 0:t.deal_images)||[Z]})}),e.jsx("div",{onClick:d,className:"relative self-stretch [font-family:'Inter',Helvetica] font-semibold text-primary-color text-2xl tracking-[0] leading-[30px]",children:t==null?void 0:t.deal_title}),(t==null?void 0:t.deal_progress_percentage)!==0&&(((f=(p=o==null?void 0:o.state)==null?void 0:p.deal)==null?void 0:f.dealStatus)==="soon_out_stock"?e.jsx(R,{percentage:t==null?void 0:t.deal_progress_percentage}):e.jsx(T,{percentage:t==null?void 0:t.deal_progress_percentage})),e.jsxs("div",{className:"flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]",children:[e.jsxs("div",{className:"inline-flex items-center gap-2.5 relative flex-[0_0_auto]",children:[e.jsx(h,{className:"!relative !w-5 !h-5",color:"#1B4F4A"}),e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap",children:`ends in ${t==null?void 0:t.deal_ends_in} days`})]}),e.jsxs("div",{className:"inline-flex items-center gap-2.5 relative flex-[0_0_auto]",children:[e.jsx(n,{className:"!relative !w-5 !h-5",color:"#1B4F4A"}),e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap",children:l("active_deal.participants_count",{count:t==null?void 0:t.participants_count})})]})]}),e.jsxs("div",{className:"flex items-center gap-2.5 w-full",children:[e.jsx(O,{className:"w-5 h-5"}),e.jsx("p",{className:"w-full text-sm text-primary-color leading-[22px] break-words",children:(t==null?void 0:t.collection_location)||"No location available"})]}),e.jsxs("div",{className:"flex items-center justify-center gap-2.5 px-6 py-3 relative self-stretch w-full bg-primary-color rounded-md hover:bg-primary-dark-color cursor-pointer",onClick:()=>handleNavigation("/create-deal"),children:[e.jsx(Y,{className:"!relative !w-5 !h-5"}),e.jsx("button",{className:"box-border font-medium text-white text-base text-center",children:"Collect payment"})]}),e.jsx("img",{className:"relative self-stretch w-full h-px object-cover",alt:"Line",src:u}),e.jsxs("div",{className:"flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-whitewhite rounded-md shadow-shadow-1 cursor-pointer",onClick:k,children:[e.jsx(G,{className:"!relative !w-5 !h-5"}),e.jsx("button",{className:"all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap",children:l("invitations.invite_loved_ones")})]}),e.jsxs("div",{className:"flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-whitewhite rounded-md shadow-shadow-1 cursor-pointer",onClick:b,children:[e.jsx(E,{className:"!relative !w-5 !h-5"}),e.jsx("button",{className:"all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap",children:l("active_deal.my_orders_label")})]}),e.jsxs("div",{className:"flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-whitewhite rounded-md shadow-shadow-1 cursor-pointer",onClick:N,children:[e.jsx(n,{className:"!relative !w-5 !h-5",color:"#1B4F4A"}),e.jsx("button",{className:"all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap",children:"Managing my friends"})]}),e.jsxs("div",{className:"flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] rounded-md border border-solid border-primary-color cursor-pointer",onClick:y,children:[e.jsx(U,{className:"!relative !w-5 !h-5",color:"#1B4F4A"}),e.jsx("button",{className:"all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap",children:l("active_deal.edit_deal_button")})]})]}),e.jsx("img",{className:"relative self-stretch w-full h-px object-cover",alt:"Line",src:u}),e.jsxs("div",{className:"flex flex-col items-start p-5 relative self-stretch w-full flex-[0_0_auto] bg-whitewhite rounded-[5px] shadow-shadow-1",children:[e.jsxs("div",{className:"inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]",children:[e.jsxs("div",{className:"inline-flex items-center gap-3.5 relative flex-[0_0_auto]",children:[e.jsx("div",{className:"relative w-[50px] h-[50px]",children:e.jsxs("div",{className:"relative h-[50px] rounded-[3px]",children:[e.jsx("div",{className:"absolute w-[50px] h-[50px] top-0 left-0 bg-secondary-color rounded-[3px] opacity-[0.08]"}),e.jsx(S,{className:"!absolute !w-[26px] !h-[26px] !top-3 !left-3",color:"#13C296"})]})}),e.jsxs("div",{className:"inline-flex flex-col items-start relative flex-[0_0_auto]",children:[e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-darkdark text-base tracking-[0] leading-6 whitespace-nowrap",children:l("active_deal.my_orders_label")}),e.jsx("div",{className:"relative w-fit [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap",children:l("active_deal.loved_ones_orders_label")})]})]}),e.jsxs("div",{className:"inline-flex items-end gap-[5px] relative flex-[0_0_auto]",children:[e.jsx("div",{className:"relative w-fit mt-[-1.00px] font-bold text-darkdark text-2xl leading-[22px] [font-family:'Inter',Helvetica] tracking-[0] whitespace-nowrap",children:l("active_deal.orders_count",{count:t==null?void 0:t.orders_count})}),e.jsx("div",{className:"relative w-[124px] h-[22px]",children:e.jsx("div",{className:"inline-flex items-center gap-1 relative",children:e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-greengreen text-sm tracking-[0] leading-[22px] whitespace-nowrap",children:l("active_deal.orders_available",{available:t==null?void 0:t.participants_count})})})})]})]}),e.jsx("div",{className:"relative w-full h-[7px] mt-4 bg-gray-300 rounded-full",children:e.jsx("div",{className:"absolute h-[7px] bg-greengreen rounded-full",style:{width:`${0/20*100}%`}})})]}),e.jsxs("div",{className:"flex flex-col items-start p-5 relative self-stretch w-full flex-[0_0_auto] bg-whitewhite rounded-[5px] shadow-shadow-1",children:[e.jsxs("div",{className:"inline-flex flex-col items-start gap-5 relative flex-[0_0_auto]",children:[e.jsxs("div",{className:"inline-flex items-center gap-3.5 relative flex-[0_0_auto]",children:[e.jsx("div",{className:"relative w-[50px] h-[50px]",children:e.jsxs("div",{className:"relative h-[50px] rounded-[3px]",children:[e.jsx("div",{className:"bg-purplepurple absolute w-[50px] h-[50px] top-0 left-0 rounded-[3px] opacity-[0.08]"}),e.jsx(F,{className:"!absolute !w-[26px] !h-[26px] !top-3 !left-3",color:"#8646F4"})]})}),e.jsxs("div",{className:"inline-flex flex-col items-start relative flex-[0_0_auto]",children:[e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-darkdark text-base tracking-[0] leading-6 whitespace-nowrap",children:l("active_deal.wallet_label")}),e.jsx("div",{className:"relative w-fit [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap",children:l("active_deal.amount_collected_label")})]})]}),e.jsxs("div",{className:"inline-flex items-end gap-[5px] relative flex-[0_0_auto]",children:[e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-darkdark text-2xl tracking-[0] leading-[22px] whitespace-nowrap",children:`€${(t==null?void 0:t.current_amount)||0}`}),e.jsx("div",{className:"w-[67px] relative h-[22px]",children:e.jsx("div",{className:"inline-flex items-center gap-1 relative",children:e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-purplepurple text-sm tracking-[0] leading-[22px] whitespace-nowrap",children:l("active_deal.amount_target",{target:(t==null?void 0:t.orders_count)*(t==null?void 0:t.deal_price)})})})})]})]}),e.jsx("div",{className:"relative w-full h-[7px] mt-4 bg-gray-300 rounded-full",children:e.jsx("div",{className:"absolute h-[7px] bg-purplepurple rounded-full",style:{width:`${((t==null?void 0:t.current_amount)||0/((t==null?void 0:t.orders_count)*(t==null?void 0:t.deal_price)))*100}%`}})})]}),e.jsx("div",{className:"flex flex-col items-start gap-6 p-5 relative self-stretch w-full flex-[0_0_auto] bg-whitewhite rounded-[5px] shadow-shadow-1",children:e.jsxs("div",{className:"inline-flex flex-col items-start gap-5 relative flex-[0_0_auto] mr-[-11.00px]",children:[e.jsxs("div",{className:"inline-flex items-center gap-3.5 relative flex-[0_0_auto]",children:[e.jsx("div",{className:"relative w-[50px] h-[50px]",children:e.jsxs("div",{className:"relative h-[50px] rounded-[3px]",children:[e.jsx("div",{className:"bg-cyancyan absolute w-[50px] h-[50px] top-0 left-0 rounded-[3px] opacity-[0.08]"}),e.jsx(n,{className:"!absolute !w-[26px] !h-[26px] !top-3 !left-3",color:"#01A9DB"})]})}),e.jsxs("div",{className:"inline-flex flex-col items-start relative flex-[0_0_auto]",children:[e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-darkdark text-base tracking-[0] leading-6 whitespace-nowrap",children:l("active_deal.relatives_label")}),e.jsx("div",{className:"relative w-fit [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap",children:l("active_deal.participants_label")})]})]}),e.jsxs("div",{className:"inline-flex items-end gap-[5px] relative flex-[0_0_auto]",children:[e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-darkdark text-2xl tracking-[0] leading-[30px] whitespace-nowrap",children:l("active_deal.participants_count",{count:t==null?void 0:t.participants_count})}),e.jsx("div",{className:"w-[91px] relative h-[22px]"})]})]})}),e.jsx("img",{className:"relative self-stretch w-full h-px object-cover",alt:"Line",src:g}),e.jsx("div",{className:"flex-col flex items-start gap-[15px] relative self-stretch w-full flex-[0_0_auto]",children:[{step:1,bgColor:"bg-primary-color",textColor:"text-whitewhite"},{step:2,bgColor:"bg-whitewhite border-2 border-solid border-primary-color",textColor:"text-primary-color"},{step:3,bgColor:"bg-graygray border-2 border-solid border-stroke",textColor:"text-primary-color"},{step:4,bgColor:"bg-graygray border-2 border-solid border-stroke",textColor:"text-primary-color"},{step:5,bgColor:"bg-graygray border-2 border-solid border-stroke",textColor:"text-primary-color"}].map(({step:r,bgColor:C,textColor:H})=>e.jsxs("div",{className:"inline-flex items-center justify-center gap-2.5 relative flex-[0_0_auto] mr-[-24.00px]",children:[e.jsx("div",{className:"relative w-[52px] h-[50px]",children:e.jsx("div",{className:`relative w-[50px] h-[50px] rounded-[25px] ${C}`,children:e.jsx("div",{className:`absolute top-2.5 left-[17px] [font-family:'Inter',Helvetica] font-medium ${H} text-xl tracking-[0] leading-[26px] whitespace-nowrap`,children:r})})}),e.jsx("p",{className:"relative w-fit [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6",children:l(`active_deal.step_${r}`)})]},r))}),e.jsx("img",{className:"relative self-stretch w-full h-px object-cover",alt:"Line",src:g})]})})};export{de as default};
