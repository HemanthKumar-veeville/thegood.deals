import{g as a,c as m,r as n,j as o,C as h,ak as u,e as p,a0 as x}from"./index-B-1kzR92.js";function U({element:f}){var c,r;const g=a(e=>e.user.isUserLoggedIn),i=a(e=>e.user.isUserActivated),t=a(e=>e.account.profile),s=m(),[l,d]=n.useState(!0);return n.useEffect(()=>{(async()=>{await s(p()),await s(x()),d(!1)})()},[s]),console.log({isUserActivated:i,email:(c=t==null?void 0:t.data)==null?void 0:c.email}),l?o.jsx(h,{}):i?g?f:o.jsx(u,{to:"/auth?login"}):o.jsx(u,{to:`/verify?email=${(r=t==null?void 0:t.data)==null?void 0:r.email}`})}export{U as default};