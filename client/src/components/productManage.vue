<script setup>
import adminSearchBar from '../components/adminSearchBar.vue'
import categoryDetail from '../components/categoryDetail.vue'
</script>

<template>
    <div class="admin_content">
        <p>商品管理</p>
        <adminSearchBar />
        <categoryDetail />
    </div>


</template>
<style scoped>
.admin_content{
    display: flex;
    flex-direction: column;
}
p{
    font-size: 1.5rem;
}

</style>