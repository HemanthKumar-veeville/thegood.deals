import{a as g,u as v,c as w,g as b,r,S as y,j as e,y as j,B as N,T as C}from"./index-CUeh2-Zc.js";import{C as k}from"./ChevronDown-BK29AYlu.js";import S from"./CustomLoader-D6TgBUMw.js";const B=()=>{const{t:a}=g(),f=v(),l=w(),{currency:s,status:n}=b(t=>t.account);console.log({currency:s,status:n});const[o,i]=r.useState(s||"USD"),[c,d]=r.useState(!1),x=["USD","Euro"];r.useEffect(()=>{l(y())},[]),r.useEffect(()=>{s&&i(s)},[s]);const m=()=>{f("/settings")},u=t=>{i(t),d(!1)},p=()=>{d(!c)},h=()=>{l(C(o==="Euro"?"EUR":"USD"))};return e.jsxs("div",{className:"flex flex-col w-full h-screen items-start relative bg-primary-background",children:[n==="loading"&&e.jsx(S,{}),e.jsxs("div",{className:"inline-flex flex-col items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]",children:[e.jsx("div",{className:"flex w-[290px] items-center gap-3 pt-0 pb-5 px-0 relative flex-[0_0_auto] border-b [border-bottom-style:solid] border-stroke",onClick:m,children:e.jsxs("div",{className:"inline-flex items-center gap-2 relative flex-[0_0_auto]",children:[e.jsx(j,{className:"!relative !w-[18px] !h-[18px]",color:"#637381"}),e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#637381] text-base tracking-[0] leading-6 whitespace-nowrap",children:a("common.back")})]})}),e.jsx("div",{className:"relative w-fit font-heading-6 font-[number:var(--heading-6-font-weight)] text-[#1b4f4a] text-[length:var(--heading-6-font-size)] text-center tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] whitespace-nowrap [font-style:var(--heading-6-font-style)]",children:a("currency.change")}),e.jsxs("div",{className:"flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full",children:[e.jsx("div",{className:"flex items-center gap-2.5 px-5 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-stroke cursor-pointer",onClick:p,children:e.jsxs("div",{className:"flex items-center justify-between relative flex-1 grow",children:[e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#1b4f4a] text-base tracking-[0] leading-6 whitespace-nowrap",children:o}),e.jsx(k,{className:"!relative !w-4 !h-4",color:"#1B4F4A"})]})}),c&&e.jsx("div",{className:"absolute top-10 left-0 w-full bg-white border border-solid border-stroke rounded-md z-10",children:x.map(t=>e.jsx("div",{className:"px-5 py-3 hover:bg-gray-100 cursor-pointer",onClick:()=>u(t),children:t},t))})]}),e.jsx("div",{className:"w-full",onClick:h,children:e.jsx(N,{buttonText:a("common.confirm"),className:"!self-stretch !flex-[0_0_auto] !flex !w-full",color:"primary",kind:"primary",round:"semi-round",state:"default"})})]})]})};export{B as default};
