<script setup>
import { ref, defineProps, watch, reactive, defineEmits } from "vue";
import popUp from "../popUp.vue"
const emit = defineEmits(["delbtn"]);
const paramData = defineProps({
  imgData: Object,
  itemId: Number,
  indexId: Number,
});
// const fetchURL = "http://127.0.0.1:8080";
const fetchURL = "http://172.20.10.4:8080";
const delCatUrl = `${fetchURL}/api/cart/delCartItem`;

const imgURL = ref("");

const showModal = ref(false);
const pass = ref(false);
const message = ref('');


watch(() => {
  const productImg = async () => {
    console.log(
      `${fetchURL}/api/product/image?category_id=${paramData.imgData.category}&product_id=${paramData.imgData.productInfoID}&type=thumbnail`
    );
    let data = await fetch(
      `${fetchURL}/api/product/image?category_id=${paramData.imgData.category}&product_id=${paramData.imgData.productInfoID}&type=thumbnail`,
      {
        method: "GET",
      }
    )
      .then((response) => response.blob())
      .then(function (res) {
        // 將 blog 物件轉為 url
        imgURL.value = URL.createObjectURL(res);
        return res;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  productImg();
});

const delData = reactive({
  id: paramData.itemId,
});

//移除購物車
const delCart = async () => {
  console.log(paramData);
  let data = await fetch(delCatUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(delData),

  })
    .then((response) => response.json())
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
  // if (pass.value === true) {
  emit("delbtn");
  // }
}


</script>

<template>
  {{ paramData }}
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
  background-color: rgb(86, 124, 157);
}
</style>
