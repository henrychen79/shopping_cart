<script setup>

import { reactive, ref } from '@vue/reactivity'
import { useRoute } from 'vue-router'
import { watch } from '@vue/runtime-core'

const route = useRoute()
const productInfoData = ref({});
const showData = ref(false);
const quentity = ref(1)
const imgURL = ref('')
// const fetchURL = 'http://172.20.10.4:8080'
const fetchURL = 'http://127.0.0.1:8080'

const productInfoUrl = `${fetchURL}/api/product/detail?product_id=${route.params.productInfoID}`

const productImgUrl = `${fetchURL}/api/product/image?category_id=${route.params.category}&product_id=${route.params.productInfoNum}&type=original`

const addCatUrl = `${fetchURL}/api/cart/addToCart`

console.log("productImgUrl----", productImgUrl);
const postData = reactive({
    'user_id': 1,
    // 'category_id': route.params.category,
    'product_id': route.params.productInfoID,
    'quantity': quentity

})

const productInfo = async () => {
    let data = await fetch(productInfoUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => {
            return response.json()
        })
        .then(function (res) {
            return res
        })
        .catch((error) => {
            console.error('productInfoUrlError:', error);
        });
    productInfoData.value = data;
    showData.value = true
}



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


//加入購物車
const addCart = async () => {
    console.log('送出購物車', postData.product_id);
    postData.product_id = productInfoData.value[0].id;
    let data = await fetch(addCatUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData)
    })
        .then(response => response.json())
        .then(function (res) {
            console.log(res);
            // 告訴她送出成功
            return res
        })
        .catch((error) => {
            console.error('productInfoUrlError:', error);
        });
}

productInfo();
productImg();

// let items = JSON.parse(localStorage.getItem('shoppingcart')) || [];

// const addCart = () => {

//     const localStore = {
//         'product_id': 1,
//         'quantity': Number(quentity.value)
//     }
//     items.push(localStore)
//     localStorage.setItem('shoppingcart', JSON.stringify(items))
// }


</script>

<template>
    <article class="article">
        <div class="container">
            <div v-if="!showData">Loading</div>

            <div class="item" v-if="showData">
                {{ productInfoData }}
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

    .container {
        width: 90%;

        .item {
            width: 100%;
            aspect-ratio: 2 / 1;
            max-height: 25rem;
            display: flex;
            flex-direction: row;

            gap: calc((100% - 30rem - 40%)/2);

            .itemImg {
                padding: 1rem;
                width: 60%;
                max-width: 30rem;
                max-height: 25rem;
                background-color: antiquewhite;
            }

            .itemInfo {
                padding: 1rem;
                display: flex;
                width: 40%;
                flex-direction: column;
                justify-content: space-between;

                h1 {
                    font-size: 1.5rem;
                }

                h2 {
                    font-size: 1.2rem;
                }

                .product-quantity {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    height: 2rem;

                }
            }
        }

        .itemContent {
            align-self: flex-start;
            padding: 1rem;
        }
    }


}

img {
    width: 100%;
    height: 100%;
}

@media only screen and (max-width: 452px) {
    .article {
        .container {
            .item {
                flex-wrap: wrap;

                .itemImg {
                    padding: 1rem;
                    width: 100%;
                    aspect-ratio: 1 / 1;
                    max-height: 25rem;
                    background-color: rgb(37, 26, 13);
                }

                .itemInfo {
                    width: 100%;
                    gap: 0.6rem;
                }
            }
        }
    }
}
</style>
