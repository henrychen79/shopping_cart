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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
 
}


</style>