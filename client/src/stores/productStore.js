import { ref, computed, reactive, watch } from 'vue'
import { defineStore } from 'pinia'
import { fetchData } from '../stores/fetchData'

export const productStore = defineStore('product', () => {


  const productData = ref({}); //商品資料
  const crrentPage = ref(1); //目前頁面
  // 預設0 測試隨便給數字
  let totalPageNum = ref(5); //總共頁數
  /* 類別連動尚未做*/
  const currentCategory = ref('001'); //預設類別 


  /* 測試成功--有頁數跟商品連動 ↓↓↓↓↓↓↓↓↓↓↓*/
  // const allCategoryAPI = fetchData(`http://172.20.10.4:8080/api/product/allCategory`);

  // allCategoryAPI.then(res => {
  //   let category = res.find((obj) => obj.category === currentCategory.value);
  //   totalPageNum.value = Math.ceil(+category.categoryPage)
  // });

  // watch(() => {
  //   const productAPI = fetchData(`http://172.20.10.4:8080/api/product/category/1?page=${crrentPage.value}`);
  //   productAPI.then(res => {
  //     productData.value = res
  //   });
  // });
  /* 測試成功--有頁數跟商品連動 ↑↑↑↑↑↑↑↑↑↑↑↑*/


  //假資料
  productData.value = [{
    "productName": '123',
    "price": 123,
  }, {
    "productName": '123',
    "price": 123,
  }, {
    "productName": '123',
    "price": 123,
  }
  ]

  // 全部頁面arr
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
  const btnRight = () => { (crrentPage.value >= totalPageNum) ? totalPageNum : crrentPage.value++ };
  const btnLeft = () => { (crrentPage.value) <= 1 ? 1 : crrentPage.value-- }


  return { productData, totalPageList, showPages, crrentPage, btnLeft, btnRight }
})
