<script setup>
import { ref, reactive, computed, defineProps, defineEmits, watch } from 'vue';
import { userStore } from '../stores/userManageStore'
const us = userStore();
us.fetchUser();

</script>

<template>
    <h1>用戶管理</h1>
    <div class="user">
        <div class="user-item" v-for="(item, index) in us.userDetail" :key="item" >
            <div class="user-item-detail">
                <p>用戶帳號:{{ item.account }}</p>
            </div>
            <div class="user-item-detail">
                  <p>用戶暱稱:{{ item.nickname }}</p> 
            </div>
        </div>
    </div>

</template>
<style scoped>
h1{
    font-size: 1.5rem;
}
p{
    font-size: 1rem;
}
.user {
    display: flex;
    flex-direction: column;
}
.user-item{
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid;
}
.user-item-detail{
    width: 40%;
    display: flex;
    flex-direction: column;
}
.status{
    display: flex;
    flex-direction: row;

}

</style>