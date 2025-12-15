<script setup lang="ts">
    type Size = 'sm' | 'md' | 'lg'
    type Color = 'pink' |  'green'

    defineProps<{
        size?: Size
        color?: Color
    }>()
</script>

<template>
    <button
        class="btn"
        :class="{
            [`btn--${size}`]: size,
            [`btn--${color}`]: color
        }"
    >
        <slot />
    </button>
</template>

<style scoped>
    .btn {
        @apply text-white rounded-[4px] font-[700] text-[14px] transition;
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

    .btn--pink {
        @apply bg-[#FF27AD]
    }

    .btn--green {
        @apply bg-[#0099A8]
    }
</style>
