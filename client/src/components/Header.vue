<script setup>



</script>

<template>

    <header>
        <div id="logo">
            <img src="" alt="">
        </div>
        <ul class="headerBar">
            <li><a href="#">你好!</a></li>
            <li><a href="#">登入</a></li>
            <li><a href="#">註冊</a></li>
            <li><a href="#">會員中心</a></li>
            <li><a href="#">訂單查詢</a></li>
            <li><a href="#">購物車</a></li>
        </ul>
    </header>

</template>
<style scoped>
header {
    display: flex;
    justify-content: space-between;
}

ul.headerBar {
    display: flex;
    /* gap: 1rem; */
}

ul.headerBar li a {
    text-decoration: none;
    color: rgb(25, 25, 25);
    font-size: 1.5rem;
}

ul.headerBar li {
    margin: 1rem 0;
    padding: 0 1rem;
}

ul li:not(:nth-child(1)) {
    /* background-color: aqua; */
    border-left: 1px solid rgb(25, 25, 25);
    ;
}
</style>
