import{j as e,a as u,u as h,f as g,c as v,g as j,r as o,o as w,A as b,I as N,i as _,L as y}from"./index-DpeMktlG.js";import{L as n,P as L}from"./Pencil1-BSFIMHbx.js";import{S as k}from"./SuccessAlert-CidkfDXg.js";import{P}from"./Pencil-Uen70TNc.js";import"./Badges-DmwKhpKW.js";import"./CheckmarkCircle1-BgqnMZzh.js";const D=()=>e.jsx(k,{className:"!flex !bg-cyancyan-light-3 w-[100%]",divClassName:"!tracking-[0] !text-sm !flex-1 ![white-space:unset] ![font-style:unset] !font-medium ![font-family:'Inter',Helvetica] !leading-5 !w-[unset]",frameClassName:"!flex-1 !flex !grow",groupClassName:"!bg-cyancyan",icon:e.jsx(P,{className:"!absolute !w-3 !h-3 !top-1 !left-1",color:"white"}),style:"three",text:e.jsxs(e.Fragment,{children:["This deal is a draft.",e.jsx("br",{}),"Please complete it"]})}),F=()=>{var i;const{t}=u(),d=h();g();const x=v(),m=j(l=>l.deals),{deal:s,status:S}=m,a=((i=s==null?void 0:s.Deal)==null?void 0:i.length)&&(s==null?void 0:s.Deal[0])||{};console.log("dealData",a);const r=new URLSearchParams(location.search),f=r.get("deal_id");r.get("is_creator"),o.useEffect(()=>{window.scrollTo(0,0)},[]);const p=()=>{d("/")};return o.useEffect(()=>{x(w(f))},[]),e.jsx("div",{className:"flex flex-col w-full items-start relative bg-primary-background mx-auto",children:e.jsxs("div",{className:"flex flex-col w-full items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]",children:[e.jsx("div",{className:"flex items-center gap-3 px-0 relative self-stretch w-full flex-[0_0_auto]",children:e.jsxs("div",{className:"inline-flex items-center gap-2 relative flex-[0_0_auto] cursor-pointer",onClick:p,children:[e.jsx(b,{className:"!relative !w-[18px] !h-[18px]",color:"#637381"}),e.jsx("div",{className:"relative w-fit font-medium text-primary-text-color text-base leading-6 whitespace-nowrap",children:t("draft_deal.back_button","Back")})]})}),e.jsx("img",{className:"relative self-stretch w-full h-px object-cover",alt:"Line",src:n}),e.jsx(D,{className:"relative w-full bg-blue-100 text-blue-800 rounded-md p-3"}),e.jsx(N,{pictures:(a==null?void 0:a.image_url)||[_]}),e.jsx("div",{className:"relative self-stretch font-semibold text-primary-color text-2xl leading-[30px]",children:a==null?void 0:a.deal_title}),e.jsxs("div",{className:"flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full rounded-md border border-solid border-primary-color",children:[e.jsx(L,{className:"!relative !w-5 !h-5",color:"#1B4F4A"}),e.jsx("button",{className:"all-[unset] w-fit font-medium text-primary-color text-base text-center leading-6 whitespace-nowrap",children:t("draft_deal.edit_button","Edit the deal")})]}),e.jsx("img",{className:"relative self-stretch w-full h-px object-cover",alt:"Line",src:n}),e.jsx("div",{className:"flex-col flex items-start gap-[15px] relative self-stretch w-full",children:[t("draft_deal.step_1","The artisan accepted the deal"),t("draft_deal.step_2","The good deal in progress"),t("draft_deal.step_3","Goal achieved! 🎉"),t("draft_deal.step_4","Order sent to the artisan"),t("draft_deal.step_5","Organizer coordinates with artisan for delivery")].map((l,c)=>e.jsxs("div",{className:"inline-flex items-center gap-2.5 relative",children:[e.jsx("div",{className:"relative w-[52px] h-[50px]",children:e.jsx("div",{className:"relative w-[50px] h-[50px] bg-graygray rounded-[25px] border-2 border-solid border-stroke",children:e.jsx("div",{className:"absolute top-2.5 left-[17px] font-medium text-primary-color text-xl leading-[26px]",children:c+1})})}),e.jsx("div",{className:"relative w-fit font-medium text-primary-color text-base leading-6",children:l})]},c))}),e.jsx("img",{className:"relative self-stretch w-full h-px object-cover",alt:"Line",src:y})]})})};export{F as default};
