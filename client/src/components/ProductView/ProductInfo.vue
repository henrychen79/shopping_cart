<script setup>
import { reactive, ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
import { watch } from "@vue/runtime-core";
import popUp from '../popUp.vue'
import { productImage, productDetail } from "../../apis/product_api";
import { addToCart } from "../../apis/cart_api";
const route = useRoute();

const productInfoData = ref({});
const showData = ref(false);
const quentity = ref(1)
const imgURL = ref('')

const showModal = ref(false);
const pass = ref(false);
const message = ref('');


const postData = reactive({
  'user_id': 6,
  'product_id': '',
  'quantity': quentity
})

const productInfo = async () => {
  let data = await productDetail(route.params.productInfoID)
    .then(function (res) {
      return res;
    })
    .catch((error) => {
      console.error("productInfoUrlError:", error);
    });
  productInfoData.value = data;
  showData.value = true;
};

const productImg = async () => {
  let data = productImage(
    route.params.category,
    route.params.productInfoNum,
    "original"
  )
    .then(function (res) {
      // 將 blog 物件轉為 url
      imgURL.value = URL.createObjectURL(res);
      return res;
    })
    .catch((error) => {
      console.error("imgURLError:", error);
    });
};

//加入購物車
const addCart = async () => {
  console.log('送出購物車', postData.product_id);
  postData.product_id = productInfoData.value[0].id;
  console.log(" productInfoData", productInfoData);
  console.log(" productInfoData id", productInfoData.value[0].id);
  let data = await addToCart(JSON.stringify(postData))
    .then(function (res) {
      message.value = '加入購物車成功'
      pass.value = true;
      showModal.value = true;
      // 告訴她送出成功
      return res
    })
    .catch((error) => {
      message.value = '加入購物車失敗'
      pass.value = false;
      showModal.value = true;
      console.error('productInfoUrlError:', error);
    });
}

productInfo();
productImg();

</script>

<template>
  <article class="article">
    <div class="container">
      <div v-if="!showData">Loading</div>

      <div class="item" v-if="showData">
        <div class="itemImg"><img :src="imgURL" alt="Loading..."></div>
        <div class="itemInfo">
          <h1>{{ productInfoData[0].productName }}</h1>
          <h2>${{ productInfoData[0].price }}</h2>
          <p>庫存數量 <span class="num">{{ productInfoData[0].inventory }}</span></p>
          <div class="quentities">
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
    <popUp :show="showModal" :ifPass="pass" :message="message" @close="showModal = false" />
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

      gap: calc((100% - 30rem - 40%) / 2);

      .itemImg {
        padding: 1rem;
        width: 60%;
        max-width: 30rem;
        max-height: 25rem;
      }

      .itemInfo {
        padding: 1rem;
        display: flex;
        width: 40%;
        flex-direction: column;
        justify-content: space-between;
        font-size: 1.5rem;

        h1 {
          font-size: 2.5rem;
          font-weight: bolder;
        }

        h2 {
          font-size: 2.5rem;
          font-weight: bolder;
          color: #FF0000;
        }

        span {
          margin: 0 2px;
        }

        span.num {
          color: #FF0000;
          font-weight: bolder;
        }

        .quentities {
          display: flex;
          align-items: center;
          gap: 2px
        }

        button {
          width: 60%;
          font-size: 1.5rem;
          color: var(--white);
          background-color: #DE0688;
          border: none;
          cursor: pointer;
        }

        button:active {
          transform: translateY(1px);
        }
      }
    }

    .itemContent {
      align-self: flex-start;
      padding: 1rem;

      p:first-child {
        font-weight: bold;
      }
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
