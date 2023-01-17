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
            <div class="cancel-btn"><font-awesome-icon icon="fas fa-times" class="icon" /></div>
        </label>

        <ul class="productBar">
            <li>
                <p class="classic">商品分類</p>
            </li>
            <router-link to="/">
                <li v-for="item in ps.totalCategoryList" @click="ps.productAPI(item, ps.crrentPage, ps.sortValue)"
                    key="item"> {{
    item
                    }}</li>
            </router-link>
        </ul>
    </aside>

</template>
<style scoped lang="scss">
.aside {
    flex: 1;
    display: flex;
    justify-content: center;

    ul {
        background-color: #e5e5e5;
        margin-top: 2rem;
        width: 90%;
        height: fit-content;
        border-radius: 5px;

        &>li {
            border-bottom: 1px solid var(--black);
        }

        a li:not(:last-child) {
            border-bottom: 1px solid var(--grey-mute);
        }

        li {
            font-size: 1.2rem;
            padding: 0.5rem 1rem;
        }

        a li:hover {
            background-color: rgb(243, 242, 242);
            cursor: pointer;
        }
    }
}

.aside-btn {
    position: fixed;
    left: 0;
    width: 1.6rem;
    height: 1.6rem;
    background-color: var(--grey);
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    cursor: pointer;
}

.cancel-btn {
    text-align: right;
    padding-right: 0.5rem;
    margin-top: 0.4rem;

    .icon {
        cursor: pointer;
    }
}

#aside-btn:checked~.aside {

    display: block;
    position: fixed;
    min-width: 150px;
    top: 0px;
    z-index: 999;
    height: 100%;
    background-color: var(--white-soft);

    .cancel-btn {
        display: block;
    }


    ul.productBar {
        padding-top: 0;
        margin: 3rem auto;
    }
}

#aside-btn:checked~label .aside-btn {
    display: none;
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
