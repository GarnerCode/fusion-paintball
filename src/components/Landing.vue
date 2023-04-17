<template>
    <div class="landing">
        <img class="hero-img" src="@/assets/images/land-img.webp" alt="">
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'Landing',
    });
</script>

<style lang="scss">
    @media screen and (min-width: 0px) {
        .landing {
            img {
                width: 100%;
            }
        }
    }
</style>