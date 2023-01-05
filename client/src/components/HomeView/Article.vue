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
            <p>商品排序</p>
            <span>價格</span>
            <input type="radio" name='price'> <span>由高到低</span>
            <input type="radio" name='price'> <span>由低到高</span>
        </div>
        <div class="cards">
            <Product v-for="item in ps.productData">
                <template #img>
                    {{ item.productNum }}
                    <RouterLink
                        :to="{ name: 'product', params: { category: `${ps.currentCategory}`, productInfoID: `${item.productNum}` } }">
                        <img src="" alt="" style="height:100%;width:100%">
                    </RouterLink>
                </template>
                <template #name>{{ item.productName }}</template>
                <template #price>${{ item.price }}</template>
            </Product>
        </div>

        <pagebar v-if="productData" />
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
