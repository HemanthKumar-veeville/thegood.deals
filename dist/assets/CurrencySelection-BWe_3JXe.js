import{a as g,u as v,c as w,d as b,r as a,av as j,j as e,C as y,ad as N,B as C,aw as k}from"./index-Yfg5rbkC.js";import{C as S}from"./ChevronDown-5gNGAsKr.js";const E=()=>{const{t:r}=g(),f=v(),n=w(),{currency:s,status:l}=b(t=>t.account);console.log({currency:s,status:l});const[o,i]=a.useState(s||"USD"),[c,d]=a.useState(!1),x=["USD","Euro"];a.useEffect(()=>{n(j())},[]),a.useEffect(()=>{s&&i(s)},[s]);const u=()=>{f("/settings")},m=t=>{i(t),d(!1)},p=()=>{d(!c)},h=()=>{n(k(o==="Euro"?"EUR":"USD"))};return e.jsxs("div",{className:"flex flex-col w-full h-screen items-start relative bg-primary-background",children:[l==="loading"&&e.jsx(y,{}),l!=="loading"&&e.jsxs("div",{className:"inline-flex flex-col items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto] w-full",children:[e.jsx("div",{className:"flex w-full items-center gap-3 pt-0 pb-5 px-0 relative flex-[0_0_auto] border-b [border-bottom-style:solid] border-stroke",onClick:u,children:e.jsxs("div",{className:"inline-flex items-center gap-2 relative flex-[0_0_auto]",children:[e.jsx(N,{className:"!relative !w-[18px] !h-[18px]",color:"#637381"}),e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#637381] text-base tracking-[0] leading-6 whitespace-nowrap",children:r("common.back")})]})}),e.jsx("div",{className:"relative w-fit font-heading-6 font-[number:var(--heading-6-font-weight)] text-[#1b4f4a] text-[length:var(--heading-6-font-size)] text-center tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] whitespace-nowrap [font-style:var(--heading-6-font-style)]",children:r("currency.change")}),e.jsxs("div",{className:"flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full",children:[e.jsx("div",{className:"flex items-center gap-2.5 px-5 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-stroke cursor-pointer",onClick:p,children:e.jsxs("div",{className:"flex items-center justify-between relative flex-1 grow",children:[e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#1b4f4a] text-base tracking-[0] leading-6 whitespace-nowrap",children:o}),e.jsx(S,{className:"!relative !w-4 !h-4",color:"#1B4F4A"})]})}),c&&e.jsx("div",{className:"absolute top-10 left-0 w-full bg-white border border-solid border-stroke rounded-md z-10",children:x.map(t=>e.jsx("div",{className:"px-5 py-3 hover:bg-gray-100 cursor-pointer",onClick:()=>m(t),children:t},t))})]}),e.jsx("div",{className:"w-full",onClick:h,children:e.jsx(C,{buttonText:r("common.confirm"),className:"!self-stretch !flex-[0_0_auto] !flex !w-full",color:"primary",kind:"primary",round:"semi-round",state:"default"})})]})]})};export{E as default};
