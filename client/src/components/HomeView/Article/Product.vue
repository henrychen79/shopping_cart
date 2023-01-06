<script setup>
import { ref, defineProps, watch } from "vue";

const paramData = defineProps({
    imgData: Object
});
const fetchURL = 'http://172.20.10.4:8080'

const imgURL = ref('')

watch(() => {
    const productInfo = async () => {
        let data = await fetch(`${fetchURL}/api/product/image?category_id=${paramData.imgData.category}&product_id=${paramData.imgData.productInfoID}&type=thumbnail`, {
            method: 'GET',
        })
            .then(response => response.blob())
            .then(function (res) {
                // 將 blog 物件轉為 url
                imgURL.value = URL.createObjectURL(res)
                return res
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    productInfo();
})

</script>

<template>
    <div class="cards_item">
        <div class="card">
            <div class="card_image">
                <RouterLink :to="{ name: 'product', params: paramData.imgData }">
                    <img :src="imgURL" alt="" style="height:100%;width:100%">
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

<style scoped>
.cards_item {
    display: flex;
    justify-content: center;
    padding: 1rem;
}

@media (min-width: 19rem) {
    .cards_item {
        width: 100%;
    }
}

@media (min-width: 20rem) {
    .cards_item {
        width: 50%;
    }
}

@media (min-width: 40rem) {
    .cards_item {
        width: 33.33333%;
    }
}

@media (min-width: 56rem) {
    .cards_item {
        width: 25%;
    }
}

.card {
    height: 15rem;
    width: 12rem;
    border: 1px solid var(--black-mute);
    display: flex;
    flex-direction: column;
    align-items: center;

}

.card_image {
    width: 100%;
    height: 60%;
    background-color: aliceblue;

}


.card_content {
    width: 90%;
    height: 40%;
}

h3 {
    font-size: 1rem;
}

p {
    font-size: 1.2rem;
    color: rgb(186, 54, 54);
    font-weight: bold;
}
</style>
