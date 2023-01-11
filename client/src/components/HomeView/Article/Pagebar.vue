<script setup>
import { computed, ref } from "vue"
import { productStore } from '../../../stores/productStore'

const pd = productStore();
console.log('page here', pd.crrentPage);

</script>

<template>
    {{ pd }}
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
    /* margin-top: auto; */
    margin-bottom: 1rem;
    align-self: center;
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
    background-color: var(--grey);
    color: var(--black-soft);
    border-radius: 50%;
}

ul.pagination li:focus {
    background-color: var(--grey);
    color: var(--black-soft);
    border-radius: 50%;
}

ul.pagination li a:hover:not(.active) {
    background-color: var(--grey);
}
</style>
