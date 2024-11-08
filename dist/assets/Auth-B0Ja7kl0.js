import{j as e,r as x,u as q,c as A,a as k,d as Z,S as E,s as V,B as M,e as _,f as z,g as D,h as L,i as R,C as O}from"./index-oX_URvhe.js";import{u as T,c as S,a as m,b as U,d as $}from"./index.esm-Aupyebgm.js";import{E as P}from"./EyeAlt8-B5AryrQM.js";import{D as G}from"./CountryDropDown-32HULeap.js";import{C as F}from"./ChevronDown-0xg5SdKt.js";const B=({className:o,divClassName:t,text:p,onClick:u})=>e.jsx("button",{className:`inline-flex items-center gap-2.5 px-0 py-[15px] justify-center bg-white relative border-b-2 ${o}`,onClick:u,children:e.jsx("div",{className:`font-16-medium w-fit mt-[-2.00px] tracking-[var(--16-medium-letter-spacing)] text-[length:var(--16-medium-font-size)] [font-style:var(--16-medium-font-style)] font-[number:var(--16-medium-font-weight)] text-center whitespace-nowrap leading-[var(--16-medium-line-height)] relative ${t}`,children:p})}),J=({color:o="#111928",className:t})=>e.jsx("svg",{className:`${t}`,fill:"none",height:"20",viewBox:"0 0 20 20",width:"20",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M17.384 6.96541C17.2716 7.05125 15.2874 8.15209 15.2874 10.5999C15.2874 13.4312 17.8122 14.4328 17.8878 14.4577C17.8762 14.5187 17.4867 15.8294 16.5566 17.1649C15.7272 18.3402 14.8611 19.5136 13.5435 19.5136C12.2258 19.5136 11.8867 18.7599 10.3657 18.7599C8.88331 18.7599 8.35628 19.5383 7.15103 19.5383C5.94578 19.5383 5.10481 18.4508 4.13791 17.1153C3.01794 15.5471 2.11304 13.1107 2.11304 10.7983C2.11304 7.08944 4.56228 5.12238 6.97275 5.12238C8.25356 5.12238 9.32125 5.95041 10.1254 5.95041C10.8908 5.95041 12.0844 5.07278 13.5415 5.07278C14.0938 5.07278 16.078 5.12238 17.384 6.96541ZM12.8498 3.50259C13.4524 2.79858 13.8787 1.82175 13.8787 0.84491C13.8787 0.709451 13.8671 0.572085 13.8419 0.461426C12.8614 0.497676 11.6949 1.10438 10.9915 1.9076C10.4393 2.52576 9.92387 3.50259 9.92387 4.49278C9.92387 4.64163 9.94906 4.79041 9.96069 4.83809C10.0227 4.84956 10.1234 4.86291 10.2242 4.86291C11.1039 4.86291 12.2103 4.28291 12.8498 3.50259Z",fill:o})}),K=({color:o="white",className:t})=>e.jsx("svg",{className:`${t}`,fill:"none",height:"20",viewBox:"0 0 21 20",width:"21",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M15.3127 8.0625H13.5627H12.9377V7.4375V5.5V4.875H13.5627H14.8752C15.219 4.875 15.5002 4.625 15.5002 4.25V0.9375C15.5002 0.59375 15.2502 0.3125 14.8752 0.3125H12.594C10.1252 0.3125 8.40649 2.0625 8.40649 4.65625V7.375V8H7.78149H5.65649C5.21899 8 4.81274 8.34375 4.81274 8.84375V11.0938C4.81274 11.5312 5.15649 11.9375 5.65649 11.9375H7.71899H8.34399V12.5625V18.8438C8.34399 19.2812 8.68774 19.6875 9.18774 19.6875H12.1252C12.3127 19.6875 12.469 19.5938 12.594 19.4688C12.719 19.3438 12.8127 19.125 12.8127 18.9375V12.5938V11.9688H13.469H14.8752C15.2815 11.9688 15.594 11.7188 15.6565 11.3438V11.3125V11.2812L16.094 9.125C16.1252 8.90625 16.094 8.65625 15.9065 8.40625C15.844 8.25 15.5627 8.09375 15.3127 8.0625Z",fill:o})}),Q=({className:o})=>e.jsx("svg",{className:`${o}`,fill:"none",height:"20",viewBox:"0 0 21 20",width:"21",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M19.7193 9.12503H10.7505V11.7813H17.188C16.8443 15.4688 13.8443 17.0625 10.938 17.0625C7.2505 17.0625 3.96925 14.1875 3.96925 10.0313C3.96925 6.03128 7.09425 3.00003 10.938 3.00003C13.8755 3.00003 15.6568 4.90628 15.6568 4.90628L17.4693 3.00003C17.4693 3.00003 15.0318 0.343784 10.813 0.343784C5.2505 0.312534 1.00049 4.96878 1.00049 10C1.00049 14.875 5.0005 19.6875 10.9068 19.6875C16.1255 19.6875 19.8755 16.1563 19.8755 10.875C19.9068 9.78128 19.7193 9.12503 19.7193 9.12503Z",fill:"white"})}),W=({setIsLoading:o})=>{const[t,p]=x.useState(!1),u=q(),a=A(),{t:n}=k(),s=Z(d=>d.user.signInForm),g=s.errorMessage,v=s.isError,y=async d=>{var h,l;try{const i=await _.post("login",d);(i==null?void 0:i.status)===200&&(a(z()),a(D()),u("/"))}catch(i){console.log(i);const j=((l=(h=i.response)==null?void 0:h.data)==null?void 0:l.detail)||i.message||n("login.error");a(L(j)),a(V(!0)),o(!1)}},c=T({initialValues:s,validationSchema:S({email:m().email(n("login.invalid_email")).required(n("login.required")),password:m().required(n("login.required"))}),onSubmit:async d=>{o(!0);const h=new FormData;h.append("email",d.email),h.append("password",d.password),await y(h)},enableReinitialize:!0}),b=d=>{c.handleChange(d);const h={...c.values,[d.target.name]:d.target.value};a(R(h))},r=()=>{p(d=>!d)},N=()=>{u("/lost-password")},C=async()=>{o(!0);try{const d=await _("/login/google");console.log("Login successful:",d.data)}catch(d){console.error("Google Sign-In error:",d.response?d.response.data:d.message)}finally{o(!1)}};return e.jsxs("div",{className:"flex flex-col w-full items-start gap-[15px] px-[35px] py-[15px] absolute top-[118px] left-0",children:[e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-[#1b4f4a] text-2xl text-center tracking-[0] leading-[30px] whitespace-nowrap",children:n("login.title")}),v&&e.jsx(E,{message:g,buttonText:n("waiting_deal.got_it"),onClose:()=>a(V(!1))}),e.jsxs("form",{onSubmit:c.handleSubmit,className:"flex flex-col w-full gap-[15px]",children:[e.jsx("div",{className:"flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full",children:e.jsxs("div",{className:"flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow",children:[e.jsx("input",{id:"email",name:"email",type:"email",placeholder:n("login.email_placeholder"),onChange:b,onBlur:c.handleBlur,value:c.values.email,className:`flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border ${c.touched.email&&c.errors.email?"border-red-500":"focus:outline-none focus:ring-1 focus:ring-[#1b4f4a]"} hover:bg-gray-100 cursor-pointer focus:outline-none`,autoComplete:"off"}),c.touched.email&&c.errors.email&&e.jsx("div",{className:"text-red-500 text-sm",children:c.errors.email})]})}),e.jsx("div",{className:`flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full ${c.touched.email&&c.errors.email?"mt-8":""}`,children:e.jsxs("div",{className:"flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow",children:[e.jsxs("div",{className:"flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-stroke hover:bg-gray-100 cursor-pointer",children:[e.jsx("input",{id:"password",name:"password",type:t?"text":"password",placeholder:n("login.password_placeholder"),onChange:b,onBlur:c.handleBlur,value:c.values.password,className:`flex items-center justify-between relative flex-1 grow bg-transparent outline-none ${c.touched.password&&c.errors.password?"border-red-500":""}`}),e.jsx("button",{type:"button",onClick:r,className:"flex items-center justify-center !relative !w-4 !h-4 hover:text-primary cursor-pointer","aria-label":n(t?"login.hide_password":"login.show_password"),children:e.jsx(P,{})})]}),c.touched.password&&c.errors.password&&e.jsx("div",{className:"text-red-500 text-sm",children:c.errors.password})]})}),e.jsx(M,{buttonText:n("login.login_button"),className:`!self-stretch !flex-[0_0_auto] !flex !w-full hover:bg-secondary-background cursor-pointer ${c.touched.password&&c.errors.password?"mt-8":""}`,color:"primary",kind:"primary",round:"semi-round",state:"default",type:"submit"})]}),e.jsx("div",{className:"relative self-stretch w-full h-7",children:e.jsxs("div",{className:"relative w-[290px] h-7",children:[e.jsx("img",{className:"absolute w-[290px] h-px top-[13px] left-0 object-cover",alt:n("login.line_alt"),src:"https://c.animaapp.com/pST4Ri5V/img/line-61-1.svg"}),e.jsx("div",{className:"flex w-[138px] h-7 items-start justify-center gap-2.5 px-2.5 py-0.5 absolute top-0 left-[76px] bg-primary-background",children:e.jsx("div",{className:"relative w-fit mt-[-1.00px] ml-[-3.13px] mr-[-3.13px] [font-family:'Inter',Helvetica] font-normal text-secondary-text-color text-base tracking-[0] leading-6 whitespace-nowrap",children:n("login.login_with")})})]})}),e.jsxs("div",{className:"flex items-start justify-center gap-5 relative self-stretch w-full flex-[0_0_auto]",children:[e.jsx("div",{onClick:C,className:"relative w-[45px] h-[45px] bg-[#d64937] rounded-md hover:bg-[#b8372c] cursor-pointer",children:e.jsx(Q,{className:"!absolute !w-5 !h-5 !top-[13px] !left-[13px]"})}),e.jsx("div",{className:"relative w-[45px] h-[45px] bg-black rounded-md hover:bg-[#333] cursor-pointer",children:e.jsx(J,{className:"!absolute !w-5 !h-5 !top-3 !left-3",color:"white"})}),e.jsx("div",{className:"relative w-[45px] h-[45px] bg-[#4064ac] rounded-md hover:bg-[#36548f] cursor-pointer",children:e.jsx(K,{className:"!absolute !w-5 !h-5 !top-[13px] !left-3",color:"white"})})]}),e.jsx("div",{className:"flex flex-col items-center gap-2 relative self-stretch w-full flex-[0_0_auto]",onClick:N,children:e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-darkdark text-base tracking-[0] leading-6 whitespace-nowrap hover:underline cursor-pointer",children:n("login.forgot_password")})})]})},w=({id:o,name:t,type:p="text",placeholder:u,formik:a,label:n,showPassword:s=!1,toggleVisibility:g})=>e.jsxs("div",{className:"w-full flex flex-col items-start gap-2 relative",children:[n&&e.jsx("label",{htmlFor:o,className:"[font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-sm leading-[22px] mb-[2px] w-full",children:n}),e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{className:`flex items-center gap-2.5 pl-5 pr-4 py-3 w-full bg-white rounded-md border cursor-pointer hover:bg-gray-100 ${a.touched[t]&&a.errors[t]?"border-red-500 border-solid":"focus-within:ring-1 focus-within:ring-[#1b4f4a] border"}`,children:[e.jsx("input",{id:o,name:t,type:s?"text":p,placeholder:u,onChange:a.handleChange,onBlur:a.handleBlur,value:a.values[t],className:"flex-1 bg-transparent outline-none",autoComplete:"off"}),g&&e.jsx("button",{type:"button",onClick:g,className:"flex items-center justify-center !relative !w-4 !h-4 hover:text-primary cursor-pointer","aria-label":s?"Hide password":"Show password",children:e.jsx(P,{})})]}),a.touched[t]&&a.errors[t]&&t!=="phone"?e.jsx("div",{className:"text-red-500 text-sm mt-2",children:a.errors[t]}):null]})]}),X=({id:o,name:t,type:p="text",placeholder:u,formik:a,label:n,showPassword:s=!1,toggleVisibility:g})=>e.jsxs("div",{className:"w-[calc(100%-1%)]  flex flex-col items-start gap-2 relative",children:[n&&e.jsx("label",{htmlFor:o,className:"[font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-sm leading-[22px] mb-[2px] w-full",children:n}),e.jsxs("div",{className:"w-[calc(100%-1%)]  ",children:[e.jsxs("div",{className:`flex items-center gap-2.5 pl-5 pr-4 py-3 w-[calc(100%-1%)]   bg-white rounded-md border cursor-pointer hover:bg-gray-100 ${a.touched[t]&&a.errors[t]?"border-red-500 border-solid":"focus-within:ring-1 focus-within:ring-[#1b4f4a] border"}`,children:[e.jsx("input",{id:o,name:t,type:s?"text":p,placeholder:u,onChange:a.handleChange,onBlur:a.handleBlur,value:a.values[t],className:"flex-1 bg-transparent outline-none w-[calc(100%-1%)]  ",autoComplete:"off"}),g&&e.jsx("button",{type:"button",onClick:g,className:"flex items-center justify-center !relative !w-4 !h-4 hover:text-primary cursor-pointer","aria-label":s?"Hide password":"Show password",children:e.jsx(P,{})})]}),a.touched[t]&&a.errors[t]&&t!=="phone"?e.jsx("div",{className:"text-red-500 text-sm mt-2",children:a.errors[t]}):null]})]}),Y=({setIsLoading:o})=>{const[t,p]=x.useState(!1),[u,a]=x.useState(!1),n=q(),{t:s,i18n:g}=k(),[v,y]=x.useState(!1),[c,b]=x.useState("");x.useEffect(()=>{const l=localStorage.getItem("signupFormValues");l&&r.setValues(JSON.parse(l))},[]);const r=T({initialValues:{firstName:"",lastName:"",countryCode:{code:"+33",iso:"fr",name:"France"},phone:"",email:"",language:"French",password:"",confirmPassword:"",address:"",additionalAddress:"",city:"",postalCode:"",country:"",currency:"eur",acceptPrivacyPolicy:!1,agreeNewsletter:!1},validationSchema:S({firstName:m().matches(/^[a-zA-ZÀ-ÿ\u00C0-\u017F\s'-’]+$/,s("signup.errors.first_name")).required(s("signup.errors.first_name")),lastName:m().matches(/^[a-zA-ZÀ-ÿ\u00C0-\u017F\s'-’]+$/,s("signup.errors.last_name")).required(s("signup.errors.last_name")),countryCode:S().required(s("signup.errors.country_code")),phone:m().matches(/^\d+$/,s("signup.errors.phone_number")).min(8,s("signup.errors.phone_number")).max(13,s("signup.errors.phone_number")).required(s("signup.errors.phone_number")),email:m().email(s("signup.errors.email")).required(s("signup.errors.email")),language:m().required(s("signup.errors.language")),password:m().min(8,s("signup.password_hints.min_length")).matches(/[a-z]/,s("signup.password_hints.lowercase")).matches(/[A-Z]/,s("signup.password_hints.uppercase")).matches(/\d/,s("signup.password_hints.number")).matches(/[~#@$%&!*_?^-]/,s("signup.password_hints.special_character")).required(s("signup.errors.password")),confirmPassword:m().oneOf([U("password"),null],s("signup.errors.confirm_password")).required(s("signup.errors.confirm_password")),address:m().required(s("signup.errors.address")),city:m().matches(/^[a-zA-ZÀ-ÿ\u00C0-\u017F\s'-’]+$/,s("signup.errors.city")).required(s("signup.errors.city")),postalCode:m().matches(/^[A-Za-z0-9- ]{3,10}$/,s("signup.errors.postal_code")).required(s("signup.errors.postal_code")),country:m().required(s("signup.errors.country")),currency:m().oneOf(["eur","usd","gbp"],s("signup.errors.currency")),acceptPrivacyPolicy:$().oneOf([!0],s("signup.errors.accept_privacy_policy")).required(s("signup.errors.accept_privacy_policy")),agreeNewsletter:$()}),onSubmit:async l=>{var j,H,I;o(!0);const i=new FormData;i.append("firstname",l.firstName),i.append("lastname",l.lastName),i.append("country_code",l.countryCode.code),i.append("phone",l.phone),i.append("email",l.email),i.append("language",l.language),i.append("password",l.password),i.append("address",l.address),i.append("addl_address",l.additionalAddress),i.append("city",l.city),i.append("postal_code",l.postalCode),i.append("country",l.country),i.append("currency",l.currency),i.append("accept_privacy_policy",l.acceptPrivacyPolicy),i.append("agree_newsletter",l.agreeNewsletter);try{const f=await _.post("register",i);(f==null?void 0:f.status)===200&&((j=f==null?void 0:f.data)==null?void 0:j.is_mail_sent)===!0&&(r.resetForm(),p(!1),a(!1),localStorage.removeItem("signupFormValues"),n(`/verify?email=${l==null?void 0:l.email}`),window.scrollTo(0,0))}catch(f){y(!0),b(((I=(H=f==null?void 0:f.response)==null?void 0:H.data)==null?void 0:I.detail)||s("signup.errors.error_desc"))}finally{o(!1)}}}),N=()=>{n("/privacy-policy")},C=()=>{n("/newsletter-indication")};x.useEffect(()=>{localStorage.setItem("signupFormValues",JSON.stringify(r.values))},[r.values]);const d=()=>{p(!t)},h=()=>{a(!u)};return e.jsxs("div",{className:"flex flex-col w-full items-start gap-[20px] px-[35px] py-[15px] absolute top-[118px] left-0 bg-primary-background",children:[e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-[#1b4f4a] text-2xl text-center tracking-[0] leading-[30px] whitespace-nowrap",children:s("signup.title")}),e.jsx("div",{className:"relative w-fit [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-lg text-center tracking-[0] leading-[26px] whitespace-nowrap",children:s("signup.subtitle")}),v&&e.jsx(E,{message:c,buttonText:s("waiting_deal.got_it"),onClose:()=>y(!1)}),e.jsxs("form",{onSubmit:r.handleSubmit,className:"flex flex-col w-full gap-[20px]",children:[e.jsxs("div",{className:"flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full",children:[e.jsxs("div",{className:"relative w-full [font-family:'Inter-Regular',Helvetica] font-normal text-darkdark-6 text-base tracking-[0] leading-6 whitespace-nowrap",children:[e.jsxs("select",{id:"language",name:"language",value:r.values.language,onChange:r.handleChange,onBlur:r.handleBlur,className:`w-full pl-5 pr-10 py-3 bg-white rounded-md border ${r.touched.language&&r.errors.language?"border-red-500":"focus:outline-none focus:ring-1 focus:ring-[#1b4f4a]"} hover:bg-gray-100 cursor-pointer appearance-none`,children:[e.jsx("option",{value:"French",children:s("language.french")}),e.jsx("option",{value:"English",children:s("language.english")})]}),e.jsx("div",{className:"absolute inset-y-0 right-4 flex items-center pointer-events-none",children:e.jsx(F,{className:"w-4 h-4 text-gray-600"})})]}),r.touched.language&&r.errors.language?e.jsx("div",{className:"text-red-500 text-sm mt-[2px]",children:r.errors.language}):null]}),e.jsx(w,{id:"firstName",name:"firstName",placeholder:s("signup.first_name"),formik:r}),e.jsx(w,{id:"lastName",name:"lastName",placeholder:s("signup.last_name"),formik:r}),e.jsxs("div",{className:"flex h-12 items-start gap-[5px] relative self-stretch !w-full",children:[e.jsx(G,{id:"countryCode",name:"countryCode",selectedCode:r.values.countryCode,setSelectedCode:l=>r.setFieldValue("countryCode",l),formik:r}),e.jsx(X,{id:"phone",name:"phone",placeholder:s("signup.mobile_number"),formik:r})]}),r!=null&&r.touched.phone&&(r!=null&&r.errors.phone)?e.jsx("div",{className:"text-red-500 text-sm mt-[2px]",children:r.errors.phone}):null,e.jsx(w,{id:"email",name:"email",type:"email",placeholder:s("signup.email"),formik:r}),e.jsx("div",{className:"relative w-fit [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-lg text-center tracking-[0] leading-[26px] whitespace-nowrap",children:s("signup.currency")}),e.jsxs("div",{className:"flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full",children:[e.jsxs("div",{className:"relative w-full [font-family:'Inter-Regular',Helvetica] font-normal text-darkdark-6 text-base tracking-[0] leading-6 whitespace-nowrap",children:[e.jsxs("select",{id:"currency",name:"currency",value:r.values.currency,onChange:r.handleChange,onBlur:r.handleBlur,className:`w-full pl-5 pr-10 py-3 bg-white rounded-md border ${r.touched.currency&&r.errors.currency?"border-red-500":"focus:outline-none focus:ring-1 focus:ring-[#1b4f4a]"} hover:bg-gray-100 cursor-pointer appearance-none`,children:[e.jsx("option",{value:"eur",defaultValue:!0,children:s("signup.currency_options.eur")}),e.jsx("option",{value:"usd",children:s("signup.currency_options.usd")})]}),e.jsx("div",{className:"absolute inset-y-0 right-4 flex items-center pointer-events-none",children:e.jsx(F,{className:"w-4 h-4 text-gray-600"})})]}),r.touched.currency&&r.errors.currency?e.jsx("div",{className:"text-red-500 text-sm mt-[2px]",children:r.errors.currency}):null]}),e.jsx("div",{className:"relative w-fit [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-lg text-center tracking-[0] leading-[26px] whitespace-nowrap",children:s("signup.setup_pass")}),e.jsx(w,{id:"password",name:"password",type:"password",placeholder:s("signup.password"),formik:r,showPassword:t,toggleVisibility:d}),e.jsx(w,{id:"confirmPassword",name:"confirmPassword",type:"password",placeholder:s("signup.confirm_password"),formik:r,showPassword:u,toggleVisibility:h}),e.jsx("div",{className:"flex flex-wrap text-[#637381] text-sm gap-x-4 gap-y-2 mt-2",children:[s("signup.password_hints.min_length"),s("signup.password_hints.uppercase_lowercase"),s("signup.password_hints.special_character"),s("signup.password_hints.number")].map((l,i)=>e.jsxs("div",{className:"relative w-fit font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] text-center tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]",children:[e.jsx("span",{className:"mr-1",children:"•"})," ",l]},i))}),e.jsx("div",{className:"relative w-fit [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-lg text-center tracking-[0] leading-[26px] whitespace-nowrap",children:s("signup.setup_addr")}),e.jsx(w,{id:"address",name:"address",placeholder:s("signup.address"),formik:r,label:s("signup.address")}),e.jsx(w,{id:"additionalAddress",name:"additionalAddress",placeholder:s("signup.additional_address"),formik:r,label:s("signup.additional_address")}),e.jsx(w,{id:"city",name:"city",placeholder:s("signup.city"),formik:r,label:s("signup.city")}),e.jsx(w,{id:"postalCode",name:"postalCode",placeholder:s("signup.postal_code"),formik:r,label:s("signup.postal_code")}),e.jsx(w,{id:"country",name:"country",placeholder:s("signup.country"),formik:r,label:s("signup.country")}),e.jsxs("div",{className:"flex flex-wrap items-center gap-[10px_10px] relative self-stretch w-full flex-[0_0_auto]",children:[e.jsx("input",{id:"acceptPrivacyPolicy",name:"acceptPrivacyPolicy",type:"checkbox",onChange:r.handleChange,onBlur:r.handleBlur,checked:r.values.acceptPrivacyPolicy,className:"form-checkbox h-4 w-4 text-primary"}),e.jsxs("p",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#1b4f4a] text-xs tracking-[0] leading-5 whitespace-nowrap",children:[e.jsx("span",{className:"[font-family:'Inter',Helvetica] font-normal text-[#1b4f4a] text-xs tracking-[0] leading-5",children:s("signup.privacy_policy")}),e.jsx("span",{className:"underline",onClick:N,children:s("signup.privacy_policy_link")})]})]}),r.touched.acceptPrivacyPolicy&&r.errors.acceptPrivacyPolicy?e.jsx("div",{className:"text-red-500 text-sm mt-[2px]",children:r.errors.acceptPrivacyPolicy}):null,e.jsxs("div",{className:"flex flex-wrap items-center gap-[10px_10px] relative self-stretch w-full flex-[0_0_auto]",children:[e.jsx("input",{id:"agreeNewsletter",name:"agreeNewsletter",type:"checkbox",onChange:r.handleChange,onBlur:r.handleBlur,checked:r.values.agreeNewsletter,className:"form-checkbox h-4 w-4 text-primary"}),e.jsxs("p",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-[#1b4f4a] text-xs tracking-[0] leading-5 whitespace-nowrap",children:[e.jsx("span",{className:"[font-family:'Inter',Helvetica] font-normal text-[#1b4f4a] text-xs tracking-[0] leading-5",children:s("signup.newsletter")}),e.jsx("span",{className:"underline",onClick:C,children:s("signup.newsletter_link")})]})]}),e.jsx(M,{buttonText:s("signup.register_button"),className:"!self-stretch !flex-[0_0_auto] !flex !w-full",color:"primary",kind:"primary",round:"semi-round",state:"default",type:"submit"})]})]})},le=()=>{const{t:o}=k(),[t,p]=x.useState(!0),[u,a]=x.useState(!1);x.useEffect(()=>{window.scrollTo(0,0)},[]),x.useEffect(()=>{const g=new URLSearchParams(window.location.search),v=g.get("signup"),y=g.get("login");console.log({signup:v,login:y}),v===""?p(!1):y&&p(!0)},[]);const n=()=>{p(!0)},s=()=>{p(!1)};return e.jsxs(e.Fragment,{children:[u&&e.jsx(O,{}),!u&&e.jsxs("div",{className:"flex w-full items-start justify-center gap-[35px] px-[25px] py-0 absolute top-16 left-0 border-b [border-bottom-style:solid] border-stroke",children:[e.jsx(B,{className:`${t?"!border-[#1b4f4a]":"!border-transparent"} !flex-[0_0_auto] !bg-[unset] hover:bg-gray-100 cursor-pointer`,divClassName:`${t?"!text-[#1b4f4a]":"!text-[#637381]"} !tracking-[0] !text-base ![font-style:unset] !font-medium ![font-family:'Inter',Helvetica] !leading-6`,text:o("auth.login_tab"),onClick:n}),e.jsx(B,{className:`${t?"!border-transparent":"!border-[#1b4f4a]"} !flex-[0_0_auto] !bg-[unset] hover:bg-gray-100 cursor-pointer`,divClassName:`${t?"!text-[#637381]":"!text-[#1b4f4a]"} !tracking-[0] !text-base ![font-style:unset] !font-medium ![font-family:'Inter',Helvetica] !leading-6`,text:o("auth.signup_tab"),onClick:s})]}),u?"":t?e.jsx(W,{setIsLoading:a}):e.jsx(Y,{setIsLoading:a})]})};export{le as default};
