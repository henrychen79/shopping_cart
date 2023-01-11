<script setup>
import { computed, ref } from "vue"

</script>

<template>
    <div class="order">
        <div class="order-massage">
            <p>您的訂單已成立,訂單編號為<span>00001</span>
                <br>商品將於7-14個工作天內送達,
                <br>我們將盡速為您安排出貨,謝謝
            </p>
        </div>
        <div>
            <button>回首頁</button>
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
    }

    div {
        padding: 1rem 2rem;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    div button {
        margin-left: auto;
    }

}
</style>
