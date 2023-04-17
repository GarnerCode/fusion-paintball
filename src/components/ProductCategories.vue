<template>
    <div class="product-categories">
        <div class="section-header">
            Product Categories
        </div>
        <hr>
        <div class="categories-container">
            <div class="category-item" v-for="(category, index) of categories" :key="index">
                <img class="category-img" :src="category.imageUrl">
                <div class="category-label">{{ category.label }}</div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { simpleProductCategories } from '@/constants/productCategories';

    export default defineComponent({
        name: 'ProductCategories',
        data() {
            return {
                categories: simpleProductCategories,
            }
        }
    });
</script>

<style lang="scss">
    @media screen and (min-width: 0px) {
        .product-categories {
            .section-header {
                text-align: center;
                font-size: 3rem;
                margin: 3rem 0;
                font-family: var(--font-family-secondary);
            }
            hr {
                width: 40rem;
                margin-bottom: 3rem;
            }
            .categories-container {
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;
                gap: 3rem;
            }
            .category-item {
                box-shadow: var(--box-shadow);
                padding: 2rem 1rem;
                cursor: pointer;
            }
            .category-img {
                width: 30rem;
            }
            .category-label {
                font-size: 3rem;
                text-align: center;
            }
        }
    }
</style>