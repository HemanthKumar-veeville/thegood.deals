import{P as i,j as r}from"./index--xWzEY9_.js";const m=({text:l="Primary",color:e,state:n,round:d,className:u,divClassName:y,text1:g="Warning",text2:t="Success",text3:x="Info",imageSrc:a})=>r.jsx("div",{className:`inline-flex items-center gap-px px-2.5 py-[3px] justify-center relative ${n==="outline"?"border border-solid":""} ${e==="secondary"&&n==="outline"?"border-secondary-color":e==="dark"&&n==="outline"?"border-darkdark":e==="primary"&&n==="outline"?"border-primary-color":e==="warning"&&n==="outline"?"border-yellowyellow-dark":e==="danger"&&n==="outline"?"border-redred":e==="success"&&n==="outline"?"border-greengreen":e==="info"&&n==="outline"?"border-cyancyan":e==="gray"&&n==="outline"?"border-primary-text-color":e==="light"&&n==="outline"?"border-graygray-3":""} ${d==="full-round"?"rounded-[30px]":"rounded"} ${n==="fill"&&e==="secondary"?"bg-secondary-color":e==="secondary"&&n==="duo-tone"?"bg-[#13c2961a]":e==="dark"&&n==="fill"?"bg-darkdark":e==="dark"&&n==="duo-tone"?"bg-[#212b361a]":n==="fill"&&e==="primary"?"bg-primary-color":e==="primary"&&n==="duo-tone"?"bg-[#4261ff1a]":n==="fill"&&e==="warning"?"bg-yellowyellow-dark":e==="warning"&&n==="duo-tone"?"bg-yellowyellow-light-4":e==="danger"&&n==="fill"?"bg-redred":e==="danger"&&n==="duo-tone"?"bg-redred-light-5":n==="fill"&&e==="success"?"bg-greengreen":e==="success"&&n==="duo-tone"?"bg-greengreen-light-6":n==="fill"&&e==="info"?"bg-cyancyan":e==="info"&&n==="duo-tone"?"bg-cyancyan-light-3":e==="gray"&&n==="fill"?"bg-primary-text-color":e==="gray"&&n==="duo-tone"?"bg-[#6373811a]":n==="fill"&&e==="light"?"bg-graygray-3":e==="light"&&n==="duo-tone"?"bg-[#e5e7eb80]":""} ${u}`,children:a?r.jsx("img",{src:a,alt:"Badge",className:"w-4 h-4"}):r.jsxs("div",{className:`font-body-extra-small-medium w-fit mt-[-1.00px] tracking-[var(--body-extra-small-medium-letter-spacing)] text-[length:var(--body-extra-small-medium-font-size)] [font-style:var(--body-extra-small-medium-font-style)] font-[number:var(--body-extra-small-medium-font-weight)] leading-[var(--body-extra-small-medium-line-height)] whitespace-nowrap relative ${e==="secondary"&&["duo-tone","outline"].includes(n)?"text-secondary-color":e==="dark"&&n==="duo-tone"||e==="dark"&&n==="outline"||e==="light"&&n==="fill"||e==="light"&&n==="outline"?"text-darkdark":e==="primary"&&["duo-tone","outline"].includes(n)?"text-primary-color":e==="warning"&&(d==="full-round"||n==="duo-tone")&&["outline","duo-tone"].includes(n)?"text-yellowyellow-dark-2":e==="danger"&&n==="duo-tone"?"text-redred-dark":e==="success"&&n==="duo-tone"?"text-greengreen-dark":e==="info"&&n==="duo-tone"?"text-cyancyan-dark":e==="gray"&&n==="duo-tone"?"text-[#637381]":e==="light"&&n==="duo-tone"?"text-darkdark-3":d==="semi-round"&&e==="warning"&&n==="outline"?"text-yellowyellow-dark":e==="danger"&&n==="outline"?"text-redred":e==="success"&&n==="outline"?"text-greengreen":e==="info"&&n==="outline"?"text-cyancyan":e==="gray"&&n==="outline"?"text-primary-text-color":"text-whitewhite"} ${y}`,children:[["primary","secondary"].includes(e)&&r.jsx(r.Fragment,{children:"Primary"}),e==="dark"&&r.jsx(r.Fragment,{children:l}),e==="warning"&&r.jsx(r.Fragment,{children:g}),e==="danger"&&r.jsx(r.Fragment,{children:"Danger"}),e==="success"&&r.jsx(r.Fragment,{children:t}),e==="info"&&r.jsx(r.Fragment,{children:g}),e==="gray"&&r.jsx(r.Fragment,{children:"Gray"}),e==="light"&&r.jsx(r.Fragment,{children:"Light"})]})});m.propTypes={text:i.string,color:i.oneOf(["warning","danger","info","gray","success","secondary","primary","light","dark"]),state:i.oneOf(["fill","duo-tone","outline"]),round:i.oneOf(["full-round","semi-round"]),text1:i.string,text2:i.string,text3:i.string,imageSrc:i.string};export{m as B};
