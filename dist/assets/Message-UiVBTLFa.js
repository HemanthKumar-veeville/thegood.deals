import{u as o,f as x,r as m,j as e,L as f,A as d}from"./index-WUHsu6Ri.js";const h=({heading:s,description:l,action:r})=>{const a=o(),t=x(),i=t==null?void 0:t.pathname,c=()=>{switch(i){case"/reset-password-success":a("/auth?signin");break;default:a("/")}};return m.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsx("div",{className:"flex flex-col w-full h-screen items-start relative bg-primary-background mx-auto",children:e.jsxs("div",{className:"flex flex-col w-full items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]",children:[e.jsx("div",{className:"relative self-stretch mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-primary-color text-2xl tracking-[0] leading-[30px]",children:s}),e.jsx("p",{className:"relative self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-primary-text-color text-base tracking-[0] leading-6",children:l.split(`
`).map((n,p)=>e.jsxs(e.Fragment,{children:[n,e.jsx("br",{})]}))}),e.jsx("img",{className:"relative self-stretch w-full h-px object-cover",alt:"line",src:f}),e.jsxs("div",{className:"flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-whitewhite rounded-md shadow-shadow-1 cursor-pointer",onClick:c,children:[e.jsx(d,{className:"!relative !w-5 !h-5",color:"#1B4F4A"}),e.jsx("button",{className:"all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap",children:r})]})]})})};export{h as default};
