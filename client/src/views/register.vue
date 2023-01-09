<script setup>
import Header from '../components/Header.vue'
import registerComponents from '../components/registerComponents.vue'
import registerWarm from '../components/registerWarm.vue'

</script>

<template>
    <Header />
    <div class="regist_main">
        <!-- <registerWarm/> -->
        <registerComponents/>

    </div>
</template>

<style lang="scss" scoped>

body{
    width: 100%;
    height: 100%;
    margin: auto;
}

.regist_main{
    width: 300px;
    height: 300px;
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%,-50%);
}
@media screen and (max-width: 320px) {
    .regist_main{
        width: 300px;
        height: 450px;
        position: absolute;
        left: 50%;
        top:50%;
        transform: translate(-50%,-50%);
    }
}

</style>