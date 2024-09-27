import{r as u,u as y,c as v,a as j,a0 as _,j as s,B as P}from"./index-DwweaPqp.js";import{u as N,c as S,a as g,b as C}from"./index.esm-BLZ5VfvB.js";import{E as B}from"./EyeAlt8-BQQ-Y7c0.js";import{S as E}from"./sweetalert2.all-BgiQ8m76.js";import V from"./CustomLoader-CWteApDR.js";const f=({id:o,name:a,type:i="text",placeholder:m,formik:r,label:l,showPassword:n=!1,toggleVisibility:d})=>s.jsxs("div",{className:"w-full flex flex-col items-start gap-2 relative",children:[l&&s.jsx("label",{htmlFor:o,className:"[font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-sm leading-[22px] mb-[2px] w-full",children:l}),s.jsxs("div",{className:"w-full",children:[s.jsxs("div",{className:`flex items-center gap-2.5 pl-5 pr-4 py-3 w-full bg-white rounded-md border cursor-pointer hover:bg-gray-100 ${r.touched[a]&&r.errors[a]?"border-red-500 border-solid":"focus-within:ring-1 focus-within:ring-[#1b4f4a] border"}`,children:[s.jsx("input",{id:o,name:a,type:n?"text":i,placeholder:m,onChange:r.handleChange,onBlur:r.handleBlur,value:r.values[a],className:"flex-1 bg-transparent outline-none",autoComplete:"off"}),d&&s.jsx("button",{type:"button",onClick:d,className:"flex items-center justify-center !relative !w-4 !h-4 hover:text-primary cursor-pointer","aria-label":n?"Hide password":"Show password",children:s.jsx(B,{})})]}),r.touched[a]&&r.errors[a]&&s.jsx("div",{className:"text-red-500 text-sm mt-2",children:r.errors[a]})]})]}),R=()=>{const[o,a]=u.useState(!1),[i,m]=u.useState(!1),[r,l]=u.useState(!1),n=y(),d=v(),{t:e}=j();u.useEffect(()=>{const t=new URLSearchParams(window.location.search).get("email");t&&c.setFieldValue("email",t)},[]);const c=N({initialValues:{password:"",confirmPassword:"",email:""},validationSchema:S({password:g().min(8,e("signup.password_hints.min_length")).matches(/[a-z]/,e("signup.password_hints.lowercase")).matches(/[A-Z]/,e("signup.password_hints.uppercase")).matches(/\d/,e("signup.password_hints.number")).matches(/[~#@$%&!*_?^-]/,e("signup.password_hints.special_character")).required(e("signup.errors.password")),confirmPassword:g().oneOf([C("password"),null],e("signup.errors.confirm_password")).required(e("signup.errors.confirm_password"))}),onSubmit:async t=>{var p,h;l(!0);try{await d(_(t)).unwrap(),n("/reset-password-success")}catch(w){E.fire({title:e("signup.errors.error_title"),text:(h=(p=w==null?void 0:w.response)==null?void 0:p.data)==null?void 0:h.detail,icon:"error",confirmButtonText:"OK"})}finally{l(!1)}}}),x=()=>{a(!o)},b=()=>{m(!i)};return s.jsxs("div",{className:"relative w-full h-screen bg-primary-background",children:[r&&s.jsx(V,{}),!r&&s.jsxs("div",{className:"flex flex-col w-[360px] items-start gap-[15px] px-[35px] py-[15px] absolute left-0",children:[s.jsx("div",{className:"relative w-fit font-heading-6 font-semibold text-primary-color text-[length:var(--heading-6-font-size)] text-center",children:e("resetPassword.newPassword")}),s.jsx("p",{className:"font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)]",children:e("resetPassword.passwordInstruction")}),s.jsxs("form",{onSubmit:c.handleSubmit,className:"w-full space-y-5",children:[s.jsx(f,{id:"password",name:"password",type:"password",placeholder:e("signup.password"),formik:c,showPassword:o,toggleVisibility:x}),s.jsx(f,{id:"confirmPassword",name:"confirmPassword",type:"password",placeholder:e("signup.confirm_password"),formik:c,showPassword:i,toggleVisibility:b}),s.jsx("div",{className:"flex flex-wrap text-[#637381] text-sm gap-x-4 gap-y-2 mt-2",children:[e("signup.password_hints.min_length"),e("signup.password_hints.uppercase_lowercase"),e("signup.password_hints.special_character"),e("signup.password_hints.number")].map((t,p)=>s.jsxs("div",{className:"font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] text-center tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]",children:[s.jsx("span",{className:"mr-1",children:"•"})," ",t]},p))}),s.jsx(P,{buttonText:e("resetPassword.changePasswordButton"),className:"!self-stretch !flex-[0_0_auto] !flex !w-full",color:"primary",kind:"primary",round:"semi-round",state:"default",type:"submit"})]})]})]})};export{R as default};
