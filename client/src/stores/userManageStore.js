import { defineStore } from 'pinia'
import{ref,reactive,computed} from "vue"

export const userStore = defineStore('userStore',()=>{
    let userDetail = ref([]);

const fetchUser = async () => {
    const url = `http://172.20.10.4:8080/api/admin/getAllUsers`
    // const url = `../../orderTest.json`
    try {
        let data = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
            },
        })
            .then(function (res) {
                return res.json()
            })
            .then(function (res) {
                console.log(res)
                return res
            })
            .catch((error) => {
                console.error('Error:', error);
            });
            userDetail.value = data;
    } catch (error) {
        console.log(error)
    }

}

    return{
        fetchUser,
        userDetail
    }
})