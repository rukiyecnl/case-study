<script setup lang="ts">
  import HeaderVue from '~/components/layout/Header.vue';
  import HeaderSearchVue from '~/components/layout/HeaderSearch.vue';
  import CategoriesVue from '~/components/layout/Categories.vue';
  import FooterVue from '~/components/layout/Footer.vue';

</script>

<template>
  <div class="min-h-screen flex flex-col">
    <HeaderVue />
    
    <HeaderSearchVue />

    <CategoriesVue />

    <main class="flex-1">
      <slot />
    </main>

    <FooterVue />

  </div>
</template>
