import { defineStore } from 'pinia'
import{ref,reactive,computed} from "vue"

export const addProductStore = defineStore('addProductStore',()=>{

    //存取admin輸入的資料
    let data=reactive({
        category:'',
        productNum:'',
        productName:'',
        thumbnail:'',
        price:'',
        inventory:'',
        detail:'',
        img:' '
    })

    //點擊按鈕
    const add=()=>{
        console.log(data)
        const url =`http://172.20.10.4:8080/api/admin/addProduct`
        fetch(url, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            })
            .then(function(res){
                console.log(res)
                return res.json()
            })
            .then(function(res){
                console.log('Success:', res);
            })
            .catch(function(error){
                console.error('Error:', error);
            });
    }

    return{
        data,
        add      
    }
})
