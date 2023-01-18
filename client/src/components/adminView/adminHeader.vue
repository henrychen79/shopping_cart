<script setup></script>

<template>
  <header>
    <div id="logo">
      <router-link to="/">
        <h1>BOWA</h1>
      </router-link>
    </div>
    <ul class="headerBar">
      <li>你好! 管理員</li>
    </ul>
  </header>
</template>
<style scoped>
header {
  display: flex;
  justify-content: space-between;
}

ul.headerBar {
  display: flex;
  /* gap: 1rem; */
}

ul.headerBar li a {
  text-decoration: none;
  color: rgb(25, 25, 25);
  font-size: 1.5rem;
}

ul.headerBar li {
  margin: 1rem 0;
  padding: 0 1rem;
}

ul li:not(:nth-child(1)) {
  /* background-color: aqua; */
  border-left: 1px solid rgb(25, 25, 25);
}

h1 {
  margin: 0 1rem;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  cursor: pointer;
}
</style>
