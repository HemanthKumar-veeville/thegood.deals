import{a2 as A,a3 as B,r as a,d as g,a as I,u as C,c as T,k as H,j as e,a4 as M,a5 as q,C as L,L as F,J as W,a6 as z,S as O,a7 as J,e as V,a8 as $}from"./index-CISe_6no.js";import{I as G}from"./InfoCircle8-nmPkdiLB.js";function K({heading:u,btnText:h,stripeCustomerId:p}){var P;const n=A(),s=B(),[o,r]=a.useState(null),[x,f]=a.useState(!1),t=g(m=>m.account.profile);g(m=>m.orders.orderError);const v=g(m=>m.orders.orderStatus),[y,l]=a.useState((P=t==null?void 0:t.data)==null?void 0:P.email),{t:i}=I(),k=C(),_=T(),S=H(),[w,b]=a.useState(!1);a.useState(v==="failed");const c=new URLSearchParams(S.search).get("orderId"),d=async m=>{if(m.preventDefault(),!n||!s){r(i("checkout.stripe_not_loaded"));return}f(!0),r("");try{const{setupIntent:N,error:j}=await n.confirmSetup({elements:s,confirmParams:{},redirect:"if_required"});if(j)j.type==="card_error"||j.type==="validation_error"?r(j.message):r(i("checkout.unexpected_error")),console.error("Error during setup confirmation:",j);else{console.log("SetupIntent confirmed:",N),b(!0);try{await _(z({orderId:c,setupIntent:N,stripeCustomerId:p})).unwrap(),r(i("checkout.setup_confirmed")),k(`/thanks-payment-setup?orderId=${c}`)}catch(D){console.error("Error during dispatch:",D),r(i("checkout.processing_error"))}finally{b(!1)}}}catch(N){console.error("Unexpected error in setup confirmation:",N),r(i("checkout.unexpected_error_setup"))}finally{f(!1)}},U={layout:{type:"accordion",defaultCollapsed:!1,radios:!1,spacedAccordionItems:!0},appearance:{theme:"flat",variables:{colorPrimaryText:"#262626",colorPrimary:"#0570de",colorBackground:"#ffffff",colorText:"#30313d",colorDanger:"#df1b41",fontFamily:"Ideal Sans, system-ui, sans-serif",spacingUnit:"2px",borderRadius:"4px"},rules:{".Label":{display:"none"},".Input":{minHeight:"48px"}}}},R={defaultValues:{email:y},appearance:{theme:"flat",variables:{colorPrimaryText:"#262626",colorPrimary:"#0570de",colorBackground:"#ffffff",colorText:"#30313d",colorDanger:"#df1b41",fontFamily:"Ideal Sans, system-ui, sans-serif"},rules:{".Label":{display:"none"},".Input":{height:"76px"},".p-LinkInputWrapper":{height:"96px !important",display:"flex","align-items":"center"},".p-LinkInputWrapper input":{height:"78px !important",padding:"12px !important",border:"1px solid #ccc !important","border-radius":"4px !important","font-size":"36px !important",width:"100% !important"}}}};return e.jsxs("form",{id:"payment-form",onSubmit:d,className:"mx-auto w-full max-w-lg space-y-4",children:[!w&&e.jsxs("div",{className:"space-y-3",children:[e.jsx(M,{id:"link-authentication-element",onChange:m=>{l(m.value.email)},options:R}),e.jsx(q,{id:"payment-element",options:U,className:"pt-3"})]}),w&&e.jsx(L,{}),o&&e.jsx("div",{id:"payment-message",className:"mt-3 p-3 text-red-600 bg-red-100 border border-red-400 rounded",children:o}),e.jsx(F,{}),e.jsxs("div",{className:"mt-3 flex items-center justify-center gap-2.5 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-primary-color rounded-md",children:[e.jsxs("button",{type:"submit",disabled:x||!n||!s,className:"all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-6 whitespace-nowrap",children:[i("checkout.submit_button")," "]}),e.jsx(W,{className:"!relative !w-5 !h-5",color:"white"})]})]})}function Q({orderId:u,heading:h,btnText:p,...n}){const{stripePromise:s}=n,[o,r]=a.useState(""),[x,f]=a.useState(""),[t,v]=a.useState(!1),[y,l]=a.useState(""),{t:i}=I(),[k,_]=a.useState(!1);return a.useEffect(()=>{(async()=>{var w,b,E;_(!0);try{const c=new FormData;c.append("amount",10),c.append("currency","eur");const d=await V.post("/create_payment_intent",c);console.log((w=d==null?void 0:d.data)==null?void 0:w.payment_intent[0]),r((b=d==null?void 0:d.data)==null?void 0:b.payment_intent[0]),f((E=d==null?void 0:d.data)==null?void 0:E.payment_intent[1])}catch(c){console.error("Error creating PaymentIntent:",c),v(!0),l((c==null?void 0:c.detail)||i("Payment.fetch_error_message"))}finally{_(!1)}})()},[i]),e.jsxs(e.Fragment,{children:[t&&e.jsx(O,{message:y,buttonText:i("waiting_deal.got_it"),onClose:()=>v(!1)}),k&&e.jsx(L,{}),o&&s&&e.jsx(J,{stripe:s,options:{clientSecret:o},children:e.jsx(K,{heading:i("Payment.heading"),btnText:i("Payment.button_text"),stripeCustomerId:x})})]})}const X=({orderId:u})=>{const[h,p]=a.useState(!1),n=a.useRef(null),{t:s}=I(),o=T(),r=g(l=>l.orders.order),x=g(l=>l.orders.orderStatus),f=g(l=>l.orders.orderError),t=r==null?void 0:r.Orders,v=()=>{o($({orderId:u}))};a.useEffect(()=>{v()},[o,u]),console.log({orderState:t});const y=()=>{p(l=>!l)};return a.useEffect(()=>{const l=i=>{n.current&&!n.current.contains(i.target)&&p(!1)};return document.addEventListener("mousedown",l),()=>{document.removeEventListener("mousedown",l)}},[n]),x==="loading"?e.jsx(L,{}):x==="failed"?e.jsx(O,{message:f==null?void 0:f.detail,buttonText:s("waiting_deal.got_it"),shouldCloseOnOverlayClick:!1}):e.jsx("div",{className:"flex flex-col items-start gap-[15px] p-[15px] relative bg-white rounded-[5px] mx-auto w-full",children:e.jsxs("div",{className:"flex flex-col items-start relative self-stretch w-full flex-[0_0_auto]",children:[e.jsxs("div",{className:"flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]",children:[e.jsx("div",{className:"flex w-[162.5px] items-center gap-[5px] relative",children:e.jsxs("div",{className:"relative w-fit mt-[-1.00px] font-body-extra-small-text-regular text-primary-text-color",children:[s("order.orderLabel")," "]})}),e.jsx("div",{className:"inline-flex items-start justify-end gap-2.5 relative flex-[0_0_auto]",children:e.jsxs("div",{className:"relative w-fit mt-[-1.00px] font-semibold text-primary-color text-sm text-right",children:[t==null?void 0:t.order_total," €"]})})]}),e.jsx("div",{className:"flex flex-col items-end gap-[5px] relative self-stretch w-full flex-[0_0_auto]",children:e.jsxs("div",{className:"flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]",children:[e.jsxs("div",{className:"flex w-full items-center gap-[5px] relative",children:[e.jsxs("div",{className:"relative w-fit mt-[-1.00px] font-body-extra-small-text-regular text-primary-text-color",children:[s("order.serviceFeesLabel")," "]}),e.jsxs("div",{className:"relative",children:[e.jsx("span",{onClick:y,children:e.jsx(G,{className:"!relative !w-3.5 !h-3.5 cursor-pointer",color:"#2a4e4a"})}),h&&e.jsxs("div",{ref:n,className:"absolute z-10 w-[265px] p-2 bg-white text-gray-800 border border-gray-300 rounded-md shadow-lg bottom-full left-1/2 transform -translate-x-1/2 mb-2",children:[s("order.serviceFeesTooltip")," ",e.jsx("div",{className:"absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-white border border-gray-300 -bottom-1 rotate-45"})]})]})]}),e.jsx("div",{className:"inline-flex items-start justify-end gap-2.5 relative flex-[0_0_auto]",children:e.jsxs("div",{className:"relative w-fit mt-[-1.00px] font-semibold text-primary-color text-sm text-right",children:[t==null?void 0:t.service_fees," €"]})})]})}),e.jsxs("div",{className:"flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]",children:[e.jsx("div",{className:"flex w-[162.5px] items-center gap-[5px] relative",children:e.jsxs("div",{className:"relative w-fit mt-[-1.00px] font-body-extra-small-text-regular text-primary-text-color",children:[s("order.paymentFeesLabel")," "]})}),e.jsx("div",{className:"inline-flex items-start justify-end gap-2.5 relative flex-[0_0_auto]",children:e.jsxs("div",{className:"relative w-fit mt-[-1.00px] font-semibold text-primary-color text-sm text-right",children:[t==null?void 0:t.payment_fees," €"]})})]}),e.jsxs("div",{className:"flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]",children:[e.jsx("div",{className:"flex w-[162.5px] items-center gap-[5px] relative",children:e.jsxs("div",{className:"relative w-fit mt-[-1.00px] font-body-extra-small-text-regular text-primary-text-color",children:[s("order.deliveryFeesLabel")," "]})}),e.jsx("div",{className:"inline-flex items-start justify-end gap-2.5 relative flex-[0_0_auto]",children:e.jsxs("div",{className:"relative w-fit mt-[-1.00px] font-semibold text-primary-color text-sm text-right",children:[t==null?void 0:t.delivery_fees," €"]})})]}),e.jsx("div",{className:"flex flex-col items-end gap-[5px] relative self-stretch w-full flex-[0_0_auto]",children:e.jsxs("div",{className:"flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]",children:[e.jsxs("div",{className:"relative w-fit font-body-extra-small-text-regular text-primary-text-color",children:[s("order.totalTTC")," "]}),e.jsxs("div",{className:"inline-flex items-start justify-end gap-2.5 relative flex-[0_0_auto]",children:[e.jsxs("div",{className:"font-normal text-primary-text-color leading-6 line-through relative w-fit mt-[-1.00px] text-sm text-right",children:[(t==null?void 0:t.mrp)??s("order.priceUnknown")," €"]}),e.jsxs("div",{className:"relative w-fit mt-[-1.00px] font-semibold text-primary-color text-sm text-right",children:[(t==null?void 0:t.total_ttc)??s("order.totalUnknown")," €"]})]})]})}),e.jsxs("div",{className:"flex items-end justify-between relative self-stretch w-full flex-[0_0_auto]",children:[e.jsxs("div",{className:"relative w-fit font-body-extra-small-text-regular text-secondary-color",children:[s("order.saveLabel")," "]}),e.jsxs("div",{className:"font-small-medium text-secondary-color leading-small relative w-fit mt-[-1.00px] text-right",children:[(t==null?void 0:t.discount)??s("order.discountUnknown")," €"]})]})]})})},ee=({heading:u,btnText:h,stripePromise:p})=>{a.useState(!1);const n=C(),{t:s}=I(),o=new URLSearchParams(location.search);o.get("dealId");const r=o.get("orderId"),x=()=>{h===s("withdrawal.validate_payment_button")?n("/admin-view-deal"):n("/admin-wallet")};return a.useEffect(()=>{window.scrollTo(0,0)},[]),e.jsx("div",{className:"flex flex-col w-full h-full items-start relative bg-primary-background mx-auto",children:e.jsxs("div",{className:"flex flex-col w-full items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]",children:[e.jsx("div",{className:"relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-primary-color text-2xl tracking-[0] leading-[30px]",children:u}),e.jsx(X,{orderId:r}),e.jsx(Q,{stripePromise:p,heading:u,btnText:h,orderId:r}),e.jsx(F,{}),e.jsx("button",{className:"all-[unset] box-border flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] rounded-md border border-solid border-primary-color cursor-pointer",onClick:x,children:e.jsxs("div",{className:"all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap",children:[s("withdrawal.back_button")," "]})})]})})};export{ee as default};
