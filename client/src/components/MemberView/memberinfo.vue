<script setup>
import modifyName from './modifyName.vue'
import modifyPassWord from './modifyPw.vue'
import {useMemberStore} from '../../stores/memberStore'
const memberStore = useMemberStore();

</script>

<template>

<h1>會員中心</h1>
<div class="mainInfo">
    <div class="reviseInfo">
        <h2>修改會員資料</h2>
        <div class="test"></div>
        <ul>
            <li><a href="#" v-on:click="memberStore.OpenPwFn">修改密碼</a></li>
            <li><a href="#" v-on:click="memberStore.OpenNameFn">修改暱稱</a></li>
        </ul>
    </div>
    <div class="orderInfo">
        <h2>訂單查詢</h2>
        <div class="test"></div>
    </div>
</div>
    <modifyName/>
    <modifyPassWord/>
</template>

<style lang="scss" scoped>
h1{
    margin:10px 2rem;
}
.mainInfo{
    // border: 2px solid red;
    width: 80%;
    height: 70%;
    margin: auto 2rem;
    display: flex;
    flex-direction: column;
    >.reviseInfo{
        margin: auto 2rem;
        flex:1;
        >.test{
            margin: 0px;
            height: 1px;
            width: 15%;
            border: none;
            border-bottom: 5px solid black;
            box-shadow:0px 4px 3px 0px rgb(207, 202, 202)
        }
    }
    >.orderInfo{
        margin: auto 2rem;
        flex:1; 
         >.test{
            margin: 0px;
            height: 1px;
            width: 10%;
            border: none;
            border-bottom: 5px solid black;
            box-shadow:0px 4px 3px 0px rgb(207, 202, 202)
        }
    }
}
</style>