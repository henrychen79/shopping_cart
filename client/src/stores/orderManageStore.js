import { defineStore } from "pinia";
import { ref, reactive, computed } from "vue";
import { getAllOrders, update_pay, update_deliver } from "../apis/admin_api";
export const orderStore = defineStore("orderStore", () => {
  const orderInput = ref("");
  let orderDetail = ref([]);
  function payStatusChange(v) {
    v.pay_status = v.pay_status_update;
  }
  function deliverStatusChange(v) {
    v.deliver_status = v.deliver_status_update;
  }
  const fetchOrder = async () => {
    const url = `http://172.20.10.4:8080/api/admin/getAllOrders`;
    // const url = `../../orderTest.json`
    try {
      let data = await getAllOrders()
        .then(function (res) {
          console.log(res);
          return res;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      orderDetail.value = data;
    } catch (error) {
      console.log(error);
    }
  };

  async function updatePayStatus(data) {
    await payStatusChange(data);
    const url = `http://172.20.10.4:8080/api/admin/update_pay`;
    update_pay(JSON.stringify(data))
      .then(function (res) {
        console.log("Success:", res);
        fetchOrder();
      })
      .catch(function (error) {
        console.error("Error:", error);
      });
  }

  async function updateDeliverStatus(data) {
    await deliverStatusChange(data);
    const url = `http://172.20.10.4:8080/api/admin/update_deliver`;
    update_deliver(JSON.stringify(data))
      .then(function (res) {
        console.log("Success:", res);
        fetchOrder();
      })
      .catch(function (error) {
        console.error("Error:", error);
      });
  }

  return {
    fetchOrder,
    updatePayStatus,
    updateDeliverStatus,
    orderInput,
    orderDetail,
  };
});
