<template>
    <div class="product-card" v-if="product">
        <img class="c-image" :src="getDefaultImage()" @click="navToProduct()">
        <div class="c-details">
            <div class="c-name">{{ product.name }}</div>
            <div class="c-color-count" v-if="product.colors.length > 1">
                {{ product.colors.length }} Colors
            </div>
            <div class="c-row">
                <div class="c-price">${{ product.price }}</div>
                <button @click="navToProduct()" class="c-button button button-default">View Details</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { Color } from '@/interfaces/Product.interface';

    export default defineComponent({
        name: 'ProductCard',
        data() {
            return {}
        },
        props: {
            product: {
                type: Object
            }
        },
        methods: {
            getDefaultImage(): string {
                const defaultColor: Color = this.product?.colors.find((color: Color) => {
                    return color.defaultColor
                });
                if (defaultColor) {
                    return defaultColor.imageUrl;
                }
                return this.product?.colors[0].imageUrl;
            },
            navToProduct(): void {
                this.$router.push(`/product-details/${this.product?.id}`);
            },
        }
    });
</script>

<style lang="scss">
    @media screen and (min-width: 0px) {
        .product-card {
            box-shadow: var(--box-shadow);
            padding: 2rem 1rem;
            height: 55rem;
            border-radius: var(--border-radius);
            .c-image {
                width: 45rem;
                cursor: pointer;
            }
            .c-details {
                padding: 1rem;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                gap: 2rem;
                height: 18rem;
            }
            .c-name {
                font-size: 3rem;
                font-family: var(--font-family-secondary);
            }
            .c-color-count {
                font-style: italic;
                font-size: 2rem;
                margin-top: 1rem;
            }
            .c-row {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
            }
            .c-price {
                font-size: 3.5rem;
            }
        }
    }
    @media screen and (min-width: 768px) {
        .product-card {
            .c-image {
                width: 42rem;
            }
        }
    }
    @media screen and (min-width: 1024px) {
        .product-card {
            height: 44rem;
            .c-image {
                width: 30rem;
            }
            .c-name {
                max-width: 28rem;
            }
            .c-price {
                font-size: 3rem;
            }
        }
    }
</style>