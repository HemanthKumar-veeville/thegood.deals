import{a as d,j as e,u as h,l as g,c as v,d as j,r as n,O as w,A as b,L as l,Y as _,n as y}from"./index-Bvyf-SBd.js";import{P as N}from"./Pencil1-bcMOTiLP.js";import{S as k}from"./SuccessAlert-CuDB8J9I.js";import{P as B}from"./Pencil-PQcUNqBQ.js";import"./Badges-B3SnhnQH.js";import"./CheckmarkCircle1-BnptUpek.js";const P=()=>{const{t}=d();return e.jsx(k,{className:"!flex !bg-cyancyan-light-3 w-[100%]",divClassName:"!tracking-[0] !text-sm !flex-1 ![white-space:unset] ![font-style:unset] !font-medium ![font-family:'Inter',Helvetica] !leading-5 !w-[unset]",frameClassName:"!flex-1 !flex !grow",groupClassName:"!bg-cyancyan",icon:e.jsx(B,{className:"!absolute !w-3 !h-3 !top-1 !left-1",color:"white"}),style:"three",text:e.jsxs(e.Fragment,{children:[t("draftBanner.draftMessage"),e.jsx("br",{}),t("draftBanner.completePrompt")]})})},T=()=>{var o;const{t}=d(),x=h();g();const m=v(),f=j(r=>r.deals),{deal:a,status:S}=f,s=((o=a==null?void 0:a.Deal)==null?void 0:o.length)&&(a==null?void 0:a.Deal[0])||{},i=new URLSearchParams(location.search),p=i.get("deal_id");i.get("is_creator"),n.useEffect(()=>{window.scrollTo(0,0)},[]);const u=()=>{x("/")};return n.useEffect(()=>{m(w(p))},[]),e.jsx("div",{className:"flex flex-col w-full items-start relative bg-primary-background mx-auto",children:e.jsxs("div",{className:"flex flex-col w-full items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]",children:[e.jsx("div",{className:"flex items-center gap-3 px-0 relative self-stretch w-full flex-[0_0_auto]",children:e.jsxs("div",{className:"inline-flex items-center gap-2 relative flex-[0_0_auto] cursor-pointer",onClick:u,children:[e.jsx(b,{className:"!relative !w-[18px] !h-[18px]",color:"#637381"}),e.jsx("div",{className:"relative w-fit font-medium text-primary-text-color text-base leading-6 whitespace-nowrap",children:t("draft_deal.back_button","Back")})]})}),e.jsx(l,{}),e.jsx(P,{className:"relative w-full bg-blue-100 text-blue-800 rounded-md p-3"}),e.jsx(_,{pictures:(s==null?void 0:s.deal_images)||[y]}),e.jsx("div",{className:"relative self-stretch font-semibold text-primary-color text-2xl leading-[30px] [font-family:'Inter-SemiBold',Helvetica] tracking-[0]",children:s==null?void 0:s.deal_title}),e.jsxs("div",{className:"flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full rounded-md border border-solid border-primary-color",children:[e.jsx(N,{className:"!relative !w-5 !h-5",color:"#1B4F4A"}),e.jsx("button",{className:"all-[unset] w-fit font-medium text-primary-color text-base text-center leading-6 whitespace-nowrap",children:t("draft_deal.edit_button","Edit the deal")})]}),e.jsx(l,{}),e.jsx("div",{className:"flex-col flex items-start gap-[15px] relative self-stretch w-full",children:[t("draft_deal.step_1","The artisan accepted the deal"),t("draft_deal.step_2","The good deal in progress"),t("draft_deal.step_3","Goal achieved! 🎉"),t("draft_deal.step_4","Order sent to the artisan"),t("draft_deal.step_5","Organizer coordinates with artisan for delivery")].map((r,c)=>e.jsxs("div",{className:"inline-flex items-center gap-2.5 relative",children:[e.jsx("div",{className:"relative w-[52px] h-[50px]",children:e.jsx("div",{className:"relative w-[50px] h-[50px] bg-graygray rounded-[25px] border-2 border-solid border-stroke",children:e.jsx("div",{className:"absolute top-2.5 left-[17px] font-medium text-primary-color text-xl leading-[26px]",children:c+1})})}),e.jsx("div",{className:"relative w-fit font-medium text-primary-color text-base leading-6",children:r})]},c))}),e.jsx(l,{})]})})};export{T as default};
