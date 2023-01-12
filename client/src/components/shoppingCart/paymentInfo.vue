<script setup>
import { computed, ref, reactive } from "vue";
import { cartStore } from "../../stores/cartStore";

const cs = cartStore();
console.log(reactive(cs.cartToOrderData));
</script>

<template>
  <div class="payment-info">
    <h3>請匯<span>$4000</span>至以下帳戶</h3>
    <h3>銀行代號 : 008</h3>
    <h3>戶名 : XXX</h3>
    <h3>帳號 : 709XXXXXXXXX</h3>
    <div>
      <router-link to="/shoppingCart/shippingInfo" class="btn"
        >回前頁</router-link
      >
      <router-link
        to="/shoppingCart/orderInfo"
        @click="cs.orderDone(cs.data, cs.cartToOrderData)"
        class="btn"
        >確認訂單</router-link
      >
    </div>
  </div>
</template>

<style scoped lang="scss">
div.payment-info {
  border: 1px solid var(--black);
  width: 90%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;

  h3,
  div {
    padding: 1rem 2rem;
    width: 100%;
  }

  div {
    display: flex;
    justify-content: space-between;
  }

  .btn {
    padding: 0.5rem;
    border-radius: 5px;
    background-color: var(--grey);
  }
}

@media only screen and (max-width: 452px) {
}
</style>
