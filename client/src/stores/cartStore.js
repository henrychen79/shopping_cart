import { ref, computed, reactive, watch, watchEffect } from "vue";
import { defineStore } from "pinia";
import { fetchData } from "../stores/fetchData";
import { createOrder } from "../apis/order_api";
import { cartList } from "../apis/cart_api";

export const cartStore = defineStore("cart", () => {

  const data = reactive({
    user_id: 1,
    recipient: "",
    phone: "",
    pay_way: "轉帳",
    dliver_way: "宅配",
    address: "",
    order_prize: 1,
    order_amount: 0,
  });

  const order_number = ref('');

  const productListData = ref({});
  const showData = ref(false);

  const cartToOrderData = reactive([]);

  // 購物車商品清單
  const productList = async (test) => {

    let data = await cartList(1)
      .then(function (res) {
        console.log(res);
        return res;
      })
      .catch((error) => {
        console.error("productInfoUrlError:", error);
      });
    productListData.value = data;
    cartToOrderData.value = data;
    showData.value = true;
  };

  //完成訂單
  const orderDone = async () => {
    data.order_prize = cartToOrderData.value[1][0].totalPrice;
    data.order_amount = cartToOrderData.value[0].length;
    console.log(
      "完成購物",
      { data: JSON.stringify(data) },
      cartToOrderData.value[0].length
    );
    let P = await createOrder(JSON.stringify({ data: data }))
      .then(function (res) {
        order_number.value = res.data.order_number
        return res;
      })
      .catch((error) => {
        console.error("orderDoneError:", error);
      });
  };



  productList();

  return {
    data,
    showData,
    order_number,
    cartToOrderData,
    productListData,
    orderDone,
    productList
  };
});
