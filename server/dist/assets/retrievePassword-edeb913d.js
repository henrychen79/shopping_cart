import{_ as d,o as r,g as i,i as e,n as p,v,u as o,k as c,l as m,m as f,T as h,q as l,s as w,x as b,H as x}from"./index-f39029d8.js";import{u as g}from"./verifyPassword.vue_vue_type_style_index_0_scoped_370b4c08_lang-d61a5e57.js";const _=a=>(w("data-v-337ebfa0"),a=a(),b(),a),k={class:"container"},y=_(()=>e("h2",null,"忘記密碼",-1)),C={class:"retieve_form"},I={class:"group"},P=_(()=>e("label",{for:"user_id"},"請輸入您的註冊帳號(email)，我們將寄暫時密碼給您:",-1)),V={class:"btn-group"},S=_(()=>e("button",{class:"btn"},"取消",-1)),B={key:0,class:"warmView"},D=_(()=>e("h2",null,"寄送失敗，請重新確認",-1)),E={__name:"retrievePwComponents",setup(a){const t=g();return(u,s)=>(r(),i(l,null,[e("div",k,[y,e("div",C,[e("div",I,[P,p(e("input",{type:"text",name:"",id:"user_id","onUpdate:modelValue":s[0]||(s[0]=n=>o(t).retrieveData.account=n)},null,512),[[v,o(t).retrieveData.account]])]),e("div",V,[e("button",{class:"btn",onClick:s[1]||(s[1]=(...n)=>o(t).sendEmail&&o(t).sendEmail(...n))},"寄送"),S])])]),c(h,{name:"bounce"},{default:m(()=>[o(t).show?(r(),i("p",B,[D,e("button",{onClick:s[2]||(s[2]=n=>o(t).show=!1)},"取消")])):f("",!0)]),_:1})],64))}},N=d(E,[["__scopeId","data-v-337ebfa0"]]);const T={class:"main"},$={__name:"retrievePassword",setup(a){return(t,u)=>(r(),i(l,null,[c(x),e("div",T,[c(N)])],64))}},q=d($,[["__scopeId","data-v-a097160a"]]);export{q as default};
