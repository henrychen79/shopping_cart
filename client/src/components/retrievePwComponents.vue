<script setup>
import {useRetrievepwStore} from "../stores/retrievepw"
const Retrievepw = useRetrievepwStore()

</script>

<template>
     <div class="container">
        <h2>忘記密碼</h2>
        <div class="login_form">
            <div class="group">
                <label for="user_id">請輸入您的註冊帳號(email)，我們將寄暫時密碼給您:</label>
                <input type="text" name="" id="user_id" >
            </div>
            <div class="btn-group">
                <button class="btn" @click="Retrievepw.test">寄送</button>
                <button class="btn">取消</button>
            </div>
        </div>
    </div>

</template>

<style lang="scss" scoped>
@media screen and (min-width: 320px){
    .container{
    // border: 2px solid black;
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