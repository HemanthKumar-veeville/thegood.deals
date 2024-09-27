import{q as j,s as N,r as n,a as u,j as e,L as _,v as k,k as C,E as S,d as I,P,u as E}from"./index-DwweaPqp.js";import{L as p}from"./line-63-BwS0eOFc.js";function H({heading:t,btnText:a}){const o=j(),r=N(),[l,s]=n.useState(null),[h,i]=n.useState(!1),[x,v]=n.useState("avisihks@gmail.com"),{t:y}=u(),f=async m=>{if(m.preventDefault(),!(!o||!r)){i(!0);try{const{setupIntent:d,error:c}=await o.confirmSetup({elements:r,confirmParams:{},redirect:"if_required"});c?(c.type==="card_error"||c.type==="validation_error"?s(c.message):s("An unexpected error occurred."),console.error("Error during setup confirmation:",c)):(console.log("SetupIntent confirmed:",d),s("Setup confirmed successfully."))}catch(d){console.error("Error in setup confirmation:",d),s("An error occurred during setup confirmation.")}finally{i(!1)}}},w={layout:{type:"accordion",defaultCollapsed:!1,radios:!1,spacedAccordionItems:!0},appearance:{theme:"flat",variables:{colorPrimaryText:"#262626",colorPrimary:"#0570de",colorBackground:"#ffffff",colorText:"#30313d",colorDanger:"#df1b41",fontFamily:"Ideal Sans, system-ui, sans-serif",spacingUnit:"2px",borderRadius:"4px"},rules:{".Label":{display:"none"}}}},b={defaultValues:{email:x},appearance:{theme:"flat",variables:{colorPrimaryText:"#262626",colorPrimary:"#0570de",colorBackground:"#ffffff",colorText:"#30313d",colorDanger:"#df1b41",fontFamily:"Ideal Sans, system-ui, sans-serif"},rules:{".Label":{display:"none"}}}};return e.jsxs("form",{id:"payment-form",onSubmit:f,className:"mx-auto w-full",children:[e.jsx(_,{id:"link-authentication-element",onChange:m=>{v(m.value.email)},options:b}),e.jsx(k,{id:"payment-element",options:w}),l&&e.jsx("div",{id:"payment-message",className:"mt-3 p-3 text-red-600 bg-red-100 border border-red-400 rounded",children:l}),e.jsx("img",{className:"relative self-stretch w-full h-px object-cover mt-3",alt:y("withdrawal.line_alt"),src:p}),e.jsxs("div",{className:"mt-3 flex items-center justify-center gap-2.5 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-primary-color rounded-md cursor-pointer",onClick:f,children:[e.jsx("button",{className:"all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-6 whitespace-nowrap",children:a}),e.jsx(C,{className:"!relative !w-5 !h-5",color:"white"})]})]})}function T({heading:t,btnText:a,...o}){const{stripePromise:r}=o,[l,s]=n.useState("");return n.useEffect(()=>{(async()=>{try{const i=new FormData;i.append("amount",10),i.append("currency","eur");const x=await I.post("/create_payment_intent",i);console.log(x),s("")}catch(i){console.error("Error creating PaymentIntent:",i)}})()},[]),e.jsx(e.Fragment,{children:l&&r&&e.jsx(S,{stripe:r,options:{clientSecret:l},children:e.jsx(H,{heading:t,btnText:a})})})}const g=({color:t="#F23030",className:a})=>e.jsxs("svg",{className:`${a}`,fill:"none",height:"16",viewBox:"0 0 16 16",width:"16",xmlns:"http://www.w3.org/2000/svg",children:[e.jsxs("g",{clipPath:"url(#clip0_310_12395)",children:[e.jsx("path",{d:"M7.95153 5.20606H7.97577C8.10683 5.20606 8.20001 5.29925 8.20001 5.4303C8.20001 5.55205 8.09203 5.65454 7.97577 5.65454H7.95153C7.82047 5.65454 7.72728 5.56136 7.72728 5.4303C7.72728 5.30856 7.83526 5.20606 7.95153 5.20606Z",fill:t,stroke:t,strokeWidth:"0.666667"}),e.jsx("path",{d:"M7.75152 7.34546C7.75152 7.22372 7.85949 7.12122 7.97576 7.12122C8.11656 7.12122 8.2 7.224 8.2 7.32122V11.0788C8.2 11.2005 8.09202 11.303 7.97576 11.303C7.85401 11.303 7.75152 11.1951 7.75152 11.0788V7.34546Z",fill:t,stroke:t,strokeWidth:"0.666667"}),e.jsx("path",{d:"M7.97576 0.678787C3.92728 0.678787 0.63031 3.95151 0.63031 8C0.63031 12.0485 3.92728 15.3455 7.97576 15.3455C12.0243 15.3455 15.297 12.0485 15.297 8C15.297 3.95151 12.0243 0.678787 7.97576 0.678787ZM7.97576 14.2545C4.53334 14.2545 1.72122 11.4424 1.72122 8C1.72122 4.55758 4.53334 1.74545 7.97576 1.74545C11.4182 1.74545 14.2061 4.55758 14.2061 8C14.2061 11.4424 11.4182 14.2545 7.97576 14.2545Z",fill:t})]}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_310_12395",children:e.jsx("rect",{fill:"white",height:"16",width:"16"})})})]});g.propTypes={color:P.string};const B=()=>e.jsx("div",{className:"flex flex-col items-start gap-[15px] p-[15px] relative bg-whitewhite rounded-[5px] mx-auto w-full",children:e.jsxs("div",{className:"flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]",children:[e.jsxs("div",{className:"flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]",children:[e.jsx("div",{className:"flex w-[162.5px] items-center gap-[5px] relative",children:e.jsx("div",{className:"relative w-fit mt-[-1.00px] font-body-extra-small-text-regular font-[number:var(--body-extra-small-text-regular-font-weight)] text-primary-text-color text-[length:var(--body-extra-small-text-regular-font-size)] text-center tracking-[var(--body-extra-small-text-regular-letter-spacing)] leading-[var(--body-extra-small-text-regular-line-height)] whitespace-nowrap [font-style:var(--body-extra-small-text-regular-font-style)]",children:"Order"})}),e.jsx("div",{className:"inline-flex items-start justify-end gap-2.5 relative flex-[0_0_auto]",children:e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-primary-color text-sm text-right tracking-[0] leading-[22px] whitespace-nowrap",children:"58.00 €"})})]}),e.jsx("div",{className:"flex flex-col items-end gap-[5px] relative self-stretch w-full flex-[0_0_auto]",children:e.jsxs("div",{className:"flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]",children:[e.jsxs("div",{className:"flex w-full items-center gap-[5px] relative",children:[e.jsx("div",{className:"relative w-fit mt-[-1.00px] font-body-extra-small-text-regular font-[number:var(--body-extra-small-text-regular-font-weight)] text-primary-text-color text-[length:var(--body-extra-small-text-regular-font-size)] text-center tracking-[var(--body-extra-small-text-regular-letter-spacing)] leading-[var(--body-extra-small-text-regular-line-height)] whitespace-nowrap [font-style:var(--body-extra-small-text-regular-font-style)]",children:"Service Fees"}),e.jsx(g,{className:"!relative !w-3.5 !h-3.5"})]}),e.jsx("div",{className:"inline-flex items-start justify-end gap-2.5 relative flex-[0_0_auto]",children:e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-primary-color text-sm text-right tracking-[0] leading-[22px] whitespace-nowrap",children:"2.90 €"})})]})}),e.jsxs("div",{className:"flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]",children:[e.jsx("div",{className:"flex w-[162.5px] items-center gap-[5px] relative",children:e.jsx("div",{className:"relative w-fit mt-[-1.00px] font-body-extra-small-text-regular font-[number:var(--body-extra-small-text-regular-font-weight)] text-primary-text-color text-[length:var(--body-extra-small-text-regular-font-size)] text-center tracking-[var(--body-extra-small-text-regular-letter-spacing)] leading-[var(--body-extra-small-text-regular-line-height)] whitespace-nowrap [font-style:var(--body-extra-small-text-regular-font-style)]",children:"Payment Fees"})}),e.jsx("div",{className:"inline-flex items-start justify-end gap-2.5 relative flex-[0_0_auto]",children:e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-primary-color text-sm text-right tracking-[0] leading-[22px] whitespace-nowrap",children:"1.16 €"})})]}),e.jsxs("div",{className:"flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]",children:[e.jsx("div",{className:"flex w-[162.5px] items-center gap-[5px] relative",children:e.jsx("div",{className:"relative w-fit mt-[-1.00px] font-body-extra-small-text-regular font-[number:var(--body-extra-small-text-regular-font-weight)] text-primary-text-color text-[length:var(--body-extra-small-text-regular-font-size)] text-center tracking-[var(--body-extra-small-text-regular-letter-spacing)] leading-[var(--body-extra-small-text-regular-line-height)] whitespace-nowrap [font-style:var(--body-extra-small-text-regular-font-style)]",children:"Delivery Fees"})}),e.jsx("div",{className:"inline-flex items-start justify-end gap-2.5 relative flex-[0_0_auto]",children:e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-primary-color text-sm text-right tracking-[0] leading-[22px] whitespace-nowrap",children:"1.00 €"})})]}),e.jsx("div",{className:"flex flex-col items-end gap-[5px] relative self-stretch w-full flex-[0_0_auto]",children:e.jsxs("div",{className:"flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]",children:[e.jsx("div",{className:"relative w-fit font-body-extra-small-text-regular font-[number:var(--body-extra-small-text-regular-font-weight)] text-primary-text-color text-[length:var(--body-extra-small-text-regular-font-size)] text-center tracking-[var(--body-extra-small-text-regular-letter-spacing)] leading-[var(--body-extra-small-text-regular-line-height)] whitespace-nowrap [font-style:var(--body-extra-small-text-regular-font-style)]",children:"TOTAL TTC"}),e.jsxs("div",{className:"inline-flex items-start justify-end gap-2.5 relative flex-[0_0_auto]",children:[e.jsx("div",{className:"[font-family:'Inter-Regular',Helvetica] font-normal text-primary-text-color leading-6 line-through relative w-fit mt-[-1.00px] text-sm text-right tracking-[0] whitespace-nowrap",children:"135,98 €"}),e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-primary-color text-sm text-right tracking-[0] leading-[22px] whitespace-nowrap",children:"63.06 €"})]})]})}),e.jsxs("div",{className:"flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]",children:[e.jsx("div",{className:"relative w-fit font-body-extra-small-text-regular font-[number:var(--body-extra-small-text-regular-font-weight)] text-secondary-color text-[length:var(--body-extra-small-text-regular-font-size)] text-center tracking-[var(--body-extra-small-text-regular-letter-spacing)] leading-[var(--body-extra-small-text-regular-line-height)] whitespace-nowrap [font-style:var(--body-extra-small-text-regular-font-style)]",children:"Save"}),e.jsx("div",{className:"font-body-small-medium font-[number:var(--body-small-medium-font-weight)] text-secondary-color leading-[var(--body-small-medium-line-height)] relative w-fit mt-[-1.00px] text-[length:var(--body-small-medium-font-size)] text-right tracking-[var(--body-small-medium-letter-spacing)] whitespace-nowrap [font-style:var(--body-small-medium-font-style)]",children:"77,98 €"})]})]})}),z=({heading:t,btnText:a,stripePromise:o})=>{n.useState(!1);const r=E(),{t:l}=u(),s=()=>{r(a==="Validate payment"?"/admin-view-deal":"/admin-wallet")};return n.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsx("div",{className:"flex flex-col w-full h-full items-start relative bg-primary-background mx-auto",children:e.jsxs("div",{className:"flex flex-col w-full items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]",children:[e.jsx("div",{className:"relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-primary-color text-2xl tracking-[0] leading-[30px]",children:t}),e.jsx(B,{}),e.jsx(T,{stripePromise:o,heading:t,btnText:a}),e.jsx("img",{className:"relative self-stretch w-full h-px object-cover",alt:l("withdrawal.line_alt"),src:p}),e.jsx("button",{className:"all-[unset] box-border flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] rounded-md border border-solid border-primary-color cursor-pointer",onClick:s,children:e.jsx("div",{className:"all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap",children:l("withdrawal.back_button")})})]})})};export{z as default};
