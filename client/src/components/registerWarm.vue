<script setup>
import { ref,reactive ,computed} from 'vue';
import {useRegisterStore} from "../stores/registerStore"
const registerStore = useRegisterStore()

</script>

<template>
    <div class='warmMain'>
        <div class="warmText">
            <p v-text="registerStore.warmText"></p>
        </div>
        <div class="warmBtn">
            <button v-on:click="registerStore.warmTextFn">確定</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.warmMain{
    // position: absolute;
    // border: 1px solid black;
    // border-radius: 5px;
    // background-color: white;
    // top:50%;
    // left: 50%;
    // transform: translate(-50%,-50%);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    // width: 400px;
    // height: 200px;
    // z-index: 1;
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
// .warmOpen{
//     display:none;
// }

</style>