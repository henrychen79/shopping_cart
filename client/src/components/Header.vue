<script setup>
import { ref, watch } from "@vue/runtime-core";

</script>

<template>
    {{ items }}
    <header>
        <div id="logo">
            <img src="" alt="">
        </div>
        <ul class="headerBar">

            <li>你好!</li>
            <li><router-link to="/login">登入</router-link></li>
            <li><router-link to="/register">註冊</router-link></li>
            <li><router-link to="/member">會員中心</router-link></li>
            <li><a href="#">訂單查詢</a></li>
            <li>
                <router-link to="/shoppingCart">購物車</router-link>
            </li>
        </ul>

        <ul class="headerBar-mobile">

            <li>你好!</li>
            <li><a href="#">登入</a></li>
            <li><a href="#">註冊</a></li>
            <li><a href="#"><font-awesome-icon icon="fas fa-user-alt" /></a></li>
            <li><a href="#"><font-awesome-icon icon="fas fa-clipboard-list" /></a></li>
            <li><router-link to="/shoppingCart"><font-awesome-icon icon="fas fa-shopping-cart" /></router-link></li>
        </ul>
    </header>


</template>
<style scoped lang="scss">
header {
    display: flex;
    justify-content: space-between;
    background-color: var(--grey);
    max-height: 3rem;

    ul.headerBar {
        display: flex;
        align-items: center;
        font-size: var(--text-m);
        /* gap: 1rem; */

        li:not(:nth-child(1)) {
            border-left: 1px solid rgb(25, 25, 25);
        }

        li {
            margin: 1rem 0;
            padding: 0 1rem;
        }

        li a {
            text-decoration: none;
            color: rgb(25, 25, 25);
        }
    }
}


header ul.headerBar-mobile {
    display: none;
}


@media only screen and (max-width: 452px) {
    header ul.headerBar {
        display: none;
    }

    header ul.headerBar-mobile {
        display: block;
        display: flex;
        justify-content: space-between;
        background-color: var(--grey);
        max-height: 3rem;
    }

    ul.headerBar-mobile {
        display: flex;
        align-items: center;
        font-size: var(--text-s);
        /* gap: 1rem; */

        li:not(:nth-child(1)) {
            border-left: 1px solid rgb(25, 25, 25);
            ;
        }

        li {
            margin: 0.5rem 0;
            padding: 0 0.5rem;
        }

        li a {
            text-decoration: none;
            color: rgb(25, 25, 25);
        }
    }
}
</style>
