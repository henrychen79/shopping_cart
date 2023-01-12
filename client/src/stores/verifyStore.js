import { defineStore } from 'pinia'
import{ref,reactive,computed} from "vue"
import router from '../router'
export const useVerifyStore = defineStore('VerifyStore',()=>{

    
    //驗證碼 所存資訊
    let verify = reactive({
        // account:'s1990050479@gmail.com',//信箱
        account:'',
        password:'',//驗證碼
        newPassword:'',//新密碼
        checkPassword:''
    })

    //畫面顯示與否的一些開關
    let show = ref(false)

    let password_error =ref(false)
    let passwordWarn =ref('')
    let fontColor = ref('')

    let warmText = ref('')
    let checkNum = ref(false);
    
    const regex = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,12}$/)
      //判斷密碼是否符合規範 
      const checkPassword=()=>{
        regex.test(verify.newPassword)
        if(regex.test(verify.newPassword)){
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
        if(verify.newPassword===''){
            passwordWarn.value=''
        }
    }
   
    
    
    
    const url='../../account.json'
    const verifySend=async()=>{
        if(verify.password===''||verify.newPassword===''||verify.checkPassword===''){
            warmText.value='欄位不能為空'
            show.value=true
            return
        }else if(verify.newPassword != verify.checkPassword){
            warmText.value='密碼和確認密碼不相符'
            show.value=true
            return
        }
        console.log('1212412512623631')
        // const url = 'http://172.20.10.7:8080/api/user/updatePassword'
        // let url = 'http://localhost:8080/api/user/updatePassword'
        let checkData = await fetch(url, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(verify),
            })
            .then(function(res){
                // console.log(res)
                return res.json()
            })
            .then(function(res){
                console.log(res);
                // return res.status
                return true
            })
            .catch(function(error){
                console.error('Error:', error);
            });
            
        console.log(checkData)
        if(checkData===true){
            warmText.value='修改成功'
            checkNum.value = true
            console.log('修改成功')
        }else{
            warmText.value='修改失敗'
            checkNum.value = false
            console.log('修改失敗')
        }
        show.value=true

    }
    const checkSend =()=>{
        if(checkNum.value===true){
            show.value=false
            console.log('導回login頁面')
        }else{
            show.value=false
            console.log('關掉通知畫面')
        }
    }


    return{
        verifySend,checkSend,checkPassword,
        regex,verify,warmText,show,password_error,passwordWarn,fontColor
        // regOpen,retOpen,
        // url//這個假資料用的
    }

})
    