import { defineStore } from "pinia";
import { ref, reactive, computed } from "vue";
import axios from "axios";
import { uploadImage, add_product } from "../apis/admin_api";
import { allCategory } from "../apis/product_api";
export const addProductStore = defineStore("addProductStore", () => {
  let file = ref("");
  const dealfilechange = (e) => {
    file = e.target.files[0];
  };

  //存取admin輸入的資料
  let data = reactive({
    category: "",
    productNum: "",
    productName: "",
    thumbnail: " ",
    price: "",
    inventory: "",
    detail: "",
    img: " ",
  });

  let productCategory = ref([]);

  const uploadImg = () => {
    // let param = new FormData();
    // param.append("image", file);
    // console.log(param.get("file"));
    // let config = { headers: { "Content-Type": "multipart/form-data" } };
    // axios
    //   .post(
    //     `http://172.20.10.4:8080/api/admin/uploadImage?category_id=${data.category}&product_id=${data.productNum}`,
    //     param,
    //     config
    //   )
    //   .then((response) => {
    //     console.log(response.data);
    //   });
    uploadImage(file, data.category, data.productNum).then((ret) => {
      console.log("uploadImage", ret);
    });
  };

  //點擊按鈕
  const add = () => {
    console.log(data);
    const url = `http://172.20.10.4:8080/api/admin/addProduct`;
    add_product(JSON.stringify(data))
      .then(function (res) {
        console.log("Success:", res);
      })
      .catch(function (error) {
        console.error("Error:", error);
      });
  };

  const getCategory = async () => {
    const url = `http://172.20.10.4:8080/api/product/allCategory`;
    try {
      let data = await allCategory()
        .then(function (res) {
          return res;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      productCategory.value = data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    data,
    productCategory,
    file,
    add,
    dealfilechange,
    uploadImg,
    getCategory,
  };
});
