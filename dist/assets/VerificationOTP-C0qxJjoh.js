import{a as M,r as n,R,k as I,u as L,c as O,j as e,S as B,l as q,B as S,C as A,e as j,f as F}from"./index-CaMxJxFb.js";const U=({value:a,onChange:i,index:t,inputRefs:o,otp:f,setOtp:d})=>e.jsx("div",{className:"flex flex-col w-12 h-12 items-start gap-[5px] relative",children:e.jsx("div",{className:"flex flex-col items-center gap-2.5 relative flex-1 self-stretch w-full grow",children:e.jsx("input",{type:"text",maxLength:"1",value:a,onChange:l=>i(l.target.value,t),ref:o.current[t],onKeyDown:l=>{l.key==="Backspace"&&!a&&t>0&&o.current[t-1].current.focus()},onPaste:l=>{const m=l.clipboardData.getData("Text"),p=[...f];m.slice(0,5).split("").forEach((x,g)=>{t+g<f.length&&(p[t+g]=x,o.current[t+g].current.value=x)}),d(p),o.current[Math.min(t+m.length,f.length-1)].current.focus(),l.preventDefault()},inputMode:"numeric",pattern:"[0-9]*",className:"flex items-start justify-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-stroke text-[#1b4f4a] text-base tracking-[0] leading-6 text-center focus:outline-none"})})}),K=({initialSeconds:a,onResend:i,t})=>{const o=n.useRef(a),[f,d]=n.useState(o.current);return n.useEffect(()=>{const l=setInterval(()=>{o.current>0&&(o.current-=1,d(o.current))},1e3);return()=>clearInterval(l)},[]),e.jsx(e.Fragment,{children:f!==0?e.jsxs("div",{className:"relative w-fit font-normal text-secondary-text-color text-sm leading-[22px] whitespace-nowrap",children:[t("otp.send_again")," (",f,"s) "]}):e.jsx("div",{onClick:i,className:"w-full",children:e.jsx(S,{buttonText:t("otp.send_code_again"),className:"w-full hover:bg-secondary-background cursor-pointer",color:"primary",kind:"primary",round:"semi-round",state:"active"})})})},$=()=>{const{t:a}=M(),[i,t]=n.useState(Array(5).fill("")),[o,f]=n.useState(!0),[d,l]=n.useState(!1),m=n.useRef(i.map(()=>R.createRef())),p=I(),x=L(),h=new URLSearchParams(p.search).get("email"),N=O(),[_,w]=n.useState(!1),[k,y]=n.useState(""),[C,b]=n.useState(!1),[D,E]=n.useState(""),v=async()=>{var r,c;try{const s=await j.post("resend_code");(s==null?void 0:s.status)===200&&(b(!0),E(a("otp.code_sent")+" "+(h||"{email}")))}catch(s){console.error(a("Payment.error_title"),s),w(!0),y((c=(r=s==null?void 0:s.response)==null?void 0:r.data)==null?void 0:c.detail)}};n.useEffect(()=>{v()},[]),n.useEffect(()=>{window.scrollTo(0,0)},[]);const T=(r,c)=>{if(/^[0-9]$/.test(r)||r===""){const s=[...i];s[c]=r,t(s),r!==""&&c<i.length-1&&m.current[c+1].current.focus(),s.every(u=>u!=="")?f(!1):f(!0)}},P=async()=>{var c,s;l(!0);const r=new FormData;r.append("email",h),r.append("verification_code",i.join(""));try{const u=await j.post("verify",r);(u==null?void 0:u.status)===201&&(N(F()),x("/"))}catch(u){console.error(a("Payment.error_title"),u),w(!0),y((s=(c=u==null?void 0:u.response)==null?void 0:c.data)==null?void 0:s.detail)}finally{t(Array(5).fill("")),l(!1)}};return e.jsxs("div",{className:"relative w-full h-[640px] bg-primary-background mx-auto",children:[_&&e.jsx(B,{message:k,buttonText:a("waiting_deal.got_it"),onClose:()=>w(!1)}),C&&e.jsx(q,{message:D,buttonText:a("waiting_deal.got_it"),onClose:()=>b(!1)}),!d&&e.jsxs("div",{className:"flex flex-col w-full items-start gap-[15px] px-[35px] py-[15px] absolute left-0",children:[e.jsxs("div",{className:"relative w-fit mt-[-1.00px] font-semibold text-[#1b4f4a] text-2xl text-center leading-[30px] whitespace-nowrap",children:[a("otp.confirm_email")," "]}),e.jsxs("p",{className:"relative w-fit font-normal text-[#1b4f4a] text-sm leading-[22px]",children:[a("otp.code_sent")," ",e.jsx("br",{}),h||"{email}"]}),e.jsx("div",{className:"flex items-center justify-between w-full",children:i.map((r,c)=>e.jsx(U,{value:r,onChange:T,index:c,inputRefs:m,otp:i,setOtp:t},c))}),e.jsx(K,{initialSeconds:180,onResend:v,t:a}),e.jsx("div",{onClick:o?null:P,className:"w-full",children:e.jsx(S,{buttonText:a("otp.login"),className:"w-full hover:bg-secondary-background cursor-pointer",color:"primary",kind:"primary",round:"semi-round",state:o?"disable":"active"})})]}),d&&e.jsx(A,{})]})};export{$ as VerificationOTP,$ as default};
