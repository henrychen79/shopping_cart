import { defineStore } from "pinia";
import { ref, reactive, computed } from "vue";
import router from "../router";
import { registerAccount, checkAccountExist } from "../apis/user_api";
export const useRegisterStore = defineStore("RegisterStore", () => {
  //密碼警示 顯示開關
  let passControl = ref(false);

  //密碼警示文字
  let passwordError = ref(false);
  let passwordWarn = ref("");
  let fontColor = ref("red");

  //帳號警示 顯示開關
  let accountControl = ref(false);

  //帳號警示文字
  let accountError = ref(false);
  let accountWarn = ref("");
  let accountColor = ref("red");

  //按鈕可以點擊 開關
  let registOpen = ref(false);

  //存取user輸入的資料
  let data = reactive({
    name: "",
    account: "",
    password: "",
    doublePassword: null,
  });

  let show = ref(false);
  let warmText = ref("");
  // let warmTextBtn = ref(true)

  //===================================================以下為各種function

  //正規表達(密碼判斷)
  const regex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/);

  //每次input帳號欄位 將registOpen.value鎖住，user必須點檢查重複才會開啟
  const registControl = () => {
    registOpen.value = false;
  };

  //帳號input 有輸入文字 就開啟提示顯示
  const AccountText = () => {
    if (data.account != "") {
      accountControl.value = true;
    } else {
      accountControl.value = false;
    }
  };
  //有重複顯示 重複 沒重複顯示''
  const AccountRe = () => {
    // console.log(accountError.value)
    if (accountError.value) {
      accountWarn.value = "帳號已存在，請重新檢查";
      accountColor.value = "red";
    } else {
      accountWarn.value = "可以註冊";
      accountColor.value = "green";
    }
  };
  //每次輸入後先清空 Account的警示文字
  const AccountP = () => {
    accountWarn.value = "";
  };

  //判斷密碼是否符合規範
  const checkPassword = () => {
    regex.test(data.password);
    if (regex.test(data.password)) {
      passwordError.value = false;
    } else {
      passwordError.value = true;
    }
    passwordText();
    checkPasswordWarn();
  };
  //開啟和關閉密碼警示文字
  const passwordText = () => {
    if (data.password != "") {
      passControl.value = true;
    } else {
      passControl.value = false;
    }
  };
  //顯示密碼警示文字及切換顏色
  const checkPasswordWarn = () => {
    if (!passwordError.value) {
      passwordWarn.value = "密碼格式正確";
      fontColor.value = "green";
    } else {
      passwordWarn.value = "密碼格式不符合";
      fontColor.value = "red";
    }

    if (data.password === "") {
      passwordWarn.value = "";
    }
  };

  //點選註冊後，所顯示的各種警告視窗文字
  const warmTextFn = () => {
    console.log(show.value);
    if (show.value) {
      show.value = false;
      // warmTextBtn.value = false
    } else {
      // warmTextBtn.value = true
      show.value = true;
    }
  };

  // const url = '../../account.json' //假資料
  const checkAccount = async () => {
    if (data.account === "") {
      accountWarn.value = "不能為空";
      accountColor.value = "red";
      return;
    }
    //連資料庫用
    const url = `${
      import.meta.env.VITE_APP_API
    }api/user/checkAccountExist?account=${data.account}`;
    let a = await checkAccountExist(data.account)
      .then(function (res) {
        //假資料用
        // return res.userStore.some(function(item,index,array){
        //     return item.account === data.account
        //  })

        //連資料庫用
        console.log("res.repeat", res.repeat);
        return res.repeat;
      })
      .catch((error) => {
        console.error("Error:", error);
      });
    console.log(a);
    if (a) {
      accountError.value = true; //有重複
      registOpen.value = false;
      console.log("重複", accountError.value);
    } else {
      accountError.value = false; //沒有重複
      registOpen.value = true;
      console.log("不重複", accountError.value);
    }
    AccountText();
    AccountRe();
  };
  //將資料打進去後台server
  const registerButton = () => {
    console.log(data);
    registerAccount(JSON.stringify(data))
      .then(function (res) {
        console.log("Success:", res);
        //此次會再有個判斷 ，當註冊成功會跳轉到登入頁面，請user自己登入
        alert("註冊成功"); //有要另外刻畫面再說
        router.push("/login");
      })
      .catch(function (error) {
        console.error("Error:", error);
      });
  };

  //使用者點擊 註冊 執行
  const checkRegisterInfo = () => {
    if (data.name != "" && data.account != "" && data.password != "") {
      if (data.doublePassword === data.password) {
        if (registOpen.value) {
          registerButton(data);
          console.log("執行註冊fetch registerButton(data)");
        } else {
          console.log("尚未點選確認帳號，或該帳號已被註冊請重新檢查");
          warmText.value = "尚未點選確認帳號，或該帳號已被註冊請重新檢查";
          warmTextFn();
        }
      } else {
        console.log("確認密碼不相符");
        warmText.value = "確認密碼不相符";
        warmTextFn();
      }
    } else {
      console.log("欄位不能為空");
      warmText.value = "欄位不能為空";
      warmTextFn();
    }
  };
  const cancel =()=>{
    router.push('/')
  }

  // return{
  //     checkPassword,checkPasswordWarn,passwordText,registerButton,checkAccount,AccountText,AccountRe,AccountP,checkRegisterInfo,test2,warmTextFn,
  //     data,regex,passControl,passwordError,passwordWarn,fontColor,accountControl,accountError,accountColor,accountWarn,registOpen,warmText,warmTextBtn
  // }

  return {
    checkRegisterInfo,
    // checkPassword,
    // checkAccount,
    // AccountP,
    registControl,
    // warmTextFn,
    checkPassword,
    checkPasswordWarn,
    passwordText,
    registerButton,
    checkAccount,
    AccountText,
    AccountRe,
    AccountP,
    checkRegisterInfo,
    warmTextFn,
    cancel,
    data,
    regex,
    passControl,
    passwordError,
    passwordWarn,
    fontColor,
    accountControl,
    accountError,
    accountColor,
    accountWarn,
    registOpen,
    warmText,
    show,
  };
});
