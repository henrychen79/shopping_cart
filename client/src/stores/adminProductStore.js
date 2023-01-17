import { defineStore } from "pinia";
import { ref, reactive, computed } from "vue";
import { getProduct, getProducts } from "../apis/admin_api";
export const adminProductStore = defineStore("adminProductStore", () => {
  let productDetail = ref([]);
  let fetchCategory1 = ref("");
  let fetchCategory2 = ref("");
  let fetchProductNum = ref("");
  const getDetail = async () => {
    const url = `http://172.20.10.4:8080/api/admin/getProducts?category=${fetchCategory1.value}`;

    // console.log(fetchCategory.value,fetchProductNum.value)
    try {
      let data = await getProducts(fetchCategory1.value)
        .then(function (res) {
          console.log(res);
          return res;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      productDetail.value = data;
    } catch (error) {
      console.log(error);
    }
  };
  const getTwoDetails = async () => {
    const url = `http://172.20.10.4:8080/api/admin/getProduct?category=${fetchCategory2.value}&productNum=${fetchProductNum.value}`;
    // console.log(fetchCategory.value,fetchProductNum.value)
    try {
      let data = await getProduct(fetchCategory2.value, fetchProductNum.value)
        .then(function (res) {
          console.log(res);
          return res;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      productDetail.value = data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    productDetail,
    fetchCategory1,
    fetchCategory2,
    fetchProductNum,
    getDetail,
    getTwoDetails,
  };
});
