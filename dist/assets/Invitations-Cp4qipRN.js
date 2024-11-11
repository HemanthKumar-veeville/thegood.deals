import{j as e,u as k,a as I,c as L,d as f,r as H,ab as o,ac as x,C as S,ad as B,L as p,W as h,ae as v}from"./index-CWaymDon.js";import{S as g}from"./SizeXlCorner-CfHOHYXP.js";import{B as P}from"./Box43-BK3YMUOt.js";import{C as R,S as D}from"./CheckmarkCircle-CH6pf9sc.js";import{S as u}from"./SuccessAlert-DRw8Z4Zj.js";import"./CheckmarkCircle1-CTQJCTIh.js";const A=({className:r})=>e.jsxs("svg",{className:`${r}`,fill:"none",height:"20",viewBox:"0 0 20 20",width:"20",xmlns:"http://www.w3.org/2000/svg",children:[e.jsxs("g",{clipPath:"url(#clip0_535_10030)",children:[e.jsx("path",{d:"M10 0.5625C4.78125 0.5625 0.5625 4.78125 0.5625 10C0.5625 15.2188 4.78125 19.4688 10 19.4688C15.2188 19.4688 19.4688 15.2188 19.4688 10C19.4688 4.78125 15.2188 0.5625 10 0.5625ZM10 18.0625C5.5625 18.0625 1.96875 14.4375 1.96875 10C1.96875 5.5625 5.5625 1.96875 10 1.96875C14.4375 1.96875 18.0625 5.59375 18.0625 10.0312C18.0625 14.4375 14.4375 18.0625 10 18.0625Z",fill:"white"}),e.jsx("path",{d:"M12.875 7.09375C12.5938 6.8125 12.1563 6.8125 11.875 7.09375L10 9L8.09375 7.09375C7.8125 6.8125 7.375 6.8125 7.09375 7.09375C6.8125 7.375 6.8125 7.8125 7.09375 8.09375L9 10L7.09375 11.9062C6.8125 12.1875 6.8125 12.625 7.09375 12.9062C7.21875 13.0312 7.40625 13.125 7.59375 13.125C7.78125 13.125 7.96875 13.0625 8.09375 12.9062L10 11L11.9062 12.9062C12.0312 13.0312 12.2188 13.125 12.4063 13.125C12.5938 13.125 12.7812 13.0625 12.9062 12.9062C13.1875 12.625 13.1875 12.1875 12.9062 11.9062L11 10L12.9062 8.09375C13.1562 7.8125 13.1563 7.375 12.875 7.09375Z",fill:"white"})]}),e.jsx("defs",{children:e.jsx("clipPath",{id:"clip0_535_10030",children:e.jsx("rect",{fill:"white",height:"20",width:"20"})})})]}),F=()=>{const r=k(),{t:i}=I(),s=L(),{requests:l,requestStatus:w}=f(t=>t.requests),{participants:n,participantStatus:_}=f(t=>t.participants),d=new URLSearchParams(location.search),a=d.get("deal_id"),m=d.get("is_creator");H.useEffect(()=>{window.scrollTo(0,0),s(o(a)),s(x(a))},[s,a]);const j=async t=>{console.log({deal_id:a}),await s(v({dealId:a,requestId:t,inviteStatus:"accept"})),await s(o(a)),await s(x(a))},y=async t=>{await s(v({dealId:a,requestId:t,inviteStatus:"refuse"})),await s(o(a)),await s(x(a))},N=()=>{r("/admin-active-deal?deal_id="+a+"&is_creator="+m)},C=()=>{r(`/invite-loved-ones?deal_id=${a}&is_creator=`+m)};return w==="loading"||_==="loading"?e.jsx(S,{}):e.jsx("div",{className:"flex flex-col w-full items-start relative bg-primary-background mx-auto h-screen",children:e.jsxs("div",{className:"flex flex-col w-full items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]",children:[e.jsx("div",{className:"flex items-center gap-3 pt-0 pb-5 px-0 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-stroke cursor-pointer",onClick:N,children:e.jsxs("div",{className:"inline-flex items-center gap-2 relative flex-[0_0_auto]",children:[e.jsx(B,{className:"!relative !w-[18px] !h-[18px]",color:"#637381"}),e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-text-color text-base tracking-[0] leading-6 whitespace-nowrap",children:i("invitations.back_to_deal")})]})}),e.jsx("div",{className:"relative self-stretch [font-family:'Inter',Helvetica] font-semibold text-primary-color text-2xl tracking-[0] leading-[30px]",children:i("invitations.managing_loved_ones")}),(l==null?void 0:l.length)>0&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex flex-col items-start gap-2.5 self-stretch w-full relative flex-[0_0_auto]",children:e.jsx("div",{className:"relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-orangeorange text-lg tracking-[0] leading-[26px]",children:i("invitations.new_requests")})}),l==null?void 0:l.map((t,b)=>e.jsxs("div",{children:[e.jsxs("div",{className:"inline-flex items-center gap-[15px] relative flex-[0_0_auto]",children:[e.jsx(g,{className:"!h-[50px] !w-[50px]",divClassName:"!tracking-[0] !text-lg ![font-style:unset] !font-semibold ![font-family:'Inter',Helvetica] !left-2 !leading-10 !top-1",text:t.participant_name.split(" ").map(c=>c[0]).join(".")}),e.jsxs("div",{className:"inline-flex flex-col items-start gap-[5px] relative flex-[0_0_auto]",children:[e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap",children:t.participant_name}),!t.accepted&&!t.refused&&e.jsxs("div",{className:"inline-flex items-start gap-[5px] relative flex-[0_0_auto] mb-5",children:[e.jsxs("div",{className:"inline-flex items-center gap-2.5 px-2.5 py-[5px] relative flex-[0_0_auto] bg-primary-color rounded-[5px] cursor-pointer",onClick:()=>j(t.request_id),children:[e.jsx(R,{className:"!relative !w-5 !h-5"}),e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-whitewhite text-sm tracking-[0] leading-[22px] whitespace-nowrap",children:i("invitations.accept_button")})]}),e.jsxs("div",{className:"inline-flex items-center gap-2.5 px-2.5 py-[5px] bg-redred rounded-[5px] relative flex-[0_0_auto] cursor-pointer",onClick:()=>y(t.request_id),children:[e.jsx(A,{className:"!relative !w-5 !h-5"}),e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-whitewhite text-sm tracking-[0] leading-[22px] whitespace-nowrap",children:i("invitations.refuse_button")})]})]})]})]}),e.jsx(p,{})]},t.participant_id))]}),(l==null?void 0:l.length)===0&&e.jsx("div",{className:"w-full",children:e.jsx(u,{className:"!flex !bg-cyancyan-light-3 w-[100%]",divClassName:"!tracking-[0] !text-sm !flex-1 ![white-space:unset] ![font-style:unset] !font-medium ![font-family:'Inter',Helvetica] !leading-5 !w-[unset]",frameClassName:"!flex-1 !flex !grow",groupClassName:"!bg-cyancyan",icon:e.jsx(h,{className:"!absolute !w-3 !h-3 !top-1 !left-1",color:"white"}),style:"three",text:"No new requests"})}),e.jsxs("div",{className:"flex items-center justify-center gap-2 px-6 py-3 relative self-stretch w-full flex-[0_0_auto] bg-whitewhite rounded-md shadow-shadow-1 cursor-pointer",onClick:C,children:[e.jsx(D,{className:"!relative !w-5 !h-5"}),e.jsx("button",{className:"all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base text-center tracking-[0] leading-6 whitespace-nowrap",children:i("invitations.invite_loved_ones")})]}),e.jsx(p,{}),e.jsxs("div",{className:"flex flex-col items-start gap-[15px] self-stretch w-full relative flex-[0_0_auto]",children:[e.jsx("div",{className:"relative self-stretch mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-lg tracking-[0] leading-[26px]",children:i("invitations.list_of_relatives")}),e.jsxs("div",{className:"inline-flex flex-col items-start gap-[15px] relative flex-[0_0_auto]",children:[n==null?void 0:n.map((t,b)=>e.jsxs("div",{className:"flex items-center gap-[15px] self-stretch w-full relative flex-[0_0_auto]",children:[e.jsx(g,{className:"!h-[50px] !w-[50px]",divClassName:"!tracking-[0] !text-lg ![font-style:unset] !font-semibold ![font-family:'Inter',Helvetica] !left-[9px] !leading-10 !top-1",text:t.participant_name.split(" ").map(c=>c[0]).join(".")}),e.jsxs("div",{className:"inline-flex flex-col items-start gap-[5px] relative flex-[0_0_auto]",children:[e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap",children:t.participant_name}),e.jsxs("div",{className:"inline-flex items-center gap-2.5 relative flex-[0_0_auto]",children:[e.jsx(P,{className:"!relative !w-5 !h-5"}),e.jsxs("p",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-normal text-primary-text-color text-sm tracking-[0] leading-[22px] whitespace-nowrap",children:[t.orders_count," ",t.orders_count>1?i("invitations.order_on_deal_plural"):i("invitations.order_on_deal_singular")]})]})]})]},t.participant_id)),(n==null?void 0:n.length)===0&&e.jsx("div",{className:"w-full",children:e.jsx(u,{className:"!flex !bg-cyancyan-light-3 w-[100%]",divClassName:"!tracking-[0] !text-sm !flex-1 ![white-space:unset] ![font-style:unset] !font-medium ![font-family:'Inter',Helvetica] !leading-5 !w-[unset]",frameClassName:"!flex-1 !flex !grow",groupClassName:"!bg-cyancyan",icon:e.jsx(h,{className:"!absolute !w-3 !h-3 !top-1 !left-1",color:"white"}),style:"three",text:"You have not invited your friends yet"})})]})]})]})})};export{F as default};
