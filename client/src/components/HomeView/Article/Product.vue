<script setup>
import { ref, defineProps, watchEffect } from "vue";
import { productImage } from "../../../apis/product_api";
const paramData = defineProps({
  imgData: Object,
  urlData: Object,
});

const fetchURL = "http://127.0.0.1:8080";

const imgURL = ref("");

watchEffect(() => {
  const productInfo = async () => {
    productImage(
      paramData.imgData.category,
      paramData.imgData.productInfoNum,
      "thumbnail"
    )
      .then(function (res) {
        // 將 blog 物件轉為 url
        imgURL.value = URL.createObjectURL(res);
        return res;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  productInfo();
});
</script>

<template>
  <div class="cards_item">
    <div class="card">
      <div class="card_image">
        <slot name="img"></slot>
        <RouterLink :to="{ name: 'product', params: paramData.urlData }">
          <img :src="imgURL" alt="" style="height: 100%; width: 100%" />
        </RouterLink>
      </div>
      <div class="card_content">
        <h3>
          <slot name="name"></slot>
        </h3>
        <p>
          <slot name="price"></slot>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.cards_item {
  display: flex;
  justify-content: center;
  padding: 1rem;
}

@media (max-width: 452px) {
  .cards_item {
    width: 100%;

    .card {
      width: 70%;
    }
  }
}

@media (min-width: 452px) and (max-width: 700px) {
  .cards_item {
    width: 50%;

    .card {
      width: 100%;
    }
  }
}


@media (min-width: 700px) and (max-width: 1024px) {
  .cards_item {
    width: 33.33333%;

    .card {
      width: 100%;
    }
  }
}

@media (min-width: 1024px) {
  .cards_item {
    width: 25%;

    .card {
      width: 100%;
    }
  }
}



.card {
  height: 20rem;
  width: 100%;
  border: 1px solid var(--black-mute);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card_image {
  width: 90%;
  height: 60%;
  background-color: aliceblue;
}

.card_content {
  width: 90%;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

h3 {
  font-size: 1.5rem;
  font-weight: bolder;
}

p {
  font-size: 1.5rem;
  color: rgb(186, 54, 54);
  font-weight: bold;
}
</style>
