import{R as v,u as k,r as n,b as y,g as j,a as C,j as t}from"./index-B0WL61aP.js";import{S as i}from"./sweetalert2.all-DEXiqHiS.js";import{F as N}from"./france-flag-icon-BP-lwE0P.js";const L="/assets/uk_flag_icon-BfTnDSFt.png",I=v.memo(({onClose:u})=>{const g=k(),[h,d]=n.useState(!1),{selectedLanguage:l,setSelectedLanguage:o}=y(),f=j(a=>a.user.isUserLoggedIn),{t:e,i18n:c}=C();n.useEffect(()=>{d(!0)},[]);const x=n.useCallback(()=>{d(!1),setTimeout(u,300)},[u]),s=n.useCallback(a=>{g(a),x()},[g,x]),b=n.useCallback(()=>{i.fire({title:e("side_bar.select_language"),showCancelButton:!1,showConfirmButton:!1,showCloseButton:!0,html:`
        <button id="english-button" class="swal2-confirm swal2-styled ${l==="english"?"bg-blue-500 text-white":"bg-gray-200 text-black"} px-4 py-2 rounded-md mr-2">${e("side_bar.language.english")}</button>
        <button id="french-button" class="swal2-confirm swal2-styled ${l==="french"?"bg-blue-500 text-white":"bg-gray-200 text-black"} px-4 py-2 rounded-md">${e("side_bar.language.french")}</button>
      `,didOpen:()=>{const a=i.getPopup().querySelector("#english-button"),r=i.getPopup().querySelector("#french-button");a.addEventListener("click",()=>{o("english"),c.changeLanguage("en"),i.close()}),r.addEventListener("click",()=>{o("french"),c.changeLanguage("fr"),i.close()})}})},[l,o,c,e]),p=n.useMemo(()=>[{label:e("side_bar.about"),onClick:()=>s("/about-us")},{label:e("side_bar.how"),onClick:()=>s("/how-it-works")},{label:e("side_bar.faq"),onClick:()=>s("/contact-us")},{label:e("side_bar.contact_us"),onClick:()=>s("/help-me")}],[e,s]),_=()=>p.map((a,r)=>t.jsx("div",{className:"flex items-start gap-2 px-0 py-3 relative self-stretch w-full flex-[0_0_auto]",onClick:a.onClick,children:t.jsx("div",{className:"relative flex-1 mt-[-1.00px] font-text-medium-normal text-[#2a4e4a] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)]",children:a.label})},r)),m=(a,r,w="")=>t.jsx("button",{className:`w-full text-green inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-green cursor-pointer ${w}`,onClick:()=>s(r),children:t.jsx("span",{className:"font-normal text-base leading-6 whitespace-nowrap",children:a})});return t.jsx("div",{className:`sticky top-16 left-0 w-full max-w-[400px] mx-auto h-screen bg-primary-background shadow-lg z-40 transition-transform duration-300 ${h?"translate-y-0":"-translate-y-full"}`,children:t.jsx("div",{className:"flex flex-col w-full h-full items-start gap-2.5 pt-4 pb-40 px-5 relative",children:t.jsxs("div",{className:"items-center justify-center gap-6 flex flex-col relative self-stretch w-full flex-[0_0_auto]",children:[t.jsx("div",{className:"items-start flex flex-col relative self-stretch w-full flex-[0_0_auto]",children:_()}),t.jsxs("div",{className:"inline-flex flex-col items-center gap-4 pt-4 pb-0 px-0 relative flex-[0_0_auto] w-full",children:[m(e("side_bar.create_deal"),f?"/create-deal":"/auth?login","bg-green text-white hover:bg-[#15423b] hover:text-[#d4d4d4]"),m(e("side_bar.my_account"),f?"/":"/auth?login"),t.jsx("button",{className:"w-full text-green inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-green cursor-pointer",onClick:b,children:t.jsxs("span",{className:"font-normal text-base leading-6 whitespace-nowrap flex items-center gap-2",children:[e(`side_bar.language.${l}`),t.jsx("img",{src:l==="english"?L:N,style:{width:"20px",height:l==="english"?"17px":"20px"},alt:e(l==="english"?"side_bar.flag_alt.uk":"side_bar.flag_alt.france")})]})})]})]})})})});export{I as S};
