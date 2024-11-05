import{P as a,j as e,a as L,Y as T,ap as A,aB as P}from"./index-BH2nyfgt.js";import{U as z}from"./Users22-CFIuZlo2.js";import{B as v}from"./Badges-C0tecmub.js";const S="data:image/svg+xml,%3csvg%20width='260'%20height='16'%20viewBox='0%200%20260%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cline%20x1='8'%20y1='8'%20x2='252'%20y2='8.00002'%20stroke='%23DFE4EA'%20stroke-width='16'%20stroke-linecap='round'/%3e%3c/svg%3e",I="data:image/svg+xml,%3csvg%20width='198'%20height='16'%20viewBox='0%200%20198%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cline%20x1='8'%20y1='8'%20x2='189.489'%20y2='8.00002'%20stroke='%231B4F4A'%20stroke-width='16'%20stroke-linecap='round'/%3e%3c/svg%3e",E="data:image/svg+xml,%3csvg%20width='357'%20height='16'%20viewBox='0%200%20357%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cline%20x1='8'%20y1='8'%20x2='349'%20y2='8.00003'%20stroke='%231B4F4A'%20stroke-width='16'%20stroke-linecap='round'/%3e%3c/svg%3e",w=({color:s="#1B4F4A",className:r})=>e.jsxs("svg",{className:`${r}`,fill:"none",height:"20",viewBox:"0 0 20 20",width:"20",xmlns:"http://www.w3.org/2000/svg",children:[e.jsxs("g",{clipPath:"url(#clip0_1153_1713)",children:[e.jsx("path",{d:"M10.4687 10.3125V5.28125C10.4687 4.90625 10.1562 4.59375 9.78125 4.59375C9.40625 4.59375 9.09375 4.90625 9.09375 5.28125V10.5937C9.09375 10.7812 9.15625 10.9687 9.28125 11.0937L12.75 14.625C12.875 14.75 13.0625 14.8437 13.25 14.8437C13.4375 14.8437 13.5938 14.7812 13.75 14.6562C14.0312 14.375 14.0312 13.9375 13.75 13.6562L10.4687 10.3125Z",fill:s}),e.jsx("path",{d:"M10 0.46875C4.78125 0.46875 0.5625 4.75 0.5625 10C0.5625 15.25 4.8125 19.5312 10 19.5312C15.1875 19.5312 19.4375 15.25 19.4375 10C19.4375 4.75 15.2188 0.46875 10 0.46875ZM10 18.125C5.5625 18.125 1.9375 14.4688 1.9375 10C1.9375 5.53125 5.5625 1.875 10 1.875C14.4375 1.875 18.0625 5.53125 18.0625 10C18.0625 14.4688 14.4375 18.125 10 18.125Z",fill:s})]}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_1153_1713",children:e.jsx("rect",{fill:"white",height:"20",width:"20"})})})]});w.propTypes={color:a.string};const y=({className:s,overlapClassName:r,groupClassName:o,overlapGroupClassName:d,lineClassName:c,line:m={Line_60_3:E},divClassName:g,text:t="80%"})=>e.jsx("div",{className:`w-[470px] h-5 ${s}`,children:e.jsxs("div",{className:`relative h-5 -top-px ${r}`,children:[e.jsx("div",{className:`absolute w-[470px] h-px top-[19px] left-0 ${o}`,children:e.jsx("div",{className:`relative h-4 -top-4 bg-[url(/static/img/line-59-4.svg)] bg-[100%_100%] ${d}`,children:e.jsx("img",{className:`absolute w-[357px] h-4 top-0 left-0 ${c}`,alt:"Line",src:m})})}),e.jsx("div",{className:`absolute top-0 left-[166px] font-body-extra-small-medium font-[number:var(--body-extra-small-medium-font-weight)] text-whitewhite text-[length:var(--body-extra-small-medium-font-size)] tracking-[var(--body-extra-small-medium-letter-spacing)] leading-[var(--body-extra-small-medium-line-height)] whitespace-nowrap [font-style:var(--body-extra-small-medium-font-style)] ${g}`,children:t})]})});y.propTypes={line:a.string,text:a.string};const n={soon_out_stock:{text:"artisan.cardDeal.soonOutStock",color:"warning"},finished:{text:"artisan.cardDeal.finished",color:"success"},in_stock:{text:"artisan.cardDeal.inStock",color:"success"},waiting:{text:"artisan.cardDeal.waiting",color:"warning"},draft:{text:"artisan.cardDeal.draft",color:"info"}},M=({className:s,styleTypePrimaryText:r="80% vendus",styleTypePrimaryLine:o={Line_60_2:I},styleTypePrimaryDivClassName:d,caissesDeVinsClassName:c,text:m="Caisses de vins<br/>Domaine de Cigaluse",divClassName:g,text1:t="fin dans 12 jours",divClassNameOverride:x,badgesText:b=(B=>(B=n[t])==null?void 0:B.text)(),badgesDivClassName:j,participantsCount:h,override:N=e.jsx(y,{className:"!self-stretch !w-full !relative",divClassName:d,groupClassName:"!w-[260px]",line:o,lineClassName:"!w-[197px]",overlapClassName:`bg-[url(${S})]`,text:r}),badgesColor:U="warning",badgesText1:i=(D=>(D=n[t])==null?void 0:D.text)(),dealEndsIn:_,isGuestDeal:C,dealImages:k,organizer:$})=>{var p,u;const{t:l}=L(),f=_,F={soon_out_stock:l("artisan.cardDeal.endsIn",{days:f}),finished:l("artisan.cardDeal.dealFinished"),in_stock:l("artisan.cardDeal.endsIn",{days:f})};return e.jsxs("div",{className:`flex flex-col w-full items-start relative rounded-lg overflow-hidden shadow-shadow-1 ${s}`,children:[e.jsx(T,{pictures:k}),e.jsx("div",{className:"flex flex-col items-center gap-2.5 p-[15px] relative self-stretch w-full flex-[0_0_auto] bg-whitewhite",children:e.jsxs("div",{className:"flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]",children:[!(t==="draft"||t==="waiting")&&N,e.jsx("p",{className:`capitalize relative self-stretch font-body-medium-bold font-[number:var(--body-medium-bold-font-weight)] text-primary-color text-[length:var(--body-medium-bold-font-size)] tracking-[var(--body-medium-bold-letter-spacing)] leading-[var(--body-medium-bold-line-height)] [font-style:var(--body-medium-bold-font-style)] ${c}`,children:m}),!(t==="draft"||t==="waiting")&&e.jsxs("div",{className:"inline-flex items-center gap-2.5 relative flex-[0_0_auto]",children:[e.jsx(w,{className:"!relative !w-5 !h-5",color:"#1B4F4A"}),e.jsx("div",{className:`relative w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)] ${g}`,children:F[t]})]}),h!==0&&e.jsxs("div",{className:"inline-flex items-center gap-2.5 relative flex-[0_0_auto]",children:[e.jsx(z,{className:"!relative !w-5 !h-5"}),e.jsx("div",{className:`relative w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)] ${x}`,children:l("artisan.cardDeal.participants",{count:h})})]}),C&&e.jsxs("div",{className:"inline-flex items-center gap-2.5 relative flex-[0_0_auto]",children:[e.jsx(A,{className:"!relative !w-5 !h-5"}),e.jsx("div",{className:`relative w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)] ${x}`,children:$})]})]})}),e.jsx(v,{className:"!left-[15px] !absolute !top-[15px] !font-semibold",color:(p=n[t])==null?void 0:p.color,divClassName:j,round:"semi-round",state:"duo-tone",text1:l(b),text2:l(i==="in_stock"||i==="finished"?(u=n[i])==null?void 0:u.text:i)}),e.jsx(v,{className:"!right-[15px] !absolute !bg-blueblue-light-5 !top-[15px]",color:"warning",divClassName:"!text-blueblue !tracking-[0] !text-lg ![font-style:unset] !font-bold ![font-family:'Inter',Helvetica] !leading-5",round:"semi-round",state:"duo-tone",imageSrc:P})]})};M.propTypes={styleTypePrimaryText:a.string,styleTypePrimaryLine:a.string,text:a.string,text1:a.string,badgesText:a.string,badgesColor:a.string,badgesText1:a.string};export{M as C};
