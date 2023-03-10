import { defineStore } from "pinia";
import { ref, reactive, computed } from "vue";
import { update_nickname, modify_password } from "../apis/member_api";
export const useMemberStore = defineStore("memberStore", () => {
  // 'Authorization': 'Bearer ' + this.state.clientToken, //fetch端傳送token驗證

  let modifyNamedata = reactive({
    // account:'rec27@gmail.com',//登入後會存入
    newNickname: "",
  });
  let modifyPassword = reactive({
    password: "", //舊密碼
    newPassword: "", //新密碼
    checkPassword: "", //確認密碼
  });

  //true 不顯示 , false 顯示
  let modifyNameOpen = ref(true);
  let modifyPwOpen = ref(true);

  let password_error = ref(false);
  let passwordWarn = ref("");
  let fontColor = ref("");

  let show = ref(false);
  const token = document.cookie.replace(
    /(?:(?:^|.*;\s*)_token\s*\=\s*([^;]*).*$)|^.*$/,
    "$1"
  );

  const OpenNameFn = () => {
    show.value = true;
    if (!modifyNameOpen.value) {
      modifyNameOpen.value = true;
      closeShowView();
    } else {
      modifyNameOpen.value = false;
      modifyPwOpen.value = true;
    }
  };
  const OpenPwFn = () => {
    show.value = true;
    if (!modifyPwOpen.value) {
      modifyPwOpen.value = true;
      closeShowView();
    } else {
      modifyPwOpen.value = false;
      modifyNameOpen.value = true;
    }
  };
  const closeShowView = () => {
    show.value = false;
  };

  //修改暱稱fetch串接
  const modifyNickName = () => {
    if (modifyNamedata.newNickname === "") {
      alert("欄位不能為空");
      // console.log('欄位不能為空')
      return;
    }
    console.log(token);
    update_nickname(JSON.stringify(modifyNamedata))
      .then(function (res) {
        console.log(res);
        if (res.status === 200) {
          show.value = false;
          modifyNamedata.newNickname = "";
          alert("修改成功");
        } else {
          modifyNamedata.newNickname = "";
          alert("修改失敗");
        }
      })
      .catch(function (error) {
        console.error("Error:", error);
      });
  };

  //*------------------------------- 密碼欄位區-------------------------------------------*
  const regex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/);
  //判斷密碼是否符合規範
  const checkPassword = () => {
    regex.test(modifyPassword.newPassword);
    if (regex.test(modifyPassword.newPassword)) {
      password_error.value = false; //顯示開關
      passwordWarn.value = "密碼格式正確";
      fontColor.value = "green";

      console.log("格式正確");
    } else {
      passwordWarn.value = "密碼格式不符合";
      fontColor.value = "red";
      password_error.value = false;
      console.log("格式不正確");
    }
    if (modifyPassword.newPassword === "") {
      passwordWarn.value = "";
    }
  };

  //修改密碼fetch串接
  const modifyPwFn = () => {
    console.log(modifyPassword);

    modify_password(JSON.stringify(modifyPassword))
      .then(function (res) {
        console.log(res);
        if (res.status == 200) {
          show.value = false;
          modifyPassword.password = "";
          modifyPassword.newPassword = "";
          modifyPassword.checkPassword = "";
          alert("修改成功");
        } else {
          modifyPassword.password = "";
          modifyPassword.newPassword = "";
          modifyPassword.checkPassword = "";
          alert("修改失敗");
        }
      })
      .catch(function (error) {
        console.error("Error:", error);
      });
  };

  const checkSend = () => {
    if (
      modifyPassword.newPassword === "" ||
      modifyPassword.password === "" ||
      modifyPassword.checkPassword === ""
    ) {
      alert("欄位不能為空"); //有要另外刻畫面再說
      // console.log('欄位不能為空')
      return;
    } else if (modifyPassword.newPassword != modifyPassword.checkPassword) {
      alert("密碼和確認密碼不相符"); //有要另外刻畫面再說
      // console.log('密碼和確認密碼不相符')
      return;
    }
    console.log("執行fetch");
    modifyPwFn();
  };

  return {
    modifyNameOpen,
    modifyPwOpen,
    modifyNamedata,
    show,
    password_error,
    passwordWarn,
    fontColor,
    modifyPassword,
    token,
    OpenNameFn,
    OpenPwFn,
    modifyNickName,
    closeShowView,
    checkPassword,
    checkSend,
    modifyPwFn,
  };
});
