import { defineStore } from 'pinia'
import{ref,reactive,computed} from "vue"
export const useRegisterStore = defineStore('RegisterStore',()=>{
    //密碼警示 顯示開關
   let passControl = ref(false)
    
    //密碼警示文字
    let passwordError = ref(false);
    let passwordWarn=ref('')
    let fontColor = ref('red')

    //帳號警示 顯示開關
    let accountControl = ref(false)
    
    //帳號警示文字
    let accountError = ref(false);
    let accountWarn=ref('')
    let accountColor = ref('red')


    //按鈕可以點擊 開關
    let isDisabled = ref(true)

    //存取user輸入的資料
    let data=reactive({
        name:'',
        account:'',
        password:'',
        doublePassword:null
    })
    //正規表達(密碼判斷)
    const regex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/);

    const url = '../../account.json' //假資料
    // const url = `http://localhost:8080/api/user/checkAccountExist?account=${data.account}`
    //判斷帳號是否重複
    const checkAccount= async ()=>{
        // console.log(data.account)
        // console.log(url)
        let a = await fetch(url, {
                method: 'GET', 
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                },
                })
                .then(function(res){
                    return res.json()
                })
                .then(function(res){
                    console.log('res',res)
                    return res //假資料用
                    // return res.message
                })
                .catch((error) => {
                console.error('Error:', error);
            });
        console.log(a)    
        if(a){
            accountError.value = true//有重複
            console.log('重複',accountError.value)
        }else{
            accountError.value = false//沒有重複
            console.log('不重複',accountError.value)
        }
        AccountText()
        AccountRe()
        doubleCheckPassword()
    }

    //帳號input 有輸入文字 就開啟提示顯示
    const AccountText = ()=>{
        if(data.account!=''){
            accountControl.value = true
        }else{
            accountControl.value =false
        }
    }
    //有重複顯示 重複 沒重複顯示''
    const AccountRe=()=>{
        // console.log(accountError.value)
        if(accountError.value){
            accountWarn.value='帳號已存在，請重新檢查'
            accountColor.value='red'
        }else{
            accountWarn.value=''
        }
    }

    //判斷密碼是否符合規範 
    const checkPassword=()=>{
        regex.test(data.password)
        if(regex.test(data.password)){
            passwordError.value = false
        }else{
            passwordError.value = true
        }
        passwordText()
        checkPasswordWarn()
        doubleCheckPassword()
    }
    //開啟和關閉密碼警示文字
    const passwordText=()=>{
        if(data.password!=''){
            passControl.value = true
        }else{
            passControl.value = false
        }
    }
    //顯示密碼警示文字及切換顏色
    const checkPasswordWarn=()=>{
        if(!passwordError.value){
            passwordWarn.value='密碼格式正確'
            fontColor.value='green'
        }else{
            passwordWarn.value='密碼格式不符合'
            fontColor.value = 'red'
        }

        if(data.password===''){
            passwordWarn.value=''
        }
    }

    //確認密碼監聽，核對整個資料，若都正確將註冊按鈕打開(先初步設定)
    const doubleCheckPassword=()=>{
        if(data.doublePassword!=data.password){
            isDisabled.value=true
            // console.log('密碼輸入錯誤')
            return
        }
        console.log(passwordWarn.value,accountError.value)
        if(data.password===data.doublePassword){
            if(data.name!=''&&data.account!=''&&data.password!=''&&passwordError.value===false&&accountError.value===false){
                console.log('格式都正確')
                isDisabled.value=false
            }else{
                isDisabled.value=true
            }
        }
       

    }


    //點擊按鈕
    const registerButton=()=>{
        console.log(data)
        fetch('http://localhost:8080/api/user/registerAccount', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            })
            .then(function(res){
                console.log(res)
                return res.json()
            })
            .then(function(res){
                console.log('Success:', res);
            })
            .catch(function(error){
                console.error('Error:', error);
            });
    }

    return{
        checkPassword,checkPasswordWarn,passwordText,registerButton,doubleCheckPassword,checkAccount,AccountText,AccountRe,
        data,regex,passControl,passwordError,passwordWarn,isDisabled,fontColor,accountControl,accountError,accountColor,accountWarn
    }
})
