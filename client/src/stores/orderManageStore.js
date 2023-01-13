import { defineStore } from 'pinia'
import{ref,reactive,computed} from "vue"

export const orderStore = defineStore('orderStore',()=>{
const orderInput = ref('');
let orderDetail = ref([]);

const fetchOrder = async () => {
    // const url = `http://127.0.0.1:8080/api/admin/`
    const url = `../../orderTest.json`
    try {
        let data = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            },
        })
            .then(function (res) {
                return res.json()
            })
            .then(function (res) {
                console.log(res)
                return res
            })
            .catch((error) => {
                console.error('Error:', error);
            });
            orderDetail.value = data.order;
    } catch (error) {
        console.log(error)
    }

}

    return{
        fetchOrder,
        orderInput, orderDetail
    }
})