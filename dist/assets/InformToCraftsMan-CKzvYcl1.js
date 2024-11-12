import{P as j,j as e,r as i,c as C,u as N,a as E,d as k,U as S,S as L,C as I,L as x,V as H,X as T,Y as M}from"./index-Cx4-lgNC.js";import{E as P}from"./Envelope--wjIEp4M.js";const u=({color:s="white",className:n})=>e.jsx("svg",{className:`${n}`,fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M21.5998 11.4001L13.8373 3.5251C13.4998 3.1876 12.9748 3.1876 12.6373 3.5251C12.2998 3.8626 12.2998 4.3876 12.6373 4.7251L18.9373 11.1376H2.9998C2.5498 11.1376 2.1748 11.5126 2.1748 11.9626C2.1748 12.4126 2.5498 12.8251 2.9998 12.8251H19.0123L12.6373 19.3126C12.2998 19.6501 12.2998 20.1751 12.6373 20.5126C12.7873 20.6626 13.0123 20.7376 13.2373 20.7376C13.4623 20.7376 13.6873 20.6626 13.8373 20.4751L21.5998 12.6001C21.9373 12.2626 21.9373 11.7376 21.5998 11.4001Z",fill:s})});u.propTypes={color:j.string};const F=()=>{const[s,n]=i.useState(""),[m,f]=i.useState(!1),p=C(),d=N(),{t}=E();k(a=>a.deals);const[h,l]=i.useState(!1),[g,c]=i.useState(""),[_]=S(),o=_.get("id"),v=a=>{n(a.target.value)},w=a=>{if(!a)return t("inform_craftsman.errors.email_empty");if(!a.includes("@"))return t("inform_craftsman.errors.invalid_at_symbol");const r=a.split("@");return r.length!==2||!r[1].includes(".")?t("inform_craftsman.errors.invalid_domain"):/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(a)?null:t("inform_craftsman.errors.invalid_format")},y=async()=>{const a=w(s);if(a){l(!0),c(a);return}if(!o){l(!0),c(t("inform_craftsman.errors.deal_id_missing_message"));return}try{f(!0),await p(T({dealId:o,email:s})).unwrap(),await M(s,o),n(""),d("/thanks-admin")}catch(r){console.error("Failed to invite artisan:",r),l(!0),c((r==null?void 0:r.detail)||t("inform_craftsman.errors.invitation_failed_message"))}finally{f(!1)}},b=()=>{d(`/admin-draft-deal?deal_id=${o}`)};return i.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("div",{className:"flex flex-col w-full h-screen items-start relative bg-primary-background mx-auto",children:[h&&e.jsx(L,{message:g,buttonText:t("waiting_deal.got_it"),onClose:()=>l(!1)}),m&&e.jsx(I,{})," ",!m&&e.jsxs("div",{className:"flex-col w-full items-start gap-[15px] px-[35px] py-[15px] flex-[0_0_auto] flex relative",children:[e.jsx("p",{className:"relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-primary-color text-2xl tracking-[0] leading-[30px]",children:t("inform_craftsman.confirm_deal_title")}),e.jsx("p",{className:"relative self-stretch [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-base tracking-[0] leading-6",children:t("inform_craftsman.confirm_deal_message")}),e.jsx(x,{}),e.jsx("p",{className:"relative w-fit [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap",children:t("inform_craftsman.indicate_email")}),e.jsxs("div",{className:"flex h-[46px] items-center gap-2.5 pl-5 pr-4 py-3 relative self-stretch w-full bg-whitewhite rounded-md border border-solid border-stroke",children:[e.jsx(P,{className:"!relative !w-4 !h-4",color:"#6B7280"}),e.jsx("input",{type:"email",value:s,onChange:v,placeholder:t("inform_craftsman.email_placeholder"),className:"flex-1 border-none outline-none"})]}),e.jsxs("div",{className:"flex items-center justify-center gap-2.5 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-primary-color rounded-md cursor-pointer",onClick:y,children:[e.jsx("button",{className:"all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-whitewhite text-base text-center tracking-[0] leading-6 whitespace-nowrap",children:t("inform_craftsman.send_to_artisan")}),e.jsx(u,{className:"!relative !w-5 !h-5",color:"white"})]}),e.jsx(x,{}),e.jsxs("div",{className:"flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] rounded-md border border-solid border-primary-color cursor-pointer",onClick:b,children:[e.jsx(H,{className:"!relative !w-5 !h-5",color:"#1B4F4A"}),e.jsx("button",{className:"all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap",children:t("inform_craftsman.finish_later")})]})]})]})};export{F as default};
