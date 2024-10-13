import{a as g,j as e,W as S,B as h,S as M,r as l,u as E,c as W,C as T,X as L,ap as B}from"./index-DYXqT_ri.js";import{w as I,S as R}from"./ErrorAlert-BKHzRe_3.js";const u=I(M),z=({message:r,buttonText:o,shouldCloseOnOverlayClick:i=!0,handleClick:n=()=>u.close(),onClose:c})=>{const{t:d}=g();u.fire({html:e.jsxs("div",{className:"flex flex-col items-center gap-5 px-[15px] py-[30px] relative bg-white rounded-[20px]",children:[e.jsx("div",{className:"relative self-stretch w-full h-[122px]",children:e.jsxs("div",{className:"w-full gap-2.5 flex flex-col items-center relative",children:[e.jsx("div",{className:"relative w-[60px] h-[60px] bg-yellow-light rounded-[37px]",children:e.jsx(S,{className:"!absolute !w-full !h-full",color:"#FFC107"})}),e.jsx("div",{className:"gap-[15px] self-stretch w-full flex-[0_0_auto] flex flex-col items-center relative",children:e.jsx("p",{className:"relative self-stretch mt-[-1.00px] font-body-large-semibold font-[number:var(--body-large-semibold-font-weight)] text-darkdark text-[length:var(--body-large-semibold-font-size)] text-center tracking-[var(--body-large-semibold-letter-spacing)] leading-[var(--body-large-semibold-line-height)] [font-style:var(--body-large-semibold-font-style)]",children:r||d("customWarningModal.defaultMessage")})})]})}),e.jsx("div",{className:"gap-[18px] self-stretch w-full flex-[0_0_auto] flex flex-col items-center relative mt-3",onClick:n,children:e.jsx(h,{buttonText:o||d("customWarningModal.buttonText"),className:"!flex-[0_0_auto] !flex !bg-yellow !w-[190px]",color:"primary",kind:"primary",round:"semi-round",state:"default"})})]}),showConfirmButton:!1,customClass:{popup:"p-0 bg-transparent shadow-none flex justify-center items-center"},backdrop:!0,allowOutsideClick:i,willClose:c})},P=()=>{const[r,o]=l.useState(""),[i,n]=l.useState(!1),c=E(),d=W(),{t}=g(),[w,f]=l.useState(!1),[v,x]=l.useState(""),[b,m]=l.useState(!1),[y,_]=l.useState(""),j=s=>{o(s.target.value)},N=s=>{if(!s)return t("lost_password.errors.empty_email");if(!s.includes("@"))return t("lost_password.errors.invalid_at");const a=s.split("@");return a.length!==2||!a[1].includes(".")?t("lost_password.errors.invalid_domain"):/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)?null:t("lost_password.errors.invalid_email")},k=async()=>{x("");const s=N(r);if(s){x(s),f(!0);return}try{n(!0),await d(B({email:r})).unwrap(),o(""),c("/check-email")}catch(a){console.log(a);const p=(a==null?void 0:a.detail)||t("lost_password.errors.send_error");_(p),m(!0)}finally{n(!1)}},C=()=>{c("/auth?signin")};return e.jsxs("div",{className:"relative w-full h-screen bg-primary-background",children:[i&&e.jsx(T,{})," ",w&&e.jsx(z,{message:v,buttonText:t("waiting_deal.got_it"),onClose:()=>f(!1)}),b&&e.jsx(R,{message:y,buttonText:t("waiting_deal.got_it"),onClose:()=>m(!1)}),!i&&e.jsxs("div",{className:"flex flex-col w-full items-start gap-[15px] px-[35px] py-[15px] absolute left-0",children:[e.jsx("div",{className:"flex items-center gap-3 pt-0 pb-5 px-0 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-stroke",children:e.jsxs("div",{className:"inline-flex items-center gap-2 relative flex-[0_0_auto]",onClick:C,children:[e.jsx(L,{className:"!relative !w-[18px] !h-[18px]",color:"#637381"}),e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-text-color text-base tracking-[0] leading-6 whitespace-nowrap",children:t("common.back")})]})}),e.jsx("div",{className:"relative w-fit font-heading-6 font-[number:var(--heading-6-font-weight)] text-primary-color text-[length:var(--heading-6-font-size)] text-center tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] whitespace-nowrap [font-style:var(--heading-6-font-style)]",children:t("lost_password.title")}),e.jsx("p",{className:"relative self-stretch [font-family:'Inter',Helvetica] font-normal text-primary-color text-sm tracking-[0] leading-[22px]",children:t("lost_password.description")}),e.jsx("div",{className:"flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full",children:e.jsx("div",{className:"flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow",children:e.jsx("div",{className:"flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-whitewhite rounded-md border border-solid border-primary-color",children:e.jsx("input",{type:"email",value:r,onChange:j,placeholder:t("lost_password.email_placeholder"),className:"w-full border-none outline-none"})})})}),e.jsx("div",{onClick:k,className:"w-full",children:e.jsx(h,{buttonText:t("lost_password.send_link_button"),className:"!self-stretch !flex-[0_0_auto] !flex !w-full",color:"primary",kind:"primary",round:"semi-round",state:"default"})})]})]})};export{P as default};
