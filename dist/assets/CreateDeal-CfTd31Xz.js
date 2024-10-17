import{a as K,r as i,d as E,u as Y,c as Q,t as V,v as W,j as e,C as X,S as Z,A as ee,w as te,T as ae,x as j,L as d,y as le,M as L,z as T,D as ne,E as se,G as oe,I as ie,J as ce,K as re,N as de,O as pe}from"./index-DaM7KCW_.js";const ue=()=>{const{t:a}=K(),[H,y]=i.useState(!1),[F,A]=i.useState(""),M=E(n=>n.deals.dealForm),P=E(n=>n.deals.title),[$,B]=i.useState(null),N=n=>{const t=n.getFullYear(),s=String(n.getMonth()+1).padStart(2,"0"),x=String(n.getDate()).padStart(2,"0"),c=String(n.getHours()).padStart(2,"0"),r=String(n.getMinutes()).padStart(2,"0");return`${t}-${s}-${x}T${c}:${r}`},[l,p]=i.useState(M),[C,u]=i.useState(!1),[h,w]=i.useState([]),[g,v]=i.useState(!0),[m,D]=i.useState(P),I=Y(),_=Q(),b=new URLSearchParams(location.search).get("deal_id"),[xe,O]=i.useState(new FormData),R=n=>{w([...h,n])},f=(n,t)=>{n==="acceptConditions"?p(s=>({...s,acceptConditions:!l.acceptConditions})):(console.log(a("create_deal.console_input_change"),t.target.value),p(s=>({...s,[n]:t.target.value})))},U=n=>{p(t=>({...t,pictures:n}))},q=(n,t)=>{p(s=>({...s,collectionLocation:t.target.value}))},k=(n,t)=>{p(s=>({...s,[n]:t}))},z=async n=>{n.preventDefault(),u(!0),console.log(a("create_deal.console_submit"),{formData:l,products:h,title:m});try{const t=new FormData;t.append("title",m),t.append("description",l.description),t.append("collection_location",l.collectionLocation),t.append("collection_date",l.collectionDate),t.append("content_description",l.contentDescription),t.append("artisan_information",l.manufacturerInfo),t.append("banking_info[iban]",l.iban),t.append("banking_info[bic]",l.bic),t.append("deal_expiration_date",l.dealExpiration),t.append("terms_accepted",l.acceptConditions),t.append("delivery_cost",l.deliveryCost),l.pictures&&l.pictures.length>0?l.pictures.forEach((c,r)=>{c instanceof File?(console.log(a("create_deal.console_append_file"),c.name),t.append("images",c)):console.error(a("create_deal.console_invalid_file"))}):console.error(a("create_deal.console_no_pictures")),h.forEach((c,r)=>{Object.keys(c).forEach(o=>{t.append(`products[${r}][${o}]`,c[o])})});const s=await _(de(t)).unwrap(),x=s.deal_id;console.log(a("create_deal.console_success"),s),I(`/inform-deal?id=${x}`)}catch(t){console.error(a("create_deal.console_failure"),t),y(!0),A((t==null?void 0:t.detail)||a("create_deal.error_message"))}finally{u(!1)}};i.useEffect(()=>{window.scrollTo(0,0)},[]),i.useEffect(()=>{(async()=>{var t,s,x,c;if(b){u(!0),console.log(a("create_deal.console_fetching"),b);try{const r=await _(pe(b)).unwrap(),o=r==null?void 0:r.Deal[0];o&&(D(o.deal_title),p({description:o.description,collectionDate:((t=o.collection_date)==null?void 0:t.slice(0,16))??N(new Date),contentDescription:o.content_description,manufacturerInfo:o.artisan_information,iban:(s=o.banking_info)==null?void 0:s.iban,bic:(x=o.banking_info)==null?void 0:x.bic,dealExpiration:((c=o.deal_expiration_date)==null?void 0:c.slice(0,16))??N(new Date),acceptConditions:o.terms_accepted??!1,collectionLocation:o.collection_location,pictures:o.images??[],deliveryCost:0}),w(o.products??[]))}catch(r){console.error(a("create_deal.console_fetching_error"),r)}u(!1)}})()},[b,a]);const G=()=>{I("/")};i.useEffect(()=>{_(V(m)),_(W(l))},[l,m]);const J=n=>{v(!0),B(n)},S=n=>{console.log("Delete exc"),w(t=>t==null?void 0:t.filter(s=>(s==null?void 0:s.product_id)!==n))};return e.jsxs(e.Fragment,{children:[C&&e.jsx(X,{}),H&&e.jsx(Z,{message:F,buttonText:a("waiting_deal.got_it"),onClose:()=>y(!1)}),!C&&e.jsx("form",{onSubmit:z,className:"flex flex-col w-full items-start relative bg-primary-background mx-auto",children:e.jsxs("div",{className:"flex flex-col w-full items-start gap-[15px] px-[35px] py-[15px] relative flex-[0_0_auto]",children:[e.jsx("div",{className:"flex items-center gap-3 pt-0 pb-5 px-0 relative self-stretch w-full flex-[0_0_auto] border-b [border-bottom-style:solid] border-stroke",onClick:G,children:e.jsxs("div",{className:"inline-flex items-center gap-2 relative flex-[0_0_auto]",children:[e.jsx(ee,{className:"!relative !w-[18px] !h-[18px]",color:"#637381"}),e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-primary-text-color text-base tracking-[0] leading-6 whitespace-nowrap",children:a("common.back")})]})}),e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-semibold text-[#1b4f4a] text-2xl text-center tracking-[0] leading-[30px] whitespace-nowrap",children:a("create_deal.title")}),e.jsx(te,{onChange:U,setForm:O,images:l==null?void 0:l.pictures}),e.jsx(ae,{dealTitle:m,setDealTitle:D}),e.jsx("div",{className:"w-full",children:e.jsx(j,{name:"description",type:"description",description:l.description,onChange:f,className:"!self-stretch !w-full",divClassName:"!text-[#1b4f4a] !text-lg !leading-[26px]",divClassNameOverride:"!tracking-[0] !text-base !flex-1 ![white-space:unset] ![font-style:unset] !font-normal ![font-family:'Inter',Helvetica] !leading-6 !w-[unset]",groupClassName:"!w-[42px]",helperText:"off",label:a("create_deal.description_label"),label1:"on",placeholder:a("create_deal.description_placeholder"),secondLabel:"on",secondLabelText:"0/250",state:"default"})}),e.jsx(d,{}),e.jsx("div",{className:"!w-full",children:e.jsx(le,{type:"collectionLocation",onChange:q,value:l.collectionLocation})}),e.jsx("div",{className:"relative w-fit [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-base tracking-[0] leading-6 whitespace-nowrap",children:a("create_deal.collection_date_label")}),e.jsx("div",{className:"w-full",children:e.jsx(L,{name:"collectionDate",date:l.collectionDate,onChange:k})}),e.jsx(d,{}),e.jsx("div",{className:"w-full",children:e.jsx(j,{name:"contentDescription",type:"contentDescription",description:l.contentDescription,onChange:f,className:"!self-stretch !w-full",divClassName:"!text-[#1b4f4a] !text-lg !leading-[26px]",divClassNameOverride:"!tracking-[0] !text-base !flex-1 ![white-space:unset] ![font-style:unset] !font-normal ![font-family:'Inter',Helvetica] !leading-6 !w-[unset]",groupClassName:"!w-[42px]",helperText:"off",label:a("create_deal.content_description_label"),label1:"on",placeholder:a("create_deal.content_description_placeholder"),secondLabel:"on",secondLabelText:"0/250",state:"default"})}),e.jsx(d,{}),e.jsx("div",{className:"w-full",children:e.jsx(j,{name:"manufacturerInfo",type:"manufacturerInfo",description:l.manufacturerInfo,onChange:f,className:"!self-stretch !w-full",divClassName:"!text-[#1b4f4a] !text-lg ![white-space:unset] !leading-[26px] !w-[236px]",divClassNameOverride:"!tracking-[0] !text-base !flex-1 ![white-space:unset] ![font-style:unset] !font-normal ![font-family:'Inter',Helvetica] !leading-6 !w-[unset]",groupClassName:"!w-[42px]",helperText:"off",label:a("create_deal.artisan_info_label"),label1:"on",placeholder:a("create_deal.artisan_info_placeholder"),secondLabel:"on",secondLabelText:"0/250",state:"default"})}),e.jsx(d,{}),e.jsx("p",{className:"relative w-full [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-lg tracking-[0] leading-[26px]",children:a("create_deal.banking_info_label")}),e.jsx("div",{className:"w-full h-6",children:e.jsx("div",{className:"[font-family:'Inter-Regular',Helvetica] font-normal text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap",children:"IBAN"})}),e.jsx("div",{className:"w-full",children:e.jsx(T,{name:"iban",type:"iban",info:l.iban,onChange:f,label:a("create_deal.iban_label"),placeholder:a("create_deal.iban_placeholder")})}),e.jsx("div",{className:"w-full h-6",children:e.jsx("div",{className:"[font-family:'Inter-Regular',Helvetica] font-normal text-primary-color text-base tracking-[0] leading-6 whitespace-nowrap",children:"BIC"})}),e.jsx("div",{className:"w-full",children:e.jsx(T,{name:"bic",type:"bic",info:l.bic,onChange:f,label:a("create_deal.bic_label"),placeholder:a("create_deal.bic_placeholder")})}),e.jsx(d,{}),e.jsx(ne,{}),e.jsx("div",{className:"w-full",children:e.jsx(L,{name:"dealExpiration",date:l.dealExpiration,onChange:k})}),e.jsx(d,{}),e.jsx(se,{products:h,onEdit:J,onDelete:S}),e.jsx(d,{}),e.jsx("div",{className:"flex w-[250px] items-start gap-2.5 relative flex-[0_0_auto]",children:e.jsx("div",{className:"relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-lg tracking-[0] leading-[26px] whitespace-nowrap",children:a("create_deal.add_products_label")})}),g===!0&&e.jsx(oe,{addProduct:R,setAddMode:v,addMode:g,product:$,onDelete:S}),!g&&e.jsxs("div",{className:"gap-2 bg-white shadow-shadow-1 flex items-center justify-center px-6 py-3 relative self-stretch w-full flex-[0_0_auto] rounded-md cursor-pointer",onClick:()=>v(!g),children:[e.jsx(ie,{className:"!relative !w-5 !h-5"}),e.jsx("button",{type:"button",className:"all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#1b4f4a] text-base text-center tracking-[0] leading-6 whitespace-nowrap",children:a("create_deal.add_another_product_label")})]}),e.jsx(d,{}),e.jsx(ce,{formData:l,handleChange:f}),e.jsxs("button",{type:"submit",className:"gap-2.5 bg-[#1b4f4a] flex items-center justify-center px-6 py-3 relative self-stretch w-full flex-[0_0_auto] rounded-md cursor-pointer",children:[e.jsx("div",{className:"all-[unset] box-border relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-white text-base text-center tracking-[0] leading-6 whitespace-nowrap",children:a("create_deal.next_step_button")}),e.jsx(re,{className:"!relative !w-5 !h-5",color:"white"})]})]})})]})};export{ue as default};
