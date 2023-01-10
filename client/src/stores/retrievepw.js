import { defineStore } from 'pinia'
import{ref,reactive,computed} from "vue"
export const useRetrievepwStore = defineStore('Retrievepw',()=>{
    let retrieveData =reactive({
        account:''
    })
    let verify = reactive({
        // account:'s1990050479@gmail.com',//信箱
        account:retrieveData.account,
        password:'',//驗證碼
        newPassword:'',//新密碼
        checkPassword:''
        // verifyCode:''
    })
    const test=()=>{
        fetch('http://172.20.10.7:8080/api/user/updatePassword', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(retrieveData),
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
    }

    const test2=()=>{
        fetch('http://172.20.10.7:8080/api/user/forgetPassword', {
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
        // console.log(verify)
    }


    return{
        test,test2,
        retrieveData,verify
    }

})
    