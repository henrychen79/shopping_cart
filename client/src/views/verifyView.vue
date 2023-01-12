<script setup>
import Header from '../components/Header.vue'
import verify from '../components/verifyPassword.vue'

</script>
<template>
    <Header/>
    <div class="main">
        <verify/>
    </div>
</template>

<style lang="scss" scoped>
*{
    margin: 0;
    padding: 0;
    list-style: none;
}
body{
    width: 100%;
    height: 100%;
    margin: auto;
}

.main{
    width: 300px;
    height: 300px;
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%,-50%);
}
@media screen and (max-width: 320px) {
    .main{
        width: 300px;
        height: 450px;
        position: absolute;
        left: 50%;
        top:50%;
        transform: translate(-50%,-50%);
    }
}


</style>