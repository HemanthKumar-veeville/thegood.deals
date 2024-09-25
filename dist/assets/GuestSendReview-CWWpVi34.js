import{P as k,j as e,a as C,r,k as L}from"./index-B--wL1cn.js";import{S as z}from"./StarFill1-3DKlfiJg.js";import{V as v}from"./VerticalLine-CJlqAvur.js";import{L as s}from"./line-63-BwS0eOFc.js";const p=({color:g="#F59E0B",className:x})=>e.jsxs("svg",{className:`${x}`,fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("g",{clipPath:"url(#clip0_312_25790)",children:e.jsx("path",{d:"M6.03735 23.325C5.69985 23.325 5.36235 23.2125 5.09985 23.025C4.57485 22.65 4.27485 21.975 4.38735 21.3375L5.36235 15.3L1.16235 10.9875C0.712346 10.5375 0.562346 9.86249 0.749846 9.22499C0.937346 8.62499 1.46235 8.17499 2.06235 8.09999L7.87485 7.16249L10.4998 1.64999C10.7998 1.04999 11.3623 0.674988 11.9998 0.674988C12.6373 0.674988 13.2373 1.04999 13.4998 1.64999L16.1248 7.12499L21.8998 8.02499C22.4998 8.13749 23.0248 8.54999 23.2123 9.14999C23.4373 9.78749 23.2498 10.4625 22.7998 10.9125L18.6373 15.2625L19.6123 21.3375C19.7248 22.0125 19.4623 22.65 18.8998 23.025C18.3748 23.4 17.7373 23.4375 17.1748 23.1375L11.9998 20.325L6.82485 23.1375C6.59985 23.2875 6.29985 23.325 6.03735 23.325ZM2.36235 9.74999C2.36235 9.74999 2.36235 9.78749 2.36235 9.82499L6.74985 14.325C7.01235 14.5875 7.12485 15 7.08735 15.375L6.07485 21.6375C6.07485 21.6375 6.07485 21.6375 6.07485 21.675L11.4748 18.75C11.8123 18.5625 12.2248 18.5625 12.5998 18.75L17.9998 21.675C17.9998 21.675 17.9998 21.675 17.9998 21.6375L16.9873 15.3375C16.9123 14.9625 17.0623 14.5875 17.3248 14.2875L21.7123 9.78749C21.7498 9.74999 21.7123 9.71249 21.7123 9.71249L15.6748 8.77499C15.2998 8.69999 14.9623 8.47499 14.8123 8.09999L11.9998 2.39999L9.29985 8.13749C9.14985 8.47499 8.81235 8.73749 8.43735 8.81249L2.36235 9.74999Z",fill:g})}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_312_25790",children:e.jsx("rect",{fill:"white",height:"24",width:"24"})})})]});p.propTypes={color:k.string};const E=({HEADERHeaderOpenClassName:g,HEADERIcon:x=e.jsx(v,{className:"!relative !w-6 !h-6",color:"#1B4F4A"})})=>{const{t}=C(),[f,y]=r.useState(0),[u,b]=r.useState(0),[h,w]=r.useState(0),[i,j]=r.useState(""),[n,N]=r.useState(""),[o,R]=r.useState(""),S=(l,a)=>{l(a)},d=(l,a)=>{l(a.target.value)},_=()=>{alert(`
      ${t("guestsSendReviews.organizerRating")}: ${f}/5
      ${t("guestsSendReviews.organizerRemarks")}: ${i}
      ${t("guestsSendReviews.productRating")}: ${u}/5
      ${t("guestsSendReviews.productRemarks")}: ${n}
      ${t("guestsSendReviews.platformRating")}: ${h}/5
      ${t("guestsSendReviews.platformRemarks")}: ${o}
    `)},c=(l,a)=>[1,2,3,4,5].map(m=>e.jsx("div",{onClick:()=>S(a,m),children:l>=m?e.jsx(z,{className:"!relative !w-[25px] !h-[25px]",color:"#F59E0B"}):e.jsx(p,{className:"!relative !w-[25px] !h-[25px]",color:"#F59E0B"})},m));return e.jsx("div",{className:"flex flex-col w-[360px] items-start relative bg-primary-background",children:e.jsxs("div",{className:"flex flex-col w-[360px] items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]",children:[e.jsx("div",{className:"relative self-stretch mt-[-1.00px] font-heading-6 font-[number:var(--heading-6-font-weight)] text-primary-color text-[length:var(--heading-6-font-size)] tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] [font-style:var(--heading-6-font-style)]",children:t("guestsSendReviews.giveYourOpinion")}),e.jsx("p",{className:"relative self-stretch font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-primary-text-color text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] [font-style:var(--body-medium-regular-font-style)]",children:t("guestsSendReviews.thankYouForUsingService")}),e.jsx("img",{className:"relative self-stretch w-full h-px object-cover",alt:t("guestsSendReviews.line"),src:s}),e.jsxs("div",{className:"flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]",children:[e.jsxs("div",{className:"w-[247px] flex flex-col items-start relative flex-[0_0_auto]",children:[e.jsx("div",{className:"relative self-stretch mt-[-1.00px] font-body-large-medium font-[number:var(--body-large-medium-font-weight)] text-primary-color text-[length:var(--body-large-medium-font-size)] tracking-[var(--body-large-medium-letter-spacing)] leading-[var(--body-large-medium-line-height)] [font-style:var(--body-large-medium-font-style)]",children:t("guestsSendReviews.rateOrganizer")}),e.jsx("p",{className:"relative self-stretch font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)]",children:t("guestsSendReviews.wasOrganizerTask")})]}),e.jsx("div",{className:"inline-flex items-center gap-[8.33px] relative flex-[0_0_auto]",children:e.jsx("div",{className:"inline-flex items-start gap-[6.25px] relative flex-[0_0_auto]",children:c(f,y)})}),e.jsx("div",{className:"flex flex-col h-[120px] items-start relative self-stretch w-full",children:e.jsx("textarea",{className:"flex-1 grow flex items-start gap-2.5 p-5 relative self-stretch w-full bg-whitewhite rounded-md border border-solid border-stroke focus:outline-none focus:ring-2 focus:ring-[#2a4e4a] placeholder:text-[#637381] text-[#637381]",value:i,onChange:l=>d(j,l),maxLength:250,placeholder:t("guestsSendReviews.remarks")})}),e.jsx("div",{className:"flex items-end justify-end gap-[5px] relative self-stretch w-full flex-[0_0_auto]",children:e.jsx("div",{className:"relative w-[42px] h-[22px] mr-[-2.00px]",children:e.jsxs("div",{className:"absolute top-0 left-0 font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] text-right tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]",children:[i.length,"/250"]})})})]}),e.jsx("img",{className:"relative self-stretch w-full h-px object-cover",alt:t("guestsSendReviews.line"),src:s}),e.jsxs("div",{className:"flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]",children:[e.jsxs("div",{className:"self-stretch w-full flex flex-col items-start relative flex-[0_0_auto]",children:[e.jsx("div",{className:"relative self-stretch mt-[-1.00px] font-body-large-medium font-[number:var(--body-large-medium-font-weight)] text-primary-color text-[length:var(--body-large-medium-font-size)] tracking-[var(--body-large-medium-letter-spacing)] leading-[var(--body-large-medium-line-height)] [font-style:var(--body-large-medium-font-style)]",children:t("guestsSendReviews.rateProducts")}),e.jsx("p",{className:"relative self-stretch font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)]",children:t("guestsSendReviews.didProductsMeetExpectations")})]}),e.jsx("div",{className:"inline-flex items-center gap-[8.33px] relative flex-[0_0_auto]",children:e.jsx("div",{className:"inline-flex items-start gap-[6.25px] relative flex-[0_0_auto]",children:c(u,b)})}),e.jsx("div",{className:"flex flex-col h-[120px] items-start relative self-stretch w-full",children:e.jsx("textarea",{className:"flex-1 grow flex items-start gap-2.5 p-5 relative self-stretch w-full bg-whitewhite rounded-md border border-solid border-stroke focus:outline-none focus:ring-2 focus:ring-[#2a4e4a] placeholder:text-[#637381] text-[#637381]",value:n,onChange:l=>d(N,l),maxLength:250,placeholder:t("guestsSendReviews.remarks")})}),e.jsx("div",{className:"flex items-end justify-end gap-[5px] relative self-stretch w-full flex-[0_0_auto]",children:e.jsx("div",{className:"relative w-[42px] h-[22px] mr-[-2.00px]",children:e.jsxs("div",{className:"absolute top-0 left-0 font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] text-right tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]",children:[n.length,"/250"]})})})]}),e.jsx("img",{className:"relative self-stretch w-full h-px object-cover",alt:t("guestsSendReviews.line"),src:s}),e.jsxs("div",{className:"flex flex-col items-start gap-2.5 relative self-stretch w-full flex-[0_0_auto]",children:[e.jsxs("div",{className:"self-stretch w-full flex flex-col items-start relative flex-[0_0_auto]",children:[e.jsx("p",{className:"relative self-stretch mt-[-1.00px] font-body-large-medium font-[number:var(--body-large-medium-font-weight)] text-primary-color text-[length:var(--body-large-medium-font-size)] tracking-[var(--body-large-medium-letter-spacing)] leading-[var(--body-large-medium-line-height)] [font-style:var(--body-large-medium-font-style)]",children:t("guestsSendReviews.ratePlatform")}),e.jsx("p",{className:"relative self-stretch font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] [font-style:var(--body-small-regular-font-style)]",children:t("guestsSendReviews.didYouEnjoySite")})]}),e.jsx("div",{className:"inline-flex items-center gap-[8.33px] relative flex-[0_0_auto]",children:e.jsx("div",{className:"inline-flex items-start gap-[6.25px] relative flex-[0_0_auto]",children:c(h,w)})}),e.jsx("div",{className:"flex flex-col h-[120px] items-start relative self-stretch w-full",children:e.jsx("textarea",{className:"h-[120px] flex items-start gap-2.5 p-5 relative self-stretch w-full bg-whitewhite rounded-md border border-solid border-stroke focus:outline-none focus:ring-2 focus:ring-[#2a4e4a] placeholder:text-[#637381] text-[#637381]",value:o,onChange:l=>d(R,l),maxLength:250,placeholder:t("guestsSendReviews.remarks")})}),e.jsx("div",{className:"flex items-end justify-end gap-[5px] relative self-stretch w-full flex-[0_0_auto]",children:e.jsx("div",{className:"relative w-[42px] h-[22px] mr-[-2.00px]",children:e.jsxs("div",{className:"absolute top-0 left-0 font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] text-right tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]",children:[o.length,"/250"]})})})]}),e.jsx("img",{className:"relative self-stretch w-full h-px object-cover",alt:t("guestsSendReviews.line"),src:s}),e.jsxs("div",{className:"flex items-center justify-center gap-2.5 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-primary-color rounded-md focus:outline-none focus:ring-2 focus:ring-[#2a4e4a]",onClick:_,children:[e.jsx("button",{className:"all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-whitewhite text-base text-center tracking-[0] leading-6 whitespace-nowrap",children:t("guestsSendReviews.sendMyReview")}),e.jsx(L,{className:"!relative !w-5 !h-5",color:"white"})]})]})})},H=()=>e.jsx(E,{HEADERHeaderOpenClassName:"![border-right-style:none] ![border-top-style:none] ![border-left-style:none]",HEADERIcon:e.jsx(v,{className:"!relative !w-6 !h-6",color:"#1B4F4A"})});export{H as default};
