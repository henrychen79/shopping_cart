<script setup>
import Product from './Article/Product.vue'
import Pagebar from './Article/Pagebar.vue'
import popUp from '../popUp.vue'
import { productStore } from '../../stores/productStore'
import { ref, reactive } from '@vue/reactivity';
import { watch } from '@vue/runtime-core';

const ps = productStore();

const showModal = ref(false);
const pass = ref(false);



</script>

<template>
    <div @click="productAPI2">測試按鈕</div>
    <article class="article">
        <div class="productSort">
            <p>商品排序</p>
            <span>價格</span>
            <input type="radio" name='price' value="" checked v-model="ps.sortValue"> <span>預設</span>
            <input type="radio" name='price' value="up" v-model="ps.sortValue"> <span>由低到高</span>
            <input type="radio" name='price' value="down" v-model="ps.sortValue"> <span>由高到低</span>
        </div>
        <div class="cards">
            <!-- pop-up component-->
            <popUp :show="showModal" @close="showModal = false" :ifPass="pass">
                <template #meg>
                    <h3>custom header</h3>
                </template>
            </popUp>
            <!-- <button id="show-modal" @click="showModal = true">Show Modal</button> -->
            <Product v-for="item in ps.productData" :key="item.product_id"
                :imgData="{ category: `${ps.currentCategory}`, productInfoNum: `${item.productNum}` }"
                :urlData="{ category: `${ps.currentCategory}`, productInfoID: `${item.product_id}`, productInfoNum: `${item.productNum}` }">

                <template #name>{{ item.productName }}</template>
                <template #price>${{ item.price }}</template>
            </Product>
        </div>

        <pagebar />
    </article>


</template>
<style scoped>
.article {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    flex: 5;
}

.productSort {
    align-self: flex-start;
    justify-content: flex-end;
    width: 100%;
    padding: 0 2.2rem;
    display: flex;
    gap: 2px;
    background-color: var(--grey);
    margin-top: 2rem;
}

.productSort>p,
.productSort>span {
    margin-right: 8px;
}

.cards {

    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 2rem 0;
    padding: 0;
    /* background-color: #EF8D9C; */
    /* border: #9f4d1b solid 1px; */
}
</style>
