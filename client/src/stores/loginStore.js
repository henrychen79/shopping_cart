import { defineStore } from 'pinia'
import{ref,reactive,computed} from "vue"
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
        const url = `http://localhost:8080/api/user/login`
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
                // console.log('Success:', res);
                return res
            })
            .catch(function(error){
                console.error('Error:', error);
            });
        console.log(resdata.accout)
        
        //回傳內容，
        if(resdata.accout.length!=0){
            console.log('登入成功')
            console.log(resdata)
            document.cookie=`tokenStore=${resdata.token};`

            const token = document.cookie.replace(/(?:(?:^|.*;\s*)tokenStore\s*\=\s*([^;]*).*$)|^.*$/, "$1");
            console.log('取得token測試',token)

            // window.location.href='/'
        }else{
            console.log('登入失敗')
            loginwarmText.value = '登入失敗'
            warmView()  
        }
    }

    return{
        login,warmView,
        userData,loginwarmText,show
    }
})