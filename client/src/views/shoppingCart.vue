<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import { reactive, ref } from '@vue/reactivity'
import { RouterLink, RouterView } from 'vue-router'
import { cartStore } from "../stores/cartStore"

const cs = cartStore();

</script>

<template>

    <Header />

    <main class="main">

        <div class="progressBar">
            <div>購物車</div>
            <div>-</div>
            <div>寄送資訊</div>
            <div>-</div>
            <div>付款資訊</div>
            <div>-</div>
            <div>訂單成立</div>
        </div>

        <RouterView />

    </main>

    <Footer />
</template>
<style scoped lang="scss">
a:active {
    color: aqua;
}

.main {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    gap: 1rem;

    div.progressBar {
        display: flex;

    }



}
</style>
