<script setup>
    import mainImage from "../assets/images/imgWrapper.png"
    import mainImageDesktop from "../assets/images/desktopImgWrapper.png"
    definePageMeta({
        layout: 'default'
    })
</script>

<template>
    <div class="useGradiant ">
        <div class="container flex flex-col md:flex-row-reverse items-center px-0">

            <img :src="mainImage" alt="" class="w-full md:hidden">
            <img :src="mainImageDesktop" alt="" class="hidden md:block ">

            <div class="flex flex-col gap-[16px] lg:block">
                <div class="lg:mb-4">
                    <p class="text-[#8493A8] text-[12px]">Naturals By Watsons</p>
                    <p class="text-[#2A2A48] font-bold text-[24px] ">The new 2021 collection</p>
                </div>
                <p class="text-[#485363] text-[16px] lg:mb-5">Known as "the miracle plant", Aloe Vera helps to nourish, 
                    moisturize and keep the hair looking smooth. Let your hair be flexible and fresh.
                </p>
                <button class="bg-[#FF27AD] rounded-[4px] px-[16px] py-[4px] mb-6 text-white">SHOP NOW</button>
            </div>
        </div>
    </div>

    <div class="w-full overflow-x-auto scrollbar-hide">
        <div class="flex gap-4 px-4">
            <div class="flex-none w-full h-40 bg-blue-400 rounded-lg">Slide 1</div>
            <div class="flex-none w-full h-40 bg-red-400 rounded-lg">Slide 2</div>
            <div class="flex-none w-full h-40 bg-green-400 rounded-lg">Slide 3</div>
            <div class="flex-none w-full h-40 bg-yellow-400 rounded-lg">Slide 4</div>
        </div>
    </div>

</template>