<script setup>
import { ref, defineProps, defineEmits} from 'vue'
import {adminProductStore} from "../stores/adminProductStore"
const aps = adminProductStore()


</script>

<template>

    <header>
        <div class="search-bar">
            <div class="twoSearchBar">
             <div class="searchRow">
                 <p>僅搜尋商品種類:</p>
                 <select v-model="aps.fetchCategory1">
                    <option disabled value="">商品類別</option>
                    <option>001</option>
                    <option>002</option>
                 </select>
                 <button @click="aps.getDetail">搜尋</button>
             </div>
             <div class="searchRow">
                 <p>搜尋商品種類&編號:</p>
                 <select v-model="aps.fetchCategory2" >
                    <option disabled value="">商品類別</option>
                    <option>001</option>
                    <option>002</option>
                 </select>
                 <input v-model="aps.fetchProductNum" placeholder="請輸入商品編號" >
                 <button @click="aps.getTwoDetails" >搜尋</button>
             </div>
            </div>
            <div>
                <a href="/admin/addproduct"><div class="addProduct">+ 新增商品</div></a>
            </div>
        </div>
    </header>

</template>
<style scoped>
.search-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 80px;
    background-color: #e5e5e5;
}
.twoSearchBar{
    display: flex;
    flex-direction: column;
}
.searchRow{
    display: flex;
    flex-direction: row;
}

.addProduct {
    display: flex;
    justify-content: center;
    width: 150px;
    height: 50%;
    color: #ffffff;
    background-color: #253F83;
}
</style>