import { defineStore } from "pinia";
import { ref, reactive, computed } from "vue";
import { getAllUsers } from "../apis/admin_api";
export const userStore = defineStore("userStore", () => {
  let userDetail = ref([]);

  const fetchUser = async () => {
    const url = `http://172.20.10.4:8080/api/admin/getAllUsers`;
    // const url = `../../orderTest.json`
    try {
      let data = await getAllUsers()
        .then(function (res) {
          console.log(res);
          return res;
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      userDetail.value = data;
    } catch (error) {
      console.log(error);
    }
  };

  return {
    fetchUser,
    userDetail,
  };
});
