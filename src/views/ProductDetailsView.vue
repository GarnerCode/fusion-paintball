<template>
    <div class="product-details-view view-container">
        <div class="d-name">
            {{ product.name }}
        </div>
        <img class="d-image" :src="activeColor?.imageUrl">
        <div class="d-images-gallery">
            <img class="d-gallery-item" v-for="(color, index) of product.colors" :key="index" :src="color.imageUrl">
        </div>
        <select @change="setActiveColor()" v-model="selectedColor" class="d-color-select" id="">
            <option 
                v-for="(color, index) of product.colors" 
                :key="index" 
                class="d-color-option" 
                :value="color.color"
                @click="setActiveColor(color.color)"
            >
                {{ color.color }}
            </option>
        </select>
        <div class="d-price">
            ${{ product.price }}
        </div>
        <button @click="addToCart()" class="button button-default">Add to Cart</button>
    </div>
</template>

<script lang="ts">
    import { Color, Product } from '@/interfaces/Product.interface';
    import { productsList } from '@/constants/productsList';
    import { defineComponent } from 'vue';
    import { useGlobalStore } from '@/store/global.store';

    export default defineComponent({
        name: 'ProductsDetailsView',
        data() {
            return {
                product: {} as Product,
                activeColor: {} as Color | undefined,
                selectedColor: '' as string | undefined,
                globalStore: useGlobalStore(),
            }
        },
        mounted() {
            this.findProduct();
            this.activeColor = this.product.colors[0];
            this.selectedColor = this.activeColor?.color;
        },
        methods: {
            findProduct(): void {
                const product = productsList.find((product: Product) => {
                    return product.id === this.$route.params.id;
                });
                if (product) {
                    this.product = product;
                }
            },
            setActiveColor(): void {
                this.activeColor = this.product.colors.find((color: Color) => {
                    return this.selectedColor === color.color;
                });
            },
            addToCart(): void {
                const cartItems = this.globalStore.getCartItems;
                cartItems.push(this.product);
                this.globalStore.setCartItems(cartItems);
                this.$router.push('/cart');
            },
        }
    });
</script>

<style lang="scss">
    @media screen and (min-width: 0px) {
        .product-details-view {
            padding: 2rem 3rem;
            display: flex;
            flex-direction: column;
            gap: 2rem;
            .d-name {
                font-size: 3.5rem;
                font-family: var(--font-family-secondary);
            }
            .d-image {
                width: 100%;
                display: block;
                margin: 0 auto;
                box-shadow: var(--box-shadow);
            }
            .d-images-gallery {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                gap: 1rem;
            }
            .d-gallery-item {
                width: 10rem;
                box-shadow: var(--box-shadow);
                cursor: pointer;
            }
            .d-color-select {
                font-size: 3rem;
                padding: 1rem;
                cursor: pointer;
            }
            .d-color-option {
                cursor: pointer;
            }
            .d-price {
                font-size: 4rem;
            }
        }
    }
</style>