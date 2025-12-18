<script setup>
    import FeaturedTitleActionVue from '~/components/ui/FeaturedTitleAction.vue'; 
    import ButtonVue from '~/components/ui/Button.vue';
    const { featuredCategories } = useFeaturedCategories();
</script>
<template>
    <div class="py-[16px] xl:mx-[220px]" >
        <FeaturedTitleActionVue>Featured Categories</FeaturedTitleActionVue>
        <div class="container grid grid-cols-1 lg:grid-cols-2 gap-[16px]">
            <div 
                v-for="category in featuredCategories"    
            >
                <div class="relative " >
                    <img 
                        class="w-full h-[232px] lg:h-[280px] object-cover rounded-[6px]"
                        :src="category.image" 
                        alt="featuredCategory"
                    >
                    <div class="absolute inset-0 flex items-center justify-center 
                                hover:bg-black/20 transition-colors duration-300"
                    >
                        <div
                            class="flex justify-center items-center flex-col gap-[8px]
                                bg-white/90 m-[40px] lg:m-[64px] p-[16px] rounded-[6px]"
                        >
                            <p class="font-[700] text-[20px]">
                            {{ category.title }}
                            </p>

                            <p class="text-center font-[400] text-[14px]">
                            {{ category.description }}
                            </p>

                            <ButtonVue size="sm" color="green">
                            BROWSE
                            </ButtonVue>
                        </div>

                    </div>

                </div>
            

            </div>
        </div>
    </div>
</template>