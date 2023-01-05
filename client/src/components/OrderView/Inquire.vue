<script setup>
import { ref,reactive ,computed} from 'vue';
import {userOrderStore} from "../../stores/orderStore"
const orderStore = userOrderStore();
orderStore.orederTest()

</script>

<template>
    <div class="orderInfo">
        <button v-on:click="orderStore.test">點我傳送</button>
    </div>
</template>

<style lang="scss" scoped>
.orderInfo{
    // border: 2px solid red;
    width: 80%;
    height: 70%;
    margin: auto 2rem;
}

</style>