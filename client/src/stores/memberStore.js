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


    return{
        modifyNameOpen,modifyPwOpen,
        OpenNameFn,OpenPwFn
    }
})