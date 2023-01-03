import { defineStore } from 'pinia'
import{ref,reactive,computed} from "vue"
export const useloginStore = defineStore('loginStore',()=>{
    let userData=reactive({
        account:'',
        password:'',
    })

    const login = ()=>{
        fetch('http://localhost:8080/api/user/login', {
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
                console.log('Success:', res);
            })
            .catch(function(error){
                console.error('Error:', error);
            });
        console.log(userData)
    }

    return{
        login,
        userData
    }
})