<script setup>
import { ref, defineProps, defineEmits} from 'vue'
import { orderStore } from '../../stores/orderManageStore'
const os = orderStore();



</script>

<template>
    <p>訂單管理</p>
    <div class="search-bar">
        <button @click="os.fetchOrder">顯示所有訂單</button>
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