import{a as p,u as v,c as w,g as b,r as n,a2 as j,j as e,C as N,N as k,B as y,a3 as L}from"./index-u_-BTjEQ.js";import{C}from"./ChevronDown-CMtvqTap.js";const E=()=>{const{t:a,i18n:g}=p(),f=v(),l=w(),{language:t,status:x}=b(s=>s.account),[r,i]=n.useState(t||"French"),[o,c]=n.useState(!1);n.useEffect(()=>{l(j())},[]),n.useEffect(()=>{t&&i(t)},[t]);const h=()=>{f("/settings")},m=()=>{c(!o)},d=s=>{i(s),g.changeLanguage(s==="English"?"en":"fr"),c(!1)},u=()=>{l(L(r))};return e.jsxs("div",{className:"flex flex-col w-full h-screen items-start relative bg-primary-background",children:[x==="loading"&&e.jsx(N,{}),e.jsxs("div",{className:"inline-flex flex-col items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]",children:[e.jsx("div",{className:"flex w-[290px] items-center gap-3 pt-0 pb-5 px-0 relative flex-[0_0_auto] border-b [border-bottom-style:solid] border-stroke",onClick:h,children:e.jsxs("div",{className:"inline-flex items-center gap-2 relative flex-[0_0_auto]",children:[e.jsx(k,{className:"!relative !w-[18px] !h-[18px]",color:"#637381"}),e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#637381] text-base tracking-[0] leading-6 whitespace-nowrap",children:a("common.back")})]})}),e.jsx("div",{className:"relative w-fit font-heading-6 font-[number:var(--heading-6-font-weight)] text-[#1b4f4a] text-[length:var(--heading-6-font-size)] text-center tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] whitespace-nowrap [font-style:var(--heading-6-font-style)]",children:a("language.change")}),e.jsxs("div",{className:"flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full",children:[e.jsx("div",{className:"flex items-center gap-2.5 px-5 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-stroke",onClick:m,children:e.jsxs("div",{className:"flex items-center justify-between relative flex-1 grow",children:[e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#1b4f4a] text-base tracking-[0] leading-6 whitespace-nowrap",children:a(`language.${r}`)}),e.jsx(C,{className:"!relative !w-4 !h-4",color:"#1B4F4A"})]})}),o&&e.jsxs("div",{className:"absolute z-10 mt-10 w-full bg-white rounded-md shadow-lg border border-stroke",children:[e.jsx("div",{className:"px-4 py-2 cursor-pointer hover:bg-gray-200",onClick:()=>d("French"),children:a("language.french")}),e.jsx("div",{className:"px-4 py-2 cursor-pointer hover:bg-gray-200",onClick:()=>d("English"),children:a("language.english")})]})]}),e.jsx("div",{onClick:u,className:"w-full",children:e.jsx(y,{buttonText:a("common.confirm"),className:"!self-stretch !flex-[0_0_auto] !flex !w-full",color:"primary",kind:"primary",round:"semi-round",state:"default"})})]})]})};export{E as default};
