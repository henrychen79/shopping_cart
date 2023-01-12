import { defineStore } from 'pinia'
import{ref,reactive,computed} from "vue"
import router from '../router'
export const useRetrievepwStore = defineStore('Retrievepw',()=>{

    let show =ref(false)

    //輸入信箱所存的資訊
    let retrieveData =reactive({
        account:''
    })

    // //驗證碼 所存資訊
    // let verify = reactive({
    //     // account:'s1990050479@gmail.com',//信箱
    //     account:'',
    //     password:'',//驗證碼
    //     newPassword:'',//新密碼
    //     checkPassword:''
    // })

    const url='../../account.json'
    
    const sendEmail=async()=>{
        // const url = 'http://localhost:8080/api/user/forgetPassword'
        // const url = 'http://172.20.10.7:8080/api/user/forgetPassword'
        let control = await fetch(url, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(retrieveData),
            })
            .then(function(res){
                return res.json()
            })
            .then(function(res){
     
                // return res
                // return res.status
                return true
     
            })
            .catch(function(error){
                console.error('Error:', error);
            });

            // console.log(control)
        // 如果回傳成功，
        if(control===true){
            // console.log(router.push())
            router.push({
                path:'/verify',
                query: { account:retrieveData.account }
            })
        }else{
            show.value=true
            console.log('寄送失敗，請重新確認')
        }

    }

    return{
        sendEmail,
        retrieveData,show,
        // regOpen,retOpen,
        // url//這個假資料用的
    }

})
    