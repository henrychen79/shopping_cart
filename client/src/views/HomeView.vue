<script setup>
import Header from '../components/Header.vue'
import Article from '../components/HomeView/Article.vue'


</script>

<template>

  <Header />

  <main class="main">
    <!-- <aside class="aside"></aside> -->
    <Article />
  </main>

</template>
<style scoped>
.main {
  /* display: flex; */
  max-width: 1240px;
  margin: auto;
  /* background-color: aquamarine; */
}
</style>
