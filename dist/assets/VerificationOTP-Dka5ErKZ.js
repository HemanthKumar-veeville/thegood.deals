import{a as T,r as u,R as D,f as S,u as C,c as I,j as e,B as w,C as O,d as v,S as y,e as P}from"./index-DpeMktlG.js";import"./UserAlt-Clojgyy3.js";import"./LanguageDropdown-DF4JnH6L.js";import"./france-flag-icon-BP-lwE0P.js";const E=({value:l,onChange:c,index:r,inputRefs:i})=>e.jsx("div",{className:"flex flex-col w-12 h-12 items-start gap-[5px] relative",children:e.jsx("div",{className:"flex flex-col items-center gap-2.5 relative flex-1 self-stretch w-full grow",children:e.jsx("input",{type:"text",maxLength:"1",value:l,onChange:n=>c(n.target.value,r),ref:i[r],onKeyDown:n=>{n.key==="Backspace"&&!l&&r>0&&i[r-1].current.focus()},onPaste:n=>{const p=n.clipboardData.getData("Text"),d=[...otp];p.slice(0,5).split("").forEach((m,f)=>{r+f<otp.length&&(d[r+f]=m,i[r+f].current.value=m)}),setOtp(d),i[Math.min(r+p.length,otp.length-1)].current.focus(),n.preventDefault()},inputmode:"numeric",pattern:"[0-9]*",className:"flex items-start justify-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-stroke text-[#9CA3AF] text-base tracking-[0] leading-6 text-center focus: outline-[#1b4f4a]"})})}),q=()=>{const{t:l}=T(),[c,r]=u.useState(Array(5).fill("")),[i,n]=u.useState(33),[p,d]=u.useState(!0),[m,f]=u.useState(!1),x=u.useRef(c.map(()=>D.createRef())),b=S(),j=C(),h=new URLSearchParams(b.search).get("email"),k=I(),g=async()=>{var t,a;try{const s=await v.post("resend_code");(s==null?void 0:s.status)===200&&(console.log("Mail Sent"),n(33))}catch(s){console.error("There was an error!",s),y.fire({icon:"error",title:"Error...",text:(a=(t=s==null?void 0:s.response)==null?void 0:t.data)==null?void 0:a.detail})}};u.useEffect(()=>{g();const t=setInterval(()=>{n(a=>a>0?a-1:0)},1e3);return()=>clearInterval(t)},[]),u.useEffect(()=>{window.scrollTo(0,0)},[]);const N=(t,a)=>{if(/^[0-9]$/.test(t)||t===""){const s=[...c];s[a]=t,r(s),t!==""&&a<c.length-1&&x.current[a+1].current.focus(),s.every(o=>o!=="")?d(!1):d(!0)}},_=async()=>{var a,s;f(!0),console.log("OTP submitted:",c.join(""));const t=new FormData;t.append("email",h),t.append("verification_code",c.join(""));try{const o=await v.post("verify",t);(o==null?void 0:o.status)===201?(k(P()),j("/")):f(!1)}catch(o){console.error("There was an error!",o),y.fire({icon:"error",title:"Error...",text:(s=(a=o==null?void 0:o.response)==null?void 0:a.data)==null?void 0:s.detail}),f(!1)}r(Array(5).fill("")),f(!1)};return e.jsxs("div",{className:"relative w-full h-[640px] bg-primary-background mx-auto",children:[!m&&e.jsxs("div",{className:"flex flex-col w-full items-start gap-[15px] px-[35px] py-[15px] absolute left-0",children:[e.jsxs("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold !text-[#1b4f4a] text-2xl text-center tracking-[0] leading-[30px] whitespace-nowrap",children:[l("otp.confirm_email")," "]}),e.jsxs("p",{className:"relative w-fit [font-family:'Inter',Helvetica] font-normal !text-[#1b4f4a] text-sm tracking-[0] leading-[22px]",children:[l("otp.code_sent")," ",e.jsx("br",{}),h||"{email}"]}),e.jsx("div",{className:"flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]",children:c.map((t,a)=>e.jsx(E,{value:t,onChange:N,index:a,inputRefs:x.current},a))}),i!==0&&e.jsxs("div",{className:"relative w-fit [font-family:'Inter',Helvetica] font-normal text-secondary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap",children:[l("otp.send_again")," (",i,"s) "]}),i===0&&e.jsx("div",{onClick:g,className:"!w-full",children:e.jsx(w,{buttonText:l("otp.send_code_again"),className:"!self-stretch !flex-[0_0_auto] !flex !w-full hover:bg-secondary-background cursor-pointer",color:"primary",kind:"primary",round:"semi-round",state:"active"})}),e.jsx("div",{onClick:p?null:_,className:"!w-full",children:e.jsx(w,{buttonText:l("otp.login"),className:"!self-stretch !flex-[0_0_auto] !flex !w-full hover:bg-secondary-background cursor-pointer",color:"primary",kind:"primary",round:"semi-round",state:p?"disable":"active"})})]}),m&&e.jsx(O,{})]})};export{q as VerificationOTP,q as default};
