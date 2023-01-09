<script setup>
import Header from '../components/Header.vue'
import memberinfo from '../components/MemberView/memberinfo.vue'


// const token = document.cookie.replace(/(?:(?:^|.*;\s*)tokenStore\s*\=\s*([^;]*).*$)|^.*$/, "$1");
// console.log(token)

//          fetch('http://localhost:8080/api/user/login', {
//             method: 'POST', // or 'PUT'
//             headers: {
//                 'Content-Type': 'application/json;charset=UTF-8',
//                 'Authorization':token
//             },
//             // body: JSON.stringify(userData),
//             })
//             // .then(function(res){
//             //     return res.json()
//             // })
//             // .then(function(res){
//             //     // console.log('Success:', res);
//             //     return res
//             // })
//             // .catch(function(error){
//             //     console.error('Error:', error);
//             // });
        
            

</script>

<template>
    <Header/>
    <div class="main">
       <memberinfo />
    </div>
</template>

<style lang="scss" scoped>



.main{
    border: 2px solid black;
    width: 100%;
    height: 70%;
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%,-50%);
}

</style>