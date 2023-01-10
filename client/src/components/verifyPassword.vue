<script setup>
import {useRetrievepwStore} from "../stores/retrievepw"
const Retrievepw = useRetrievepwStore()

</script>

<template>
     <div class="container">
        <h2>輸入新密碼</h2>
        <div class="login_form">
            <div>
                <h2>帳號:{{Retrievepw.account}}</h2>
            </div>
            <div>
                <label>驗證碼:</label>
                <input v-model="Retrievepw.verify.password"/>
            </div>
            <div>
                <label>新密碼:</label>
                <input v-model="Retrievepw.verify.newPassword"/>
            </div>
            <div>
                <label>確認密碼:</label>
                <input v-model="Retrievepw.verify.checkPassword"/>
            </div>
            <div>
                <button @click="Retrievepw.test2">傳送</button>
            </div>
        </div>
    </div>

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


</style>