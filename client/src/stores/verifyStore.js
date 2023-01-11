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
    let warmText = ref('')
    const url='../../account.json'

    const verifySend=async()=>{
        // const url = 'http://172.20.10.7:8080/api/user/updatePassword'
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
                // console.log(res.status);
                // return res.status
                return false
            })
            .catch(function(error){
                console.error('Error:', error);
            });
            
        // console.log(verify)
        if(checkData===true){
            warmText.value='修改成功'
            console.log('修改成功')
        }else{
            warmText.value='修改失敗'
            console.log('修改失敗')
        }


    }


    return{
        verifySend,
        verify,warmText,
        // regOpen,retOpen,
        url//這個假資料用的
    }

})
    