import { ref, computed, reactive, watch, watchEffect } from 'vue'
import { defineStore } from 'pinia'
import { fetchData } from '../stores/fetchData'

export const productStore = defineStore('product', () => {

  const productData = ref([]); //商品資料
  const crrentPage = ref(1); //目前頁面
  let totalPageNum = ref(5); //總共頁數
  const currentCategory = ref('001'); //預設類別 
  const totalCategoryList = ref([]); //類別列表
  const sortValue = ref(''); //類別列表

  const productInfoData = ref({});

  // const fetchURL = 'http://172.20.10.4:8080'
  const fetchURL = 'http://127.0.0.1:8080'

  // /* 測試成功--有頁數跟商品連動 ↓↓↓↓↓↓↓↓↓↓↓*/
  const allCategoryAPI = fetchData(`${fetchURL}/api/product/allCategory`);

  allCategoryAPI.then(res => {

    //監聽點擊類別
    watchEffect(() => {
      sortValue.value = '';
      crrentPage.value = 1;
      let category = res.find((obj) => obj.category === currentCategory.value);
      totalPageNum.value = Math.ceil(+category.categoryPage)

    })

    //總類別列表
    for (let obj of res) {
      totalCategoryList.value.push(obj.category)
    }

  });

  //監聽頁面切換
  watchEffect(() => {
    console.log('i am work');

    const productAPI = async () => {

      let P = await fetch(`${fetchURL}/api/product/category/${currentCategory.value}?page=${crrentPage.value}&order=${sortValue.value}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(function (res) {
          productData.value = res;
          return res
        })
        .catch((error) => {
          console.error('productAPIError:', error);
        });
    }
    productAPI();
  });



  // /* 測試成功--有頁數跟商品連動 ↑↑↑↑↑↑↑↑↑↑↑↑*/



  // 全部頁數arr
  const totalPageList = computed(() => {
    let arr = [];
    for (let index = 1; index <= totalPageNum.value; index++) {
      arr.push(index);
    }
    return arr
  })



  // 顯示可按頁面
  const showPages = computed(() => {

    if (crrentPage.value <= 2) {
      return totalPageList.value.slice(0, 3)
    }

    if (crrentPage.value >= totalPageList.value.length - 1) {
      return totalPageList.value.slice(totalPageList.value.length - 3, totalPageList.value.length)
    }

    return totalPageList.value.slice(crrentPage.value - 2, crrentPage.value + 1)
  })

  // 左右頁按鈕
  const btnRight = () => { (crrentPage.value >= totalPageNum.value) ? totalPageNum.value : crrentPage.value++ };
  const btnLeft = () => { (crrentPage.value) <= 1 ? 1 : crrentPage.value-- }

  const productAPI2 = async () => {

    console.log('test');
    let P = await fetch(`${fetchURL}/api/product/category/002?page=${crrentPage.value}&order=${sortValue.value}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(function (res) {
        productData.value = res;
        return res
      })
      .catch((error) => {
        console.error('productAPIError:', error);
      });
  }

  return {
    productData,
    totalPageList,
    showPages,
    crrentPage,
    btnLeft,
    btnRight,
    totalCategoryList,
    currentCategory,
    productInfoData,
    sortValue,
    productAPI2
  }
})
