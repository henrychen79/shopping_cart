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
    // width: 400px;
    // height: 200px;
    // z-index: 1;
}
// .warmOpen{
//     display:none;
// }

</style>