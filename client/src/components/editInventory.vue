<script setup>
import { ref, reactive, computed, defineProps, defineEmits } from 'vue';
import { editProductStore } from "../stores/editProductStore";
const eps = editProductStore();
const props = defineProps(["value"]);


</script>

<template>
    <div class="editInventory">
        <input v-model="eps.data.inventory" class="newInventInput" placeholder="請輸入新庫存" />
        <div class="save">
            <button @click="eps.updateInventory(props.value)">儲存</button>
        </div>
    </div>

</template>
<style scoped>
.save{
    display: flex;
    flex-direction: row;
}
.newInventInput{
    width: 90%;
}
</style>