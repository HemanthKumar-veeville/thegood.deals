import{P as y,j as e,r as l,c as b,u as j,a as _,g as N,o as C,p as E}from"./index-DpUlIuas.js";import{S as n}from"./sweetalert2.all-y4yvMCcK.js";import{C as L}from"./CirclePlus55-C46hWNyG.js";import{E as k}from"./Envelope-CXsqEAjO.js";import{L as f}from"./line-63-BwS0eOFc.js";import"./UserAlt-BjjpEhkX.js";import"./SideBar-DxlpFath.js";import I from"./CustomLoader-COmooxfG.js";import"./france-flag-icon-BP-lwE0P.js";const p=({color:a="white",className:s})=>e.jsx("svg",{className:`${s}`,fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M21.5998 11.4001L13.8373 3.5251C13.4998 3.1876 12.9748 3.1876 12.6373 3.5251C12.2998 3.8626 12.2998 4.3876 12.6373 4.7251L18.9373 11.1376H2.9998C2.5498 11.1376 2.1748 11.5126 2.1748 11.9626C2.1748 12.4126 2.5498 12.8251 2.9998 12.8251H19.0123L12.6373 19.3126C12.2998 19.6501 12.2998 20.1751 12.6373 20.5126C12.7873 20.6626 13.0123 20.7376 13.2373 20.7376C13.4623 20.7376 13.6873 20.6626 13.8373 20.4751L21.5998 12.6001C21.9373 12.2626 21.9373 11.7376 21.5998 11.4001Z",fill:a})});p.propTypes={color:y.string};const $=()=>{const[a,s]=l.useState(""),[o,c]=l.useState(!1),x=b(),m=j(),{t:r}=_();N(t=>t.deals);const[u]=C(),d=u.get("id"),h=t=>{s(t.target.value)},g=t=>{if(!t)return"Please enter your email address.";if(!t.includes("@"))return"Email address must contain an '@' symbol.";const i=t.split("@");return i.length!==2||!i[1].includes(".")?"Email address must contain a valid domain (e.g., 'example@domain.com').":/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)?null:"Please enter a valid email address."},v=async()=>{const t=g(a);if(t){n.fire({icon:"warning",title:"Invalid Email",text:t});return}if(!d){n.fire({icon:"error",title:"Error",text:"Deal ID is missing in the URL."});return}try{c(!0),await x(E({dealId:d,email:a})).unwrap(),s(""),m("/thanks-admin")}catch(i){console.error("Failed to invite artisan:",i),n.fire({icon:"error",title:"Error",text:"There was an error inviting the artisan. Please try again later."})}finally{c(!1)}},w=()=>{m("/admin-draft-deal")};return l.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsxs("div",{className:"flex flex-col w-full h-screen items-start relative bg-primary-background mx-auto",children:[o&&e.jsx(I,{})," ",!o&&e.jsxs("div",{className:"flex-col w-full items-start gap-[15px] px-[35px] py-[15px] flex-[0_0_auto] flex relative",children:[e.jsx("p",{className:"relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-primary-color text-2xl tracking-[0] leading-[30px]",children:r("inform_craftsman.confirm_deal_title")}),e.jsx("p",{className:"relative self-stretch [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-base tracking-[0] leading-6",children:r("inform_craftsman.confirm_deal_message")}),e.jsx("img",{className:"relative self-stretch w-full h-px object-cover",alt:"Line",src:f}),e.jsx("p",{className:"relative w-fit [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap",children:r("inform_craftsman.indicate_email")}),e.jsxs("div",{className:"flex h-[46px] items-center gap-2.5 pl-5 pr-4 py-3 relative self-stretch w-full bg-whitewhite rounded-md border border-solid border-stroke",children:[e.jsx(k,{className:"!relative !w-4 !h-4",color:"#6B7280"}),e.jsx("input",{type:"email",value:a,onChange:h,placeholder:r("inform_craftsman.email_placeholder"),className:"flex-1 border-none outline-none"})]}),e.jsxs("div",{className:"flex items-center justify-center gap-2.5 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-primary-color rounded-md cursor-pointer",onClick:v,children:[e.jsx("button",{className:"all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-whitewhite text-base text-center tracking-[0] leading-6 whitespace-nowrap",children:r("inform_craftsman.send_to_artisan")}),e.jsx(p,{className:"!relative !w-5 !h-5",color:"white"})]}),e.jsx("img",{className:"relative self-stretch w-full h-px object-cover",alt:"Line",src:f}),e.jsxs("div",{className:"flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] rounded-md border border-solid border-primary-color cursor-pointer",onClick:w,children:[e.jsx(L,{className:"!relative !w-5 !h-5",color:"#1B4F4A"}),e.jsx("button",{className:"all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap",children:r("inform_craftsman.finish_later")})]})]})]})};export{$ as default};
