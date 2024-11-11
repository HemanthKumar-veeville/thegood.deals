import{a as g,j as e,W as b,u as j,l as N,c as y,d as k,r as o,Q as C,C as S,S as f,A as E,_ as B,o as L,$ as T,L as p}from"./index-DTnFDC40.js";import{P as I}from"./Pencil1-DS1NNmF3.js";import{S as M}from"./SuccessAlert-BZlJQYml.js";const P=()=>{const{t:a}=g();return e.jsx(M,{className:"!flex !bg-orangeorange-light-5",divClassName:"!text-orangeorange-dark !tracking-[0] !text-sm !flex-1 ![white-space:unset] ![font-style:unset] !font-medium ![font-family:'Inter',Helvetica] !leading-5 !w-[unset]",frameClassName:"!flex-1 !flex !grow",groupClassName:"!bg-orangeorange",icon:e.jsx(b,{className:"!absolute !w-3 !h-3 !top-1 !left-1",color:"white"}),style:"three",text:a("waitingBanner.waitingMessage")})},q=()=>{var x;const{t:a}=g(),u=j();N();const n=y(),h=k(i=>i.deals),{deal:s,status:l,error:r}=h,t=((x=s==null?void 0:s.Deal)==null?void 0:x.length)&&(s==null?void 0:s.Deal[0])||{},c=new URLSearchParams(location.search).get("deal_id"),[v,d]=o.useState(!1);o.useEffect(()=>{window.scrollTo(0,0)},[]);const w=()=>{u("/")},_=()=>{d(!0)};return o.useEffect(()=>{n(C(c))},[c,n]),e.jsxs("div",{className:"flex flex-col w-full items-start relative bg-primary-background mx-auto",children:[l==="loading"&&e.jsx(S,{}),l==="failed"&&e.jsx(f,{message:(r==null?void 0:r.detail)||a("active_deal.error"),buttonText:a("active_deal.try_again"),shouldCloseOnOverlayClick:!1,handleClick:fetchDeal}),l==="succeeded"&&e.jsxs("div",{className:"flex flex-col w-full items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]",children:[e.jsx("div",{className:"flex items-center gap-3 pb-4 px-0 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-stroke",children:e.jsxs("div",{className:"inline-flex items-center gap-2 relative flex-[0_0_auto] cursor-pointer",onClick:w,children:[e.jsx(E,{className:"!relative !w-[18px] !h-[18px]",color:"#637381"}),e.jsx("div",{className:"relative w-fit font-medium text-primary-text-color text-base leading-6 whitespace-nowrap",children:a("waiting_deal.back_button","Back")})]})}),v&&e.jsx(f,{message:a("waiting_deal.error_message"),buttonText:a("waiting_deal.got_it"),onClose:()=>d(!1)}),e.jsx(P,{className:"relative w-full bg-orange-100 text-orange-700 rounded-md p-3",children:a("waiting_deal.banner_message","Waiting for confirmation of the deal from the artisan")}),e.jsx(B,{pictures:(t==null?void 0:t.deal_images)||[L]}),e.jsx("div",{className:"relative self-stretch font-semibold text-primary-color text-2xl leading-[30px] [font-family:'Inter-SemiBold',Helvetica] tracking-[0]",children:t==null?void 0:t.deal_title}),e.jsxs("div",{className:"flex items-center gap-2.5 relative self-stretch w-full",children:[e.jsx(T,{className:"!relative !w-5 !h-5"}),e.jsx("p",{className:"relative w-fit font-normal text-primary-color text-sm leading-[22px] whitespace-nowrap",children:t==null?void 0:t.collection_location})]}),e.jsxs("div",{className:"flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full rounded-md border border-solid border-primary-color cursor-pointer",onClick:_,children:[e.jsx(I,{className:"!relative !w-5 !h-5",color:"#1B4F4A"}),e.jsx("button",{className:"all-[unset] w-fit font-medium text-primary-color text-base text-center leading-6 whitespace-nowrap",children:a("waiting_deal.edit_button","Edit the deal")})]}),e.jsx(p,{}),e.jsx("div",{className:"flex-col flex items-start gap-[15px] relative self-stretch w-full",children:[a("draft_deal.step_1","The artisan accepted the deal"),a("draft_deal.step_2","The good deal in progress"),a("draft_deal.step_3","Goal achieved! 🎉"),a("draft_deal.step_4","Order sent to the artisan"),a("draft_deal.step_5","Organizer coordinates with artisan for delivery")].map((i,m)=>e.jsxs("div",{className:"inline-flex items-center gap-2.5 relative",children:[e.jsx("div",{className:"relative w-[52px] h-[50px]",children:e.jsx("div",{className:"relative w-[50px] h-[50px] bg-graygray rounded-[25px] border-2 border-solid border-stroke",children:e.jsx("div",{className:"absolute top-2.5 left-[17px] font-medium text-primary-color text-xl leading-[26px]",children:m+1})})}),e.jsx("div",{className:"relative w-fit font-medium text-primary-color text-base leading-6",children:i})]},m))}),e.jsx(p,{})]})]})};export{q as default};
