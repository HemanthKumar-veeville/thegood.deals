import{P as V,j as e,u as z,c as M,g as B,r as i,K as u,M as I,y as Z,B as D}from"./index--2_inFgc.js";import{E as R}from"./EyeAlt4-DHwKJVFy.js";import{P as w}from"./Pencil-CRIRE-za.js";import{C as T}from"./ChevronDown-BYtYyUeQ.js";import{U as Y}from"./UserAlt-Cdm5IaOm.js";const v=({color:d="white",className:n})=>e.jsxs("svg",{className:`${n}`,fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("g",{clipPath:"url(#clip0_310_4999)",children:e.jsx("path",{d:"M23.3251 4.46248C23.3251 4.16248 23.2126 3.86248 22.9876 3.63748C22.5375 3.18748 22.0876 2.73748 21.6751 2.28748C21.2626 1.87498 20.8876 1.46248 20.475 1.08748C20.2875 0.86248 20.0626 0.71248 19.7626 0.67498C19.4251 0.63748 19.125 0.71248 18.8626 0.93748L16.3126 3.48748H3.03755C1.76255 3.48748 0.675049 4.53748 0.675049 5.84998V21C0.675049 22.275 1.72505 23.3625 3.03755 23.3625H18.225C19.5 23.3625 20.5876 22.3125 20.5876 21V7.68748L23.0251 5.24998C23.2126 5.02498 23.3251 4.76248 23.3251 4.46248ZM12.3 13.5C12.2625 13.5375 12.2625 13.5375 12.225 13.5375L9.52505 14.4375L10.425 11.7375C10.425 11.7 10.4626 11.7 10.4626 11.6625L17.2126 4.91248L19.0876 6.74998L12.3 13.5ZM18.8626 21C18.8626 21.375 18.5625 21.675 18.1875 21.675H3.03755C2.66255 21.675 2.36255 21.375 2.36255 21V5.81248C2.36255 5.43748 2.66255 5.13748 3.03755 5.13748H14.5876L9.26255 10.5C9.07505 10.6875 8.88755 10.95 8.81255 11.25L7.42505 15.45C7.31255 15.75 7.38755 16.0125 7.53755 16.275C7.65005 16.425 7.87505 16.65 8.28755 16.65H8.43755L12.7501 15.225C13.0126 15.15 13.2751 14.9625 13.4626 14.775L18.8626 9.37498V21ZM20.2501 5.58748L18.375 3.74998L19.5375 2.58748C19.8375 2.88748 21.0751 4.12498 21.3751 4.46248L20.2501 5.58748Z",fill:d})}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_310_4999",children:e.jsx("rect",{fill:"white",height:"24",width:"24"})})})]});v.propTypes={color:V.string};const O=()=>{const d=z(),n=M(),{profile:o}=B(t=>t.account),[b,y]=i.useState(null),j={firstName:"",lastName:"",phone:"",email:"",currentPassword:"*******************",newPassword:"*******************",language:"English",address:"",additionalAddress:"",city:"",postalCode:"",country:"",profilepicture:""},[s,c]=i.useState(j),[N,x]=i.useState(null),[h,C]=i.useState({current:!1,new:!1});i.useEffect(()=>{n(u())},[n]),i.useEffect(()=>{if(o!=null&&o.data){const{first_name:t,last_name:a,phone:l,email:r,address:L,addl_address:A,city:E,postal_code:F,country:H,profile_picture:S,language:U}=o.data;c({firstName:t||"",lastName:a||"",phone:l||"",email:r||"",currentPassword:"*******************",newPassword:"*******************",language:U||"French",address:L||"",additionalAddress:A||"",city:E||"",postalCode:F||"",country:H||"",profilepicture:S||""})}},[o]);const k=i.useCallback(()=>{d("/settings")},[d]),m=t=>x(t),p=t=>{const{name:a,value:l}=t.target;c(r=>({...r,[a]:l}))},P=i.useCallback(()=>{x(null),n(I({...s,profilepicture:b})),n(u())},[n,s]),_=t=>{const a=t.target.files[0];if(a){y(a);const l=new FileReader;l.onloadend=()=>{c(r=>({...r,profilepicture:l.result}))},l.readAsDataURL(a)}},g=t=>{C(a=>({...a,[t]:!a[t]}))},f=(t,a,l="text",r="")=>N===t?e.jsx("input",{name:t,type:l,value:a||"",onChange:p,autoFocus:!0,placeholder:r,className:"relative w-full mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-darkdark-5 text-base tracking-[0] leading-6 focus:outline-none"}):e.jsx("div",{className:"relative w-full mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-darkdark-5 text-base tracking-[0] leading-6 whitespace-nowrap",onClick:()=>m(t),children:a||""});return e.jsx("div",{className:"flex flex-col w-[360px] items-start relative bg-primary-background",children:e.jsxs("div",{className:"flex flex-col w-[360px] items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]",children:[e.jsxs("div",{className:"flex w-[290px] items-center gap-3 pt-0 pb-5 px-0 relative flex-[0_0_auto] border-b [border-bottom-style:solid] border-stroke cursor-pointer",onClick:k,children:[e.jsx(Z,{className:"!relative !w-[18px] !h-[18px]",color:"#637381"}),e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#637381] text-base tracking-[0] leading-6 whitespace-nowrap",children:"Back"})]}),e.jsx("div",{className:"relative w-fit font-heading-6 font-[number:var(--heading-6-font-weight)] text-[#1b4f4a] text-[length:var(--heading-6-font-size)] text-center tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] whitespace-nowrap [font-style:var(--heading-6-font-style)]",children:"My account ✏️"}),e.jsxs("div",{className:"flex items-center justify-start relative self-stretch w-full flex-[0_0_auto]  gap-[15px]",children:[e.jsx("div",{className:"inline-flex items-center gap-[15px] relative flex-[0_0_auto]",children:(s==null?void 0:s.profilepicture)===""?e.jsx(Y,{}):e.jsx("img",{className:"relative w-[50px] h-[50px] object-cover rounded-lg",alt:"Profile",src:s.profilepicture})}),e.jsxs("div",{className:"inline-flex items-center justify-center gap-1.5 px-3 py-[5px] relative flex-[0_0_auto] bg-[#1b4f4a] rounded-[5px]",children:[e.jsx(v,{className:"!relative !w-3.5 !h-3.5",color:"white"}),e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-white text-sm tracking-[0] leading-[22px] whitespace-nowrap",children:"Change profile picture"}),e.jsx("input",{type:"file",accept:"image/*",onChange:_,className:"absolute inset-0 opacity-0 cursor-pointer"})]})]}),e.jsx("div",{className:"relative w-fit font-body-large-medium font-[number:var(--body-large-medium-font-weight)] text-[#1b4f4a] text-[length:var(--body-large-medium-font-size)] text-center tracking-[var(--body-large-medium-letter-spacing)] leading-[var(--body-large-medium-line-height)] whitespace-nowrap [font-style:var(--body-large-medium-font-style)]",children:"Your information"}),[{name:"firstName",label:"First Name"},{name:"lastName",label:"Last Name"},{name:"phone",label:"Phone"},{name:"email",label:"Email"}].map(({name:t,label:a})=>e.jsx("div",{className:"flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full cursor-pointer",onClick:()=>m(t),children:e.jsx("div",{className:"flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow",children:e.jsx("div",{className:"flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-stroke",children:e.jsxs("div",{className:"flex items-center justify-between relative flex-1 grow",children:[f(t,s[t],"text",a),e.jsx(w,{className:"!relative !w-4 !h-4"})]})})})},t)),e.jsx("div",{className:"flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full",children:e.jsxs("div",{className:"relative w-full",children:[e.jsxs("select",{name:"language",value:s.language,onChange:p,className:"w-full pl-5 pr-10 py-3 bg-white rounded-md border border-solid border-stroke text-darkdark-5 text-base font-normal focus:outline-none appearance-none",children:[e.jsx("option",{value:"French",children:"French"}),e.jsx("option",{value:"English",children:"English"})]}),e.jsx("div",{className:"absolute inset-y-0 right-4 flex items-center pointer-events-none",children:e.jsx(T,{className:"!relative !w-4 !h-4"})})]})}),e.jsx("div",{className:"relative w-fit font-body-large-medium font-[number:var(--body-large-medium-font-weight)] text-[#1b4f4a] text-[length:var(--body-large-medium-font-size)] text-center tracking-[var(--body-large-medium-letter-spacing)] leading-[var(--body-large-medium-line-height)] whitespace-nowrap [font-style:var(--body-large-medium-font-style)]",children:"change my password"}),[{name:"currentPassword",label:"Current Password",showPassword:h.current,toggleVisibility:()=>g("current")},{name:"newPassword",label:"New Password",showPassword:h.new,toggleVisibility:()=>g("new")}].map(({name:t,label:a,showPassword:l,toggleVisibility:r})=>e.jsx("div",{className:"flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full",children:e.jsx("div",{className:"flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow",children:e.jsx("div",{className:"flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-stroke",children:e.jsxs("div",{className:"flex items-center justify-between relative flex-1 grow",children:[f(t,s[t],l?"text":"password",a),e.jsx("div",{onClick:r,children:e.jsx(R,{className:"!relative !w-4 !h-4 cursor-pointer"})})]})})})},t)),e.jsx("div",{className:"flex flex-wrap text-[#637381] text-sm gap-x-4 gap-y-2 mt-2",children:["8 characters","1 capital letter","1 lower case","1 digit"].map((t,a)=>e.jsxs("div",{className:"relative w-fit mt-[-1.00px] font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] text-center tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]",children:[e.jsx("span",{className:"mr-1",children:"•"})," ",t]},a))}),e.jsx("div",{className:"relative w-fit font-body-large-medium font-[number:var(--body-large-medium-font-weight)] text-[#1b4f4a] text-[length:var(--body-large-medium-font-size)] text-center tracking-[var(--body-large-medium-letter-spacing)] leading-[var(--body-large-medium-line-height)] whitespace-nowrap [font-style:var(--body-large-medium-font-style)]",children:"Your address"}),[{name:"address",label:"Address",heading:"Address"},{name:"additionalAddress",label:"Additional Address",heading:"Additional Address"},{name:"city",label:"City",heading:"City"},{name:"postalCode",label:"Postal Code",heading:"Postal Code"},{name:"country",label:"Country",heading:"Country"}].map(({name:t,label:a,heading:l})=>e.jsx("div",{className:"flex flex-col h-20 items-start gap-[5px] relative self-stretch w-full cursor-pointer",children:e.jsxs("div",{className:"flex flex-col items-start gap-2.5 relative flex-1 self-stretch w-full grow",children:[e.jsx("div",{className:"flex w-[250px] items-start gap-2.5 relative flex-[0_0_auto]",children:e.jsxs("div",{className:"font-[number:var(--body-small-medium-font-weight)] relative w-fit mt-[-1.00px] font-body-small-medium text-[#1b4f4a] text-[length:var(--body-small-medium-font-size)] tracking-[var(--body-small-medium-letter-spacing)] leading-[var(--body-small-medium-line-height)] whitespace-nowrap [font-style:var(--body-small-medium-font-style)]",children:[l," (required)"]})}),e.jsx("div",{className:"flex flex-col h-12 items-start gap-[5px] relative self-stretch w-full",onClick:()=>m(t),children:e.jsx("div",{className:"flex items-center gap-2.5 pl-5 pr-4 py-3 relative flex-1 self-stretch w-full grow bg-white rounded-md border border-solid border-stroke",children:e.jsxs("div",{className:"flex items-center justify-between relative flex-1 grow",children:[f(t,s[t],"text",a),e.jsx(w,{className:"!relative !w-4 !h-4"})]})})})]})},t)),e.jsx("div",{onClick:P,className:"w-full",children:e.jsx(D,{buttonText:"Confirm changes",className:"!self-stretch !flex-[0_0_auto] !flex !w-full",color:"primary",kind:"primary",round:"semi-round",state:"default"})})]})})};export{O as default};
