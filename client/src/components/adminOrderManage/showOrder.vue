<script setup>
import { ref, reactive, computed, defineProps, defineEmits, watch } from 'vue';
import { orderStore } from '../../stores/orderManageStore'
const os = orderStore();

</script>

<template>
    <div class="order">
        <div class="order-item" v-for="(item, index) in os.orderDetail" >
            <div class="item-detail">
                <p>訂單編號:{{ item.orderNum }}</p>
                <p>訂單內容:{{ item.priductNum }}</p>
                <p>訂單金額:{{ item.totalPrice }}</p>
            </div>
            <div class="item-detail">
                <div class="status">
                    <p>付款狀態:{{ item.pay_status }}</p>
                    <p>編輯</p>
                </div>
                <div class="status">
                    <p>出貨狀態:{{ item.deliver_status }}</p>
                    <p>編輯</p>
                </div>              
            </div>
        </div>
    </div>

</template>
<style scoped>
.order {
    display: flex;
    flex-direction: column;
}
.order-item{
    height: 80px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: solid;
}
.item-detail{
    display: flex;
    flex-direction: column;
}
.status{
    display: flex;
    flex-direction: row;

}

</style>