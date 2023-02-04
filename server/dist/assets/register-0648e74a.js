import{y as K,z as r,A as M,B as O,C as q,r as W,_ as S,o as C,g as k,i as s,t as A,u as t,k as y,l as J,m as Z,T as j,n as h,v as x,D as B,E as R,q as z,s as G,x as L,H as Q}from"./index-91844ebb.js";const F=K("RegisterStore",()=>{let l=r(!1),e=r(!1),c=r(""),o=r("red"),a=r(!1),u=r(!1),d=r(""),f=r("red"),_=r(!1),n=M({name:"",account:"",password:"",doublePassword:null}),p=r(!1),g=r("");const b=new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/),N=()=>{_.value=!1},T=()=>{n.account!=""?a.value=!0:a.value=!1},$=()=>{u.value?(d.value="帳號已存在，請重新檢查",f.value="red"):(d.value="可以註冊",f.value="green")},U=()=>{d.value=""},D=()=>{b.test(n.password),b.test(n.password)?e.value=!1:e.value=!0,P(),E()},P=()=>{n.password!=""?l.value=!0:l.value=!1},E=()=>{e.value?(c.value="密碼格式不符合",o.value="red"):(c.value="密碼格式正確",o.value="green"),n.password===""&&(c.value="")},m=()=>{console.log(p.value),p.value?p.value=!1:p.value=!0},H=async()=>{if(n.account===""){d.value="不能為空",f.value="red";return}`${n.account}`;let i=await O(n.account).then(function(w){return console.log("res.repeat",w.repeat),w.repeat}).catch(w=>{console.error("Error:",w)});console.log(i),i?(u.value=!0,_.value=!1,console.log("重複",u.value)):(u.value=!1,_.value=!0,console.log("不重複",u.value)),T(),$()},I=()=>{console.log(n),q(JSON.stringify(n)).then(function(i){console.log("Success:",i),alert("註冊成功"),W.push("/login")}).catch(function(i){console.error("Error:",i)})},V=()=>{n.name!=""&&n.account!=""&&n.password!=""?n.doublePassword===n.password?_.value?(I(),console.log("執行註冊fetch registerButton(data)")):(console.log("尚未點選確認帳號，或該帳號已被註冊請重新檢查"),g.value="尚未點選確認帳號，或該帳號已被註冊請重新檢查",m()):(console.log("確認密碼不相符"),g.value="確認密碼不相符",m()):(console.log("欄位不能為空"),g.value="欄位不能為空",m())};return{checkRegisterInfo:V,registControl:N,checkPassword:D,checkPasswordWarn:E,passwordText:P,registerButton:I,checkAccount:H,AccountText:T,AccountRe:$,AccountP:U,checkRegisterInfo:V,warmTextFn:m,cancel:()=>{W.push("/")},data:n,regex:b,passControl:l,passwordError:e,passwordWarn:c,fontColor:o,accountControl:a,accountError:u,accountColor:f,accountWarn:d,registOpen:_,warmText:g,show:p}});const X={class:"warmMain"},Y={class:"warmText"},ee=["textContent"],te={class:"warmBtn"},se={__name:"registerWarm",setup(l){const e=F();return(c,o)=>(C(),k("div",X,[s("div",Y,[s("p",{textContent:A(t(e).warmText)},null,8,ee)]),s("div",te,[s("button",{onClick:o[0]||(o[0]=(...a)=>t(e).warmTextFn&&t(e).warmTextFn(...a))},"確定")])]))}},oe=S(se,[["__scopeId","data-v-b17644c1"]]);const v=l=>(G("data-v-90a01c80"),l=l(),L(),l),ae={key:0,class:"warmView"},ne={class:"container"},re=v(()=>s("h2",null,"註冊會員",-1)),le={class:"regist_form"},ce={class:"group"},ue=v(()=>s("label",{for:"user_account"},"創建帳號:",-1)),ie=["textContent"],de={class:"group"},_e=v(()=>s("label",{for:"user_password"},"創建密碼:",-1)),pe=["textContent"],ve={class:"group"},fe=v(()=>s("label",{for:"check_password"},"確認密碼:",-1)),ge={class:"group"},me=v(()=>s("label",{for:"user_name"},"你的暱稱:",-1)),we={class:"btn-group"},he={__name:"registerComponents",setup(l){const e=F();return(c,o)=>(C(),k(z,null,[y(j,{name:"bounce"},{default:J(()=>[t(e).show?(C(),k("p",ae,[y(oe)])):Z("",!0)]),_:1}),s("div",ne,[re,s("div",le,[s("div",ce,[ue,h(s("input",{type:"email",name:"",id:"user_account",placeholder:"請輸入電子信箱","onUpdate:modelValue":o[0]||(o[0]=a=>t(e).data.account=a),onKeyup:o[1]||(o[1]=a=>{t(e).AccountP(),t(e).registControl()})},null,544),[[x,t(e).data.account]]),s("p",{class:B(["ac_error",{open:t(e).accountControl}]),style:R({color:t(e).accountColor}),textContent:A(t(e).accountWarn)},null,14,ie),s("button",{class:"check",onClick:o[2]||(o[2]=(...a)=>t(e).checkAccount&&t(e).checkAccount(...a))},"確認")]),s("div",de,[_e,h(s("input",{type:"text",name:"",onKeyup:o[3]||(o[3]=(...a)=>t(e).checkPassword&&t(e).checkPassword(...a)),id:"user_password",placeholder:"需輸入8~12英數混合","onUpdate:modelValue":o[4]||(o[4]=a=>t(e).data.password=a)},null,544),[[x,t(e).data.password]]),s("p",{class:B(["pw_error",{open:t(e).passControl}]),style:R({color:t(e).fontColor}),textContent:A(t(e).passwordWarn)},null,14,pe)]),s("div",ve,[fe,h(s("input",{type:"text",name:"",id:"check_password","onUpdate:modelValue":o[5]||(o[5]=a=>t(e).data.doublePassword=a)},null,512),[[x,t(e).data.doublePassword]])]),s("div",ge,[me,h(s("input",{type:"text",name:"",id:"user_name","onUpdate:modelValue":o[6]||(o[6]=a=>t(e).data.name=a)},null,512),[[x,t(e).data.name]])]),s("div",we,[s("button",{class:"btn",onClick:o[7]||(o[7]=(...a)=>t(e).checkRegisterInfo&&t(e).checkRegisterInfo(...a))},"註冊"),s("button",{class:"btn",onClick:o[8]||(o[8]=(...a)=>t(e).cancel&&t(e).cancel(...a))},"取消")])])])],64))}},xe=S(he,[["__scopeId","data-v-90a01c80"]]);const Ce={class:"regist_main"},ke={__name:"register",setup(l){return(e,c)=>(C(),k(z,null,[y(Q),s("div",Ce,[y(xe)])],64))}},Ae=S(ke,[["__scopeId","data-v-73825fc4"]]);export{Ae as default};