import{J as V,y as U,A as C,z as _,_ as y,o as u,g as f,i as s,n as w,v,u as o,D as P,s as h,x as N,E as B,t as D,r as b,j as J,k as m,l as I,m as R,T as W,p as A,q as F,H}from"./index-ee3cb011.js";const L=async n=>await V("/member/update_nickname","POST",n),j=async n=>await V("/member/modify_password","POST",n),$=U("memberStore",()=>{let n=C({newNickname:""}),e=C({password:"",newPassword:"",checkPassword:""}),l=_(!0),t=_(!0),a=_(!1),c=_(""),d=_(""),i=_(!1);const S=document.cookie.replace(/(?:(?:^|.*;\s*)_token\s*\=\s*([^;]*).*$)|^.*$/,"$1"),T=()=>{i.value=!0,l.value?(l.value=!1,t.value=!0):(l.value=!0,k())},E=()=>{i.value=!0,t.value?(t.value=!1,l.value=!0):(t.value=!0,k())},k=()=>{i.value=!1},M=()=>{if(n.newNickname===""){alert("欄位不能為空");return}console.log(S),L(JSON.stringify(n)).then(function(r){console.log(r),r.status===200?(i.value=!1,n.newNickname="",alert("修改成功")):(n.newNickname="",alert("修改失敗"))}).catch(function(r){console.error("Error:",r)})},g=new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/),z=()=>{g.test(e.newPassword),g.test(e.newPassword)?(a.value=!1,c.value="密碼格式正確",d.value="green",console.log("格式正確")):(c.value="密碼格式不符合",d.value="red",a.value=!1,console.log("格式不正確")),e.newPassword===""&&(c.value="")},O=()=>{console.log(e),j(JSON.stringify(e)).then(function(r){console.log(r),r.status==200?(i.value=!1,e.password="",e.newPassword="",e.checkPassword="",alert("修改成功")):(e.password="",e.newPassword="",e.checkPassword="",alert("修改失敗"))}).catch(function(r){console.error("Error:",r)})};return{modifyNameOpen:l,modifyPwOpen:t,modifyNamedata:n,show:i,password_error:a,passwordWarn:c,fontColor:d,modifyPassword:e,token:S,OpenNameFn:T,OpenPwFn:E,modifyNickName:M,closeShowView:k,checkPassword:z,checkSend:()=>{if(e.newPassword===""||e.password===""||e.checkPassword===""){alert("欄位不能為空");return}else if(e.newPassword!=e.checkPassword){alert("密碼和確認密碼不相符");return}console.log("執行fetch"),O()},modifyPwFn:O}});const q=n=>(h("data-v-b9f41be8"),n=n(),N(),n),K={class:"modify_txt"},Z=q(()=>s("label",null,"請輸入新的暱稱:",-1)),G={class:"modify_name_btn"},Q={__name:"modifyName",setup(n){const e=$();return(l,t)=>(u(),f("div",{class:P(["modify_name_main",{modifyOpen:o(e).modifyNameOpen}])},[s("div",K,[Z,w(s("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>o(e).modifyNamedata.newNickname=a)},null,512),[[v,o(e).modifyNamedata.newNickname]])]),s("div",G,[s("button",{class:"btn_check",onClick:t[1]||(t[1]=(...a)=>o(e).modifyNickName&&o(e).modifyNickName(...a))},"確認"),s("button",{class:"btn_cancel",onClick:t[2]||(t[2]=a=>(o(e).OpenNameFn(),o(e).closeShowView()))},"取消")])],2))}},X=y(Q,[["__scopeId","data-v-b9f41be8"]]);const x=n=>(h("data-v-76678bf2"),n=n(),N(),n),Y={class:"modifyPw_txt"},ee=x(()=>s("label",null,"輸入舊的密碼:",-1)),se={class:"modifyPw_txt"},oe=x(()=>s("label",null,"輸入新的密碼:",-1)),te=["textContent"],ne={class:"modifyPw_txt"},ae=x(()=>s("label",null,"確認新的密碼:",-1)),le={class:"modify_pw_btn"},re={__name:"modifyPw",setup(n){const e=$();return(l,t)=>(u(),f("div",{class:P(["modify_pw_main",{modifyPwOpen:o(e).modifyPwOpen}])},[s("div",Y,[ee,w(s("input",{type:"password","onUpdate:modelValue":t[0]||(t[0]=a=>o(e).modifyPassword.password=a)},null,512),[[v,o(e).modifyPassword.password]])]),s("div",se,[oe,w(s("input",{type:"password",onKeyup:t[1]||(t[1]=(...a)=>o(e).checkPassword&&o(e).checkPassword(...a)),"onUpdate:modelValue":t[2]||(t[2]=a=>o(e).modifyPassword.newPassword=a),placeholder:"需輸入8~12英數混合"},null,544),[[v,o(e).modifyPassword.newPassword]]),s("p",{class:P(["error_txt",{open:o(e).password_error}]),style:B({color:o(e).fontColor}),textContent:D(o(e).passwordWarn)},null,14,te)]),s("div",ne,[ae,w(s("input",{type:"password","onUpdate:modelValue":t[3]||(t[3]=a=>o(e).modifyPassword.checkPassword=a)},null,512),[[v,o(e).modifyPassword.checkPassword]])]),s("div",le,[s("button",{class:"btn_check",onClick:t[4]||(t[4]=(...a)=>o(e).checkSend&&o(e).checkSend(...a))},"確認"),s("button",{class:"btn_cancel",onClick:t[5]||(t[5]=a=>(o(e).OpenPwFn(),o(e).closeShowView()))},"取消")])],2))}},de=y(re,[["__scopeId","data-v-76678bf2"]]);const p=n=>(h("data-v-c89f29bf"),n=n(),N(),n),ce=p(()=>s("h1",null,"會員中心",-1)),ie={key:0,class:"textView"},_e={class:"mainInfo"},me={class:"reviseInfo"},ue=p(()=>s("h2",null,"修改會員資料",-1)),fe=p(()=>s("div",{class:"test"},null,-1)),pe={class:"orderInfo"},we=p(()=>s("h2",null,"訂單查詢",-1)),ve=p(()=>s("div",{class:"test"},null,-1)),ye={__name:"memberinfo",setup(n){const e=$(),l=document.cookie.replace(/(?:(?:^|.*;\s*)_token\s*\=\s*([^;]*).*$)|^.*$/,"$1");return console.log(b.push),l===""?(alert("尚未登入"),b.push("/login")):b.push("/member"),(t,a)=>{const c=J("RouterLink");return u(),f(F,null,[ce,m(W,{name:"bounce"},{default:I(()=>[o(e).show?(u(),f("p",ie,[m(X),m(de)])):R("",!0)]),_:1}),s("div",_e,[s("div",me,[ue,fe,s("ul",null,[s("li",{onClick:a[0]||(a[0]=(...d)=>o(e).OpenPwFn&&o(e).OpenPwFn(...d))},"修改密碼"),s("li",{onClick:a[1]||(a[1]=(...d)=>o(e).OpenNameFn&&o(e).OpenNameFn(...d))},"修改暱稱")])]),s("div",pe,[we,ve,s("ul",null,[s("li",null,[m(c,{to:"/order"},{default:I(()=>[A("訂單紀錄")]),_:1})])])])])],64)}}},ke=y(ye,[["__scopeId","data-v-c89f29bf"]]);const be={class:"main"},Pe={__name:"MemberCentre",setup(n){return(e,l)=>(u(),f(F,null,[m(H),s("div",be,[m(ke)])],64))}},$e=y(Pe,[["__scopeId","data-v-a5c9bafc"]]);export{$e as default};
