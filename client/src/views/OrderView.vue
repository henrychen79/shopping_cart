<script setup>
import Header from '../components/Header.vue'
import Inquireinfo from '../components/OrderView/Inquire.vue'

</script>

<template>
    <Header/>
    <div class="main">
        <h1>訂單查詢</h1>
        <Inquireinfo/>
    </div>

</template>

<style lang="scss" scoped>
h1{
    margin:10px 2rem;
}
.main{
    border: 2px solid black;
    width: 100%;
    height: 70%;
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%,-50%);
}
</style>