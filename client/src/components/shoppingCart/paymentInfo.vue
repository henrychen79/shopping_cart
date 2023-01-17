<script setup>
import { computed, ref, reactive } from "vue";
import { cartStore } from "../../stores/cartStore";

const cs = cartStore();
</script>

<template>
  <div class="payment-info">
    <div class="payway">
      <h3>付款方式</h3>
      <input type="radio" name='price' checked><span>匯款</span>
    </div>
    <h3>請匯<span>{{ cs.productListData[1][0].totalPrice }}</span>至以下帳戶</h3>
    <h3>銀行代號 : 008</h3>
    <h3>戶名 : XXX</h3>
    <h3>帳號 : 709XXXXXXXXX</h3>

    <div class="group-btn">
      <router-link to="/shoppingCart/shippingInfo" class="btn">回前頁</router-link>
      <router-link to="/shoppingCart/orderInfo" @click="cs.orderDone()" class="btn">確認訂單</router-link>
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

  .payway {
    display: flex;
    align-items: center;

    h3 {
      margin: 0;
      margin-right: 1rem;
      padding: 0;
      width: fit-content;
    }

    span {
      font-size: 1.1rem;
      margin-left: 3px;
      font-weight: bolder;
    }
  }

  .group-btn {
    display: flex;
    justify-content: space-between;
  }

  .btn {
    padding: 0.5rem;
    border-radius: 5px;
    background-color: var(--grey);
  }
}
</style>
