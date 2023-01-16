import { ref, computed, reactive, watch, watchEffect } from "vue";
import { defineStore } from "pinia";
import { fetchData } from "../stores/fetchData";
import { createOrder } from "../apis/order_api";

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


  const cartToOrderData = reactive([]);

  //完成訂單
  const orderDone = async (data, cartToOrderData) => {
    data.order_prize = cartToOrderData[1][0].totalPrice;
    data.order_amount = cartToOrderData[0].length;
    console.log(
      "完成購物",
      { data: JSON.stringify(data) },
      cartToOrderData[0].length
    );
    let P = await createOrder(JSON.stringify({ data: data }))
      .then(function (res) {
        return res;
      })
      .catch((error) => {
        console.error("orderDoneError:", error);
      });
  };

  return {
    data,
    cartToOrderData,
    orderDone,
  };
});
