import{_ as g,N as I,z as u,A as k,o as m,g as h,i as t,O as f,k as v,P as x,q as y,Q as w,U as $,j as S,u as i,L as P,t as d,l as _,m as U,c as V,p,s as B,x as O}from"./index-56e8f9eb.js";import"./orderStore-698e47e0.js";const j=["src"],E={__name:"cartItem",props:{imgData:Object,itemId:Number,indexId:Number},emits:["delbtn"],setup(o,{emit:s}){const l=o;I();const r=u(""),n=u(!1),e=u(!1),c=u("");(async()=>{await w(l.imgData.category,l.imgData.productInfoID,"thumbnail").then(function(a){return r.value=URL.createObjectURL(a),a}).catch(a=>{console.error("Error:",a)})})();const L=k({id:l.itemId}),N=async()=>{await $(JSON.stringify(L)).then(function(a){return n.value=!0,c.value="移除購物車成功",e.value=!0,a}).catch(a=>{c.value="移除購物車失敗",e.value=!1,n.value=!0,console.error("delCartError:",a)})},C=()=>{n.value=!1,e.value===!0&&s("delbtn")};return(a,J)=>(m(),h(y,null,[t("tr",null,[t("td",null,[t("img",{src:r.value,alt:"Loading..."},null,8,j)]),t("td",null,[f(a.$slots,"itemName",{},void 0,!0)]),t("td",null,[f(a.$slots,"itemQuantity",{},void 0,!0)]),t("td",null,[f(a.$slots,"itemPrice",{},void 0,!0)]),t("td",null,[t("button",{onClick:N},"移除")])]),v(x,{show:n.value,ifPass:e.value,message:c.value,onClose:C},null,8,["show","ifPass","message"])],64))}},Q=g(E,[["__scopeId","data-v-2ec273ef"]]);const b=o=>(B("data-v-c8bca722"),o=o(),O(),o),R={key:0,class:"cartList"},q=b(()=>t("thead",null,[t("tr",null,[t("th",null,"商品圖片"),t("th",null,"商品名稱"),t("th",null,"數量"),t("th",null,"價格"),t("th")])],-1)),F={colspan:"5",class:"total-price"},z=b(()=>t("h3",null,"總金額",-1)),A={__name:"cartList",setup(o){const s=I();return s.productList(),(l,r)=>{const n=S("router-link");return i(s).showData?(m(),h("table",R,[q,t("tbody",null,[(m(!0),h(y,null,P(i(s).productListData[0],(e,c)=>(m(),V(Q,{key:e.cart_item_id,imgData:{category:`${e.category}`,productInfoID:`${e.productNum}`},itemId:e.cart_item_id,onDelbtn:r[0]||(r[0]=D=>i(s).productList()),indexId:c},{itemName:_(()=>[p(d(e.productName),1)]),itemQuantity:_(()=>[p(d(e.quantity),1)]),itemPrice:_(()=>[p(d(e.price),1)]),_:2},1032,["imgData","itemId","indexId"]))),128))]),t("tfoot",null,[t("tr",null,[t("td",F,[z,t("p",null,d(i(s).productListData[1][0].totalPrice),1),v(n,{to:"/shoppingCart/shippingInfo",class:"btn"},{default:_(()=>[p("結帳")]),_:1})])])])])):U("",!0)}}},G=g(A,[["__scopeId","data-v-c8bca722"]]);export{G as default};
