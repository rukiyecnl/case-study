<script setup>  
    import basketWhite from '~/assets/images/basketWhite.png'
    import ButtonWithIconVue from '~/components/ui/ButtonWithIcon.vue';
    import view from '~/assets/images/view.png'

    const { data, pending, error } = await useProducts();
    
  
</script>
<template>
        <div class="container" v-if="data?.products">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-[16px] mb-[16px]">
                <div
                    v-for="product in data.products"
                    :key="product.id"
                    class="group relative border-[1px] border-[#ECECEC80] rounded-[6px] shadow-sm md:mb-[40px]"
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
                        class=" 
                            hidden
                            md:flex
                            absolute inset-0 items-center justify-center
                            opacity-0
                            group-hover:opacity-100
                            transition-opacity duration-300"
                    >
                        <div class="flex w-full justify-between bg-[#000000CC] py-[12px] px-[16px]">
                            <ButtonWithIconVue :icon="view" class="xl:px-[16px] md:px-[8px]">Quick View</ButtonWithIconVue>
                            <ButtonWithIconVue :icon="basketWhite" class="border-l-2 xl:px-[24px] md:px-[8px]">Add</ButtonWithIconVue>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>