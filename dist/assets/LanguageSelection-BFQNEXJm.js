import{a as h,u as p,c as v,d as w,r as s,at as b,j as e,C as j,ab as N,B as k,au as y}from"./index-CIi_c7mk.js";import{C}from"./ChevronDown-B2moJGO1.js";const E=()=>{const{t:a,i18n:L}=h(),f=p(),n=v(),{language:t,status:r}=w(l=>l.account),[i,o]=s.useState(t||"French"),[c,d]=s.useState(!1);s.useEffect(()=>{n(b())},[]),s.useEffect(()=>{t&&o(t)},[t]);const x=()=>{f("/settings")},u=()=>{d(!c)},g=l=>{o(l),d(!1)},m=()=>{n(y(i))};return e.jsxs("div",{className:"flex flex-col w-full h-screen items-start relative bg-primary-background",children:[r==="loading"&&e.jsx(j,{}),r!=="loading"&&e.jsxs("div",{className:"inline-flex flex-col items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto] w-full",children:[e.jsx("div",{className:"flex w-full items-center gap-3 pt-0 pb-5 px-0 relative flex-[0_0_auto] border-b [border-bottom-style:solid] border-stroke",onClick:x,children:e.jsxs("div",{className:"inline-flex items-center gap-2 relative flex-[0_0_auto]",children:[e.jsx(N,{className:"!relative !w-[18px] !h-[18px]",color:"#637381"}),e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#637381] text-base tracking-[0] leading-6 whitespace-nowrap",children:a("common.back")})]})}),e.jsx("div",{className:"relative w-fit font-heading-6 font-[number:var(--heading-6-font-weight)] text-[#1b4f4a] text-[length:var(--heading-6-font-size)] text-center tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] whitespace-nowrap [font-style:var(--heading-6-font-style)]",children:a("language.change")}),e.jsxs("div",{className:"flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full",children:[e.jsx("div",{className:"flex items-center gap-2.5 px-5 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-stroke",onClick:u,children:e.jsxs("div",{className:"flex items-center justify-between relative flex-1 grow",children:[e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#1b4f4a] text-base tracking-[0] leading-6 whitespace-nowrap",children:a(`language.${i}`)}),e.jsx(C,{className:"!relative !w-4 !h-4",color:"#1B4F4A"})]})}),c&&e.jsxs("div",{className:"absolute z-10 mt-10 w-full bg-white rounded-md shadow-lg border border-stroke",children:[e.jsx("div",{className:"px-4 py-2 cursor-pointer hover:bg-gray-200",onClick:()=>g("French"),children:a("language.french")}),e.jsx("div",{className:"px-4 py-2 cursor-pointer hover:bg-gray-200",onClick:()=>g("English"),children:a("language.english")})]})]}),e.jsx("div",{onClick:m,className:"w-full",children:e.jsx(k,{buttonText:a("common.confirm"),className:"!self-stretch !flex-[0_0_auto] !flex !w-full",color:"primary",kind:"primary",round:"semi-round",state:"default"})})]})]})};export{E as default};
