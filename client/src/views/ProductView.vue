<script setup>
import Header from '../components/Header.vue'
import ProductInfo from '../components/ProductView/ProductInfo.vue'
import Aside from '../components/HomeView/Aside.vue'


</script>

<template>

    <Header />

    <main class="main">

        <Aside />
        <ProductInfo />

    </main>

</template>
<style scoped>
.main {
    display: flex;
    /* background-color: aquamarine; */
}
</style>
