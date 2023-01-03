<script setup>
import Header from '../components/Header.vue'
import memberinfo from '../components/MemberView/memberinfo.vue'


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