<script setup>
    const props = defineProps({
        icon: {
          type: String,
          required: false,
        },
    })
</script>

<template>
    <div class="sub-container flex gap-4 items-center py-[20px]">
        <div class="bg-[#ECECEC4D] p-[6px] rounded-[4px] border-[1px] border-[#ECECEC]">
            <img 
                :src="icon" 
                class="w-[20px] h-[20px]"
                alt="">
        </div>
        <p class="font-[500] text-[20px]">
            <slot />
        </p>
    </div>

</template>