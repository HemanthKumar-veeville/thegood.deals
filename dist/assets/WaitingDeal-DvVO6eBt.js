import{a as m,j as e,W as w,u as v,l as _,c as b,d as j,r as l,O as N,A as y,S as k,Z as S,n as E,_ as B,L as x}from"./index-DIIrneEn.js";import{P as C}from"./Pencil1-Dx1TwSdS.js";import{S as I}from"./SuccessAlert-CAuxHW5s.js";import"./CheckmarkCircle3-C6SXnQiV.js";const L=()=>{const{t}=m();return e.jsx(I,{className:"!flex !bg-orangeorange-light-5",divClassName:"!text-orangeorange-dark !tracking-[0] !text-sm !flex-1 ![white-space:unset] ![font-style:unset] !font-medium ![font-family:'Inter',Helvetica] !leading-5 !w-[unset]",frameClassName:"!flex-1 !flex !grow",groupClassName:"!bg-orangeorange",icon:e.jsx(w,{className:"!absolute !w-3 !h-3 !top-1 !left-1",color:"white"}),style:"three",text:t("waitingBanner.waitingMessage")})},O=()=>{var c;const{t}=m(),f=v();_();const i=b(),p=j(r=>r.deals),{deal:s}=p,a=((c=s==null?void 0:s.Deal)==null?void 0:c.length)&&(s==null?void 0:s.Deal[0])||{},o=new URLSearchParams(location.search).get("deal_id"),[g,n]=l.useState(!1);l.useEffect(()=>{window.scrollTo(0,0)},[]);const h=()=>{f("/")},u=()=>{n(!0)};return l.useEffect(()=>{i(N(o))},[o,i]),e.jsx("div",{className:"flex flex-col w-full items-start relative bg-primary-background mx-auto",children:e.jsxs("div",{className:"flex flex-col w-full items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]",children:[e.jsx("div",{className:"flex items-center gap-3 pb-4 px-0 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-stroke",children:e.jsxs("div",{className:"inline-flex items-center gap-2 relative flex-[0_0_auto] cursor-pointer",onClick:h,children:[e.jsx(y,{className:"!relative !w-[18px] !h-[18px]",color:"#637381"}),e.jsx("div",{className:"relative w-fit font-medium text-primary-text-color text-base leading-6 whitespace-nowrap",children:t("waiting_deal.back_button","Back")})]})}),g&&e.jsx(k,{message:t("waiting_deal.error_message"),buttonText:t("waiting_deal.got_it"),onClose:()=>n(!1)}),e.jsx(L,{className:"relative w-full bg-orange-100 text-orange-700 rounded-md p-3",children:t("waiting_deal.banner_message","Waiting for confirmation of the deal from the artisan")}),e.jsx(S,{pictures:(a==null?void 0:a.deal_images)||[E]}),e.jsx("div",{className:"relative self-stretch font-semibold text-primary-color text-2xl leading-[30px] [font-family:'Inter-SemiBold',Helvetica] tracking-[0]",children:a==null?void 0:a.deal_title}),e.jsxs("div",{className:"flex items-center gap-2.5 relative self-stretch w-full",children:[e.jsx(B,{className:"!relative !w-5 !h-5"}),e.jsx("p",{className:"relative w-fit font-normal text-primary-color text-sm leading-[22px] whitespace-nowrap",children:a==null?void 0:a.collection_location})]}),e.jsxs("div",{className:"flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full rounded-md border border-solid border-primary-color cursor-pointer",onClick:u,children:[e.jsx(C,{className:"!relative !w-5 !h-5",color:"#1B4F4A"}),e.jsx("button",{className:"all-[unset] w-fit font-medium text-primary-color text-base text-center leading-6 whitespace-nowrap",children:t("waiting_deal.edit_button","Edit the deal")})]}),e.jsx(x,{}),e.jsx("div",{className:"flex-col flex items-start gap-[15px] relative self-stretch w-full",children:[t("draft_deal.step_1","The artisan accepted the deal"),t("draft_deal.step_2","The good deal in progress"),t("draft_deal.step_3","Goal achieved! 🎉"),t("draft_deal.step_4","Order sent to the artisan"),t("draft_deal.step_5","Organizer coordinates with artisan for delivery")].map((r,d)=>e.jsxs("div",{className:"inline-flex items-center gap-2.5 relative",children:[e.jsx("div",{className:"relative w-[52px] h-[50px]",children:e.jsx("div",{className:"relative w-[50px] h-[50px] bg-graygray rounded-[25px] border-2 border-solid border-stroke",children:e.jsx("div",{className:"absolute top-2.5 left-[17px] font-medium text-primary-color text-xl leading-[26px]",children:d+1})})}),e.jsx("div",{className:"relative w-fit font-medium text-primary-color text-base leading-6",children:r})]},d))}),e.jsx(x,{})]})})};export{O as default};
