import{u as o,k as x,r as m,j as e,L as d,A as f}from"./index-BH2nyfgt.js";const h=({heading:s,description:r,action:l})=>{const a=o(),t=x(),i=t==null?void 0:t.pathname,n=()=>{switch(i){case"/reset-password-success":a("/auth?signin");break;default:a("/")}};return m.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsx("div",{className:"flex flex-col w-full h-screen items-start relative bg-primary-background mx-auto",children:e.jsxs("div",{className:"flex flex-col w-full items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]",children:[e.jsx("div",{className:"relative self-stretch mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-primary-color text-2xl tracking-[0] leading-[30px]",children:s}),e.jsx("p",{className:"relative self-stretch [font-family:'Inter-Regular',Helvetica] font-normal text-primary-text-color text-base tracking-[0] leading-6",children:r.split(`
`).map((c,p)=>e.jsxs(e.Fragment,{children:[c,e.jsx("br",{})]}))}),e.jsx(d,{}),e.jsxs("div",{className:"flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-whitewhite rounded-md shadow-shadow-1 cursor-pointer",onClick:n,children:[e.jsx(f,{className:"!relative !w-5 !h-5",color:"#1B4F4A"}),e.jsx("button",{className:"all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap",children:l})]})]})})};export{h as default};
