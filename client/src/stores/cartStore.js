import { ref, computed, reactive, watch, watchEffect } from "vue";
import { defineStore } from "pinia";
import { fetchData } from "../stores/fetchData";

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
  //const fetchURL = "http://172.20.10.4:8080";
  const fetchURL = "http://127.0.0.1:8080";
  const orderDoneUrl = `${fetchURL}/api/order/createOrder`;
  //完成訂單
  const orderDone = async (data, cartToOrderData) => {
    data.order_prize = cartToOrderData[1][0].totalPrice;
    data.order_amount = cartToOrderData[0].length;
    console.log(
      "完成購物",
      { data: JSON.stringify(data) },
      cartToOrderData[0].length
    );
    let P = await fetch(orderDoneUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: data }),
    })
      .then((response) => response.json())
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
