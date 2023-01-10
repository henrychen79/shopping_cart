import { defineStore } from 'pinia'
import{ref,reactive,computed} from "vue"
export const useRetrievepwStore = defineStore('Retrievepw',()=>{

    const test=()=>{
        console.log('123')
    }

    return{
        test
    }

})
    