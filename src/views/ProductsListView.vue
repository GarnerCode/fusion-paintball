<template>
    <div class="products-list-view view-container">
        <select v-model="selectedSortMethod" @change="sortProducts()" class="filter-selections">
            <option v-for="(option, index) of sortMethods" :key="index" :value="option">{{ option }}</option>
        </select>
        <div class="products-count">
            {{ products.length }} Available Products
        </div>
        <div class="products-list" v-if="products.length">
            <ProductCard
                v-for="(product, index) of products"
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

    export default defineComponent({
        name: 'ProductsListView',
        data() {
            return {
                products: [] as Product[],
                selectedSortMethod: 'A-Z' as string,
                sortMethods: [
                    'A-Z',
                    'Price Low to High',
                    'Price High to Low',
                ],
            }
        },
        components: {
            ProductCard,
        },
        mounted() {
            this.filterProductsByParam();
            this.sortProducts();
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
                let filteredProducts: Product[] = [];
                if (param.length) {
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
                    if (!filteredProducts.length) {
                        filteredProducts = productsList;
                    }
                    this.products = filteredProducts;
                } else {
                    this.products = productsList;
                }
            },
            sortProducts(): void {
                console.log('Sorting products');
                console.log('Selected sort method: ', this.selectedSortMethod);
                if (this.selectedSortMethod === this.sortMethods[0]) {
                    this.products = this.products.sort((a: Product, b: Product) => {
                        return a.name.localeCompare(b.name);
                    });
                } else if (this.selectedSortMethod === this.sortMethods[1]) {
                    this.products = this.products.sort((a: Product, b: Product) => {
                        return a.price - b.price
                    });
                } else if (this.selectedSortMethod === this.sortMethods[2]) {
                    this.products = this.products.sort((a: Product, b: Product) => {
                        return b.price - a.price
                    });
                }
                console.log('Products sorted: ', this.products);
            }
        }
    });
</script>

<style lang="scss">
    @media screen and (min-width: 0px) {
        .products-list {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            gap: 3rem;
        }
        .products-count {
            margin-top: 2rem;
            font-size: 2rem;
        }
    }
    @media screen and (min-width: 768px) {
        .products-list {
            flex-direction: row;
            flex-wrap: wrap;
        }
    }
    @media screen and (min-width: 1200px) {
        .products-list {
            justify-content: flex-start;
            margin-top: 3rem;
        }
    }
</style>