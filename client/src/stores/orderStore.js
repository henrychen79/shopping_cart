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
    const changeTime=(dateTime)=>{
        let ISOSChangeJson = new Date(dateTime).toJSON();
        let time = new Date(+new Date(ISOSChangeJson)+8*3600*1000).toISOString()
                    .replace(/T/g,' ').replace(/\.[\d]{3}Z/,'');
        return time
    }

    const orederTest =async ()=>{
        // const url = '../../orderTest.json'
        // const url =`http://172.20.10.5:8080/api/order/list/${1}`
        const url = `../../newOrderTest.json`
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
                    res.filter(function(item){
                        item.order_time = changeTime(item.order_time)
                    })
                    return res
                })
                .catch((error) => {
                console.error('Error:', error);
            });

                // orderList.value = data //假資料用
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