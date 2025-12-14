<script setup lang="ts">
  import HeaderSearchVue from '~/components/layout/HeaderSearch.vue';
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <LayoutHeader />
    <HeaderSearchVue />

    <main class="flex-1">
      <slot />
    </main>

    <LayoutFooter />

  </div>
</template>
