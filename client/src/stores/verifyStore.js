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
    let show = ref(false)
    let warmText = ref('')
    let checkNum = ref(false);
    
    // const url='../../account.json'

    const verifySend=async()=>{
        console.log('有直行我嗎')
        // const url = 'http://172.20.10.7:8080/api/user/updatePassword'
        let url = 'http://localhost:8080/api/user/updatePassword'
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
                return res.status
                // return true
            })
            .catch(function(error){
                console.error('Error:', error);
            });
            
        console.log(checkData)
        // if(checkData===true){
        //     warmText.value='修改成功'
        //     checkNum.value = true
        //     console.log('修改成功')
        // }else{
        //     warmText.value='修改失敗'
        //     checkNum.value = false
        //     console.log('修改失敗')
        // }
        show.value=true

    }
    const checkSend =()=>{
        if(checkNum.value){
            console.log('導回login頁面')
        }else{
            show.value=false
            console.log('關掉通知畫面')
        }
    }


    return{
        verifySend,checkSend,
        verify,warmText,show,
        // regOpen,retOpen,
        // url//這個假資料用的
    }

})
    