<script setup>
    import { formattedValues } from '~/utils/format'
    const { basket } = useBasket()

</script>

<template>
    <div class="flex flex-col gap-4 ">
        <div 
            v-for="item in basket"
            class="flex items-center justify-start border-[1px] border-[#ECECEC80] rounded-[6px] shadow-sm"
        >
            <img
                :src="item.thumbnail"
                class="h-[116px] lg:flex-[1]" 
                alt="">
            <div class="p-2 flex flex-col gap-2 justify-between flex-[2]">
                <h2 class="font-[500] text-[15px]">{{ item.title }}</h2>
                <div class="flex justify-between items-center xl:gap-[50px] gap-3">
                    <p class="font-[400] text-[14px] text-[#485363]">{{ formattedValues(item.price) }} TL</p>
                    <div class="flex gap-3 items-center">
                        <button class="bg-[#ECECEC4D] font-[600] w-[24px] h-[24px] rounded-[4px]">+</button>
                        <div class="font-[500] text-[16px]">1</div>
                        <button class="bg-[#ECECEC4D] font-[600] w-[24px] h-[24px]  rounded-[4px]">-</button>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>