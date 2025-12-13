<script setup lang="ts">
    import logo from '~/assets/images/logo.png'
    import search from '~/assets/images/search.png'
    import basket from '~/assets/images/basket.png'
    import hamburgerMenu from '~/assets/images/hamburgerMenu.png'
    import MenuModalVue from '../ui/MenuModal.vue'
    import { ref } from 'vue'

    const isOpen = ref(false)
</script>

<template>
    <div class="container py-[22px] flex justify-between items-center">
        <img class="w-[120px] h-[24px] lg:w-[146px] lg:h-[28px]" :src="logo" alt="">

        <div class="flex gap-8 items-center">
            <!-- Mobile: search icon -->
            <button class="md:hidden">
                <img :src="search" alt="Search" />
            </button>


            <!-- Desktop: search input -->
            <div class="hidden md:flex gap-2 items-center border-none rounded-full px-3 py-3 text-sm bg-[#ECECEC4D]">
                <img :src="search" alt="" class="opacity-30 w-[16px] h-[16px]">
                <input
                    type="text"
                    placeholder="Write the product or category you are looking for"
                    class="xl:w-[512px] md:w-[300px] bg-transparent"
                />
            </div>

            <p class="hidden md:block"><span class="text-[#8493A8]">Hello,</span><span> Clara Clara</span></p>

            <button>
                <img :src="basket" alt="">
            </button>

            <button @click="isOpen = true"  class="md:hidden cursor-pointer">
                <img :src="hamburgerMenu" alt="">
            </button>

            <MenuModalVue :isOpen="isOpen" @close="isOpen = false" />

        </div>
    </div>
</template>