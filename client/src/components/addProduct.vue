<script setup>
import { ref, reactive, computed, watch } from 'vue';
import { addProductStore } from "../stores/addProductStore"
const addProduct = addProductStore();;
addProduct.getCategory();

let canSubmit = true

watch(() => {
    canSubmit = Object.values(addProduct.data).some(i => i === "")
})




</script>

<template>
    <div class="admin_content">
        <p>商品管理 \ 新增商品</p>
        <div class="add_form">
            <div class="form_item">
                <p>商品類別</p>
                <select v-model="addProduct.data.category">
                    <option disabled value="">商品類別</option>
                    <option v-for="(item, index) in addProduct.productCategory" :key="item">{{ item.category }}</option>
                </select>
            </div>
            <div class="form_item">
                <p>商品編號</p>
                <input v-model="addProduct.data.productNum" />
            </div>
            <div class="form_item">
                <p>商品名稱</p>
                <input v-model="addProduct.data.productName" />
            </div>
            <div class="form_item">
                <p>商品圖片</p>
                <input type="file" class="upload" name="imgUpload" accept="image/png, image/jpeg"
                    @change="addProduct.dealfilechange" />
                <button @click="addProduct.uploadImg">上傳</button>
            </div>
            <div class="form_item">
                <p>商品價格</p>
                <input v-model="addProduct.data.price" />
            </div>
            <div class="form_item">
                <p>商品庫存</p>
                <input v-model="addProduct.data.inventory" />
            </div>
            <div class="form_item">
                <p>商品描述</p>
                <textarea v-model="addProduct.data.detail"></textarea>
            </div>
            <div class="form_item">
                <button v-on:click="addProduct.add" :disabled="canSubmit">儲存</button>
                <router-link to="/admin"><button>回前頁</button></router-link>
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