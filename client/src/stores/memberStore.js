import { defineStore } from 'pinia'
import{ref,reactive,computed} from "vue"
export const useMemberStore = defineStore('memberStore',()=>{

    // 'Authorization': 'Bearer ' + this.state.clientToken, //fetch端傳送token驗證

    let modifyNamedata=reactive({
        account:'rec27@gmail.com',//登入後會存入
        newNickname:''
    })
    let modifyPassword=reactive({
        password:'',//舊密碼
        newPassword:'',//新密碼
        checkPassword:''//確認密碼
    })

    //true 不顯示 , false 顯示
    let modifyNameOpen = ref(true)
    let modifyPwOpen = ref(true)


    let password_error = ref(false)
    let passwordWarn = ref('')
    let fontColor = ref('')

    let show = ref(false)

    const OpenNameFn = ()=>{
        show.value = true
        if(!modifyNameOpen.value){
            modifyNameOpen.value = true
            closeShowView ()
        }else{
            modifyNameOpen.value = false
            modifyPwOpen.value = true
        }
    }
    const OpenPwFn = ()=>{
        show.value = true
        if(!modifyPwOpen.value){
            modifyPwOpen.value = true
            closeShowView ()
        }else{
            modifyPwOpen.value = false
            modifyNameOpen.value = true  
        }
    }
    const closeShowView =()=>{
        show.value = false
    }

    //修改暱稱fetch串接
     const modifyNickName=()=>{
        if(modifyNamedata.newNickname===''){
            alert('欄位不能為空')
            // console.log('欄位不能為空')
            return
        }
   
        fetch('http://172.20.10.4:8080/api/member/update_nickname', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(modifyNamedata),
            })
            .then(function(res){
                console.log(res)
                return res.json()
            })
            .then(function(res){
                console.log('Success:', res);
                // window.location.href='/'
            })
            .catch(function(error){
                console.error('Error:', error);
            });

    }

//*------------------------------- 密碼欄位區-------------------------------------------* 
const regex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/)
//判斷密碼是否符合規範 
const checkPassword=()=>{
  regex.test(modifyPassword.newPassword)
  if(regex.test(modifyPassword.newPassword)){
      password_error.value = false//顯示開關
      passwordWarn.value='密碼格式正確'
      fontColor.value='green'
     
     console.log('格式正確') 
  }else{
      passwordWarn.value='密碼格式不符合'
      fontColor.value = 'red'
      password_error.value = false
      console.log('格式不正確')
  }
  if(modifyPassword.newPassword===''){
      passwordWarn.value=''
  }
}

//修改密碼fetch串接
    const checkSend=()=>{
        if(modifyPassword.newPassword===''||modifyPassword.password===''||modifyPassword.checkPassword===''){
            alert('欄位不能為空')//有要另外刻畫面再說
            // console.log('欄位不能為空')
            return
        }else if(modifyPassword.newPassword != modifyPassword.checkPassword){
            alert('密碼和確認密碼不相符')//有要另外刻畫面再說
            // console.log('密碼和確認密碼不相符')
            return
        }
        console.log('執行fetch')
    }

    


    return{
        modifyNameOpen,modifyPwOpen,modifyNamedata,
        show,password_error,passwordWarn,fontColor,modifyPassword,
        OpenNameFn,OpenPwFn,modifyNickName,closeShowView,checkPassword,checkSend
    }
})