<script setup>
import { computed, ref, watch } from "vue";
import router from "../../router";
import cartItemVue from "./cartItem.vue";
import { cartStore } from "../../stores/cartStore";
import { userOrderStore } from "../../stores/orderStore";

const cs = cartStore();
cs.productList();
</script>

<template>
  <!-- <div v-if="!showData">尚未加入商品到購物車</div> -->
  <table class="cartList" v-if="cs.showData">
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
      <cartItemVue v-for="(item, index) in cs.productListData[0]" :key="item.cart_item_id" :imgData="{
        category: `${item.category}`,
        productInfoID: `${item.productNum}`,
      }" :itemId="item.cart_item_id" @delbtn="cs.productList()" :indexId="index">

        <template #itemName>{{ item.productName }}</template>
        <template #itemQuantity>{{ item.quantity }}</template>
        <template #itemPrice>{{ item.price }}</template>
      </cartItemVue>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="5" class="total-price">
          <h3>總金額</h3>
          <p>{{ cs.productListData[1][0].totalPrice }}</p>
          <router-link to="/shoppingCart/shippingInfo" class="btn">結帳</router-link>
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
  margin-bottom: 2rem;

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
