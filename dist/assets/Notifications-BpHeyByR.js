import{a as f,u as x,c as p,r as u,a2 as h,j as e,O as v,a3 as b}from"./index-B-1kzR92.js";const y=()=>{const{t:a}=f(),d=x(),n=p();u.useEffect(()=>{n(h())},[]);const m=i=>{const s={...t,[i]:!t[i]};n(b(s))},c=()=>{d("/settings")},t=[{name:a("notifications.newsletter"),enabled:!0},{name:a("notifications.sms"),enabled:!1},{name:a("notifications.emails"),enabled:!1},{name:a("notifications.whatsapp"),enabled:!1}];return e.jsx("div",{className:"flex flex-col w-full h-screen items-start relative bg-primary-background",children:e.jsxs("div",{className:"flex flex-col w-[360px] items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]",children:[e.jsx("div",{className:"flex items-center gap-3 pt-0 pb-5 px-0 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-stroke",onClick:c,children:e.jsxs("div",{className:"inline-flex items-center gap-2 relative flex-[0_0_auto]",children:[e.jsx(v,{className:"!relative !w-[18px] !h-[18px]",color:"#637381"}),e.jsx("div",{className:"relative w-fit mt-[-1.00px] font-body-medium-medium font-[number:var(--body-medium-medium-font-weight)] text-primary-text-color text-[length:var(--body-medium-medium-font-size)] tracking-[var(--body-medium-medium-letter-spacing)] leading-[var(--body-medium-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-medium-font-style)]",children:a("notifications.back")})]})}),e.jsx("div",{className:"relative self-stretch font-heading-6 font-[number:var(--heading-6-font-weight)] text-primary-color text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] [font-style:var(--heading-6-font-style)]",children:a("notifications.title")}),e.jsxs("div",{className:"flex flex-col items-start self-stretch w-full relative flex-[0_0_auto]",children:[t&&Object.keys(t).map((i,s)=>{var l,r,o;return e.jsxs("div",{className:"flex h-[54px] items-center justify-between px-0 py-[15px] relative self-stretch w-full border-b [border-bottom-style:solid] border-stroke",children:[e.jsx("div",{className:"inline-flex items-center gap-2 relative flex-[0_0_auto]",children:e.jsx("div",{className:"relative w-fit mt-[-1.00px] font-body-medium-medium font-[number:var(--body-medium-medium-font-weight)] text-primary-color text-[length:var(--body-medium-medium-font-size)] tracking-[var(--body-medium-medium-letter-spacing)] leading-[var(--body-medium-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-medium-font-style)]",children:(l=t[i])==null?void 0:l.name})}),e.jsx("div",{className:`relative w-[50px] h-[26px] mt-[-1.00px] mb-[-1.00px] rounded-[30px] cursor-pointer ${(r=t[i])!=null&&r.enabled?"bg-primary-color":"bg-gray-300"}`,onClick:()=>m(i),children:e.jsx("div",{className:`relative w-[18px] h-[18px] top-1 bg-white rounded-[9px] transition-transform ${(o=t[i])!=null&&o.enabled?"translate-x-7":"translate-x-1"}`})})]},s)}),e.jsx("div",{className:"relative w-[159px] h-[26px]"})]})]})})};export{y as default};