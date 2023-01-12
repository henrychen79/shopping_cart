<script setup>
import {useRetrievepwStore} from "../stores/retrievepw"
const Retrievepw = useRetrievepwStore()

</script>

<template>
     <div class="container">
        <h2>忘記密碼</h2>
        <div class="retieve_form">
            <div class="group">
                <label for="user_id" >請輸入您的註冊帳號(email)，我們將寄暫時密碼給您:</label>
                <input type="text" name="" id="user_id" v-model="Retrievepw.retrieveData.account">
            </div>
            <div class="btn-group">
                <button class="btn" @click="Retrievepw.sendEmail">寄送</button>
                <button class="btn">取消</button>
            </div>
        </div>
    </div>

    <!-- <div class="warmView">
        
    </div> -->

    <Transition name="bounce">
      <!-- Retrievepw.show -->
        <p v-if="Retrievepw.show" class="warmView">
            <h2>寄送失敗，請重新確認</h2>
            <button @click="Retrievepw.show=false">取消</button>
        </p>
    </Transition>

</template>

<style lang="scss" scoped>
@media screen and (min-width: 320px){
    .container{
    // border: 2px solid rgb(226, 25, 25);
    width: 100%;
    height: 100%;
    >h2{
        margin:auto;
        padding-left:30px ;
        font-weight:bold;
        text-shadow: 1px 1px rgb(122, 121, 121)
        // text-align: center;
    }
    >.retieve_form{
        // border: 2px solid black;
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
    width: 100%;
    height: 100%;
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

 
    z-index: 1;
}


</style>