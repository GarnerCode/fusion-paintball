<template>
    <div class="cart-view view-container">
        <div class="cart-items-list" v-if="globalStore.getCartItems.length">
            <div class="cart-item" v-for="(item, index) of globalStore.getCartItems" :key="index">
                <img class="cart-item-image" :src="item.selectedColor?.imageUrl">
                <div class="cart-item-name">
                    {{ item.name }}
                </div>
                <div class="cart-item-price">
                    ${{ item.price }}
                </div>
            </div>
        </div>
        <div class="cart-price-total" v-if="globalStore.getCartItems.length">
            ${{ calculateTotal() }}
        </div>
        <div class="cart-no-items" v-if="!globalStore.getCartItems.length">
            Your cart is empty
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { useGlobalStore } from '@/store/global.store';
    import { Product } from '@/interfaces/Product.interface';

    export default defineComponent({
        name: 'CartView',
        data() {
            return {
                globalStore: useGlobalStore(),
            }
        },
        methods: {
            calculateTotal(): string {
                let total = 0;
                this.globalStore.getCartItems.forEach((product: Product) => {
                    total += product.price;
                });
                return total.toFixed(2);
            }
        }
    });
</script>

<style lang="scss">
    @media screen and (min-width: 0px) {
        .cart-items-list {
            display: flex;
            flex-direction: column;
            .cart-item {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                border-bottom: 1px solid var(--color-primary);
                padding: 1rem 0;
            }
            .cart-item-name {
                font-size: 2rem;
                max-width: 18rem;
            }
            .cart-item-price {
                font-size: 2rem;
            }
            .cart-item-image {
                width: 10rem;
            }
        }
        .cart-price-total {
            text-align: right;
            font-size: 2rem;
            font-weight: bold;
            padding-top: 1rem;
        }
        .cart-no-items {
            font-size: 3rem;
            text-align: center;
        }
    }
</style>