<script setup>
import { ref, reactive, computed, defineProps, defineEmits } from 'vue';
import { editProductStore } from "../stores/editProductStore";
const eps = editProductStore();
const props = defineProps(["value"]);


</script>

<template>
    <div class="editPrice">
        <!-- <p>{{ props.value }}</p> -->
        <input v-model="eps.data.price" class="newPriceInput" placeholder="請輸入新價格" />
        <div class="save">
            <button @click="eps.updatePrice(props.value)">儲存</button>
        </div>
    </div>

</template>
<style scoped>
.save{
    display: flex;
    flex-direction: row;
}
.newPriceInput{
    width: 90%;
}
</style>