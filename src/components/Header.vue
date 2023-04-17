<template>
    <header>
        <div class="toggle-nav" @click="toggleNav = !toggleNav">
            <font-awesome-icon :icon="['fas', 'bars']" v-if="!toggleNav" />
            <font-awesome-icon :icon="['fas', 'xmark']" v-if="toggleNav"/>
        </div>
        <div class="logo" @click="$router.push('/')">
            <span class="text-highlight">Fusion</span> Paintball
        </div>
        <div class="cart-button">
            <router-link to="/cart">
                <font-awesome-icon :icon="['fas', 'cart-shopping']" />
                <!-- <span class="cart-count">5</span> -->
                <div v-if="globalStore.getCartItems.length" class="cart-count">{{ globalStore.getCartItems.length }}</div>
            </router-link>
        </div>
        <ul class="nav-list mobile-nav" v-if="toggleNav">
            <input v-model="searchValue" class="nav-search" type="text" v-on:keyup.enter="searchProduct()" placeholder="Search">
            <li @click="toggleNav = !toggleNav" class="nav-item" v-for="(item, index) of navItems" :key="index">
                <router-link :to="item.route">{{ item.label }}</router-link>
            </li>
        </ul>
        <div v-if="toggleNav" @click="toggleNav = !toggleNav" class="mobile-nav-overlay"></div>
    </header>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { useGlobalStore } from '@/store/global.store';
    import { navItems } from '@/constants/navItems';

    export default defineComponent({
        name: 'Header',
        data() {
            return {
                globalStore: useGlobalStore(),
                navItems,
                toggleNav: false,
                searchValue: '',
            }
        },
        methods: {
            searchProduct(): void {
                this.$router.push(`/products/${this.searchValue}`);
                this.searchValue = '';
                this.toggleNav = !this.toggleNav;
            }
        }
    });
</script>

<style lang="scss">
    @media screen and (min-width: 0px) {
        header {
            background-color: var(--color-white);
            color: var(--color-black);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 2rem;
            position: fixed;
            top: 0;
            width: calc(100vw - 4rem);
            .logo {
                font-size: 3rem;
                font-family: var(--font-family-secondary);
                font-weight: bold;
                cursor: pointer;
            }
            .mobile-nav {
                list-style: none;
                padding: 0;
                padding: 2rem;
                margin: 0;
                height: 100vh;
                position: fixed;
                z-index: 5;
                top: 0;
                left: 0;
                background-color: var(--color-white);
                .nav-item {
                    padding: 1rem 0;
                    a {
                        text-decoration: none;
                        color: var(--color-black);
                        font-size: 3rem;
                    }
                }
                .nav-search {
                    font-size: 16px;
                    padding: 1rem;
                }
            }
            .mobile-nav-overlay {
                width: 100vw;
                height: 100vh;
                background-color: rgba(0,0,0,0.5);
                position: fixed;
                top: 0;
                backdrop-filter: blur(5px);
            }
            .cart-button {
                font-size: 3rem;
                a {
                    color: var(--color-white);
                    text-decoration: none;
                    display: flex;
                    flex-direction: row;
                    gap: 0.5rem;
                    .cart-count {
                        background-color: var(--color-red);
                        width: 3rem;
                        height: 3rem;
                        border-radius: 100px;
                        font-size: 2rem;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                    }
                    svg {
                        color: var(--color-black);
                    }
                }
            }
            .toggle-nav {
                font-size: 5rem;
                width: 5rem;
            }
        }
    }
</style>