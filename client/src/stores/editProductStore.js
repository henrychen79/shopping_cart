import { defineStore } from 'pinia'
import{ref,reactive,computed} from "vue"
import router from '../router/index'
import axios from 'axios'


export const editProductStore = defineStore('editProductStore',()=>{

    let file = ref('')
    const dealfilechange = (e) => {
        file = e.target.files[0];
      }

    console.log(router)
    //存取admin輸入的資料
    let data=reactive({
        category:'',
        productNum:'',
        productName:'',
        thumbnail:'',
        price:'',
        inventory:'',
        detail:'',
        img:''
    })

    const uploadImg=()=>{
        let param = new FormData();
        param.append("image", file);
        console.log(param.get('file'));
        let config = { headers: { "Content-Type": "multipart/form-data" } }
        axios.post(`http://172.20.10.4:8080/api/admin/uploadImage?category_id=${data.category}&product_id=${data.productNum}`,param,config)
                .then(response=>{
                  console.log(response.data);
                })
    }




    //點擊按鈕
    const edit=(product_id)=>{
        console.log(data)
        const url =`http://172.20.10.4:8080/api/admin/edit_product?product_id=${product_id}`
        fetch(url, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            })
            .then(function(res){
                console.log(res)
                return res.json()
            })
            .then(function(res){
                console.log('Success:', res);
                data.category=res[0].category,
                data.productNum=res[0].productNum,
                data.productName=res[0].productName,
                data.thumbnail=res[0].thumbnail,
                data.price=res[0].price,
                data.inventory=res[0].inventory,
                data.detail=res[0].detail,
                data.img=''

                router.push({
                    // path:'/admin/editproduct',
                    name:'editproduct',
                })
                
            })
            .catch(function(error){
                console.error('Error:', error);
            });
    }

    const update=()=>{
        console.log(data)
        const url =`http://172.20.10.4:8080/api/admin/update_product`
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

    const updatePrice=(product_id)=>{
        // console.log(data)
        const url =`http://172.20.10.4:8080/api/admin/update_price?product_id=${product_id}`
        console.log(data.price);
        fetch(url, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({price:data.price}),
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

    const updateInventory=(product_id)=>{
        console.log(data)
        const url =`http://172.20.10.4:8080/api/admin/update_inventory?product_id=${product_id}`
        fetch(url, {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({inventory:data.inventory}),
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
        edit,update,updatePrice,updateInventory,uploadImg
    }
})
