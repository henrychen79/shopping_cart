<script setup>
import { ref, defineProps, defineEmits} from 'vue'
import { orderStore } from '../../stores/orderManageStore'
const os = orderStore();



</script>

<template>
    <p>訂單管理</p>
    <div class="search-bar">
        <input v-model="os.orderInput" placeholder="請輸入訂單編號" >
        <button @click="os.fetchOrder">搜尋</button>
    </div>


</template>
<style scoped>
p{
    font-size: 1.5rem;
}

.search-bar {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    height: 80px;
    background-color: #e5e5e5;
}
</style>