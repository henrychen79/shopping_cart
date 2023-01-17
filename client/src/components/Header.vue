<script setup>
import { ref, watch } from "@vue/runtime-core";
import { useloginStore } from "../stores/loginStore";
const us = useloginStore();
</script>

<template>
  <header>
    <div id="logo">
      <router-link to="/">
        <h1>BOWA</h1>
      </router-link>
    </div>
    <ul class="headerBar">
      <li v-if="!us.islogin">你好 顧客!</li>
      <li v-else>你好 {{ us.nickname }}!</li>
      <li v-if="!us.islogin"><router-link to="/login">登入</router-link></li>
      <li v-else>登出</li>
      <li><router-link to="/register">註冊</router-link></li>
      <li><router-link to="/member">會員中心</router-link></li>
      <li><router-link to="/order">訂單查詢</router-link></li>
      <li>
        <router-link to="/shoppingCart">購物車</router-link>
      </li>
    </ul>

    <ul class="headerBar-mobile">
      <li>你好!</li>
      <li><a href="#">登入</a></li>
      <li><a href="#">註冊</a></li>
      <li>
        <a href="#"><font-awesome-icon icon="fas fa-user-alt" /></a>
      </li>
      <li>
        <a href="#"><font-awesome-icon icon="fas fa-clipboard-list" /></a>
      </li>
      <li>
        <router-link to="/shoppingCart"
          ><font-awesome-icon icon="fas fa-shopping-cart"
        /></router-link>
      </li>
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

h1 {
  margin: 0 1rem;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  cursor: pointer;
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
