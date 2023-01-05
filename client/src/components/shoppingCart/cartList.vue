<script setup>
import { computed, ref } from "vue"
import router from "../../router";
import cartItemVue from "./cartItem.vue";
</script>

<template>
    <table class="cartList">
        <thead>
            <tr>
                <th>商品圖片</th>
                <th>商品名稱</th>
                <th>價格</th>
                <th></th>
            </tr>
        </thead>
        <tbody v-for="i in [1, 2]">
            <cartItemVue>
                <template #itemName>{{ i }}</template>
                <template #itemPrice>{{ 200 }}</template>
            </cartItemVue>
        </tbody>
        <tfoot>
            <tr>
                <td colspan="2"></td>
                <td colspan="2">
                    <h3>總金額</h3>
                    <p>20000</p>
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

    thead {
        background-color: var(--grey);
    }

    tfoot tr td {
        border-top: 1px solid var(--black);

        h3,
        p,
        button {
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
