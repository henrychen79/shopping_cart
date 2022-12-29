<script setup>
import { computed, ref } from "vue"


const props = defineProps({
    totalProduct: Number
})

// const emit = defineEmits(['change', 'delete'])


const product = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const perPage = 1;//每頁顯示
let numberOfPages = Math.ceil(product.length / perPage);
const targetPage = ref(1);
const pageNum = props.totalProduct;
const pp = [1, 2, 3, 4];
// 待修
let c = computed(() => {
    let firstpage = ref(targetPage.value);
    if (firstpage.value <= 2) {
        firstpage.value = 2
    }
    if (firstpage.value >= pp.length - 1) {
        firstpage.value = pp.length - 1
    }

    return pp.slice(firstpage.value - 2, firstpage.value + 1)
})


function right() {
    return targetPage.value >= pageNum ? pageNum : targetPage.value += 1
}
function left() {
    return targetPage.value <= 1 ? 1 : targetPage.value -= 1
}




</script>

<template>
    <!-- {{ totalProduct }} -->
    <!-- {{ targetPage }} -->
    <ul class="pagination">
        <li @click="left"><a href="#">«</a></li>
        <li v-for="pageNumber in c" @click="targetPage = pageNumber">
            <a href="#" :class="{ active: pageNumber === targetPage }"> {{ pageNumber }} </a>
        </li>
        <li @click="right"><a href="#">»</a></li>
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
