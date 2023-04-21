<template>
    <div class="product-details-view view-container">
        <div class="d-name hidden-tablet">
            {{ product.name }}
        </div>
        <div class="product-container">
            <div class="d-images-container">
                <img class="d-image" :src="activeColor?.imageUrl">
                <div class="d-images-gallery">
                    <img class="d-gallery-item" v-for="(color, index) of product.colors" :key="index" :src="color.imageUrl">
                </div>
                <select @change="setActiveColor()" v-model="selectedColor" class="d-color-select hidden-tablet" id="">
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
            </div>
            <div class="d-product-details">
                <div class="d-name hidden-mobile">
                    {{ product.name }}
                </div>
                <div class="d-price">
                    ${{ product.price }}
                </div>
                <select @change="setActiveColor()" v-model="selectedColor" class="d-color-select hidden-mobile" id="">
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
                <button @click="addToCart()" class="button button-default">Add to Cart</button>
            </div>
        </div>
        <div class="details-container">
            <p class="product-description">{{ product.description }}</p>
            <ul class="product-specs-list">
                <li class="product-spec">
                    <span class="spec-label">Manufacturer: </span>
                    <span class="spec-value">{{ product.manufacturer }}</span>
                </li>
                <li class="product-spec">
                    <span class="spec-label">Category: </span>
                    <span class="spec-value">{{ product.category }}</span>
                </li>
            </ul>
        </div>
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
                this.product.selectedColor = this.activeColor;
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
            display: flex;
            flex-direction: column;
            gap: 2rem;
            .product-container {
                display: flex;
                flex-direction: column;
                gap: 2rem;
            }
            .d-name {
                font-size: 4rem;
                font-family: var(--font-family-secondary);
            }
            .d-images-container {
                display: flex;
                flex-direction: column;
                gap: 2rem;
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
            .d-color-option {
                cursor: pointer;
                font-size: 3rem;
            }
            .d-product-details {
                display: flex;
                flex-direction: column;
                gap: 2rem;
            }
            .d-price {
                font-size: 4rem;
            }
            .details-container {
                font-size: 16px;
                .product-description {
                    text-align: justify;
                }
                .product-specs-list {
                    list-style: none;
                    padding: 0;
                }
                .product-spec {
                    margin: 2rem 0;
                }
                .spec-label {
                    font-weight: bold;
                }
            }
        }
    }
    @media screen and (min-width: 768px) {
        .product-details-view {
            .product-container {
                display: flex;
                flex-direction: row
            }
            .d-product-details {
                width: 100%;
            }
        }
    }
</style>