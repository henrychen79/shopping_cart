<script setup>
import { computed, ref } from "vue"

</script>

<template>

    <tr>
        <td><img src="" alt=""></td>
        <td>
            <slot name="itemName"></slot>
        </td>
        <td>
            <slot name="itemPrice"></slot>
        </td>
        <td>
            <button>移除</button>
        </td>
    </tr>


</template>

<style scoped lang="scss">
tr td {
    padding: 3rem;
    // background-color: rgb(241, 241, 235);
}

tr td img {
    width: 100%;
    height: 100%;
    background-color: rgb(86, 124, 157);
}
</style>
