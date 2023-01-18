<script setup>
import {useRetrievepwStore} from "../stores/retrievepw"
import{useVerifyStore}from "../stores/verifyStore"
import router from '../router'
const Retrievepw = useRetrievepwStore()
const VerifyStore = useVerifyStore()

let data = router.currentRoute.value.query.account
VerifyStore.verify.account = data
router.currentRoute.value.query={}



</script>

<template>
     <div class='container'>
        <h2>輸入新密碼</h2>
        <div class="login_form">
            <div class="group">
                <!-- <p>帳號:{{data}}</p> -->
            </div>
            <div class="group">
                <label>驗證碼:</label>
                <input v-model="VerifyStore.verify.password"/>
            </div>
            <div class="group">
                <label>新密碼:</label>
                <input @keyup="VerifyStore.checkPassword" 
                v-model="VerifyStore.verify.newPassword" 
                placeholder="需輸入8~12英數混合"/>
                <p :class="['pw_error',{open:false}]" :style="{color:VerifyStore.fontColor}" v-text="VerifyStore.passwordWarn"></p>
            </div>
            <div class="group">
                <label>確認密碼:</label>
                <input v-model="VerifyStore.verify.checkPassword"/>
            </div>
            <div class="btn-group">
                <button class='btn' @click="VerifyStore.verifySend">傳送</button>
                <button class='btn' @click="">取消</button>
            </div>
        </div>
    </div>


    <Transition name="bounce"  >
        <!-- VerifyStore.show -->
        <p v-if="VerifyStore.show"  class="warmView">
            <p>{{VerifyStore.warmText}}</p>
            <div>
                <button @click="VerifyStore.checkSend">確認</button>
                <button @click="VerifyStore.checkSend">取消</button>
            </div>
        </p>
    </Transition>

</template>

<style lang="scss" scoped>
@import '../assets/base.css';

@media screen and (min-width: 320px){
    .container{
        position: relative;
        border: 2px solid black;
        width: 100%;
        height: 100%;
    >h2{
        margin:auto;
        padding-left:30px ;
        font-weight:bold;
        text-shadow: 1px 1px rgb(122, 121, 121)
        // text-align: center;
    }
    >.login_form{
        padding-top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        >.group{
            margin-bottom: 10px;
            >input{
                margin-left: 10px;
            }
            >.pw_error{
                font-size: 14px;
                margin: 0;
            }
            >.open{
                display:none;
            }
        }
        >.btn-group{
           >.btn{
            width: 100px;
            margin: 20px;
           }
        }
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
.warmView{
    border: 2px solid black;
    position: absolute;
    margin: auto;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // transform: translate(-50%,-50%);
    // margin-left:-200px;
    // margin-top:-150px;

    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    // margin: 0 auto;

    z-index: 1;
    >div{
        >button{
            margin: 10px;
             // margin-right: 30px;
            // margin-bottom: 20px;
            width: 80px;
            height: 30px;
            border-radius: 5px;
            border: none;
        }
        >button:hover{
            //移動到上面放大按鈕
            transform: scale(1.1);
        }
        >.btn_check:active{
            //點下去 還原大小
            transform: scale(1);
        }

       
    }
}


</style>