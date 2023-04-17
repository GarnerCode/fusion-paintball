import { Product } from '@/interfaces/Product.interface';
import { defineStore } from 'pinia';

export const useGlobalStore = defineStore({
    id: 'GlobalStore',
    state: () => ({
        cartItems: [] as Product[],
    }),
    getters: {
        getCartItems: (state): Product[] => {
            return state.cartItems;
        },
    },
    actions: {
        setCartItems(payload: Product[]): void {
            this.cartItems = payload;
        },
    }
})