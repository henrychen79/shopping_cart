<script setup>
import { computed, ref, reactive, watch, watchEffect } from "vue";
import router from "../../router";
import { cartStore } from "../../stores/cartStore";

const cs = cartStore();

const confirm = ref(false);

function phoneType(val) {
  const validate = /09\d{2}(\d{6}|-\d{3}-\d{3})/
  return validate.test(val)
}

watchEffect(() => {
  if (phoneType(cs.data.phone) && cs.data.recipient !== '' && cs.data.address != '') {
    confirm.value = true;
  } else {
    confirm.value = false;
  }

})
</script>

<template>
  <form class="shippingInfo-form">
    <div class="form-group box">
      <label>收件人姓名</label>
      <input type="text" v-model="cs.data.recipient" />
    </div>
    <div class="form-group box">
      <label>收件人電話</label>
      <input type="tel" v-model="cs.data.phone" />
    </div>
    <div class="form-group lbox">
      <label>收件人地址</label>
      <input type="text" v-model="cs.data.address" />
    </div>
    <div>
      <router-link to="/shoppingCart" class="btn">回前頁</router-link>
      <router-link to="" class="dissbtn" v-if='!confirm'>下一步</router-link>
      <router-link to="/shoppingCart/paymentInfo" class="btn" v-if='confirm'>下一步</router-link>
    </div>
  </form>
</template>

<style scoped lang="scss">
form.shippingInfo-form {
  border: 1px solid var(--black);
  width: 90%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: flex-start;

  .form-group {
    padding: 1rem 2rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;

    gap: 0.1rem;

    label {
      margin-right: 1rem;
    }

    input {
      flex: 1;
      max-width: 100%;
      line-height: 28px;
    }
  }

  .box {
    width: 50%;
  }

  .lbox {
    width: 100%;
  }

  div {
    padding: 1rem 2rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .btn {
    padding: 0.5rem;
    border-radius: 5px;
    background-color: var(--grey);
  }

  .dissbtn {
    padding: 0.5rem;
    border-radius: 5px;
    background-color: var(--grey);
    color: #bebbbb;
  }

  button.btn {
    padding: 0.5rem;
    border-radius: 5px;
    background-color: var(--grey);
    border: none;
    cursor: pointer;
  }
}


@media only screen and (max-width: 452px) {
  form.shippingInfo-form {
    .box {
      width: 100%;
    }
  }
}
</style>
