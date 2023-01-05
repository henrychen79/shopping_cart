<script setup>

</script>

<template>
    <div class="cards_item">
        <div class="card">
            <div class="card_image">
                <slot name="img"></slot>
            </div>
            <div class="card_content">
                <!-- <RouterLink to="/123s"> -->
                <h3>
                    <slot name="name"></slot>
                </h3>
                <!-- </RouterLink> -->
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

@media (min-width: 19rem) {
    .cards_item {
        width: 100%;
    }
}

@media (min-width: 20rem) {
    .cards_item {
        width: 50%;
    }
}

@media (min-width: 40rem) {
    .cards_item {
        width: 33.33333%;
    }
}

@media (min-width: 56rem) {
    .cards_item {
        width: 25%;
    }
}

.card {
    height: 15rem;
    width: 12rem;
    /* background-color: rgb(239, 236, 233); */
    border: 1px solid var(--black-mute);
    display: flex;
    flex-direction: column;
    align-items: center;

}

.card_image {
    width: 100%;
    height: 60%;
    background-color: aliceblue;

}


.card_content {
    width: 90%;
    height: 40%;
    /* flex: 2; */
    /* background-color: rgb(75, 101, 101); */
}

h3 {
    font-size: 1rem;
}

p {
    font-size: 1.2rem;
    color: rgb(186, 54, 54);
    font-weight: bold;
}
</style>
