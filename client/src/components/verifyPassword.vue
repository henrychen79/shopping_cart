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
                <button @click="VerifyStore.test2()">傳送</button>
                <button @click="">取消</button>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@media screen and (min-width: 320px){
    .container{
    position: absolute;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
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


</style>