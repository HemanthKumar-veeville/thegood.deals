import{j as e,u as b,a as k,c as L,g as d,r as I,w as o,x as H,y as S,z as m}from"./index-CUeh2-Zc.js";import{S as f}from"./SizeXlCorner-Bt79fLMu.js";import{B}from"./Box43-C9j1qFON.js";import{S as P}from"./Send2-CwwH-OAm.js";import{L as p}from"./line-63-BwS0eOFc.js";import M from"./CustomLoader-D6TgBUMw.js";import{S as h}from"./SuccessAlert-BlPd06K7.js";import{W as v}from"./Warning1-CexsLlQL.js";const Z=({className:n})=>e.jsxs("svg",{className:`${n}`,fill:"none",height:"20",viewBox:"0 0 20 20",width:"20",xmlns:"http://www.w3.org/2000/svg",children:[e.jsxs("g",{clipPath:"url(#clip0_1268_4155)",children:[e.jsx("path",{d:"M10 0.5625C4.78125 0.5625 0.5625 4.78125 0.5625 10C0.5625 15.2188 4.78125 19.4688 10 19.4688C15.2188 19.4688 19.4688 15.2188 19.4688 10C19.4688 4.78125 15.2188 0.5625 10 0.5625ZM10 18.0625C5.5625 18.0625 1.96875 14.4375 1.96875 10C1.96875 5.5625 5.5625 1.96875 10 1.96875C14.4375 1.96875 18.0625 5.59375 18.0625 10.0312C18.0625 14.4375 14.4375 18.0625 10 18.0625Z",fill:"white"}),e.jsx("path",{d:"M12.6877 7.09368L8.96892 10.7187L7.28142 9.06243C7.00017 8.78118 6.56267 8.81243 6.28142 9.06243C6.00017 9.34368 6.03142 9.78118 6.28142 10.0624L8.28142 11.9999C8.46892 12.1874 8.71892 12.2812 8.96892 12.2812C9.21892 12.2812 9.46892 12.1874 9.65642 11.9999L13.6877 8.12493C13.9689 7.84368 13.9689 7.40618 13.6877 7.12493C13.4064 6.84368 12.9689 6.84368 12.6877 7.09368Z",fill:"white"})]}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_1268_4155",children:e.jsx("rect",{fill:"white",height:"20",width:"20"})})})]}),R=({className:n})=>e.jsxs("svg",{className:`${n}`,fill:"none",height:"20",viewBox:"0 0 20 20",width:"20",xmlns:"http://www.w3.org/2000/svg",children:[e.jsxs("g",{clipPath:"url(#clip0_535_10030)",children:[e.jsx("path",{d:"M10 0.5625C4.78125 0.5625 0.5625 4.78125 0.5625 10C0.5625 15.2188 4.78125 19.4688 10 19.4688C15.2188 19.4688 19.4688 15.2188 19.4688 10C19.4688 4.78125 15.2188 0.5625 10 0.5625ZM10 18.0625C5.5625 18.0625 1.96875 14.4375 1.96875 10C1.96875 5.5625 5.5625 1.96875 10 1.96875C14.4375 1.96875 18.0625 5.59375 18.0625 10.0312C18.0625 14.4375 14.4375 18.0625 10 18.0625Z",fill:"white"}),e.jsx("path",{d:"M12.875 7.09375C12.5938 6.8125 12.1563 6.8125 11.875 7.09375L10 9L8.09375 7.09375C7.8125 6.8125 7.375 6.8125 7.09375 7.09375C6.8125 7.375 6.8125 7.8125 7.09375 8.09375L9 10L7.09375 11.9062C6.8125 12.1875 6.8125 12.625 7.09375 12.9062C7.21875 13.0312 7.40625 13.125 7.59375 13.125C7.78125 13.125 7.96875 13.0625 8.09375 12.9062L10 11L11.9062 12.9062C12.0312 13.0312 12.2188 13.125 12.4063 13.125C12.5938 13.125 12.7812 13.0625 12.9062 12.9062C13.1875 12.625 13.1875 12.1875 12.9062 11.9062L11 10L12.9062 8.09375C13.1562 7.8125 13.1563 7.375 12.875 7.09375Z",fill:"white"})]}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_535_10030",children:e.jsx("rect",{fill:"white",height:"20",width:"20"})})})]}),U=()=>{const n=b(),{t:a}=k(),s=L(),{requests:l,requestStatus:g}=d(t=>t.requests),{participants:r,participantStatus:w}=d(t=>t.participants),x=new URLSearchParams(location.search),i=x.get("deal_id"),u=x.get("is_creator");I.useEffect(()=>{window.scrollTo(0,0),s(o(i)),s(H(i))},[s,i]);const _=async t=>{console.log({deal_id:i}),await s(m({dealId:i,requestId:t,inviteStatus:"accept"})),await s(o(i))},j=async t=>{await s(m({dealId:i,requestId:t,inviteStatus:"refuse"})),await s(o(i))},N=()=>{n("/admin-active-deal?deal_id="+i+"&is_creator="+u)},y=()=>{n(`/invite-loved-ones?deal_id=${i}`)};return g==="loading"||w==="loading"?e.jsx(M,{}):e.jsx("div",{className:"flex flex-col w-full items-start relative bg-primary-background mx-auto h-screen",children:e.jsxs("div",{className:"flex flex-col w-full items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]",children:[e.jsx("div",{className:"flex items-center gap-3 pt-0 pb-5 px-0 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-stroke cursor-pointer",onClick:N,children:e.jsxs("div",{className:"inline-flex items-center gap-2 relative flex-[0_0_auto]",children:[e.jsx(S,{className:"!relative !w-[18px] !h-[18px]",color:"#637381"}),e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-text-color text-base tracking-[0] leading-6 whitespace-nowrap",children:a("invitations.back_to_deal")})]})}),e.jsx("div",{className:"relative self-stretch [font-family:'Inter',Helvetica] font-semibold text-primary-color text-2xl tracking-[0] leading-[30px]",children:a("invitations.managing_loved_ones")}),(l==null?void 0:l.length)>0&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col items-start gap-2.5 self-stretch w-full relative flex-[0_0_auto]",children:e.jsx("div",{className:"relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-orangeorange text-lg tracking-[0] leading-[26px]",children:a("invitations.new_requests")})}),l==null?void 0:l.map((t,C)=>e.jsxs("div",{children:[e.jsxs("div",{className:"inline-flex items-center gap-[15px] relative flex-[0_0_auto]",children:[e.jsx(f,{className:"!h-[50px] !w-[50px]",divClassName:"!tracking-[0] !text-lg ![font-style:unset] !font-semibold ![font-family:'Inter',Helvetica] !left-2 !leading-10 !top-1",text:t.participant_name.split(" ").map(c=>c[0]).join(".")}),e.jsxs("div",{className:"inline-flex flex-col items-start gap-[5px] relative flex-[0_0_auto]",children:[e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap",children:t.participant_name}),!t.accepted&&!t.refused&&e.jsxs("div",{className:"inline-flex items-start gap-[5px] relative flex-[0_0_auto] mb-5",children:[e.jsxs("div",{className:"inline-flex items-center gap-2.5 px-2.5 py-[5px] relative flex-[0_0_auto] bg-primary-color rounded-[5px] cursor-pointer",onClick:()=>_(t.request_id),children:[e.jsx(Z,{className:"!relative !w-5 !h-5"}),e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-whitewhite text-sm tracking-[0] leading-[22px] whitespace-nowrap",children:a("invitations.accept_button")})]}),e.jsxs("div",{className:"inline-flex items-center gap-2.5 px-2.5 py-[5px] bg-redred rounded-[5px] relative flex-[0_0_auto] cursor-pointer",onClick:()=>j(t.request_id),children:[e.jsx(R,{className:"!relative !w-5 !h-5"}),e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-whitewhite text-sm tracking-[0] leading-[22px] whitespace-nowrap",children:a("invitations.refuse_button")})]})]})]})]}),e.jsx("img",{className:"relative self-stretch w-full h-px object-cover",alt:a("invitations.line_alt"),src:p})]},t.participant_id))]}),(l==null?void 0:l.length)===0&&e.jsx("div",{className:"w-full",children:e.jsx(h,{className:"!flex !bg-cyancyan-light-3 w-[100%]",divClassName:"!tracking-[0] !text-sm !flex-1 ![white-space:unset] ![font-style:unset] !font-medium ![font-family:'Inter',Helvetica] !leading-5 !w-[unset]",frameClassName:"!flex-1 !flex !grow",groupClassName:"!bg-cyancyan",icon:e.jsx(v,{className:"!absolute !w-3 !h-3 !top-1 !left-1",color:"white"}),style:"three",text:"No new requests"})}),e.jsxs("div",{className:"flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-whitewhite rounded-md shadow-shadow-1 cursor-pointer",onClick:y,children:[e.jsx(P,{className:"!relative !w-5 !h-5"}),e.jsx("button",{className:"all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap",children:a("invitations.invite_loved_ones")})]}),e.jsx("img",{className:"relative self-stretch w-full h-px object-cover",alt:a("invitations.line_alt"),src:p}),e.jsxs("div",{className:"flex flex-col items-start gap-[15px] self-stretch w-full relative flex-[0_0_auto]",children:[e.jsx("div",{className:"relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-lg tracking-[0] leading-[26px]",children:a("invitations.list_of_relatives")}),e.jsxs("div",{className:"inline-flex flex-col items-start gap-[15px] relative flex-[0_0_auto]",children:[r==null?void 0:r.map((t,C)=>e.jsxs("div",{className:"flex items-center gap-[15px] self-stretch w-full relative flex-[0_0_auto]",children:[e.jsx(f,{className:"!h-[50px] !w-[50px]",divClassName:"!tracking-[0] !text-lg ![font-style:unset] !font-semibold ![font-family:'Inter',Helvetica] !left-[9px] !leading-10 !top-1",text:t.participant_name.split(" ").map(c=>c[0]).join(".")}),e.jsxs("div",{className:"inline-flex flex-col items-start gap-[5px] relative flex-[0_0_auto]",children:[e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap",children:t.participant_name}),e.jsxs("div",{className:"inline-flex items-center gap-2.5 relative flex-[0_0_auto]",children:[e.jsx(B,{className:"!relative !w-5 !h-5"}),e.jsxs("p",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap",children:[t.orders_count," ",t.orders_count>1?a("invitations.order_on_deal_plural"):a("invitations.order_on_deal_singular")]})]})]})]},t.participant_id)),(r==null?void 0:r.length)===0&&e.jsx("div",{className:"w-full",children:e.jsx(h,{className:"!flex !bg-cyancyan-light-3 w-[100%]",divClassName:"!tracking-[0] !text-sm !flex-1 ![white-space:unset] ![font-style:unset] !font-medium ![font-family:'Inter',Helvetica] !leading-5 !w-[unset]",frameClassName:"!flex-1 !flex !grow",groupClassName:"!bg-cyancyan",icon:e.jsx(v,{className:"!absolute !w-3 !h-3 !top-1 !left-1",color:"white"}),style:"three",text:"You have not invited your friends yet"})})]})]})]})})};export{U as default};
