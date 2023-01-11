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
    const url='../../account.json'

    const test2=()=>{
        // const url = 'http://172.20.10.7:8080/api/user/updatePassword'
        fetch(url, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(verify),
            })
            .then(function(res){
                console.log(res)
                return res.json()
            })
            .then(function(res){
                //會在新增
                console.log(res);
     
            })
            .catch(function(error){
                console.error('Error:', error);
            });
            // verify.account  = a
        console.log(verify)
    }


    return{
        test2,
        verify,
        // regOpen,retOpen,
        url//這個假資料用的
    }

})
    