<script setup>
import { ref,reactive ,computed} from 'vue';
import loginWarm from '../components/loginWarm.vue'
import {useloginStore} from "../stores/loginStore"

const loginStore = useloginStore()


</script>

<template>
    <Transition name="bounce" >
        <p v-if="loginStore.show" class="warmView">
            <loginWarm/>
        </p>
    </Transition>
    <div class="container">
        <h2>會員登入</h2>
        <div class="login_form">
            <div class="group">
                <label for="user_account">帳號:</label>
                <input type="text" name="user_account" id="user_account" v-model="loginStore.userData.account" >
            </div>
            <div class="group">
                <label for="user_password">密碼:</label>
                <input type="text" name="user_password" id="user_password" v-model="loginStore.userData.password" >
            </div>
            <div class="special_req">
                <RouterLink to="/register" class="test">點我註冊</RouterLink>
                <RouterLink to="/retrieve" class="test">忘記密碼</RouterLink>
            </div>
            <div class="btn-group">
                <button class="btn" @click="loginStore.login">登入</button>
                <button class="btn">取消</button>
            </div>
        </div>
    </div>
<!-- <loginWarm/> -->
<!-- <button class="btn" @click="loginStore.test">帶token測試</button> -->
</template>

<style lang="scss" scoped>
@media screen and (min-width: 320px){
    .container{
    // border: 2px solid black;
    width: 100%;
    height: 100%;
    >h2{
        margin-top: 20px;
        margin-bottom: 0px;
        padding-left:45px ;
        font-weight:bold;
        text-shadow: 1px 1px rgb(122, 121, 121)
    }
    >.login_form{
        padding-top: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        
        >.group{
            margin-bottom: 20px;
            >input{
                margin-left: 10px;
            }
        }
        >.special_req{
            >.test{
                margin: 10px;
                font-size: 12px;
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
    >.login_form{
        padding-top: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        
        >.group{
            margin-bottom: 20px;
            display: flex;
            justify-content: flex-end;
            // align-items: center;
            flex-direction: column;
            >input{
                border:none;
                outline: none;
                border-bottom: 1px solid #000
            }
        }
        >.special_req{
            >.test{
                margin: 10px;
                font-size: 12px;
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
    width: 300px;
    height: 300px;
    z-index: 1;
}



</style>