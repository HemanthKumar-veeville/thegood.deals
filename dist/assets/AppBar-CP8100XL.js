import{a as j,b as v,r as l,j as e,u as w,f as N,g as x,L}from"./index-C0zzSvLD.js";import{C as h}from"./ChevronDown-DsCw485z.js";import{U as _}from"./UserAlt-vnfmJQ4W.js";import{V as b}from"./VerticalLine-RJDVag9I.js";import{U as y,S as k,L as C}from"./LanguageDropdown-JDlSWqoE.js";import{F as U}from"./france-flag-icon-BP-lwE0P.js";const S=({handleLanguageOpen:r})=>{const{t:n,i18n:i}=j(),{selectedLanguage:t,setSelectedLanguage:c}=v();return l.useEffect(()=>{i.changeLanguage(t==="english"?"en":"fr")},[t]),e.jsx("div",{className:"relative inline-flex items-center cursor-pointer mr-1",onClick:r,children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("img",{src:t==="english"?y:U,style:{width:"20px",height:t==="english"?"17px":"20px"},alt:n(t==="english"?"side_bar.flag_alt.uk":"side_bar.flag_alt.france")}),e.jsx(h,{className:"ml-1 w-4 h-4"})]})})};function V(){const[r,n]=l.useState(!1),[i,t]=l.useState(!1),c=w(),s=N(),[m,d]=l.useState(!0),f=x(o=>o.user.isUserLoggedIn),{profile:a,userDeals:D,userReviews:O}=x(o=>o.user),u=()=>{n(!r)},g=()=>{t(!i)},p=()=>{c("/")};return l.useEffect(()=>{(s==null?void 0:s.pathname)==="/artisan-validation"||(s==null?void 0:s.pathname)==="/deal-confirmed"||(s==null?void 0:s.pathname)==="/deal-refused"||(s==null?void 0:s.pathname)==="/deal-refused-message"||(s==null?void 0:s.pathname)==="/artisan-send-review"||(s==null?void 0:s.pathname)==="/deal_details"?d(!1):d(!0)},[s==null?void 0:s.pathname]),e.jsxs("div",{className:"relative",children:[e.jsxs("header",{className:"flex flex-col w-screen max-w-[400px] h-16 items-start relative bg-primary-background border-b border-stroke z-50",children:[e.jsxs("div",{className:`flex h-16 items-center ${m?"justify-between":"justify-center"} pl-5 pr-3 py-0 relative self-stretch w-full`,children:[m&&e.jsx("div",{className:"flex w-12 h-12 items-center justify-center gap-2.5 relative hover:bg-gray-200 rounded-full cursor-pointer",onClick:u,children:r?e.jsx(h,{className:"!relative !w-6 !h-6"}):e.jsx(b,{className:"!relative !w-6 !h-6"})}),e.jsx("div",{className:"inline-flex items-start relative flex-[0_0_auto]",children:e.jsx("div",{className:"inline-flex items-start relative flex-[0_0_auto]",children:e.jsx("div",{className:"inline-flex items-start relative flex-[0_0_auto]",children:e.jsxs("div",{className:"relative w-fit mt-[-1.00px] font-bold text-[28px] text-center tracking-[0] leading-[normal] whitespace-nowrap cursor-pointer",onClick:p,children:[e.jsx("span",{className:"text-primary-color",children:"thegood"}),e.jsx("span",{className:"text-custom-yellow",children:"."}),e.jsx("span",{className:"text-custom-orange",children:"deals"})]})})})}),e.jsxs("div",{className:"flex justify-center items-center",children:[e.jsx(S,{handleLanguageOpen:g}),m&&e.jsx("div",{className:"flex w-12 h-12 items-center justify-center gap-2.5 relative hover:bg-gray-200 rounded-full cursor-pointer",onClick:()=>c(f?"/my-information":"/auth?login"),children:a!=null&&a.profile_image&&(a==null?void 0:a.profile_image)!=="https://example.com/profiles/default.jpg"?e.jsx("img",{className:"w-[90%] h-[90%] rounded-full object-cover",alt:"photo",src:a==null?void 0:a.profile_image}):e.jsx(_,{className:"!relative !w-6 !h-6"})})]})]}),e.jsx("img",{className:"relative self-stretch w-full h-px mb-1 object-cover",alt:"Line",src:L})]}),r&&e.jsx(k,{onClose:u}),i&&e.jsx(C,{onClose:g})]})}export{V as default};