<script setup lang="ts">
    const props = defineProps({
        icon: {
          type: String,
          required: false,
        },
    })
    const emit = defineEmits(['click'])
</script>

<template>
  <button 
      @click="emit('click')"
      class="btn-action" 
      :class="[$attrs.class]"
  >
      <img v-if="icon" :src="icon" class="w-[17px] h-[15px]" />
      <span class="btn-action__text"> 
        <slot />
      </span>
  </button>
</template>



<style scoped>
    .btn-action {
        @apply flex items-center gap-2;
    }
    .btn-action__text {
        @apply font-sans text-[14px] text-white;
    }
</style>
