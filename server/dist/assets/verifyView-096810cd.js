import{H as y}from"./Header-fabc921f.js";import{b as i,T as w}from"./runtime-dom.esm-bundler-a6f2cd2a.js";import{u as b,a as h}from"./verifyPassword.vue_vue_type_style_index_0_scoped_370b4c08_lang-ba311ba0.js";import{r as _}from"./index-8f24cdfe.js";import{_ as v,o as d,S as u,T as e,a4 as l,u as s,a0 as k,a6 as S,Y as f,V as c,W as V,a3 as x,Z as m,a1 as C,a2 as g}from"./_plugin-vue_export-helper-f7306c69.js";import"./pinia-f4d3ecd1.js";import"./order_api-a4187d68.js";import"./cartStore-7940fa6d.js";const a=r=>(C("data-v-370b4c08"),r=r(),g(),r),P={class:"container"},I=a(()=>e("h2",null,"輸入新密碼",-1)),T={class:"login_form"},B=a(()=>e("div",{class:"group"},null,-1)),N={class:"group"},R=a(()=>e("label",null,"驗證碼:",-1)),U={class:"group"},q=a(()=>e("label",null,"新密碼:",-1)),z=["textContent"],D={class:"group"},H=a(()=>e("label",null,"確認密碼:",-1)),W={class:"btn-group"},$={key:0,class:"warmView"},E={__name:"verifyPassword",setup(r){b();const o=h();let p=_.currentRoute.value.query.account;return o.verify.account=p,_.currentRoute.value.query={},(Y,t)=>(d(),u(m,null,[e("div",P,[I,e("div",T,[B,e("div",N,[R,l(e("input",{"onUpdate:modelValue":t[0]||(t[0]=n=>s(o).verify.password=n)},null,512),[[i,s(o).verify.password]])]),e("div",U,[q,l(e("input",{onKeyup:t[1]||(t[1]=(...n)=>s(o).checkPassword&&s(o).checkPassword(...n)),"onUpdate:modelValue":t[2]||(t[2]=n=>s(o).verify.newPassword=n),placeholder:"需輸入8~12英數混合"},null,544),[[i,s(o).verify.newPassword]]),e("p",{class:k(["pw_error",{open:!1}]),style:S({color:s(o).fontColor}),textContent:f(s(o).passwordWarn)},null,12,z)]),e("div",D,[H,l(e("input",{"onUpdate:modelValue":t[3]||(t[3]=n=>s(o).verify.checkPassword=n)},null,512),[[i,s(o).verify.checkPassword]])]),e("div",W,[e("button",{class:"btn",onClick:t[4]||(t[4]=(...n)=>s(o).verifySend&&s(o).verifySend(...n))},"傳送"),e("button",{class:"btn",onClick:t[5]||(t[5]=()=>{})},"取消")])])]),c(w,{name:"bounce"},{default:V(()=>[s(o).show?(d(),u("p",$,[e("p",null,f(s(o).warmText),1),e("button",{onClick:t[6]||(t[6]=(...n)=>s(o).checkSend&&s(o).checkSend(...n))},"確認"),e("button",{onClick:t[7]||(t[7]=(...n)=>s(o).checkSend&&s(o).checkSend(...n))},"取消")])):x("",!0)]),_:1})],64))}},F=v(E,[["__scopeId","data-v-370b4c08"]]);const K={class:"main"},M={__name:"verifyView",setup(r){return(o,p)=>(d(),u(m,null,[c(y),e("div",K,[c(F)])],64))}},X=v(M,[["__scopeId","data-v-bb3a2f97"]]);export{X as default};
