<template>
  <div class="home view-container">
    <Landing></Landing>
    <ProductCategories></ProductCategories>
  </div>
</template>

<script lang="ts">
  import { defineComponent } from 'vue';
  import Landing from '@/components/Landing.vue';
  import ProductCategories from '@/components/ProductCategories.vue';

  export default defineComponent({
    name: 'HomeView',
    components: {
      Landing,
      ProductCategories,
    }
  });
</script>
