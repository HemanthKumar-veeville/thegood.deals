import{y as T,z as D,r as i,g as F,a as w,u as k,c as O,f as R,j as e,D as U,E as A,C as H,L as P,m as q,G as B,J as W,d as z,S as V}from"./index-WUHsu6Ri.js";import{O as G}from"./OrderInfo-ClyYtTe3.js";import"./InfoCircle8-EGJPgU2l.js";function J({heading:u,btnText:f,stripeCustomerId:x}){var S;const l=T(),n=D(),[c,t]=i.useState(null),[d,h]=i.useState(!1),o=F(m=>m.account.profile),[v,y]=i.useState((S=o==null?void 0:o.data)==null?void 0:S.email),{t:r}=w(),g=k(),s=O(),a=R(),[_,I]=i.useState(!1),j=new URLSearchParams(a.search).get("orderId"),E=async m=>{if(m.preventDefault(),!l||!n){t(r("checkout.stripe_not_loaded"));return}h(!0),t("");try{const{setupIntent:b,error:p}=await l.confirmSetup({elements:n,confirmParams:{},redirect:"if_required"});if(p)p.type==="card_error"||p.type==="validation_error"?t(p.message):t(r("checkout.unexpected_error")),console.error("Error during setup confirmation:",p);else{console.log("SetupIntent confirmed:",b),I(!0);try{await s(B({orderId:j,setupIntent:b,stripeCustomerId:x})),t(r("checkout.setup_confirmed")),g(`/thanks-payment-setup?orderId=${j}`)}catch(C){console.error("Error during dispatch:",C),t(r("checkout.processing_error"))}finally{I(!1)}}}catch(b){console.error("Unexpected error in setup confirmation:",b),t(r("checkout.unexpected_error_setup"))}finally{h(!1)}},L={layout:{type:"accordion",defaultCollapsed:!1,radios:!1,spacedAccordionItems:!0},appearance:{theme:"flat",variables:{colorPrimaryText:"#262626",colorPrimary:"#0570de",colorBackground:"#ffffff",colorText:"#30313d",colorDanger:"#df1b41",fontFamily:"Ideal Sans, system-ui, sans-serif",spacingUnit:"2px",borderRadius:"4px"},rules:{".Label":{display:"none"},".Input":{minHeight:"48px"}}}},N={defaultValues:{email:v},appearance:{theme:"flat",variables:{colorPrimaryText:"#262626",colorPrimary:"#0570de",colorBackground:"#ffffff",colorText:"#30313d",colorDanger:"#df1b41",fontFamily:"Ideal Sans, system-ui, sans-serif"},rules:{".Label":{display:"none"},".Input":{height:"76px"},".p-LinkInputWrapper":{height:"96px !important",display:"flex","align-items":"center"},".p-LinkInputWrapper input":{height:"78px !important",padding:"12px !important",border:"1px solid #ccc !important","border-radius":"4px !important","font-size":"36px !important",width:"100% !important"}}}};return e.jsxs("form",{id:"payment-form",onSubmit:E,className:"mx-auto w-full max-w-lg space-y-4",children:[!_&&e.jsxs("div",{className:"space-y-3",children:[e.jsx(U,{id:"link-authentication-element",onChange:m=>{y(m.value.email)},options:N}),e.jsx(A,{id:"payment-element",options:L,className:"pt-3"})]}),_&&e.jsx(H,{}),c&&e.jsx("div",{id:"payment-message",className:"mt-3 p-3 text-red-600 bg-red-100 border border-red-400 rounded",children:c}),e.jsx("img",{className:"relative self-stretch w-full h-px object-cover mt-3",alt:r("checkout.line_alt"),src:P}),e.jsxs("div",{className:"mt-3 flex items-center justify-center gap-2.5 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-primary-color rounded-md",children:[e.jsxs("button",{type:"submit",disabled:d||!l||!n,className:"all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-6 whitespace-nowrap",children:[r("checkout.submit_button")," "]}),e.jsx(q,{className:"!relative !w-5 !h-5",color:"white"})]})]})}function M({orderId:u,heading:f,btnText:x,...l}){const{stripePromise:n}=l,[c,t]=i.useState(""),[d,h]=i.useState(""),{t:o}=w();return i.useEffect(()=>{(async()=>{var y,r,g;try{const s=new FormData;s.append("amount",10),s.append("currency","eur");const a=await z.post("/create_payment_intent",s);console.log((y=a==null?void 0:a.data)==null?void 0:y.payment_intent[0]),t((r=a==null?void 0:a.data)==null?void 0:r.payment_intent[0]),h((g=a==null?void 0:a.data)==null?void 0:g.payment_intent[1])}catch(s){console.error("Error creating PaymentIntent:",s),await V.fire({icon:"error",title:o("Payment.error_title"),text:(s==null?void 0:s.detail)||o("Payment.fetch_error_message")})}})()},[o]),e.jsx(e.Fragment,{children:c&&n&&e.jsx(W,{stripe:n,options:{clientSecret:c},children:e.jsx(J,{heading:o("Payment.heading"),btnText:o("Payment.button_text"),stripeCustomerId:d})})})}const Y=({heading:u,btnText:f,stripePromise:x})=>{i.useState(!1);const l=k(),{t:n}=w(),c=new URLSearchParams(location.search);c.get("dealId");const t=c.get("orderId"),d=()=>{l(f==="Validate payment"?"/admin-view-deal":"/admin-wallet")};return i.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsx("div",{className:"flex flex-col w-full h-full items-start relative bg-primary-background mx-auto",children:e.jsxs("div",{className:"flex flex-col w-full items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]",children:[e.jsx("div",{className:"relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-primary-color text-2xl tracking-[0] leading-[30px]",children:u}),e.jsx(G,{orderId:t}),e.jsx(M,{stripePromise:x,heading:u,btnText:f,orderId:t}),e.jsx("img",{className:"relative self-stretch w-full h-px object-cover",alt:n("withdrawal.line_alt"),src:P}),e.jsx("button",{className:"all-[unset] box-border flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] rounded-md border border-solid border-primary-color cursor-pointer",onClick:d,children:e.jsx("div",{className:"all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap",children:n("withdrawal.back_button")})})]})})};export{Y as default};
