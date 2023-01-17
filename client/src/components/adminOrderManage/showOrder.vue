<script setup>
import { ref, reactive, computed, defineProps, defineEmits, watch } from 'vue';
import { orderStore } from '../../stores/orderManageStore'
const os = orderStore();

</script>

<template>
    <div class="order">
        <div class="order-item" v-for="(item, index) in os.orderDetail" :key="item" >
            <div class="item-detail">
                <p>訂單編號:{{ item.order_number }}</p>
                <div class="order-product">
                    <p>訂單內容:</p>
                    <div class="products">
                        <p v-for="(detail, index) in item.items" :key="detail">{{ detail.product_name }}</p>
                    </div>
                </div>
                <p>訂單金額:{{ item.order_prize }}</p>
            </div>
            <div class="item-detail">
                <div class="status">
                    <p>付款狀態:{{ item.pay_status }}</p>
                    <select v-model="item.pay_status_update">
                    <option>已付款</option>
                    <option>未付款</option>
                    </select>
                    <button @click="os.updatePayStatus(item)">儲存</button>
                </div>
                <div class="status">
                    <p>出貨狀態:{{ item.deliver_status }}</p>
                    <select v-model="item.deliver_status_update">
                    <option>已出貨</option>
                    <option>未出貨</option>
                    </select>
                    <button @click="os.updateDeliverStatus(item)">儲存</button>
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
    height: auto;
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
.order-product{
    display: flex;
    flex-direction: row;
}
.products{
    display: flex;
    flex-direction: column;
}

</style>