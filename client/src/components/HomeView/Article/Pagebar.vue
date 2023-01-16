<script setup>
import { computed, ref } from "vue"
import { productStore } from '../../../stores/productStore'

const ps = productStore();


</script>

<template>
    <ul class="pagination">
        <li @click="ps.btnLeft"><a href="#">«</a></li>
        <li v-for="pageNumber in ps.showPages" @click="ps.crrentPage = pageNumber">
            <a href="#" :class="{ active: pageNumber === ps.crrentPage }"> {{ pageNumber }} </a>
        </li>
        <li @click="ps.btnRight"><a href="#">»</a></li>
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
