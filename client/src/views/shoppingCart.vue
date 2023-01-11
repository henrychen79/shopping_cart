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
            <div class="box"><router-link to="/shoppingCart">購物車</router-link></div>
            <div class="line"></div>
            <div class="box"><router-link to="/shoppingCart/shippingInfo">寄送<br>資訊</router-link></div>
            <div class="line"></div>
            <div class="box"><router-link to="/shoppingCart/paymentInfo">付款<br>資訊</router-link></div>
            <div class="line"></div>
            <div class="box"><router-link to="/shoppingCart/orderInfo">訂單<br>成立</router-link></div>
        </div>

        <RouterView />

    </main>

    <Footer />
</template>
<style scoped lang="scss">
.box {
    width: 3rem;
    height: 3rem;
    background-color: var(--black);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    a {
        font-size: 0.8rem;
        color: var(--white);
    }

    &:has(.router-link-exact-active) {
        background-color: var(--black);
    }

    &:has(.router-link-exact-active)~.box {
        background-color: var(--grey);

        a {
            color: var(--black);
        }
    }

    &:has(.router-link-exact-active)~.line {
        border-top: 5px solid var(--grey);
    }

    .router-link-exact-active {
        color: var(--white);
    }
}

.line {
    width: 2rem;
    border-top: 5px solid var(--black);
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
        align-items: center;

        div a {
            cursor: default;
            pointer-events: none;
        }
    }
}
</style>
