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
            <div>
                <p>帳號:{{data}}</p>
            </div>
            <div>
                <label>驗證碼:</label>
                <input v-model="VerifyStore.verify.password"/>
            </div>
            <div>
                <label>新密碼:</label>
                <input v-model="VerifyStore.verify.newPassword"/>
            </div>
            <div>
                <label>確認密碼:</label>
                <input v-model="VerifyStore.verify.checkPassword"/>
            </div>
            <div>
                <button @click="VerifyStore.verifySend">傳送</button>
                <button @click="">取消</button>
            </div>
        </div>
    </div>


    <Transition name="bounce" >
        <p v-if="VerifyStore.show" class="warmView">
            <p>{{VerifyStore.warmText}}</p>
            <button @click="VerifyStore.checkSend">確認</button>
            <button @click="VerifyStore.checkSend">取消</button>
        </p>
    </Transition>

</template>

<style lang="scss" scoped>
@media screen and (min-width: 320px){
    .container{
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
    >.regist_form{
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
    border-radius: 5px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;

    width: 400px;
    height: 300px;
    z-index: 1;
}


</style>