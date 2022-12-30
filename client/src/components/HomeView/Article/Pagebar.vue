<script setup>
import { computed, ref } from "vue"
import { productStore } from '../../../stores/productStore'

const pd = productStore();


</script>

<template>
    <!-- {{ pd.crrentPage }}
    {{ pd.showPages }} -->
    <ul class="pagination">
        <li @click="pd.btnLeft"><a href="#">«</a></li>
        <li v-for="pageNumber in pd.showPages" @click="pd.crrentPage = pageNumber">
            <a href="#" :class="{ active: pageNumber === pd.crrentPage }"> {{ pageNumber }} </a>
        </li>
        <li @click="pd.btnRight"><a href="#">»</a></li>
    </ul>
</template>

<style scoped >
ul.pagination {
    display: inline-block;
    padding: 0;
    margin: 0;
}

ul.pagination li {
    display: inline;
}

ul.pagination li a {
    color: black;
    float: left;
    padding: 8px 16px;
    text-decoration: none;
    border-radius: 50%;
}

ul.pagination li a.active {
    background-color: #6f76c9;
    color: white;
    border-radius: 50%;
}

ul.pagination li:focus {
    background-color: #9899ac;
    color: white;
    border-radius: 50%;
}

ul.pagination li a:hover:not(.active) {
    background-color: #ddd;
}
</style>
