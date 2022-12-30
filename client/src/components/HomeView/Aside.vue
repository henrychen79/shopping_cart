<script setup>

</script>

<template>

    <aside class="aside">
        <ul class="productBar">
            <p>商品分類</p>
            <li><a href="#">類別1</a></li>
            <li><a href="#">類別2</a></li>
            <li><a href="#">類別3</a></li>
        </ul>
    </aside>

</template>
<style scoped>
.aside {
    flex: 1;
    display: flex;
    justify-content: center;
}

ul.productBar {
    display: flex;
    flex-direction: column;
    padding-top: 16px;
}

ul>p {
    font-size: 1.2rem;
}

ul.productBar li {
    padding: 10px 0;
}

ul.productBar li a {
    text-decoration: none;
    color: rgb(25, 25, 25);
    font-size: 1rem;
}
</style>
