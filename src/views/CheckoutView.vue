<template>
    <div class="checkout-view view-container">
        <div class="disclaimer">This website is a demonstration using Vue.js. Information will not be submitted, and products will not be purchased.</div>
        <form @submit="(e) => handleSubmit(e)" class="checkout-form">

            <div class="form-fields">
                <div class="field">
                    <label class="field-label" for="firstName">First Name</label>
                    <input class="field-input" type="text" name="firstName">
                    <div v-if="v$.firstName.$error">First Name is Required</div>
                </div>

                <div class="field">
                    <label class="field-label" for="lastName">Last Name</label>
                    <input class="field-input" type="text" name="lastName">
                </div>

                <div class="field">
                    <label class="field-label" for="email">Email</label>
                    <input class="field-input" type="email" name="email">
                </div>

                <div class="field">
                    <label class="field-label" for="phone">Phone Number</label>
                    <input class="field-input" type="tel" name="phone">
                </div>
            </div>

            <div class="price-total">
                <span class="total-label">Order Total: </span>
                <span class="price">${{ globalStore.getPriceTotal() }}</span>
                <button class="button button-default place-order">Place Order</button>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import { useVuelidate } from '@vuelidate/core';
    import { required, email } from '@vuelidate/validators';
    import { useGlobalStore } from '@/store/global.store';

    export default defineComponent({
        name: 'CheckoutView',
        setup () {
            return { v$: useVuelidate() }
        },
        data() {
            return {
                globalStore: useGlobalStore(),
                userInput: {
                    firstName: null,
                    lastName: null,
                    email: null,
                    phone: null,
                },
            }
        },
        validations() {
            return {
                firstName: { required },
                lastName: { required },
                email: { required, email },
                phone: { required },
            }
        },
        methods: {
            async handleSubmit(e: Event): Promise<void> {
                e.preventDefault();
                const isValid = await this.v$.$validate();
                if (!isValid) return;
                alert('Thank you for your purchase!');
            }
        }
    })
</script>

<style lang="scss">
    @media screen and (min-width: 0px) {
        .checkout-view {
            .disclaimer {
                text-align: center;
                color: red;
                font-size: 12px;
                font-style: italic;
            }
            .checkout-form {
                margin: 2rem 0;
            }
            .form-fields {
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                gap: 3rem;
                margin: 2rem 0;
            }
            .field-label {
                display: block;
                font-size: 3rem;
                font-family: var(--font-family-secondary);
            }
            .field-input {
                display: block;
                width: calc(100vw - 7rem);
            }
            .price-total {
                font-size: 3rem;
                .total-label {
                    font-family: var(--font-family-secondary);
                }
                .price {
                    font-weight: bold;
                }
                .place-order {
                    display: block;
                    margin-top: 2rem;
                }
            }
        }
    }
    @media screen and (min-width: 768px) {
        .checkout-view {
            .form-fields {
                align-items: center;
            }
            .field {
                width: 50rem;
            }
            .field-input {
                width: 100%;
            }
            .price-total {
                width: 50rem;
                margin: 0 auto;
            }
        }
    }
    @media screen and (min-width: 1180px) {
        .checkout-view {
            .field-label {
                font-size: 2rem;
            }
            .field-input {
                font-size: 16px;
            }
        }
    }
</style>