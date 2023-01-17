<script setup>
import { computed, ref } from "vue"
import { cartStore } from "../../stores/cartStore";

const cs = cartStore();
</script>

<template>
    <div class="order">
        <div class="order-massage">
            <p>您的訂單已成立,訂單編號為<span>{{ cs.order_number }}</span>
                <br>商品將於7-14個工作天內送達,
                <br>我們將盡速為您安排出貨,謝謝
            </p>
        </div>
        <div>
            <router-link to="/" class="btn">回首頁</router-link>
        </div>
    </div>
</template>

<style scoped lang="scss">
div.order {
    width: 90%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    border: 1px solid var(--black);

    .order-massage {
        padding: 1rem 2rem;

        p {
            font-size: 1.5rem;
        }
    }

    div {
        padding: 1rem 2rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    div .btn {
        padding: 0.5rem;
        border-radius: 5px;
        background-color: var(--grey);
        margin-left: auto;
    }

}
</style>
