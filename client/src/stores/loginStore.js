import { defineStore } from 'pinia'
import{ref,reactive,computed} from "vue"
import router  from '../router'
export const useloginStore = defineStore('loginStore',()=>{
    let userData=reactive({
        account:'',
        password:'',
    })
    let loginwarmText = ref('')
    let show=ref(false)

    const warmView=()=>{
        if(show.value){
            show.value=false
        }else{
            show.value=true
        }
    }

    const login = async ()=>{
        // const url = `http://localhost:8080/api/user/login`
        const url = `http://192.168.85.160:8080/api/user/login`
        let resdata = await fetch(url, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            },
            body: JSON.stringify(userData),
            })
            .then(function(res){
                return res.json()
            })
            .then(function(res){
                console.log(res);
                return res
            })
            .catch(function(error){
                console.error('Error:', error);
            });
        console.log(resdata.accout)
        if(resdata.msg==="登錄成功"){
            console.log('登錄成功')
            document.cookie=`_token=${resdata.data.token};`
            router.push('/')
        }else{
            console.log('登錄失敗')
            loginwarmText.value = '登入失敗'
            warmView()  
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
    }


    const test = async ()=>{
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
      
    }

    return{
        login,warmView,test,
        userData,loginwarmText,show
    }
})