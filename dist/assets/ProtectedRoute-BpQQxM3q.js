import{g as a,c as m,r as n,j as o,a0 as u,e as p,J as h}from"./index-o976eV8b.js";import x from"./CustomLoader-Chyr_suO.js";function j({element:f}){var r,c;const g=a(e=>e.user.isUserLoggedIn),i=a(e=>e.user.isUserActivated),t=a(e=>e.account.profile),s=m(),[l,d]=n.useState(!0);return n.useEffect(()=>{(async()=>{await s(p()),await s(h()),d(!1)})()},[s]),console.log({isUserActivated:i,email:(r=t==null?void 0:t.data)==null?void 0:r.email}),l?o.jsx(x,{}):i?g?f:o.jsx(u,{to:"/auth?login"}):o.jsx(u,{to:`/verify?email=${(c=t==null?void 0:t.data)==null?void 0:c.email}`})}export{j as default};
