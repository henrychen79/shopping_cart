<script setup>
import {useMemberStore} from '../../stores/memberStore'
const memberStore = useMemberStore();

</script>

<template>
    <div :class="['modify_name_main',{modifyOpen:memberStore.modifyNameOpen}]">
        <div class="modify_txt">
            <label>請輸入新的暱稱:</label>
            <input v-model="memberStore.modifyNamedata.newNickname" />
        </div>
        <div class="modify_name_btn">
            <button class="btn_check" v-on:click="memberStore.modifyNickName">確認</button>
            <button class="btn_cancel" v-on:click="memberStore.OpenNameFn(),memberStore.closeShowView()">取消</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.modify_name_main{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    // border: 1px solid black;
    border-radius: 5px;
    width: 300px;
    height: 200px;
    >.modify_txt{

        >input{
            margin-left: 5px;
            border: none;
            border-bottom: 1px solid black;
            outline: none;
        }
    }
    >.modify_name_btn{
        margin-top: 10%;
        >.btn_check{
            border: none;
            border-radius: 5px;
            margin-right: 30px;
            width: 80px;
            height: 30px;
        }
        >.btn_check:hover{
            transform: scale(1.1);
        }
        >.btn_check:active{
            transform: scale(1);
        }
        >.btn_cancel{
            border: none;
            border-radius: 5px;
            margin-left: 30px;
            width: 80px;
            height: 30px;
        }
        >.btn_cancel:hover{
            //移動到上面放大按鈕
            transform: scale(1.1);
        }
        >.btn_cancel:active{
            //點下去 還原大小
            transform: scale(1);
        }
    }
}
.modifyOpen{
    display: none;
}

</style>