<script setup>
import { computed, ref, watch } from "vue";
import router from "../../router";
import cartItemVue from "./cartItem.vue";
import { cartStore } from "../../stores/cartStore";
import { userOrderStore } from "../../stores/orderStore";

const productListData = ref({});
const cs = cartStore();
const showData = ref(false);

//const fetchURL = "http://172.20.10.4:8080";
const fetchURL = "http://127.0.0.1:8080";

const productListUrl = `${fetchURL}/api/cart/1`;

const productList = async (test) => {
  let data = await fetch(productListUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then(function (res) {
      console.log(res);
      return res;
    })
    .catch((error) => {
      console.error("productInfoUrlError:", error);
    });
  productListData.value = data;
  cs.cartToOrderData = data;
  showData.value = true;
};

productList();
const removeCartItem = function (index) {
  this.productListData[0].splice(index, 1);
};
</script>

<template>
  {{productListData}}
  <!-- <div v-if="!showData">尚未加入商品到購物車</div> -->
  <table class="cartList" v-if="showData">
    <thead>
      <tr>
        <th>商品圖片</th>
        <th>商品名稱</th>
        <th>數量</th>
        <th>價格</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <cartItemVue
        v-for="(item, index) in productListData[0]"
        :key="item.id"
        :imgData="{
          category: `${item.category}`,
          productInfoID: `${item.productNum}`,
        }"
        :itemId="item.id"
        @delbtn="productList()"
        :indexId="index"
      >
        <template #itemName
          ><span>{{ item.id }}</span
          >{{ item.productName }}</template
        >
        <template #itemQuantity>{{ item.quantity }}</template>
        <template #itemPrice>{{ item.price }}</template>
      </cartItemVue>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="5" class="total-price">
          <h3>總金額</h3>
          <p>{{ productListData[1][0].totalPrice }}</p>
          <router-link
            to="/shoppingCart/shippingInfo"
            @click="addNum"
            class="btn"
            >結帳</router-link
          >
        </td>
      </tr>
    </tfoot>
  </table>
</template>

<style scoped lang="scss">
table.cartList {
  border-spacing: 0;
  width: 90%;
  text-align: center;
  border: 1px solid var(--black);

  thead {
    background-color: var(--grey);
  }

  tfoot tr td {
    border-top: 1px solid var(--black);

    h3,
    p,
    a {
      display: inline;
      margin-left: 1rem;
    }

    &:last-child {
      padding: 1rem;
      text-align: right;
    }
  }

  .btn {
    padding: 0.5rem;
    border-radius: 5px;
    background-color: var(--grey);
  }
}
</style>
