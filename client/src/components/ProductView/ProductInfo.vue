<script setup>

import { reactive, ref } from '@vue/reactivity'
import { useRoute } from 'vue-router'
import { onBeforeMount, watch, watchEffect } from '@vue/runtime-core'

const route = useRoute()
const productInfoData = ref({});
const showData = ref(false);
const quentity = ref(0)
const imgURL = ref('')
const fetchURL = 'http://172.20.10.4:8080'

const productInfoUrl = `${fetchURL}/api/product?category_id=${route.params.category}&product_num=${route.params.productInfoID}`
const productImgUrl = `${fetchURL}/api/product/image?category_id=${route.params.category}&product_id=${route.params.productInfoID}&type=original`


const postData = reactive({
    'userId': 'rec27@gmail.com',
    'category': route.params.category,
    'productNum': route.params.productInfoID,
    'quentity': quentity

})

const productInfo = async () => {
    let data = await fetch(productInfoUrl, {
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
            console.error('productInfoUrlError:', error);
        });
    productInfoData.value = data
}

watch(productInfoData, (curVal) => {
    if (curVal) { showData.value = true }
})

const productImg = async () => {
    let data = await fetch(productImgUrl, { method: 'GET' })
        .then(response => response.blob())
        .then(function (res) {
            // 將 blog 物件轉為 url
            imgURL.value = URL.createObjectURL(res)
            return res
        })
        .catch((error) => {
            console.error('imgURLError:', error);
        });
}

productInfo();
productImg();
</script>

<template>
    <article class="article">
        <div v-if="!showData">Loading</div>
        <div class="item" v-if="showData">
            <div class="itemImg"><img :src="imgURL" alt="Loading..."></div>
            <div class="itemInfo">
                <h1>{{ productInfoData[0].productName }}</h1>
                <h2>${{ productInfoData[0].price }}</h2>
                <p>庫存數量 {{ productInfoData[0].inventory }}</p>
                <div>
                    <span>數量</span>
                    <select v-model="quentity">
                        <option value="1" selected>1</option>
                        <option value="2">2</option>
                    </select>
                </div>
                <button @click="addCart">放入購物車</button>
            </div>
        </div>
        <div class="itemContent" v-if="showData">
            <p>商品規格</p>
            <p>{{ productInfoData[0].detail }}</p>
        </div>
    </article>


</template>
<style scoped lang="scss">
.article {
    margin: 0 auto;
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 5;

    gap: 2rem;

    .item {
        width: 100%;
        display: flex;
        flex-direction: row;
        gap: 5rem;

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
    }

    .itemContent {
        align-self: flex-start;
    }
}

img {
    width: 100%;
    height: 100%;
}
</style>
