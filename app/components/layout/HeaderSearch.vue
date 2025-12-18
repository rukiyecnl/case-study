<script setup lang="ts">
    import logo from '~/assets/images/logo.png'
    import search from '~/assets/images/search.png'
    import basketImg from '~/assets/images/basket.png'
    import hamburgerMenu from '~/assets/images/hamburgerMenu.png'
    import MenuModalVue from '../ui/MenuModal.vue'
    import downArrow from '~/assets/images/down.svg'
    import image from '~/assets/images/image.png'
    import { ref } from 'vue'

    const isOpen = ref(false)

    const { basket } = useBasket()

</script>

<template>
    <div class="container py-[22px] flex justify-between items-center">

        <NuxtLink to="/">
            <img class="w-[120px] h-[24px] lg:w-[146px] lg:h-[28px]" :src="logo" alt="">
        </NuxtLink>

        <div class="flex gap-4 items-center">
            <!-- Mobile: search icon -->
            <button class="md:hidden">
                <img :src="search" alt="Search" />
            </button>


            <!-- Desktop: search input -->
            <div class="hidden md:flex gap-2 items-center border-none rounded-full ml-3 px-3 py-3 text-sm bg-[#ECECEC4D]">
                <img :src="search" alt="" class="opacity-30 w-[16px] h-[16px]">
                <input
                    type="text"
                    placeholder="Write the product or category you are looking for"
                    class="xl:w-[512px] md:w-[300px] bg-transparent"
                />
            </div>

            <div class="hidden md:flex justify-between items-center gap-4">
                <div class="md:block text-center">
                    <span class="text-[#8493A8]">Hello,</span>
                    <span> Clara Clara</span>
                </div>
                <div class="flex justify-center items-center gap-4 border-r-[1px] pr-[16px]">
                    <img :src="image" alt="">
                    <button>
                        <img :src="downArrow" alt="">
                    </button>
                </div>
            </div>

            <NuxtLink to="/checkout">
                <div class="relative">
                    <div 
                        class="absolute right-[6px] -top-[3px] w-[16px] h-[16px] 
                                rounded-full bg-red-600 text-white font-[700]
                                flex items-center justify-center text-[10px]" 
                    >
                        {{ basket.length }}
                    </div>
                    <img :src="basketImg" alt="" class="p-2">
                </div>
            </NuxtLink>
 
            <button @click="isOpen = true"  class="md:hidden cursor-pointer">
                <img :src="hamburgerMenu" alt="">
            </button>

            <MenuModalVue :isOpen="isOpen" @close="isOpen = false" />

        </div>
    </div>
</template>