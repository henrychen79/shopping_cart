<script setup>
import modifyName from './modifyName.vue'
import modifyPassWord from './modifyPw.vue'
import {useMemberStore} from '../../stores/memberStore'
import router from '../../router/index'

const memberStore = useMemberStore();

const token = document.cookie.replace(/(?:(?:^|.*;\s*)_token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
// console.log('取得token測試',token)

console.log(router.push)
if(token===''){
    alert('尚未登入')
    router.push('/login')
}else{
    router.push('/member')
}




</script>

<template>



<h1>會員中心</h1>
    <Transition name="bounce" >
        <!-- "memberStore.show" -->
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
            <li v-on:click="memberStore.OpenPwFn">修改密碼</li>
            <li v-on:click="memberStore.OpenNameFn">修改暱稱</li>
        </ul>
    </div>
    <div class="orderInfo">
        <h2>訂單查詢</h2>
        <div class="test"></div>
        <ul>
            <li><RouterLink to="/order">訂單紀錄</RouterLink></li>
        </ul>
    </div>
</div>


    <!-- <modifyName/>
    <modifyPassWord/> -->
</template>

<style lang="scss" scoped>
@media screen and (min-width: 250px) {
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
                width: 150px;
                border: none;
                border-bottom: 5px solid black;
                box-shadow:0px 4px 3px 0px rgb(207, 202, 202)
            }
            >ul{
                display: inline-flex;
                flex-direction: column;
                >li{
                    margin: 10px;
                    // border: 1px solid black;
                    cursor:pointer;
                }
                }
        }
        >.orderInfo{
            margin: auto 2rem;
            flex:1; 
            >.test{
                margin: 0px;
                height: 1px;
                width: 120px;
                border: none;
                border-bottom: 5px solid black;
                box-shadow:0px 4px 3px 0px rgb(207, 202, 202);
            
            }
            >ul{
                display: inline-flex;
                flex-direction: column;
                >li{
                    margin: 10px;
                    // border: 1px solid black;
                    cursor:pointer;
                }
            }

        }
    }
}
@media screen and (max-width: 250px) {
    .mainInfo{
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        >.reviseInfo{
            margin-top: 50px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            >ul{
                display: inline-flex;
                flex-direction: column;
                >li{
                    margin: 10px;
                    // border: 1px solid black;
                    cursor:pointer;
                }
            }
        }
        >.orderInfo{
            margin-top: 20px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            >ul{
                
            }
        }
    }
}
.bounce-enter-active {
  animation: bounce-in 0.3s;
  
}
.bounce-leave-active {
  animation: bounce-in 0.2s reverse;
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
    border: 2px solid rgb(178, 176, 176);
    box-shadow:3px 3px 2px 2px;
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