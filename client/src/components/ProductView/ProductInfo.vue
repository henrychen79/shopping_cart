<script setup>




</script>

<template>

    <article class="article">
        <div class="item">
            <div class="itemImg"><img src="" alt=""></div>
            <div class="itemInfo">
                <h1>商品名稱</h1>
                <h2>$99,999</h2>
                <p>庫存數量</p>
                <div>
                    <span>數量</span>
                    <select>
                        <option>1</option>
                    </select>
                </div>
                <button>放入購物車</button>
            </div>
        </div>
        <div class="itemContent">
            <p>商品規格</p>
            <p>weijofoewjfojwef;ojwefo;j</p>

        </div>

    </article>


</template>
<style scoped>
.article {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 5;
    gap: 2rem
}

.item {
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 5rem;
}

.itemImg {
    width: 30rem;
    height: 25rem;
    background-color: antiquewhite;
}

.itemInfo {
    display: flex;
    flex-direction: column;
    gap: 3rem;
}

.itemContent {
    align-self: flex-start;
}
</style>
