<script setup>
    import CollectionSlider from '~/components/ui/CollectionSlider.vue';
    import FeaturedTitleActionVue from '~/components/ui/FeaturedTitleAction.vue';   
    import CardVue from '~/components/ui/Card.vue';
    import NewsLetterSignUpVue from '~/components/ui/NewsLetterSignUp.vue';
    import mobileBanner from "~/assets/images/mobileBanner.png"
    import desktopBanner from "~/assets/images/desktopBanner.png"
    import FeaturedCategoriesVue from '~/components/ui/FeaturedCategories.vue';

    definePageMeta({
        layout: 'default'
    })

</script>

<template>
    <CollectionSlider />
    <div class="my-[40px]">
        <FeaturedTitleActionVue>Featured Products</FeaturedTitleActionVue>
        <CardVue />
        <NewsLetterSignUpVue />
        <div>
            <a href="#" class="md:hidden w-full cursor-pointer">
                <img class="w-full" :src="mobileBanner" alt="">
            </a>
            <a href="#" class="hidden md:block w-full cursor-pointer">
                <img class="w-full" :src="desktopBanner" alt="">
            </a>
        </div>
        <FeaturedCategoriesVue />
    </div>


</template>
