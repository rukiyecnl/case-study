<script setup>
    import BasketCardVue from './BasketCard.vue';
</script>

<template>
    <div class="container lg:container-none">
        <h2 class="font-[500] text-[20px] my-[20px]">Shopping cart summary</h2>
        <BasketCardVue />
        <input 
            type="text" 
            placeholder="Discount Code"
            class="w-full border-[1px] rounded-[4px] py-[12px] px-[16px] my-4"
        >
        <div>
            <div class="flex justify-between items-center text-[#485363] text-[16px] font-[400] mb-4">
                <p class="">Subtotal</p>
                <p>
                    <span>74,40</span> TL
                </p>
            </div>
            <div class="flex justify-between items-center text-[#485363] text-[16px] font-[400] mb-4">
                <p>Shipping</p>
                <p>
                    <span>10,40</span> TL
                </p>
            </div>
        </div>
        <div class="flex justify-between items-center text-[20px] font-[700] border-t-[1px] border-[#ECECEC] py-4">
            <p>Total</p>
            <p>
                <span>10,40</span> TL
            </p>
        </div>
    </div>
</template>