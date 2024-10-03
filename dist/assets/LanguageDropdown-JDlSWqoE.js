import{R as w,u as _,r as s,b as v,g as k,a as y,S as d,j as e}from"./index-C0zzSvLD.js";import{F as C}from"./france-flag-icon-BP-lwE0P.js";const L="/assets/uk_flag_icon-BfTnDSFt.png",E=w.memo(({onClose:c})=>{const f=_(),[x,b]=s.useState(!1),{selectedLanguage:o,setSelectedLanguage:n}=v(),m=k(a=>a.user.isUserLoggedIn),{t,i18n:i}=y();s.useEffect(()=>{b(!0)},[]);const h=s.useCallback(()=>{b(!1),setTimeout(c,300)},[c]),r=s.useCallback(a=>{f(a),h()},[f,h]);s.useCallback(()=>{d.fire({title:t("side_bar.select_language"),showCancelButton:!1,showConfirmButton:!1,showCloseButton:!0,html:`
        <button id="english-button" class="swal2-confirm swal2-styled ${o==="english"?"bg-blue-500 text-white":"bg-gray-200 text-black"} px-4 py-2 rounded-md mr-2">${t("side_bar.language.english")}</button>
        <button id="french-button" class="swal2-confirm swal2-styled ${o==="french"?"bg-blue-500 text-white":"bg-gray-200 text-black"} px-4 py-2 rounded-md">${t("side_bar.language.french")}</button>
      `,didOpen:()=>{const a=d.getPopup().querySelector("#english-button"),g=d.getPopup().querySelector("#french-button");a.addEventListener("click",()=>{n("english"),i.changeLanguage("en"),d.close()}),g.addEventListener("click",()=>{n("french"),i.changeLanguage("fr"),d.close()})}})},[o,n,i,t]);const l=s.useMemo(()=>[{label:t("side_bar.about"),onClick:()=>r("/about-us")},{label:t("side_bar.how"),onClick:()=>r("/how-it-works")},{label:t("side_bar.faq"),onClick:()=>r("/contact-us")},{label:t("side_bar.contact_us"),onClick:()=>r("/help-me")}],[t,r]),u=()=>l.map((a,g)=>e.jsx("div",{className:"flex items-start gap-2 px-0 py-3 relative self-stretch w-full flex-[0_0_auto]",onClick:a.onClick,children:e.jsx("div",{className:"relative flex-1 mt-[-1.00px] font-text-medium-normal text-[#2a4e4a] text-[length:var(--text-medium-normal-font-size)] tracking-[var(--text-medium-normal-letter-spacing)] leading-[var(--text-medium-normal-line-height)]",children:a.label})},g)),p=(a,g,j="")=>e.jsx("button",{className:`w-full text-green inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-green cursor-pointer ${j}`,onClick:()=>r(g),children:e.jsx("span",{className:"font-normal text-base leading-6 whitespace-nowrap",children:a})});return e.jsx("div",{className:`sticky top-16 left-0 w-full max-w-[400px] mx-auto h-screen bg-primary-background shadow-lg z-40 transition-transform duration-300 ${x?"translate-y-0":"-translate-y-full"}`,children:e.jsx("div",{className:"flex flex-col w-full h-full items-start gap-2.5 pt-4 pb-40 px-5 relative",children:e.jsxs("div",{className:"items-center justify-center gap-6 flex flex-col relative self-stretch w-full flex-[0_0_auto]",children:[e.jsx("div",{className:"items-start flex flex-col relative self-stretch w-full flex-[0_0_auto]",children:u()}),e.jsxs("div",{className:"inline-flex flex-col items-center gap-4 pt-4 pb-0 px-0 relative flex-[0_0_auto] w-full",children:[p(t("side_bar.create_deal"),m?"/create-deal":"/auth?login","bg-green text-white hover:bg-[#15423b] hover:text-[#d4d4d4]"),p(t("side_bar.my_account"),m?"/":"/auth?login")]})]})})})}),I=w.memo(({onClose:c})=>{_();const[f,x]=s.useState(!1),{selectedLanguage:b,setSelectedLanguage:o}=v();k(l=>l.user.isUserLoggedIn);const{t:n,i18n:m}=y();s.useEffect(()=>{x(!0)},[]);const t=s.useCallback(()=>{x(!1),setTimeout(c,300)},[c]),i=(l,u)=>{console.log("Executed"),o(l),m.changeLanguage(u),t()},h=s.useMemo(()=>[{label:"French",onClick:()=>i("french","fr")},{label:"English",onClick:()=>i("english","en")}],[n,i]),r=()=>h.map((l,u)=>e.jsx("button",{className:"w-full text-green inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-green cursor-pointer mb-3",onClick:l.onClick,children:e.jsxs("span",{className:"font-normal text-base leading-6 whitespace-nowrap flex items-center gap-2",children:[n(`side_bar.language.${l.label.toLocaleLowerCase()}`),e.jsx("img",{src:l.label==="English"?L:C,style:{width:"20px",height:l.label==="English"?"17px":"20px"},alt:l.label==="English"?n("side_bar.flag_alt.uk"):n("side_bar.flag_alt.france")})]})},u));return e.jsx("div",{className:`sticky top-16 left-0 w-full max-w-[400px] mx-auto h-screen bg-primary-background shadow-lg z-40 transition-transform duration-300 ${f?"translate-y-0":"-translate-y-full"}`,children:e.jsx("div",{className:"flex flex-col w-full h-full items-start gap-2.5 pt-4 pb-40 px-5 relative text-center",children:e.jsx("div",{className:"items-center justify-center gap-6 flex flex-col relative self-stretch w-full flex-[0_0_auto]",children:e.jsx("div",{className:"items-start flex flex-col relative self-stretch w-full flex-[0_0_auto]",children:r()})})})})});export{I as L,E as S,L as U};
