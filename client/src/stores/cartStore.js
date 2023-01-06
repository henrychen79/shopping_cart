import { ref, computed, reactive, watch, watchEffect } from 'vue'
import { defineStore } from 'pinia'
import { fetchData } from '../stores/fetchData'

export const cartStore = defineStore('cart', () => {

    const testData = ref(0);


    function addNum() {
        return testData.value++
    }



    const userid = ref('');

    const shoppingCartAPI = fetchData(`http://172.20.10.4:8080/api/cart/松:userid`);

    shoppingCartAPI.then(res => {

        //監聽點擊類別
        watchEffect(() => {

            let cartList = res.find((obj) => obj.category === currentCategory.value);
            totalPageNum.value = Math.ceil(+category.categoryPage)

        })


    });

    return { testData, addNum }
})
