import{a as y,r as o,u as b,c as w,j as e,k as j,y as N,Y as d}from"./index-zltLBPnb.js";import{V as m}from"./VerticalLine2-CEUZ1xAF.js";import{L as c}from"./line-63-BwS0eOFc.js";const _=({HEADERHeaderOpenClassName:k,HEADERIcon:A=e.jsx(m,{className:"!relative !w-6 !h-6",color:"#1B4F4A"})})=>{const{t}=y(),[s,f]=o.useState(""),[h,u]=o.useState(0),i=b(),g=w(),n=new URLSearchParams(location.search).get("deal_id"),x=l=>{const a=l.target.value;f(a),u(a.length)},p=async l=>{const a={status:"refuse",reason_for_refusal:s};try{const r=await g(d({dealId:l,dealUpdate:a}));d.fulfilled.match(r)?i("/deal-refused-message"):console.error("Validation failed:",r.payload)}catch(r){console.error("An error occurred:",r)}},v=()=>{i(`/artisan-validation?deal_id=${n}`)};return e.jsx("div",{className:"flex flex-col w-full min-h-screen items-start relative bg-primary-background h-full",children:e.jsxs("div",{className:"flex flex-col w-[360px] items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]",children:[e.jsx("p",{className:"relative self-stretch mt-[-1.00px] font-heading-6 font-[number:var(--heading-6-font-weight)] text-primary-color text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] [font-style:var(--heading-6-font-style)]",children:t("artisanDeniedThe.not_agree")}),e.jsx("p",{className:"relative self-stretch font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-primary-text-color text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] [font-style:var(--body-medium-regular-font-style)]",children:t("artisanDeniedThe.send_info")}),e.jsx("img",{className:"relative self-stretch w-full h-px object-cover",alt:"Line",src:c}),e.jsxs("div",{className:"flex flex-col h-[220px] items-start gap-2.5 relative self-stretch w-full",children:[e.jsx("p",{className:"relative w-fit mt-[-1.00px] font-body-large-medium font-[number:var(--body-large-medium-font-weight)] text-primary-color text-[length:var(--body-large-medium-font-size)] tracking-[var(--body-large-medium-letter-spacing)] leading-[var(--body-large-medium-line-height)] whitespace-nowrap [font-style:var(--body-large-medium-font-style)]",children:t("artisanDeniedThe.indicate_info")}),e.jsx("div",{className:"flex flex-col items-start relative flex-1 self-stretch w-full grow",children:e.jsx("div",{className:"flex items-start gap-2.5 p-5 self-stretch w-full grow bg-whitewhite rounded-md border border-solid border-stroke relative flex-1",children:e.jsx("textarea",{value:s,onChange:x,placeholder:t("artisanDeniedThe.placeholder"),className:"mt-[-1.00px] font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-darkdark-6 text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] relative flex-1 [font-style:var(--body-medium-regular-font-style)] w-full focus:outline-none resize-none",maxLength:"250",rows:"5"})})}),e.jsx("div",{className:"flex items-end justify-end gap-[5px] relative self-stretch w-full flex-[0_0_auto]",children:e.jsx("div",{className:"relative w-[42px] h-[22px] mr-[-2.00px]",children:e.jsxs("div",{className:"absolute top-0 left-0 font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] text-right tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]",children:[h,"/250"]})})})]}),e.jsxs("div",{onClick:()=>p(n),className:"gap-2.5 bg-primary-color flex items-center justify-center px-6 py-3 relative self-stretch w-full flex-[0_0_auto] rounded-md cursor-pointer",children:[e.jsx("button",{className:"all-[unset] box-border text-whitewhite relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-base text-center tracking-[0] leading-6 whitespace-nowrap",children:t("artisanDeniedThe.send_for_proofreading")}),e.jsx(j,{className:"!relative !w-5 !h-5",color:"white"})]}),e.jsx("img",{className:"relative self-stretch w-full h-px object-cover",alt:"Line",src:c}),e.jsxs("div",{onClick:v,className:"gap-2 border border-solid border-primary-color flex items-center justify-center px-6 py-3 relative self-stretch w-full flex-[0_0_auto] rounded-md cursor-pointer",children:[e.jsx(N,{className:"!relative !w-5 !h-5",color:"#1B4F4A"}),e.jsx("p",{className:"text-primary-color relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-base text-center tracking-[0] leading-6 whitespace-nowrap",children:t("artisanDeniedThe.cancel_and_return")})]})]})})},H=()=>e.jsx(_,{HEADERHeaderOpenClassName:"![border-right-style:none] ![border-top-style:none] ![border-left-style:none]",HEADERIcon:e.jsx(m,{className:"!relative !w-6 !h-6",color:"#1B4F4A"})});export{H as default};
