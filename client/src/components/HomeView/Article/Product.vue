<script setup>

</script>

<template>
    <div class="cards_item">
        <div class="card">
            <div class="card_image"><img src="" alt=""></div>
            <div class="card_content">
                <h3>
                    <slot name="name"></slot>
                </h3>
                <p>
                    <slot name="price"></slot>
                </p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.cards_item {
    display: flex;
    justify-content: center;
    padding: 1rem;
}


@media (min-width: 20rem) {
    .cards_item {
        width: 100%;
    }
}

@media (min-width: 40rem) {
    .cards_item {
        width: 50%;
    }
}

@media (min-width: 56rem) {
    .cards_item {
        width: 33.3333%;
    }
}

.card {
    height: 18rem;
    width: 15rem;
    background-color: rgb(239, 236, 233);
    border: 1px solid brown;
    display: flex;
    flex-direction: column;
    align-items: center;

}

.card_image {
    width: 100%;
    background-color: aliceblue;
    flex: 3;
}

.card_content {
    width: 90%;
    flex: 2;
    /* background-color: rgb(75, 101, 101); */
}

h3 {
    font-size: 2rem;
}

p {
    font-size: 1.5rem;
    color: rgb(186, 54, 54);
    font-weight: bold;
}
</style>
