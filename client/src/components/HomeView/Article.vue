<script setup>
import Product from './Article/Product.vue'
import Pagebar from './Article/Pagebar.vue'
import { productStore } from '../../stores/productStore'
import { ref } from '@vue/reactivity';

const ps = productStore();



</script>

<template>
    <article class="article">
        <div class="productSort">
            {{ ps.totalCategoryList }}
            <p>商品排序</p>
            <span>價格</span>
            <input type="radio" name='price'> <span>由高到低</span>
            <input type="radio" name='price'> <span>由低到高</span>
        </div>
        <div class="cards">
            <Product v-for="item in ps.productData">
                <template #name>{{ item.productName }}</template>
                <template #price>${{ item.price }}</template>
            </Product>
        </div>

        <pagebar />
    </article>


</template>
<style scoped>
.productSort {
    align-self: flex-start;
    padding: 0 18px;
    display: flex;
    gap: 2px;
}

.productSort>p,
.productSort>span {
    margin-right: 8px;
}

.article {
    /* max-width: 1200px; */
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 5;
}

.cards {
    display: flex;
    flex-wrap: wrap;
    list-style: none;
    margin: 0;
    padding: 0;
    /* background-color: #EF8D9C; */
    /* border: #9f4d1b solid 1px; */
}
</style>
