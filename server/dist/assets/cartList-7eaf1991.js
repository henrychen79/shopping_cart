import{_ as h,N as I,z as u,A as k,o as m,g as f,i as t,O as g,k as v,P as x,q as y,Q as w,U as $,j as S,u as i,L as P,t as d,l as _,m as U,c as V,p,s as B,x as O}from"./index-0993d07c.js";import"./orderStore-6161f9dd.js";const j=["src"],E={__name:"cartItem",props:{imgData:Object,itemId:Number,indexId:Number},emits:["delbtn"],setup(o,{emit:s}){const c=o;I();const r=u(""),n=u(!1),e=u(!1),l=u("");(async()=>{await w(c.imgData.category,c.imgData.productInfoID,"original").then(function(a){return r.value=URL.createObjectURL(a),a}).catch(a=>{console.error("Error:",a)})})();const L=k({id:c.itemId}),N=async()=>{await $(JSON.stringify(L)).then(function(a){return n.value=!0,l.value="移除購物車成功",e.value=!0,a}).catch(a=>{l.value="移除購物車失敗",e.value=!1,n.value=!0,console.error("delCartError:",a)})},C=()=>{n.value=!1,e.value===!0&&s("delbtn")};return(a,J)=>(m(),f(y,null,[t("tr",null,[t("td",null,[t("img",{src:r.value,alt:"Loading..."},null,8,j)]),t("td",null,[g(a.$slots,"itemName",{},void 0,!0)]),t("td",null,[g(a.$slots,"itemQuantity",{},void 0,!0)]),t("td",null,[g(a.$slots,"itemPrice",{},void 0,!0)]),t("td",null,[t("button",{onClick:N},"移除")])]),v(x,{show:n.value,ifPass:e.value,message:l.value,onClose:C},null,8,["show","ifPass","message"])],64))}},Q=h(E,[["__scopeId","data-v-4b072434"]]);const b=o=>(B("data-v-c8bca722"),o=o(),O(),o),R={key:0,class:"cartList"},q=b(()=>t("thead",null,[t("tr",null,[t("th",null,"商品圖片"),t("th",null,"商品名稱"),t("th",null,"數量"),t("th",null,"價格"),t("th")])],-1)),F={colspan:"5",class:"total-price"},z=b(()=>t("h3",null,"總金額",-1)),A={__name:"cartList",setup(o){const s=I();return s.productList(),(c,r)=>{const n=S("router-link");return i(s).showData?(m(),f("table",R,[q,t("tbody",null,[(m(!0),f(y,null,P(i(s).productListData[0],(e,l)=>(m(),V(Q,{key:e.cart_item_id,imgData:{category:`${e.category}`,productInfoID:`${e.productNum}`},itemId:e.cart_item_id,onDelbtn:r[0]||(r[0]=D=>i(s).productList()),indexId:l},{itemName:_(()=>[p(d(e.productName),1)]),itemQuantity:_(()=>[p(d(e.quantity),1)]),itemPrice:_(()=>[p(d(e.price),1)]),_:2},1032,["imgData","itemId","indexId"]))),128))]),t("tfoot",null,[t("tr",null,[t("td",F,[z,t("p",null,d(i(s).productListData[1][0].totalPrice),1),v(n,{to:"/shoppingCart/shippingInfo",class:"btn"},{default:_(()=>[p("結帳")]),_:1})])])])])):U("",!0)}}},G=h(A,[["__scopeId","data-v-c8bca722"]]);export{G as default};
