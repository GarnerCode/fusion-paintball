<template>
    <div class="cart-view view-container">
        <div class="cart-items-list" v-if="globalStore.getCartItems.length">
            <div class="cart-item" v-for="(item, index) of globalStore.getCartItems" :key="index">
                <img @click="navToProductPage(item.id)" class="cart-item-image" :src="item.selectedColor?.imageUrl">
                <div class="cart-item-name">
                    {{ item.name }}
                </div>
                <div class="cart-item-price">
                    ${{ item.price }}
                </div>
            </div>
        </div>
        <div class="cart-price-total" v-if="globalStore.getCartItems.length">
            ${{ globalStore.getPriceTotal() }}
        </div>
        <div class="checkout-container">
            <button @click="navToCheckout()" class="button button-default cart-checkout" v-if="globalStore.getCartItems.length">Check Out</button>
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
            },
            navToCheckout(): void {
                this.$router.push('/checkout');
            },
            navToProductPage(productId: string): void {
                this.$router.push(`/product-details/${productId}`);
            },
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
                cursor: pointer;
            }
        }
        .cart-price-total {
            text-align: right;
            font-size: 3rem;
            font-weight: bold;
            padding-top: 1rem;
        }
        .checkout-container {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            margin-top: 2rem;
        }
        .cart-no-items {
            font-size: 3rem;
            text-align: center;
        }
    }
    @media screen and (min-width: 768px) {
        .cart-view {
            padding-left: 10rem;
            padding-right: 10rem;
        }
    }
    @media screen and (min-width: 1024px) {
        .cart-view {
            padding-left: 25rem;
            padding-right: 25rem;
        }
    }
</style>