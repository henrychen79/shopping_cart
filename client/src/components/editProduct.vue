<script setup>
import { ref, reactive, computed } from 'vue';
import { useRoute } from 'vue-router';
import { editProductStore } from "../stores/editProductStore"
import router from '../router';
import {addProductStore} from "../stores/addProductStore"
const addProduct = addProductStore();;
addProduct.getCategory();

const editProduct = editProductStore()

console.log(editProduct.data)


</script>

<template>
    <div class="admin_content">
        <p>商品管理 \ 編輯商品</p>
        <div class="add_form">
            <div class="form_item">
                <p>商品類別</p>
                <select v-model="editProduct.data.category" disabled>
                    <option disabled value="">商品類別</option>
                    <option v-for="(item, index) in addProduct.productCategory" :key="item">{{ item.category }}</option>
                </select>
            </div>
            <div class="form_item">
                <p>商品編號</p>
                <input v-model="editProduct.data.productNum" disabled/>
            </div>
            <div class="form_item">
                <p>商品名稱</p>
                <input v-model="editProduct.data.productName" />
            </div>
            <div class="form_item">
                <p>商品圖片</p>
                <input type="file" class="upload" name="imgUpload" accept="image/png, image/jpeg"  @change="editProduct.dealfilechange" />
                <button @click="editProduct.uploadImg">上傳</button>
            </div>
            <div class="form_item">
                <p>商品價格</p>
                <input v-model="editProduct.data.price" />
            </div>
            <div class="form_item">
                <p>商品庫存</p>
                <input v-model="editProduct.data.inventory" />
            </div>
            <div class="form_item">
                <p>商品描述</p>
                <textarea v-model="editProduct.data.detail"></textarea>
            </div>
            <div class="form_item">
                <button v-on:click="editProduct.update">儲存</button>
                <a href="/admin"><button>回前頁</button></a>
            </div>
        </div>
    </div>


</template>
<style scoped>
.admin_content {
    display: flex;
    flex-direction: column;
}

p {
    font-size: 1.5rem;
}

.add_form {
    width: 100%;
    height: 500px;
    border-style: solid;
}

.form_item {
    display: flex;
    flex-direction: row;
}
</style>