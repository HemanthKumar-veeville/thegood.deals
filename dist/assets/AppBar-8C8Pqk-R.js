import{a as f,b as _,r as i,j as e,aS as w,aB as N,u as L,k as b,d as x,ap as y,L as k,aT as C,aU as S}from"./index-BH2nyfgt.js";import{C as h}from"./ChevronDown-BcGZvVBh.js";import{V as U}from"./VerticalLine-DpG3ICKV.js";const O=({handleLanguageOpen:l})=>{const{t:n,i18n:c}=f(),{selectedLanguage:a,setSelectedLanguage:t}=_();return i.useEffect(()=>{c.changeLanguage(a==="english"?"en":"fr")},[a]),e.jsx("div",{className:"relative inline-flex items-center cursor-pointer mr-1",onClick:l,children:e.jsxs("div",{className:"flex items-center",children:[e.jsx("img",{src:a==="english"?w:N,style:{width:"20px",height:a==="english"?"17px":"20px"},alt:n(a==="english"?"side_bar.flag_alt.uk":"side_bar.flag_alt.france")}),e.jsx(h,{className:"ml-1 w-4 h-4"})]})})};function B(){const[l,n]=i.useState(!1),[c,a]=i.useState(!1),{t}=f(),d=L(),r=b(),[u,g]=i.useState(!0),j=x(o=>o.user.isUserLoggedIn),{profile:s}=x(o=>o.user),m=()=>{a(!1),n(!l)},p=()=>{n(!1),a(!c)},v=()=>{d("/")};return i.useEffect(()=>{["/artisan-validation","/deal-confirmed","/deal-refused","/deal-refused-message","/artisan-send-review","/deal_details"].includes(r==null?void 0:r.pathname)?g(!1):g(!0)},[r==null?void 0:r.pathname]),e.jsxs("div",{className:"relative",children:[e.jsxs("header",{className:"flex flex-col w-screen max-w-[400px] h-16 items-start relative bg-primary-background border-b border-stroke z-50",children:[e.jsxs("div",{className:"flex h-16 items-center justify-between pl-5 pr-3 py-0 relative self-stretch w-full",children:[u&&e.jsx("div",{className:"flex w-12 h-12 items-center justify-center gap-2.5 relative hover:bg-gray-200 rounded-full cursor-pointer",onClick:m,children:l?e.jsx(h,{className:"!relative !w-6 !h-6"}):e.jsx(U,{className:"!relative !w-6 !h-6"})}),e.jsx("div",{className:"inline-flex items-start relative flex-[0_0_auto]",children:e.jsx("div",{className:"inline-flex items-start relative flex-[0_0_auto]",children:e.jsx("div",{className:"inline-flex items-start relative flex-[0_0_auto]",children:e.jsxs("div",{className:"relative w-fit mt-[-1.00px] font-bold text-[28px] text-center tracking-[0] leading-[normal] whitespace-nowrap cursor-pointer",onClick:v,children:[e.jsx("span",{className:"text-primary-color",children:t("app.logo_part1")}),e.jsx("span",{className:"text-custom-yellow",children:t("app.logo_separator")}),e.jsx("span",{className:"text-custom-orange",children:t("app.logo_part2")})]})})})}),e.jsxs("div",{className:"flex justify-center items-center",children:[e.jsx(O,{handleLanguageOpen:p}),u&&e.jsx("div",{className:"flex w-12 h-12 items-center justify-center gap-2.5 relative hover:bg-gray-200 rounded-full cursor-pointer",onClick:()=>d(j?"/my-information":"/auth?login"),children:s!=null&&s.profile_image&&(s==null?void 0:s.profile_image)!==t("app.default_profile_image_url")?e.jsx("img",{className:"w-[90%] h-[90%] rounded-full object-cover",alt:t("app.alt_profile_photo"),src:s==null?void 0:s.profile_image}):e.jsx(y,{className:"!relative !w-6 !h-6"})})]})]}),e.jsx(k,{})]}),l&&e.jsx(C,{onClose:m}),c&&e.jsx(S,{onClose:p})]})}export{B as default};
