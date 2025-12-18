<script setup>
    import '@splidejs/splide/dist/css/splide.min.css'
    import mainImage from '~/assets/images/imgWrapper.png'
    import mainImageDesktop from '~/assets/images/desktopImgWrapper.png'
    import { Splide, SplideSlide } from '@splidejs/vue-splide'
    import ButtonVue from './Button.vue';

    const {slides} = useSlidesData();
</script>

<template>
    <div class="useGradiant">
        <div class="">
            <Splide
                class="hero-slider"
                :options="{
                    type: 'loop',
                    perPage: 1,
                    gap: '1rem',
                    drag: true,   
                    pagination: true,
                    arrows: true,
                    breakpoints: { 768: { arrows: false, drag: true  } }
                }"
            >
                <SplideSlide v-for="(slide, index) in slides" :key="index">
                    <div class="container flex flex-col md:flex-row-reverse items-center px-0">
                        <img :src="mainImage" alt="" class="w-full md:hidden">
                        <img :src="mainImageDesktop" alt="" class="hidden md:block ">

                        <div class="flex flex-col gap-[16px] lg:block">
                            <div class="lg:mb-4">
                                <p class="text-[#8493A8] text-[13px]">{{ slide.brand }}</p>
                                <p class="text-[#2A2A48] font-bold sm:text-[24px] lg:text-[34px] ">{{ slide.collection }}</p>
                            </div>
                            <p class="text-[#485363] text-[16px] lg:mb-5">{{ slide.description }}</p>
                            <ButtonVue size="sm" color="pink">SHOP NOW</ButtonVue>
                        </div>
                    </div>
                </SplideSlide>
            </Splide>

        </div>
    </div>

</template>