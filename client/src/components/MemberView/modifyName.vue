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
            <button v-on:click="memberStore.modifyNickName">確認</button>
            <button v-on:click="memberStore.OpenNameFn(),memberStore.closeShowView()">取消</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.modify_name_main{
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
    >.modify_txt{

    }
    >.modify_name_btn{
        
    }
}
.modifyOpen{
    display: none;
}

</style>