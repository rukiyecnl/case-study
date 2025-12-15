<script setup>
    const props = defineProps({
        icon: {
          type: String,
          required: true,
        },
    })
</script>

<template>
    <div>
        <img :src="icon" alt="">
        <p>
            <slot/>
        </p>
    </div>
</template>