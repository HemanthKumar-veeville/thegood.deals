import{j as e,a as g,u as h,f as u,c as v,g as w,r as n,n as _,A as b}from"./index-CUeh2-Zc.js";import{M as j}from"./Map-CbttZPlv.js";import{P as N,L as y}from"./Pencil1-geUa4diT.js";import{L as k}from"./line-63-BwS0eOFc.js";import{b as L}from"./blog-image-BEA4eBPN.js";import{S as E}from"./SuccessAlert-BqrHzFfv.js";import{W as S}from"./Warning1-CexsLlQL.js";import"./Badges-B0tj2L7M.js";import{I as W}from"./ImageSlider-z46Dx8rf.js";const B=()=>e.jsx(E,{className:"!flex !bg-orangeorange-light-5",divClassName:"!text-orangeorange-dark !tracking-[0] !text-sm !flex-1 ![white-space:unset] ![font-style:unset] !font-medium ![font-family:'Inter',Helvetica] !leading-5 !w-[unset]",frameClassName:"!flex-1 !flex !grow",groupClassName:"!bg-orangeorange",icon:e.jsx(S,{className:"!absolute !w-3 !h-3 !top-1 !left-1",color:"white"}),style:"three",text:"Waiting for confirmation of the deal from the artisian"}),z=()=>{var i;const{t}=g(),c=h();u();const d=v(),m=w(s=>s.deals),{deal:r,status:C}=m,a=((i=r==null?void 0:r.Deal)==null?void 0:i.length)&&(r==null?void 0:r.Deal[0])||{};console.log("dealData",a);const l=new URLSearchParams(location.search),x=l.get("deal_id");l.get("is_creator"),n.useEffect(()=>{window.scrollTo(0,0)},[]);const f=()=>{c("/")},p=()=>{alert(t("waiting_deal.alert_editing"))};return n.useEffect(()=>{d(_(x))},[]),e.jsx("div",{className:"flex flex-col w-full items-start relative bg-primary-background mx-auto",children:e.jsxs("div",{className:"flex flex-col w-full items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]",children:[e.jsx("div",{className:"flex items-center gap-3 pb-4 px-0 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-stroke",children:e.jsxs("div",{className:"inline-flex items-center gap-2 relative flex-[0_0_auto] cursor-pointer",onClick:f,children:[e.jsx(b,{className:"!relative !w-[18px] !h-[18px]",color:"#637381"}),e.jsx("div",{className:"relative w-fit font-medium text-primary-text-color text-base leading-6 whitespace-nowrap",children:t("waiting_deal.back_button","Back")})]})}),e.jsx(B,{className:"relative w-full bg-orange-100 text-orange-700 rounded-md p-3",children:t("waiting_deal.banner_message","Waiting for confirmation of the deal from the artisan")}),e.jsx(W,{pictures:(a==null?void 0:a.image_url)||[L]}),e.jsx("div",{className:"relative self-stretch font-semibold text-primary-color text-2xl leading-[30px]",children:a==null?void 0:a.deal_title}),e.jsxs("div",{className:"flex items-center gap-2.5 relative self-stretch w-full",children:[e.jsx(j,{className:"!relative !w-5 !h-5"}),e.jsx("p",{className:"relative w-fit font-normal text-primary-color text-sm leading-[22px] whitespace-nowrap",children:a==null?void 0:a.collection_location})]}),e.jsxs("div",{className:"flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full rounded-md border border-solid border-primary-color cursor-pointer",onClick:p,children:[e.jsx(N,{className:"!relative !w-5 !h-5",color:"#1B4F4A"}),e.jsx("button",{className:"all-[unset] w-fit font-medium text-primary-color text-base text-center leading-6 whitespace-nowrap",children:t("waiting_deal.edit_button","Edit the deal")})]}),e.jsx("img",{className:"relative self-stretch w-full h-px object-cover",alt:t("waiting_deal.line_alt","Line separator"),src:y}),e.jsx("div",{className:"flex-col flex items-start gap-[15px] relative self-stretch w-full",children:[t("draft_deal.step_1","The artisan accepted the deal"),t("draft_deal.step_2","The good deal in progress"),t("draft_deal.step_3","Goal achieved! 🎉"),t("draft_deal.step_4","Order sent to the artisan"),t("draft_deal.step_5","Organizer coordinates with artisan for delivery")].map((s,o)=>e.jsxs("div",{className:"inline-flex items-center gap-2.5 relative",children:[e.jsx("div",{className:"relative w-[52px] h-[50px]",children:e.jsx("div",{className:"relative w-[50px] h-[50px] bg-graygray rounded-[25px] border-2 border-solid border-stroke",children:e.jsx("div",{className:"absolute top-2.5 left-[17px] font-medium text-primary-color text-xl leading-[26px]",children:o+1})})}),e.jsx("div",{className:"relative w-fit font-medium text-primary-color text-base leading-6",children:s})]},o))}),e.jsx("img",{className:"relative self-stretch w-full h-px object-cover",alt:t("waiting_deal.line_alt","Line separator"),src:k})]})})};export{z as default};