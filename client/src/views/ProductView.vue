<script setup>
import Header from '../components/Header.vue'
import ProductInfo from '../components/ProductView/productInfo.vue'
import Aside from '../components/HomeView/Aside.vue'


</script>

<template>

    <Header />

    <main class="main">

        <Aside />
        <ProductInfo />

    </main>

    <Footer />
</template>
<style scoped>
.main {
    display: flex;
    height: 100%;
    flex-grow: 1;

}
</style>
