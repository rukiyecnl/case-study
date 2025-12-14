<script setup lang="ts">
    type Size = 'sm' | 'md' | 'lg'

    defineProps<{
        size?: Size
    }>()
</script>

<template>
    <button
        class="btn"
        :class="size && `btn--${size}`"
    >
        <slot />
    </button>
</template>

<style scoped>
    .btn {
    @apply bg-[#FF27AD] text-white rounded-[4px] font-[700] text-[14px] transition;
    }

    .btn--sm {
    @apply px-[16px] py-[8px] text-sm;
    }

    .btn--md {
    @apply px-[28px] py-[16px];
    }

    .btn--lg {
    @apply px-6 py-4 text-lg;
    }
</style>
