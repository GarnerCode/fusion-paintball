<template>
  <Header></Header>
  <router-view/>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Header from './components/Header.vue';

  export default defineComponent({
    name: 'App',
    components: {
      Header,
    }
  })
</script>

<style lang="scss">
  @import '@/assets/styles.scss';
  @import url('https://fonts.googleapis.com/css2?family=Roboto&family=Roboto+Condensed&display=swap');

  :root {
    --color-primary: #f0177c;
    --color-black: #353535;
    --color-black-dark: #2b2b2b;
    --color-white: #fff;
    --color-white-dark: #cacaca;
    --color-red: #c92020;
    --color-green: #32c96c;

    --font-family-primary: 'Roboto', sans-serif;
    --font-family-secondary: 'Roboto Condensed', sans-serif;

    --box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.75), 0px 0px 15px rgba(0,0,0, 0.15);

    --border-radius: 5px;
  }
  * {
    font-family: var(--font-family-primary);
  }
  .text-highlight {
    color: var(--color-primary) !important;
  }
  @media screen and (min-width: 0px) {
    input {
      font-size: 16px;
      padding: 1rem;
    }
    select {
      font-size: 3rem;
      padding: 1rem;
      cursor: pointer;
      width: 100%;
    }
    .view-container {
      margin-top: 10rem;
      padding: 1rem 2rem;
    }
    .hidden-mobile {
      display: none;
    }
    .button {
      border: none;
      background-color: var(--color-primary);
      color: var(--color-white);
      font-size: 3rem;
      padding: 1rem 2rem;
      cursor: pointer;
      border-radius: var(--border-radius);
    }
  }
  @media screen and (min-width: 768px) {
    select {
      width: 50rem;
    }
    .hidden-mobile {
      display: block;
    }
    .hidden-tablet {
      display: none;
    }
  }
  @media screen and (min-width: 1024px) {
    select {
      font-size: 2rem;
      width: 25rem;
    }
    .view-container {
      padding: 1rem 15rem;
    }
    .button {
      font-size: 2rem;
    }
  }
  @media screen and (min-width: 1180px) {
    .view-container {
      padding: 1rem 18rem;
    }
    .button {
      max-width: 15rem;
    }
  }
</style>
