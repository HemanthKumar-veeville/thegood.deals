import{R as p,x as y,a as b,j as a,B as _,S as k}from"./index-CWmJuMKO.js";import{W as v}from"./Warning1-KvpmDJbW.js";const x=[{key:"title",getter:e=>e.getTitle()},{key:"html",getter:e=>e.getHtmlContainer()},{key:"confirmButtonText",getter:e=>e.getConfirmButton()},{key:"denyButtonText",getter:e=>e.getDenyButton()},{key:"cancelButtonText",getter:e=>e.getCancelButton()},{key:"footer",getter:e=>e.getFooter()},{key:"closeButtonHtml",getter:e=>e.getCloseButton()},{key:"iconHtml",getter:e=>e.getIconContent()},{key:"loaderHtml",getter:e=>e.getLoader()}],f=()=>{};function j(e){function d(t){const s={},r={},o=x.map(l=>l.key);return Object.entries(t).forEach(l=>{let[i,c]=l;o.includes(i)&&p.isValidElement(c)?(s[i]=c,r[i]=" "):r[i]=c}),[s,r]}function m(t,s){Object.entries(s).forEach(r=>{let[o,l]=r;const c=x.find(g=>g.key===o).getter(e),n=y(c);n.render(l),t.__roots.push(n)})}function u(t){t.__roots.forEach(s=>{s.unmount()}),t.__roots=[]}return class extends e{static argsToParams(t){if(p.isValidElement(t[0])||p.isValidElement(t[1])){const s={};return["title","html","icon"].forEach((r,o)=>{t[o]!==void 0&&(s[r]=t[o])}),s}else return e.argsToParams(t)}_main(t,s){this.__roots=[],this.__params=Object.assign({},s,t);const[r,o]=d(this.__params),l=o.willOpen||f,i=o.didOpen||f,c=o.didDestroy||f;return super._main(Object.assign({},o,{willOpen:n=>{m(this,r),l(n)},didOpen:n=>{setTimeout(()=>{i(n)})},didDestroy:n=>{c(n),u(this)}}))}update(t){Object.assign(this.__params,t),u(this);const[s,r]=d(this.__params);super.update(r),m(this,s)}}}const h=j(k),E=({message:e,buttonText:d,shouldCloseOnOverlayClick:m=!0,handleClick:u=()=>h.close(),onClose:t})=>{const{t:s}=b();h.fire({html:a.jsxs("div",{className:"flex flex-col items-center gap-5 px-[15px] py-[30px] relative bg-white rounded-[20px]",children:[a.jsx("div",{className:"relative self-stretch w-full h-[122px]",children:a.jsxs("div",{className:"w-full gap-2.5 flex flex-col items-center relative",children:[a.jsx("div",{className:"relative w-[60px] h-[60px] bg-redred-light-5 rounded-[37px]",children:a.jsx(v,{className:"!absolute !w-6 !h-6 !top-[18px] !left-[18px]",color:"#F23030"})}),a.jsx("div",{className:"gap-[15px] self-stretch w-full flex-[0_0_auto] flex flex-col items-center relative",children:a.jsx("p",{className:"relative self-stretch mt-[-1.00px] font-body-large-semibold font-[number:var(--body-large-semibold-font-weight)] text-darkdark text-[length:var(--body-large-semibold-font-size)] text-center tracking-[var(--body-large-semibold-letter-spacing)] leading-[var(--body-large-semibold-line-height)] [font-style:var(--body-large-semibold-font-style)]",children:e||s("customErrorModal.defaultMessage")})})]})}),a.jsx("div",{className:"gap-[18px] self-stretch w-full flex-[0_0_auto] flex flex-col items-center relative mt-3",onClick:u,children:a.jsx(_,{buttonText:d||s("customErrorModal.buttonText"),className:"!flex-[0_0_auto] !flex !bg-redred !w-[190px]",color:"primary",kind:"primary",round:"semi-round",state:"default"})})]}),showConfirmButton:!1,customClass:{popup:"p-0 bg-transparent shadow-none flex justify-center items-center"},backdrop:!0,allowOutsideClick:m,willClose:t})};export{E as S};
