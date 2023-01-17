<script setup>
import { ref, reactive, defineProps, defineEmits } from "vue";
import { cartStore } from "../../stores/cartStore";
import { setCartImg, delFromCart } from "../../apis/cart_api";
import popUp from "../popUp.vue"


const cs = cartStore();

const emit = defineEmits(["delbtn"]);

const paramData = defineProps({
  imgData: Object,
  itemId: Number,
  indexId: Number,
});

const imgURL = ref("");

const showModal = ref(false);
const pass = ref(false);
const message = ref('');


const productImg = async () => {
  let data = await setCartImg(paramData.imgData.category, paramData.imgData.productInfoID, "thumbnail")
    .then(function (res) {
      imgURL.value = URL.createObjectURL(res);
      return res;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
};
productImg();

const delData = reactive({
  id: paramData.itemId,
});
//移除購物車
const delCart = async () => {

  let data = await delFromCart(JSON.stringify(delData))
    .then(function (res) {
      showModal.value = true;
      message.value = '移除購物車成功'
      pass.value = true;

      return res;
    })
    .catch((error) => {
      message.value = '移除購物車失敗'
      pass.value = false;
      showModal.value = true;
      console.error("delCartError:", error);
    });
};

const deleteItem = () => {
  showModal.value = false;
  if (pass.value === true) {
    emit("delbtn");
  }
}


</script>

<template>
  <tr>
    <td><img :src="imgURL" alt="Loading..." /></td>
    <td>
      <slot name="itemName"></slot>
    </td>
    <td>
      <slot name="itemQuantity"></slot>
    </td>
    <td>
      <slot name="itemPrice"></slot>
    </td>
    <td>
      <button @click="delCart">移除</button>
    </td>
  </tr>

  <popUp :show="showModal" :ifPass="pass" :message="message" @close="deleteItem" />
</template>

<style scoped lang="scss">
tr td {
  width: 20%;
  height: 6rem;
}

tr td img {
  width: 90%;
  max-width: 5rem;
  height: 90%;
}
</style>
