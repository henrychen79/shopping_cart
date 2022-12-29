<script setup>
import Product from './Article/Product.vue'
import Pagebar from './Article/Pagebar.vue'

const item = [1, 2, 3, 4, 5, 6, 7, 8]

</script>

<template>

    <article class="article">
        <div class="cards">
            <Product v-for="i in item">
                <template #name>商品名稱</template>
                <template #price>$價錢</template>
            </Product>
        </div>

        <pagebar />
    </article>


</template>
<style scoped>
.article {
    /* max-width: 1200px; */
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;

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
