import{q as E,s as T,r as i,a as v,u as y,c as w,f as L,j as e,L as H,v as B,k as F,w as O,E as z,d as A,P as D,g,x as R}from"./index-BxJQCT5-.js";import{L as b}from"./line-63-BwS0eOFc.js";import M from"./CustomLoader-Bg0dVSVi.js";function q({heading:l,btnText:n}){const o=E(),s=T(),[c,t]=i.useState(null),[x,m]=i.useState(!1),[a,f]=i.useState(""),{t:r}=v(),d=y(),_=w(),N=L(),k=new URLSearchParams(N.search).get("orderId"),C=async h=>{if(h.preventDefault(),!o||!s){t("Stripe has not fully loaded yet. Please try again.");return}m(!0),t("");try{const{setupIntent:p,error:u}=await o.confirmSetup({elements:s,confirmParams:{},redirect:"if_required"});if(u)u.type==="card_error"||u.type==="validation_error"?t(u.message):t("An unexpected error occurred. Please try again."),console.error("Error during setup confirmation:",u);else{console.log("SetupIntent confirmed:",p);try{await _(O({orderId:k,setupIntent:p})),t("Setup confirmed successfully."),d("/thanks-withdrawal")}catch(S){console.error("Error during dispatch:",S),t("An error occurred while processing the payment setup.")}}}catch(p){console.error("Unexpected error in setup confirmation:",p),t("An unexpected error occurred during setup confirmation.")}finally{m(!1)}},I={layout:{type:"accordion",defaultCollapsed:!1,radios:!1,spacedAccordionItems:!0},appearance:{theme:"flat",variables:{colorPrimaryText:"#262626",colorPrimary:"#0570de",colorBackground:"#ffffff",colorText:"#30313d",colorDanger:"#df1b41",fontFamily:"Ideal Sans, system-ui, sans-serif",spacingUnit:"2px",borderRadius:"4px"},rules:{".Label":{display:"none"}}}},P={defaultValues:{email:a},appearance:{theme:"flat",variables:{colorPrimaryText:"#262626",colorPrimary:"#0570de",colorBackground:"#ffffff",colorText:"#30313d",colorDanger:"#df1b41",fontFamily:"Ideal Sans, system-ui, sans-serif"},rules:{".Label":{display:"none"}}}};return e.jsxs("form",{id:"payment-form",onSubmit:C,className:"mx-auto w-full",children:[e.jsx(H,{id:"link-authentication-element",onChange:h=>{f(h.value.email)},options:P}),e.jsx(B,{id:"payment-element",options:I}),c&&e.jsx("div",{id:"payment-message",className:"mt-3 p-3 text-red-600 bg-red-100 border border-red-400 rounded",children:c}),e.jsx("img",{className:"relative self-stretch w-full h-px object-cover mt-3",alt:r("withdrawal.line_alt"),src:b}),e.jsxs("div",{className:"mt-3 flex items-center justify-center gap-2.5 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-primary-color rounded-md",children:[e.jsx("button",{type:"submit",disabled:x||!o||!s,className:"all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-6 whitespace-nowrap",children:n}),e.jsx(F,{className:"!relative !w-5 !h-5",color:"white"})]})]})}function U({orderId:l,heading:n,btnText:o,...s}){const{stripePromise:c}=s,[t,x]=i.useState("");return i.useEffect(()=>{(async()=>{var a,f;try{const r=new FormData;r.append("amount",10),r.append("currency","eur");const d=await A.post(`/create_payment_intent/${l}`,r);console.log((a=d==null?void 0:d.data)==null?void 0:a.payment_intent[0]),x((f=d==null?void 0:d.data)==null?void 0:f.payment_intent[0])}catch(r){console.error("Error creating PaymentIntent:",r)}})()},[]),e.jsx(e.Fragment,{children:t&&c&&e.jsx(z,{stripe:c,options:{clientSecret:t},children:e.jsx(q,{heading:n,btnText:o})})})}const j=({color:l="#F23030",className:n})=>e.jsxs("svg",{className:`${n}`,fill:"none",height:"16",viewBox:"0 0 16 16",width:"16",xmlns:"http://www.w3.org/2000/svg",children:[e.jsxs("g",{clipPath:"url(#clip0_310_12395)",children:[e.jsx("path",{d:"M7.95153 5.20606H7.97577C8.10683 5.20606 8.20001 5.29925 8.20001 5.4303C8.20001 5.55205 8.09203 5.65454 7.97577 5.65454H7.95153C7.82047 5.65454 7.72728 5.56136 7.72728 5.4303C7.72728 5.30856 7.83526 5.20606 7.95153 5.20606Z",fill:l,stroke:l,strokeWidth:"0.666667"}),e.jsx("path",{d:"M7.75152 7.34546C7.75152 7.22372 7.85949 7.12122 7.97576 7.12122C8.11656 7.12122 8.2 7.224 8.2 7.32122V11.0788C8.2 11.2005 8.09202 11.303 7.97576 11.303C7.85401 11.303 7.75152 11.1951 7.75152 11.0788V7.34546Z",fill:l,stroke:l,strokeWidth:"0.666667"}),e.jsx("path",{d:"M7.97576 0.678787C3.92728 0.678787 0.63031 3.95151 0.63031 8C0.63031 12.0485 3.92728 15.3455 7.97576 15.3455C12.0243 15.3455 15.297 12.0485 15.297 8C15.297 3.95151 12.0243 0.678787 7.97576 0.678787ZM7.97576 14.2545C4.53334 14.2545 1.72122 11.4424 1.72122 8C1.72122 4.55758 4.53334 1.74545 7.97576 1.74545C11.4182 1.74545 14.2061 4.55758 14.2061 8C14.2061 11.4424 11.4182 14.2545 7.97576 14.2545Z",fill:l})]}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_310_12395",children:e.jsx("rect",{fill:"white",height:"16",width:"16"})})})]});j.propTypes={color:D.string};const V=({orderId:l})=>{const[n,o]=i.useState(!1),s=i.useRef(null),c=w(),t=g(r=>r.orders.order),x=g(r=>r.orders.orderStatus),m=g(r=>r.orders.orderError),a=t==null?void 0:t.Orders;i.useEffect(()=>{c(R({orderId:l}))},[]),console.log({orderState:a});const f=()=>{o(r=>!r)};return i.useEffect(()=>{const r=d=>{s.current&&!s.current.contains(d.target)&&o(!1)};return document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}},[s]),x==="loading"?e.jsx(M,{}):x==="failed"?e.jsxs("div",{children:["Error: ",m]}):e.jsx("div",{className:"flex flex-col items-start gap-[15px] p-[15px] relative bg-white rounded-[5px] mx-auto w-full",children:e.jsxs("div",{className:"flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]",children:[e.jsxs("div",{className:"flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]",children:[e.jsx("div",{className:"flex w-[162.5px] items-center gap-[5px] relative",children:e.jsx("div",{className:"relative w-fit mt-[-1.00px] font-body-extra-small-text-regular font-[number:var(--body-extra-small-text-regular-font-weight)] text-primary-text-color text-[length:var(--body-extra-small-text-regular-font-size)] text-center tracking-[var(--body-extra-small-text-regular-letter-spacing)] leading-[var(--body-extra-small-text-regular-line-height)] whitespace-nowrap [font-style:var(--body-extra-small-text-regular-font-style)]",children:"Order"})}),e.jsx("div",{className:"inline-flex items-start justify-end gap-2.5 relative flex-[0_0_auto]",children:e.jsxs("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-primary-color text-sm text-right tracking-[0] leading-[22px] whitespace-nowrap",children:[a==null?void 0:a.order_total," €"]})})]}),e.jsx("div",{className:"flex flex-col items-end gap-[5px] relative self-stretch w-full flex-[0_0_auto]",children:e.jsxs("div",{className:"flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]",children:[e.jsxs("div",{className:"flex w-full items-center gap-[5px] relative",children:[e.jsx("div",{className:"relative w-fit mt-[-1.00px] font-body-extra-small-text-regular font-[number:var(--body-extra-small-text-regular-font-weight)] text-primary-text-color text-[length:var(--body-extra-small-text-regular-font-size)] text-center tracking-[var(--body-extra-small-text-regular-letter-spacing)] leading-[var(--body-extra-small-text-regular-line-height)] whitespace-nowrap [font-style:var(--body-extra-small-text-regular-font-style)]",children:"Service Fees"}),e.jsxs("div",{className:"relative",children:[e.jsx("span",{onClick:f,children:e.jsx(j,{className:"!relative !w-3.5 !h-3.5 cursor-pointer"})}),n&&e.jsxs("div",{ref:s,className:"absolute z-10 w-[260px] p-2 bg-white text-gray-800 border border-gray-300 rounded-md shadow-lg bottom-full left-1/2 transform -translate-x-1/2 mb-2",children:["TheGoodDeals Commission of 6%",e.jsx("div",{className:"absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white border border-gray-300 -bottom-1 rotate-45"})]})]})]}),e.jsx("div",{className:"inline-flex items-start justify-end gap-2.5 relative flex-[0_0_auto]",children:e.jsxs("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-primary-color text-sm text-right tracking-[0] leading-[22px] whitespace-nowrap",children:[a==null?void 0:a.service_fees," €"]})})]})}),e.jsxs("div",{className:"flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]",children:[e.jsx("div",{className:"flex w-[162.5px] items-center gap-[5px] relative",children:e.jsx("div",{className:"relative w-fit mt-[-1.00px] font-body-extra-small-text-regular font-[number:var(--body-extra-small-text-regular-font-weight)] text-primary-text-color text-[length:var(--body-extra-small-text-regular-font-size)] text-center tracking-[var(--body-extra-small-text-regular-letter-spacing)] leading-[var(--body-extra-small-text-regular-line-height)] whitespace-nowrap [font-style:var(--body-extra-small-text-regular-font-style)]",children:"Payment Fees"})}),e.jsx("div",{className:"inline-flex items-start justify-end gap-2.5 relative flex-[0_0_auto]",children:e.jsxs("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-primary-color text-sm text-right tracking-[0] leading-[22px] whitespace-nowrap",children:[a==null?void 0:a.payment_fees," €"]})})]}),e.jsxs("div",{className:"flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]",children:[e.jsx("div",{className:"flex w-[162.5px] items-center gap-[5px] relative",children:e.jsx("div",{className:"relative w-fit mt-[-1.00px] font-body-extra-small-text-regular font-[number:var(--body-extra-small-text-regular-font-weight)] text-primary-text-color text-[length:var(--body-extra-small-text-regular-font-size)] text-center tracking-[var(--body-extra-small-text-regular-letter-spacing)] leading-[var(--body-extra-small-text-regular-line-height)] whitespace-nowrap [font-style:var(--body-extra-small-text-regular-font-style)]",children:"Delivery Fees"})}),e.jsx("div",{className:"inline-flex items-start justify-end gap-2.5 relative flex-[0_0_auto]",children:e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-primary-color text-sm text-right tracking-[0] leading-[22px] whitespace-nowrap",children:a==null?void 0:a.delivery_fees})})]}),e.jsx("div",{className:"flex flex-col items-end gap-[5px] relative self-stretch w-full flex-[0_0_auto]",children:e.jsxs("div",{className:"flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]",children:[e.jsx("div",{className:"relative w-fit font-body-extra-small-text-regular font-[number:var(--body-extra-small-text-regular-font-weight)] text-primary-text-color text-[length:var(--body-extra-small-text-regular-font-size)] text-center tracking-[var(--body-extra-small-text-regular-letter-spacing)] leading-[var(--body-extra-small-text-regular-line-height)] whitespace-nowrap [font-style:var(--body-extra-small-text-regular-font-style)]",children:"TOTAL TTC"}),e.jsxs("div",{className:"inline-flex items-start justify-end gap-2.5 relative flex-[0_0_auto]",children:[e.jsxs("div",{className:"[font-family:'Inter-Regular',Helvetica] font-normal text-primary-text-color leading-6 line-through relative w-fit mt-[-1.00px] text-sm text-right tracking-[0] whitespace-nowrap",children:[(t==null?void 0:t.original_price)??"135,98"," €"]}),e.jsxs("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter-SemiBold',Helvetica] font-semibold text-primary-color text-sm text-right tracking-[0] leading-[22px] whitespace-nowrap",children:[(t==null?void 0:t.total_price)??"63.06"," €"]})]})]})}),e.jsxs("div",{className:"flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]",children:[e.jsx("div",{className:"relative w-fit font-body-extra-small-text-regular font-[number:var(--body-extra-small-text-regular-font-weight)] text-secondary-color text-[length:var(--body-extra-small-text-regular-font-size)] text-center tracking-[var(--body-extra-small-text-regular-letter-spacing)] leading-[var(--body-extra-small-text-regular-line-height)] whitespace-nowrap [font-style:var(--body-extra-small-text-regular-font-style)]",children:"Save"}),e.jsxs("div",{className:"font-body-small-medium font-[number:var(--body-small-medium-font-weight)] text-secondary-color leading-[var(--body-small-medium-line-height)] relative w-fit mt-[-1.00px] text-[length:var(--body-small-medium-font-size)] text-right tracking-[var(--body-small-medium-letter-spacing)] whitespace-nowrap [font-style:var(--body-small-medium-font-style)]",children:[(t==null?void 0:t.savings)??"77,98"," €"]})]})]})})},J=({heading:l,btnText:n,stripePromise:o})=>{i.useState(!1);const s=y(),{t:c}=v(),t=new URLSearchParams(location.search);t.get("dealId");const x=t.get("orderId"),m=()=>{s(n==="Validate payment"?"/admin-view-deal":"/admin-wallet")};return i.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsx("div",{className:"flex flex-col w-full h-full items-start relative bg-primary-background mx-auto",children:e.jsxs("div",{className:"flex flex-col w-full items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]",children:[e.jsx("div",{className:"relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-primary-color text-2xl tracking-[0] leading-[30px]",children:l}),e.jsx(V,{orderId:x}),e.jsx(U,{stripePromise:o,heading:l,btnText:n,orderId:x}),e.jsx("img",{className:"relative self-stretch w-full h-px object-cover",alt:c("withdrawal.line_alt"),src:b}),e.jsx("button",{className:"all-[unset] box-border flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] rounded-md border border-solid border-primary-color cursor-pointer",onClick:m,children:e.jsx("div",{className:"all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap",children:c("withdrawal.back_button")})})]})})};export{J as default};
