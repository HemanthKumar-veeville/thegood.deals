import{r,j as t}from"./index-BwS0_n53.js";const g=({pictures:a})=>{const[o,n]=r.useState(0),[s,c]=r.useState(!1),f=e=>{e&&(e.preventDefault(),e.stopPropagation()),n(l=>l===0?a.length-1:l-1)},i=e=>{e&&(e.preventDefault(),e.stopPropagation()),n(l=>l===a.length-1?0:l+1)},u=(e,l)=>{l.preventDefault(),l.stopPropagation(),n(e)},d=e=>{e.preventDefault(),e.stopPropagation(),c(!s)};return r.useEffect(()=>{if(s){const e=setInterval(i,2e3);return()=>clearInterval(e)}},[s,o]),t.jsx("div",{className:`flex flex-col ${(a==null?void 0:a.length)>1,"h-[215px]"} items-start gap-2.5 relative self-stretch w-full`,children:t.jsx("div",{className:"flex flex-col items-center relative flex-1 self-stretch w-full grow h-full",children:a.length>0&&t.jsxs("div",{className:"relative w-full max-w-2xl mx-auto overflow-hidden rounded-t-md shadow-lg h-full",children:[t.jsx("div",{className:"flex transition-transform duration-500 ease-in-out",style:{transform:`translateX(-${o*100}%)`},children:a.map((e,l)=>t.jsx("div",{className:"w-full flex-shrink-0 relative h-full",children:t.jsx("img",{src:e,alt:`picture-${l}`,className:`object-contain w-full h-auto rounded-md ${l===0?"border-4 border-yellow-500":""}`})},l))}),(a==null?void 0:a.length)>1&&t.jsxs("div",{className:"absolute bottom-0 left-0 right-0 flex justify-between items-center px-4 py-2 bg-black bg-opacity-50",children:[t.jsx("button",{onClick:f,className:"p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 focus:outline-none",children:"❮"}),t.jsxs("div",{className:"flex space-x-2 items-center",children:[t.jsx("button",{onClick:d,className:"w-8 h-8 bg-white rounded-full focus:outline-none flex items-center justify-center",children:s?"❚❚":"▶"}),a.map((e,l)=>t.jsx("button",{onClick:h=>u(l,h),className:`w-2 h-2 rounded-full ${l===o?"bg-white":"bg-gray-400"} focus:outline-none`},l))]}),t.jsx("button",{onClick:i,className:"p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-75 focus:outline-none",children:"❯"})]})]})})})};export{g as I};
