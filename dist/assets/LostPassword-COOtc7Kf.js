import{r as c,u as h,c as g,j as e,y as v,B as w,_ as y}from"./index-o976eV8b.js";import{S as d}from"./sweetalert2.all-CpVgTXjR.js";import b from"./CustomLoader-Chyr_suO.js";const E=()=>{const[r,s]=c.useState(""),[l,i]=c.useState(!1),n=h(),m=g(),f=t=>{s(t.target.value)},x=t=>{if(!t)return"Please enter your email address.";if(!t.includes("@"))return"Email address must contain an '@' symbol.";const a=t.split("@");return a.length!==2||!a[1].includes(".")?"Email address must contain a valid domain (e.g., 'example@domain.com').":/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)?null:"Please enter a valid email address."},p=async()=>{const t=x(r);if(t){d.fire({icon:"warning",title:"Invalid Email",text:t});return}try{i(!0),await m(y({email:r})).unwrap(),s(""),n("/check-email")}catch(a){console.log(a);const o=(a==null?void 0:a.detail)||"There was an error sending the reset link. Please try again later.";d.fire({icon:"error",title:"Error",text:o})}finally{i(!1)}},u=()=>{n("/auth?signin")};return e.jsxs("div",{className:"relative w-full h-screen bg-primary-background",children:[l&&e.jsx(b,{})," ",!l&&e.jsxs("div",{className:"flex flex-col w-[360px] items-start gap-[15px] px-[35px] py-[15px] absolute left-0",children:[e.jsx("div",{className:"flex items-center gap-3 pt-0 pb-5 px-0 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-stroke",children:e.jsxs("div",{className:"inline-flex items-center gap-2 relative flex-[0_0_auto]",onClick:u,children:[e.jsx(v,{className:"!relative !w-[18px] !h-[18px]",color:"#637381"}),e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-text-color text-base tracking-[0] leading-6 whitespace-nowrap",children:"Back"})]})}),e.jsx("div",{className:"relative w-fit font-heading-6 font-[number:var(--heading-6-font-weight)] text-primary-color text-[length:var(--heading-6-font-size)] text-center tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] whitespace-nowrap [font-style:var(--heading-6-font-style)]",children:"Forgot Password"}),e.jsx("p",{className:"relative self-stretch [font-family:'Inter',Helvetica] font-normal text-primary-color text-sm tracking-[0] leading-[22px]",children:"Please enter your email address to receive a password reset link."}),e.jsx("div",{className:"flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full",children:e.jsx("div",{className:"flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow",children:e.jsx("div",{className:"flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-whitewhite rounded-md border border-solid border-primary-color",children:e.jsx("input",{type:"email",value:r,onChange:f,placeholder:"Enter your email",className:"w-full border-none outline-none"})})})}),e.jsx("div",{onClick:p,className:"w-full",children:e.jsx(w,{buttonText:"Send Reset Link",className:"!self-stretch !flex-[0_0_auto] !flex !w-full",color:"primary",kind:"primary",round:"semi-round",state:"default"})})]})]})};export{E as default};
