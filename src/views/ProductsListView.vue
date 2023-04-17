<template>
    <div class="products-list-view view-container">
        <div class="products-list">
            <ProductCard
                v-for="(product, index) of productsByParam()"
                :key="index"
                :product="product"
            >
            </ProductCard>
        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { Product } from '@/interfaces/Product.interface';
    import { productsList } from '@/constants/productsList';
    import ProductCard from '@/components/ProductCard.vue';
import { isArray } from '@vue/shared';

    export default defineComponent({
        name: 'ProductsListView',
        data() {
            return {
                products: [] as Product[],
            }
        },
        components: {
            ProductCard,
        },
        methods: {
            productsByParam(): Product[] {
                const param = this.$route.params.filter.toLocaleString().toLocaleLowerCase();
                let filteredProducts: Product[] = [];
                if (param.length && !isArray(param)) {
                    filteredProducts = this.products.filter((product: Product) => {
                        return product.name.toLocaleLowerCase().includes(param);
                    });
                    if (!filteredProducts.length) {
                        filteredProducts = this.products.filter((product: Product) => {
                            return product.category.toLocaleLowerCase().includes(param);
                        });
                    }
                    if (!filteredProducts.length) {
                        filteredProducts = this.products.filter((product: Product) => {
                            return product.manufacturer.toLocaleLowerCase().includes(param);
                        });
                    }
                    if (!filteredProducts.length) {
                        filteredProducts = productsList;
                    }
                    return filteredProducts;
                }
                return productsList;
            }
        }
    });
</script>

<style lang="scss">
    @media screen and (min-width: 0px) {
        .products-list {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 3rem;
        }
    }
</style>