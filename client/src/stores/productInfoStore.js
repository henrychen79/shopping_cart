import { ref, computed, reactive, watch, watchEffect } from 'vue'
import { defineStore } from 'pinia'

export const productInfoStore = defineStore('productInfo', () => {


  const productInfoData = ref({});
  const showData = ref(false);
  const quentity = ref(1)
  const imgURL = ref('')


  // const fetchURL = 'http://172.20.10.4:8080'
  const fetchURL = 'http://127.0.0.1:8080'

  const productInfoUrl = `${fetchURL}/api/product/detail?product_id=${route.params.productInfoID}`

  const productImgUrl = `${fetchURL}/api/product/image?category_id=${route.params.category}&product_id=${route.params.productInfoNum}&type=original`

  const addCatUrl = `${fetchURL}/api/cart/addToCart`


  const postData = reactive({
    'user_id': 1,
    // 'category_id': route.params.category,
    'product_id': route.params.productInfoID,
    'quantity': quentity

  })

  const productInfo = async () => {
    let data = await fetch(productInfoUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        return response.json()
      })
      .then(function (res) {
        return res
      })
      .catch((error) => {
        console.error('productInfoUrlError:', error);
      });
    productInfoData.value = data;
    showData.value = true
  }


  const productImg = async () => {
    let data = await fetch(productImgUrl, { method: 'GET' })
      .then(response => response.blob())
      .then(function (res) {
        // 將 blog 物件轉為 url
        imgURL.value = URL.createObjectURL(res)
        return res
      })
      .catch((error) => {
        console.error('imgURLError:', error);
      });
  }


  //加入購物車
  const addCart = async () => {
    console.log('送出購物車', postData.product_id);
    postData.product_id = productInfoData.value[0].id;
    let data = await fetch(addCatUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData)
    })
      .then(response => response.json())
      .then(function (res) {
        console.log(res);
        // 告訴她送出成功
        return res
      })
      .catch((error) => {
        console.error('productInfoUrlError:', error);
      });
  }


  return {

  }
})
