<script setup>
import adminHeader from '../components/adminView/adminHeader.vue'
import adminSidebar from '../components/adminView/adminSidebar.vue'
import editProduct from '../components/editProduct.vue'


</script>

<template>

  <adminHeader />
  <div id="web_content">
      <div class="admin_side">
        <adminSidebar />
      </div>
      <div class="admin_main">
        <editProduct />
      </div>
  </div>

</template>
<style scoped>
#web_content{
  display: flex;
  flex-direction: row;
  width: 100%;
}
.admin_side{
  background-color: var(--white-soft);
  width: 25%;
}
.admin_main {
  background-color: var(--white-soft);
  width: 75%;
}
</style>