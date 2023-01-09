<script setup>
import {useMemberStore} from '../../stores/memberStore'
const memberStore = useMemberStore();

</script>

<template>
    <div :class="['modify_pw_main',{modifyPwOpen:memberStore.modifyPwOpen}]">
        <div class="modifyPw_txt">
            <label>請輸入舊的密碼:</label>
            <input/>
        </div>
        <div class="modifyPw_txt">
            <label>請輸入新的密碼:</label>
            <input/>
        </div>
        <div class="modifyPw_txt">
            <label>確認新的密碼:</label>
            <input/>
        </div>
        <div class="modify_pw_btn">
            <button>確認</button>
            <button v-on:click="memberStore.OpenPwFn(),memberStore.closeShowView()">取消</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.modify_pw_main{
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    border: 1px solid black;
    border-radius: 5px;
    width: 200px;
    height: 200px;
    >.modifyPw_txt{

    }
    >.modify_pw_btn{
        
    }
}
.modifyPwOpen{
    display: none;
}

</style>