import{d as a,c as m,r as n,j as o,C as h,aR as u,f as p,an as x}from"./index-BH2nyfgt.js";function U({element:f}){var c,r;const d=a(e=>e.user.isUserLoggedIn),i=a(e=>e.user.isUserActivated),t=a(e=>e.account.profile),s=m(),[l,g]=n.useState(!0);return n.useEffect(()=>{(async()=>{await s(p()),await s(x()),g(!1)})()},[s]),console.log({isUserActivated:i,email:(c=t==null?void 0:t.data)==null?void 0:c.email}),l?o.jsx(h,{}):i?d?f:o.jsx(u,{to:"/auth?login"}):o.jsx(u,{to:`/verify?email=${(r=t==null?void 0:t.data)==null?void 0:r.email}`})}export{U as default};
