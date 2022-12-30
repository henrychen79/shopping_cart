<script setup>
import { ref,reactive ,computed} from 'vue';
import {useRegisterStore} from "../stores/registerStore"
const registerStore = useRegisterStore()
</script>


<template>
   
    <div class="container">
        <h2>註冊會員</h2>
        <div class="regist_form">
            <div class="group">
                <label for="user_account">創建帳號:</label>
                <input type="text" name="" id="user_account" placeholder="請輸入電子信箱" 
                    v-model="registerStore.data.account" 
                    v-on:keyup="registerStore.checkAccount();" 
                />
                <p :class="['ac_error',{open:registerStore.accountControl}]" :style="{color:registerStore.accountColor}" v-text="registerStore.accountWarn"></p>
            </div>
            <div class="group">
                <label for="user_password">創建密碼:</label>
                <input type="text" name="" 
                    v-on:keyup="registerStore.checkPassword" 
                    id="user_password" 
                    placeholder="需輸入8~12英數混合" 
                    v-model="registerStore.data.password"
                />
                
                <p :class="['pw_error',{open:registerStore.passControl}]" :style="{color:registerStore.fontColor}" v-text="registerStore.passwordWarn"></p>
            </div>
            <div class="group">
                <label for="check_password">確認密碼:</label>
                <input type="text" name="" id="check_password"
                v-on:keyup="registerStore.doubleCheckPassword"  
                v-model="registerStore.data.doublePassword">
            </div>
            <div class="group">
                <label for="user_name">你的暱稱:</label>
                <input type="text" name="" id="user_name" 
                    v-model="registerStore.data.name" 
                    v-on:keyup="registerStore.doubleCheckPassword" 
                />
            </div>
            <div class="btn-group">
                <button class="btn" :disabled='registerStore.isDisabled' v-on:click="registerStore.registerButton">註冊</button>
                <button class="btn" v-on:click="registerStore.checkAccount" >取消</button>
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
            >.pw_error{
                font-size: 12px;
                margin: 0;
            }&.open{
                display:none;
            }
            >.ac_error{
                font-size: 12px;
                margin: 0;
            }&.open{
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


@media screen and (max-width: 320px) {
    .container{
    border: 1px solid black;
    width: 100%;
    height: 100%;
    >h2{
        margin:auto;
        text-align: center;
    }
    >.regist_form{
        padding-top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        
        >.group{
            margin-bottom: 10px;
            display: flex;
            justify-content: flex-end;
            // align-items: center;
            flex-direction: column;
            >input{
                border:none;
                outline: none;
                border-bottom: 1px solid #000
            }
            >.pw_error{
                display: block;
                font-size: 12px;
                margin: 0;
            }&.open{
                display:block;
            }
        }
  
        >.btn-group{
           >.btn{
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            align-items: center;
            width: 200px;
            margin: 20px;
           }
        }
    }
}
}

</style>