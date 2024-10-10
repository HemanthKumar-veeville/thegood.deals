import{r as m,u as P,c as b,a as v,aj as j,S as C,j as e,C as N,B as S}from"./index-B-1kzR92.js";import{u as _,c as B,a as h,b as E}from"./index.esm-DxRDRWgb.js";import{E as L}from"./EyeAlt8-CKJyiutu.js";const x=({id:o,name:a,type:i="text",placeholder:p,formik:r,label:l,showPassword:d=!1,toggleVisibility:n,t:s})=>e.jsxs("div",{className:"w-full flex flex-col items-start gap-2 relative",children:[l&&e.jsx("label",{htmlFor:o,className:"[font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-sm leading-[22px] mb-[2px] w-full",children:l}),e.jsxs("div",{className:"w-full",children:[e.jsxs("div",{className:`flex items-center gap-2.5 pl-5 pr-4 py-3 w-full bg-white rounded-md border cursor-pointer hover:bg-gray-100 ${r.touched[a]&&r.errors[a]?"border-red-500 border-solid":"focus-within:ring-1 focus-within:ring-[#1b4f4a] border"}`,children:[e.jsx("input",{id:o,name:a,type:d?"text":i,placeholder:p,onChange:r.handleChange,onBlur:r.handleBlur,value:r.values[a],className:"flex-1 bg-transparent outline-none",autoComplete:"off"}),n&&e.jsx("button",{type:"button",onClick:n,className:"flex items-center justify-center !relative !w-4 !h-4 hover:text-primary cursor-pointer","aria-label":s(d?"resetPassword.hide_password":"resetPassword.show_password"),children:e.jsx(L,{})})]}),r.touched[a]&&r.errors[a]&&e.jsx("div",{className:"text-red-500 text-sm mt-2",children:r.errors[a]})]})]}),F=()=>{const[o,a]=m.useState(!1),[i,p]=m.useState(!1),[r,l]=m.useState(!1),d=P(),n=b(),{t:s}=v();m.useEffect(()=>{const t=new URLSearchParams(window.location.search).get("email");t&&c.setFieldValue("email",t)},[]);const c=_({initialValues:{password:"",confirmPassword:"",email:""},validationSchema:B({password:h().min(8,s("resetPassword.passwordCriteria.8characters")).matches(/[a-z]/,s("resetPassword.passwordCriteria.1lowerCase")).matches(/[A-Z]/,s("resetPassword.passwordCriteria.1capitalLetter")).matches(/\d/,s("resetPassword.passwordCriteria.1digit")).matches(/[~#@$%&!*_?^-]/,s("resetPassword.passwordCriteria.special_character")).required(s("resetPassword.errors.password")),confirmPassword:h().oneOf([E("password"),null],s("resetPassword.errors.confirm_password")).required(s("resetPassword.errors.confirm_password"))}),onSubmit:async t=>{var w,f;l(!0);try{await n(j(t)).unwrap(),d("/reset-password-success")}catch(u){C.fire({title:s("resetPassword.errors.error_title"),text:((f=(w=u==null?void 0:u.response)==null?void 0:w.data)==null?void 0:f.detail)||s("resetPassword.errors.generic_error"),icon:"error",confirmButtonText:s("resetPassword.errors.confirm")})}finally{l(!1)}}}),g=()=>{a(!o)},y=()=>{p(!i)};return e.jsxs("div",{className:"relative w-full h-screen bg-primary-background",children:[r&&e.jsx(N,{}),!r&&e.jsxs("div",{className:"flex flex-col w-[360px] items-start gap-[15px] px-[35px] py-[15px] absolute left-0",children:[e.jsx("div",{className:"relative w-fit font-heading-6 font-semibold text-primary-color text-[length:var(--heading-6-font-size)] text-center",children:s("resetPassword.newPassword")}),e.jsx("p",{className:"font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)]",children:s("resetPassword.passwordInstruction")}),e.jsxs("form",{onSubmit:c.handleSubmit,className:"w-full space-y-5",children:[e.jsx(x,{id:"password",name:"password",type:"password",placeholder:s("resetPassword.passwordPlaceholder"),formik:c,showPassword:o,toggleVisibility:g,t:s}),e.jsx(x,{id:"confirmPassword",name:"confirmPassword",type:"password",placeholder:s("resetPassword.confirmPasswordPlaceholder"),formik:c,showPassword:i,toggleVisibility:y,t:s}),e.jsx("div",{className:"flex flex-wrap text-[#637381] text-sm gap-x-4 gap-y-2 mt-2",children:[s("resetPassword.passwordCriteria.8characters"),s("resetPassword.passwordCriteria.1capitalLetter"),s("resetPassword.passwordCriteria.special_character"),s("resetPassword.passwordCriteria.1digit")].map((t,w)=>e.jsxs("div",{className:"font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] text-center tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]",children:[e.jsx("span",{className:"mr-1",children:"•"})," ",t]},w))}),e.jsx(S,{buttonText:s("resetPassword.changePasswordButton"),className:"!self-stretch !flex-[0_0_auto] !flex !w-full",color:"primary",kind:"primary",round:"semi-round",state:"default",type:"submit"})]})]})]})};export{F as default};