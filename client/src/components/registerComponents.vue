<script setup>
import { ref,reactive ,computed} from 'vue';
import {useRegisterStore} from "../stores/registerStore"
import registerWarm from '../components/registerWarm.vue'
const registerStore = useRegisterStore()
</script>


<template>
    <Transition name="bounce" >
    <p v-if="registerStore.show" class="warmView">
        <registerWarm/>
    </p>
    </Transition>
   
    <div class="container">
        <h2>註冊會員</h2>
        <div class="regist_form">
            <div class="group">
                <label for="user_account">創建帳號:</label>
                <input type="email" name="" id="user_account" placeholder="請輸入電子信箱" 
                    v-model="registerStore.data.account" 
                    v-on:keyup="registerStore.AccountP();registerStore.registControl();" 
                />
                <p :class="['ac_error',{open:registerStore.accountControl}]" :style="{color:registerStore.accountColor}" v-text="registerStore.accountWarn"></p>
                <button class='check' v-on:click="registerStore.checkAccount">確認</button>
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
                v-model="registerStore.data.doublePassword"
                />
            </div>
            <div class="group">
                <label for="user_name">你的暱稱:</label>
                <input type="text" name="" id="user_name" 
                    v-model="registerStore.data.name" 
                />
            </div>
            <div class="btn-group">
                <!-- <button class="btn" :disabled='registerStore.isDisabled' v-on:click="registerStore.registerButton">註冊</button> -->
                <button class="btn"  v-on:click="registerStore.checkRegisterInfo">註冊</button>
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
            >.check{
                border: 1px solid black;
                position: absolute;
                top:20%;
                left:90%;
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
            >.check{
                border: 1px solid black;
                position: absolute;
                left:70%
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