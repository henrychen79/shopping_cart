<script setup>
import {useMemberStore} from '../../stores/memberStore'
const memberStore = useMemberStore();

</script>

<template>
    <!-- memberStore.modifyPwOpen -->
    <div :class="['modify_pw_main',{modifyPwOpen:memberStore.modifyPwOpen}]">
        <div class="modifyPw_txt">
            <label>輸入舊的密碼:</label>
            <input type="password" v-model="memberStore.modifyPassword.password"/>
        </div>
        <div class="modifyPw_txt">
            <label>輸入新的密碼:</label>
            <input type="password" 
            @keyup="memberStore.checkPassword"  
                v-model="memberStore.modifyPassword.newPassword" 
                placeholder="需輸入8~12英數混合"/>
            <p :class="['error_txt',{open:memberStore.password_error}]" 
            :style="{color:memberStore.fontColor}" v-text="memberStore.passwordWarn"></p>

        </div>
        <div class="modifyPw_txt">
            <label>確認新的密碼:</label>
            <input type="password"  v-model="memberStore.modifyPassword.checkPassword" />
        </div>
        <div class="modify_pw_btn">
            <button class="btn_check" @click="memberStore.checkSend">確認</button>
            <button class="btn_cancel" v-on:click="memberStore.OpenPwFn(),memberStore.closeShowView()">取消</button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.modify_pw_main{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    // border: 1px solid black;
    border-radius: 5px;
    width: 350px;
    height: 300px;
    >.modifyPw_txt{
        flex:1;
        margin: 10px;
        
        >input{
            margin: 10px;
            border: none;
            border-bottom: 1px solid black;
            flex:2;
            font-size:18px;
            outline:none;
            width: 50%; 
        }
        >label{
            flex:1;
        }
        >.error_txt{
                font-size: 12px;
                margin: 0;
                text-align: center;
            }
            >.open{
                display:none;
            }
    }
    >.modify_pw_btn{
        flex:1;
        display: flex;
        >.btn_check{
            margin-right: 30px;
            margin-bottom: 20px;
            width: 80px;
            height: 30px;
            border-radius: 5px;
            border: none;
        }
        >.btn_check:hover{
            //移動到上面放大按鈕
            transform: scale(1.1);
        }
        >.btn_check:active{
            //點下去 還原大小
            transform: scale(1);
        }
        >.btn_cancel{
            margin-left: 30px;
            margin-bottom: 20px;
            width: 80px;
            height: 30px;
            border-radius: 5px;
            border: none;
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
.modifyPwOpen{
    display: none;
}

</style>