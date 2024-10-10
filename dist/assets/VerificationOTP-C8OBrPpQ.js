import{a as P,r as u,R as D,f as S,u as C,c as I,j as e,B as y,C as T,d as w,S as v,e as O}from"./index-B-1kzR92.js";import"./UserAlt-CUZUjWV7.js";import"./LanguageDropdown-DmzYyFsN.js";import"./france-flag-icon-BP-lwE0P.js";const L=({value:r,onChange:f,index:o,inputRefs:c})=>e.jsx("div",{className:"flex flex-col w-12 h-12 items-start gap-[5px] relative",children:e.jsx("div",{className:"flex flex-col items-center gap-2.5 relative flex-1 self-stretch w-full grow",children:e.jsx("input",{type:"text",maxLength:"1",value:r,onChange:n=>f(n.target.value,o),ref:c[o],onKeyDown:n=>{n.key==="Backspace"&&!r&&o>0&&c[o-1].current.focus()},onPaste:n=>{const p=n.clipboardData.getData("Text"),m=[...otp];p.slice(0,5).split("").forEach((d,i)=>{o+i<otp.length&&(m[o+i]=d,c[o+i].current.value=d)}),setOtp(m),c[Math.min(o+p.length,otp.length-1)].current.focus(),n.preventDefault()},inputmode:"numeric",pattern:"[0-9]*",className:"flex items-start justify-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-stroke text-[#9CA3AF] text-base tracking-[0] leading-6 text-center focus: outline-[#1b4f4a]"})})}),q=()=>{const{t:r}=P(),[f,o]=u.useState(Array(5).fill("")),[c,n]=u.useState(180),[p,m]=u.useState(!0),[d,i]=u.useState(!1),x=u.useRef(f.map(()=>D.createRef())),b=S(),j=C(),h=new URLSearchParams(b.search).get("email"),_=I(),g=async()=>{var t,a;try{const s=await w.post("resend_code");(s==null?void 0:s.status)===200&&n(180)}catch(s){console.error(r("Payment.error_title"),s),v.fire({icon:"error",title:r("Payment.error_title"),text:(a=(t=s==null?void 0:s.response)==null?void 0:t.data)==null?void 0:a.detail})}};u.useEffect(()=>{g();const t=setInterval(()=>{n(a=>a>0?a-1:0)},1e3);return()=>clearInterval(t)},[]),u.useEffect(()=>{window.scrollTo(0,0)},[]);const k=(t,a)=>{if(/^[0-9]$/.test(t)||t===""){const s=[...f];s[a]=t,o(s),t!==""&&a<f.length-1&&x.current[a+1].current.focus(),s.every(l=>l!=="")?m(!1):m(!0)}},N=async()=>{var a,s;i(!0);const t=new FormData;t.append("email",h),t.append("verification_code",f.join(""));try{const l=await w.post("verify",t);(l==null?void 0:l.status)===201?(_(O()),j("/")):i(!1)}catch(l){console.error(r("Payment.error_title"),l),v.fire({icon:"error",title:r("Payment.error_title"),text:(s=(a=l==null?void 0:l.response)==null?void 0:a.data)==null?void 0:s.detail}),i(!1)}o(Array(5).fill("")),i(!1)};return e.jsxs("div",{className:"relative w-full h-[640px] bg-primary-background mx-auto",children:[!d&&e.jsxs("div",{className:"flex flex-col w-full items-start gap-[15px] px-[35px] py-[15px] absolute left-0",children:[e.jsxs("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold !text-[#1b4f4a] text-2xl text-center tracking-[0] leading-[30px] whitespace-nowrap",children:[r("otp.confirm_email")," "]}),e.jsxs("p",{className:"relative w-fit [font-family:'Inter',Helvetica] font-normal !text-[#1b4f4a] text-sm tracking-[0] leading-[22px]",children:[r("otp.code_sent")," ",e.jsx("br",{}),h||"{email}"]}),e.jsx("div",{className:"flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]",children:f.map((t,a)=>e.jsx(L,{value:t,onChange:k,index:a,inputRefs:x.current},a))}),c!==0&&e.jsxs("div",{className:"relative w-fit [font-family:'Inter',Helvetica] font-normal text-secondary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap",children:[r("otp.send_again")," (",c,"s) "]}),c===0&&e.jsx("div",{onClick:g,className:"!w-full",children:e.jsx(y,{buttonText:r("otp.send_code_again"),className:"!self-stretch !flex-[0_0_auto] !flex !w-full hover:bg-secondary-background cursor-pointer",color:"primary",kind:"primary",round:"semi-round",state:"active"})}),e.jsx("div",{onClick:p?null:N,className:"!w-full",children:e.jsx(y,{buttonText:r("otp.login"),className:"!self-stretch !flex-[0_0_auto] !flex !w-full hover:bg-secondary-background cursor-pointer",color:"primary",kind:"primary",round:"semi-round",state:p?"disable":"active"})})]}),d&&e.jsx(T,{})]})};export{q as VerificationOTP,q as default};
