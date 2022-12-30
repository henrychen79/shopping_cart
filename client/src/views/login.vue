<script setup>
import loginComponents from '../components/loginComponents.vue'

</script>

<template>
    <div class="login_main">
        <loginComponents/>
    </div>
</template>

<style lang="scss" scoped>
body{
    width: 100%;
    height: 100%;
    margin: auto;
}

.login_main{
    width: 300px;
    height: 300px;
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%,-50%);
}

</style>