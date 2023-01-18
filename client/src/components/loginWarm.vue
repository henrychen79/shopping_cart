<script setup>
import { ref,reactive ,computed} from 'vue';
import {useloginStore} from "../stores/loginStore"
const loginStore = useloginStore()


</script>

<template>
    <div class='warmMain'>
        <div class="warmText">
            <p v-text="loginStore.loginwarmText"></p>
        </div>
        <div class="warmBtn">
            <button v-on:click="loginStore.warmView">確定</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.warmMain{
    // border: 2px solid black;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.warmBtn{
    margin-top: 20px; 
    >button{
        // margin-right: 30px;
        margin-bottom: 20px;
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


</style>