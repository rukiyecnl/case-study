<script setup lang="ts">
    const props = defineProps({
        icon: {
          type: String,
          required: true,
        },
    })
</script>

<template>
    <button class="btn-action" :class="[$attrs.class]">
        <span class="btn-action__text"> 
            <slot />
        </span>
        <img :src="icon" class="w-[17px] h-[15px]" />
    </button>
</template>



<style scoped>
    .btn-action {
        @apply flex items-center gap-[8px] justify-end py-[8px] border-b-[1px] last:border-b-0 border-[#ECECEC];
    }
    .btn-action__text {
        @apply font-sans text-[14px] text-[#485363];
    }
</style>
