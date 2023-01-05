<script setup>
import { productStore } from '../../stores/productStore'

const ps = productStore();

</script>

<template>

    <input type="checkbox" id="aside-btn">
    <label for="aside-btn">
        <div class="aside-btn">
            <font-awesome-icon icon="fas fa-bars" />
        </div>
    </label>
    <aside class="aside">
        <label for="aside-btn">
            <div class="cancel-btn"><font-awesome-icon icon="fas fa-times" /></div>
        </label>
        <ul class="productBar">
            <li>
                <p>商品分類</p>
            </li>
            <li v-for="item in ps.totalCategoryList" @click="ps.currentCategory = item"><a href="#">{{ item
                    }}</a></li>
        </ul>
    </aside>

</template>
<style scoped lang="scss">
.aside {
    flex: 1;
    display: flex;
    justify-content: center;

    ul.productBar {
        display: flex;
        flex-direction: column;
        padding-top: 2rem;

        li {
            padding: 0 2rem;
            background-color: var(--grey);

            a {
                text-decoration: none;
                color: rgb(25, 25, 25);
                font-size: 1rem;
            }
        }
    }

    ul>p {
        font-size: var(--text-m);
    }
}

.aside-btn {
    position: fixed;
    left: 0;
    width: 1.6rem;
    height: 1.6rem;
    background-color: var(--grey);
    // border-radius: 0 0 5px 5px;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;

}

.cancel-btn {
    text-align: right;
    padding-right: 0.5rem;
    margin-top: 0.4rem;
}

#aside-btn:checked~.aside {
    display: block;
    position: fixed;
    height: 100%;
    background-color: var(--white-soft);

    .cancel-btn {
        display: block;
    }

    ul.productBar {

        padding-top: 0;
    }
}

#aside-btn,
.aside-btn,
.cancel-btn {
    display: none;
}

@media only screen and (max-width: 960px) {
    .aside {
        display: none;
    }

    .aside-btn {
        display: flex;
    }
}
</style>
