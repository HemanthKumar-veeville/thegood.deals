import{a as m,j as e,u,f as w,c as v,g as _,r as l,o as b,A as j,I as N,i as y,M as k,L as S}from"./index-B-1kzR92.js";import{P as E,L}from"./Pencil1-CS4C6sIW.js";import{S as B}from"./SuccessAlert-Dmbv38jk.js";import{W as C}from"./Warning1-DKiKGOTB.js";import{S as I}from"./ErrorAlert-zdkvsKZ4.js";const M=()=>{const{t}=m();return e.jsx(B,{className:"!flex !bg-orangeorange-light-5",divClassName:"!text-orangeorange-dark !tracking-[0] !text-sm !flex-1 ![white-space:unset] ![font-style:unset] !font-medium ![font-family:'Inter',Helvetica] !leading-5 !w-[unset]",frameClassName:"!flex-1 !flex !grow",groupClassName:"!bg-orangeorange",icon:e.jsx(C,{className:"!absolute !w-3 !h-3 !top-1 !left-1",color:"white"}),style:"three",text:t("waitingBanner.waitingMessage")})},H=()=>{var c;const{t}=m(),x=u();w();const i=v(),f=_(r=>r.deals),{deal:s}=f,a=((c=s==null?void 0:s.Deal)==null?void 0:c.length)&&(s==null?void 0:s.Deal[0])||{},o=new URLSearchParams(location.search).get("deal_id"),[p,n]=l.useState(!1);l.useEffect(()=>{window.scrollTo(0,0)},[]);const g=()=>{x("/")},h=()=>{n(!0)};return l.useEffect(()=>{i(b(o))},[o,i]),e.jsx("div",{className:"flex flex-col w-full items-start relative bg-primary-background mx-auto",children:e.jsxs("div",{className:"flex flex-col w-full items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]",children:[e.jsx("div",{className:"flex items-center gap-3 pb-4 px-0 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-stroke",children:e.jsxs("div",{className:"inline-flex items-center gap-2 relative flex-[0_0_auto] cursor-pointer",onClick:g,children:[e.jsx(j,{className:"!relative !w-[18px] !h-[18px]",color:"#637381"}),e.jsx("div",{className:"relative w-fit font-medium text-primary-text-color text-base leading-6 whitespace-nowrap",children:t("waiting_deal.back_button","Back")})]})}),p&&e.jsx(I,{message:t("waiting_deal.error_message"),buttonText:t("waiting_deal.got_it"),onClose:()=>n(!1)}),e.jsx(M,{className:"relative w-full bg-orange-100 text-orange-700 rounded-md p-3",children:t("waiting_deal.banner_message","Waiting for confirmation of the deal from the artisan")}),e.jsx(N,{pictures:(a==null?void 0:a.deal_images)||[y]}),e.jsx("div",{className:"relative self-stretch font-semibold text-primary-color text-2xl leading-[30px] [font-family:'Inter-SemiBold',Helvetica] tracking-[0]",children:a==null?void 0:a.deal_title}),e.jsxs("div",{className:"flex items-center gap-2.5 relative self-stretch w-full",children:[e.jsx(k,{className:"!relative !w-5 !h-5"}),e.jsx("p",{className:"relative w-fit font-normal text-primary-color text-sm leading-[22px] whitespace-nowrap",children:a==null?void 0:a.collection_location})]}),e.jsxs("div",{className:"flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full rounded-md border border-solid border-primary-color cursor-pointer",onClick:h,children:[e.jsx(E,{className:"!relative !w-5 !h-5",color:"#1B4F4A"}),e.jsx("button",{className:"all-[unset] w-fit font-medium text-primary-color text-base text-center leading-6 whitespace-nowrap",children:t("waiting_deal.edit_button","Edit the deal")})]}),e.jsx("img",{className:"relative self-stretch w-full h-px object-cover",alt:t("waiting_deal.line_alt","Line separator"),src:L}),e.jsx("div",{className:"flex-col flex items-start gap-[15px] relative self-stretch w-full",children:[t("draft_deal.step_1","The artisan accepted the deal"),t("draft_deal.step_2","The good deal in progress"),t("draft_deal.step_3","Goal achieved! 🎉"),t("draft_deal.step_4","Order sent to the artisan"),t("draft_deal.step_5","Organizer coordinates with artisan for delivery")].map((r,d)=>e.jsxs("div",{className:"inline-flex items-center gap-2.5 relative",children:[e.jsx("div",{className:"relative w-[52px] h-[50px]",children:e.jsx("div",{className:"relative w-[50px] h-[50px] bg-graygray rounded-[25px] border-2 border-solid border-stroke",children:e.jsx("div",{className:"absolute top-2.5 left-[17px] font-medium text-primary-color text-xl leading-[26px]",children:d+1})})}),e.jsx("div",{className:"relative w-fit font-medium text-primary-color text-base leading-6",children:r})]},d))}),e.jsx("img",{className:"relative self-stretch w-full h-px object-cover",alt:t("waiting_deal.line_alt","Line separator"),src:S})]})})};export{H as default};