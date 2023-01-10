<script setup>
import modifyName from './modifyName.vue'
import modifyPassWord from './modifyPw.vue'
import {useMemberStore} from '../../stores/memberStore'
import router from '../../router/index'

const memberStore = useMemberStore();

const token = document.cookie.replace(/(?:(?:^|.*;\s*)tokenStore\s*\=\s*([^;]*).*$)|^.*$/, "$1");
console.log('取得token測試',token)

// console.log(router.push)
if(token===''){
    router.push('/login')
}else{
    router.push('/member')
}




</script>

<template>



<h1>會員中心</h1>
    <Transition name="bounce" >
        <p v-if="memberStore.show" class="textView">
            <modifyName/>
            <modifyPassWord/>
        </p>
    </Transition>
<div class="mainInfo">
    <div class="reviseInfo">
        <h2>修改會員資料</h2>
        <div class="test"></div>
        <ul>
            <li><a href="#" v-on:click="memberStore.OpenPwFn">修改密碼</a></li>
            <li><a href="#" v-on:click="memberStore.OpenNameFn">修改暱稱</a></li>
        </ul>
    </div>
    <div class="orderInfo">
        <h2>訂單查詢</h2>
        <div class="test"></div>
    </div>
</div>


    <!-- <modifyName/>
    <modifyPassWord/> -->
</template>

<style lang="scss" scoped>
h1{
    margin:10px 2rem;
}
.mainInfo{
    // border: 2px solid red;
    width: 80%;
    height: 70%;
    margin: auto 2rem;
    display: flex;
    flex-direction: column;
    >.reviseInfo{
        margin: auto 2rem;
        flex:1;
        >.test{
            margin: 0px;
            height: 1px;
            width: 15%;
            border: none;
            border-bottom: 5px solid black;
            box-shadow:0px 4px 3px 0px rgb(207, 202, 202)
        }
    }
    >.orderInfo{
        margin: auto 2rem;
        flex:1; 
         >.test{
            margin: 0px;
            height: 1px;
            width: 10%;
            border: none;
            border-bottom: 5px solid black;
            box-shadow:0px 4px 3px 0px rgb(207, 202, 202)
        }
    }
}
.bounce-enter-active {
  animation: bounce-in 0.5s;
  
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
    
  0% {
    transform: scale(0) 
  }
  50% {
    transform: scale(1.25) 
  }
  100% {
    transform: scale(1) 
  }
}
.textView{
    border: 2px solid black;
    position: absolute;
    // border: 1px solid black;
    border-radius: 5px;
    background-color: white;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    // top:50%;
    // left: 50%;
    // transform: translate(-50%,-50%);
    width: 400px;
    height: 300px;
    z-index: 1;
}

</style>