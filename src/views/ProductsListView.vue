<template>
    <div class="products-list-view view-container">
        <div class="products-list" v-if="products.length">
            <ProductCard
                v-for="(product, index) of products"
                :key="index"
                :product="product"
            >
            </ProductCard>
        </div>
        <div class="products-list no-products" v-if="!products.length">

        </div>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { Product } from '@/interfaces/Product.interface';
    import { productsList } from '@/constants/productsList';
    import ProductCard from '@/components/ProductCard.vue';

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
        mounted() {
            this.filterProductsByParam();
        },
        watch: {
            '$route.params.filter': {
                handler: function (val) {
                    if (val) {
                        this.filterProductsByParam();
                    }
                }
            }
        },
        methods: {
            filterProductsByParam(): void {
                const param = this.$route.params.filter.toLocaleString().toLocaleLowerCase();
                console.log('param: ', param);
                let filteredProducts: Product[] = [];
                console.log('products: ', productsList);
                if (param.length) {
                    console.log('filtering products');
                    filteredProducts = productsList.filter((product: Product) => {
                        return product.name.toLocaleLowerCase().includes(param);
                    });
                    if (!filteredProducts.length) {
                        filteredProducts = productsList.filter((product: Product) => {
                            return product.category.toLocaleLowerCase().includes(param);
                        });
                    }
                    if (!filteredProducts.length) {
                        filteredProducts = productsList.filter((product: Product) => {
                            return product.manufacturer.toLocaleLowerCase().includes(param);
                        });
                    }
                    console.log('filtered: ', filteredProducts);
                    if (!filteredProducts.length) {
                        filteredProducts = productsList;
                    }
                    this.products = filteredProducts;
                } else {
                    this.products = productsList;
                }
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