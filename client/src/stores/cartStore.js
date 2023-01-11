import { ref, computed, reactive, watch, watchEffect } from 'vue'
import { defineStore } from 'pinia'
import { fetchData } from '../stores/fetchData'

export const cartStore = defineStore('cart', () => {

    const data = reactive({
        'user_id': 1,
        'recipient': ref(''),
        'phone': ref(''),
        'pay_way': '轉帳',
        'dliver_way': '宅配',
        'address': ref(''),
    })
    const fetchURL = 'http://172.20.10.4:8080'
    const orderDoneUrl = `${fetchURL}/api/order/createOrder`
    //完成訂單
    const orderDone = async () => {
        console.log('完成購物');

        let P = await fetch(orderDoneUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(function (res) {

                return res
            })
            .catch((error) => {
                console.error('orderDoneError:', error);
            });
    }

    return {
        data,
        orderDone
    }
})
