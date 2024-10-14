import{J as D,K as F,r,d as O,a as j,u as P,c as R,k as U,j as e,N as A,O as H,C as M,L as E,w as q,Q as B,T as W,e as z}from"./index-Dai7qyE_.js";import{S as J}from"./ErrorAlert-CRnXk6iC.js";import{O as K}from"./OrderInfo-B8vdh2_A.js";import"./InfoCircle8-2uBdhUTA.js";function Q({heading:h,btnText:y,stripeCustomerId:g}){var k;const i=D(),s=F(),[l,t]=r.useState(null),[d,b]=r.useState(!1),m=O(f=>f.account.profile),[w,I]=r.useState((k=m==null?void 0:m.data)==null?void 0:k.email),{t:n}=j(),c=P(),S=R(),v=U(),[p,u]=r.useState(!1),a=new URLSearchParams(v.search).get("orderId"),N=async f=>{if(f.preventDefault(),!i||!s){t(n("checkout.stripe_not_loaded"));return}b(!0),t("");try{const{setupIntent:_,error:x}=await i.confirmSetup({elements:s,confirmParams:{},redirect:"if_required"});if(x)x.type==="card_error"||x.type==="validation_error"?t(x.message):t(n("checkout.unexpected_error")),console.error("Error during setup confirmation:",x);else{console.log("SetupIntent confirmed:",_),u(!0);try{await S(B({orderId:a,setupIntent:_,stripeCustomerId:g})),t(n("checkout.setup_confirmed")),c(`/thanks-payment-setup?orderId=${a}`)}catch(T){console.error("Error during dispatch:",T),t(n("checkout.processing_error"))}finally{u(!1)}}}catch(_){console.error("Unexpected error in setup confirmation:",_),t(n("checkout.unexpected_error_setup"))}finally{b(!1)}},L={layout:{type:"accordion",defaultCollapsed:!1,radios:!1,spacedAccordionItems:!0},appearance:{theme:"flat",variables:{colorPrimaryText:"#262626",colorPrimary:"#0570de",colorBackground:"#ffffff",colorText:"#30313d",colorDanger:"#df1b41",fontFamily:"Ideal Sans, system-ui, sans-serif",spacingUnit:"2px",borderRadius:"4px"},rules:{".Label":{display:"none"},".Input":{minHeight:"48px"}}}},C={defaultValues:{email:w},appearance:{theme:"flat",variables:{colorPrimaryText:"#262626",colorPrimary:"#0570de",colorBackground:"#ffffff",colorText:"#30313d",colorDanger:"#df1b41",fontFamily:"Ideal Sans, system-ui, sans-serif"},rules:{".Label":{display:"none"},".Input":{height:"76px"},".p-LinkInputWrapper":{height:"96px !important",display:"flex","align-items":"center"},".p-LinkInputWrapper input":{height:"78px !important",padding:"12px !important",border:"1px solid #ccc !important","border-radius":"4px !important","font-size":"36px !important",width:"100% !important"}}}};return e.jsxs("form",{id:"payment-form",onSubmit:N,className:"mx-auto w-full max-w-lg space-y-4",children:[!p&&e.jsxs("div",{className:"space-y-3",children:[e.jsx(A,{id:"link-authentication-element",onChange:f=>{I(f.value.email)},options:C}),e.jsx(H,{id:"payment-element",options:L,className:"pt-3"})]}),p&&e.jsx(M,{}),l&&e.jsx("div",{id:"payment-message",className:"mt-3 p-3 text-red-600 bg-red-100 border border-red-400 rounded",children:l}),e.jsx("img",{className:"relative self-stretch w-full h-px object-cover mt-3",alt:n("checkout.line_alt"),src:E}),e.jsxs("div",{className:"mt-3 flex items-center justify-center gap-2.5 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-primary-color rounded-md",children:[e.jsxs("button",{type:"submit",disabled:d||!i||!s,className:"all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-6 whitespace-nowrap",children:[n("checkout.submit_button")," "]}),e.jsx(q,{className:"!relative !w-5 !h-5",color:"white"})]})]})}function V({orderId:h,heading:y,btnText:g,...i}){const{stripePromise:s}=i,[l,t]=r.useState(""),[d,b]=r.useState(""),[m,w]=r.useState(!1),[I,n]=r.useState(""),{t:c}=j();return r.useEffect(()=>{(async()=>{var v,p,u;try{const o=new FormData;o.append("amount",10),o.append("currency","eur");const a=await z.post("/create_payment_intent",o);console.log((v=a==null?void 0:a.data)==null?void 0:v.payment_intent[0]),t((p=a==null?void 0:a.data)==null?void 0:p.payment_intent[0]),b((u=a==null?void 0:a.data)==null?void 0:u.payment_intent[1])}catch(o){console.error("Error creating PaymentIntent:",o),w(!0),n((o==null?void 0:o.detail)||c("Payment.fetch_error_message"))}})()},[c]),e.jsxs(e.Fragment,{children:[m&&e.jsx(J,{message:I,buttonText:c("waiting_deal.got_it"),onClose:()=>w(!1)}),l&&s&&e.jsx(W,{stripe:s,options:{clientSecret:l},children:e.jsx(Q,{heading:c("Payment.heading"),btnText:c("Payment.button_text"),stripeCustomerId:d})})]})}const Z=({heading:h,btnText:y,stripePromise:g})=>{r.useState(!1);const i=P(),{t:s}=j(),l=new URLSearchParams(location.search);l.get("dealId");const t=l.get("orderId"),d=()=>{y===s("withdrawal.validate_payment_button")?i("/admin-view-deal"):i("/admin-wallet")};return r.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsx("div",{className:"flex flex-col w-full h-full items-start relative bg-primary-background mx-auto",children:e.jsxs("div",{className:"flex flex-col w-full items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]",children:[e.jsx("div",{className:"relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-primary-color text-2xl tracking-[0] leading-[30px]",children:h}),e.jsx(K,{orderId:t}),e.jsx(V,{stripePromise:g,heading:h,btnText:y,orderId:t}),e.jsx("img",{className:"relative self-stretch w-full h-px object-cover",alt:s("withdrawal.line_alt"),src:E}),e.jsx("button",{className:"all-[unset] box-border flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] rounded-md border border-solid border-primary-color cursor-pointer",onClick:d,children:e.jsxs("div",{className:"all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap",children:[s("withdrawal.back_button")," "]})})]})})};export{Z as default};