import{a as _,r as p,R as T,f as O,u as D,j as e,B as w,d as v}from"./index-XWsnXNZr.js";import{S as y}from"./sweetalert2.all-B-JCs3zF.js";import"./UserAlt-DUKn46Md.js";import"./SideBar-CS0UNQ7X.js";import S from"./CustomLoader-BggsN_3u.js";import"./france-flag-icon-BP-lwE0P.js";const I=({value:n,onChange:c,index:r,inputRefs:i})=>e.jsx("div",{className:"flex flex-col w-12 h-12 items-start gap-[5px] relative",children:e.jsx("div",{className:"flex flex-col items-center gap-2.5 relative flex-1 self-stretch w-full grow",children:e.jsx("input",{type:"text",maxLength:"1",value:n,onChange:l=>c(l.target.value,r),ref:i[r],onKeyDown:l=>{l.key==="Backspace"&&!n&&r>0&&i[r-1].current.focus()},onPaste:l=>{const u=l.clipboardData.getData("Text"),m=[...otp];u.slice(0,5).split("").forEach((d,f)=>{r+f<otp.length&&(m[r+f]=d,i[r+f].current.value=d)}),setOtp(m),i[Math.min(r+u.length,otp.length-1)].current.focus(),l.preventDefault()},inputmode:"numeric",pattern:"[0-9]*",className:"flex items-start justify-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-stroke text-[#9CA3AF] text-base tracking-[0] leading-6 text-center focus: outline-[#1b4f4a]"})})}),H=()=>{const{t:n}=_(),[c,r]=p.useState(Array(5).fill("")),[i,l]=p.useState(33),[u,m]=p.useState(!0),[d,f]=p.useState(!1),x=p.useRef(c.map(()=>T.createRef())),b=O(),j=D(),g=new URLSearchParams(b.search).get("email"),h=async()=>{var t,a;try{const s=await v.post("resend_code");(s==null?void 0:s.status)===201&&(console.log("Mail Sent"),l(33))}catch(s){console.error("There was an error!",s),y.fire({icon:"error",title:"Oops...",text:(a=(t=s==null?void 0:s.response)==null?void 0:t.data)==null?void 0:a.detail})}};p.useEffect(()=>{h();const t=setInterval(()=>{l(a=>a>0?a-1:0)},1e3);return()=>clearInterval(t)},[]),p.useEffect(()=>{window.scrollTo(0,0)},[]);const k=(t,a)=>{if(/^[0-9]$/.test(t)||t===""){const s=[...c];s[a]=t,r(s),t!==""&&a<c.length-1&&x.current[a+1].current.focus(),s.every(o=>o!=="")?m(!1):m(!0)}},N=async()=>{var a,s;f(!0),console.log("OTP submitted:",c.join(""));const t=new FormData;t.append("email",g),t.append("verification_code",c.join(""));try{const o=await v.post("verify",t);(o==null?void 0:o.status)===201?j("/"):f(!1)}catch(o){console.error("There was an error!",o),y.fire({icon:"error",title:"Oops...",text:(s=(a=o==null?void 0:o.response)==null?void 0:a.data)==null?void 0:s.detail}),f(!1)}r(Array(5).fill("")),f(!1)};return e.jsxs("div",{className:"relative w-full h-[640px] bg-primary-background mx-auto",children:[!d&&e.jsxs("div",{className:"flex flex-col w-full items-start gap-[15px] px-[35px] py-[15px] absolute left-0",children:[e.jsxs("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold !text-[#1b4f4a] text-2xl text-center tracking-[0] leading-[30px] whitespace-nowrap",children:[n("otp.confirm_email")," "]}),e.jsxs("p",{className:"relative w-fit [font-family:'Inter',Helvetica] font-normal !text-[#1b4f4a] text-sm tracking-[0] leading-[22px]",children:[n("otp.code_sent")," ",e.jsx("br",{}),g||"{email}"]}),e.jsx("div",{className:"flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]",children:c.map((t,a)=>e.jsx(I,{value:t,onChange:k,index:a,inputRefs:x.current},a))}),i!==0&&e.jsxs("div",{className:"relative w-fit [font-family:'Inter',Helvetica] font-normal text-secondary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap",children:[n("otp.send_again")," (",i,"s) "]}),i===0&&e.jsx("div",{onClick:h,className:"!w-full",children:e.jsx(w,{buttonText:n("otp.send_code_again"),className:"!self-stretch !flex-[0_0_auto] !flex !w-full hover:bg-secondary-background cursor-pointer",color:"primary",kind:"primary",round:"semi-round",state:"active"})}),e.jsx("div",{onClick:u?null:N,className:"!w-full",children:e.jsx(w,{buttonText:n("otp.login"),className:"!self-stretch !flex-[0_0_auto] !flex !w-full hover:bg-secondary-background cursor-pointer",color:"primary",kind:"primary",round:"semi-round",state:u?"disable":"active"})})]}),d&&e.jsx(S,{})]})};export{H as VerificationOTP,H as default};
