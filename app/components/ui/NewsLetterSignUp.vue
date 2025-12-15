<script setup>
    import ButtonVue from '~/components/ui/Button.vue';
</script>

<template>
    <div class="bg-[#F2F0FF]">
        <div class="container py-[16px] lg:flex justify-between items-center">
            <div class="mb-[16px]">
                <p class="font-[700] text-[20px] mb-[8px]">Sign up to our newsletter</p>
                <p class="text-[#2A2A4899] text-[14px]">Be the first to hear about the latest offers.</p>
            </div>
            <div class="flex gap-[16px]">
                <input class="bg-white flex-1 px-[16px] py-[12px] rounded-[4px] lg:w-[412px]" type="text" placeholder="Your email address">
                <ButtonVue size="md" color="pink">SUBSCRIBE</ButtonVue>
            </div>
        </div>
    </div>
</template>