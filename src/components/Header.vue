<template>
    <header>
        <div class="toggle-nav" @click="toggleNav = !toggleNav">
            <font-awesome-icon :icon="['fas', 'bars']" v-if="!toggleNav" />
            <font-awesome-icon :icon="['fas', 'xmark']" v-if="toggleNav"/>
        </div>
        <div class="logo" @click="$router.push('/')">
            <span class="text-highlight">Fusion</span> Paintball
        </div>
        <nav>
            <ul class="nav-list desktop-nav">
                <input v-model="searchValue" class="nav-search" type="text" v-on:keyup.enter="searchProduct()" placeholder="Search">
                <li 
                    class="nav-item"
                    v-for="(item, index) of navItems" 
                    :key="index"
                >
                    <router-link :class="{'text-highlight': item.label === 'All Products'}" :to="item.route">{{ item.label }}</router-link>
                </li>
            </ul>
        </nav>
        <div class="cart-button">
            <router-link to="/cart">
                <font-awesome-icon :icon="['fas', 'cart-shopping']" />
                <!-- <span class="cart-count">5</span> -->
                <div v-if="globalStore.getCartItems.length" class="cart-count">{{ globalStore.getCartItems.length }}</div>
            </router-link>
        </div>
        <ul class="nav-list mobile-nav" v-if="toggleNav">
            <input v-model="searchValue" class="nav-search" type="text" v-on:keyup.enter="searchProduct()" placeholder="Search">
            <li 
                @click="toggleNav = !toggleNav" 
                class="nav-item"
                v-for="(item, index) of navItems" 
                :key="index"
            >
                <router-link :class="{'text-highlight': item.label === 'All Products'}" :to="item.route">{{ item.label }}</router-link>
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
                this.toggleNav = false;
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
            box-shadow: var(--box-shadow);
            .logo {
                font-size: 3rem;
                font-family: var(--font-family-secondary);
                font-weight: bold;
                cursor: pointer;
            }
            nav {
                display: none;
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
    @media screen and (min-width: 1024px) {
        header {
            .toggle-nav {
                display: none;
            }
            nav {
                display: block;
                .desktop-nav {
                    list-style: none;
                    padding: 0;
                    display: flex;
                    flex-direction: row;
                    justify-content: center;
                    align-items: center;
                    gap: 3rem;
                    .nav-item {
                        a {
                            font-size: 16px;
                            text-decoration: none;
                            color: var(--color-black);
                            &:hover {
                                color: var(--color-primary);
                            }
                        }
                    };
                }
            }
        }
    }
    @media screen and (min-width: 1400px) {
        header {
            .cart-button {
                font-size: 2rem;
                a {
                    .cart-count {
                        font-size: 1rem;
                        width: 2rem;
                        height: 2rem;
                    }
                }
            }
        }
    }
</style>