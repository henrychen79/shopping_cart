import{_ as l,M as r,j as i,o as u,g as h,i as t,p as o,t as f,u as p,k as _,l as d,s as m,x as X}from"./index-7ceba52b.js";const s=e=>(m("data-v-f3d55ad7"),e=e(),X(),e),y={class:"payment-info"},v=s(()=>t("div",{class:"payway"},[t("h3",null,"付款方式"),t("input",{type:"radio",name:"price",checked:""}),t("span",null,"匯款")],-1)),I=s(()=>t("h3",null,"銀行代號 : 008",-1)),g=s(()=>t("h3",null,"戶名 : XXX",-1)),k=s(()=>t("h3",null,"帳號 : 709XXXXXXXXX",-1)),x={class:"group-btn"},C={__name:"paymentInfo",setup(e){const n=r();return(S,a)=>{const c=i("router-link");return u(),h("div",y,[v,t("h3",null,[o("請匯"),t("span",null,f(p(n).productListData[1][0].totalPrice),1),o("至以下帳戶")]),I,g,k,t("div",x,[_(c,{to:"/shoppingCart/shippingInfo",class:"btn"},{default:d(()=>[o("回前頁")]),_:1}),_(c,{to:"/shoppingCart/orderInfo",onClick:a[0]||(a[0]=b=>p(n).orderDone()),class:"btn"},{default:d(()=>[o("確認訂單")]),_:1})])])}}},B=l(C,[["__scopeId","data-v-f3d55ad7"]]);export{B as default};
