<script setup></script>

<template>
  <aside id="sidebar">
    <section id="side-title">功能</section>
    <RouterLink to="/admin"
      ><section id="side-item">商品管理</section></RouterLink
    >
    <RouterLink to="/admin/ordermanage"
      ><section id="side-item">訂單管理</section></RouterLink
    >
    <RouterLink to="/admin/usermanage"
      ><section id="side-item-btm">用戶管理</section></RouterLink
    >
  </aside>
</template>
<style scoped>
#sidebar {
  background-color: #e5e5e5;
  margin-top: 5%;
  width: 90%;
  border-radius: 10px;
}
#side-title {
  display: flex;
  font-size: 1.5rem;
  justify-content: center;
  border-bottom-style: solid;
  border-radius: 10px 10px 0px 0px;
}
#side-item {
  display: flex;
  font-size: 1.5rem;
  justify-content: center;
}
#side-item:hover {
  background-color: rgb(243, 242, 242);
}
#side-item-btm {
  display: flex;
  font-size: 1.5rem;
  justify-content: center;
  border-radius: 0px 0px 10px 10px;
}
#side-item-btm:hover {
  background-color: rgb(243, 242, 242);
}
</style>
