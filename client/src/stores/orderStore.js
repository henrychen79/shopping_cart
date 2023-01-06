import { defineStore } from 'pinia'
import{ref,reactive,computed} from "vue"
export const userOrderStore = defineStore('orderStore',()=>{

    
    // const url = '../../account.json'

    // const orederTest =async ()=>{
    //     const aaa = 'rec27@gmail.com'
    //     console.log(url)
    //     const url = `http://172.20.10.4:8080/api/member/getAllOrders?account=${aaa}`
    //     let data = await fetch(url, {
    //         method: 'GET', 
    //         headers: {
    //             'Content-Type': 'application/json;charset=UTF-8',
    //         },
    //         })
    //         .then(function(res){
    //             console.log(res)
    //             return res.json()
    //         })
    //         .then(function(res){
    //             console.log('res',res)
    //             // return res
    //         })
    //         .catch((error) => {
    //         console.error('Error:', error);
    //     });
    //     console.log(data)
    // }

    // const test=()=>{
    //     let data = {
    //         account:'rec27@gmail.com',
    //         newNickname:'微維'
    //     }
    //     fetch('http://172.20.10.4:8080/api/member/update_nickname', {
    //         method: 'POST', // or 'PUT'
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(data),
    //         })
    //         .then(function(res){
    //             console.log(res)
    //             return res.json()
    //         })
    //         .then(function(res){
    //             console.log('Success:', res);
    //             // window.location.href='/'
    //         })
    //         .catch(function(error){
    //             console.error('Error:', error);
    //         });

    // }
    
   

    let orderList = ref([])
    const orederTest =async ()=>{
        const url = '../../orderTest.json'
        //以下 aaa url 連結資料庫用
        // const aaa = 'rec27@gmail.com'
        // const url = `http://172.20.10.4:8080/api/member/getAllOrders?account=${aaa}`
        try {
            let data =  await fetch(url, {
                method: 'GET', 
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                },
                })
                .then(function(res){
                    return res.json()
                })
                .then(function(res){
                    console.log(res)
                    return res
                })
                .catch((error) => {
                console.error('Error:', error);
            });
                // orderList.value = data //要連資料庫開啟的(要用這個記得把下面那段註解起來)
                orderList.value = data.order //假資料用
            }catch (error) {   
                console.log(error)
        }
    }
    

    return{
        orederTest,
        // url,
        orderList,
        // aaa
    }
})