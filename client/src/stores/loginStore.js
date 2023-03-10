import { defineStore } from "pinia";
import { ref, reactive, computed } from "vue";
import router from "../router";
import { loginAccount } from "../apis/user_api";
export const useloginStore = defineStore("loginStore", () => {
  let userData = reactive({
    account: "",
    password: "",
  });
  let loginwarmText = ref("");
  let show = ref(false);
  let islogin = ref(false);
  let nickname = ref("");
  let role = ref("");
  const warmView = () => {
    if (show.value) {
      show.value = false;
    } else {
      show.value = true;
    }
  };

  const login = async () => {
    const url = `http://172.20.10.7:8080/api/user/login`;

    //const url = `${import.meta.env.VITE_APP_API}api/user/login`;
    // console.log(url);
    let resdata = await loginAccount(JSON.stringify(userData))
    // let resdata = fetch(`../../account.json`)
      .then(function (res) {
        console.log(res);
        return res;
      })
      .catch(function (error) {
        console.error("Error:", error);
      });
    console.log(resdata);
    if (resdata.msg === "登錄成功") {
      console.log("登錄成功");
      document.cookie = `_token=${resdata.data.token};`;
      router.push("/");
      islogin.value = true;
      nickname.value = resdata.data.nickname;
      role.value = resdata.data.role;
    } else {
      console.log("登錄失敗");
      loginwarmText.value = "登入失敗";
      warmView();
    }

    //回傳內容，
    // if(resdata.accout.length!=0){
    //     console.log('登入成功')
    //     console.log(resdata)
    //     document.cookie=`access_token=${resdata.token};`

    //     const token = document.cookie.replace(/(?:(?:^|.*;\s*)access_token\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    //     console.log('取得token測試',token)
    //    router.push('/')
    // }else{
    //     console.log('登入失敗')
    //     loginwarmText.value = '登入失敗'
    //     warmView()
    // }
  };

  const test = async () => {
    // const url = `http://172.20.10.7:8080/api/user/login`
    //  fetch(url, {
    //     method: 'POST', // or 'PUT'
    //     headers: {
    //         'Content-Type': 'application/json;charset=UTF-8',
    //         'Authorization':'Bearer ' + document.cookie.replace(/(?:(?:^|.*;\s*)access_token\s*\=\s*([^;]*).*$)|^.*$/, "$1"),
    //     },
    //     body: JSON.stringify(userData),
    //     })
    //     .then(function(res){
    //         return res.json()
    //     })
    //     .then(function(res){
    //         // console.log('Success:', res);
    //         return res
    //     })
    //     .catch(function(error){
    //         console.error('Error:', error);
    //     });
  };
  const logout = () => {
    //會將cookie砍掉
    console.log("logout!!!!");
    let time = new Date();
    let myCookie = document.cookie.replace(
      /(?:(?:^|.*;\s*)_token\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    console.log(myCookie);
    time.setTime(time.getTime() - 1);
    document.cookie =
      "_token" + "=" + myCookie + ";expires=" + time.toGMTString() + ";path=/";
    console.log(document.cookie, time, time.toGMTString());
    if (document.cookie === "") {
      alert("已登出");
      islogin.value = false;
      role.value = "";
    }
  };
  const loginShow = () => {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)_token\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    console.log(router.push);
    if (token === "") {
      //islogin.value = false;
    } else {
      //islogin.value = true;
    }
  };

  const cancel =()=>{
    router.push('/')
  }

  return {
    login,
    warmView,
    test,
    logout,
    loginShow,
    cancel,
    userData,
    loginwarmText,
    show,
    islogin,
    nickname,
    role,
  };
});
