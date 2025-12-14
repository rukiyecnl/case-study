<script setup lang="ts">
    defineProps<{ icon: string }>()
</script>

<template>
  <button class="header-action" :class="[$attrs.class]">
    <img :src="icon" class="w-[18px] h-[18px]" />
    <span class="header-action__text"> 
      <slot />
    </span>
  </button>
</template>



<style scoped>
    .header-action {
        @apply flex items-center gap-2;
    }
    .header-action__text {
        @apply font-sans text-lg text-white;
    }
</style>
