<script setup>
import { productStore } from '../../stores/productStore'

const ps = productStore();


</script>

<template>

    <aside class="aside">
        <ul class="productBar">
            <p>商品分類</p>
            {{ ps.currentCategory }}
            <li v-for="item in ps.totalCategoryList" @click="ps.currentCategory = item"><a href="#">{{ item
                    }}</a></li>
        </ul>
    </aside>

</template>
<style scoped>
.aside {
    flex: 1;
    display: flex;
    justify-content: center;
}

ul.productBar {
    display: flex;
    flex-direction: column;
    padding-top: 16px;
}

ul>p {
    font-size: 1.2rem;
}

ul.productBar li {
    padding: 10px 0;
}

ul.productBar li a {
    text-decoration: none;
    color: rgb(25, 25, 25);
    font-size: 1rem;
}
</style>
