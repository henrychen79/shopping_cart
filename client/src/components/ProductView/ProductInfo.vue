<script setup>

import { ref } from '@vue/reactivity'
import { useRoute } from 'vue-router'
import { onBeforeMount, watch } from '@vue/runtime-core'

const route = useRoute()
const productInfoData = ref({});
const showData = ref(false);

const url = `http://172.20.10.4:8080/api/product?category_id=${route.params.category}&product_num=${route.params.productInfoID}`


const productInfo = async () => {
    let data = await fetch(url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .then(function (res) {
            return res

        })
        .catch((error) => {
            console.error('Error:', error);
        });
    productInfoData.value = data
}

watch(productInfoData, (curVal) => {
    if (curVal) { showData.value = true }
})

productInfo()

</script>

<template>
    <article class="article">

        <div v-if="!showData">Loading</div>

        <div v-if="showData">
            <div class="item">
                <div class="itemImg"><img src="" alt=""></div>
                <div class="itemInfo">
                    <h1>{{ productInfoData[0].productName }}</h1>
                    <h2>${{ productInfoData[0].price }}</h2>
                    <p>庫存數量 {{ productInfoData[0].inventory }}</p>
                    <div>
                        <span>數量</span>
                        <select>
                            <option>1</option>
                        </select>
                    </div>
                    <button>放入購物車</button>
                </div>
            </div>
            <div class="itemContent">
                <p>商品規格</p>
                <p>{{ productInfoData[0].detail }}</p>
            </div>
        </div>
    </article>


</template>
<style scoped>
.article {
    margin: 0 auto;
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 5;
    gap: 2rem
}

.item {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 5rem;
}

.itemImg {
    width: 30rem;
    height: 25rem;
    background-color: antiquewhite;
}

.itemInfo {
    display: flex;
    flex-direction: column;
    gap: 3rem;
}

.itemContent {
    align-self: flex-start;
}
</style>
