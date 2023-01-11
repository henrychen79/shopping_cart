<script setup>
import { ref, reactive, computed, defineProps, defineEmits } from 'vue';
import { adminProductStore } from "../stores/adminProductStore";
import { editProductStore } from "../stores/editProductStore";
import editPrice from '../components/editPrice.vue';
import editInventory from '../components/editInventory.vue'
const eps = editProductStore();
const aps = adminProductStore();
const props = defineProps(["cat"]);
const priceStatus = reactive({
    id: ref(0),
    show: ref(false),
});
const inventoryStatus = reactive({
    id: ref(0),
    show: ref(false),
});
const doc = ref('');
console.log(aps.productDetail);
function aa(p,v) {
    p.id = v
    p.show = true
}
const removeProduct=(product_id)=>{
        const url =`http://172.20.10.4:8080/api/admin/delete_product?product_id=${product_id}`
        fetch(url, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            })
            .then(function(res){
                console.log(res)
                return res.json()
            })
            .then(function(res){
                console.log('Success:', res);
            })
            .catch(function(error){
                console.error('Error:', error);
            });
            newList();
    }

    const newList = async() =>{
        console.log(props);
        const url =`http://172.20.10.4:8080/api/admin/getProducts?category=${props}`
        let data = await fetch(url, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            })
            .then(function(res){
                console.log(res)
                return res.json()
            })
            .then(function(res){
                console.log('Success:', res);
            })
            .catch(function(error){
                console.error('Error:', error);
            });
    }

</script>

<template>

    <header>
        <div class="category">
            <div class="product-item" v-for="(item, index) in aps.productDetail" :key="item.product_id" @delbtn="newList">
                <div class="product-cell-title">
                    <p>商品名稱:{{ item.productName }}</p>
                    <p>商品編號:{{ item.productNum }}</p>
                </div>
                <div class="product-cell">
                    <p>${{ item.price }}元</p>
                    <a href="#" @click="aa(priceStatus,item.product_id) ; doc = item.product_id">修改價格</a>
                    <editPrice v-if="priceStatus.id === item.product_id && priceStatus.show " :value="doc" />
                </div>
                <div class="product-cell">
                    <p>庫存:{{ item.inventory }}</p>
                    <a href="#" @click="aa(inventoryStatus,item.product_id); doc = item.product_id">修改庫存</a>
                    <editInventory v-if="inventoryStatus.id === item.product_id && inventoryStatus.show" :value="doc" />
                </div>
                <div class="product-cell-edit">
                    <a href="#" @click="eps.edit(item.product_id)">編輯</a>
                </div>
                <div class="product-cell-edit">
                    <a href="#" @click="removeProduct(item.product_id)">刪除</a>
                </div>
            </div>
        </div>
    </header>

</template>
<style scoped>
.category {
    display: flex;
    flex-direction: column;
}

.product-item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 100px;
    border-bottom-style: solid;
    background-color: rgb(243, 242, 242);
}
.product-cell-title {
    width: 40%;
}
.product-cell {
    display: flex;
    flex-direction: column;
    width: 20%;
}
.product-cell-edit {
    width: 10%;
}
</style>