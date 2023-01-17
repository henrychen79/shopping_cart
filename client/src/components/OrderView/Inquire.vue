<script async setup>
import { ref, reactive, computed } from 'vue';
import { userOrderStore } from "../../stores/orderStore"
const orderStore = userOrderStore();
let show = ref(true)
await orderStore.orederTest()
// await orderStore.asyncFn(10)
console.log(orderStore.orderList)
if (orderStore.orderList === undefined) {
    show.value = false
} else {
    show.value = true
}


</script>

<template>
    <!-- <h1>{{orderStore.testNum}}</h1> -->
    <div class="ordermain">
        <div v-if="show" class="orderInfo">
            <div class="Info" v-for="(item) in orderStore.orderList" v-bind:key="item.id">
                <div class="content">
                    <p>訂單編號:{{ item.order_number }}</p>
                    <div>
                        訂單內容:
                        <p class="ttt" v-for="(test) in item.product_list" product_name>{{ `${test.product_name},`}}</p>
                    </div>
                    <p>訂單時間:{{ item.order_time }}</p>
                    <p>訂單金額:${{ item.order_prize }}</p>
                </div>
                <div class="status">
                    <p>付款狀態:{{ item.pay_status }}</p>
                    <p>出貨狀態:{{ item.deliver_status }}</p>
                </div>
            </div>
        </div>
        <div v-else>系統異常</div>
    </div>
</template>

<style lang="scss" scoped>
::-webkit-scrollbar {
    display: none;
}

.ttt {
    display: inline-block;
}

.ordermain {
    // border: 2px solid red;
    width: 80%;
    height: 70%;
    margin: auto 2rem;
    overflow: auto;

    >.orderInfo {
        width: 100%;

        >.Info:first-child {
            border-top: 2px solid black;
        }

        >.Info {
            display: flex;
            width: 100%;
            border-bottom: 2px solid black;

            >.content {
                flex: 1;
                margin: 10px 0px;
            }

            >.status {
                flex: 1;
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                justify-content: center;
            }
        }
    }

    //webkit核心劉染器材有效，例如Chrome、新 Edge、Safari
}

@media screen and (max-width:320px) {
    .ordermain {
        width: 255px;

        >.orderInfo {
            width: 100%;

            >.Info:first-child {
                border-top: 2px solid black;
            }

            >.Info {
                display: flex;
                width: 100%;
                border-bottom: 2px solid black;

                >.content {
                    flex: 1;
                    margin: 10px 0px;
                }

                >.status {
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    justify-content: center;

                    >.p {
                        width: 108px;
                        height: 24px;
                    }
                }
            }
        }
    }

}
</style>