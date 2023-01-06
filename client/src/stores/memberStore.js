import { defineStore } from 'pinia'
import{ref,reactive,computed} from "vue"
export const useMemberStore = defineStore('memberStore',()=>{

    //true 不顯示 , false 顯示
    let modifyNameOpen = ref(true)
    let modifyPwOpen = ref(true)

    const OpenNameFn = ()=>{
        if(!modifyNameOpen.value){
            modifyNameOpen.value = true
        }else{
            modifyNameOpen.value = false
        }
    }
    const OpenPwFn = ()=>{
        if(!modifyPwOpen.value){
            modifyPwOpen.value = true
        }else{
            modifyPwOpen.value = false
        }
    }

    //修改暱稱fetch串接
    let modifyNamedata=reactive({
        account:'rec27@gmail.com',//登入後會存入
        newNickname:''
    })
     const modifyNickName=()=>{
   
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
    


    return{
        modifyNameOpen,modifyPwOpen,modifyNamedata,
        OpenNameFn,OpenPwFn,modifyNickName
    }
})