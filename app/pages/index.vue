<script setup>
    import CollectionSlider from '~/components/ui/CollectionSlider.vue';
    import FeaturedTitleActionVue from '~/components/ui/FeaturedTitleAction.vue';   
    import basketWhite from '~/assets/images/basketWhite.png'
    import ButtonWithIconVue from '~/components/ui/ButtonWithIcon.vue';
    import view from '~/assets/images/view.png'

    definePageMeta({
        layout: 'default'
    })

    const { data, pending, error } = await useProducts();
    
    
</script>

<template>
    <CollectionSlider />
    
    <div class="container my-[40px]">
        <FeaturedTitleActionVue>Featured Products</FeaturedTitleActionVue>

            
        <div v-if="data?.products">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-[16px]">
                <div
                    v-for="product in data.products"
                    :key="product.id"
                    class="group relative border-[1px] border-[#ECECEC80] rounded-[6px] box-shadow: 0px 1px 8px 0px #0000000A;"
                >
                    <img
                        class="w-full h-[208px] object-contain"
                        :src="product.thumbnail"
                        alt="mainImage"
                    />
                    <div class="m-[16px]">
                        <p class="text-[16px] font-[700] mb-[8px]">{{ product.price }} TL</p>
                        <p class="text-[#485363] text-[14px]">{{ product.title }}</p>
                    </div>
                    <div class="md:hidden flex justify-center border-t-2 border-[#ECECEC80]">
                        <ButtonWithIconVue 
                            :icon="basketWhite" 
                            class="bg-[#FF27AD] m-[16px] text-center py-[8px] px-[40px] rounded-[4px]"
                        >
                            ADD
                        </ButtonWithIconVue>
                    </div>
                    <!-- Hover Butonu -->
                    <div
                        class="absolute inset-0 flex items-center justify-center
                            opacity-0
                            group-hover:opacity-100
                            transition-opacity duration-300"
                    >
                        <div class="flex w-full bg-[#000000CC] p-[16px]">
                            <ButtonWithIconVue :icon="view">Quick View</ButtonWithIconVue>
                            <ButtonWithIconVue :icon="basketWhite" >Add</ButtonWithIconVue>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <FeaturedTitleActionVue>Featured Categories</FeaturedTitleActionVue>

    </div>


</template>
