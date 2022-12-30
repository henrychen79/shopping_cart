<script setup>
import Header from '../components/Header.vue'
import Article from '../components/HomeView/Article.vue'
import Aside from '../components/HomeView/Aside.vue'


</script>

<template>

  <Header />

  <main class="main">

    <Aside />
    <Article />

  </main>

</template>
<style scoped>
.main {
  display: flex;
  /* background-color: aquamarine; */
}
</style>
