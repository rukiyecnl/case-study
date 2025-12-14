<script setup lang="ts">
    defineProps<{ icon: string }>()
</script>

<template>
  <button class="header-action" :class="[$attrs.class]">
    <img :src="icon" class="w-[17px] h-[15px]" />
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
        @apply font-sans text-[14px] text-white;
    }
</style>
