<script setup lang="ts">
import  Deneme2Vue from '~/components/layout/Deneme2.vue';
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
